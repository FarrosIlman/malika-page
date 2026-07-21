import { Container } from "@/components/shared/container";
import { showcase as fallbackShowcase } from "@/data/showcase";
import { ArrowUpRight } from "lucide-react";
import { ProjectCard } from "./project-card";
import { client } from "@/sanity/lib/client";
import { portfolioQuery } from "@/sanity/lib/queries";

export async function ShowcaseSection() {
  let projects = fallbackShowcase;

  try {
    // Attempt to fetch from Sanity if projectId is configured
    if (client.config().projectId) {
      const sanityData = await client.fetch(portfolioQuery, {}, { next: { revalidate: 60 } });
      if (sanityData && sanityData.length > 0) {
        projects = sanityData;
      }
    }
  } catch (error) {
    console.warn("Failed to fetch portfolio from Sanity, using fallback data.");
  }

  return (
    <section
      id="portfolio"
      className="py-24 relative overflow-hidden"
    >
      <Container>
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div className="space-y-4 max-w-xl">
            <span className="badge-terminal">
              <span aria-hidden="true">&gt;_</span>
              Featured Portfolio
            </span>
            <h2 className="text-display text-4xl md:text-5xl leading-[1.1] text-foreground">
              Software & sistem yang kami kembangkan
            </h2>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors whitespace-nowrap font-medium"
            aria-label="View all projects"
          >
            Explore all works
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16">
          {projects.map((project: any, index: number) => (
            <ProjectCard
              key={project.id || project._id}
              index={index}
              title={project.title}
              category={project.category}
              description={project.description}
              tags={project.tags}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
