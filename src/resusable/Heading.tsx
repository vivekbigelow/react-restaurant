type HeadingProps = {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
};

export default function Heading(prop: HeadingProps) {
  const Tag = `h${prop.level}` as keyof JSX.IntrinsicElements;
  return <Tag className="p-4 text-xl font-bold">{prop.children}</Tag>;
}
