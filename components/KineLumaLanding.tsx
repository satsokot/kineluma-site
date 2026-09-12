"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import * as THREE from "three";

function TokenModel() {
  const group = useRef<THREE.Group>(null);
  const orbitA = useRef<THREE.Mesh>(null);
  const orbitB = useRef<THREE.Mesh>(null);
  const orbitC = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.18;
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, state.pointer.y * 0.16, 3, delta);
    group.current.rotation.z = THREE.MathUtils.damp(group.current.rotation.z, -state.pointer.x * 0.12, 3, delta);
    if (orbitA.current) orbitA.current.rotation.z += delta * 0.34;
    if (orbitB.current) orbitB.current.rotation.z -= delta * 0.28;
    if (orbitC.current) orbitC.current.rotation.z += delta * 0.22;
  });

  return (
    <group ref={group} rotation={[0.12, -0.28, -0.18]}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[1.58, 1.58, 0.34, 96]} />
        <meshPhysicalMaterial color="#07151c" metalness={0.95} roughness={0.16} clearcoat={1} clearcoatRoughness={0.06} />
      </mesh>
      <mesh position={[0, 0, 0.19]}>
        <circleGeometry args={[1.36, 96]} />
        <meshPhysicalMaterial color="#0a1a21" metalness={0.72} roughness={0.22} emissive="#043c49" emissiveIntensity={0.52} />
      </mesh>
      <mesh position={[0, 0, 0.22]}>
        <ringGeometry args={[1.19, 1.31, 96]} />
        <meshBasicMaterial color="#36edff" transparent opacity={0.62} toneMapped={false} />
      </mesh>
      <mesh position={[0, 0, 0.235]}>
        <ringGeometry args={[0.94, 0.985, 96]} />
        <meshBasicMaterial color="#c8ff38" transparent opacity={0.7} toneMapped={false} />
      </mesh>

      <mesh ref={orbitA} rotation={[1.18, 0.2, 0.3]}>
        <torusGeometry args={[2.0, 0.018, 10, 180]} />
        <meshBasicMaterial color="#2cecff" toneMapped={false} transparent opacity={0.86} />
      </mesh>
      <mesh ref={orbitB} rotation={[0.76, 0.65, -0.7]}>
        <torusGeometry args={[2.18, 0.017, 10, 180]} />
        <meshBasicMaterial color="#c8ff38" toneMapped={false} transparent opacity={0.76} />
      </mesh>
      <mesh ref={orbitC} rotation={[1.44, -0.44, 0.62]}>
        <torusGeometry args={[1.88, 0.012, 10, 180]} />
        <meshBasicMaterial color="#ffffff" toneMapped={false} transparent opacity={0.38} />
      </mesh>

      <pointLight position={[3.8, 2.4, 4.8]} intensity={44} color="#56edff" />
      <pointLight position={[-3.2, -1.8, 3.5]} intensity={28} color="#b9ff36" />
      <directionalLight position={[2, 5, 6]} intensity={4.5} color="#ffffff" />
    </group>
  );
}

function EnergyToken() {
  return (
    <div className="token-stage" aria-label="KineLuma energy token">
      <Canvas camera={{ position: [0, 0, 6.5], fov: 42 }} dpr={[1, 1.65]} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.45} />
        <TokenModel />
      </Canvas>
      <div className="token-mark">KNLM</div>
      <div className="token-glow" />
    </div>
  );
}

