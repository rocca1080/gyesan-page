import { useState } from 'react';
import VideoFormat from '@/components/videoFormat';



// 영상 페이지
const VideoPage2023 = () => 
    <div >
        <VideoFormat
        title="2023 계산고등학교 지역문제탐구 동아리 소개영상"
        link="../video/video1.mp4"
        description="멋진영상."
        width ={1000}></VideoFormat>

        <VideoFormat
        title="15 Sorting Algorithms in 6 Minutes"
        link="../video/Sorting_video.mp4"
        description="시카노코노코노코호시탐탐"
        width ={1000}></VideoFormat>
    </div>;

const VideoPage2024 = () => 
    <div>
    영상 없음(페이지 삭제 예정)
    </div>;


// 모둠구성 페이지
const GroupPage2023 = () => 
    <div>
    GroupPage2023 준비중
    </div>;

const GroupPage2024 = () => 
    <div>
    GroupPage2024 준비중
    </div>;


// 활동결과 페이지
const ResultPage2023 = () => 
    <div>
    ResultPage2023 준비중
    </div>;

const ResultPage2024 = () => 
    <div>
    ResultPage2024 준비중
    </div>;

export default function Home() {
  // 상위 카테고리와 하위 카테고리를 배열로 관리
    const [year, setYear] = useState(2023);
    const categories = [
        { 
        id: 'video', 
        name: '영상', 
        subCategories: [
            { id: 'video1', year: 2023, name: '2023', component: <VideoPage2023 /> },
            { id: 'video2', year: 2024,name: '2024', component: <VideoPage2024 /> },
        ],
        },
        { 
        id: 'group', 
        name: '모둠 구성', 
        subCategories: [
            { id: 'group1', year: 2023,name: '2023', component: <GroupPage2023 /> },
            { id: 'group2', year: 2024,name: '2024', component: <GroupPage2024 /> },
        ],
        },
        { 
            id: 'result', 
            name: '활동 결과', 
            subCategories: [
            { id: 'result1', year: 2023, name: '2023', component: <ResultPage2023 /> },
            { id: 'result2', year: 2024,name: '2024', component: <ResultPage2024 /> },
            ],
        },
    ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0].id); // 기본값으로 첫 번째 상위 카테고리 설정
  const [selectedSubCategory, setSelectedSubCategory] = useState(categories[0].subCategories[0].id); // 기본값으로 첫 번째 하위 카테고리 설정

  // 상위 카테고리 변경 핸들러
  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    const firstSubCategory = categories.find(cat => cat.id === categoryId).subCategories[0];
    setSelectedSubCategory(firstSubCategory.id); // 상위 카테고리 변경 시 첫 번째 하위 카테고리로 초기화
  };

  // 하위 카테고리 변경 핸들러
  const handleSubCategoryChange = (subCategoryId) => {
    setSelectedSubCategory(subCategoryId);
  };

  // 선택한 하위 카테고리에 따른 화면 렌더링
  const renderContent = () => {
    const category = categories.find(cat => cat.id === selectedCategory);
    const subCategory = category.subCategories.find(sub => sub.id === selectedSubCategory);
    return subCategory ? subCategory.component : <div>Unknown SubCategory</div>;
  };

return (
    <div className='act_bass'>
        
        <div className='act_box'>
            <div className='act_category'>
                {categories.map((category) => (
                <button className ="act_category_btn" key={category.id} onClick={() => {
                    handleCategoryChange(category.id)
                    setYear(2023)
                    } }>
                    {category.name}
                </button>
                ))}
            </div>
            <div className='act_content'>
                <h1>{year}년 활동</h1>
                {categories.find(cat => cat.id === selectedCategory).subCategories.map((subCategory) => (
                <button className={year === subCategory.year ? 'gallery_btn_selected' : 'gallery_btn'} key={subCategory.id} onClick={() => 
                    {
                    handleSubCategoryChange(subCategory.id)
                    setYear(subCategory.year)
                    }
                }>
                    {subCategory.name}
                </button>
                ))}
                <div>
                {renderContent()} {/* 하위 카테고리에 따른 화면 렌더링 */}
                </div>
            </div>
            
        </div>
    
        
    </div>
);
}