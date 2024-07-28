import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import "./styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 4 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const sliderImageUrl = [
  //First image url
  {
    url:
      "https://c0.wallpaperflare.com/preview/71/959/762/india-kodagu-trees-road.jpg",
      title:"Forest Area"
  },
  {
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ihkLpNog-DGl7dVulBsVl2V8i-tfXtd59NHGrOqQUA&s",
      title:"Mandir Area"
  },
  //Second image url
  {
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOFxAi4ficoOI-YSzK26STi0YafViTinQ7KZnRgck6Mg&s",
      title:"Village Area"
  },
  //Third image url
  {
    url:
      "https://c0.wallpaperflare.com/preview/71/959/762/india-kodagu-trees-road.jpg",
      title:"Forest Area"
  },

  //Fourth image url

  {
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ihkLpNog-DGl7dVulBsVl2V8i-tfXtd59NHGrOqQUA&s",
      title:"Mud Home"
  }
];
const MoreThat = () => {
  return (
    <div className="parent mt-20">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={false}
        transitionDuration={500}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            // <div className="">
            //   <img src={imageUrl.url} alt="movie" />
            // </div>
            <div className="w-fit mx-auto justify-items-center justify-center gap-y-1 gap-x-7 mt-10 mb-5">


              <div className="slider w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"  key={index}>
              <a href="#">
                <img src={imageUrl.url} alt="Product" className="h-96 w-72 object-cover rounded-t-xl" />
                <div className="px-4 py-3 w-80">
                  <p className="text-lg font-bold text-black truncate block capitalize">Forest Area</p>
                </div>
              </a>
            </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default MoreThat;
