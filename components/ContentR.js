import Images from 'next/image';
import Link from 'next/link';

const contentR = ({title, sub, link, img}) => {
    return (
    <div>
        <div className='content_box'>
            <div className='content'>
                <div className='content_text'>
                    <div className='content_title'>{title}</div>
                    <div className='content_subtitle'>{sub}</div>
                    <div className='link_box'>
                        <Link href={`/${link}`} className='content_link'>
                            <button>
                                바로가기
                            </button>
                        </Link>
                        
                        
                    </div>
                </div>
            </div>
            <div className='cover_content_img'>
                <Images className="content_img" src={img}></Images>
            </div>
        </div>
        </div>
    
    );
};

export default contentR;
