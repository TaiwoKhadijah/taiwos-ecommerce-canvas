import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import taiwoPhoto from "@/assets/taiwo.png.asset.json";
import projShopael from "@/assets/proj-shopael.png.asset.json";
import projTillie from "@/assets/proj-tilliebeads.png.asset.json";
import projMercantile from "@/assets/proj-msmercantile.png.asset.json";
import projFashion from "@/assets/proj-fashionedit.png.asset.json";
import projVelnor from "@/assets/proj-velnoshop.png.asset.json";
import proof1 from "@/assets/proof1.mp4.asset.json";
import proof2 from "@/assets/proof2.mp4.asset.json";
import proof3 from "@/assets/proof3.mp4.asset.json";

const PROJECTS = [
  { name: "Shopael", tag: "Fitness & Apparel", url: "https://shopael.com", img: projShopael.url },
  { name: "Tillie Beads", tag: "Handmade Accessories", url: "https://tilliebeads.com", img: projTillie.url },
  { name: "Main Street Mercantile", tag: "Lifestyle & Gifts", url: "https://ms-mercantile.com", img: projMercantile.url },
  { name: "Fashion Edit", tag: "Fashion & DTC", url: "https://fashionedit.com", img: projFashion.url },
  { name: "Velnor", tag: "Recovery & Wellness", url: "https://velnoshop.com", img: projVelnor.url },
];

const PROOFS = [
  { src: proof1.url, name: "DTC Founder", role: "Shopify store build" },
  { src: proof2.url, name: "Ecommerce Client", role: "Email marketing" },
  { src: proof3.url, name: "Dropshipping Client", role: "Store setup & scale" },
];

const LINKEDIN = "https://www.linkedin.com/in/taiwo-k-526997243/";
const UPWORK = "https://www.upwork.com/freelancers/~012c796da7fa90cdbc";
const EMAIL = "Taiwokhadijah251@gmail.com";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Taiwo Khadijah — Shopify Specialist & Email Marketing Expert" },
      {
        name: "description",
        content:
          "Taiwo Khadijah helps DTC brands, ecommerce stores and dropshippers build, design and scale with Shopify and high-converting email marketing.",
      },
      { property: "og:title", content: "Taiwo Khadijah — Shopify & Email Marketing Specialist" },
      {
        property: "og:description",
        content:
          "Build, design and scale your DTC or dropshipping business with a Shopify specialist and email marketing guru.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Banner />
      <Nav />
      <Hero />
      <Services />
      <SalesProof />
      <Projects />
      <About />
      <Process />
      <LeadCTA />
      <Contact />
      <Footer />
    </div>
  );
}

