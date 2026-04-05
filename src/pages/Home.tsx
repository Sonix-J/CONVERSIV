import SectionHeading from "../components/SectionHeading";
import FeatureCard from "../components/FeatureCard";
import holder from "../assets/images/holder.jpg";
import LayerRow from "../components/LayerRow";
import PeekCard from "../components/PeekCard";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0C1A2B]">
      <main
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
        <div className="flex flex-col items-center gap-6 md:gap-8 max-w-3xl mx-auto">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white">
              Turn every conversation into revenue.
            </h1>
            <p className="text-center text-white text-sm md:text-base px-4">
              Conversiv is an AI-native system that captures, understands, and
              acts on every customer interaction so your pipeline runs itself.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-4 md:gap-6 justify-center">
          <button className="bg-white rounded px-3 py-2 text-sm md:text-base transition-all duration-500 hover:bg-black hover:text-white">
            Get early access
          </button>
          <button className="border rounded px-3 py-2 text-sm md:text-base text-white transition-all duration-500 hover:bg-white hover:text-black hover:border-white">
            See how it works
          </button>
        </div>
      </main>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white min-h-screen">
        <div className="flex flex-col p-8 md:p-12 gap-6 md:gap-8 justify-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-left">
            Most teams lose revenue in conversations they never track.
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-sm">
            Leads go cold. Context gets lost. Follow-ups don't happen.
          </p>
          <p className="text-lg md:text-xl text-gray-600 font-bold max-w-sm">
            Your tools don't talk to each other and your data doesn't think.
          </p>
        </div>
        <div className="flex items-center justify-center p-8 md:p-12 md:pr-0">
          <div className="w-full rounded-xl md:rounded-l-xl md:rounded-r-none overflow-hidden border border-gray-700 md:border-r-0">
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-800">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="w-full h-60 md:h-80 bg-gray-700" />
          </div>
        </div>
      </section>

      <div className="flex justify-center items-center px-6 py-8 md:py-0">
        <SectionHeading text="Conversiv unifies your entire revenue flow into one AI-native system." />
      </div>
      <section className="flex flex-col justify-between px-6 md:px-12 py-16 md:py-32 text-white">
        <div className="flex flex-col md:flex-row gap-8 justify-center items-start">
          <FeatureCard
            title="Capture"
            description="Engage every visitor with intelligent, real-time conversations that qualify intent instantly."
            image={
              <img
                src={holder}
                alt="holder"
                className="w-full h-full object-cover"
              />
            }
          />
          <FeatureCard
            title="Understand"
            description="Your AI builds memory across conversations. Learning context, behavior, and signals over time."
            image={
              <img
                src={holder}
                alt="holder"
                className="w-full h-full object-cover"
              />
            }
          />
          <FeatureCard
            title="Act"
            description="Automatically route, prioritize, and follow up so no opportunity is ever lost."
            image={
              <img
                src={holder}
                alt="holder"
                className="w-full h-full object-cover"
              />
            }
          />
        </div>
      </section>

      <div className="flex justify-center items-center px-6 py-8 md:py-0">
        <SectionHeading text="One System. Four powerful layers." />
      </div>
      <section className="flex flex-col justify-between px-6 md:px-12 py-16 md:py-32 gap-16 md:gap-32 text-white min-h-screen">
        <LayerRow
          title="Conversational Layer"
          description="Real-time AI chatbot that engages and qualifies leads."
          buttonText="Call to action"
          image={<div className="w-full h-full rounded-2xl bg-teal-200" />}
          reverse
        />
        <LayerRow
          title="Intelligence Layer"
          description="Native GPT that understands intent, context, and behavior."
          buttonText="Another button"
          image={<div className="w-full h-full rounded-2xl bg-teal-200" />}
        />
        <LayerRow
          title="Memory Layer"
          description="CRM + Knowledge Base that stores and structures every interaction."
          buttonText="Call to action"
          image={<div className="w-full h-full rounded-2xl bg-teal-200" />}
          reverse
        />
        <LayerRow
          title="Action Layer"
          description="Automated workflows that move deals forward."
          buttonText="Another button"
          image={<div className="w-full h-full rounded-2xl bg-teal-200" />}
        />
      </section>

      <div className="flex justify-center items-center px-6 py-8 md:py-0">
        <SectionHeading text="Built for teams that run on conversations." />
      </div>
      <section className="flex flex-col px-6 md:px-12 py-16 md:py-32 gap-8 text-white">
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
          <PeekCard
            title="Lead Qualification"
            description="Built for teams that run on conversations."
            image={
              <img
                src={holder}
                alt=""
                className="w-full h-full object-cover rounded-t-xl"
              />
            }
          />
          <PeekCard
            title="Lead Qualification"
            description="Built for teams that run on conversations."
            image={
              <img
                src={holder}
                alt=""
                className="w-full h-full object-cover rounded-t-xl"
              />
            }
          />
          <PeekCard
            title="Lead Qualification"
            description="Built for teams that run on conversations."
            image={
              <img
                src={holder}
                alt=""
                className="w-full h-full object-cover rounded-t-xl"
              />
            }
          />
        </div>
      </section>

      <section className="flex flex-col px-6 md:px-12 py-16 md:py-32 gap-16 md:gap-32 text-white min-h-screen">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold">
          Built with early partners across real estate, B2B, and service
          industries.
        </h2>
        <div className="flex flex-col justify-between items-center gap-4">
          <p className="text-gray-400 text-center">
            Drop some names with confidence
          </p>
          <p className="text-6xl md:text-8xl">...</p>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center p-8 md:p-20 gap-8 md:gap-12 min-h-screen">
        <SectionHeading text="Be part of the first wave of AI-native revenue teams." />
        <div className="flex flex-row gap-4 md:gap-6 justify-center">
          <button className="bg-white rounded px-3 py-2 text-sm md:text-base transition-all duration-500 hover:bg-black hover:text-white">
            Get early access
          </button>
          <button className="border rounded px-3 py-2 text-sm md:text-base text-white transition-all duration-500 hover:bg-white hover:text-black hover:border-white">
            Book a demo
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
