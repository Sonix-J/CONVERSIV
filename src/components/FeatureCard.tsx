interface FeatureCardProps {
  title: string
  description: string
  image: React.ReactNode
}

export default function FeatureCard({ title, description, image }: FeatureCardProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full h-150 rounded-2xl overflow-hidden">
        {image}
      </div>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-xl text-gray-400">{description}</p>
    </div>
  )
}