function LandscapeArt() {
  return (
    <svg className="landscape-art" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#061621" />
          <stop offset="0.5" stopColor="#0b2632" />
          <stop offset="1" stopColor="#f2a353" stopOpacity="0.42" />
        </linearGradient>
        <linearGradient id="mountain" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#294554" />
          <stop offset="1" stopColor="#061017" />
        </linearGradient>
        <linearGradient id="ridge" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#071018" />
          <stop offset="1" stopColor="#0c1b1e" />
        </linearGradient>
        <radialGradient id="sun" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#fff3bf" stopOpacity="0.95" />
          <stop offset="0.35" stopColor="#ffbd65" stopOpacity="0.46" />
          <stop offset="1" stopColor="#ff9f48" stopOpacity="0" />
        </radialGradient>
        <filter id="blur20"><feGaussianBlur stdDeviation="20" /></filter>
      </defs>
      <rect width="1600" height="900" fill="url(#sky)" />
      <circle cx="1320" cy="265" r="180" fill="url(#sun)" filter="url(#blur20)" />
      <path d="M0 545 L120 430 220 500 340 330 435 445 560 270 690 450 810 350 940 480 1040 390 1150 500 1260 420 1380 525 1480 460 1600 520 1600 900 0 900Z" fill="url(#mountain)" opacity="0.94" />
      <path d="M0 640 C240 555 360 630 510 590 C700 540 850 620 1010 580 C1190 535 1390 610 1600 555 L1600 900 0 900Z" fill="url(#ridge)" />
      <path d="M0 735 C250 695 470 760 680 705 C900 645 1110 720 1320 665 C1440 635 1530 640 1600 630 L1600 900 0 900Z" fill="#03090d" />
      <g opacity="0.68" fill="#9fd9e7">
        <rect x="1180" y="408" width="12" height="115" rx="2" />
        <rect x="1200" y="370" width="14" height="154" rx="2" />
        <rect x="1224" y="427" width="18" height="96" rx="2" />
        <rect x="1252" y="340" width="13" height="183" rx="2" />
        <rect x="1275" y="385" width="16" height="138" rx="2" />
        <rect x="1302" y="300" width="19" height="223" rx="2" />
        <rect x="1335" y="414" width="14" height="109" rx="2" />
        <rect x="1360" y="350" width="20" height="173" rx="2" />
      </g>
      <path d="M1309 299 L1312 222" stroke="#bdeaff" strokeWidth="3" opacity="0.72" />
      <path d="M1050 565 C1190 560 1310 545 1460 518" stroke="#63eaff" strokeWidth="4" opacity="0.16" fill="none" />
    </svg>
  );
}

function EarthNetwork() {
  return (
    <div className="earth-wrap" aria-hidden="true">
      <div className="earth-sphere">
        <div className="earth-grid earth-grid-a" />
        <div className="earth-grid earth-grid-b" />
        <svg className="earth-lines" viewBox="0 0 500 500">
          <g fill="none" strokeLinecap="round">
            <path d="M58 264 Q164 132 251 96 Q346 66 444 192" stroke="#2be9ff" strokeWidth="1.6" opacity=".7" />
            <path d="M64 318 Q174 224 246 213 Q349 198 428 301" stroke="#bfff36" strokeWidth="1.4" opacity=".66" />
            <path d="M111 394 Q186 298 250 267 Q332 228 395 145" stroke="#31edff" strokeWidth="1.2" opacity=".58" />
            <path d="M131 103 Q233 183 280 253 Q328 324 372 403" stroke="#bfff36" strokeWidth="1.1" opacity=".5" />
          </g>
          {[ [58,264], [251,96], [444,192], [64,318], [246,213], [428,301], [111,394], [250,267], [395,145], [131,103], [372,403] ].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="4" fill={i%2 ? "#c7ff3b" : "#35ebff"} />)}
        </svg>
      </div>
      <div className="earth-halo" />
    </div>
  );
}

