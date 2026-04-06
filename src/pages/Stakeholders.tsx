import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";
import holder from "../assets/images/holder.jpg";

export default function Stakeholders() {
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
              Built by operators. Backed by believers.
            </h1>
          </div>
        </div>
      </main>

      <section className="flex flex-col px-6 md:px-32 py-16 md:py-32 gap-12 bg-[#0C1A2B] text-white min-h-screen">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          Core Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {[
            { name: "Sharmaine Nadela", year: 2025 },
            { name: "Joe Ocaba", year: 2025 },
            { name: "Isa Adriatico", year: 2025 },
            { name: "Harpreet Singh", year: 2025 },
          ].map((member) => (
            <div key={member.name} className="flex flex-col gap-2">
              <div className="rounded-2xl overflow-hidden aspect-video w-full">
                <img
                  src={holder}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-between px-1">
                <p className="font-semibold">{member.name}</p>
                <p className="text-white/50">{member.year}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
