"use client";

import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { COMMUNITY_ART, EARTH_ART, HERO_ART, MVP_ART, RUNNER_ART, TOKEN_ART } from "./visuals";

const FlowStep = ({ index, letter, title, subtitle, tone = "cyan" }: { index: string; letter: string; title: string; subtitle: string; tone?: "cyan" | "lime" }) => (
  <div className="flow-step">
    <b>{index}</b>
    <span className={`flow-icon ${tone}`}>{letter}</span>
    <strong>{title}</strong>
    <small>{subtitle}</small>
  </div>
);

export default function KineLumaLanding() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ lerp: 0.085, smoothWheel: true });
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    lenis.on("scroll", ScrollTrigger.update);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(el, { y: 36, opacity: 0 }, { y: 0, opacity: 1, duration: 0.85, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", once: true } });
      });
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        gsap.to(el, { yPercent: -9, scale: 1.035, ease: "none", scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true } });
      });
    });

    return () => {
      ctx.revert();
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="kineluma-site">
      <header className="site-header">
        <a className="logo" href="#top" aria-label="KineLuma home"><span>K</span>ineluma</a>
        <nav className="desktop-nav"><a href="#vision">Vision</a><a href="#how">How It Works</a><a href="#mvp">MVP</a><a href="#knlm">KNLM</a><a href="#roadmap">Roadmap</a><a href="#community">Community</a></nav>
        <div className="header-actions"><a className="join-small" href="#community">Join the Movement <span>→</span></a><span className="lang">EN</span><button className="menu-button" aria-label="Menu"><i/><i/><i/></button></div>
      </header>

      <section className="hero" id="top">
        <div className="hero-scene" data-parallax><img src={HERO_ART} alt="KineLuma energy landscape" /></div>
        <div className="hero-overlay" />
        <div className="hero-content" data-reveal>
          <p className="eyebrow">Movement made measurable</p>
          <h1>Human<br/>Movement<br/><span>Real Impact</span></h1>
          <p className="hero-copy">KineLuma turns everyday exercise into measurable clean energy, verifies every session, and links real effort to transparent value.</p>
          <div className="hero-actions"><a className="btn btn-primary" href="#community">Join the Movement <span>→</span></a><a className="btn btn-ghost" href="#how">How It Works <span className="play">▶</span></a></div>
          <div className="hero-benefits"><div><span className="benefit-dot cyan"/>Cleaner planet</div><div><span className="benefit-dot lime"/>Healthier people</div><div><span className="benefit-dot cyan"/>Fairer rewards</div></div>
        </div>
        <div className="hero-promise">A brighter<br/>tomorrow<br/>in motion</div>
        <a className="scroll-cue" href="#vision"><span>↓</span> Scroll to explore</a>
      </section>

      <section className="section vision-section" id="vision">
        <div className="section-number">01</div>
        <div className="vision-copy" data-reveal><p className="eyebrow lime">Our vision</p><h2>A Cleaner,<br/>Healthier, Fairer<br/>World</h2><p>Exercise should create more than fitness data. KineLuma is designed so verified human effort can generate electrical energy, measurable impact, and transparent rewards.</p><a className="outline-link" href="#how">Learn how it works <span>→</span></a></div>
        <div className="vision-earth" data-parallax><img src={EARTH_ART} alt="Connected Earth visualization" /></div>
        <div className="vision-points" data-reveal><div><span>01</span><strong>Clean energy insights</strong></div><div><span>02</span><strong>Verified participation</strong></div><div><span>03</span><strong>Real-world impact</strong></div></div>
      </section>

      <section className="section how-section" id="how">
        <div className="section-number">02</div>
        <div className="how-copy" data-reveal><p className="eyebrow lime">Simple. Real. Impactful.</p><h2>Move. Measure.<br/>Verify. Reward.</h2><div className="flow"><FlowStep index="01" letter="M" title="Movement" subtitle="You exercise"/><em>→</em><FlowStep index="02" letter="E" title="Energy" subtitle="We measure" tone="lime"/><em>→</em><FlowStep index="03" letter="P" title="Proof" subtitle="System verifies"/><em>→</em><FlowStep index="04" letter="R" title="Reward" subtitle="You earn value" tone="lime"/></div><a className="outline-link" href="#mvp">Explore the system <span>→</span></a></div>
        <div className="runner-visual" data-parallax><img src={RUNNER_ART} alt="Athlete running toward a future city" /></div>
        <div className="how-mantra">Move<br/>Measure<br/>Make a difference</div>
      </section>

      <section className="cards-grid">
        <article className="feature-card mvp-card" id="mvp"><span className="card-index">03</span><div data-reveal><p className="eyebrow">MVP preview</p><h3>From Motion<br/>to Insights</h3><p>The MVP identifies the user, measures generated electricity in real time, signs the session data, and sends verified output to the rewards layer.</p><a className="outline-link" href="#how">View MVP <span>→</span></a></div><img className="card-visual phone-visual" src={MVP_ART} alt="KineLuma MVP dashboard" /></article>
        <article className="feature-card token-card" id="knlm"><span className="card-index">04</span><div data-reveal><p className="eyebrow">KNLM token</p><h3>More Movement.<br/>More Possibilities.</h3><p>KNLM is designed to connect verified human-powered energy and participation to a transparent digital reward layer.</p><a className="outline-link" href="#roadmap">Explore KNLM <span>→</span></a></div><img className="card-visual token-visual" src={TOKEN_ART} alt="KNLM token" /></article>
        <article className="feature-card roadmap-card" id="roadmap"><span className="card-index">05</span><div data-reveal><p className="eyebrow">Roadmap</p><h3>Build.<br/>Pilot. Scale.</h3><div className="roadmap-list"><div><b>01</b><span>Prototype & energy validation</span></div><div><b>02</b><span>Pilot equipment & user testing</span></div><div><b>03</b><span>Verified rewards infrastructure</span></div><div><b>04</b><span>Network and partner expansion</span></div></div></div></article>
      </section>

      <section className="community-section" id="community">
        <div className="community-copy" data-reveal><p className="eyebrow lime">Stronger together</p><h2>Be Part of a<br/>Global Movement</h2><p>KineLuma brings together people, gyms, energy-minded communities, and partners around a simple idea: movement can create measurable value.</p><a className="btn btn-primary" href="mailto:hello@kineluma.site">Join Community <span>→</span></a></div>
        <div className="community-visual" data-parallax><img src={COMMUNITY_ART} alt="KineLuma community overlooking the mountains" /></div><div className="community-mantra">People<br/>move<br/>change<br/>happens</div>
      </section>

      <footer className="site-footer"><a className="logo" href="#top"><span>K</span>ineluma</a><nav><a href="#vision">Vision</a><a href="#how">How It Works</a><a href="#mvp">MVP</a><a href="#knlm">KNLM</a><a href="#roadmap">Roadmap</a><a href="#community">Community</a></nav><small>© 2026 KineLuma. Human movement, measurable impact.</small></footer>
    </main>
  );
}
