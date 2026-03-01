import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    const profileImage = "/profile/me.JPG"; // ensure exact filename in public/profile

    return (
        <>
            <style>{`
                /* entrance: fade + slight raise */
                .hero-enter {
                    opacity: 0;
                    transform: translateY(12px);
                    animation: hero-enter 600ms cubic-bezier(.2,.9,.2,1) forwards;
                }
                @keyframes hero-enter {
                    to { opacity: 1; transform: translateY(0); }
                }

                /* subtle float for the portrait */
                .float-slow {
                    animation: float-y 6s ease-in-out infinite;
                }
                @keyframes float-y {
                    0%   { transform: translateY(0); }
                    50%  { transform: translateY(-6px); }
                    100% { transform: translateY(0); }
                }

                /* portrait wrapper & glow */
                .portrait-wrap {
                    position: relative;
                    display: inline-block;
                    overflow: visible; /* allow glow to show */
                }
                .portrait-glow {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    width: 220%;
                    height: 180%;
                    pointer-events: none;
                    z-index: 0;
                    border-radius: 20px;
                    background: radial-gradient(circle at 50% 40%,
                        rgba(99,102,241,0.30) 0%,
                        rgba(59,130,246,0.18) 25%,
                        rgba(99,102,241,0.07) 55%,
                        transparent 100%);
                    filter: blur(36px);
                    opacity: 0.95;
                    mix-blend-mode: screen;
                }

                /* frame styling (glass + subtle border & shadow) */
                .profile-frame {
                    transition: transform .35s ease, box-shadow .35s ease;
                    will-change: transform;
                    position: relative;
                    z-index: 1;
                    border-radius: 14px;
                    overflow: hidden;
                    padding: 0.95rem;
                    background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));
                    border: 1px solid rgba(255,255,255,0.06);
                    backdrop-filter: blur(6px) saturate(120%);
                    box-shadow: 0 8px 20px rgba(2,6,23,0.08);
                }
                .profile-frame:hover {
                    transform: translateY(-8px) scale(1.02);
                    box-shadow: 0 22px 50px rgba(2,6,23,0.20);
                }

                /* optional inner accent strip */
                .profile-accent {
                    position: absolute;
                    right: -36%;
                    top: -20%;
                    width: 220px;
                    height: 220px;
                    border-radius: 9999px;
                    background: linear-gradient(135deg, rgba(99,102,241,0.06), rgba(59,130,246,0.04));
                    z-index: 0;
                    pointer-events: none;
                    filter: blur(24px);
                }

                /* reduce motion preference */
                @media (prefers-reduced-motion: reduce) {
                    .hero-enter, .float-slow, .profile-frame { animation: none; transition: none; transform: none; }
                    .portrait-glow, .profile-accent { filter: none; opacity: 0.8; }
                }

                /* Responsive spacing: ensure hero text sits below top header on mobile */
                /* default spacing (desktop) is handled via Tailwind utility classes (md:pt-12) */
                .hero-section-inner { padding-top: 7rem; padding-bottom: 3rem; } /* fallback */

                @media (max-width: 767px) {
                    /* increase top padding so mobile text doesn't crowd the site header */
                    .hero-section-inner { padding-top: 9rem; padding-bottom: 2.5rem; }
                    /* ensure portrait doesn't overflow and text has breathing room */
                    .profile-frame { padding: 0.75rem; }
                    .portrait-glow { width: 260%; height: 200%; filter: blur(30px); }
                }
            `}</style>

            <section id="hero" className="relative bg-secondary/10 overflow-hidden">
                <div className="hero-section-inner relative z-10 md:h-[520px] h-auto flex items-center">
                    <div className="container max-w-6xl mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div className="text-center md:text-left mb-8 md:mb-0 hero-enter">
                                <div className="space-y-6 max-w-xl mx-auto md:mx-0">
                                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-foreground">
                                        <span className="opacity-80">Hi, I'm</span>
                                        <span className="text-primary ml-2">Umezinwa</span>
                                        <span className="text-gradient ml-2">John</span>
                                    </h1>

                                    <p className="text-lg md:text-xl text-muted-foreground justify-center">
                                        I design analytical frameworks that turn complex data into strategic advantage.
                                        Through <span className=" ml-2 font-bold">data analytics, performance optimization, growth diagnostics, and impact evaluation, </span>
                                        I help organizations strengthen operations, measure what matters, and drive sustainable results.
                                    </p>

                                    <div className="pt-4">
                                        <a href="#projects" className="cosmic-button inline-block">
                                            View my Work
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center md:justify-end">
                                <div className="portrait-wrap hero-enter">
                                    <div className="portrait-glow" aria-hidden="true" />
                                    <div className="profile-accent" aria-hidden="true" />
                                    <div className="profile-frame">
                                        <img
                                            src={profileImage}
                                            alt="Umezinwa John"
                                            className="w-auto max-h-56 md:max-h-[360px] object-contain float-slow"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
                    <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                    <ArrowDown className="h-5 w-5 text-primary" />
                </div>
            </section>
        </>
    );
};