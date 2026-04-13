import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Footer from "../components/Footer";
import holder from "../assets/images/holder.jpg";
import Sharmaine from "../assets/images/Profile/Sharmaine.jpg";
import Isa from "../assets/images/Profile/Isa.jpg";
import Joe from "../assets/images/Profile/Joe.jpeg";

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

export default function Stakeholders() {
  const members = [
    {
      name: "Sharmaine Nadela",
      role: "Founder & CEO",
      bio: "Shaping the future of revenue systems through intelligence and design.",
      image: Sharmaine,
    },
    {
      name: "Isa Adriatico",
      role: "Founding Engineer",
      bio: "Engineering the core intelligence layer powering Conversiv's learning and performance.",
      image: Isa,
    },
    {
      name: "Joe Ocaba",
      role: "Chief Technology Officer",
      bio: "Systems architect driving scalable, AI-native infrastructure and execution.",
      image: Joe,
    },
  ];

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
            Built by operators. Backed by believers.
          </h1>
        </motion.div>
      </motion.main>

      <ScrollSection direction="up">
        <section className="flex flex-col px-6 md:px-32 py-16 md:py-32 gap-12 bg-[#0C1A2B] text-white min-h-screen">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Core Team
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {members.map((member, index) => (
              <motion.div
                key={member.name}
                className="flex flex-col gap-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  className="rounded-2xl overflow-hidden w-full aspect-[3/4]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </motion.div>
                <motion.div
                  className="flex flex-col gap-1"
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                >
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-xl">{member.name}</p>
                    <p className="text-white font-bold text-lg">
                      {member.role}
                    </p>
                  </div>
                  <p className="text-white text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>
      </ScrollSection>

      <Footer />
    </div>
  );
}
