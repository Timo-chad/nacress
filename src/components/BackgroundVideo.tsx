import { useEffect, useRef } from "react";

export function BackgroundVideo({ src = "/bg-coastal.mp4" }: { src?: string }) {
  const aRef = useRef<HTMLVideoElement>(null);
  const bRef = useRef<HTMLVideoElement>(null);

  // ── Crossfade loop ──────────────────────────────────────────────────────
  useEffect(() => {
    const a = aRef.current;
    const b = bRef.current;
    if (!a || !b) return;

    const FADE_LEAD_S  = 2.8;   // démarre la transition 2.8 s avant la fin
    const FADE_MS      = 2600;  // durée du fondu en ms

    let active: HTMLVideoElement = a;
    let fading = false;

    const crossfade = () => {
      if (fading) return;
      fading = true;

      const incoming = active === a ? b : a;
      const outgoing = active;

      incoming.currentTime = 0;
      incoming.play().catch(() => {});

      // CSS transition gère le fondu — zéro jank
      outgoing.style.opacity = "0";
      incoming.style.opacity = "1";

      setTimeout(() => {
        outgoing.pause();
        outgoing.currentTime = 0;
        active = incoming;
        fading = false;
      }, FADE_MS);
    };

    const onTime = () => {
      if (fading || !active.duration) return;
      const remaining = active.duration - active.currentTime;
      if (remaining > 0 && remaining <= FADE_LEAD_S) crossfade();
    };

    a.addEventListener("timeupdate", onTime);
    b.addEventListener("timeupdate", onTime);
    a.play().catch(() => {});

    return () => {
      a.removeEventListener("timeupdate", onTime);
      b.removeEventListener("timeupdate", onTime);
    };
  }, []);

  // ── Scroll → object-position ────────────────────────────────────────────
  useEffect(() => {
    // Cache maxScroll — avoid forced layout reflow on every scroll event
    let maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    let pending = false;

    const onResize = () => {
      maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    };

    const applyPosition = () => {
      pending = false;
      const pct = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
      const pos = `center ${pct}%`;
      if (aRef.current) aRef.current.style.objectPosition = pos;
      if (bRef.current) bRef.current.style.objectPosition = pos;
    };

    const onScroll = () => {
      if (pending) return;
      pending = true;
      requestAnimationFrame(applyPosition);
    };

    applyPosition();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const videoStyle: React.CSSProperties = {
    transition: `opacity ${2600}ms ease-in-out`,
    objectPosition: "center 0%",
  };

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden -z-10">
      <video
        ref={aRef}
        src={src}
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ ...videoStyle, opacity: 1 }}
      />
      <video
        ref={bRef}
        src={src}
        muted
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ ...videoStyle, opacity: 0 }}
      />
      {/* Fondu blanc 30% */}
      <div className="absolute inset-0 bg-white/30 pointer-events-none" />
    </div>
  );
}
