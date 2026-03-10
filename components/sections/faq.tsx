import { faqAnswer, faqs } from "@/lib/site-data";

export function Faq() {
  return (
    <section className="section-8">
      <div className="w-layout-blockcontainer container-10 w-container">
        <div className="w-layout-grid grid-16">
          <h2 data-w-id="69f3e81b-e3ab-9564-a29d-1592c3d0da5f" className="heading-20">
            Got questions?
            <br />
            We&apos;ve got <span className="text-span-9">answers</span>
          </h2>
        </div>

        <div className="div-block-41">
          {faqs.map((faq) => (
            <div key={faq.id} data-hover="false" data-delay="0" data-w-id={faq.id} className="accordian-item w-dropdown">
              <div className="accordion-toggle w-dropdown-toggle">
                <div className="accordian-icon w-icon-dropdown-toggle" />
                <div className="text-block-30">{faq.question}</div>
              </div>
              <nav className="dropdown-list w-dropdown-list">
                <div className={faq.answerClass}>{faqAnswer}</div>
              </nav>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}