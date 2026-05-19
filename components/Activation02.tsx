"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const EXPO_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];
const IN_VIEW = { once: true, amount: 0.12 } as const;

const HEADLINE_LINES: Array<{
  text: string;
  weight: number;
  italic: boolean;
  color?: string;
}> = [
  { text: "Fifteen minutes", weight: 400, italic: false },
  { text: "of honesty.", weight: 400, italic: true, color: "#2d4a3e" },
  { text: "A lifetime of possibility.", weight: 300, italic: false },
];

const METRICS = [
  { value: "80–150", label: "Daily booth interactions" },
  { value: "150–300", label: "UTM app downloads" },
  { value: "50–100", label: "Onboarding completions" },
  { value: "20k–80k", label: "Organic reach" },
];

// 5x5 QR-ish pattern (1 = filled, 0 = empty)
const QR_PATTERN: number[][] = [
  [1, 1, 1, 0, 1],
  [1, 0, 1, 0, 0],
  [1, 0, 1, 1, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 0, 1],
];

function MiniWaveMark() {
  return (
    <svg
      width="22"
      height="14"
      viewBox="-1 -1 24 14"
      fill="none"
      stroke="#2d4a3e"
      strokeWidth={1}
      aria-hidden="true"
    >
      <circle cx="6" cy="6" r="6" />
      <circle cx="14" cy="6" r="6" />
    </svg>
  );
}

