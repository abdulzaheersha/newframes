"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { getSiteData } from "@/data/siteData";
import styles from "./Clientele.module.css";

export default function Clientele() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setData(getSiteData().clientele);
  }, []);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scrollWidth = scrollRef.current.scrollWidth;
    const duration = data.length * 3; // Adjust speed

    gsap.to(scrollRef.current, {
      x: `-${scrollWidth / 2}px`,
      duration: duration,
      ease: "none",
      repeat: -1,
    });
  }, [data]);

  if (!mounted || data.length === 0) return null;

  // Duplicate list for infinite effect
  const displayList = [...data, ...data];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>OUR CLIENTELE</h2>
        </div>
      </div>
      
      <div className={styles.scrollWrapper}>
        <div ref={scrollRef} className={styles.scrollContent}>
          {displayList.map((client, index) => (
            <div key={index} className={styles.clientItem}>
              <span className={styles.clientName}>{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
