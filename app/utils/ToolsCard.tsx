type ToolsProps = {
  title: string;
  tools: string[];
}

export default function ToolsCard({title, tools}: ToolsProps){
  return(
    <section className="flex flex-col items-start justify-start gap-6 bg-[#0d0d14] border border-zinc-900 h-40 px-4 py-4 rounded-lg hover:opacity-80 hover:cursor-pointer">
      <p className="text-purple-700 font-bold font-mono text-xs">{title}</p>
      <div className="flex flex-wrap gap-2">
        {tools.map((tools) => (
          <span key={tools} className="rounded-full border border-zinc-800 px-4 py-1.5 text-xs text-zinc-300 font-mono hover:border-purple-800 hover:cursor-pointer">
            {tools}
          </span>
        ))}
      </div>
    </section>
  )
}