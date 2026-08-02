import Image from "next/image";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <>
      <Nav transparent />

      <section className="hero">
        <Image
          src="/images/hero.png"
          alt="Stephy on set"
          fill
          priority
          sizes="100vw"
          className="hero-bg"
          style={{ objectFit: "cover" }}
        />
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1 className="hero-name">STEPHY</h1>
          <p className="hero-role">FILMMAKER &nbsp;/&nbsp; DIRECTOR &nbsp;/&nbsp; STORYTELLER</p>
        </div>

        <div className="hero-bottom">
          <span>SHOWREEL</span>
          <span>SCROLL</span>
        </div>
      </section>
    </>
  );
}
