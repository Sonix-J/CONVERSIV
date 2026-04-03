interface PeekCardProps {
  title: string;
  description: string;
  image: React.ReactNode;
}

export default function PeekCard({ title, description, image }: PeekCardProps) {
  return (
    <div className="flex flex-col bg-[#E5E5E5] rounded-t-2xl overflow-hidden w-full h-100">
      <div className="flex flex-col gap-2 p-6">
        <h3 className="text-lg font-bold text-black">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="w-full overflow-hidden px-12">
        <div className="w-full h-full border-t-4 border-l-4 border-r-4 border-white rounded-t-3xl overflow-hidden">
          {image}
        </div>
      </div>
    </div>
  );
}