export default function Activation02() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, IN_VIEW);

  const { scrollY } = useScroll();
  const ghostY = useTransform(scrollY, [2200, 4700], [40, -40]);

  return (
    <section
      ref={sectionRef}
      className="act02"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        background: "#f6f1ea",
        color: "#1a1a1a",
        padding: "160px clamp(40px, 8vw, 120px)",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* Ghost "03" */}
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
          color: "#2d4a3e",
          pointerEvents: "none",
          userSelect: "none",
          lineHeight: 1,
          zIndex: 0,
        }}
      >
        03
      </motion.div>

      {/* Green orb bottom-right */}
      <div
        style={{
          position: "absolute",
          bottom: "-15%",
          right: "-8%",
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, #2d4a3e 0%, transparent 70%)",
          opacity: 0.06,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

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
            animate={inView ? { opacity: 0.7, x: 0 } : { opacity: 0, x: -16 }}
            transition={{ duration: 0.5, ease: EXPO_OUT }}
            className="font-script"
            style={{ fontSize: 20, color: "#2d4a3e" }}
          >
            activation 02
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.5, delay: 0.3, ease: EXPO_OUT }}
            className="font-sans"
            style={{
              background: "rgba(45,74,62,0.08)",
              border: "1px solid rgba(45,74,62,0.15)",
              borderRadius: 100,
              padding: "8px 20px",
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "#2d4a3e",
              opacity: 0.7,
            }}
          >
            Indiranagar · Koramangala
          </motion.div>
        </div>

        {/* HEADLINE BLOCK */}
        <div style={{ maxWidth: 820, marginBottom: 32 }}>
          <h2
            className="act02-headline"
            style={{
              margin: 0,
              fontSize: "clamp(44px, 6.5vw, 96px)",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              color: "#1a1a1a",
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
                  color: line.color ?? "#1a1a1a",
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
              color: "#8a8078",
              maxWidth: 520,
            }}
          >
            A branded booth in Indiranagar or Koramangala. You walk in, put on
            earphones, talk to Wave for 15 minutes. You walk out with a printed
            card — your Resonance Type. Something true about you. Something
            that makes you photograph it.
          </motion.p>
        </div>

        {/* RESONANCE CARD CENTREPIECE */}
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            margin: "80px 0",
          }}
        >
          {/* Floating annotation to the left of the card */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={
              inView ? { opacity: 0.55, x: 0 } : { opacity: 0, x: -15 }
            }
            transition={{ duration: 0.8, delay: 1, ease: EXPO_OUT }}
            className="font-script act02-float-note"
            style={{
              position: "absolute",
              top: "20%",
              right: "calc(50% + 200px)",
              transform: "rotate(5deg)",
              transformOrigin: "right center",
              fontSize: 22,
              color: "#2d4a3e",
              whiteSpace: "nowrap",
              zIndex: 1,
              pointerEvents: "none",
            }}
          >
            walk out knowing yourself
          </motion.div>

          {/* The card itself */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -5 }}
            animate={
              inView
                ? { opacity: 1, y: 0, rotate: -2 }
                : { opacity: 0, y: 40, rotate: -5 }
            }
            transition={{ duration: 0.9, delay: 0.4, ease: EXPO_OUT }}
            whileHover={{
              rotate: 0,
              y: -8,
              boxShadow:
                "0 32px 80px rgba(26,26,26,0.14), 0 8px 24px rgba(26,26,26,0.08)",
              transition: { type: "spring", damping: 15, stiffness: 200 },
            }}
            className="act02-card"
            style={{
              position: "relative",
              width: 320,
              background: "#faf8f4",
              border: "1px solid rgba(26,26,26,0.1)",
              borderRadius: 8,
              padding: "48px 40px",
              boxShadow:
                "0 20px 60px rgba(26,26,26,0.1), 0 4px 16px rgba(26,26,26,0.06)",
              zIndex: 2,
              cursor: "pointer",
            }}
          >
            {/* Masking tape */}
            <div
              style={{
                position: "absolute",
                top: -8,
                left: "50%",
                width: 80,
                height: 18,
                background: "rgba(210,200,180,0.65)",
                borderRadius: 3,
                transform: "translateX(-50%) rotate(-1.5deg)",
                pointerEvents: "none",
              }}
            />

            <div style={{ marginBottom: 32 }}>
              <MiniWaveMark />
            </div>

            <div
              className="font-display"
              style={{
                fontStyle: "italic",
                fontSize: 32,
                color: "#1a1a1a",
                lineHeight: 1.2,
                marginBottom: 16,
              }}
            >
              The Late Bloomer
            </div>

            <div
              className="font-sans"
              style={{
                fontSize: 13,
                lineHeight: 1.75,
                color: "#8a8078",
              }}
            >
              You take time to open up. When you do, it&apos;s total. Wave has
              found 4 people who won&apos;t rush you.
            </div>

            <div
              style={{
                margin: "24px 0",
                borderTop: "1px solid rgba(26,26,26,0.08)",
              }}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <div
                className="font-script"
                style={{ fontSize: 16, color: "#2d4a3e", opacity: 0.6 }}
              >
                — Wave
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(5, 5px)",
                  gridTemplateRows: "repeat(5, 5px)",
                  gap: 1.5,
                }}
                aria-hidden="true"
              >
                {QR_PATTERN.flat().map((cell, i) => (
                  <div
                    key={i}
                    style={{
                      width: 5,
                      height: 5,
                      background:
                        cell === 1 ? "#2d4a3e" : "transparent",
                      opacity: cell === 1 ? 0.4 : 1,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* TWO COLUMN GRID */}
        <div
          className="act02-grid"
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
              background: "rgba(45,74,62,0.05)",
              border: "1px solid rgba(45,74,62,0.1)",
              borderRadius: 4,
              padding: 40,
            }}
          >
            <div
              className="font-script"
              style={{
                fontSize: 18,
                color: "#2d4a3e",
                opacity: 0.7,
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
                color: "#1a1a1a",
              }}
            >
              The booth makes the product the event. Instead of explaining
              what Wave does, people experience it. And the card they walk
              out with is the thing they post.
            </div>
          </motion.div>

          {/* RIGHT column stacked */}
          <div
            className="act02-right-col"
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
                background: "rgba(45,74,62,0.05)",
                border: "1px solid rgba(45,74,62,0.1)",
                borderRadius: 4,
                padding: 32,
              }}
            >
              <div
                className="font-script"
                style={{
                  fontSize: 18,
                  color: "#2d4a3e",
                  opacity: 0.7,
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
                  color: "#2d4a3e",
                  lineHeight: 1,
                }}
              >
                ₹12,300 – ₹21,000
              </div>
              <div
                className="font-sans"
                style={{
                  fontSize: 12,
                  color: "#8a8078",
                  marginTop: 12,
                  lineHeight: 1.6,
                }}
              >
                Enclosure · Tablet setup · Thermal printer · Brand rep
              </div>
            </motion.div>

            {/* Coolness */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.7, delay: 0.5, ease: EXPO_OUT }}
              style={{
                background: "rgba(45,74,62,0.05)",
                border: "1px solid rgba(45,74,62,0.1)",
                borderRadius: 4,
                padding: 32,
              }}
            >
              <div
                className="font-script"
                style={{
                  fontSize: 18,
                  color: "#2d4a3e",
                  opacity: 0.7,
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
                {[true, true, true, true, false].map((filled, i) => (
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
                      background: filled ? "#2d4a3e" : "transparent",
                      border: filled
                        ? "none"
                        : "1.5px solid rgba(45,74,62,0.25)",
                      opacity: filled ? 0.8 : 1,
                      boxSizing: "border-box",
                    }}
                  />
                ))}
              </div>
              <div
                className="font-sans"
                style={{
                  fontSize: 11,
                  color: "#8a8078",
                  lineHeight: 1.6,
                }}
              >
                The printed card is the hook. People post it.
              </div>
            </motion.div>
          </div>
        </div>

        {/* METRICS BAR */}
        <div
          className="act02-metrics"
          style={{
            marginTop: 16,
            background: "rgba(45,74,62,0.05)",
            border: "1px solid rgba(45,74,62,0.1)",
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
                  i < 3 ? "1px solid rgba(45,74,62,0.08)" : "none",
              }}
            >
              <div
                className="font-display"
                style={{
                  fontStyle: "italic",
                  fontSize: 32,
                  color: "#2d4a3e",
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
                  color: "#8a8078",
                  marginTop: 8,
                }}
              >
                {m.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* HANDWRITTEN BOTTOM NOTE */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={inView ? { opacity: 0.4, x: 0 } : { opacity: 0, x: 20 }}
        transition={{ duration: 0.8, delay: 1, ease: EXPO_OUT }}
        className="font-script act02-note"
        style={{
          position: "absolute",
          bottom: 60,
          right: "clamp(40px, 8vw, 120px)",
          fontSize: 26,
          color: "#2d4a3e",
          transform: "rotate(-4deg)",
          zIndex: 2,
        }}
      >
        15 mins with Wave → download
      </motion.div>

      {/* BOTTOM DIVIDER */}
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
          zIndex: 2,
        }}
      />

      <style jsx>{`
        @media (max-width: 767px) {
          .act02 {
            padding: 100px 24px !important;
          }
          .act02-headline {
            font-size: clamp(38px, 9vw, 64px) !important;
          }
          .act02-grid {
            grid-template-columns: 1fr !important;
          }
          .act02-right-col {
            grid-template-rows: auto auto !important;
          }
          .act02-metrics {
            grid-template-columns: 1fr 1fr !important;
          }
          .act02-card {
            max-width: 280px !important;
            width: 100% !important;
          }
          .act02-float-note {
            display: none !important;
          }
          .act02-note {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
