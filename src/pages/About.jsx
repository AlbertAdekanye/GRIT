import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    number: "01",
    title: "Resilience",
    text: "We create for people who keep moving when the path becomes difficult.",
  },
  {
    number: "02",
    title: "Purpose",
    text: "Every silhouette, fabric and detail should have a reason to exist.",
  },
  {
    number: "03",
    title: "Identity",
    text: "GRIT is an expression of strength without pretending struggle does not exist.",
  },
];

const About = () => {
  return (
    <main className="bg-grit-cream text-grit-black">
      <section className="relative flex min-h-[75vh] items-end overflow-hidden bg-grit-black px-5 py-12 text-grit-cream sm:px-8 sm:py-16">
        <img
          src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=2000&q=85"
          alt="GRIT fashion campaign"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/20" />

        <div className="relative z-10 mx-auto w-full max-w-[1440px]">
          <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-grit-tan uppercase">
            This is GRIT
          </p>

          <h1 className="font-display text-[clamp(6rem,19vw,17rem)] leading-[0.7] uppercase">
            Our story
          </h1>

          <div className="mt-10 flex items-end justify-between gap-8">
            <p className="max-w-xl text-sm leading-7 text-white/70 sm:text-base">
              Born from pressure. Designed with purpose. Made for those who
              refuse to disappear.
            </p>

            <a
              href="#story"
              className="hidden h-14 w-14 items-center justify-center rounded-full border border-white/40 sm:flex"
              aria-label="Read the GRIT story"
            >
              <ArrowDown size={20} />
            </a>
          </div>
        </div>
      </section>

      <section
        id="story"
        className="px-5 py-24 sm:px-8 sm:py-32"
      >
        <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <p className="text-xs font-semibold tracking-[0.3em] text-grit-red uppercase">
            The beginning
          </p>

          <div>
            <h2 className="font-display text-6xl leading-[0.9] uppercase sm:text-8xl lg:text-9xl">
              Strength is not given.
              <span className="block text-grit-red">
                It is built.
              </span>
            </h2>

            <div className="mt-10 grid gap-8 border-t border-grit-black/20 pt-8 text-sm leading-7 text-grit-earth sm:grid-cols-2">
              <p>
                GRIT was created from the belief that clothing can carry more
                than style. It can carry memory, identity and the evidence of
                everything a person has survived.
              </p>

              <p>
                Rooted in Nigeria and shaped by a global streetwear language,
                GRIT combines functional design with an honest, uncompromising
                visual identity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid bg-grit-black lg:grid-cols-2">
        <div className="relative min-h-[600px]">
          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=85"
            alt="Model representing the GRIT identity"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center px-5 py-20 text-grit-cream sm:px-12 lg:px-16">
          <p className="text-xs font-semibold tracking-[0.3em] text-grit-tan uppercase">
            The manifesto
          </p>

          <blockquote className="mt-8 font-display text-6xl leading-[0.9] uppercase sm:text-8xl">
            We don’t hide the struggle.
            <span className="block text-grit-red">
              We wear it.
            </span>
          </blockquote>

          <p className="mt-10 max-w-md text-sm leading-7 text-white/60">
            Every GRIT piece is a reminder that pressure can become structure,
            struggle can become language and persistence can become identity.
          </p>
        </div>
      </section>

      <section className="bg-grit-stone px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-xs font-semibold tracking-[0.3em] text-grit-red uppercase">
            What defines us
          </p>

          <h2 className="mt-4 font-display text-6xl uppercase sm:text-8xl">
            Our foundation
          </h2>

          <div className="mt-14 grid border-t border-grit-black/25 md:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.number}
                className="border-b border-grit-black/25 py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"
              >
                <span className="text-xs font-semibold text-grit-red">
                  {value.number}
                </span>

                <h3 className="mt-10 font-display text-5xl uppercase">
                  {value.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-grit-earth">
                  {value.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-grit-red px-5 py-24 text-center text-grit-cream sm:px-8 sm:py-32">
        <p className="text-xs font-semibold tracking-[0.3em] text-grit-tan uppercase">
          Collection 001
        </p>

        <h2 className="mx-auto mt-6 max-w-5xl font-display text-[clamp(5rem,13vw,12rem)] leading-[0.8] uppercase">
          Wear what built you.
        </h2>

        <Link
          to="/shop"
          className="mt-10 inline-flex bg-grit-black px-8 py-4 text-xs font-bold tracking-[0.18em] text-white uppercase transition-colors hover:bg-grit-cream hover:text-grit-black"
        >
          Shop GRIT
        </Link>
      </section>
    </main>
  );
};

export default About;