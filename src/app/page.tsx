import { EducationList } from "@/components/education-list"
import { ExperienceList } from "@/components/experience-list"
import { IntroReveal, Reveal } from "@/components/motion/reveal"
import { ProjectList } from "@/components/project-list"
import { StackList } from "@/components/stack-list"
import { TextLink } from "@/components/text-link"
import { portfolioContent } from "@/lib/portfolio-content"

export default function Page() {
  const {
    identity,
    introduction,
    experience,
    education,
    stack,
    projects,
    socialLinks,
  } = portfolioContent

  return (
    <main id="top" className="w-full px-6 md:px-11 lg:w-[36%]">
      <header className="flex items-center pt-8 md:pt-10">
        <h1 className="font-medium text-foreground">
          <a
            href="#top"
            className="focus-visible:outline-1 focus-visible:outline-offset-4"
          >
            {identity.shortName}
          </a>
        </h1>
        <span aria-hidden="true" className="mx-3 text-muted-foreground">
          /
        </span>
        <nav aria-label="Primary navigation">
          <ul className="flex flex-wrap items-center gap-3">
            <li>
              <TextLink href={socialLinks.github} external>
                github
              </TextLink>
            </li>
            <li aria-hidden="true" className="text-muted-foreground">
              /
            </li>
            <li>
              <TextLink href={socialLinks.linkedin} external>
                linkedin
              </TextLink>
            </li>
            <li aria-hidden="true" className="text-muted-foreground">
              /
            </li>
            <li>
              <TextLink href={socialLinks.twitter} external>
                twitter
              </TextLink>
            </li>
          </ul>
        </nav>
      </header>

      <section aria-label="Introduction" className="py-14 md:py-16">
        <IntroReveal lines={introduction} />
      </section>

      <Reveal>
        <section
          id="work"
          aria-labelledby="work-heading"
          className="pb-10 md:pb-12"
        >
          <h2 id="work-heading" className="section-heading">
            Selected work
          </h2>
          <ProjectList
            projects={projects}
            repositoriesHref={socialLinks.repositories}
          />
        </section>
      </Reveal>

      <Reveal>
        <section
          id="experience"
          aria-labelledby="experience-heading"
          className="pb-10 md:pb-12"
        >
          <h2 id="experience-heading" className="section-heading">
            Experience
          </h2>
          <ExperienceList experience={experience} />
        </section>
      </Reveal>

      <Reveal>
        <section
          id="education"
          aria-labelledby="education-heading"
          className="pb-10 md:pb-12"
        >
          <h2 id="education-heading" className="section-heading">
            Education
          </h2>
          <EducationList education={education} />
        </section>
      </Reveal>

      <Reveal>
        <section
          id="stack"
          aria-labelledby="stack-heading"
          className="pb-10 md:pb-12"
        >
          <h2 id="stack-heading" className="section-heading">
            Stack
          </h2>
          <StackList stack={stack} />
        </section>
      </Reveal>
    </main>
  )
}
