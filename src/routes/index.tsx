import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import taiwoPhoto from "@/assets/taiwo.png";
import projShopael from "@/assets/shopael.png";
import projTillie from "@/assets/tilliebeads.png";
import projMercantile from "@/assets/msmercantile.png";
import projFashion from "@/assets/fashionedit.png";
import projVelnor from "@/assets/velnoshop.png";
import projTdk from "@/assets/tdkforher.png";
import projTreadmill from "@/assets/treadmillbeltpros.png";
import proj9max from "@/assets/9max.png";
import proof1 from "@/assets/proof1.mp4";
import proof2 from "@/assets/proof2.mp4";
import proof3 from "@/assets/proof3.mp4";
import proof1Webm from "@/assets/proof1.webm";
import proof2Webm from "@/assets/proof2.webm";
import proof3Webm from "@/assets/proof3.webm";

const PROJECTS = [
  { name: "Shopael", tag: "Fitness & Apparel", url: "https://shopael.com", img: projShopael },
  { name: "Tillie Beads", tag: "Handmade Accessories", url: "https://tilliebeads.com", img: projTillie },
  { name: "Main Street Mercantile", tag: "Lifestyle & Gifts", url: "https://ms-mercantile.com", img: projMercantile },
  { name: "Fashion Edit", tag: "Fashion & DTC", url: "https://fashionedit.com", img: projFashion },
  { name: "Velnor", tag: "Recovery & Wellness", url: "https://velnoshop.com", img: projVelnor },
  { name: "tdK for Her", tag: "Streetwear & Sneakers", url: "https://tdkforher.shop", img: projTdk },
  { name: "Treadmill Belt Pros", tag: "Fitness Equipment", url: "https://treadmillbeltpros.com", img: projTreadmill },
  { name: "9Max", tag: "Home & Family", url: "https://9max.shop", img: proj9max },
];

const PROOFS = [
  { src: proof1Webm, fallback: proof1, name: "DTC Founder", role: "Shopify store build" },
  { src: proof2Webm, fallback: proof2, name: "Ecommerce Client", role: "Email marketing" },
  { src: proof3Webm, fallback: proof3, name: "Dropshipping Client", role: "Store setup & scale" },
];

