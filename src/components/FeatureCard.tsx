interface FeatureCardProps {
  title?: string;
  description?: string;
  image: React.ReactNode;
}

export default function FeatureCard({
  title,
  description,
  image,
}: FeatureCardProps) {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden">
        {image}
      </div>
      <h3>{title}</h3>
      <p className="text-base text-gray-400 max-w-md">{description}</p>
    </div>
  );
}
