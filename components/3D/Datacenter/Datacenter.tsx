"use client";
import s from "./Datacenter.module.css";

export default function Datacenter() {
  const panels = Array.from({ length: 128 }); // 16 panels for a smooth circle

  const Rack = () => (
    <div className={`${s.view} ${s.fullrack}`}>
      <div className={s.rackTop}></div>
      
      {/* The Wrapper Ring */}
      <div className={s.ring}>
        {panels.map((_, i) => (
            console.log(i),
          <div 
            key={i} 
            className={s.panel} 
            style={{ "--i": i } as React.CSSProperties}
          ></div>
        ))}
      </div>

      <div className={s.rackBottom}></div>
    </div>
  );

  return (
    <div className={s.scene}>
      <div className={s.datacenter}>
        <Rack />
        <Rack />
        <Rack />
      </div>
    </div>
  );
}