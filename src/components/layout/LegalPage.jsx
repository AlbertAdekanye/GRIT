import { MessageCircle } from "lucide-react";

const LegalPage = ({ eyebrow, title, introduction, sections }) => {
  return (
    <main className="bg-grit-cream text-grit-black">
      <section className="bg-grit-black px-5 py-20 text-grit-cream sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-xs font-semibold tracking-[0.3em] text-grit-tan uppercase">
            {eyebrow}
          </p>

          <h1 className="mt-5 font-display text-[clamp(5rem,14vw,12rem)] leading-[0.75] uppercase">
            {title}
          </h1>

          <p className="mt-10 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            {introduction}
          </p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[280px_1fr]">
          <aside>
            <p className="text-xs font-semibold tracking-[0.25em] text-grit-red uppercase">
              GRIT Clothing
            </p>

            <p className="mt-4 text-sm text-grit-earth">
              Last updated: 1 September 2026
            </p>

            <a
              href="https://wa.me/2349058647535"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-3 text-xs font-bold tracking-[0.14em] uppercase"
            >
              <MessageCircle size={17} />
              Contact GRIT
            </a>
          </aside>

          <div>
            {sections.map((section, index) => (
              <article
                key={section.title}
                className="border-b border-grit-black/20 py-10 first:pt-0 last:border-b-0"
              >
                <span className="text-xs font-bold text-grit-red">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h2 className="mt-4 font-display text-4xl uppercase sm:text-5xl">
                  {section.title}
                </h2>

                <div className="mt-5 space-y-4 text-sm leading-7 text-grit-earth">
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}

                  {section.items && (
                    <ul className="list-disc space-y-2 pl-5">
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default LegalPage;