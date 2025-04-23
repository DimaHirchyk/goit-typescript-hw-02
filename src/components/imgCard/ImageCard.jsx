export default function ImageCard({
  image: {
    alt_description,
    urls: { small },
  },
}) {
  return (
    <>
      <img src={small} alt={alt_description} />
    </>
  );
}
