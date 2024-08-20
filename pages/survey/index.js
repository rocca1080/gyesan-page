import { useEffect, useState, useRef } from 'react';
import Image from "next/image";
import Script from 'next/script';

export default function survey() {
  const [survey, setSurvey] = useState([
    { title: '설문1', link: 'https://www.youtube.com/' },
    { title: '설문2', link: 'https://example.com/survey2' },
    { title: '설문3', link: 'https://example.com/survey3' },
  ]);

  return (
    <div className='survey_base'>
      <h1>설문조사</h1>
      <ul>
        {/* map 함수를 이용하여 설문조사 배열을 순회 */}
        {survey.map((survey, index) => (
          <div className='survey_box' key={index}>
            {/* 설문조사 제목과 링크를 출력 */}
            <h3>{survey.title}</h3>
            <a className="survey_link"href={survey.link} target="_blank" rel="noopener noreferrer">
              설문조사 참여하기
            </a>
          </div>
        ))}
      </ul>
    </div>
  );
};

