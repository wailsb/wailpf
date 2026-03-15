import s from "./University.module.css";
import type { CSSProperties } from "react";

interface UniversityProps {
  className?: string;
}

const WINDOW_COUNT = 8;
const DOME_PANELS = 24; // You can increase this to 64 or 128 for a smoother dome

export default function University({ className = "" }: UniversityProps) {
  return (
    <div className={`${s.scene} ${className}`.trim()}>
      <div className={s.campus}>
        {/* The Base Building */}
        <div className={s.mainBlock}>
          <div className={`${s.face} ${s.mainFront}`}>
            <div className={s.windowGrid}>
              {Array.from({ length: WINDOW_COUNT }).map((_, i) => (
                <div key={i} className={s.window} />
              ))}
            </div>
            <div className={s.door} />
          </div>
          <div className={`${s.face} ${s.mainBack}`} />
          <div className={`${s.edgeX} ${s.mainTop}`} />
          <div className={`${s.edgeX} ${s.mainBottom}`} />
          <div className={`${s.edgeY} ${s.mainLeft}`} />
          <div className={`${s.edgeY} ${s.mainRight}`} />
        </div>

        {/* The Clock Tower */}
        <div className={s.tower}>
          <div className={`${s.face} ${s.towerFront}`}>
            <div className={s.clock} />
          </div>
          <div className={`${s.face} ${s.towerBack}`} />
          <div className={`${s.edgeX} ${s.towerTop}`} />
          <div className={`${s.edgeX} ${s.towerBottom}`} />
          <div className={`${s.edgeY} ${s.towerLeft}`} />
          <div className={`${s.edgeY} ${s.towerRight}`} />
        </div>

        {/* The Circular Dome - Using the high-density panel logic */}
        <div className={s.dome}>
          <div className={s.domeTop} />
          <div className={s.domeRing}>
            {Array.from({ length: DOME_PANELS }).map((_, i) => (
              <div
                key={i}
                className={s.domePanel}
                style={{ "--i": i } as CSSProperties}
              />
            ))}
          </div>
          <div className={s.domeBottom} />
        </div>

        <div className={s.stairs} />
      </div>
    </div>
  );
}