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
      className={`flex gap-8 min-h-96 items-stretch ${reverse ? "flex-row-reverse" : "flex-row"}`}
    >
      <div className="w-1/2 rounded-2xl overflow-hidden">{image}</div>
      <div className="w-1/2 flex flex-col gap-8 justify-center">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-gray-400">{description}</p>
        <button className="bg-black text-white px-4 py-2 rounded-lg w-fit transition-all duration-500 hover:bg-white hover:text-black">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
