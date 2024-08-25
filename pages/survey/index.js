import { useEffect, useState, useRef } from 'react';
import Image from "next/image";
import Script from 'next/script';

import icon from '/public/img/survey/survey_icon.svg'

export default function survey() {
  const [survey, setSurvey] = useState([
    { title: '설문1', start: '2024/11/11', end: '2024/11/12', link: 'https://example.com/survey1' },
    { title: '설문2', start: '2024/--/--', end: '2024/--/--', link: 'https://example.com/survey2' },
    { title: '설문3', start: '2024/--/--', end: '2024/--/--', link: 'https://example.com/survey3' },
    { title: '설문4', start: '2024/--/--', end: '2024/--/--', link: 'https://example.com/survey4' },
    { title: '설문5', start: '2024/--/--', end: '2024/--/--', link: 'https://example.com/survey4' },
    { title: '설문6', start: '2024/--/--', end: '2024/--/--', link: 'https://example.com/survey4' },
    { title: '설문7', start: '2024/--/--', end: '2024/--/--', link: 'https://example.com/survey4' },
    { title: '설문8', start: '2024/--/--', end: '2024/--/--', link: 'https://example.com/survey4' },
    { title: '설문9', start: '2024/--/--', end: '2024/--/--', link: 'https://example.com/survey4' },
  ]);

  return (
    <div className='survey_base'>
      <h1>설문조사</h1>
      <ul className='survey_box'>
        {/* map 함수를 이용하여 설문조사 배열을 순회 */}
        {survey.map((survey, index) => (
          <div className='survey_block' key={index}>
            {/* 설문조사 제목과 링크를 출력 */}
            <h1 className='survey_title'>{survey.title}</h1>
            <div className='survey_date'>{survey.start} ~ {survey.end} 까지</div>
            <div className='survey_imgbox'>
              <Image className='survey_icon' src = {icon} ></Image>
            </div>
            
            <a className='survey_link' href={survey.link} target="_blank" rel="noopener noreferrer">
              설문조사 참여하기
            </a>
          </div>
        ))}
      </ul>
    </div>
  );
};

