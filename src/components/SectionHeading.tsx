interface SectionHeadingProps {
  text: string;
}

export default function SectionHeading({ text }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold text-center max-w-4xl px-4">
      {text}
    </h2>
  );
}
