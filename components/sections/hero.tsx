import { AssetImage } from "@/components/shared/asset-image";

export function Hero() {
  return (
    <section id="home" className="section">
      <div className="w-layout-blockcontainer container-main w-container">
        <h1 className="hero-heading-h1">
          Building bold brands with <span className="italic-span typing-text">thoughtful design</span>
        </h1>

        <p data-w-id="aca08924-3373-f5fc-69ef-f496c3c5cc2e" style={{ opacity: 0 }} className="para-txt">
          At Awake, we help small startups tackle the world&apos;s biggest challenges with tailored
          solutions, guiding you from strategy to success in a competitive market.
        </p>

        <div className="w-layout-grid grid-21">
          <div className="getstarted-btn">
            <a data-w-id="eecee728-f47b-6730-11f5-5b63546b3fc7" href="/contact" className="button w-inline-block">
              <div className="text-block-6">Get Started</div>
              <div className="arrow-div">
                <img
                  src="/images/69afb0934a0a9b77eaf02490_arrow-top-right.png"
                  loading="lazy"
                  width="18"
                  height="18"
                  alt="arrow-top"
                  className="arrow-img"
                />
              </div>
            </a>
          </div>

          <div className="avatar-wrapper">
            <div className="avatar-block">
              <AssetImage src="/images/69afb0934a0a9b77eaf0248e_Ellipse%2021.jpg" loading="lazy" width={40} height={40} alt="avatar-1" className="avatar-img" />
              <AssetImage src="/images/69afb0934a0a9b77eaf0248f_Ellipse%2022.jpg" loading="lazy" width={40} height={40} alt="avatar-2" className="avatar-img" />
              <AssetImage src="/images/69afb0934a0a9b77eaf0248d_Ellipse%2023.jpg" loading="lazy" width={40} height={40} alt="avatar-3" className="avatar-img" />
              <AssetImage src="/images/69afb0934a0a9b77eaf0248c_Ellipse%2024.jpg" loading="lazy" width={40} height={40} alt="avatar-4" className="avatar-img" />
            </div>

            <div className="rating-div">
              <img loading="lazy" width="14" height="14" src="/images/69afb0934a0a9b77eaf024fa_star-icon.svg" alt="star-icon" className="star-icon" />
              <img loading="lazy" width="14" height="14" src="/images/69afb0934a0a9b77eaf024fa_star-icon.svg" alt="star-icon" className="star-icon" />
              <img loading="lazy" width="14" height="14" src="/images/69afb0934a0a9b77eaf024fa_star-icon.svg" alt="star-icon" className="star-icon" />
              <img loading="lazy" width="14" height="14" src="/images/69afb0934a0a9b77eaf024fa_star-icon.svg" alt="star-icon" className="star-icon" />
              <img loading="lazy" width="14" height="14" src="/images/69afb0934a0a9b77eaf024f9_star-half-icon.svg" alt="star-icon" className="star-half-icon" />
              <p className="trusted-text">Trusted by 200+ clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}