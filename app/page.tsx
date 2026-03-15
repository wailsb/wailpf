"use client";
import Computer from "@/components/3D/Computer/Computer";
import {animate} from "animejs";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const target = document.querySelector(".js-laptop-scene");
    if (!target) {
      return;
    }

    animate(target, {
      "--screen-angle": ["270deg", "150deg"],
      "--laptop-rz": ["360deg", "45deg"],
      duration: 3000,
      easing: "easeOutCubic",
    });
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Computer
          className="js-laptop-scene"
          screenContent={
            <div className="flex h-full w-full items-center justify-center text-2xl text-white ml-2">
              Hi, I'm wail!<br />
              A security engineer, open source enthusiast, and lifelong learner.<br />
            </div>
          }
        />
      </main>
    </div>
  );
}