"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const EASE: [number, number, number, number] = [0.25, 1, 0.5, 1];
const IN_VIEW = { once: true, amount: 0.15 } as const;

const PARAGRAPHS = [
  "I am Kartikay, studying at Mesa School in Bangalore. I've been first hire at a protein coffee brand, co-founded a socks brand, and ran a bunch of offline activations for both. On the side, I help brands grow on Reddit. Pulled 2,00,000+ views there and 7,00,000+ on LinkedIn so far.",
  "I'm on Wavelength. Haven't matched yet but honestly hoping that changes soon. The product is genuinely interesting. I just think not enough people in Bangalore know it exists yet.",
  "The fastest way to fix that is wild offline stuff that makes people stop, post, tell someone. That compounds. I've put down 3 ideas here. Once given the responsibility, I'll be cooking up new ones every week until Wavelength is the most talked-about app in Bangalore.",
];

export default function AboutMe() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, IN_VIEW);

  // Subtle scroll-driven drift on the ghost "01"
  const { scrollY } = useScroll();
  const ghostY = useTransform(scrollY, [0, 2000], [40, -40]);

  return (
    <section
      ref={sectionRef}
      className="aboutme"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        background: "#f6f1ea",
        padding: "160px clamp(40px, 8vw, 120px)",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* GHOST "01" */}
      <motion.div
        initial={{ x: 60, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 0.04 } : { x: 60, opacity: 0 }}
        transition={{ duration: 1.2, ease: EASE }}
        style={{
          position: "absolute",
          right: "-2vw",
          top: "50%",
          translateY: "-50%",
          y: ghostY,
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontSize: "28vw",
          color: "#2d4a3e",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 0,
          lineHeight: 1,
        }}
      >
        01
      </motion.div>

      {/* Green orb */}
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "-8%",
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, #2d4a3e 0%, transparent 70%)",
          opacity: 0.07,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* TWO-COLUMN GRID */}
      <div
        className="aboutme-grid"
        style={{
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "60% 40%",
          gap: 48,
          alignItems: "center",
          minHeight: "60vh",
        }}
      >
        {/* LEFT COLUMN */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 0.8, x: 0 } : { opacity: 0, x: -16 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="font-script"
            style={{
              fontSize: 16,
              color: "#2d4a3e",
              letterSpacing: "0.05em",
              marginBottom: 32,
            }}
          >
            about me
          </motion.div>

          {PARAGRAPHS.map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.8,
                delay: 0.15 + i * 0.2,
                ease: EASE,
              }}
              className="font-display aboutme-p"
              style={{
                fontWeight: 400,
                fontSize: 26,
                lineHeight: 1.8,
                color: "#1a1a1a",
                maxWidth: 580,
                margin: i === 0 ? "0 0 28px 0" : "0 0 28px 0",
              }}
            >
              {text}
            </motion.p>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: EASE }}
            className="font-sans"
            style={{
              marginTop: 40,
              fontSize: 12,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#8a8078",
            }}
          >
            Growth · Offline Activations · Bangalore
          </motion.div>
        </div>

        {/* RIGHT COLUMN */}
        <div
          className="aboutme-right"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            transform: "translateY(-60px)",
          }}
        >
          {/* Element 1 — polaroid */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: 12 }}
            animate={
              inView
                ? { opacity: 1, y: 0, rotate: 7 }
                : { opacity: 0, y: 40, rotate: 12 }
            }
            transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
            whileHover={{
              rotate: 4,
              y: -6,
              transition: { type: "spring", damping: 15, stiffness: 250 },
            }}
            style={{
              width: 160,
              background: "#faf8f4",
              padding: "8px 8px 24px 8px",
              boxShadow: "0 6px 24px rgba(26,26,26,0.1)",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                width: "100%",
                aspectRatio: "4 / 5",
                background:
                  "linear-gradient(150deg, #c9a690 0%, #8a6f5c 55%, #5a4636 100%)",
              }}
            />
            <div
              className="font-script"
              style={{
                fontSize: 12,
                color: "#8a8078",
                textAlign: "center",
                marginTop: 6,
              }}
            >
              Koramangala, Sunday
            </div>
          </motion.div>

          {/* Element 2 — handwritten stat */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={
              inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }
            }
            transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
            style={{
              transform: "rotate(-4deg)",
              textAlign: "center",
              lineHeight: 1,
            }}
          >
            <div
              className="font-script"
              style={{ fontSize: 48, color: "#2d4a3e", lineHeight: 1 }}
            >
              3
            </div>
            <div
              className="font-script"
              style={{
                fontSize: 16,
                color: "#8a8078",
                marginTop: 4,
              }}
            >
              ideas
            </div>
          </motion.div>

          {/* Element 3 — sticky note */}
          <motion.div
            initial={{ opacity: 0, rotate: -3 }}
            animate={
              inView ? { opacity: 1, rotate: 2 } : { opacity: 0, rotate: -3 }
            }
            transition={{ duration: 0.7, delay: 0.7, ease: EASE }}
            whileHover={{ rotate: 0, scale: 1.04 }}
            className="font-script"
            style={{
              background: "#e8e3d8",
              padding: "16px 20px",
              borderRadius: 2,
              boxShadow: "2px 3px 12px rgba(26,26,26,0.08)",
              fontSize: 15,
              color: "#2d4a3e",
              lineHeight: 1.5,
              cursor: "pointer",
            }}
          >
            no ads. just presence↗
          </motion.div>
        </div>
      </div>

      {/* DIVIDER */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 1,
          background: "rgba(26,26,26,0.08)",
          transformOrigin: "left",
          zIndex: 1,
        }}
      />

      <style jsx>{`
        @media (max-width: 767px) {
          .aboutme {
            padding: 100px 24px !important;
          }
          .aboutme-grid {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
          .aboutme-right {
            display: none !important;
          }
          .aboutme-p {
            font-size: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
