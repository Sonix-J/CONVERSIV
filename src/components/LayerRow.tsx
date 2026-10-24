interface LayerRowProps {
  title: string;
  description?: string;
  image: React.ReactNode;
  reverse?: boolean;
  problem?: string;
  solution?: string;
  outcome?: string;
}

export default function LayerRow({
  title,
  description,
  image,
  reverse,
  problem,
  solution,
  outcome,
}: LayerRowProps) {
  return (
    <div
      className={`flex flex-col gap-8 md:gap-12 lg:gap-16 md:min-h-96 md:items-stretch ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}
    >
      <div className="w-full md:w-1/2 h-64 md:h-auto md:min-h-80 rounded-2xl overflow-hidden shrink-0">
        {image}
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-5 md:gap-6 justify-center">
        <h3>{title}</h3>

        {description && <p className="text-base md:text-lg text-gray-400 max-w-xl">{description}</p>}

        {problem && (
          <div className="flex flex-col gap-1">
            <span className="text-base md:text-lg text-gray-600 font-semibold max-w-sm">
              Problem
            </span>
            <p className="text-sm md:text-base text-gray-400 max-w-xl">{problem}</p>
          </div>
        )}
        {solution && (
          <div className="flex flex-col gap-1">
            <span className="text-base md:text-lg text-gray-600 font-semibold max-w-sm">
              Solution
            </span>
            <p className="text-sm md:text-base text-gray-400 max-w-xl">{solution}</p>
          </div>
        )}
        {outcome && (
          <div className="flex flex-col gap-1">
            <span className="text-base md:text-lg text-gray-600 font-semibold max-w-sm">
              Outcome
            </span>
            <p className="text-sm md:text-base text-gray-400 max-w-xl">{outcome}</p>
          </div>
        )}
      </div>
    </div>
  );
}