function Banner() {
  const items = [
    "Shopify Store Design & Development",
    "Klaviyo Email Marketing",
    "Dropshipping Store Setup",
    "Conversion Rate Optimization",
    "DTC Brand Scaling",
    "Shopify Plus Migrations",
  ];
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-b border-white/10 bg-[#0a1f44] text-white">
      <div className="flex whitespace-nowrap py-3 [animation:banner-scroll_35s_linear_infinite]">
        {loop.map((t, i) => (
          <span key={i} className="mx-8 inline-flex items-center gap-4 text-sm font-medium uppercase tracking-widest">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            {t}
          </span>
        ))}
      </div>
      <style>{`@keyframes banner-scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight">
          Taiwo<span className="text-brand">.</span>
        </a>
        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
          <a href="#services" className="hover:text-foreground">Services</a>
          <a href="#proof" className="hover:text-foreground">Sales Proof</a>
          <a href="#projects" className="hover:text-foreground">Projects</a>
          <a href="#about" className="hover:text-foreground">About</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
        </nav>
        <a
          href="#lead"
          className="rounded-full bg-brand px-4 py-2 text-sm font-medium text-brand-foreground transition hover:opacity-90"
        >
          Hire me
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#050d24] text-white">
      {/* animated aurora background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-[#1e3a8a] opacity-40 blur-3xl [animation:float_14s_ease-in-out_infinite]" />
        <div className="absolute top-40 -right-20 h-[420px] w-[420px] rounded-full bg-[#2563eb] opacity-30 blur-3xl [animation:float_18s_ease-in-out_infinite_reverse]" />
        <div className="absolute bottom-0 left-1/3 h-[360px] w-[360px] rounded-full bg-[#60a5fa] opacity-20 blur-3xl [animation:float_22s_ease-in-out_infinite]" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.15fr_0.85fr] md:items-center md:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Available for new projects
          </span>
          <h1 className="mt-6 font-display text-5xl leading-[1.02] md:text-7xl">
            Build. Design. <span className="bg-gradient-to-r from-[#93c5fd] via-white to-[#93c5fd] bg-clip-text text-transparent">Scale.</span>
            <br />
            Your Shopify brand — done right.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/75">
            I'm <span className="text-white">Taiwo Khadijah</span> — a Shopify Specialist &
            Email Marketing Guru helping DTC brands, ecommerce stores and dropshippers turn
            traffic into revenue with stores that convert and flows that print money.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#lead"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0a1f44] transition hover:bg-white/90"
            >
              Start a project →
            </a>
            <a
              href="#proof"
              className="rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10 backdrop-blur"
            >
              Watch client sales proof
            </a>
          </div>
          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/15 pt-8">
            {[
              ["50+", "Stores launched"],
              ["7-fig", "Revenue driven"],
              ["100%", "Client-first"],
            ].map(([k, v]) => (
              <div key={v}>
                <dt className="font-display text-3xl text-white">{k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-white/60">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-[#3b82f6]/40 to-[#1e3a8a]/40 blur-2xl" aria-hidden />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/5 shadow-2xl backdrop-blur">
            <img
              src={taiwoPhoto.url}
              alt="Portrait of Taiwo Khadijah, Shopify specialist and email marketing expert"
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050d24]/60 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
              <div>
                <p className="font-display text-lg text-white">Taiwo Khadijah</p>
                <p className="text-xs uppercase tracking-widest text-white/70">Shopify · Klaviyo · CRO</p>
              </div>
              <span className="rounded-full bg-emerald-400/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#052e1a]">
                Open
              </span>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-white/15 bg-white/10 p-4 shadow-lg backdrop-blur md:block">
            <p className="font-display text-sm text-white">Shopify Partner</p>
            <p className="text-xs text-white/70">Design · Build · Scale</p>
          </div>
        </div>
      </div>

      <style>{`@keyframes float{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(30px,-20px) scale(1.05)}}`}</style>
    </section>
  );
}

function Services() {
  const items = [
    {
      title: "Shopify Store Design & Development",
      body: "Custom, on-brand Shopify & Shopify Plus storefronts — theme customization, product pages, checkout, speed and CRO from day one.",
    },
    {
      title: "Email Marketing (Klaviyo & Mailchimp)",
      body: "Welcome, abandoned cart, browse abandon, post-purchase and win-back flows that recover revenue and grow LTV on autopilot.",
    },
    {
      title: "Dropshipping Store Setup",
      body: "End-to-end dropshipping stores — winning product research, supplier vetting, store build and launch-ready funnels.",
    },
    {
      title: "Shopify Redesign & Migration",
      body: "Migrate from Wix, WooCommerce or Etsy to Shopify — or redesign your existing store into a conversion-focused experience.",
    },
    {
      title: "Conversion Rate Optimization (CRO)",
      body: "Product page rewrites, upsells, bundles, social proof and A/B tests to grow revenue without spending more on ads.",
    },
    {
      title: "Ecommerce Growth Partnership",
      body: "Ongoing support across storefront, email and lifecycle — one partner focused on compounding your monthly revenue.",
    },
  ];
  return (
    <section id="services" className="border-t border-border bg-cream/60 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-brand">What I do</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Services built for ecommerce growth</h2>
          </div>
          <p className="hidden max-w-sm text-sm text-muted-foreground md:block">
            From first pixel to first million — everything a DTC founder needs, under one roof.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((s, i) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="font-display text-sm text-brand/70">0{i + 1}</span>
              <h3 className="mt-3 font-display text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              <div className="mt-6 h-px w-10 bg-brand/30 transition-all group-hover:w-20" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SalesProof() {
  return (
    <section id="proof" className="relative overflow-hidden border-t border-white/10 bg-[#050d24] py-20 text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute top-10 right-10 h-72 w-72 rounded-full bg-[#2563eb]/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#1e3a8a]/40 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-white/60">Sales proof</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Real clients. Real results.</h2>
          </div>
          <p className="hidden max-w-sm text-sm text-white/70 md:block">
            Short clips from clients I've helped build, design and scale on Shopify.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PROOFS.map((p, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="aspect-[9/16] overflow-hidden bg-black">
                <video
                  src={p.src}
                  controls
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between p-5">
                <div>
                  <p className="font-display text-lg">{p.name}</p>
                  <p className="text-xs uppercase tracking-widest text-white/60">{p.role}</p>
                </div>
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-brand">Selected work</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Recent Shopify builds</h2>
          </div>
          <p className="hidden max-w-sm text-sm text-muted-foreground md:block">
            A few of the stores I've designed, built and helped scale for DTC founders.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[4/5] overflow-hidden bg-cream">
                <img
                  src={p.img}
                  alt={`${p.name} Shopify store designed by Taiwo Khadijah`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex items-center justify-between px-5 py-4">
                <div>
                  <h3 className="font-display text-lg">{p.name}</h3>
                  <p className="text-xs text-muted-foreground">{p.tag}</p>
                </div>
                <span className="text-sm text-brand opacity-0 transition group-hover:opacity-100">Visit →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <div className="order-2 md:order-1">
          <p className="text-xs uppercase tracking-widest text-brand">About me</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">
            A Shopify specialist obsessed with conversions.
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              I'm Taiwo Khadijah — a Shopify Specialist and Email Marketing Guru helping
              direct-to-consumer brands, ecommerce stores and dropshippers build, design and
              scale their business to the next level.
            </p>
            <p>
              I combine strategic store design with retention-first email marketing so every
              visitor, subscriber and repeat buyer moves your brand forward. Whether you're
              launching your first store or scaling past six figures, I bring the systems and
              taste to get you there.
            </p>
          </div>
          <ul className="mt-8 grid grid-cols-2 gap-3 text-sm">
            {["Shopify & Shopify Plus", "Klaviyo & Mailchimp", "CRO & Landing Pages", "Dropshipping Ops"].map((t) => (
              <li key={t} className="rounded-lg border border-border bg-cream px-4 py-3">{t}</li>
            ))}
          </ul>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
            <img src={taiwoPhoto.url} alt="Taiwo Khadijah" className="w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    ["Discover", "We map your brand, offer, and audience so every decision ladders up to revenue."],
    ["Design", "Storefront, product pages and email templates crafted to convert on the first visit."],
    ["Build", "Fast, clean Shopify build with the apps and integrations your stack actually needs."],
    ["Scale", "Continuous CRO, flow optimization and reporting to compound growth month over month."],
  ];
  return (
    <section id="process" className="border-t border-border bg-primary py-20 text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs uppercase tracking-widest text-accent">The process</p>
        <h2 className="mt-3 font-display text-4xl md:text-5xl">Four steps from idea to scale</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {steps.map(([t, d], i) => (
            <div key={t} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <span className="font-display text-3xl text-accent">0{i + 1}</span>
              <h3 className="mt-3 font-display text-xl">{t}</h3>
              <p className="mt-2 text-sm text-primary-foreground/80">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadCTA() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", store: "", goal: "Shopify store build" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New project inquiry — ${form.goal}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nStore / Website: ${form.store}\nGoal: ${form.goal}\n`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="lead" className="relative overflow-hidden border-t border-border bg-background py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-xs uppercase tracking-widest text-brand">Free 20-minute strategy call</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">
            Get a custom growth plan for your Shopify store.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Tell me about your brand and where you want to go. I'll reply within 24 hours with a
            clear next step — no fluff, no obligation.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            {[
              "Store & funnel audit",
              "Email marketing gap analysis",
              "90-day revenue roadmap",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand text-brand-foreground">✓</span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-8 shadow-xl">
          <div className="grid gap-4">
            <label className="grid gap-2 text-sm">
              <span className="font-medium">Your name</span>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="rounded-lg border border-border bg-background px-4 py-3 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                placeholder="Jane Founder"
              />
            </label>
            <label className="grid gap-2 text-sm">
              <span className="font-medium">Email</span>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="rounded-lg border border-border bg-background px-4 py-3 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                placeholder="you@brand.com"
              />
            </label>
            <label className="grid gap-2 text-sm">
              <span className="font-medium">Store / Website URL</span>
              <input
                value={form.store}
                onChange={(e) => setForm({ ...form, store: e.target.value })}
                className="rounded-lg border border-border bg-background px-4 py-3 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                placeholder="yourstore.com"
              />
            </label>
            <label className="grid gap-2 text-sm">
              <span className="font-medium">What do you need help with?</span>
              <select
                value={form.goal}
                onChange={(e) => setForm({ ...form, goal: e.target.value })}
                className="rounded-lg border border-border bg-background px-4 py-3 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
              >
                <option>Shopify store build</option>
                <option>Shopify redesign / CRO</option>
                <option>Email marketing (Klaviyo)</option>
                <option>Dropshipping setup</option>
                <option>Full growth partnership</option>
              </select>
            </label>
            <button
              type="submit"
              className="mt-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground transition hover:opacity-90"
            >
              {sent ? "Opening your email…" : "Get my free strategy call"}
            </button>
            <p className="text-center text-xs text-muted-foreground">
              Or email me directly at{" "}
              <a href={`mailto:${EMAIL}`} className="text-brand underline">
                {EMAIL}
              </a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-xs uppercase tracking-widest text-brand">Let's work together</p>
        <h2 className="mt-3 font-display text-5xl md:text-6xl">
          Ready to scale your store to the next level?
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          Tell me about your brand and where you want to go. I'll show you how we get there.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${EMAIL}`}
            className="rounded-full bg-brand px-7 py-3.5 text-sm font-medium text-brand-foreground transition hover:opacity-90"
          >
            {EMAIL}
          </a>
          <a
            href={UPWORK}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium transition hover:bg-cream"
          >
            Hire on Upwork
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium transition hover:bg-cream"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} Taiwo Khadijah. All rights reserved.</p>
        <div className="flex gap-6">
          <a href={LINKEDIN} target="_blank" rel="noreferrer" className="hover:text-foreground">LinkedIn</a>
          <a href={UPWORK} target="_blank" rel="noreferrer" className="hover:text-foreground">Upwork</a>
          <a href={`mailto:${EMAIL}`} className="hover:text-foreground">Email</a>
        </div>
      </div>
    </footer>
  );
}
