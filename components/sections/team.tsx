import { AssetImage } from "@/components/shared/asset-image";
import { teamMembers } from "@/lib/site-data";

export function Team() {
  return (
    <section id="team" className="home-our-team-sec">
      <div className="w-layout-blockcontainer container-7 w-container">
        <div className="w-layout-grid ourteam-heading-div">
          <h2 data-w-id="c905ff5a-ed57-ec2f-8d28-fe5633aa58e5" style={{ opacity: 0 }} className="creative-mind-heading">
            Meet the creative minds behind <span className="text-span-14">our success</span>
          </h2>
        </div>

        <div className="w-layout-grid creative-mind-wrapper">
          {teamMembers.map((member) => (
            <div key={member.name} data-w-id={member.id} style={{ opacity: 0 }} className="profile-card">
              <AssetImage
                data-w-id={member.imageId}
                src={member.image}
                alt={member.name}
                loading="lazy"
                width={320}
                height={404}
              />

              <div className="creative-descp-block">
                <p className="creative-block-title">{member.name}</p>
                <div className="position-txt">{member.role}</div>

                <div className="social-link-div">
                  <a href="https://x.com/wrappixel" className="twitter-link w-inline-block">
                    <img width="20" height="20" alt="twitter-icon" src="/images/69afb0934a0a9b77eaf024ba_twitter.png" loading="lazy" />
                  </a>
                  <a href="https://www.linkedin.com/company/wrappixel/" className="linkedin-link w-inline-block">
                    <img width="20" height="20" alt="linkedin-icon" src="/images/69afb0934a0a9b77eaf024b9_linkedin.png" loading="lazy" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}