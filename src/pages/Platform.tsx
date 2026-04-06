import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";
import holder from "../assets/images/holder.jpg";
import flowCapture from "../assets/images/flowCapture.png";
import flowUnderstand from "../assets/images/flowUnderstand.png";
import flowAct from "../assets/images/flowAct.png";

export default function Platform() {
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
        <div className="flex flex-col items-center gap-6 md:gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white">
              Your AI that never forgets.
            </h1>
            <p className="text-center text-white text-sm md:text-base px-4">
              Built on memory, not messages. Every interaction compounds into
              intelligence.
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

        <div className="absolute bottom-0 left-6 right-6 md:left-32 md:right-32">
          <div className="rounded-t-2xl overflow-hidden h-24 md:h-32 border-t-12 border-l-12 border-r-12 border-white">
            <img src={holder} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </main>

      <section className="flex flex-col px-6 md:px-32 py-16 md:py-32 gap-12 bg-[#0C1A2B] text-white min-h-screen">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold">
          Built on a specialized language model with structured output and
          memory persistence.
        </h2>
        <div className="grid grid-cols-2 gap-4 md:gap-6 items-start">
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="rounded-2xl overflow-hidden h-48 md:h-80 lg:h-96">
              <img src={holder} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden h-48 md:h-80 lg:h-96">
              <img src={holder} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex flex-col gap-4 md:gap-6 mt-16 md:mt-24">
            <div className="rounded-2xl overflow-hidden h-48 md:h-80 lg:h-96">
              <img src={holder} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden h-48 md:h-80 lg:h-96">
              <img src={holder} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-between px-6 md:px-12 py-16 md:py-32 text-white">
        <div className="flex flex-col md:flex-row gap-8 justify-center items-start">
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
        </div>
      </section>

      <Footer />
    </div>
  );
}
