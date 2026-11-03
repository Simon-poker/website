"use client";

import { useState } from "react";
import { useDict } from "@/context/LanguageContext";
import { Reveal } from "./Reveal";

// L'émulateur (js-dos) tourne dans une iframe isolée : son CSS global
// ne déborde pas sur le site, et quitter la page arrête le jeu.
const PLAYER_URL = "/doom/player.html";

export function DoomSection() {
  const dict = useDict();
  const [playing, setPlaying] = useState(false);

  return (
    <section id="doom" className="px-6 sm:px-10 py-24 sm:py-32 max-w-5xl mx-auto">
      <Reveal>
        <span className="text-xs tracking-[0.3em] uppercase text-burgundy">{dict.doom.label}</span>
        <h2 className="font-display tracking-tight text-3xl sm:text-4xl mt-2 mb-6">
          {dict.doom.heading}
        </h2>
        <p className="text-ink/70 max-w-2xl mb-10">{dict.doom.intro}</p>
      </Reveal>

      <div className="relative w-full aspect-[4/3] bg-black overflow-hidden">
        {playing ? (
          <iframe
            src={PLAYER_URL}
            title="DOOM"
            className="absolute inset-0 w-full h-full border-0"
            allow="autoplay; fullscreen; pointer-lock; gamepad"
            allowFullScreen
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="absolute inset-0 flex items-center justify-center text-white text-sm tracking-[0.3em] uppercase hover:text-burgundy transition-colors"
          >
            ▶ {dict.doom.play}
          </button>
        )}
      </div>

      <p className="text-xs text-ink/50 mt-4">{dict.doom.controls}</p>
      <p className="text-xs text-ink/40 mt-1">{dict.doom.credit}</p>
    </section>
  );
}
