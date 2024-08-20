import { useEffect, useState, useRef } from 'react';
import Image from "next/image";
import Script from 'next/script';

export default function gallery() {
  const [images_2023, setImages_2023] = useState([]);
  const [images_2024, setImages_2024] = useState([]);
  const [selected_img, setSelectedImg] = useState("");

  const [year, setYear] = useState(images_2023);
  const [selected_year, setSelectedYear] = useState(2023);

  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();

  useEffect(() => {
    fetch('/api/import_img/gallery_2023')//api경로
      .then(response => response.json())
      .then(data => {
        setImages_2023(data);
      });
    fetch('/api/import_img/gallery_2024')//api경로
      .then(response => response.json())
      .then(data => {
        setImages_2024(data);
      });
  }, []);
  
  

    return (
      <div className="gallery_base">
        
        <button className={selected_year === 2023 ? 'gallery_btn_selected' : 'gallery_btn'} onClick={() =>{
          setYear(images_2023)
          setSelectedYear(2023)
          }}>2023</button>
        <button  className={selected_year === 2024 ? 'gallery_btn_selected' : 'gallery_btn'} onClick={() =>{
          setYear(images_2024)
          setSelectedYear
          setSelectedYear(2024)
          }}>2024</button>
        <ul className="gallery">
          {year.length === 0 ? 
            images_2023.map((image, i) =>{//처음 나올때 이미지(삼항연산로 카테고리 구현한거 시간나면 수정할 예정)
              return(
              <li key={image.name} className="img_cover">
              <Image 
              width={1000} height={1000}
              className="img" 
              src={image.src}
              alt={image.name}
              onClick={()=>{
                setSelectedImg(image)
                setModalOpen(true)
              }}
              ></Image>
              </li>)}) 
              :  
            year.map((image, i) =>{//버튼 눌렀을때 나올 이미지
              return(
              <li key={image.name} className="img_cover">
                <Image 
                width={1000} height={1000} 
                className="img" 
                src={image.src} 
                alt={image.name}
                onClick={()=>{
                  setSelectedImg(image)
                  setModalOpen(true)
                }}
                ></Image>
              </li>)})}
        </ul>
        {
        modalOpen &&
        <div className={'modal-container'} ref={modalBackground} onClick={e => {
          if (e.target === modalBackground.current) {
            setModalOpen(false);
          }
        }}>
          <div className={'modal-content'}>
            <Image 
              width={1000} height={1000} 
              className="modal-img" 
              src={selected_img.src}
              alt={selected_img.name}
            >
            </Image>
          </div>
        </div>
      }
      </div>
      
    );
  }

