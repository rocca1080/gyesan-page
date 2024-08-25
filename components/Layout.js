
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
      <div>
        <div className="area_header text_black">
            <div className="top">
              <div className="web">
              <Link className='logo_link' href="/"><img src="../img/logo.webp" className='logo'></img></Link>
              <Link  className='top_title' style={{ textDecoration: "none"}} href="/">
                <div>계산고등학교</div>
                <div>지역문제탐구동아리</div>
              </Link>
                <nav role='navigation '>
                  <ul className="tablist">
                  <li className="tab"><Link style={{ textDecoration: "none"}} href="/">홈</Link></li>
                  <li className="tab"><Link style={{ textDecoration: "none"}}  href="/intro">동아리소개</Link></li>
                  <li className="tab"><Link style={{ textDecoration: "none"}}  href="/gallery">갤러리</Link></li>
                  <li className="tab"><Link style={{ textDecoration: "none"}} href="/act">동아리활동</Link></li>
                  <li className="tab"><Link style={{ textDecoration: "none"}} href="/survey">설문조사</Link></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        <main>{children}</main>
      </div>
  );
}