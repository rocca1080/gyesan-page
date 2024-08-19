import Images from 'next/image';
import img1 from '/public/img/intro/top.png'
import img2 from '/public/img/intro/bottom.png'

export default function intro() {
    return (
      <div className="intro_base">
        <div className='intro_images'>
          <Images className='imagebase' src = {img1} ></Images>
          <Images className='imagebase' src = {img2} ></Images>
        </div>
      </div>
    );
  }