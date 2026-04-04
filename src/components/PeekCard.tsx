interface PeekCardProps {
  title: string;
  description: string;
  image: React.ReactNode;
}

export default function PeekCard({ title, description, image }: PeekCardProps) {
  return (
    <div className="flex flex-col bg-[#E5E5E5] rounded-t-2xl overflow-hidden w-full h-96 md:h-120">
      <div className="flex flex-col gap-2 p-4 md:p-6 shrink-0">
        <h3 className="text-base md:text-lg font-bold text-black">{title}</h3>
        <p className="text-xs md:text-sm text-gray-500">{description}</p>
      </div>
      <div className="flex-1 overflow-hidden px-4 md:px-6 pb-0">
        <div className="w-full h-full border-t-4 border-l-4 border-r-4 border-white rounded-t-3xl overflow-hidden">
          {image}
        </div>
      </div>
    </div>
  );
}
