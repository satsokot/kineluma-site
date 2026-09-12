const IconLeaf = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M26.8 5.1C18.4 5 10.5 8.6 7.2 15.2c-2.7 5.5.4 10.4 5.7 10.4 7.8 0 11.9-9.5 13.9-20.5Z" fill="currentColor"/><path d="M8.6 24.8c3.1-5.9 7.8-10.3 14.3-13.4" fill="none" stroke="#08202a" strokeWidth="1.9" strokeLinecap="round"/></svg>
);

const IconHeart = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 26.5 5.3 16.2C.2 11.2 3.4 3.8 9.5 4.2c3 .2 5.1 2.2 6.5 4.2 1.4-2 3.5-4 6.5-4.2 6.1-.4 9.3 7 4.2 12L16 26.5Z" fill="currentColor"/></svg>
);

const IconGift = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M4 13h24v15H4zM2.5 8.5h27v6h-27z" fill="currentColor"/><path d="M16 8.5v19M16 8.2c-2.1-4.7-7.7-5.1-8.2-1.5-.3 2.5 3.3 2.8 8.2 1.5Zm0 0c2.1-4.7 7.7-5.1 8.2-1.5.3 2.5-3.3 2.8-8.2 1.5Z" fill="none" stroke="#08202a" strokeWidth="1.8"/></svg>
);

function Mountains() {
  return (
    <svg className="mountains" viewBox="0 0 1500 700" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="mFar" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#68818b"/><stop offset=".35" stopColor="#2f4854"/><stop offset="1" stopColor="#0a1a21"/></linearGradient>
        <linearGradient id="mNear" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#223a45"/><stop offset="1" stopColor="#071117"/></linearGradient>
        <filter id="soft"><feGaussianBlur stdDeviation="8"/></filter>
      </defs>
      <path d="M0 430 90 352 156 383 220 300 278 350 347 225 405 320 465 190 543 327 604 268 677 358 744 286 825 385 909 312 990 400 1090 348 1180 425 1260 374 1360 430 1500 390V700H0Z" fill="url(#mFar)" opacity=".92"/>
      <path d="m266 347 79-120 25 46 33-51 62-31 37 78 42 55-72-24-56 24-64-2Z" fill="#dce6e6" opacity=".7"/>
      <path d="M0 520c120-68 202-42 301-86 109-48 225 24 326-19 130-55 246 29 362-7 107-33 191 35 293 8 99-27 151-20 218 8V700H0Z" fill="url(#mNear)"/>
      <path d="M0 559c180-70 294-20 419-55 124-35 232-15 354 17 124 32 205-19 309-4 153 23 282 20 418-16V700H0Z" fill="#061015" opacity=".92"/>
      <ellipse cx="540" cy="402" rx="410" ry="84" fill="#a8d7d8" opacity=".05" filter="url(#soft)"/>
    </svg>
  );
}

function City() {
  const buildings = [
    [24,90,20],[52,125,18],[78,72,21],[108,150,17],[134,104,18],[160,188,22],[193,122,19],[224,230,24],[258,142,18],[287,95,20],[315,178,19],[347,132,15],[373,250,26],[412,155,20],[446,116,17],[477,190,22],[514,128,18],[545,223,27],[584,146,18],[612,102,19],[644,175,22]
  ];
  return (
    <svg className="city" viewBox="0 0 700 330" preserveAspectRatio="none" aria-hidden="true">
      <defs><linearGradient id="cityG" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#8bb5bd" stopOpacity=".78"/><stop offset="1" stopColor="#17323b" stopOpacity=".72"/></linearGradient></defs>
      <path d="M0 280C150 255 258 266 372 244c116-22 208-11 328 3v83H0Z" fill="#0a2027" opacity=".72"/>
      {buildings.map(([x,h,w],i)=><rect key={i} x={x} y={280-h} width={w} height={h} rx="1.5" fill="url(#cityG)" opacity={.55+(i%4)*.08}/>)}
      <rect x="370" y="18" width="25" height="262" fill="#a8cbd2" opacity=".73"/><path d="M382.5 18V0" stroke="#d8eff1" strokeWidth="2" opacity=".8"/>
      <path d="M36 253h635" stroke="#72dfea" strokeOpacity=".16" strokeWidth="2"/>
      {[75,126,175,228,286,342,430,490,564,628].map((x,i)=><circle key={i} cx={x} cy={258-(i%3)*14} r="2.2" fill={i%2?"#bfff38":"#50efff"} opacity=".85"/>)}
    </svg>
  );
}

