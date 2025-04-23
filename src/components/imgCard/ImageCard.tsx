import { Image } from "../gallery/ImageGallery";

type Props = {
  image: Image;
};

export default function ImageCard({
  image: {
    alt_description,
    urls: { small },
  },
}: Props) {
  return (
    <>
      <img src={small} alt={alt_description} />
    </>
  );
}
