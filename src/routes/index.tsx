import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import taiwoPhoto from "@/assets/taiwo.png.asset.json";
import projShopael from "@/assets/proj-shopael.png.asset.json";
import projTillie from "@/assets/proj-tilliebeads.png.asset.json";
import projMercantile from "@/assets/proj-msmercantile.png.asset.json";
import projFashion from "@/assets/proj-fashionedit.png.asset.json";
import projVelnor from "@/assets/proj-velnoshop.png.asset.json";

const PROJECTS = [
  { name: "Shopael", tag: "Fitness & Apparel", url: "https://shopael.com", img: projShopael.url },
  { name: "Tillie Beads", tag: "Handmade Accessories", url: "https://tilliebeads.com", img: projTillie.url },
  { name: "Main Street Mercantile", tag: "Lifestyle & Gifts", url: "https://ms-mercantile.com", img: projMercantile.url },
  { name: "Fashion Edit", tag: "Fashion & DTC", url: "https://fashionedit.com", img: projFashion.url },
  { name: "Velnor", tag: "Recovery & Wellness", url: "https://velnoshop.com", img: projVelnor.url },
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
      <SlideHero />
      <Hero />
      <Services />
      <CaseStudies />
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
          <a href="#projects" className="hover:text-foreground">Projects</a>
          <a href="#about" className="hover:text-foreground">About</a>
          <a href="#process" className="hover:text-foreground">Process</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
        </nav>
        <a
          href={`mailto:${EMAIL}`}
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
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24 md:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-cream px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" /> Available for new projects
          </span>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] md:text-7xl">
            Hi, I'm <span className="text-brand">Taiwo Khadijah</span> — I help DTC brands scale on Shopify.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Shopify Specialist & Email Marketing Guru. I help ecommerce stores and dropshipping
            businesses build, design and scale to the next level with stores that convert and
            email flows that print revenue.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:bg-foreground/90"
            >
              Start a project
            </a>
            <a
              href={UPWORK}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium transition hover:bg-cream"
            >
              Hire me on Upwork →
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium transition hover:bg-cream"
            >
              LinkedIn →
            </a>
          </div>
          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              ["50+", "Stores launched"],
              ["7-fig", "Revenue driven"],
              ["100%", "Client-first"],
            ].map(([k, v]) => (
              <div key={v}>
                <dt className="font-display text-3xl text-brand">{k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-brand/10 blur-2xl" aria-hidden />
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl">
            <img
              src={taiwoPhoto.url}
              alt="Portrait of Taiwo Khadijah, Shopify specialist and email marketing expert"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-4 shadow-lg md:block">
            <p className="font-display text-sm">Shopify Partner</p>
            <p className="text-xs text-muted-foreground">Design · Build · Scale</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    {
      title: "Shopify Store Design & Build",
      body: "Custom, high-converting Shopify storefronts for DTC brands — theme development, speed optimization and CRO from day one.",
    },
    {
      title: "Email Marketing",
      body: "Klaviyo & Mailchimp flows that recover carts, welcome subscribers and turn one-time buyers into repeat customers.",
    },
    {
      title: "Dropshipping Setup",
      body: "End-to-end dropshipping stores — product research, supplier vetting, store build and launch-ready funnels.",
    },
    {
      title: "Scale & Optimize",
      body: "Ongoing CRO, product page rewrites, upsells and lifecycle marketing to grow revenue without growing ad spend.",
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
            From first pixel to first million — I partner with founders who take their brand seriously.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {items.map((s, i) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="font-display text-sm text-brand/70">0{i + 1}</span>
              <h3 className="mt-3 font-display text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </article>
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
            {["Shopify & Shopify Plus","Klaviyo & Mailchimp","CRO & Landing Pages","Dropshipping Ops"].map((t) => (
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

const SLIDES = [
  {
    kicker: "Shopify Store Design",
    title: "Storefronts that sell on the first visit",
    body: "Custom Shopify & Shopify Plus builds designed around your brand, your products, and your customer's next tap.",
    cta: "Start a Shopify build",
    img: projShopael.url,
    accent: "from-[#0a1f44] to-[#1e3a8a]",
  },
  {
    kicker: "Email Marketing",
    title: "Klaviyo flows that print revenue",
    body: "Welcome, abandoned cart, browse, post-purchase and win-back flows that turn subscribers into repeat buyers.",
    cta: "Grow email revenue",
    img: projTillie.url,
    accent: "from-[#0f172a] to-[#1d4ed8]",
  },
  {
    kicker: "DTC & Dropshipping",
    title: "Scale your ecommerce brand, end-to-end",
    body: "From product research and supplier vetting to launch-ready funnels and CRO — one partner, full stack.",
    cta: "Book a strategy call",
    img: projFashion.url,
    accent: "from-[#0a1f44] to-[#2563eb]",
  },
];

function SlideHero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % SLIDES.length), 5500);
    return () => clearInterval(id);
  }, []);
  const s = SLIDES[i];
  return (
    <section id="top" className="relative overflow-hidden bg-[#0a1f44] text-white">
      <div className={`absolute inset-0 bg-gradient-to-br ${s.accent} transition-all duration-700`} aria-hidden />
      <div className="absolute inset-0 opacity-20" aria-hidden style={{
        backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,255,255,.25), transparent 40%), radial-gradient(circle at 80% 60%, rgba(255,255,255,.15), transparent 45%)",
      }} />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-28">
        <div key={i} className="animate-fade-in">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-white/80 backdrop-blur">
            {s.kicker}
          </span>
          <h2 className="mt-6 font-display text-4xl leading-[1.05] md:text-6xl">{s.title}</h2>
          <p className="mt-5 max-w-xl text-lg text-white/80">{s.body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#lead" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0a1f44] transition hover:bg-white/90">
              {s.cta}
            </a>
            <a href="#case-studies" className="rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10">
              See case studies →
            </a>
          </div>
          <div className="mt-10 flex gap-2">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all ${idx === i ? "w-10 bg-white" : "w-4 bg-white/40"}`}
              />
            ))}
          </div>
        </div>
        <div key={`img-${i}`} className="relative animate-scale-in">
          <div className="absolute -inset-4 rounded-[2rem] bg-white/10 blur-2xl" aria-hidden />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/20 bg-white/5 shadow-2xl">
            <img src={s.img} alt={s.title} className="h-full w-full object-cover object-top" />
          </div>
        </div>
      </div>
    </section>
  );
}

const CASES = [
  {
    name: "Shopael",
    tag: "Fitness & Apparel",
    result: "+142%",
    metric: "Revenue in 90 days",
    summary: "Rebuilt storefront and Klaviyo flows — recovered carts up 3.4x, AOV up 22%.",
    url: "https://shopael.com",
    img: projShopael.url,
  },
  {
    name: "Tillie Beads",
    tag: "Handmade Accessories",
    result: "38%",
    metric: "Email revenue share",
    summary: "Welcome + browse abandon + post-purchase flows drove 38% of monthly revenue.",
    url: "https://tilliebeads.com",
    img: projTillie.url,
  },
  {
    name: "Velnor",
    tag: "Recovery & Wellness",
    result: "2.1x",
    metric: "Conversion rate lift",
    summary: "Redesigned PDPs, added upsells and social proof — CVR jumped from 1.4% to 2.9%.",
    url: "https://velnoshop.com",
    img: projVelnor.url,
  },
];

function CaseStudies() {
  return (
    <section id="case-studies" className="border-t border-border bg-[#0a1f44] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-white/60">Featured case studies</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Results, not just deliverables</h2>
          </div>
          <p className="hidden max-w-sm text-sm text-white/70 md:block">
            A snapshot of what happens when Shopify design meets retention-first email marketing.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {CASES.map((c) => (
            <a
              key={c.name}
              href={c.url}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="aspect-[4/3] overflow-hidden bg-white/5">
                <img src={c.img} alt={`${c.name} case study`} loading="lazy" className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs uppercase tracking-widest text-white/50">{c.tag}</p>
                <h3 className="mt-2 font-display text-2xl">{c.name}</h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-display text-4xl text-white">{c.result}</span>
                  <span className="text-xs uppercase tracking-widest text-white/60">{c.metric}</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/75">{c.summary}</p>
                <span className="mt-6 text-sm text-white/80 opacity-0 transition group-hover:opacity-100">
                  View live store →
                </span>
              </div>
            </a>
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

        <form
          onSubmit={onSubmit}
          className="rounded-3xl border border-border bg-card p-8 shadow-xl"
        >
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

