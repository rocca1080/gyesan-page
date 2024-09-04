import { useState } from "react";
import Image from "next/image";
import icon from "/public/img/survey/survey_icon.svg";

export default function survey() {
  const [survey, setSurvey] = useState([
    {
      title: "설문1",
      start: "2024/11/11",
      end: "2024/11/12",
      link: "https://example.com/survey1",
      id: 1,
    },
    {
      title: "설문2",
      start: "2024/--/--",
      end: "2024/--/--",
      link: "https://example.com/survey2",
      id: 2,
    },
    {
      title: "설문3",
      start: "2024/--/--",
      end: "2024/--/--",
      link: "https://example.com/survey3",
      id: 3,
    },
    {
      title: "설문4",
      start: "2024/--/--",
      end: "2024/--/--",
      link: "https://example.com/survey4",
      id: 4,
    },
    {
      title: "설문5",
      start: "2024/--/--",
      end: "2024/--/--",
      link: "https://example.com/survey4",
      id: 5,
    },
    {
      title: "설문6",
      start: "2024/--/--",
      end: "2024/--/--",
      link: "https://example.com/survey4",
      id: 6,
    },
    {
      title: "설문7",
      start: "2024/--/--",
      end: "2024/--/--",
      link: "https://example.com/survey4",
      id: 7,
    },
    {
      title: "설문8",
      start: "2024/--/--",
      end: "2024/--/--",
      link: "https://example.com/survey4",
      id: 8,
    },
    {
      title: "설문9",
      start: "2024/--/--",
      end: "2024/--/--",
      link: "https://example.com/survey4",
      id: 9,
    },
  ]);

  return (
    <div className="survey_base">
      <h1>설문조사</h1>
      <ul className="survey_box">
        {/* map 함수를 이용하여 설문조사 배열을 순회 */}
        {survey.map((surveyItem) => (
          <div className="survey_block" key={surveyItem.id}>
            {/* 설문조사 제목과 링크를 출력 */}
            <h1 className="survey_title">{surveyItem.title}</h1>
            <div className="survey_date">
              {surveyItem.start} ~ {surveyItem.end} 까지
            </div>
            <div className="survey_imgbox">
              <Image className="survey_icon" src={icon} />
            </div>

            <a
              className="survey_link"
              href={surveyItem.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              설문조사 참여하기
            </a>
          </div>
        ))}
      </ul>
    </div>
  );
}
