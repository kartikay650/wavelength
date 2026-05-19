"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
  MotionValue,
} from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WaveLogo from "@/components/WaveLogo";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const EXPO_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const PHOTOS = {
  A: "https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=400",
  B: "https://images.unsplash.com/photo-1516589091380-5d8e87df6999?w=400",
  C: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=400",
  D: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=400",
};

type PolaroidProps = {
  src: string;
  width: number;
  rotate: number;
  top: string;
  right: string;
  delay: number;
  layerX: MotionValue<number>;
  layerY: MotionValue<number>;
};

function Polaroid({
  src,
  width,
  rotate,
  top,
  right,
  delay,
  layerX,
  layerY,
}: PolaroidProps) {
  const hoverRotate = rotate - Math.sign(rotate) * 2;

  return (
    <motion.div
      className="polaroid-wrap"
      style={{
        position: "absolute",
        top,
        right,
        width,
        x: layerX,
        y: layerY,
        zIndex: 2,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 60, rotate: rotate + 8 }}
        animate={{ opacity: 1, y: 0, rotate }}
        transition={{ duration: 1, delay, ease: EXPO_OUT }}
        whileHover={{
          scale: 1.06,
          rotate: hoverRotate,
          zIndex: 20,
          boxShadow:
            "0 16px 48px rgba(26,26,26,0.22), 0 4px 12px rgba(26,26,26,0.12)",
          transition: { type: "spring", damping: 15, stiffness: 250 },
        }}
        style={{
          background: "#faf8f4",
          padding: "8px 8px 28px 8px",
          boxShadow:
            "0 8px 32px rgba(26,26,26,0.14), 0 2px 8px rgba(26,26,26,0.08)",
          position: "relative",
          cursor: "pointer",
          willChange: "transform",
        }}
      >
        {/* masking tape */}
        <div
          style={{
            position: "absolute",
            top: -6,
            left: "30%",
            width: "40%",
            height: 14,
            background: "rgba(210,200,180,0.7)",
            borderRadius: 2,
            transform: "rotate(-1deg)",
            pointerEvents: "none",
          }}
        />
        <img
          src={src}
          alt=""
          draggable={false}
          style={{
            display: "block",
            width: "100%",
            aspectRatio: "4 / 5",
            objectFit: "cover",
            userSelect: "none",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  const layer1X = useTransform(springX, (v) => v * -18);
  const layer1Y = useTransform(springY, (v) => v * -18);
  const layer2X = useTransform(springX, (v) => v * 32);
  const layer2Y = useTransform(springY, (v) => v * 32);
  const layer3X = useTransform(springX, (v) => v * -52);
  const layer3Y = useTransform(springY, (v) => v * -52);

  const coralRef = useRef<HTMLDivElement>(null);
  const sageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (coralRef.current) {
        gsap.fromTo(
          coralRef.current,
          { opacity: 0, scale: 0.6 },
          { opacity: 0.22, scale: 1, duration: 2.5, ease: "power2.out" }
        );
      }
      if (sageRef.current) {
        gsap.fromTo(
          sageRef.current,
          { opacity: 0, scale: 0.6 },
          {
            opacity: 0.18,
            scale: 1,
            duration: 2.5,
            ease: "power2.out",
            delay: 0.2,
          }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    mouseX.set(e.clientX / window.innerWidth - 0.5);
    mouseY.set(e.clientY / window.innerHeight - 0.5);
  }

  // Timing
  const LINE1_DELAY = 0.3;
  const LINE1_WORDS = ["I", "want", "to", "take"];
  const LINE1_STAGGER = 0.07;
  const LINE1_DURATION = 0.7;
  // Line 1 finishes around 0.3 + 3*0.07 + 0.7 = 1.21s; spec says "~0.85s total" for handoff
  const LINE2_DELAY = 0.85;
  const LINE2_LETTERS = "Wavelength".split("");
  const LINE2_STAGGER = 0.04;
  const LINE2_DURATION = 0.7;
  const LINE2_LAST_END =
    LINE2_DELAY + (LINE2_LETTERS.length - 1) * LINE2_STAGGER + LINE2_DURATION;
  const UNDERLINE_DELAY = LINE2_LAST_END - 0.1;
  const LINE3_DELAY = LINE2_LAST_END + 0.05;

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        background: "#f6f1ea",
        overflow: "hidden",
      }}
    >
      {/* NAV */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          padding: "28px 40px",
          zIndex: 100,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "transparent",
        }}
      >
        <WaveLogo />
        <motion.span
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-sans"
          style={{
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "#8a8078",
          }}
        >
          Kartikay Jalan
        </motion.span>
      </nav>

      {/* BACKGROUND LAYER (layer1 parallax) */}
      <motion.div
        className="bg-layer"
        style={{
          position: "absolute",
          inset: 0,
          x: layer1X,
          y: layer1Y,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <div
          ref={coralRef}
          className="orb-coral"
          style={{
            position: "absolute",
            top: "8%",
            right: "28%",
            width: 500,
            height: 400,
            background:
              "radial-gradient(circle, #e8897a 0%, transparent 70%)",
            opacity: 0,
          }}
        />
        <div
          ref={sageRef}
          className="orb-sage"
          style={{
            position: "absolute",
            bottom: "15%",
            right: "8%",
            width: 320,
            height: 320,
            background:
              "radial-gradient(circle, #8fa898 0%, transparent 70%)",
            opacity: 0,
          }}
        />
      </motion.div>

      {/* MAIN TEXT BLOCK */}
      <div
        className="text-block"
        style={{
          position: "absolute",
          left: "clamp(40px, 7vw, 100px)",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 2,
          maxWidth: 820,
        }}
      >
        <h1
          className="headline"
          style={{
            margin: 0,
            fontSize: "clamp(54px, 7.5vw, 108px)",
            lineHeight: 0.92,
            letterSpacing: "-0.025em",
            color: "#1a1a1a",
          }}
        >
          {/* Line 1 — word reveal */}
          <span
            className="font-display"
            style={{ display: "block", fontWeight: 400, fontStyle: "normal" }}
          >
            {LINE1_WORDS.map((word, i) => (
              <span
                key={i}
                style={{
                  display: "inline-block",
                  overflow: "hidden",
                  verticalAlign: "bottom",
                  marginRight: "0.25em",
                  paddingBottom: "0.05em",
                }}
              >
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: LINE1_DURATION,
                    delay: LINE1_DELAY + i * LINE1_STAGGER,
                    ease: EXPO_OUT,
                  }}
                  style={{ display: "inline-block" }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </span>

          {/* Line 2 — letter reveal + underline */}
          <span
            className="font-display"
            style={{
              display: "inline-block",
              fontWeight: 400,
              fontStyle: "italic",
              color: "#2d4a3e",
              position: "relative",
            }}
          >
            <span style={{ display: "inline-block" }}>
              {LINE2_LETTERS.map((ch, i) => (
                <span
                  key={i}
                  style={{
                    display: "inline-block",
                    overflow: "hidden",
                    verticalAlign: "bottom",
                    paddingBottom: "0.05em",
                  }}
                >
                  <motion.span
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{
                      duration: LINE2_DURATION,
                      delay: LINE2_DELAY + i * LINE2_STAGGER,
                      ease: EXPO_OUT,
                    }}
                    style={{ display: "inline-block" }}
                  >
                    {ch}
                  </motion.span>
                </span>
              ))}
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.6,
                delay: UNDERLINE_DELAY,
                ease: EXPO_OUT,
              }}
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: "0.02em",
                height: 1,
                background: "#2d4a3e",
                opacity: 0.4,
                transformOrigin: "left",
              }}
            />
          </span>

          {/* Line 3 — whole word reveal */}
          <span
            className="font-display"
            style={{
              display: "block",
              fontWeight: 300,
              fontStyle: "normal",
            }}
          >
            <span
              style={{
                display: "inline-block",
                overflow: "hidden",
                verticalAlign: "bottom",
                paddingBottom: "0.05em",
              }}
            >
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 0.7,
                  delay: LINE3_DELAY,
                  ease: EXPO_OUT,
                }}
                style={{ display: "inline-block" }}
              >
                offline.
              </motion.span>
            </span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="font-sans"
          style={{
            marginTop: 36,
            marginBottom: 0,
            fontSize: 12,
            letterSpacing: "0.12em",
            color: "#8a8078",
          }}
        >
          3 ideas. All offline. All Bangalore.
        </motion.p>
      </div>

      {/* POLAROID CLUSTER */}
      <div className="polaroid-cluster" style={{ position: "absolute", inset: 0 }}>
        <Polaroid
          src={PHOTOS.A}
          width={200}
          rotate={-11}
          top="8%"
          right="14%"
          delay={0.6}
          layerX={layer3X}
          layerY={layer3Y}
        />
        <Polaroid
          src={PHOTOS.B}
          width={175}
          rotate={6}
          top="42%"
          right="4%"
          delay={0.75}
          layerX={layer2X}
          layerY={layer2Y}
        />
        <Polaroid
          src={PHOTOS.C}
          width={155}
          rotate={-4}
          top="18%"
          right="34%"
          delay={0.9}
          layerX={layer2X}
          layerY={layer2Y}
        />
        <Polaroid
          src={PHOTOS.D}
          width={135}
          rotate={9}
          top="55%"
          right="26%"
          delay={1.05}
          layerX={layer1X}
          layerY={layer1Y}
        />

        {/* Handwritten annotation */}
        <motion.div
          className="annotation"
          style={{
            position: "absolute",
            top: "62%",
            right: "38%",
            zIndex: 3,
            x: layer2X,
            y: layer2Y,
          }}
        >
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 0.7, x: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="font-script"
            style={{
              display: "inline-block",
              fontSize: 18,
              color: "#2d4a3e",
              transform: "rotate(-8deg)",
              whiteSpace: "nowrap",
            }}
          >
            this could be them
          </motion.span>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.2 }}
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
          zIndex: 2,
        }}
      >
        <span
          className="font-sans"
          style={{
            fontSize: 9,
            textTransform: "uppercase",
            letterSpacing: "0.25em",
            color: "#8a8078",
          }}
        >
          scroll
        </span>
        <motion.div
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: 1,
            height: 36,
            background: "#2d4a3e",
            opacity: 0.4,
            transformOrigin: "top",
          }}
        />
      </motion.div>

      <style jsx>{`
        @media (max-width: 767px) {
          .polaroid-cluster {
            display: none;
          }
          .headline {
            font-size: clamp(44px, 10vw, 72px) !important;
          }
          .text-block {
            right: clamp(24px, 7vw, 60px);
          }
          .orb-coral {
            opacity: 0.11 !important;
          }
          .orb-sage {
            opacity: 0.09 !important;
          }
        }
      `}</style>
    </section>
  );
}
