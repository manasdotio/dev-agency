import { brandLogos } from "@/lib/site-data";

export function BrandStrip() {
  return (
    <section className="home-logo-section">
      <div className="w-layout-blockcontainer logo-sec-container w-container">
        <div className="brand-txt">
          <div className="left-divider" />
          <p className="divider-with-text">Loved by 100,00+ big and small brands around the worlds</p>
          <div className="right-divider" />
        </div>

        <div className="logo-section">
          <div data-w-id="64489176-8b33-5138-532b-2d14056b4b3e" className="marquee_wrap">
            {[0, 1].map((group) => (
              <div key={group} className="static-marquee_logos">
                {brandLogos.map((logo, index) => (
                  <img key={`${group}-${index}`} width="260" loading="eager" alt="logo" src={logo} className="logo-2" />
                ))}
              </div>
            ))}
          </div>
          <div className="left-overlay-div" />
          <div className="right-overlay-div" />
        </div>
      </div>
    </section>
  );
}