import type { Education } from "@/lib/portfolio-content"
import { TextLink } from "@/components/text-link"

export function EducationList({
  education,
}: {
  education: readonly Education[]
}) {
  return (
    <ol className="mt-5 flex flex-col gap-5">
      {education.map((item) => (
        <li
          key={`${item.institution}-${item.period}`}
          className="flex flex-col gap-1"
        >
          <h3 className="text-[1.05rem] leading-6 font-medium md:text-lg">
            {item.degree}
          </h3>
          <p className="text-muted-foreground">
            <TextLink href={item.href} external>
              {item.institution}
            </TextLink>{" "}
            · {item.period}
          </p>
          <p className="leading-6">{item.description}</p>
        </li>
      ))}
    </ol>
  )
}