function RunnerArt() {
  return (
    <svg className="runner-art" viewBox="0 0 700 430" aria-hidden="true">
      <defs>
        <linearGradient id="trail" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#20e8ff" /><stop offset="1" stopColor="#c8ff38" /></linearGradient>
        <filter id="trailGlow"><feGaussianBlur stdDeviation="8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <path d="M8 360 C140 337 222 375 330 335 C435 296 530 310 690 245" fill="none" stroke="url(#trail)" strokeWidth="8" filter="url(#trailGlow)" opacity=".92" />
      <path d="M12 379 C158 360 240 393 356 353 C470 314 570 320 694 270" fill="none" stroke="#32e8ff" strokeWidth="2" opacity=".38" />
      <g transform="translate(390 85) rotate(-7)" fill="#071117" stroke="#9eeeff" strokeOpacity=".3">
        <circle cx="68" cy="34" r="26" fill="#0b151a" />
        <path d="M54 66 C40 113 50 166 76 190 C93 174 108 129 111 93 C95 70 77 62 54 66Z" />
        <path d="M61 183 L22 270 L50 284 L88 210" strokeWidth="20" strokeLinecap="round" />
        <path d="M88 197 L145 255 L168 235 L112 167" strokeWidth="18" strokeLinecap="round" />
        <path d="M53 94 L0 147" strokeWidth="17" strokeLinecap="round" />
        <path d="M101 92 L151 127" strokeWidth="17" strokeLinecap="round" />
      </g>
    </svg>
  );
}

const FeatureIcon = ({ children }: { children: React.ReactNode }) => <span className="feature-icon">{children}</span>;

export default function KineLumaLanding() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    lenis.on("scroll", ScrollTrigger.update);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(el, { y: 42, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 86%", once: true },
        });
      });
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        gsap.to(el, { yPercent: -12, ease: "none", scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true } });
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
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#vision">Vision</a><a href="#how">How It Works</a><a href="#mvp">MVP</a><a href="#knlm">KNLM</a><a href="#roadmap">Roadmap</a><a href="#community">Community</a>
        </nav>
        <div className="header-actions"><a className="join-small" href="#community">Join the Movement <span>→</span></a><span className="lang">EN</span><button className="menu-button" aria-label="Open menu"><i/><i/><i/></button></div>
      </header>

      <section className="hero" id="top">
        <LandscapeArt />
        <div className="hero-overlay" />
        <div className="hero-content" data-reveal>
          <p className="eyebrow">Movement made measurable</p>
          <h1>Human<br/>Movement<br/><span>Real Impact</span></h1>
          <p className="hero-copy">KineLuma converts human movement into measurable clean energy, verifies every session, and turns real-world effort into transparent rewards.</p>
          <div className="hero-actions"><a className="btn btn-primary" href="#community">Join the Movement <span>→</span></a><a className="btn btn-ghost" href="#how">See How It Works <span className="play">▶</span></a></div>
          <div className="hero-benefits">
            <div><FeatureIcon>◒</FeatureIcon><span>Cleaner<br/>energy</span></div>
            <div><FeatureIcon>♥</FeatureIcon><span>Healthier<br/>people</span></div>
            <div><FeatureIcon>◆</FeatureIcon><span>Fairer<br/>rewards</span></div>
          </div>
        </div>
        <div className="hero-token" data-parallax><EnergyToken /></div>
        <div className="hero-promise">A brighter<br/>tomorrow<br/>in motion</div>
        <a className="scroll-cue" href="#vision"><span>↓</span> Scroll to explore</a>
      </section>

      <section className="section vision-section" id="vision">
        <div className="section-number">01</div>
        <div className="vision-copy" data-reveal>
          <p className="eyebrow lime">Our vision</p>
          <h2>A Cleaner,<br/>Healthier, Fairer<br/>World</h2>
          <p>Exercise should create more than fitness data. KineLuma is being designed as infrastructure where people generate real electrical energy while training, with verified output tied to transparent value and community impact.</p>
          <a className="outline-link" href="#how">Learn how it works <span>→</span></a>
        </div>
        <div className="vision-earth" data-parallax><EarthNetwork /></div>
        <div className="vision-points" data-reveal>
          <div><FeatureIcon>◒</FeatureIcon><strong>Clean energy insights</strong></div>
          <div><FeatureIcon>●</FeatureIcon><strong>Verified participation</strong></div>
          <div><FeatureIcon>↗</FeatureIcon><strong>Real-world impact</strong></div>
        </div>
      </section>

      <section className="section how-section" id="how">
        <LandscapeArt />
        <div className="dark-wash" />
        <div className="section-number">02</div>
        <div className="how-copy" data-reveal>
          <p className="eyebrow lime">How it works</p>
          <h2>Move. Measure.<br/>Verify. Reward.</h2>
          <div className="flow">
            <div className="flow-step"><b>01</b><span className="flow-icon cyan">🏃</span><strong>Movement</strong><small>You exercise</small></div><em>→</em>
            <div className="flow-step"><b>02</b><span className="flow-icon lime-bg">⚡</span><strong>Energy</strong><small>We measure</small></div><em>→</em>
            <div className="flow-step"><b>03</b><span className="flow-icon cyan">✓</span><strong>Proof</strong><small>System verifies</small></div><em>→</em>
            <div className="flow-step"><b>04</b><span className="flow-icon lime-bg">◆</span><strong>Reward</strong><small>You earn value</small></div>
          </div>
          <a className="outline-link" href="#mvp">Explore the system <span>→</span></a>
        </div>
        <div className="runner-wrap" data-parallax><RunnerArt /></div>
        <div className="how-mantra">Move<br/>Measure<br/>Make a difference</div>
      </section>

      <section className="cards-grid">
        <article className="feature-card mvp-card" id="mvp" data-reveal>
          <div className="card-index">03</div><p className="eyebrow">MVP preview</p><h3>From Motion<br/>to Live Proof</h3>
          <p>The prototype links rider identity to measured power, generated energy and session data, creating a verifiable record from the machine to the rewards layer.</p>
          <a className="outline-link" href="#mvp-specs">View MVP <span>→</span></a>
          <div className="phone-mock" id="mvp-specs"><div className="phone-notch"/><div className="phone-screen"><span>LIVE SESSION</span><strong>128.6 W</strong><small>Generated power</small><div className="metric-row"><i/><i/><i/><i/><i/><i/></div><div className="phone-stats"><span>0.084<br/><small>kWh</small></span><span>18:42<br/><small>time</small></span><span>✓<br/><small>verified</small></span></div></div></div>
        </article>

        <article className="feature-card token-card" id="knlm" data-reveal>
          <div className="card-index">04</div><p className="eyebrow">KNLM rewards layer</p><h3>Real Effort.<br/>Transparent Value.</h3>
          <p>KNLM is the planned digital rewards layer for verified activity. The aim is simple: connect measurable contribution to auditable value without hiding the underlying energy data.</p>
          <a className="outline-link" href="#community">Explore KNLM <span>→</span></a>
          <div className="mini-token"><span>KNLM</span><i/><b/></div>
        </article>

        <article className="feature-card roadmap-card" id="roadmap" data-reveal>
          <div className="card-index">05</div><p className="eyebrow">Roadmap</p><h3>Build. Prove.<br/>Scale.</h3>
          <div className="roadmap-list">
            <div><b>01</b><span>System architecture & research</span></div>
            <div><b>02</b><span>Energy-generating bike MVP</span></div>
            <div><b>03</b><span>Verified rewards pilot</span></div>
            <div><b>04</b><span>Community & network expansion</span></div>
          </div>
          <a className="outline-link" href="#community">Follow the roadmap <span>→</span></a>
        </article>
      </section>

      <section className="community-section" id="community">
        <div className="community-glow" />
        <div className="section-number">06</div>
        <div className="community-copy" data-reveal><p className="eyebrow lime">Community</p><h2>Be Part of a<br/>Global Movement</h2><p>KineLuma is for athletes, gyms, engineers, climate-minded builders and partners who believe everyday movement can produce measurable value.</p><a className="btn btn-primary" href="mailto:hello@kineluma.site">Join Community <span>→</span></a></div>
        <div className="community-visual" data-parallax>
          <div className="people-row">{["A","N","R","K","M","S"].map((x,i)=><span key={x} style={{transform:`translateY(${i%2?10:0}px)`}}>{x}</span>)}<b>10K+</b></div>
          <div className="summit"><i/><i/><i/><i/><i/></div>
          <div className="community-mantra">People move.<br/>Change happens.</div>
        </div>
      </section>

      <footer className="site-footer">
        <a className="logo" href="#top"><span>K</span>ineluma</a>
        <nav><a href="#vision">Vision</a><a href="#how">How It Works</a><a href="#mvp">MVP</a><a href="#knlm">KNLM</a><a href="#roadmap">Roadmap</a><a href="#community">Community</a></nav>
        <p>© 2026 KineLuma. Movement made measurable.</p>
      </footer>
    </main>
  );
}
