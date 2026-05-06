import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import FeatureCard from "../components/FeatureCard";
import LayerRow from "../components/LayerRow";
import PeekCard from "../components/PeekCard";
import Footer from "../components/Footer";

import usecaseAgencies from "../assets/images/usecaseAgencies.webp";
import flowCapture from "../assets/images/flowCapture.webp";
import flowUnderstand from "../assets/images/flowUnderstand.webp";
import flowAct from "../assets/images/flowAct.webp";
import leadQualification from "../assets/icons/leadQualification.png";
import customerIntelligence from "../assets/icons/customerIntelligence.png";
import salesAutomation from "../assets/icons/salesAutomation.png";

import conversationLayer from "../assets/motions/conversationLayer.webm";
import intelligenceLayer from "../assets/motions/intelligenceLayer.webm";
import memoryLayer from "../assets/motions/memoryLayer.webm";
import actionLayer from "../assets/motions/actionLayer.webm";

function useScrollAnimation() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return { ref, controls, inView };
}

export default function Home() {
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
          className="flex flex-col items-center gap-6 md:gap-8 max-w-3xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white">
              Turn every conversation into revenue.
            </h1>
            <p className="text-center text-white text-sm md:text-base px-4">
              Conversiv is an AI-native system that captures, understands, and
              acts on every customer interaction so your pipeline runs itself.
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
            <button className="bg-white rounded px-3 py-2 text-sm md:text-base cursor-pointer transition-all duration-500 hover:bg-black hover:text-white">
              Get early access
            </button>
          </Link>
          <Link to="/platform">
            <button className="border rounded px-3 py-2 text-sm md:text-base text-white cursor-pointer transition-all duration-500 hover:bg-white hover:text-black hover:border-white">
              See how it works
            </button>
          </Link>
        </motion.div>
      </motion.main>

      <ScrollSection direction="left">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white min-h-screen">
          <motion.div
            className="flex flex-col p-8 md:p-12 gap-6 md:gap-8 justify-center"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-left">
              Most teams lose revenue in conversations they never track.
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-sm">
              Leads go cold. Context gets lost. Follow-ups don't happen.
            </p>
            <p className="text-lg md:text-xl text-gray-600 font-bold max-w-sm">
              Your tools don't talk to each other and your data doesn't think.
            </p>
          </motion.div>

          <motion.div
            className="flex items-center justify-center p-8 md:p-12 md:pr-0"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="w-full rounded-xl md:rounded-l-xl md:rounded-r-none overflow-hidden border border-gray-700 md:border-r-0">
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-800">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <img
                src={usecaseAgencies}
                alt=""
                className="w-full h-60 md:h-80 object-cover"
              />
            </div>
          </motion.div>
        </section>
      </ScrollSection>

      <motion.div
        className="flex justify-center items-center px-6 py-8 md:py-0"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading text="Conversiv unifies your entire revenue flow into one AI-native system." />
      </motion.div>

      <ScrollSection direction="up">
        <section className="flex flex-col justify-between px-6 md:px-12 py-16 md:py-32 text-white">
          <div className="flex flex-col md:flex-row gap-8 justify-center items-start">
            <motion.div
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="w-full"
            >
              <FeatureCard
                title="Capture"
                description="Engage every visitor with intelligent, real-time conversations that qualify intent instantly."
                image={
                  <img
                    src={flowCapture}
                    alt="holder"
                    className="w-full h-full object-cover"
                  />
                }
              />
            </motion.div>
            <motion.div
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="w-full"
              transition={{ delay: 0.1 }}
            >
              <FeatureCard
                title="Understand"
                description="Your AI builds memory across conversations. Learning context, behavior, and signals over time."
                image={
                  <img
                    src={flowUnderstand}
                    alt="holder"
                    className="w-full h-full object-cover"
                  />
                }
              />
            </motion.div>
            <motion.div
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="w-full"
              transition={{ delay: 0.2 }}
            >
              <FeatureCard
                title="Act"
                description="Automatically route, prioritize, and follow up so no opportunity is ever lost."
                image={
                  <img
                    src={flowAct}
                    alt="holder"
                    className="w-full h-full object-cover"
                  />
                }
              />
            </motion.div>
          </div>
        </section>
      </ScrollSection>

      <motion.div
        className="flex justify-center items-center px-6 py-8 md:py-0"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading text="One System. Four powerful layers." />
      </motion.div>

      <ScrollSection direction="up">
        <section className="flex flex-col justify-between px-6 md:px-12 py-16 md:py-32 gap-16 md:gap-32 text-white min-h-screen">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <LayerRow
              title="Conversational Layer"
              description="Real-time AI chatbot that engages and qualifies leads."
              image={
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={conversationLayer} type="video/mp4" />
                </video>
              }
              reverse
            />
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <LayerRow
              title="Intelligence Layer"
              description="Native GPT that understands intent, context, and behavior."
              image={
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={intelligenceLayer} type="video/mp4" />
                </video>
              }
            />
          </motion.div>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <LayerRow
              title="Memory Layer"
              description="CRM + Knowledge Base that stores and structures every interaction."
              image={
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={memoryLayer} type="video/mp4" />
                </video>
              }
              reverse
            />
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <LayerRow
              title="Action Layer"
              description="Automated workflows that move deals forward."
              image={
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={actionLayer} type="video/mp4" />
                </video>
              }
            />
          </motion.div>
        </section>
      </ScrollSection>

      <motion.div
        className="flex justify-center items-center px-6 py-8 md:py-0"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading text="Built for teams that run on conversations." />
      </motion.div>

      <ScrollSection direction="up">
        <section className="flex flex-col px-6 md:px-12 py-16 md:py-32 gap-8 text-white">
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <PeekCard
                title="Lead Qualification"
                description="Built for teams that run on conversations."
                image={
                  <img
                    src={leadQualification}
                    alt="Lead Qualification"
                    className="w-full h-full object-cover rounded-t-xl"
                  />
                }
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="w-full"
            >
              <PeekCard
                title="Sales Automation"
                description="Follow up without lifting a finger."
                image={
                  <img
                    src={salesAutomation}
                    alt="Sales Automation"
                    className="w-full h-full object-cover rounded-t-xl"
                  />
                }
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="w-full"
            >
              <PeekCard
                title="Customer Intelligence"
                description="Turn conversations into structured insights"
                image={
                  <img
                    src={customerIntelligence}
                    alt="Customer Intelligence"
                    className="w-full h-full object-cover rounded-t-xl"
                  />
                }
              />
            </motion.div>
          </div>
        </section>
      </ScrollSection>

      <ScrollSection direction="left">
        <section className="flex flex-col px-6 md:px-12 py-16 md:py-32 gap-16 md:gap-32 text-white min-h-screen">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold">
            Built with early partners across real estate, B2B, and service
            industries.
          </h2>
          <div className="flex flex-col justify-between items-center gap-4">
          </div>
        </section>
      </ScrollSection>

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
        >
          <SectionHeading text="Be part of the first wave of AI-native revenue teams." />
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
              Get early access
            </button>
          </Link>
        </motion.div>
      </motion.section>

      <Footer />
    </div>
  );
}

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
