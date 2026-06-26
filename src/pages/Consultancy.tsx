import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";
import SectionHeading from "../components/SectionHeading";

import flowCapture from "../assets/images/flowCapture.webp";
import flowUnderstand from "../assets/images/flowUnderstand.webp";
import flowAct from "../assets/images/flowAct.webp";
import usecaseSaaS from "../assets/images/usecaseSaaS.webp";

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

const features = [
  {
    title: "AI Readiness Assessment",
    description:
      "Evaluation of your current tech stack, data infrastructure, and workflows to pinpoint prime AI integration opportunities.",
    src: flowCapture,
  },
  {
    title: "Custom AI Strategy & Integration",
    description:
      "Designing and embedding tailored AI-native solutions into your daily operations.",
    src: flowUnderstand,
  },
  {
    title: "Workflow Automation & Optimization",
    description:
      "Replacing repetitive, high-friction tasks with intelligent, self-sustaining automated systems.",
    src: flowAct,
  },
  {
    title: "AI Upskilling & Governance",
    description:
      "Training your team to collaborate effectively with AI while establishing strict ethical, security, and compliance guardrails.",
    src: usecaseSaaS,
  },
];

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
            <SectionHeading text="Turn AI Potential into Business Performance." />
            <p className="text-center text-white text-sm md:text-base px-4">
              Navigating the AI landscape shouldn't feel like guesswork.
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
              Book a Consultation
            </button>
          </Link>
          <Link to="/about">
            <button className="border rounded px-3 py-2 text-sm md:text-base text-white transition-all duration-500 hover:bg-white hover:text-black hover:border-white">
              Explore our solutions
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
            The Challenge
          </motion.h2>
          <motion.p
            className="text-white text-sm md:text-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            AI is evolving fast. Are you keeping up—or just catching up?
            Integrating AI isn't just about adopting new tools; it's about
            reshaping workflows to drive actual revenue and efficiency.
          </motion.p>

          <motion.p
            className="text-3xl md:text-center sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold mt-24"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          >
            We don't believe in one-size-fits-all AI. We build tailored,
            data-driven frameworks engineered specifically for your operational
            ecosystem.
          </motion.p>

          <div className="flex flex-col gap-12 md:hidden">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              >
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  image={
                    <img
                      src={feature.src}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  }
                />
              </motion.div>
            ))}
          </div>

          <div className="hidden md:flex md:flex-col gap-0">
            <div className="grid grid-cols-2 gap-x-6 mb-24">
              {[features[0], features[1]].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ x: i === 0 ? -100 : 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  className="w-full"
                >
                  <FeatureCard
                    title={feature.title}
                    description={feature.description}
                    image={
                      <img
                        src={feature.src}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                    }
                  />
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-x-6">
              {[features[2], features[3]].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ x: i === 0 ? -100 : 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  className="w-full"
                >
                  <FeatureCard
                    title={feature.title}
                    description={feature.description}
                    image={
                      <img
                        src={feature.src}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                    }
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollSection>

      <ScrollSection direction="up">
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
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
          className="flex flex-col justify-center items-center p-8 md:p-20 gap-8 md:gap-12 min-h-screen"
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            <SectionHeading text="Ready to be build an AI-driven future?" />
            <motion.p className="text-center text-white text-sm md:text-base">
              Let’s map out your AI transformation together. Schedule a
              discovery call with our expert consultants today.
            </motion.p>
          </motion.div>
          <motion.div
            className="flex flex-row gap-4 md:gap-6 justify-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Link to="/earlyaccess">
              <button className="bg-white rounded px-3 py-2 text-sm md:text-base transition-all duration-500 hover:bg-black hover:text-white">
                Schedule your discovery call
              </button>
            </Link>
          </motion.div>
        </motion.section>
      </ScrollSection>

      <Footer />
    </div>
  );
}
