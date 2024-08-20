'use client';
import "./earn_page_style.css";
import { useEffect, useState } from "react";


export default function EarnPage() {
  const [userId, setUserId] = useState<number | null>(1111111111);
  return (
    <section className="section-earn">
    <div className="container">
      <div className="Cards">
        <h3 className="main-name">Майнинг</h3>
        <h3 className="main-name">Бустеры</h3>
      </div>
    </div>
    </section>
  );
}
