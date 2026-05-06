import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";

import flowCapture from "../assets/images/flowCapture.webp";
import flowUnderstand from "../assets/images/flowUnderstand.webp";
import flowAct from "../assets/images/flowAct.webp";

import conversationLayer from "../assets/motions/conversationLayer.webm";
import intelligenceLayer from "../assets/motions/intelligenceLayer.webm";
import memoryLayer from "../assets/motions/memoryLayer.webm";
import actionLayer from "../assets/motions/actionLayer.webm";
import { Link } from "react-router-dom";

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

export default function Platform() {
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
              Your AI that never forgets.
            </h1>
            <p className="text-center text-white text-sm md:text-base px-4">
              Built on memory, not messages. Every interaction compounds into
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
          <Link to="/earlyaccess">
            <button className="bg-white rounded px-3 py-2 text-sm md:text-base transition-all duration-500 hover:bg-black hover:text-white">
              Get early access
            </button>
          </Link>
          <Link to="/about">
            <button className="border rounded px-3 py-2 text-sm md:text-base text-white transition-all duration-500 hover:bg-white hover:text-black hover:border-white">
              See how it works
            </button>
          </Link>
        </motion.div>
      </motion.main>

      <ScrollSection direction="up">
        <section className="flex flex-col px-6 md:px-32 py-16 md:py-32 gap-12 bg-[#0C1A2B] text-white min-h-screen">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Built on a specialized language model with structured output and
            memory persistence.
          </motion.h2>

          <div className="flex flex-col gap-4 md:hidden">
            {[
              conversationLayer,
              intelligenceLayer,
              memoryLayer,
              actionLayer,
            ].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="rounded-2xl overflow-hidden h-48"
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={src} type="video/mp4" />
                </video>
              </motion.div>
            ))}
          </div>

          <div className="hidden md:grid grid-cols-2 gap-4 md:gap-6 items-start">
            <div className="flex flex-col gap-4 md:gap-6">
              {[conversationLayer, intelligenceLayer].map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="rounded-2xl overflow-hidden h-48 md:h-80 lg:h-96"
                >
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={src} type="video/mp4" />
                  </video>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col gap-4 md:gap-6 mt-16 md:mt-24">
              {[memoryLayer, actionLayer].map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="rounded-2xl overflow-hidden h-48 md:h-80 lg:h-96"
                >
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={src} type="video/mp4" />
                  </video>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollSection>

      <ScrollSection direction="up">
        <section className="flex flex-col justify-between px-6 md:px-12 py-16 md:py-32 text-white">
          <div className="flex flex-col md:flex-row gap-8 justify-center items-start">
            {[
              {
                title: "Capture",
                description:
                  "Engage every visitor with intelligent, real-time conversations that qualify intent instantly.",
                image: flowCapture,
              },
              {
                title: "Understand",
                description:
                  "Your AI builds memory across conversations. Learning context, behavior, and signals over time.",
                image: flowUnderstand,
              },
              {
                title: "Act",
                description:
                  "Automatically route, prioritize, and follow up so no opportunity is ever lost.",
                image: flowAct,
              },
            ].map(({ title, description, image }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="w-full"
              >
                <FeatureCard
                  title={title}
                  description={description}
                  image={
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full object-cover"
                    />
                  }
                />
              </motion.div>
            ))}
          </div>
        </section>
      </ScrollSection>

      <Footer />
    </div>
  );
}
