"use client";

import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const EXPO_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];
const IN_VIEW = { once: true, amount: 0.12 } as const;

type Sticker = {
  copy: string;
  label: string;
  left: string;
  top: string;
  rotate: number;
};

const STICKERS: Sticker[] = [
  {
    copy: "Someone sat here last week wondering if they'd ever find their person. They're on Wavelength now.",
    label: "cafe tables",
    left: "4%",
    top: "8%",
    rotate: -7,
  },
  {
    copy: "25 mins of traffic. Wave needs 15 to find your person.",
    label: "auto interiors",
    left: "26%",
    top: "38%",
    rotate: 4,
  },
  {
    copy: "You optimise everything else. Why not this?",
    label: "co-working lifts",
    left: "52%",
    top: "5%",
    rotate: -3,
  },
  {
    copy: "You show up for yourself every day. Imagine someone who loves that about you.",
    label: "gyms",
    left: "70%",
    top: "40%",
    rotate: 6,
  },
  {
    copy: "Your person exists. They just haven't met Wave yet.",
    label: "college boards",
    left: "38%",
    top: "65%",
    rotate: -5,
  },
];

const HEADLINE_LINES = [
  { text: "500 stickers.", weight: 400, italic: false, opacity: 1 },
  { text: "One city", weight: 400, italic: true, opacity: 0.5 },
  { text: "that can't stop thinking.", weight: 300, italic: false, opacity: 1 },
];

const METRICS = [
  { value: "30k–60k", label: "Monthly eyeballs" },
  { value: "300–700", label: "QR scans" },
  { value: "50–120", label: "Stickers posted online" },
  { value: "6", label: "UTM codes by location" },
];

export default function Activation03() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, IN_VIEW);
  const [topSticker, setTopSticker] = useState<number | null>(null);

  const { scrollY } = useScroll();
  const ghostY = useTransform(scrollY, [4000, 6500], [40, -40]);

  return (
    <section
      ref={sectionRef}
      className="act03"
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
      {/* Ghost "04" */}
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
        04
      </motion.div>

      {/* Cream orb top-right */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, #f6f1ea 0%, transparent 70%)",
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
            animate={inView ? { opacity: 0.6, x: 0 } : { opacity: 0, x: -16 }}
            transition={{ duration: 0.5, ease: EXPO_OUT }}
            className="font-script"
            style={{ fontSize: 20, color: "#f6f1ea" }}
          >
            activation 03
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
            500 stickers · 6 areas
          </motion.div>
        </div>

        {/* HEADLINE BLOCK */}
        <div style={{ marginBottom: 32 }}>
          <h2
            className="act03-headline"
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
                  opacity: line.opacity,
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
            Same sticker format. Different copy for every location. What you
            read in an auto doesn&apos;t belong on a gym mirror. Each one is
            written for exactly where it lands.
          </motion.p>
        </div>

        {/* STICKER SCATTER */}
        <div
          className="sticker-scatter"
          style={{
            position: "relative",
            minHeight: 520,
            margin: "80px 0",
          }}
        >
          {STICKERS.map((s, i) => {
            const hoverRotate = s.rotate - Math.sign(s.rotate) * 2;
            return (
              <motion.div
                key={i}
                className="sticker-item"
                onHoverStart={() => setTopSticker(i)}
                initial={{ opacity: 0, y: 30, rotate: s.rotate + 6 }}
                animate={
                  inView
                    ? { opacity: 1, y: 0, rotate: s.rotate }
                    : { opacity: 0, y: 30, rotate: s.rotate + 6 }
                }
                transition={{
                  duration: 0.8,
                  delay: 0.3 + i * 0.12,
                  ease: EXPO_OUT,
                }}
                whileHover={{
                  scale: 1.06,
                  rotate: hoverRotate,
                  zIndex: 20,
                  boxShadow: "0 16px 48px rgba(0,0,0,0.28)",
                  transition: { type: "spring", damping: 12, stiffness: 280 },
                }}
                style={{
                  position: "absolute",
                  left: s.left,
                  top: s.top,
                  zIndex: topSticker === i ? 15 : 5,
                  background: "#faf8f4",
                  borderRadius: 10,
                  padding: "20px 24px 24px",
                  boxShadow:
                    "0 8px 28px rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.12)",
                  maxWidth: 210,
                  cursor: "pointer",
                }}
              >
                {/* Masking tape */}
                <div
                  style={{
                    position: "absolute",
                    top: -7,
                    left: "50%",
                    width: 60,
                    height: 14,
                    background: "rgba(210,200,180,0.5)",
                    borderRadius: 2,
                    transform: "translateX(-50%)",
                    pointerEvents: "none",
                  }}
                />
                {/* Green QR-marker dot */}
                <div
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#2d4a3e",
                  }}
                />
                <div
                  className="font-script"
                  style={{
                    fontSize: 18,
                    lineHeight: 1.5,
                    color: "#1a1a1a",
                  }}
                >
                  {s.copy}
                </div>
                <div
                  className="font-sans"
                  style={{
                    marginTop: 12,
                    fontSize: 9,
                    textTransform: "uppercase",
                    letterSpacing: "0.18em",
                    color: "#2d4a3e",
                    opacity: 0.6,
                  }}
                >
                  {s.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* TWO COLUMN GRID */}
        <div
          className="act03-grid"
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
              Not a campaign. More like a rumour. Everywhere the right
              person might be, there&apos;s something that feels like it was
              left just for them.
            </div>
          </motion.div>

          {/* RIGHT — stacked */}
          <div
            className="act03-right-col"
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
                ₹9,500 – ₹15,000
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
                Design · 500 vinyl prints with UTM QR · Placement crew · 2 days
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
                {[true, true, true, false, false].map((filled, i) => (
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
                      background: filled ? "#f6f1ea" : "transparent",
                      border: filled
                        ? "none"
                        : "1.5px solid rgba(246,241,234,0.2)",
                      opacity: filled ? 0.9 : 1,
                      boxSizing: "border-box",
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
                Cheap to run. Hard to ignore.
              </div>
            </motion.div>
          </div>
        </div>

        {/* METRICS BAR */}
        <div
          className="act03-metrics"
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

      {/* HANDWRITTEN BOTTOM NOTE */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={inView ? { opacity: 0.4, x: 0 } : { opacity: 0, x: 20 }}
        transition={{ duration: 0.8, delay: 1, ease: EXPO_OUT }}
        className="font-script act03-note"
        style={{
          position: "absolute",
          bottom: 60,
          right: "clamp(40px, 8vw, 120px)",
          fontSize: 26,
          color: "#f6f1ea",
          transform: "rotate(-5deg)",
          zIndex: 2,
        }}
      >
        every neighbourhood, one story
      </motion.div>

      {/* Bottom fade to cream */}
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
        @media (max-width: 767px) {
          .act03 {
            padding: 100px 24px !important;
          }
          .act03-headline {
            font-size: clamp(38px, 9vw, 64px) !important;
          }
          .sticker-scatter {
            display: flex;
            flex-direction: column;
            gap: 16px;
            min-height: 0 !important;
          }
          .sticker-item {
            position: static !important;
            left: auto !important;
            top: auto !important;
            max-width: 100% !important;
            margin: 0 auto !important;
          }
          .act03-grid {
            grid-template-columns: 1fr !important;
          }
          .act03-right-col {
            grid-template-rows: auto auto !important;
          }
          .act03-metrics {
            grid-template-columns: 1fr 1fr !important;
          }
          .act03-note {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
