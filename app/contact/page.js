import Image from "next/image";
import Nav from "@/components/Nav";

export const metadata = { title: "Contact — Stephy" };

export default function Contact() {
  return (
    <>
      <Nav />

      <section className="contact-page">
        <Image
          src="/images/work4.png"
          alt=""
          fill
          sizes="100vw"
          className="contact-bg"
          style={{ objectFit: "cover" }}
        />
        <div className="contact-overlay"></div>

        <div className="contact-content">
          <h1 className="contact-title">LET&rsquo;S WORK<br />TOGETHER</h1>
          <div className="contact-divider"></div>
          <div className="contact-label">REACH OUT DIRECTLY</div>
          <a href="mailto:hello@stephy.com" className="contact-email">HELLO@STEPHY.COM</a>

          <div className="social-row">
            <a href="https://www.instagram.com/stephymanjooran" target="_blank" rel="noopener" aria-label="Instagram">IG</a>
            <a href="https://www.youtube.com/watch?v=-Efiz_bFutA" target="_blank" rel="noopener" aria-label="YouTube">YT</a>
          </div>
        </div>
      </section>
    </>
  );
}
