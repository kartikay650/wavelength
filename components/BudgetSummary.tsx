"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const EXPO_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];
const IN_VIEW = { once: true, amount: 0.15 } as const;

type Row = {
  name: string;
  sub: string;
  budget: string;
  fillPercent: number;
};

const ROWS: Row[] = [
  {
    name: "The Fishbowl Van",
    sub: "Glass van · Interior setup · Signage · Pilot run",
    budget: "₹21,000 – ₹34,500",
    fillPercent: 100,
  },
  {
    name: "The Confessional Booth",
    sub: "Enclosure · Thermal printer · Tablet · Brand rep",
    budget: "₹12,300 – ₹21,000",
    fillPercent: 68,
  },
  {
    name: "The Sticker Blitz",
    sub: "Design · 500 vinyl prints · Placement crew · 2 days",
    budget: "₹9,500 – ₹15,000",
    fillPercent: 46,
  },
];

export default function BudgetSummary() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, IN_VIEW);

  const { scrollY } = useScroll();
  const ghostY = useTransform(scrollY, [6000, 8500], [40, -40]);

  return (
    <section
      ref={sectionRef}
      className="budget"
      style={{
        position: "relative",
        width: "100%",
        background: "#f6f1ea",
        color: "#1a1a1a",
        padding: "160px clamp(40px, 8vw, 120px)",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* Ghost "total" */}
      <motion.div
        initial={{ x: 60, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 0.03 } : { x: 60, opacity: 0 }}
        transition={{ duration: 1.2, ease: EXPO_OUT }}
        style={{
          position: "absolute",
          right: "-1vw",
          top: "50%",
          translateY: "-50%",
          y: ghostY,
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontSize: "22vw",
          color: "#2d4a3e",
          pointerEvents: "none",
          userSelect: "none",
          lineHeight: 1,
          zIndex: 0,
        }}
      >
        total
      </motion.div>

      {/* Green orb bottom-left */}
      <div
        style={{
          position: "absolute",
          bottom: "-15%",
          left: "-8%",
          width: 450,
          height: 450,
          background:
            "radial-gradient(circle, #2d4a3e 0%, transparent 70%)",
          opacity: 0.05,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* SECTION LABEL */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={inView ? { opacity: 0.7, x: 0 } : { opacity: 0, x: -16 }}
          transition={{ duration: 0.5, ease: EXPO_OUT }}
          className="font-script"
          style={{ fontSize: 20, color: "#2d4a3e" }}
        >
          the full picture
        </motion.div>

        {/* HEADLINE */}
        <h2
          className="budget-headline"
          style={{
            margin: "16px 0 80px 0",
            maxWidth: 600,
            fontSize: "clamp(44px, 6vw, 80px)",
            lineHeight: 1,
            color: "#1a1a1a",
          }}
        >
          <span
            className="font-display"
            style={{
              display: "block",
              fontWeight: 400,
              fontStyle: "normal",
              overflow: "hidden",
              paddingBottom: "0.06em",
            }}
          >
            <motion.span
              initial={{ y: "110%" }}
              animate={inView ? { y: "0%" } : { y: "110%" }}
              transition={{ duration: 0.9, delay: 0.2, ease: EXPO_OUT }}
              style={{ display: "inline-block" }}
            >
              Three ideas.
            </motion.span>
          </span>
          <span
            className="font-display"
            style={{
              display: "block",
              fontWeight: 300,
              fontStyle: "italic",
              color: "#2d4a3e",
              overflow: "hidden",
              paddingBottom: "0.06em",
            }}
          >
            <motion.span
              initial={{ y: "110%" }}
              animate={inView ? { y: "0%" } : { y: "110%" }}
              transition={{ duration: 0.9, delay: 0.32, ease: EXPO_OUT }}
              style={{ display: "inline-block" }}
            >
              One city.
            </motion.span>
          </span>
        </h2>

        {/* BUDGET ROWS */}
        <div>
          {ROWS.map((row, i) => {
            const rowDelay = 0.1 + i * 0.1;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.6,
                  delay: rowDelay,
                  ease: EXPO_OUT,
                }}
                style={{
                  padding: "28px 0",
                  borderBottom: "1px solid rgba(26,26,26,0.08)",
                }}
                className="budget-row"
              >
                <div
                  className="budget-row-top"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    gap: 24,
                  }}
                >
                  <div>
                    <div
                      className="font-display"
                      style={{
                        fontWeight: 400,
                        fontSize: 22,
                        color: "#1a1a1a",
                        lineHeight: 1.2,
                      }}
                    >
                      {row.name}
                    </div>
                    <div
                      className="font-script"
                      style={{
                        fontSize: 13,
                        color: "#8a8078",
                        marginTop: 4,
                      }}
                    >
                      {row.sub}
                    </div>
                  </div>
                  <div
                    className="font-display budget-amount"
                    style={{
                      fontStyle: "italic",
                      fontSize: 28,
                      color: "#2d4a3e",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {row.budget}
                  </div>
                </div>

                {/* Progress bar */}
                <div
                  style={{
                    marginTop: 18,
                    width: "100%",
                    height: 2,
                    background: "rgba(45,74,62,0.08)",
                    borderRadius: 2,
                    overflow: "hidden",
                  }}
                >
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: rowDelay + 0.2,
                      ease: "easeOut",
                    }}
                    style={{
                      width: `${row.fillPercent}%`,
                      height: "100%",
                      background: "#2d4a3e",
                      borderRadius: 2,
                      transformOrigin: "left",
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* TOTAL ROW */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.5, ease: EXPO_OUT }}
          className="budget-total"
          style={{
            marginTop: 48,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            gap: 24,
          }}
        >
          <div>
            <div
              className="font-sans"
              style={{
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                color: "#8a8078",
              }}
            >
              Total
            </div>
            <div
              className="font-sans"
              style={{
                fontSize: 11,
                color: "#8a8078",
                opacity: 0.6,
                marginTop: 4,
              }}
            >
              across all 3 activations
            </div>
          </div>
          <div
            className="font-display"
            style={{
              fontStyle: "italic",
              fontSize: "clamp(32px, 4vw, 52px)",
              color: "#1a1a1a",
              whiteSpace: "nowrap",
              lineHeight: 1,
            }}
          >
            ₹42,800 – ₹70,500
          </div>
        </motion.div>

        {/* SUMMARY LINE */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.7, delay: 0.7, ease: EXPO_OUT }}
          className="font-display"
          style={{
            marginTop: 48,
            marginBottom: 0,
            maxWidth: 560,
            fontSize: 20,
            lineHeight: 1.75,
            color: "#8a8078",
          }}
        >
          Three activations. One city. All of Bangalore talking about
          Wavelength before a single paid ad runs.
        </motion.p>
      </div>

      {/* HANDWRITTEN NOTE */}
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={inView ? { opacity: 0.4, x: 0 } : { opacity: 0, x: 16 }}
        transition={{ duration: 0.8, delay: 1, ease: EXPO_OUT }}
        className="font-script budget-note"
        style={{
          position: "absolute",
          bottom: 60,
          right: "clamp(40px, 8vw, 120px)",
          fontSize: 24,
          color: "#2d4a3e",
          transform: "rotate(4deg)",
          zIndex: 2,
        }}
      >
        max noise. min spend.
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
          .budget {
            padding: 100px 24px !important;
          }
          .budget-headline {
            font-size: clamp(38px, 9vw, 60px) !important;
          }
          .budget-row-top {
            flex-direction: column;
            gap: 8px !important;
            align-items: flex-start !important;
          }
          .budget-amount {
            align-self: flex-end;
          }
          .budget-total {
            flex-direction: column;
            align-items: flex-start !important;
            gap: 12px !important;
          }
          .budget-note {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
