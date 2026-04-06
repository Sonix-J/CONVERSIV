import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";
import holder from "../assets/images/holder.jpg";

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
              Conversiv was built from a simple observation:
            </h1>
            <p className="text-center text-white text-sm md:text-base px-4">
              Revenue is not lost in tools, it’s lost in conversations. We’re
              building a system where every interaction becomes structured
              intelligence.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-4 md:gap-6 justify-center">
          <button className="bg-white rounded px-3 py-2 text-sm md:text-base transition-all duration-500 hover:bg-black hover:text-white">
            Call to action
          </button>
          <button className="border rounded px-3 py-2 text-sm md:text-base text-white transition-all duration-500 hover:bg-white hover:text-black hover:border-white">
            Secondary
          </button>
        </div>
      </main>

      <section className="flex flex-col justify-between px-6 py-16 md:py-32 text-white">
        <div className="flex flex-col md:flex-row gap-4 justify-center items-start">
          <FeatureCard
            image={
              <img
                src={holder}
                alt="holder"
                className="w-full h-full object-cover"
              />
            }
          />
          <FeatureCard
            image={
              <img
                src={holder}
                alt="holder"
                className="w-full h-full object-cover"
              />
            }
          />
          <FeatureCard
            image={
              <img
                src={holder}
                alt="holder"
                className="w-full h-full object-cover"
              />
            }
          />
          <FeatureCard
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

      <Footer />
    </div>
  );
}
