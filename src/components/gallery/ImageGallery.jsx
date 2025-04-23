import ImageCard from "../imgCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ images, onClick }) {
  return (
    <>
      <ul className={css.list}>
        {images.map((image) => (
          <li key={image.id} onClick={() => onClick(image)}>
            <ImageCard image={image} />
          </li>
        ))}
      </ul>
    </>
  );
}
