export default function CodeCard() {
  return (
    <div className="w-[170px] rounded-2xl border border-white/10 bg-[#111118] p-4 shadow-xl">
      {/* Bolinhas */}
      <div className="mb-4 flex gap-2">
        <span className="h-2 w-2 rounded-full bg-orange-400" />
        <span className="h-2 w-2 rounded-full bg-lime-400" />
        <span className="h-2 w-2 rounded-full bg-violet-500" />
      </div>

      {/* Código */}
      <pre className="font-mono text-[12px] leading-[1.5]">
        <code>
          <span className="text-violet-400">const</span>{" "}
          <span className="text-white">role</span>{" "}
          <span className="text-violet-400">=</span>{" "}
          <span className="text-white">[</span>
          {"\n"}
          {"  "}
          <span className="text-lime-400">'designer'</span>
          <span className="text-white">,</span>
          {"\n"}
          {"  "}
          <span className="text-lime-400">'developer'</span>
          {"\n"}
          <span className="text-white">]</span>
        </code>
      </pre>
    </div>
  );
}