interface LayerRowProps {
  title: string;
  description: string;
  buttonText: string;
  image: React.ReactNode;
  reverse?: boolean;
}

export default function LayerRow({
  title,
  description,
  buttonText,
  image,
  reverse,
}: LayerRowProps) {
  return (
    <div
      className={`flex flex-col gap-8 md:gap-8 md:min-h-96 md:items-stretch ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}
    >
      <div className="w-full md:w-1/2 h-64 md:h-auto rounded-2xl overflow-hidden">
        {image}
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-8 justify-center">
        <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
        <p className="text-gray-400">{description}</p>
        <button className="bg-black text-white px-4 py-2 rounded-lg w-fit transition-all duration-500 hover:bg-white hover:text-black">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
