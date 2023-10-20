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
    <div>
      <header>
        <div class="nav-wrapper">
          <nav class="nav">
            <ul>
              <li>
                <a href="#">Peshko</a>
              </li>
              <li>
                <a href="#">Gele</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

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
            <Image src="/images/18-wheeler.jpeg" width="700" height="500" />
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </nav>
        <p>&copy; 2333 My Awesome Website. All rights reserved.</p>
      </footer>
    </div>
  );
}
