export default function imageLoader({
  src,
  width,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  const params = [`imwidth = ${width}`];
  return `${src}?${params}`;
}
