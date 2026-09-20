type ToolsProps = {
  title: string;
  tools: string[];
}

export default function ToolsCard({title, tools}: ToolsProps){
  return(
    <section className="flex flex-col items-start justify-start gap-6 bg-[#0d0d14] border border-zinc-700 h-40 px-4 py-4 rounded-lg hover:opacity-80 hover:cursor-pointer">
      <p className="text-violet-400">{title}</p>
      <div className="flex flex-wrap gap-2">
        {tools.map((tools) => (
          <span key={tools} className="rounded-full border border-zinc-700 px-4 py-1.5 text-xs text-zinc-500 hover:border-violet-500 hover:text-violet-500 hover:cursor-pointer">
            {tools}
          </span>
        ))}
      </div>
    </section>
  )
}