"use client";
import Image from "next/image";
import confetti from "canvas-confetti";

import styles from "./page.module.css";

import { useEffect } from "react";

export default function Home() {
  function handleConfetti(event) {
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;
    confetti({
      origin: { x, y },
    });
  }

  useEffect(() => {
    document.addEventListener("click", handleConfetti);
    confetti();
    return () => {
      document.removeEventListener("click", handleConfetti);
    };
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.flares}>
        <Image
          src="/images/flare-top.png"
          loading="lazy"
          sizes="(max-width: 1920px) 100vw, 1920px"
          height={834}
          width={1920}
          alt=""
          className={styles.flaresTop}
        />
        <Image
          src="/images/flare-right.png"
          loading="lazy"
          sizes="(max-width: 1622px) 100vw, 1622px"
          height={1109}
          width={1622}
          alt=""
          className={[styles.flaresRight, styles.hideMobile]}
        />
        <Image
          src="/images/flare-left.png"
          loading="lazy"
          sizes="(max-width: 1518px) 100vw, 1518px"
          height={1112}
          width={1518}
          alt=""
          className={styles.hideMobile}
        />
      </div>

      <div className={styles.container}>
        <div className={styles.hero}>
          <h1>Евала бате Пешко.</h1>
          <p>Ти си най-големия!</p>
          <img
            src="https://t3.ftcdn.net/jpg/01/27/87/18/360_F_127871822_gXefG4TiFgYtNu3zMqHMLybzH4ZTjjLG.jpg"
            alt=""
          />
        </div>
        <div className={styles.logo}>
          <Image
            src="/images/logo.svg"
            loading="lazy"
            alt=""
            width="70"
            height="25"
          />
        </div>
      </div>
    </div>
  );
}
