"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import App from "@/components/band/App";
import TextType from "@/components/band/TextType";

const skills = ["Java Scripts", "React.js", "Tailwind","Python", "Java", "Spring Boot","MongoDB", "MySQL","React Vue","Node.js","Docker","Git","POSTMAN"];

type HeroProps = {
  showApp: boolean;
};

export default function Hero({ showApp }: HeroProps) {
  const [startAnim, setStartAnim] = useState(false);

  useEffect(() => {
    const heroPlayed = sessionStorage.getItem("heroPlayed");

    if (heroPlayed === "true") {
      setStartAnim(true);
      return;
    }

    const delay = 3600;

    const textTimer = setTimeout(() => {
      setStartAnim(true);
    }, delay);

    const appTimer = setTimeout(() => {
      sessionStorage.setItem("heroPlayed", "true");
    }, delay + 1500);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(appTimer);
    };
  }, []);

  return (
    <section
      id="home"
      className="px-4 pt-28 pb-20 min-h-[100svh] sm:px-6 md:pl-[120px] md:pr-[60px] md:pt-24 md:pb-16"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* APP LAYER */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 40,
          pointerEvents: showApp ? "auto" : "none",
        }}
      >
        {showApp && <App />}
      </div>

      {/* TEXT */}
      <div
        className="max-w-full md:max-w-[600px]"
        style={{
          width: "100%",
          position: "relative",
          zIndex: 5,
        }}
      >
        {/* LABEL */}
        <motion.div
          initial={false}
          animate={
            startAnim
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : { opacity: 0, y: 30, filter: "blur(12px)" }
          }
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 20 }}
        >
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "clamp(10px, 3.2vw, 12px)",
              color: "var(--text-muted)",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            ✦ Available for work
          </span>
        </motion.div>

        {/* HEADING */}
        <div>
          <motion.h1
            initial={false}
            animate={
              startAnim
                ? { opacity: 1, scale: 1, y: 0 }
                : { opacity: 0, scale: 0.85, y: 50 }
            }
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              fontSize: "clamp(34px, 13vw, 62px)",
              fontWeight: 800,
              lineHeight: 1.05,
              color: "var(--text-primary)",
              letterSpacing: 0,
              marginBottom: 0,
              overflowWrap: "anywhere",
            }}
          >
            Full‑Stack 
          </motion.h1>

          <motion.h1
            initial={false}
            animate={
              startAnim
                ? { opacity: 1, x: 0, rotate: 0 }
                : { opacity: 0, x: -80, rotate: -4 }
            }
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              fontSize: "clamp(34px, 13vw, 62px)",
              fontWeight: 800,
              lineHeight: 1.05,
              color: "var(--text-secondary)",
              letterSpacing: 0,
              marginBottom: 24,
              overflowWrap: "anywhere",
            }}
          >
            Developer
          </motion.h1>
        </div>

        {/* STATUS */}
        <motion.div
          initial={false}
          animate={startAnim ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          style={{ marginBottom: 12 }}
        >
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "clamp(12px, 3.8vw, 15px)",
              color: "var(--text-secondary)",
              letterSpacing: "0.08em",
            }}
          >
            <TextType
              text={["Junior Programmer", "fresh Graduate", "Happy coding!"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              deletingSpeed={50}
              cursorBlinkDuration={0.5}
            />
          </span>
        </motion.div>

        {/* DESC */}
        <motion.div
          initial={false}
          animate={
            startAnim
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 50, scale: 0.96 }
          }
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            marginBottom: 28,
            width: "100%",
            maxWidth: 460,
          }}
        >
          <p
            style={{
              fontSize: 14,
              color: "var(--text-secondary)",
              lineHeight: 1.9,
              letterSpacing: "0.01em",
              textWrap: "pretty",
              overflowWrap: "break-word",
            }}
          >
            Creating modern websites with a clean, responsive, and elegant appearance. Transforming ideas and designs into engaging, easy-to-use digital experiences.
          </p>
        </motion.div>

        {/* SKILLS */}
        <motion.div
          initial="hidden"
          animate={startAnim ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.7,
              },
            },
          }}
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            marginBottom: 28,
          }}
        >
          {skills.map((skill) => (
            <motion.span
              key={skill}
              variants={{
                hidden: { opacity: 0, y: 25, scale: 0.85 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.5 }}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 11,
                color: "var(--text-secondary)",
                border: "1px solid var(--border)",
                borderRadius: 999,
                padding: "5px 12px",
                backgroundColor: "var(--bg-card)",
                maxWidth: "100%",
                overflowWrap: "break-word",
              }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

        {/* FOOTER */}
        <motion.div
          initial={false}
          animate={startAnim ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
          transition={{ duration: 0.8, delay: 1 }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 6,
          }}
        >
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "clamp(11px, 3.4vw, 13px)",
              color: "var(--text-muted)",
              overflowWrap: "break-word",
            }}
          >
            ↓ explore my work below
          </span>

          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "clamp(11px, 3.4vw, 13px)",
              color: "var(--text-muted)",
              overflowWrap: "break-word",
            }}
          >
            ↗ open to full-time & freelance opportunities
          </span>
        </motion.div>
      </div>
      {/* SCROLL INDICATOR */}
<motion.div
  initial={false}
  animate={
    startAnim
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: 40 }
  }
  transition={{
    duration: 0.9,
    delay: 1.2,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="absolute bottom-4 left-0 right-0 z-20 pointer-events-none flex justify-center px-4"
>
  <motion.div
    animate={{
      y: [0, 6, 0],
      opacity: [1, 0.65, 1],
    }}
    transition={{
      duration: 1.4,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
    className="flex items-center justify-center gap-2"
  >
    <span
      style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: 11,
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        whiteSpace: 'nowrap',
      }}
    >
      Scroll
    </span>

    <span
      style={{
        fontSize: 16,
        color: 'var(--text-secondary)',
        lineHeight: 1,
      }}
    >
      ↓
    </span>
  </motion.div>
</motion.div>
    </section>
  );
}
