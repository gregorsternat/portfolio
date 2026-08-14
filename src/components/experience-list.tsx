import type { Experience } from "@/lib/portfolio-content"
import { TextLink } from "@/components/text-link"

export function ExperienceList({
  experience,
}: {
  experience: readonly Experience[]
}) {
  return (
    <ol className="mt-5 flex flex-col gap-5">
      {experience.map((item) => (
        <li
          key={`${item.company}-${item.period}`}
          className="flex flex-col gap-1"
        >
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
            <h3 className="text-[1.05rem] leading-6 font-medium md:text-lg">
              {item.role}
            </h3>
            <p className="text-right text-muted-foreground">{item.period}</p>
          </div>
          <p className="text-muted-foreground">
            {item.href ? (
              <TextLink href={item.href} external>
                {item.company}
              </TextLink>
            ) : (
              item.company
            )}{" "}
            · {item.location}
          </p>
          <p className="max-w-2xl leading-6">{item.description}</p>
        </li>
      ))}
    </ol>
  )
}
