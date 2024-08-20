
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
      <div>
        <div className="area_header text_black">
            <div className="top">
              
              
              <div className="web">
              <Link href="/"><img src="../img/logo.webp" className='logo'></img></Link>
                <div className='webNavi'>
                  <ul className="gnb">
                  <Link style={{ textDecoration: "none"}} href="/"><li className="navi">HOME</li></Link>
                  <Link style={{ textDecoration: "none"}}  href="/intro"><li className="navi">동아리소개</li></Link>
                    <Link style={{ textDecoration: "none"}}  href="/gallery"><li className="navi">갤러리</li></Link>
                    <Link style={{ textDecoration: "none"}} href="/act"><li className="navi">동아리활동</li></Link>
                    <Link style={{ textDecoration: "none"}} href="/survey"><li className="navi">설문조사</li></Link>
                  </ul>
                </div>
              </div>
              
              
              
            </div>
            
          </div>
        <main>{children}</main>
      </div>
  );
}