const LINKEDIN = "https://www.linkedin.com/in/taiwo-k-526997243/";
const UPWORK = "https://www.upwork.com/freelancers/~012c796da7fa90cdbc";
const EMAIL = "Taiwokhadijah251@gmail.com";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Taiwo Khadijah, Shopify Specialist & Email Marketing Expert" },
      {
        name: "description",
        content:
          "Taiwo Khadijah helps DTC brands, ecommerce stores and dropshippers build, design and scale with Shopify and high-converting email marketing.",
      },
      { property: "og:title", content: "Taiwo Khadijah, Shopify Specialist & Email Marketing Expert" },
      {
        property: "og:description",
        content:
          "Taiwo Khadijah helps DTC brands, ecommerce stores and dropshippers build, design and scale with Shopify and high-converting email marketing.",
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
      <PortfolioCTA />
      <Testimonials />
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
          <a href="#testimonials" className="hover:text-foreground">Testimonials</a>
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
    <section id="top" className="relative overflow-hidden bg-hero-deep text-white">
      {/* Layered background: navy mesh wash, light shaft, orbit rings, dot grid, grain */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: [
              "radial-gradient(55% 50% at 10% 4%, color-mix(in oklab, var(--hero-glow) 45%, transparent) 0%, transparent 62%)",
              "radial-gradient(48% 44% at 92% 26%, color-mix(in oklab, var(--hero-glow) 38%, transparent) 0%, transparent 64%)",
              "radial-gradient(70% 55% at 50% 112%, color-mix(in oklab, var(--hero) 88%, transparent) 0%, transparent 70%)",
              "linear-gradient(160deg, var(--hero) 0%, var(--hero-deep) 62%)",
            ].join(", "),
          }}
        />

        <div
          className="hero-layer absolute -top-1/4 left-[16%] h-[150%] w-[30%] origin-top blur-[38px] [animation:hero-beam_18s_ease-in-out_infinite]"
          style={{
            backgroundImage:
              "linear-gradient(180deg, color-mix(in oklab, var(--hero-line) 22%, transparent) 0%, color-mix(in oklab, var(--hero-line) 7%, transparent) 45%, transparent 82%)",
          }}
        />

        <svg
          className="hero-layer absolute -right-40 top-1/2 h-[860px] w-[860px] -translate-y-1/2 opacity-40 [animation:hero-orbit_90s_linear_infinite]"
          viewBox="0 0 600 600"
          fill="none"
          style={{
            maskImage: "radial-gradient(circle at 50% 50%, black 22%, transparent 72%)",
            WebkitMaskImage: "radial-gradient(circle at 50% 50%, black 22%, transparent 72%)",
          }}
        >
          {[90, 150, 210, 270].map((r) => (
            <circle key={r} cx="300" cy="300" r={r} stroke="var(--hero-line)" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="3 9" />
          ))}
          <circle cx="300" cy="300" r="210" stroke="var(--hero-line)" strokeOpacity="0.45" strokeWidth="1" />
          <circle cx="510" cy="300" r="4.5" fill="var(--accent)" fillOpacity="0.9" />
          <circle cx="300" cy="150" r="3" fill="var(--hero-line)" fillOpacity="0.75" />
        </svg>

        <div
          className="hero-layer absolute -left-24 top-[8%] h-[420px] w-[420px] rounded-full blur-3xl [animation:hero-drift_20s_ease-in-out_infinite]"
          style={{
            backgroundImage:
              "radial-gradient(circle, color-mix(in oklab, var(--hero-glow) 55%, transparent) 0%, transparent 70%)",
          }}
        />
        <div
          className="hero-layer absolute -bottom-[10%] right-[6%] h-[340px] w-[340px] rounded-full blur-3xl [animation:hero-drift_26s_ease-in-out_infinite_reverse]"
          style={{
            backgroundImage:
              "radial-gradient(circle, color-mix(in oklab, var(--accent) 26%, transparent) 0%, transparent 70%)",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage: "radial-gradient(var(--hero-line) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
            maskImage: "radial-gradient(75% 65% at 50% 38%, black 0%, transparent 78%)",
            WebkitMaskImage: "radial-gradient(75% 65% at 50% 38%, black 0%, transparent 78%)",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.05] mix-blend-soft-light"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.15fr_0.85fr] md:items-center md:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Available for new projects
          </span>
          <h1 className="mt-6 font-display text-5xl leading-[1.02] md:text-7xl">
            Build. Design. <span className="bg-gradient-to-r from-[#93c5fd] via-white to-[#93c5fd] bg-clip-text text-transparent">Scale.</span>
            <br />
            Your Shopify brand, done right.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/75">
            I'm <span className="text-white">Taiwo Khadijah</span>, a Shopify Specialist &
            Email Marketing Guru helping founders, DTC brands, ecommerce stores and
            dropshippers turn traffic into revenue with stores that convert and flows that
            print money.
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
              src={taiwoPhoto}
              alt="Portrait of Taiwo Khadijah, Shopify specialist and email marketing expert"
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-hero-deep/60 via-transparent to-transparent" />
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

    </section>
  );
}