function RockPlatform() {
  return (
    <svg className="rocks" viewBox="0 0 700 250" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 230 53 164l70-13 36-51 84 6 41-39 72 18 49-34 95 25 49 64 82 20 69 70Z" fill="#081015"/>
      <path d="m53 165 70-14 34-50 47 65-60 41Z" fill="#202d31"/><path d="m159 101 84 6 39-38 28 85-73 43Z" fill="#17272b"/>
      <path d="m310 70 72 17 48-34 9 80-77 44Z" fill="#25363a"/><path d="m440 54 95 24 48 64-106-11Z" fill="#1a2c31"/>
      <path d="M0 229h700v21H0Z" fill="#02070a"/>
    </svg>
  );
}

function Athlete() {
  return (
    <svg className="athlete" viewBox="0 0 260 470" aria-label="Athlete standing on rock">
      <defs>
        <linearGradient id="skin" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#d6aa82"/><stop offset="1" stopColor="#8b5b43"/></linearGradient>
        <linearGradient id="wear" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#20272b"/><stop offset="1" stopColor="#05080a"/></linearGradient>
      </defs>
      <path d="M145 53c-10-22-1-46 16-50 19-5 38 9 39 30 0 13-8 23-16 31l-3 20-30 1-5-22Z" fill="url(#skin)"/>
      <path d="M159 8c29-8 52 13 43 36-3-10-10-17-18-20 5 12-4 29-23 35-5-16-10-30-2-51Z" fill="#111517"/>
      <path d="M190 22c16 3 37 12 42 29-11-7-24-7-35-3 11 9 15 20 13 31-12-7-19-18-20-31Z" fill="#0a0d0f"/>
      <path d="M143 83c19-11 38-9 52 2 10 27 10 58-1 87l-2 23-64 2-3-31c-11-28-5-60 18-83Z" fill="url(#wear)"/>
      <path d="M126 98c-15 17-23 40-27 67l-11 61 19 6 18-55 18-54Z" fill="url(#skin)"/><path d="M197 93c15 13 26 31 31 53l16 47-17 8-22-45-23-43Z" fill="url(#skin)"/>
      <path d="m130 196 62-1 11 63-24 87-24-5 4-83-13 55-17 78-27-5 13-94Z" fill="#080b0d"/>
      <path d="m113 384 26 6-10 40 23 13-7 17-50-8 5-22Z" fill="#0b0e10"/><path d="m177 339 26 5 25 61 25 20-12 16-40-21-26-45Z" fill="#0b0e10"/>
      <path d="m98 450 54 7-5 10-59-3Z" fill="#d9e3e4" opacity=".7"/><path d="m203 419 39 22-5 10-45-23Z" fill="#d9e3e4" opacity=".7"/>
      <path d="M128 198c24 8 45 8 67 0" fill="none" stroke="#647176" strokeWidth="2" opacity=".55"/>
    </svg>
  );
}

