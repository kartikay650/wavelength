"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const EXPO_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];
const IN_VIEW = { once: true, amount: 0.12 } as const;

const HEADLINE_LINES: Array<{
  text: string;
  weight: number;
  italic: boolean;
}> = [
  { text: "A glass van.", weight: 400, italic: false },
  { text: "Two strangers.", weight: 400, italic: true },
  { text: "All of Bangalore watching.", weight: 300, italic: false },
];

const METRICS = [
  { value: "10k–20k", label: "Street impressions" },
  { value: "200–400", label: "UTM downloads" },
  { value: "40–100", label: "Organic UGC posts" },
  { value: "80k–250k", label: "Estimated reach" },
];

const MARQUEE_UNIT = [
  "This is their first date",
  "Smile at them",
  "Wave matched them",
  "Live",
];

export default function Activation01() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, IN_VIEW);

  const { scrollY } = useScroll();
  const ghostY = useTransform(scrollY, [1000, 3500], [40, -40]);

  return (
    <section
      ref={sectionRef}
      className="act01"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        background: "#2d4a3e",
        color: "#f6f1ea",
        padding: "160px clamp(40px, 8vw, 120px)",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* Ghost "02" */}
      <motion.div
        initial={{ x: 60, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 0.04 } : { x: 60, opacity: 0 }}
        transition={{ duration: 1.2, ease: EXPO_OUT }}
        style={{
          position: "absolute",
          right: "-2vw",
          top: "50%",
          translateY: "-50%",
          y: ghostY,
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontSize: "28vw",
          color: "#f6f1ea",
          pointerEvents: "none",
          userSelect: "none",
          lineHeight: 1,
          zIndex: 0,
        }}
      >
        02
      </motion.div>

      {/* Faint horizontal line */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          right: 0,
          height: 1,
          background: "rgba(246,241,234,0.06)",
          zIndex: 0,
        }}
      />

      {/* Content wrapper */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* TOP ROW */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 80,
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 0.6, x: 0 } : { opacity: 0, x: -16 }}
            transition={{ duration: 0.5, ease: EXPO_OUT }}
            className="font-script"
            style={{ fontSize: 20, color: "#f6f1ea" }}
          >
            activation 01
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.5, delay: 0.3, ease: EXPO_OUT }}
            className="font-sans"
            style={{
              background: "rgba(246,241,234,0.1)",
              border: "1px solid rgba(246,241,234,0.15)",
              borderRadius: 100,
              padding: "8px 20px",
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "#f6f1ea",
              opacity: 0.7,
            }}
          >
            Bangalore · Pilot run
          </motion.div>
        </div>

        {/* HEADLINE BLOCK */}
        <div style={{ maxWidth: 780, marginBottom: 64 }}>
          <h2
            className="act01-headline"
            style={{
              margin: 0,
              fontSize: "clamp(44px, 6.5vw, 96px)",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              color: "#f6f1ea",
            }}
          >
            {HEADLINE_LINES.map((line, i) => (
              <span
                key={i}
                className="font-display"
                style={{
                  display: "block",
                  fontWeight: line.weight,
                  fontStyle: line.italic ? "italic" : "normal",
                  overflow: "hidden",
                  paddingBottom: "0.06em",
                }}
              >
                <motion.span
                  initial={{ y: "110%" }}
                  animate={inView ? { y: "0%" } : { y: "110%" }}
                  transition={{
                    duration: 0.9,
                    delay: 0.2 + i * 0.1,
                    ease: EXPO_OUT,
                  }}
                  style={{ display: "inline-block" }}
                >
                  {line.text}
                </motion.span>
              </span>
            ))}
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.6, ease: EXPO_OUT }}
            className="font-sans"
            style={{
              marginTop: 32,
              marginBottom: 0,
              fontSize: 15,
              lineHeight: 1.8,
              color: "rgba(246,241,234,0.6)",
              maxWidth: 520,
            }}
          >
            Wave matched them. We put them in a tempo with transparent sides,
            a table with food on it, fairy lights, and a first date. Then we
            drove through Koramangala, Indiranagar, Church Street, and HSR on
            a Sunday afternoon.
          </motion.p>
        </div>

        {/* MARQUEE STRIP */}
        <div
          className="marquee-outer"
          style={{
            margin: "64px 0",
            borderTop: "1px solid rgba(246,241,234,0.12)",
            borderBottom: "1px solid rgba(246,241,234,0.12)",
            padding: "16px 0",
            overflow: "hidden",
            position: "relative",
            // Pull to true full-width inside the section padding
            width: "calc(100% + clamp(80px, 16vw, 240px))",
            marginLeft: "calc(-1 * clamp(40px, 8vw, 120px))",
            marginRight: "calc(-1 * clamp(40px, 8vw, 120px))",
          }}
        >
          <div className="marquee-track">
            {Array.from({ length: 8 }).map((_, repeatIdx) => (
              <div
                key={repeatIdx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 64,
                  flexShrink: 0,
                  paddingRight: 64,
                }}
              >
                {MARQUEE_UNIT.map((phrase, i) => (
                  <span
                    key={i}
                    style={{ display: "flex", alignItems: "center", gap: 64 }}
                  >
                    <span
                      className="font-display"
                      style={{
                        fontStyle: "italic",
                        fontSize: 20,
                        color: "#f6f1ea",
                        opacity: 0.9,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {phrase}
                    </span>
                    <span
                      className="font-sans"
                      style={{
                        fontSize: 20,
                        color: "rgba(246,241,234,0.3)",
                      }}
                    >
                      ·
                    </span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* TWO COLUMN GRID */}
        <div
          className="act01-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
            marginTop: 64,
          }}
        >
          {/* LEFT — Key Message */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.7, delay: 0.2, ease: EXPO_OUT }}
            style={{
              background: "rgba(246,241,234,0.06)",
              border: "1px solid rgba(246,241,234,0.1)",
              borderRadius: 4,
              padding: 40,
            }}
          >
            <div
              className="font-script"
              style={{
                fontSize: 18,
                color: "#f6f1ea",
                opacity: 0.5,
                marginBottom: 20,
              }}
            >
              what this says
            </div>
            <div
              className="font-display"
              style={{
                fontSize: 22,
                lineHeight: 1.75,
                color: "#f6f1ea",
              }}
            >
              People don&apos;t fall in love through a screen. They do it at
              a table, with bad lighting and good food and someone they
              didn&apos;t expect. The van just makes that moment impossible
              to ignore.
            </div>
          </motion.div>

          {/* RIGHT — stacked cards */}
          <div
            className="act01-right-col"
            style={{
              display: "grid",
              gridTemplateRows: "1fr 1fr",
              gap: 16,
            }}
          >
            {/* Budget */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.7, delay: 0.35, ease: EXPO_OUT }}
              style={{
                background: "rgba(246,241,234,0.06)",
                border: "1px solid rgba(246,241,234,0.1)",
                borderRadius: 4,
                padding: 32,
              }}
            >
              <div
                className="font-script"
                style={{
                  fontSize: 18,
                  color: "#f6f1ea",
                  opacity: 0.5,
                  marginBottom: 20,
                }}
              >
                budget
              </div>
              <div
                className="font-display"
                style={{
                  fontStyle: "italic",
                  fontSize: 36,
                  color: "#f6f1ea",
                  lineHeight: 1,
                }}
              >
                ₹21,000 – ₹34,500
              </div>
              <div
                className="font-sans"
                style={{
                  fontSize: 12,
                  color: "rgba(246,241,234,0.45)",
                  marginTop: 12,
                  lineHeight: 1.6,
                }}
              >
                Van rental · Fabrication · Interior setup · Signage
              </div>
            </motion.div>

            {/* Coolness */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.7, delay: 0.5, ease: EXPO_OUT }}
              style={{
                background: "rgba(246,241,234,0.06)",
                border: "1px solid rgba(246,241,234,0.1)",
                borderRadius: 4,
                padding: 32,
              }}
            >
              <div
                className="font-script"
                style={{
                  fontSize: 18,
                  color: "#f6f1ea",
                  opacity: 0.5,
                  marginBottom: 20,
                }}
              >
                coolness
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  marginBottom: 16,
                  alignItems: "center",
                }}
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{
                      type: "spring",
                      damping: 12,
                      stiffness: 300,
                      delay: 0.5 + i * 0.08,
                    }}
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: "#f6f1ea",
                      opacity: 0.9,
                    }}
                  />
                ))}
              </div>
              <div
                className="font-sans"
                style={{
                  fontSize: 11,
                  color: "rgba(246,241,234,0.4)",
                  lineHeight: 1.6,
                }}
              >
                Nothing like this has been done for a dating app in India.
              </div>
            </motion.div>
          </div>
        </div>

        {/* METRICS BAR */}
        <div
          className="act01-metrics"
          style={{
            marginTop: 16,
            background: "rgba(246,241,234,0.06)",
            border: "1px solid rgba(246,241,234,0.1)",
            borderRadius: 4,
            padding: 40,
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
          }}
        >
          {METRICS.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{
                duration: 0.6,
                delay: 0.4 + i * 0.1,
                ease: EXPO_OUT,
              }}
              style={{
                paddingRight: i < 3 ? 24 : 0,
                paddingLeft: i > 0 ? 24 : 0,
                borderRight:
                  i < 3 ? "1px solid rgba(246,241,234,0.08)" : "none",
              }}
            >
              <div
                className="font-display"
                style={{
                  fontStyle: "italic",
                  fontSize: 32,
                  color: "#f6f1ea",
                  lineHeight: 1,
                }}
              >
                {m.value}
              </div>
              <div
                className="font-sans"
                style={{
                  fontSize: 10,
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "rgba(246,241,234,0.4)",
                  marginTop: 8,
                }}
              >
                {m.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* HANDWRITTEN NOTE */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={inView ? { opacity: 0.45, x: 0 } : { opacity: 0, x: 20 }}
        transition={{ duration: 0.8, delay: 1, ease: EXPO_OUT }}
        className="font-script act01-note"
        style={{
          position: "absolute",
          bottom: 60,
          right: "clamp(40px, 8vw, 120px)",
          fontSize: 26,
          color: "#f6f1ea",
          transform: "rotate(-6deg)",
          zIndex: 2,
        }}
      >
        Koramangala → Indiranagar → Church St → HSR
      </motion.div>

      {/* Section-to-cream bottom fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 120,
          background: "linear-gradient(to bottom, transparent, #f6f1ea)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <style jsx>{`
        .marquee-track {
          display: flex;
          width: fit-content;
          animation: marquee-scroll 50s linear infinite;
          will-change: transform;
        }
        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @media (max-width: 767px) {
          .act01 {
            padding: 100px 24px !important;
          }
          .act01-headline {
            font-size: clamp(38px, 9vw, 64px) !important;
          }
          .act01-grid {
            grid-template-columns: 1fr !important;
          }
          .act01-right-col {
            grid-template-rows: auto auto !important;
          }
          .act01-metrics {
            grid-template-columns: 1fr 1fr !important;
          }
          .act01-note {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
