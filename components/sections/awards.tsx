import { awards } from "@/lib/site-data";

export function Awards() {
  return (
    <section id="award" className="home-achievement-sec">
      <div className="w-layout-blockcontainer container-11 w-container">
        <div className="w-layout-grid grid-17">
          <h2 className="achevement-heading-h2">
            Accolades and achievements celebration our <span className="text-span-16">design excellence</span>
          </h2>
        </div>

        <div className="w-layout-grid grid-18">
          {awards.map((award) => (
            <div key={award.title} data-w-id="ede10618-346c-063d-fc9d-91e231c7b6ff" className="excellence">
              <img src={award.icon} loading="lazy" width="32" height="32" alt="" />
              <div>
                <div className="text-block-31">{award.title}</div>
                <p className="heading-24">{award.description}</p>
              </div>
              <div className="text-block-31">{award.year}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}