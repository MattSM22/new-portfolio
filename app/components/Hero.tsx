import Image from "next/image";
import Avatar from "@/app/assets/avatar.jpg";

export default function Hero() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 min-h-screen max-w-7xl mx-auto px-6 lg:px-12
      ">
      <div className="flex flex-col items-start gap-8">
        <p className="h-fit w-fit p-2 border-2 border-lime-300 rounded-full text-lime-300">● Available for work</p>
        <h1 className="font-playfair text-7xl font-bold leading-[0.82] tracking-[-0.04em]">
          <span className="block text-white">Matheus</span>
          <span className="block italic text-violet-500">Silva</span>
          <span className="block italic text-violet-500">Magalhães<span className="text-lime-400">.</span></span>
        </h1>
        <p className=" max-w-xl text-lg leading-8 text-zinc-400">
          Fullstack Developer & UI/UX Designer crafting digital products that
          balance{" "}
          <strong className="font-medium text-white">
            technical excellence
          </strong>{" "}
          with{" "}
          <strong className="font-medium text-white">
            intentional design.
          </strong>
        </p>
        <div className="flex flex-wrap gap-2">
          {["React", "Next.js", "Node.js", "TypeScript", "Figma"].map(
            (technology) => (
              <span
                key={technology}
                className="
                  rounded-full
                  border
                  border-zinc-800
                  px-4
                  py-1.5
                  text-xs
                  text-zinc-500
                "
              >
                {technology}
              </span>
            )
          )}
        </div>
        <div className="flex gap-4">
          <button
            className="
              rounded-full
              bg-violet-500
              px-7
              py-3
              font-medium
              text-white
              transition
              hover:bg-violet-400
            "
          >
            View Projects
          </button>

          <button
            className="
              rounded-full
              border
              border-zinc-700
              px-7
              py-3
              font-medium
              text-white
              transition
              hover:bg-zinc-900
            "
          >
            Get in Touch
          </button>
        </div>
      </div>
       <div className="relative flex items-center justify-center">
        <div className="relative w-full max-w-md"
        >
          <Image
            src={Avatar}
            alt="Matheus Silva Magalhães"
            className="aspect-[4/4.3] w-full rounded-[28px] object-cover grayscale
            "
          />

          {/* CARD EXPERIÊNCIA */}
          <div className="absolute -left-12 top-12 rounded-2xl border border-zinc-800 bg-zinc-950/90 px-5 py-4 backdrop-blur">
            <p className="text-2xl font-bold text-white">
              1+
            </p>
            <p className="text-xs text-zinc-500">
              Years experience
            </p>
          </div>

          {/* CARD PROJETOS */}
          <div className="absolute -right-12 bottom-20 rounded-2xl border border-zinc-800 bg-zinc-950/90 px-5 py-4 backdrop-blur">
            <p className="text-2xl font-bold text-lime-400">
              2+
            </p>

            <p className="text-xs text-zinc-500">
              Projects shipped
            </p>
          </div>

          {/* CARD TECNOLOGIAS */}
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-xl border border-violet-500/40 bg-violet-500/10 px-5 py-3 text-xs text-violet-300 backdrop-blur">
            React · Node.js · Figma
          </div>
        </div>
      </div>
    </main>
  )
}