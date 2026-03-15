import s from "./Book.module.css";
import type { ReactNode } from "react";

interface BookProps {
  BookLeftContent?: ReactNode;
  BookRightContent?: ReactNode;
  className?: string;
}

export default function Book({ BookLeftContent, BookRightContent, className = "" }: BookProps) {
  return (
    <div className={`${s.scene} ${className}`.trim()}>
      <div className={s.book}>
        <div className={`${s.face} ${s.front}`}>
          <div className={s.cover}>
            <div className={s.title}>The Art of Code</div>
          </div>
        </div>
        <div className={`${s.face} ${s.insideLeft}`}>{BookLeftContent}</div>
        <div className={`${s.face} ${s.insideRight}`}>{BookRightContent}</div>
        <div className={`${s.face} ${s.back}`} />
        <div className={`${s.edge} ${s.top}`} />
        <div className={`${s.edge} ${s.bottom}`} />
        <div className={`${s.edge} ${s.left}`} />
        <div className={`${s.edge} ${s.right}`} />
      </div>
    </div>
  );
}