function Token() {
  return (
    <div className="token" aria-label="KNLM token">
      <svg viewBox="0 0 520 520" aria-hidden="true">
        <defs>
          <radialGradient id="coin" cx="42%" cy="34%" r="72%"><stop stopColor="#173842"/><stop offset=".38" stopColor="#0b1b22"/><stop offset=".72" stopColor="#050b0f"/><stop offset="1" stopColor="#010304"/></radialGradient>
          <linearGradient id="rim" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#6bf2ff"/><stop offset=".24" stopColor="#17323b"/><stop offset=".56" stopColor="#baff35"/><stop offset=".8" stopColor="#15313a"/><stop offset="1" stopColor="#50eaff"/></linearGradient>
          <filter id="glow"><feGaussianBlur stdDeviation="8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        <g transform="rotate(-18 260 260)">
          <ellipse cx="260" cy="260" rx="183" ry="218" fill="#020507" stroke="url(#rim)" strokeWidth="19"/>
          <ellipse cx="260" cy="260" rx="153" ry="188" fill="url(#coin)" stroke="#1e4b55" strokeWidth="3"/>
          <ellipse cx="260" cy="260" rx="127" ry="160" fill="none" stroke="#1ef0ff" strokeOpacity=".35" strokeWidth="2"/>
          <path d="M150 112c65-42 157-55 230-18" fill="none" stroke="#fff" strokeOpacity=".18" strokeWidth="8" strokeLinecap="round"/>
          <text x="260" y="285" textAnchor="middle" fill="#62f7ff" fontSize="66" fontWeight="800" fontStyle="italic" letterSpacing="-6">KNLM</text>
        </g>
        <ellipse cx="258" cy="260" rx="241" ry="103" fill="none" stroke="#42efff" strokeWidth="4" opacity=".8" filter="url(#glow)" transform="rotate(-12 258 260)"/>
        <ellipse cx="256" cy="258" rx="229" ry="121" fill="none" stroke="#bfff38" strokeWidth="3" opacity=".78" filter="url(#glow)" transform="rotate(34 256 258)"/>
        <ellipse cx="260" cy="260" rx="220" ry="89" fill="none" stroke="#7ef6ff" strokeWidth="2" opacity=".55" transform="rotate(67 260 260)"/>
        <circle cx="67" cy="307" r="7" fill="#c8ff38" filter="url(#glow)"/><circle cx="423" cy="163" r="7" fill="#54efff" filter="url(#glow)"/><circle cx="349" cy="433" r="6" fill="#c8ff38" filter="url(#glow)"/>
      </svg>
    </div>
  );
}

export default function KineLumaHero() {
  return (
    <main className="hero-page">
      <header className="hero-nav">
        <a className="hero-logo" href="#" aria-label="KineLuma home"><span>K</span>ineluma</a>
        <nav className="hero-menu" aria-label="Primary navigation">
          <a href="#vision">Vision</a><a href="#how">How It Works</a><a href="#mvp">MVP</a><a href="#knlm">KNLM</a><a href="#roadmap">Roadmap</a><a href="#community">Community</a>
        </nav>
        <div className="hero-nav-actions"><a className="join-top" href="#community">Join the Movement <b>→</b></a><span className="language">EN⌄</span><button className="hamburger" aria-label="Menu"><i/><i/><i/></button></div>
      </header>

      <section className="hero-only">
        <div className="sky" />
        <div className="sun-haze" />
        <Mountains />
        <City />
        <div className="water" />
        <RockPlatform />
        <Athlete />
        <Token />
        <div className="scene-shade" />

        <div className="hero-copy-block">
          <p className="hero-kicker">MOVEMENT MADE MEASURABLE</p>
          <h1>Human<br/>Movement<br/><span>Real Impact</span></h1>
          <p className="hero-description">Kineluma turns everyday human movement into clean<br className="desktop-break"/> energy intelligence — unlocking a healthier, fairer<br className="desktop-break"/> and brighter tomorrow.</p>
          <div className="hero-buttons"><a className="primary-cta" href="#community">Join the Movement <b>→</b></a><a className="watch-cta" href="#video">Watch Video <span>▶</span></a></div>
          <div className="hero-values">
            <div className="value"><span className="value-icon leaf"><IconLeaf/></span><b>CLEANER<br/>PLANET</b></div>
            <div className="value"><span className="value-icon heart"><IconHeart/></span><b>HEALTHIER<br/>PEOPLE</b></div>
            <div className="value"><span className="value-icon gift"><IconGift/></span><b>FAIRER<br/>REWARDS</b></div>
          </div>
          <div className="scroll-label"><span>↓</span> SCROLL TO EXPLORE</div>
        </div>

        <div className="right-claim">A BRIGHTER<br/>TOMORROW<br/>IN MOTION</div>
      </section>
    </main>
  );
}
