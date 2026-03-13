import { AssetImage } from "@/components/shared/asset-image";
import { workItems } from "@/lib/site-data";

export function WorkShowcase() {
  const firstColumn = workItems.filter((item) => item.wrapperClass === "div-block-212");
  const secondColumn = workItems.filter((item) => item.wrapperClass === "div-block-213");

  const renderCard = (item: (typeof workItems)[number], id: string) => (
    <div key={item.title} data-w-id={id} style={{ opacity: 0 }} className={item.cardClass}>
      <div data-w-id="30921add-b727-7bcb-e20b-9b819761b4c1" className="small-card">
        <div className="div-block-196">
          <AssetImage
            src={item.image}
            loading="lazy"
            alt=""
            width={624}
            height={410}
            sizes="(max-width: 624px) 100vw, 624px"
            className="avatar"
          />
          <a href="https://www.wrappixel.com/" target="_blank" rel="noreferrer" className="div-block-197 w-inline-block">
            <div className="div-block-198">
              <img src="/images/69afb0934a0a9b77eaf02520_round-arrow-right.svg" loading="lazy" width="32" height="32" alt="" className="image-30" />
            </div>
          </a>
        </div>

        <p className="heading-7">{item.title}</p>
      </div>

      <div className="chips">
        {item.chips.map((chip) => (
          <a key={chip} href="#" className="link-block-2 w-inline-block">
            <div>{chip}</div>
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <section id="work" className="home-our-work-section">
      <div className="w-layout-blockcontainer container-6 w-container">
        <div className="div-block-215">
          <div className="w-layout-grid heading-div">
            <h2 data-w-id="065964db-7d24-6ba3-4b1c-f61efb21ffaf" style={{ opacity: 0 }} className="our-work-heading">
              How we transformed a small business&apos;s <span className="span-italic-txt">online presence</span>
            </h2>
          </div>

          <div className="div-block-214">
            <div className="div-block-212">
              {renderCard(firstColumn[0], "4c59f5ea-8902-3ed7-f744-beb222178250")}
              {renderCard(firstColumn[1], "04bc2df1-16f2-23e8-1ce0-9f38f46ad20c")}
            </div>
            <div className="div-block-213">
              {renderCard(secondColumn[0], "5daca492-060a-69d8-58c2-f7617508d084")}
              {renderCard(secondColumn[1], "f3b16a16-0c4c-a740-a426-e15765d9f019")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}