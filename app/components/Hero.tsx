
import Image from "next/image";
import Link from "next/link";
import Avatar from "@/public/images/avatar.jpg";

const technologies = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "Figma",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        w-full
        px-6
        pt-20
        pb-36
        sm:px-8
        sm:pt-28
        sm:pb-40
        lg:px-12
        lg:py-32
      "
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-7xl
          grid-cols-1
          items-center
          gap-16
          sm:gap-20
          lg:min-h-[75vh]
          lg:grid-cols-2
          lg:gap-16
        "
      >
        {/* CONTEÚDO PRINCIPAL */}
        <div
          className="
            flex
            min-w-0
            flex-col
            items-start
            gap-7
          "
        >
          {/* DISPONIBILIDADE */}
          <p
            className="
              w-fit
              rounded-full
              border
              border-lime-300
              px-4
              py-2
              font-mono
              text-xs
              text-lime-300
              sm:text-sm
            "
          >
            ● Available for work
          </p>

          {/* TÍTULO */}
          <h1
            className="
              w-full
              font-display
              text-[clamp(2.3rem,8vw,4.5rem)]
              font-bold
              leading-[1.05]
              tracking-[-0.04em]
              sm:leading-[0.95]
              lg:text-[clamp(3rem,5vw,4.5rem)]
            "
          >
            <span className="block text-white">
              Matheus
            </span>

            <span className="block italic text-violet-500">
              Silva
            </span>

            <span className="block italic text-violet-500">
              Magalhães
              <span className="text-lime-400">
                .
              </span>
            </span>
          </h1>

          {/* DESCRIÇÃO */}
          <p
            className="
              max-w-xl
              font-sans
              text-base
              leading-7
              text-zinc-400
              sm:text-lg
              sm:leading-8
            "
          >
            Fullstack Developer & UI/UX Designer crafting
            digital products that balance{" "}
            <strong className="font-medium text-white">
              technical excellence
            </strong>{" "}
            with{" "}
            <strong className="font-medium text-white">
              intentional design.
            </strong>
          </p>

          {/* TECNOLOGIAS */}
          <div className="flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="
                  rounded-full
                  border
                  border-zinc-800
                  px-4
                  py-1.5
                  font-mono
                  text-xs
                  text-zinc-500
                "
              >
                {technology}
              </span>
            ))}
          </div>

          {/* BOTÕES */}
          <div
            className="
              flex
              w-full
              flex-wrap
              items-center
              gap-3
              sm:w-auto
              sm:gap-4
            "
          >
            <Link
              href="#projects"
              className="
                flex
                min-h-12
                flex-1
                items-center
                justify-center
                whitespace-nowrap
                rounded-full
                bg-violet-500
                px-4
                py-3
                font-sans
                text-sm
                font-medium
                text-white
                transition-colors
                hover:bg-violet-400
                sm:flex-none
                sm:px-7
                sm:text-base
              "
            >
              View Projects
            </Link>

            <Link
              href="#contact"
              className="
                flex
                min-h-12
                flex-1
                items-center
                justify-center
                whitespace-nowrap
                rounded-full
                border
                border-zinc-700
                px-4
                py-3
                font-sans
                text-sm
                font-medium
                text-white
                transition-colors
                hover:bg-zinc-900
                sm:flex-none
                sm:px-7
                sm:text-base
              "
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* ÁREA DA IMAGEM */}
        <div
          className="
            relative
            flex
            min-w-0
            items-center
            justify-center
            pt-4
            sm:pt-0
          "
        >
          <div
            className="
              relative
              w-full
              max-w-[350px]
              sm:max-w-md
              lg:max-w-[420px]
            "
          >
            {/* AVATAR */}
            <Image
              src={Avatar}
              alt="Matheus Silva Magalhães"
              priority
              sizes="
                (max-width: 640px) 350px,
                (max-width: 1024px) 448px,
                420px
              "
              className="
                aspect-[4/4.3]
                w-full
                rounded-[28px]
                object-cover
              "
            />

            {/* CARD EXPERIÊNCIA */}
            <div
              className="
                absolute
                left-2
                top-8
                z-10
                rounded-2xl
                border
                border-zinc-800
                bg-zinc-950/90
                px-3
                py-3
                backdrop-blur
                sm:-left-10
                sm:top-12
                sm:px-5
                sm:py-4
                lg:-left-12
              "
            >
              <p
                className="
                  font-mono
                  text-xl
                  font-bold
                  text-white
                  sm:text-2xl
                "
              >
                1+
              </p>

              <p
                className="
                  font-mono
                  text-[10px]
                  text-zinc-500
                  sm:text-xs
                "
              >
                Years experience
              </p>
            </div>

            {/* CARD PROJETOS */}
            <div
              className="
                absolute
                right-2
                bottom-16
                z-10
                rounded-2xl
                border
                border-zinc-800
                bg-zinc-950/90
                px-3
                py-3
                backdrop-blur
                sm:-right-10
                sm:bottom-20
                sm:px-5
                sm:py-4
                lg:-right-12
              "
            >
              <p
                className="
                  font-mono
                  text-xl
                  font-bold
                  text-lime-400
                  sm:text-2xl
                "
              >
                2+
              </p>

              <p
                className="
                  font-mono
                  text-[10px]
                  text-zinc-500
                  sm:text-xs
                "
              >
                Projects shipped
              </p>
            </div>

            {/* CARD TECNOLOGIAS */}
            <div
              className="
                absolute
                -bottom-5
                left-1/2
                z-10
                -translate-x-1/2
                whitespace-nowrap
                rounded-xl
                border
                border-violet-500/40
                bg-violet-500/10
                px-4
                py-3
                font-mono
                text-[10px]
                text-violet-300
                backdrop-blur
                sm:px-5
                sm:text-xs
              "
            >
              React · Node.js · Figma
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
