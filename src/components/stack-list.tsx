import type { StackGroup } from "@/lib/portfolio-content"

export function StackList({ stack }: { stack: readonly StackGroup[] }) {
  return (
    <dl className="mt-5 flex flex-col gap-2">
      {stack.map((group) => (
        <div
          key={group.label}
          className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-4"
        >
          <dt className="font-medium">{group.label}</dt>
          <dd className="leading-6 text-muted-foreground">
            {group.items.join(", ")}
          </dd>
        </div>
      ))}
    </dl>
  )
}
