import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import { PROJECTS, PROJECT_IDS, getProject, getNextProjectId } from "@/data/projects";

export function generateStaticParams() {
  return PROJECT_IDS.map((id) => ({ id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = getProject(id);
  if (!project) return {};
  return { title: `${project.title} — Stephy` };
}

const GALLERY_CAPTIONS = ["Behind the scenes", "On location", "Final setup", "Director's eye"];

export default async function WorkDetail({ params }) {
  const { id } = await params;
  const project = getProject(id);
  if (!project) notFound();

  const nextId = getNextProjectId(id);

  return (
    <>
      <Nav />

      <section className="detail-hero">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className="detail-hero-overlay"></div>
        <div className="detail-hero-content">
          <h1 className="detail-title">{project.title}</h1>
          <div className="detail-meta">
            {project.type.toUpperCase()} <span>·</span> {project.year} <span>·</span> {project.role.toUpperCase()}
          </div>
        </div>
      </section>

      <div className="detail-body">
        <p className="detail-desc">{project.description}</p>
        <div className="detail-credits">
          {Object.entries(project.credits).map(([label, value]) => (
            <div className="detail-credit-row" key={label}>
              <span className="detail-credit-label">{label.toUpperCase()}</span>
              <span className="detail-credit-value">{value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="detail-gallery">
        {GALLERY_CAPTIONS.map((caption) => (
          <figure key={caption}>
            <Image
              src={project.image}
              alt={`${project.title} still`}
              fill
              sizes="200px"
              style={{ objectFit: "cover" }}
            />
            <div className="gallery-caption">{caption}</div>
          </figure>
        ))}
      </div>

      <div className="detail-footer">
        <a href={project.watchUrl || "#"} className="btn-outline" target="_blank" rel="noopener">
          WATCH FULL FILM
        </a>
        <Link href={`/work/${nextId}`} className="next-project">
          NEXT PROJECT →
        </Link>
      </div>
    </>
  );
}
