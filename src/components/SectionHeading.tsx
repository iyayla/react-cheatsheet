interface ChildProps {
    name: string;
}

function SectionHeading({ name }: ChildProps) {
  return (
    <h1 className="text-2xl font-bold text-center">{name}</h1>
  )
}

export default SectionHeading
