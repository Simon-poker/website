"use client";

import { useState } from "react";

// L'émulateur (js-dos) tourne dans une iframe isolée : son CSS global
// ne déborde pas sur le site, et quitter la page arrête le jeu.
const PLAYER_URL = "/doom/player.html";

export function DoomSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="doom" className="px-6 sm:px-10 py-24 sm:py-32 max-w-5xl mx-auto w-full">
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
            aria-label="DOOM"
            className="absolute inset-0 flex items-center justify-center text-white text-3xl hover:text-burgundy transition-colors"
          >
            ▶
          </button>
        )}
      </div>
    </section>
  );
}
