import s from "./Computer.module.css";
import type { ReactNode } from "react";

interface ComputerProps {
  screenContent?: ReactNode;
  className?: string;
}

export default function Computer({ screenContent, className = "" }: ComputerProps) {
  return (
    <div className={`${s.scene} ${className}`.trim()}>
      <div className={s.laptop}>
        <div className={s.base}>
          <div className={`${s.face} ${s.baseTop}`}>
            <div className={s.keyboard} />
            <div className={s.trackpad} />
          </div>
          <div className={`${s.face} ${s.baseBottom}`} />
          <div className={`${s.edgeX} ${s.baseFront}`} />
          <div className={`${s.edgeX} ${s.baseBack}`} />
          <div className={`${s.edgeY} ${s.baseLeft}`} />
          <div className={`${s.edgeY} ${s.baseRight}`} />
        </div>

        <div className={s.hinge}>
          <div className={s.screen}>
            <div className={`${s.face} ${s.screenFront}`}>
              <div className={s.display}>
                <div className={s.displayContent}>{screenContent}</div>
              </div>
            </div>
            <div className={`${s.face} ${s.screenBack}`} />
            <div className={`${s.edgeX} ${s.screenTop}`} />
            <div className={`${s.edgeX} ${s.screenBottom}`} />
            <div className={`${s.edgeY} ${s.screenLeft}`} />
            <div className={`${s.edgeY} ${s.screenRight}`} />
          </div>
        </div>
      </div>
    </div>
  );
}