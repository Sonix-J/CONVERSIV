interface LayerRowProps {
  title: string;
  description?: string;
  buttonText?: string;
  image: React.ReactNode;
  reverse?: boolean;
  problem?: string;
  solution?: string;
  outcome?: string;
}

export default function LayerRow({
  title,
  description,
  buttonText,
  image,
  reverse,
  problem,
  solution,
  outcome,
}: LayerRowProps) {
  return (
    <div
      className={`flex flex-col gap-8 md:min-h-96 md:items-stretch ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}
    >
      <div className="w-full md:w-1/2 h-64 md:h-auto md:min-h-80 rounded-2xl overflow-hidden shrink-0">
        {image}
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-6 justify-center">
        <h3 className="text-xl md:text-2xl font-bold">{title}</h3>

        {description && <p className="text-gray-400">{description}</p>}
        {buttonText && (
          <button className="bg-black text-white px-4 py-2 rounded-lg w-fit transition-all duration-500 hover:bg-white hover:text-black">
            {buttonText}
          </button>
        )}

        {problem && (
          <div className="flex flex-col gap-1">
            <span className="text-lg md:text-xl text-gray-600 font-bold max-w-sm">
              Problem
            </span>
            <p className="text-sm text-gray-400">{problem}</p>
          </div>
        )}
        {solution && (
          <div className="flex flex-col gap-1">
            <span className="text-lg md:text-xl text-gray-600 font-bold max-w-sm">
              Solution
            </span>
            <p className="text-sm text-gray-400">{solution}</p>
          </div>
        )}
        {outcome && (
          <div className="flex flex-col gap-1">
            <span className="text-lg md:text-xl text-gray-600 font-bold max-w-sm">
              Outcome
            </span>
            <p className="text-sm text-gray-400">{outcome}</p>
          </div>
        )}
      </div>
    </div>
  );
}
