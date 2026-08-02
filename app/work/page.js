import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import { PROJECTS, PROJECT_IDS } from "@/data/projects";

export const metadata = { title: "Work — Stephy" };

export default function Work() {
  return (
    <>
      <Nav />

      <main style={{ paddingTop: "5.4rem" }}>
        {PROJECT_IDS.map((id) => {
          const project = PROJECTS[id];
          return (
            <Link href={`/work/${id}`} key={id} className="work-item">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="100vw"
                style={{ objectFit: "cover" }}
              />
              <div className="work-item-overlay"></div>
              <div className="work-item-content">
                <h2 className="work-item-title">
                  {project.title} — {(project.listType || project.type).toUpperCase()}, {project.year}
                </h2>
                <p className="work-item-desc">{project.logline}</p>
                <div className="work-item-arrow">↓</div>
              </div>
            </Link>
          );
        })}
      </main>
    </>
  );
}
