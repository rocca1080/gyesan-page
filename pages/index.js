import { useEffect, useState } from 'react';
import Slider from '../components/Slider';
import ContentR from '@/components/ContentR';
import ContentL from '@/components/ContentL';

import img1 from '/public/img/home_slider/1.jpg'
import img2 from '/public/img/home_slider/2.jpg'
import img3 from '/public/img/home_slider/3.jpg'
import img4 from '/public/img/home_slider/4.jpg'

const Home = () => {
  const slider_img = [
    img1,
    img2,
    img3,
    img4
  ]

  return (
    <div className='base'>
      <h1 className='home_title'>안녕하세요🎉</h1>
      <Slider images={slider_img}/>

      <div className='home_content'>
        <ContentR 
        title = "동아리 소개" 
        sub = "지역문제탐구 동아리에 대해 소개합니다!"
        link={"/intro"}
        img = {img1}
        >
        </ContentR>

        <ContentL 
        title = "설문조사" 
        sub = "저희가 진행중인 설문조사이니 한번씩 참여 부탁드립니다."
        link={"/survey"}
        img = {img2}
        >
        </ContentL>
      </div>

    </div>
  );
};

export default Home;