function Services() {
  const items = [
    {
      title: "Shopify Store Design & Development",
      body: "Custom, on-brand Shopify & Shopify Plus storefronts, theme customization, product pages, checkout, speed and CRO from day one.",
    },
    {
      title: "Email Marketing (Klaviyo & Mailchimp)",
      body: "Welcome, abandoned cart, browse abandon, post-purchase and win-back flows that recover revenue and grow LTV on autopilot.",
    },
    {
      title: "Dropshipping Store Setup",
      body: "End-to-end dropshipping stores, winning product research, supplier vetting, store build and launch-ready funnels.",
    },
    {
      title: "Shopify Redesign & Migration",
      body: "Migrate from Wix, WooCommerce or Etsy to Shopify, or redesign your existing store into a conversion-focused experience.",
    },
    {
      title: "Conversion Rate Optimization (CRO)",
      body: "Product page rewrites, upsells, bundles, social proof and A/B tests to grow revenue without spending more on ads.",
    },
    {
      title: "Ecommerce Growth Partnership",
      body: "Ongoing support across storefront, email and lifecycle, with one partner focused on compounding your monthly revenue.",
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
            From first pixel to first million, everything a DTC founder needs under one roof.
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
                >
                  <source src={p.src} type="video/webm" />
                  <source src={p.fallback} type="video/mp4" />
                </video>
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

function PortfolioCTA() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-cream/60 py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-brand">See the full portfolio</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">
            Like what you see? There's plenty more where that came from.
          </h2>
          <p className="mt-4 text-muted-foreground">
             Explore every live Shopify store I've designed, built and scaled, or book a free
            call and let's plan yours next.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground transition hover:opacity-90"
          >
            View all projects
          </a>
          <a
            href={UPWORK}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium transition hover:bg-background"
          >
            See my Upwork portfolio →
          </a>
          <a
            href="#lead"
            className="rounded-full border border-brand/30 bg-background px-6 py-3 text-sm font-medium text-brand transition hover:bg-brand hover:text-brand-foreground"
          >
            Start your project
          </a>
        </div>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  {
    name: "Marcus Reid",
    role: "Founder, Shopael",
    type: "DTC Brand",
    quote:
      "Taiwo rebuilt our Shopify store from scratch and our conversion rate jumped almost overnight. She just gets ecommerce: design, copy, funnel, everything.",
  },
  {
    name: "Amelia Chen",
    role: "Founder, Tillie Beads",
    type: "Handmade Brand",
    quote:
      "I came to Taiwo as a small handmade brand and left with a store that looks like a global label. Sales tripled in the first month after launch.",
  },
  {
    name: "David Okafor",
    role: "Founder, 9Max",
    type: "Ecommerce Startup",
    quote:
      "She didn't just build our store, she built our entire launch strategy. Klaviyo flows alone are pulling 32% of our monthly revenue now.",
  },
  {
    name: "Sarah Whitfield",
    role: "Founder, Fashion Edit",
    type: "Fashion Founder",
    quote:
      "Taiwo is one of those rare people who combines taste with strategy. Our new store finally feels premium, and the numbers back it up.",
  },
  {
    name: "Jordan Mills",
    role: "Founder, Velnor",
    type: "Wellness Brand",
    quote:
      "We were stuck at 5-figures a month. Six weeks after Taiwo optimized our funnel and emails, we crossed six-figures. No new ad spend.",
  },
  {
    name: "Rachel Thompson",
    role: "Owner, Main Street Mercantile",
    type: "Retail Founder",
    quote:
      "Taiwo migrated our shop from another platform without losing a single order. Beautiful, fast, and finally something we're proud to share.",
  },
  {
    name: "Ibrahim Yusuf",
    role: "Founder, Treadmill Belt Pros",
    type: "Niche Ecommerce",
    quote:
      "She turned a niche product into a real brand. Product pages, upsells and email all just work. Best hire I've made this year.",
  },
  {
    name: "Priya Nair",
    role: "Founder, tdK for Her",
    type: "Streetwear Founder",
    quote:
      "Taiwo brought our vision to life and made it convert. The launch sold out in under 48 hours. I recommend her to every founder I know.",
  },
  {
    name: "Luke Andersen",
    role: "Solo Founder",
    type: "Dropshipping",
    quote:
      "I'm a one-man show and Taiwo made me look like a real team. Store, supplier setup and flows, she handled all of it and I finally started scaling.",
  },
  {
    name: "Chiamaka Eze",
    role: "Founder, Skincare Startup",
    type: "Beauty Brand",
    quote:
      "She doesn't only work with big DTC brands, she treated my small startup with the same care and strategy. My store finally feels legit.",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="border-t border-border bg-background py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-brand">Client love</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">
            Trusted by founders, not just DTC brands.
          </h2>
        </div>

        <div className="mt-12 columns-1 gap-6 md:columns-2 lg:columns-3 [column-fill:_balance]">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="mb-6 break-inside-avoid rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-1 text-accent" aria-label="5 star rating">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i} className="text-base">{s}</span>
                ))}
              </div>
              <blockquote className="mt-4 font-display text-lg leading-snug text-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand font-display text-sm font-semibold text-brand-foreground">
                  {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </span>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
                <span className="ml-auto rounded-full border border-border bg-cream px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                  {t.type}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-muted-foreground">
            Founder, indie brand, or scaling DTC label, I'd love to help you next.
          </p>
          <a
            href="#lead"
            className="rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-brand-foreground transition hover:opacity-90"
          >
            Book your free strategy call →
          </a>
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
              I'm Taiwo Khadijah, a Shopify Specialist and Email Marketing Guru helping
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
            <img src={taiwoPhoto} alt="Taiwo Khadijah" className="w-full object-cover" />
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
    const subject = encodeURIComponent(`New project inquiry: ${form.goal}`);
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
              clear next step, no fluff, no obligation.
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
