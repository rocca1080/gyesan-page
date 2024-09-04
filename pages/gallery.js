import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function Gallery() {
  const [images2023, setImages2023] = useState([]);
  const [images2024, setImages2024] = useState([]);
  const [selectedImg, setSelectedImg] = useState(null);
  const [year, setYear] = useState([]);
  const [selectedYear, setSelectedYear] = useState(2023);
  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response2023 = await fetch("/api/import_img/gallery_2023");
        const data2023 = await response2023.json();
        setImages2023(data2023);

        const response2024 = await fetch("/api/import_img/gallery_2024");
        const data2024 = await response2024.json();
        setImages2024(data2024);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    setYear(selectedYear === 2023 ? images2023 : images2024);
  }, [selectedYear, images2023, images2024]);

  const handleImageClick = (image) => {
    setSelectedImg(image);
    setModalOpen(true);
  };

  const handleModalClick = (e) => {
    if (e.target === modalBackground.current) {
      setModalOpen(false);
    }
  };

  const renderImages = () => {
    return year.map((image) => (
      <li key={image.name} className="img_cover">
        <Image
          width={1000}
          height={1000}
          className="img"
          src={image.src}
          alt={image.name}
          onClick={() => handleImageClick(image)}
        />
      </li>
    ));
  };

  return (
    <div className="gallery_base">
      <button
        className={
          selectedYear === 2023 ? "gallery_btn_selected" : "gallery_btn"
        }
        onClick={() => setSelectedYear(2023)}
      >
        2023
      </button>
      <button
        className={
          selectedYear === 2024 ? "gallery_btn_selected" : "gallery_btn"
        }
        onClick={() => setSelectedYear(2024)}
      >
        2024
      </button>
      <ul className="gallery">{renderImages()}</ul>
      {modalOpen && selectedImg && (
        <div
          className="modal-container"
          ref={modalBackground}
          onClick={handleModalClick}
        >
          <div className="modal-content">
            <Image
              width={1000}
              height={1000}
              className="modal-img"
              src={selectedImg.src}
              alt={selectedImg.name}
            />
          </div>
        </div>
      )}
    </div>
  );
}
