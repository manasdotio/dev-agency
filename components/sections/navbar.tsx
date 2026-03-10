import { AssetImage } from "@/components/shared/asset-image";

export function Navbar() {
  return (
    <>
      <div className="div-block-47">
        <div className="navbar-logo-left">
          <div
            data-animation="default"
            data-collapse="medium"
            data-duration="400"
            data-easing="ease"
            data-easing2="ease"
            role="banner"
            className="navbar-logo-left-container shadow-three w-nav"
          >
            <div data-w-id="03b7d350-5f42-547a-b4d6-be27ef8aff04" className="navbar-wrapper-3">
              <div className="div-block-2">
                <a href="/" aria-current="page" className="navbar-brand-2 w-nav-brand w--current">
                  <AssetImage
                    priority
                    src="/images/69afb0934a0a9b77eaf02483_Frame%202.png"
                    alt="Awake"
                    width={164}
                    height={42}
                  />
                </a>
              </div>

              <ul role="list" className="nav-menu-two-2 w-list-unstyled">
                <li className="list-item-14">
                  <a href="#home" className="nav-link-4">
                    Home
                  </a>
                  <a href="#about-us" className="nav-link-4">
                    About us
                  </a>
                  <a href="#services" className="nav-link-4">
                    Services
                  </a>
                  <a href="#work" className="nav-link-4">
                    Work
                  </a>
                  <a href="#team" className="nav-link-4">
                    Team
                  </a>
                  <a href="#pricing" className="nav-link-4">
                    Pricing
                  </a>
                  <a href="#award" className="nav-link-4">
                    Awards
                  </a>
                </li>
              </ul>

              <div className="div-block-50">
                <div data-w-id="03b7d350-5f42-547a-b4d6-be27ef8aff17" className="div-block-53">
                  <img
                    data-w-id="03b7d350-5f42-547a-b4d6-be27ef8aff18"
                    loading="lazy"
                    alt="menu-icon"
                    src="/images/69afb0934a0a9b77eaf024d6_menu-icon.svg"
                    className="image-28"
                  />
                </div>

                <a data-w-id="fd288f42-3e11-14d5-988f-4ecf39ac68a1" href="/contact" className="c2a-button w-inline-block">
                  <div className="text-block-5">Let&apos;s Collaborate</div>
                  <div className="btn-icon">
                    <img
                      src="/images/69afb0934a0a9b77eaf02490_arrow-top-right.png"
                      loading="lazy"
                      width="8"
                      height="8"
                      alt=""
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mobile-menu-overlay" />

        <div className="div-block-29">
          <div className="div-block-54">
            <div className="div-block-51">
              <div className="div-block-49">
                <p className="paragraph-10">Menu</p>
                <img
                  data-w-id="03b7d350-5f42-547a-b4d6-be27ef8aff21"
                  loading="lazy"
                  alt="close-icon"
                  src="/images/69afb0934a0a9b77eaf024d7_cross-black.svg"
                  className="image-9"
                />
              </div>

              <ul role="list" className="list-6">
                <li className="list-item-11">
                  <a href="#home" data-w-id="dfe9cf34-6fbd-1abd-f2e5-f3543201f30d" className="link-6">
                    Home
                  </a>
                </li>
                <li className="list-item-11">
                  <a href="#about-us" className="link-6">
                    About
                  </a>
                </li>
                <li className="list-item-12">
                  <a href="#services" data-w-id="03b7d350-5f42-547a-b4d6-be27ef8aff27" className="link-6">
                    Services
                  </a>
                </li>
                <li className="list-item-13">
                  <a href="#work" data-w-id="03b7d350-5f42-547a-b4d6-be27ef8aff2a" className="link-6">
                    Work
                  </a>
                </li>
                <li className="list-item-10">
                  <a href="#team" data-w-id="03b7d350-5f42-547a-b4d6-be27ef8aff2d" className="link-6">
                    Team
                  </a>
                </li>
                <li className="list-item-13">
                  <a href="#pricing" data-w-id="03b7d350-5f42-547a-b4d6-be27ef8aff30" className="link-6">
                    Pricing
                  </a>
                </li>
                <li className="list-item-13">
                  <a href="#award" data-w-id="03b7d350-5f42-547a-b4d6-be27ef8aff33" className="link-6">
                    Award
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}