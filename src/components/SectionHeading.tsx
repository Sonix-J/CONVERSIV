interface SectionHeadingProps {
  text: string;
}

export default function SectionHeading({ text }: SectionHeadingProps) {
  return <h2 className="text-6xl text-white font-bold text-center max-w-4xl">{text}</h2>;
}
