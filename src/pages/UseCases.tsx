import Footer from "../components/Footer";
import LayerRow from "../components/LayerRow";
// import holder from "../assets/images/holder.jpg";
// import test from "../assets/images/test.jpg";
import usecaseAgencies from "../assets/images/usecaseAgencies.png";
import usecaseRealEstate from "../assets/images/usecaseRealEstate.png";
import usecaseSaaS from "../assets/images/usecaseSaaS.png";

export default function UseCase() {
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
              Where Conversiv works best.
            </h1>
          </div>
        </div>
        <div className="flex flex-row gap-4 md:gap-6 justify-center">
          <button className="bg-white rounded px-3 py-2 text-sm md:text-base transition-all duration-500 hover:bg-black hover:text-white">
            Call to action
          </button>
          <button className="border rounded px-3 py-2 text-sm md:text-base text-white transition-all duration-500 hover:bg-white hover:text-black hover:border-white">
            Another button
          </button>
        </div>
      </main>
      <section className="flex flex-col justify-between px-6 md:px-12 py-16 md:py-32 gap-16 md:gap-32 text-white min-h-screen">
        <LayerRow 
          title="Real Estate"
          problem="Leads come in 24/7—but follow-ups are slow, inconsistent, or missed entirely."
          solution="Conversiv qualifies buyers instantly, captures intent, and routes high-value prospects in real time"
          outcome="Faster response. Higher conversions. No lost opportunities."
          image={
            <img
              src={usecaseRealEstate}
              alt="holder"
              className="w-full h-full object-cover"
            />
          }
        />
        <LayerRow 
          title="SaaS"
          problem="Inbound leads lack context, and sales teams waste time chasing low-intent prospects."
          solution="Conversiv scores, enriches, and prioritizes every lead based on real-time signals and behavior."
          outcome="Smarter pipeline. Shorter sales cycles. Better close rates."
          image={
            <img
              src={usecaseSaaS}
              alt="holder"
              className="w-full h-full object-cover"
            />
          }
          reverse
        />
        <LayerRow 
          title="Agencies"
          problem="Managing multiple clients means fragmented data, missed insights, and inconsistent follow-ups."
          solution="Conversiv centralizes conversations, tracks intent, and automates engagement across accounts."
          outcome="Scalable operations. Clear visibility. Stronger client results."
          image={
            <img
              src={usecaseAgencies}
              alt="holder"
              className="w-full h-full object-cover"
            />
          }
        />
      </section>

      <Footer />
    </div>
  );
}
