import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function New() {

  const culture = {
    items: 1,
    responsive: {
      480: { items: 2 },
      320: { items: 1, }
    },
    loop: true
  };
  return (
    <div className='owl-crow'>
      <div className='owl-crow2'>
        <OwlCarousel option={culture} className='owl-theme' loop margin={10} nav>
          <div className='item'>
            <img src="/group205.png" />
          </div>
          <div className='item'>
            <img src="/group51.png" />
          </div>
          <div className='item'>
            <img src="/group51.png" />
          </div>
        </OwlCarousel >
      </div>
    </div>
  );
}


{/* <div class='item'>
<div className="vegitables-parent">
  <div className="vegitables">Vegitables</div>
  <b className="up-to-501">UP to 50% OFF</b>
</div>
</div>
<div class='item'>
<div className="fruits-parent">
  <div className="fruits">Fruits</div>
  <b className="up-to-501">UP to 50% OFF</b>
</div>
</div>
<div class='item'>
<div className="strowberry-parent">
  <div className="strowberry">Strowberry</div>
  <b className="up-to-501">UP to 50% OFF</b>
</div>
</div>
<div class='item'>
<div className="mango-parent">
  <div className="mango">Mango</div>
  <b className="up-to-501">UP to 50% OFF</b>
</div>
</div>
<div class='item'>
<div class="cherry-parent">
  <div className="cherry">Cherry</div>
  <b className="up-to-501">UP to 50% OFF</b>
</div>
</div> */}
// // <div className='landing-page'>
//       {/* <div className="daily-essentials-parent">
//         <b className="shop-from-top-container">
//           <span>{`Daily `}</span>
//           <span className="smartphones">Essentials</span>
//         </b>
//         <div className="frame-item" />
//       </div>
//       <div className="landing-page-inner3">
//         <div className="view-all-parent">
//           <div className="view-all">View All</div>
//           <img className="search-icon" alt="" src="/arrow--down-2.svg" />
//         </div>
//       </div> */}
//       {/* <div className="landing-page-child11" />
//       <div className="landing-page-child12" />
//       <div className="landing-page-child13" />
//       <div className="landing-page-child14" />
//       <div className="landing-page-child15" />
//       <div className="landing-page-child16" />
//       <img
//         className="grocery-free-hq-image-2-icon"
//         alt=""
//         src="/540189groceryfreehqimage-2@2x.png"
//       />
//       <img
//         className="groceries-hd-download-hd-png-1-icon"
//         alt=""
//         src="/416247grocerieshddownloadhdpng-1@2x.png"
//       />
//       <img className="pngegg-1-icon" alt="" src="/pngegg-1@2x.png" />
//       <img
//         className="strawberry-photo-1-icon"
//         alt=""
//         src="/234104strawberryphoto-1@2x.png"
//       />
//       <img
//         className="cherry-fruit-file-1-icon"
//         alt=""
//         src="/357637cherryfruitfile-1@2x.png"
//       />
//       <img
//         className="mango-fruit-1-icon"
//         alt=""
//         src="/221363mangofruit-1@2x.png"
//       />
//       <div className="daily-essentials1">Daily Essentials</div>
//       <b className="up-to-50">UP to 50% OFF</b> */}