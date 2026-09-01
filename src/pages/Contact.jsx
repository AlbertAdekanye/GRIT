import { useState } from "react";
import {
  ArrowUpRight,
  Camera,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

const WHATSAPP_NUMBER = "2349058647535";

const inputStyles =
  "w-full border-b border-grit-black/30 bg-transparent py-4 text-sm outline-none transition-colors placeholder:text-grit-earth/60 focus:border-grit-red";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = `Hello GRIT 👋

Name: ${form.name}
Email: ${form.email}
Subject: ${form.subject}

${form.message}`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="bg-grit-cream text-grit-black">
      <section className="bg-grit-black px-5 py-20 text-grit-cream sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-xs font-semibold tracking-[0.3em] text-grit-tan uppercase">
            Start a conversation
          </p>

          <h1 className="mt-5 font-display text-[clamp(6rem,18vw,16rem)] leading-[0.7] uppercase">
            Contact
          </h1>

          <p className="mt-10 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
            Questions about an order, sizing, delivery or collaboration? Talk
            to the GRIT team.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-16 lg:grid-cols-[0.7fr_1.3fr]">
          <aside>
            <p className="text-xs font-semibold tracking-[0.25em] text-grit-red uppercase">
              Contact information
            </p>

            <div className="mt-10 space-y-8">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-4"
              >
                <MessageCircle
                  size={20}
                  className="mt-1 text-grit-red"
                />

                <div>
                  <p className="text-xs font-bold uppercase">
                    WhatsApp
                  </p>

                  <p className="mt-2 text-sm text-grit-earth">
                    +234 905 864 7535
                  </p>
                </div>

                <ArrowUpRight
                  size={16}
                  className="ml-auto transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <div className="flex items-start gap-4">
                <Mail size={20} className="mt-1 text-grit-red" />

                <div>
                  <p className="text-xs font-bold uppercase">
                    Email
                  </p>

                  <p className="mt-2 text-sm text-grit-earth">
                    Email address coming soon
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin size={20} className="mt-1 text-grit-red" />

                <div>
                  <p className="text-xs font-bold uppercase">
                    Location
                  </p>

                  <p className="mt-2 text-sm text-grit-earth">
                    Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Camera
                  size={20}
                  className="mt-1 text-grit-red"
                />

                <div>
                  <p className="text-xs font-bold uppercase">
                    Social
                  </p>

                  <p className="mt-2 text-sm text-grit-earth">
                    GRIT social account coming soon
                  </p>
                </div>
              </div>
            </div>
          </aside>

          <form onSubmit={handleSubmit}>
            <p className="text-xs font-semibold tracking-[0.25em] text-grit-red uppercase">
              Send a message
            </p>

            <h2 className="mt-4 font-display text-6xl uppercase sm:text-8xl">
              Talk to us
            </h2>

            <div className="mt-10 grid gap-x-6 gap-y-7 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="text-xs font-bold uppercase"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className={inputStyles}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-xs font-bold uppercase"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className={inputStyles}
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="subject"
                  className="text-xs font-bold uppercase"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="How can we help?"
                  className={inputStyles}
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="text-xs font-bold uppercase"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Write your message"
                  className={`${inputStyles} resize-none`}
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-10 flex items-center gap-3 bg-grit-black px-8 py-4 text-xs font-bold tracking-[0.18em] text-white uppercase transition-colors hover:bg-green-600"
            >
              <MessageCircle size={18} />
              Send via WhatsApp
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;