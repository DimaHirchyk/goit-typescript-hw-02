import LoadMoreBtn from "./button/LoadMoreBtn";
import ErrorMessage from "./error/ErrorMessage";
import ImageGallery from "./gallery/ImageGallery";
import Loader from "./loader/Loader";
import ImageModal from "./modal/ImageModal";
import Searchbar from "./search/SearchBar";
import { fetchFotoWithTopic } from "./fetch/FetchFoto";
import { useEffect, useState } from "react";
import toast from "react-hot-toast/headless";

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
// };

function App() {
  const [fotos, setFoto] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectFoto, setSelectFoto] = useState(null);

  function openModal(photo) {
    setSelectFoto(photo);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setSelectFoto(null);
  }

  useEffect(() => {
    if (!query) return;

    async function fetchFoto() {
      try {
        setError(false);
        setLoading(true);

        const data = await fetchFotoWithTopic(query, page);
        setFoto((prev) => [...prev, ...data.results]);
      } catch (error) {
        setError(true);
        toast.error("This didn't work.");
      } finally {
        setLoading(false);
      }
    }
    fetchFoto();
  }, [query, page]);

  const handleSearch = (topic) => {
    setPage(1);
    setQuery(topic);
    setFoto([]);
  };

  return (
    <>
      <Searchbar onSearch={handleSearch} />
      {error ? (
        <ErrorMessage />
      ) : (
        <ImageGallery images={fotos} onClick={openModal} />
      )}
      {loading && <Loader loading={loading} />}

      {fotos.length !== 0 && (
        <LoadMoreBtn onClick={() => setPage(() => page + 1)} />
      )}

      <ImageModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        photo={selectFoto}
      />
    </>
  );
}

export default App;
