import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";
import holder from "../assets/images/holder.jpg";
import about from "../assets/motions/about.mp4";

function ScrollSection({ children, direction = "up", delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-[#0C1A2B]">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          background: "#1a5f72",
          backgroundImage: `
            radial-gradient(ellipse at 50% 50%, #0C1A2B 0%, transparent 60%),
            radial-gradient(ellipse at 20% 20%, #A0E6FF 0%, transparent 45%),
            radial-gradient(ellipse at 80% 10%, #2a4a3a 0%, transparent 40%),
            radial-gradient(ellipse at 60% 60%, #0e8a9a 0%, transparent 40%),
            radial-gradient(ellipse at 10% 80%, #0C1A2B 0%, transparent 50%),
            radial-gradient(ellipse at 90% 80%, #E5E5E5 0%, transparent 35%)
          `,
        }}
        className="relative flex flex-col p-8 md:p-20 justify-center items-center gap-8 min-h-screen z-10"
      >
        <motion.div
          className="flex flex-col items-center gap-6 md:gap-8 max-w-4xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white">
              Conversiv was built from a simple observation:
            </h1>
            <p className="text-center text-white text-sm md:text-base px-4">
              Revenue is not lost in tools, it's lost in conversations. We're
              building a system where every interaction becomes structured
              intelligence.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-row gap-4 md:gap-6 justify-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <button className="bg-white rounded px-3 py-2 text-sm md:text-base transition-all duration-500 hover:bg-black hover:text-white">
            Call to action
          </button>
          <button className="border rounded px-3 py-2 text-sm md:text-base text-white transition-all duration-500 hover:bg-white hover:text-black hover:border-white">
            Secondary
          </button>
        </motion.div>
      </motion.main>

      <ScrollSection direction="up">
        <section className="px-6 py-16 md:px-64 md:py-32">
          <div className="w-full rounded-2xl overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto block"
            >
              <source src={about} type="video/mp4" />
            </video>
          </div>
        </section>
      </ScrollSection>

      <Footer />
    </div>
  );
}
