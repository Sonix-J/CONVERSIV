import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";
import holder from "../assets/images/holder.jpg";

export default function EarlyAccess() {
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
              Access the system before everyone else.
            </h1>
            <p className="text-center text-white text-sm md:text-base px-4">
              Turn every interaction into intelligence—before the rest of the
              market catches up.
            </p>
          </div>
        </div>

        <div
          className="flex items-center bg-white gap-2 px-2 py-2 pl-4 rounded-full w-full max-w-sm md:max-w-md"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-transparent border-none outline-none placeholder:text-gray-400 text-sm"
          />
          <button className="bg-black transition-all duration-500 hover:bg-white hover:text-black hover:border text-white text-sm font-medium px-5 py-2.5 rounded-full whitespace-nowrap">
            Get early access
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
