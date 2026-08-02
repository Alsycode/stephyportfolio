import Image from "next/image";
import Nav from "@/components/Nav";

export const metadata = { title: "About — Stephy" };

export default function About() {
  return (
    <>
      <Nav />

      <section className="about-page">
        <div className="about-image">
          <Image
            src="/images/about.png"
            alt="Portrait of Stephy"
            fill
            sizes="(max-width: 900px) 100vw, 42vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="about-content">
          <h1 className="about-title">Director.<br />Writer.<br />Storyteller.</h1>

          <p className="about-text">
            Stephy is a filmmaker whose work moves between quiet documentary
            portraits and character-driven fiction. Drawn to unscripted
            moments and the small truths hiding inside them, Stephy&rsquo;s films
            explore family, memory, and the spaces people share in silence.
          </p>

          <div className="about-sections">
            <section>
              <h2 className="exp-heading">PROFESSIONAL EXPERIENCE</h2>

              <div className="role-group">
                <h3 className="role-title">Director</h3>
                <ul className="role-list">
                  <li>Directed &ldquo;Kodamanju&rdquo; for the District Child Protection Unit (Kerala Government).</li>
                  <li>Directed &ldquo;Jokuttan and the Dragon&rdquo; for CMC Vision, Mount Carmel Generalate, Aluva.</li>
                  <li>Directed two commercials for a children&rsquo;s learning app.</li>
                </ul>
              </div>

              <div className="role-group">
                <h3 className="role-title">First Assistant Director</h3>
                <ul className="role-list">
                  <li>Worked as First Assistant Director on an upcoming Malayalam feature film.</li>
                </ul>
              </div>

              <div className="role-group">
                <h3 className="role-title">Advertising Scriptwriter</h3>
                <ul className="role-list">
                  <li>Wrote advertising scripts for healthcare and nutrition brands.</li>
                </ul>
              </div>

              <div className="role-group">
                <h3 className="role-title">Coordinator</h3>
                <ul className="role-list">
                  <li>Worked as Coordinator for &ldquo;Oru Chiri, Iru Chiri, Bumper Chiri&rdquo; (Malayala Manorama).</li>
                </ul>
              </div>

              <div className="role-group">
                <h3 className="role-title">Digital Content Creator — Anste Family</h3>
                <ul className="role-list">
                  <li>Create, write, direct, and act in original short-form content for social media.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="exp-heading">SKILLS</h2>
              <div className="skills-list">
                <span className="skill-tag">Direction</span>
                <span className="skill-tag">Assistant Direction</span>
                <span className="skill-tag">Screenwriting</span>
                <span className="skill-tag">Video Editing (Final Cut Pro)</span>
              </div>
            </section>

            <section>
              <h2 className="exp-heading">AWARDS &amp; RECOGNITION</h2>
              <div className="credits">
                <div className="credit-row">
                  <div>
                    <div className="credit-title">KODAMANJU — DIRECTOR</div>
                    <div className="credit-sub">Best Child Artist Award, CPR Short Film Festival (C. P. Rajasekaran Memorial)</div>
                  </div>
                  <div className="credit-year">2023</div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
