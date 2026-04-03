export default function Home() {
  return (
    <div
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
        position: "relative",
        overflow: "hidden",
      }}
      className="min-h-screen"
    >
      <main className="relative flex flex-col p-20 justify-between min-h-screen z-10">
        <div />

        <div className="flex flex-col items-center gap-8 max-w-3xl mx-auto">
          <h1 className="text-6xl font-bold text-center text-white">
            Turn every conversation into revenue.
          </h1>
          <p className="text-center" style={{ color: "#E5E5E5" }}>
            Conversiv is an AI-native system that captures, understands, and
            acts on every customer interaction so your pipeline runs itself.
          </p>
        </div>

        <div className="flex flex-row gap-6 justify-center">
          <button className="bg-white rounded px-3 py-2">
            Get early access
          </button>
          <button className="border rounded px-3 py-2 text-white">
            See how it works
          </button>
        </div>
      </main>
      <section className="grid grid-cols-2 gap-8 bg-[#0C1A2B] text-white min-h-screen">
        <div className="flex flex-col p-12 gap-8 justify-center">
          <p className="text-6xl font-bold text-left">
            Most teams lose revenue in conversations they never track.
          </p>
          <p className="text-gray-400">
            Leads go cold. Context gets lost. Follow-ups don’t happen
          </p>
          <p className="text-gray-600 font-bold">
            Your tools don’t talk to each other and your data doesn’t think.
          </p>
        </div>
        <div className="flex items-center justify-center p-12 pr-0">
          <div className="w-full rounded-l-xl overflow-hidden border border-gray-700">
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-800">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="w-full h-80 bg-gray-700" />
          </div>
        </div>
      </section>
    </div>
  );
}
