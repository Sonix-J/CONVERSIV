import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Footer from "../components/Footer";
import LayerRow from "../components/LayerRow";
import usecaseAgencies from "../assets/images/usecaseAgencies.png";
import usecaseRealEstate from "../assets/images/usecaseRealEstate.png";
import usecaseSaaS from "../assets/images/usecaseSaaS.png";

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

export default function UseCase() {
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white">
            Where Conversiv works best.
          </h1>
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
            Another button
          </button>
        </motion.div>
      </motion.main>

      <section className="flex flex-col justify-between px-6 md:px-12 py-16 md:py-32 gap-16 md:gap-32 text-white min-h-screen">
        {[
          {
            title: "Real Estate",
            problem:
              "Leads come in 24/7—but follow-ups are slow, inconsistent, or missed entirely.",
            solution:
              "Conversiv qualifies buyers instantly, captures intent, and routes high-value prospects in real time",
            outcome:
              "Faster response. Higher conversions. No lost opportunities.",
            image: usecaseRealEstate,
            direction: "left",
          },
          {
            title: "SaaS",
            problem:
              "Inbound leads lack context, and sales teams waste time chasing low-intent prospects.",
            solution:
              "Conversiv scores, enriches, and prioritizes every lead based on real-time signals and behavior.",
            outcome:
              "Smarter pipeline. Shorter sales cycles. Better close rates.",
            image: usecaseSaaS,
            direction: "right",
          },
          {
            title: "Agencies",
            problem:
              "Managing multiple clients means fragmented data, missed insights, and inconsistent follow-ups.",
            solution:
              "Conversiv centralizes conversations, tracks intent, and automates engagement across accounts.",
            outcome:
              "Scalable operations. Clear visibility. Stronger client results.",
            image: usecaseAgencies,
            direction: "left",
          },
        ].map((item, index) => (
          <ScrollSection key={item.title} direction={item.direction}>
            <LayerRow
              title={item.title}
              problem={item.problem}
              solution={item.solution}
              outcome={item.outcome}
              image={
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              }
              reverse={item.title === "SaaS"}
            />
          </ScrollSection>
        ))}
      </section>

      <Footer />
    </div>
  );
}
