"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import WaveLogo from "@/components/WaveLogo";

const EXPO_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];
const IN_VIEW = { once: true, amount: 0.15 } as const;

const HEADLINE_LINES: Array<{
  text: string;
  weight: number;
  italic: boolean;
  opacity: number;
}> = [
  { text: "If you're reading this,", weight: 300, italic: false, opacity: 1 },
  { text: "Wave already knows", weight: 400, italic: true, opacity: 0.6 },
  { text: "we'd get along.", weight: 400, italic: false, opacity: 1 },
];

export default function Closing() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, IN_VIEW);

  return (
    <section
      ref={sectionRef}
      className="closing"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        background: "#2d4a3e",
        color: "#f6f1ea",
        padding: "160px clamp(40px, 8vw, 120px)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxSizing: "border-box",
      }}
    >
      {/* Cream orbs */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "60%",
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, #f6f1ea 0%, transparent 70%)",
          opacity: 0.06,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "5%",
          width: 300,
          height: 300,
          background:
            "radial-gradient(circle, #f6f1ea 0%, transparent 70%)",
          opacity: 0.04,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* TOP LABEL */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={inView ? { opacity: 0.5, x: 0 } : { opacity: 0, x: -16 }}
        transition={{ duration: 0.5, ease: EXPO_OUT }}
        className="font-script"
        style={{
          fontSize: 20,
          color: "#f6f1ea",
          position: "relative",
          zIndex: 1,
        }}
      >
        why I want this
      </motion.div>

      {/* CENTRE BLOCK */}
      <div
        className="closing-centre"
        style={{
          position: "relative",
          zIndex: 1,
          margin: "auto 0",
          maxWidth: 800,
        }}
      >
        <h2
          className="closing-headline"
          style={{
            margin: 0,
            fontSize: "clamp(44px, 6.5vw, 88px)",
            lineHeight: 0.95,
            color: "#f6f1ea",
            letterSpacing: "-0.02em",
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
                  delay: 0.2 + i * 0.12,
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
            marginTop: 40,
            marginBottom: 0,
            maxWidth: 480,
            fontSize: 15,
            lineHeight: 1.8,
            color: "rgba(246,241,234,0.55)",
          }}
        >
          I want to own this end to end. The ideas, the execution, the
          learning. I&apos;ll show up for every run, stay for every debrief,
          and care about this more than anyone else you&apos;d hire.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.6, delay: 0.8, ease: EXPO_OUT }}
          className="contact-row"
          style={{
            marginTop: 64,
            display: "flex",
            alignItems: "center",
            gap: 40,
            flexWrap: "wrap",
          }}
        >
          <a
            href="mailto:kartikay_jalan@ug29.mesaschool.co"
            className="font-sans closing-email"
          >
            kartikay_jalan@ug29.mesaschool.co
          </a>
          <span
            className="contact-sep"
            style={{
              width: 1,
              height: 16,
              background: "rgba(246,241,234,0.2)",
              display: "inline-block",
            }}
          />
          <span
            className="font-sans"
            style={{
              fontSize: 12,
              color: "rgba(246,241,234,0.4)",
              letterSpacing: "0.1em",
              fontStyle: "italic",
            }}
          >
            Open to a conversation
          </span>
        </motion.div>
      </div>

      {/* Spacer so flex space-between has third slot */}
      <div aria-hidden="true" />

      {/* HANDWRITTEN FLOATING NOTE */}
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={inView ? { opacity: 0.35, x: 0 } : { opacity: 0, x: 16 }}
        transition={{ duration: 0.8, delay: 1.2, ease: EXPO_OUT }}
        className="font-script closing-note"
        style={{
          position: "absolute",
          bottom: 100,
          right: "clamp(40px, 8vw, 120px)",
          fontSize: 22,
          color: "#f6f1ea",
          transform: "rotate(-5deg)",
          zIndex: 2,
        }}
      >
        let&apos;s make something real
      </motion.div>

      {/* BOTTOM BAR */}
      <div
        className="closing-bottom"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "32px clamp(40px, 8vw, 120px)",
          borderTop: "1px solid rgba(246,241,234,0.08)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            opacity: 0.5,
          }}
        >
          <WaveLogo color="#f6f1ea" />
          <span
            className="font-display"
            style={{
              fontStyle: "italic",
              fontSize: 16,
              color: "#f6f1ea",
              opacity: 0.8,
            }}
          >
            Wavelength
          </span>
        </div>
        <div
          className="font-sans closing-credit"
          style={{
            fontSize: 11,
            color: "rgba(246,241,234,0.3)",
            letterSpacing: "0.05em",
            textAlign: "right",
          }}
        >
          Made for Wavelength. By someone who wants to be there.
        </div>
      </div>

      <style jsx>{`
        .closing-email {
          font-size: 13px;
          color: #f6f1ea;
          letter-spacing: 0.08em;
          text-decoration: none;
          position: relative;
          display: inline-block;
          padding-bottom: 3px;
        }
        .closing-email::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 1px;
          background: rgba(246, 241, 234, 0.4);
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .closing-email:hover::after {
          transform: scaleX(1);
        }
        @media (max-width: 767px) {
          .closing {
            padding: 100px 24px 80px !important;
          }
          .closing-headline {
            font-size: clamp(38px, 9vw, 64px) !important;
          }
          .contact-row {
            flex-direction: column;
            align-items: flex-start !important;
            gap: 16px !important;
          }
          .contact-sep {
            display: none !important;
          }
          .closing-bottom {
            flex-direction: column;
            align-items: center !important;
            text-align: center;
            gap: 12px !important;
          }
          .closing-credit {
            text-align: center !important;
          }
          .closing-note {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
