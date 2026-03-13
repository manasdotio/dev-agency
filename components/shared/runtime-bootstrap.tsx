"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    WebFont?: {
      load: (config: {
        google: {
          families: string[];
        };
      }) => void;
    };
    __awakeLenisCleanup?: () => void;
    gsap?: {
      ticker?: {
        add: (callback: (time: number) => void) => void;
        remove: (callback: (time: number) => void) => void;
        lagSmoothing: (threshold: number) => void;
      };
    };
    ScrollTrigger?: {
      update: () => void;
    };
  }
}

const vendorScripts = [
  "/vendor/jquery-3.5.1.min.dc5e7f18c8.js",
  "/vendor/countup.js",
  "/vendor/gsap.min.js",
  "/vendor/SplitText.min.js",
  "/vendor/ScrollTrigger.min.js",
  "/vendor/webflow.schunk.36b8fb49256177c8.js",
  "/vendor/webflow.schunk.bd6972bf39a835cd.js",
  "/vendor/webflow.994ddc64.748409a2013fd8b7.js"
];

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`);

    if (existing) {
      if (existing.dataset.loaded === "true") {
        resolve();
        return;
      }

      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener(
        "error",
        () => reject(new Error(`Failed to load script: ${src}`)),
        { once: true }
      );
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.dataset.awakeRuntime = "true";
    script.addEventListener("load", () => {
      script.dataset.loaded = "true";
      resolve();
    });
    script.addEventListener("error", () => reject(new Error(`Failed to load script: ${src}`)));
    document.body.appendChild(script);
  });
}

function prepareDocument() {
  const root = document.documentElement;
  const maybeDocumentTouch = (window as Window & {
    DocumentTouch?: new () => Document;
  }).DocumentTouch;

  root.classList.add("w-mod-js");
  root.setAttribute("data-wf-domain", "times-marvelous-site-029ff4.webflow.io");
  root.setAttribute("data-wf-page", "69afb0934a0a9b77eaf02474");
  root.setAttribute("data-wf-site", "69afb0914a0a9b77eaf02433");
  root.setAttribute("data-wf-status", "1");

  if ("ontouchstart" in window || (maybeDocumentTouch && document instanceof maybeDocumentTouch)) {
    root.classList.add("w-mod-touch");
  }
}

async function initLenis() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return () => undefined;
  }

  const { default: Lenis } = await import("lenis");
  const lenis = new Lenis({
    duration: 1,
    smoothWheel: true,
    wheelMultiplier: 0.85,
    touchMultiplier: 1,
    lerp: 0.08
  });

  lenis.on("scroll", () => {
    window.ScrollTrigger?.update();
  });

  const gsapTicker = window.gsap?.ticker;

  if (gsapTicker) {
    const onTick = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsapTicker.add(onTick);
    gsapTicker.lagSmoothing(0);

    return () => {
      gsapTicker.remove(onTick);
      lenis.destroy();
    };
  }

  let frameId = 0;

  const frame = (time: number) => {
    lenis.raf(time);
    frameId = window.requestAnimationFrame(frame);
  };

  frameId = window.requestAnimationFrame(frame);

  return () => {
    window.cancelAnimationFrame(frameId);
    lenis.destroy();
  };
}

export function RuntimeBootstrap() {
  useEffect(() => {
    let cancelled = false;

    prepareDocument();

    const boot = async () => {
      const lenisCleanup = await initLenis();

      if (cancelled) {
        lenisCleanup();
        return;
      }

      window.__awakeLenisCleanup = lenisCleanup;

      await loadScript("/vendor/webfont.js");

      if (cancelled) {
        return;
      }

      window.WebFont?.load({
        google: {
          families: ["Instrument Serif:300,400,500,600,700", "Inter Tight:300,400,500,600,700"]
        }
      });

      for (const src of vendorScripts) {
        await loadScript(src);
        if (cancelled) {
          return;
        }
      }
    };

    void boot();

    return () => {
      cancelled = true;
      window.__awakeLenisCleanup?.();
      window.__awakeLenisCleanup = undefined;
    };
  }, []);

  return null;
}