"use client";
import Book from "@/components/3D/Book/Book";
import Bug from "@/components/3D/Bug/Bug";
import Computer from "@/components/3D/Computer/Computer";
import { animate } from "animejs";
import { useEffect, useRef } from "react";

export default function Home() {
  const bugCursorRef = useRef<HTMLDivElement>(null);
  const bugSpinRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Laptop Animation
    const laptop = document.querySelector(".js-laptop-scene");
    if (laptop) {
      animate(laptop, {
        translateX: ["-50%", "0%"],
        "--screen-angle": ["270deg", "150deg"],
        "--laptop-rz": ["360deg", "45deg"],
        duration: 1500,
        easing: "easeOutCubic",
      });
    }

    // 2. Welcome Text Animation
    const text = document.querySelector(".js-text-animate");
    if (text) {
      animate(text, {
        translateX: [100, 0],
        opacity: [0, 1],
        duration: 1500,
        delay: 500,
        easing: "easeOutElastic(1, .8)",
      });
    }

    // 3. Book Animation (Open/Close on Scroll)
    const bookSection = document.querySelector<HTMLElement>("#amispecial");
    const book = document.querySelector<HTMLElement>(".js-book-scene");

    if (bookSection && book) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Open Book
              animate(book, {
                "--book-open-angle": "-150deg",
                "--book-ry": "20deg",
                "--book-rx": "-20deg",
                opacity: 1,
                duration: 2000,
                easing: "easeOutCubic",
                onComplete: () => {
                  const letters = document.querySelectorAll('.js-typewriter .letter');
                  animate(letters, {
                    opacity: [0, 1],
                    duration: 20,
                    delay: (el, i) => i * 15,
                    easing: "linear"
                  });
                }
              });
            } else {
              // Close Book when leaving viewport
              animate(book, {
                "--book-open-angle": "0deg",
                "--book-ry": "0deg",
                "--book-rx": "0deg",
                "translateX": "25%",
                duration: 1500,
                easing: "easeInCubic",
              });
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(bookSection);
      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const cursor = bugCursorRef.current;
    const spinner = bugSpinRef.current;
    if (!hasFinePointer || !cursor || !spinner) {
      return;
    }

    document.body.classList.add("cursor-none");

    const moveCursor = (x: number, y: number) => {
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate3d(-50%, -50%, 0)`;
    };

    const onMouseMove = (event: MouseEvent) => {
      moveCursor(event.clientX, event.clientY);
    };

    const onMouseDown = () => {
      animate(spinner, {
        rotate: "+=360",
        duration: 650,
        easing: "easeOutCubic",
      });
    };

    moveCursor(window.innerWidth / 2, window.innerHeight / 2);
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);

    return () => {
      document.body.classList.remove("cursor-none");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
    };
  }, []);

  const handleExplore = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector("#amispecial")?.scrollIntoView({ behavior: "smooth" });
  };

  const splitText = (text: string) => {
    return text.split("").map((char, index) => (
      <span key={index} className="letter opacity-0 inline">
        {char}
      </span>
    ));
  };

  return (
    <div className="scroll-smooth bg-zinc-50 dark:bg-black overflow-x-hidden selection:bg-cyan-500/30">
      <main className="flex flex-col items-center px-6 md:px-16 bg-white dark:bg-black w-full">
        
        {/* Welcome Section - Responsive Layout */}
        <section className="min-h-screen w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-12 py-20">
          <div className="js-text-animate w-full md:w-1/2 opacity-0 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-zinc-900 dark:text-white leading-tight mb-4">
              Welcome.
            </h1>
            <p className="text-xl font-medium text-zinc-600 dark:text-zinc-400">
              This is my personal website, hope you enjoy the experience <span className="text-cyan-500 font-bold">:{")"}</span>
            </p>
          </div>

          <div className="w-full md:w-1/2 flex justify-center scale-75 md:scale-100">
            <Computer
              className="js-laptop-scene"
              screenContent={
                <div className="flex w-full flex-col items-start justify-center p-4 text-white bg-zinc-900/50 backdrop-blur-md">
                  <span className="text-cyan-400 font-mono text-xs mb-1">01. Introduction</span>
                  <h2 className="text-xl font-bold mb-1">Hi, I'm wail!</h2>
                  <p className="text-xs leading-relaxed opacity-80 mb-4">
                    Security engineer & open source enthusiast.
                  </p>
                  <a href="#amispecial" onClick={handleExplore} className="px-6 py-2 bg-cyan-500 text-white font-bold rounded-lg hover:bg-cyan-600 transition-all text-xs uppercase tracking-widest">
                    Explore
                  </a>
                </div>
              }
            />
          </div>
        </section>

        {/* Book & Skills Section */}
        <section id="amispecial" className="min-h-screen w-full flex flex-col lg:flex-row items-center justify-center gap-12 py-20 overflow-hidden">
          
          {/* Left Side: 3D Book */}
          <div className="w-full lg:w-1/2 flex justify-center scale-[0.55] sm:scale-90 md:scale-90 transition-transform">
            <Book 
              className="js-book-scene" 
              BookLeftContent={
                <div className="p-8 h-[300px] overflow-y-auto scrollbar-hide">
                    <h3 className="text-xl font-bold mb-4 text-zinc-900">Background</h3>
                    <p className="text-xs font-mono leading-relaxed text-zinc-600">
                      [0x57, 0x61, 0x69, 0x6c]<br /><br />
                      System.init()<br />
                      Location: USTHB<br />
                      Focus: Low-Level, Security, Logistics.
                    </p>
                </div>
              }
              BookRightContent={
                <div className="p-8 h-[300px] overflow-y-auto scrollbar-hide">
                  <div className="rotate-y-180 js-typewriter">
                    <h3 className="text-2xl font-bold mb-4">What I Do</h3>
                    <div className="text-sm leading-relaxed text-gray-700 break-words">
                      {splitText("By day, I'm a security engineer, protecting systems and data from threats. By night, I'm an open source contributor, sharing my knowledge and learning from the community.")}
                    </div>
                  </div>
                </div>
              }
            />
          </div>

          {/* Right Side: Skills Registry */}
          <div className="w-full lg:w-1/2 max-w-xl space-y-6 px-4">
            <h3 className="text-3xl font-black text-zinc-900 dark:text-white flex items-center gap-3">
              <span className="text-cyan-500 font-mono text-lg">02.</span> Technical Stack
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Category: Backend & Architecture */}
              <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30">
                <h4 className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-tighter mb-3">Backend & Infrastructure</h4>
                <div className="flex flex-wrap gap-1.5">
                  {["Java", "Spring Boot", "Kafka", "NestJS", "Express.js", "Python"].map(s => (
                    <span key={s} className="px-2 py-0.5 text-[10px] font-mono bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded">{s}</span>
                  ))}
                </div>
              </div>

              {/* Category: Databases */}
              <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30">
                <h4 className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-tighter mb-3">Data Management</h4>
                <div className="flex flex-wrap gap-1.5">
                  {["PostgreSQL", "MySQL", "Oracle", "SQL", "NoSQL"].map(s => (
                    <span key={s} className="px-2 py-0.5 text-[10px] font-mono bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded">{s}</span>
                  ))}
                </div>
              </div>

              {/* Category: Low-Level & Embedded */}
              <div className="p-4 rounded-xl border border-cyan-500/20 bg-cyan-500/5 dark:bg-cyan-500/5 col-span-1 sm:col-span-2">
                <h4 className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-tighter mb-3 flex items-center justify-between">
                  Embedded & Hardware 
                  <span className="text-[8px] opacity-50 font-mono tracking-widest">FIRMWARE_READY</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {["Assembly x86", "ESP32", "PIC16F877A", "Arduino", "Hardware Design", "Firmwares"].map(s => (
                    <span key={s} className="px-2 py-0.5 text-[10px] font-mono bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-300 rounded">{s}</span>
                  ))}
                </div>
              </div>

              {/* Category: Frontend */}
              <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 col-span-1 sm:col-span-2">
                <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-tighter mb-3">Modern Web Interface</h4>
                <div className="flex flex-wrap gap-1.5">
                  {["Next.js", "React", "Vue.js", "Tailwind CSS", "Anime.js"].map(s => (
                    <span key={s} className="px-2 py-0.5 text-[10px] font-mono bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Card */}
        <section className="w-full max-w-4xl py-20">
          <div className="relative p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 backdrop-blur-xl">
            <h3 className="text-cyan-500 font-bold uppercase tracking-[0.2em] text-xs mb-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              Build Specifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
              <p className="text-zinc-600 dark:text-zinc-400">
                Experience powered by <b className="text-zinc-900 dark:text-white">Next.js</b> and <b className="text-zinc-900 dark:text-white">React</b>. All 3D models are handcrafted with <span className="text-cyan-600">CSS 3D Transforms</span>.
              </p>
              <div className="flex flex-wrap gap-2 h-fit">
                {["Spring Boot", "Kafka", "Assembly x86", "Reverse Engineering"].map(t => (
                  <span key={t} className="px-3 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-md text-[10px] font-bold">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Improved Contact Section: Terminal Style */}
        <section id="contact" className="w-full max-w-4xl pb-40">
          <div className="bg-[#0d1117] rounded-xl border border-zinc-800 shadow-2xl overflow-hidden font-mono text-sm">
            <div className="bg-[#161b22] px-4 py-2 border-b border-zinc-800 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <span className="text-zinc-500 text-xs ml-2">wail@usthb: ~/contact</span>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex gap-3">
                <span className="text-green-400">➜</span>
                <span className="text-cyan-400">ls</span>
                <span className="text-zinc-400">social_links/</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-6">
                <a href="https://linkedin.com/in/wailsb/" className="text-zinc-300 hover:text-cyan-400 transition-colors">📄 linkedin.sh</a>
                <a href="https://github.com/wailsb" className="text-zinc-300 hover:text-cyan-400 transition-colors">📁 github.repo</a>
                <a href="mailto:wail.saribey@gmail.com" className="text-zinc-300 hover:text-cyan-400 transition-colors">📧 email.client</a>
                <a href="https://wa.me/+213553820529" className="text-zinc-300 hover:text-cyan-400 transition-colors">💬 whatsapp.log</a>
              </div>
              <div className="flex gap-3 pt-4 border-t border-zinc-800/50">
                <span className="text-green-400">➜</span>
                <span className="text-zinc-500 animate-pulse">█</span>
              </div>
            </div>
          </div>
        </section>

        <div className="fixed bottom-6 right-6 text-[10px] font-mono text-zinc-400 bg-white/80 dark:bg-black/80 backdrop-blur px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800">
          SEC_LEVEL: 0 // NODE_ACTIVE
        </div>
      </main>

      <div
        ref={bugCursorRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block will-change-transform"
      >
        <div ref={bugSpinRef} className="origin-center scale-[0.12]">
          <Bug />
        </div>
      </div>
    </div>
  );
}