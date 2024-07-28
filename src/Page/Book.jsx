import React from 'react'
import { FaStar } from "react-icons/fa6";
import {Link} from "react-router-dom"

const Book = () => {
  const data = [
    {
      img: "https://www.tourmyindia.com/blog//wp-content/uploads/2014/10/indian-village-tour.jpg",
      rName: "Muddy House",
      price: "2799",
      typeRoom: "AC",
      rating: "3.5",
      distance: "500",
      d_unit: "m",
      review: "9.0",
      reviewPeop: "1200"
    },
    {
      img: "https://www.tourmyindia.com/blog//wp-content/uploads/2014/10/indian-village-tour.jpg",
      rName: "Muddy House",
      price: "2799",
      typeRoom: "AC",
      rating: "3.5",
      distance: "500",
      d_unit: "m",
      review: "9.0",
      reviewPeop: "1200"
    },
    {

      img: "https://www.tourmyindia.com/blog//wp-content/uploads/2014/10/indian-village-tour.jpg",
      rName: "Muddy House",
      price: "2799",
      typeRoom: "AC",
      rating: "3.5",
      distance: "500",
      d_unit: "m",
      review: "9.0",
      reviewPeop: "1200"
    },
    {

      img: "https://www.tourmyindia.com/blog//wp-content/uploads/2014/10/indian-village-tour.jpg",
      rName: "Muddy House",
      price: "2799",
      typeRoom: "AC",
      rating: "3.5",
      distance: "1.5",
      d_unit: "km",
      review: "8.5",
      reviewPeop: "950"
    },
    {
      img: "https://www.tourmyindia.com/blog//wp-content/uploads/2014/10/indian-village-tour.jpg",
      rName: "Muddy House",
      price: "1099",
      typeRoom: "NON_AC",
      rating: "3.5",
      distance: "1.2",
      d_unit: "km",
      review: "9.0",
      reviewPeop: "1200"
    },
  ]
  return (
    <>
      <div className="sm:w-fit sm:mx-auto sm:justify-items-center sm:justify-center sm:gap-y-5 sm:gap-x-14 sm:mt-10 sm:mb-5 sm:pt-36">

        {data.map((id) => (
          <div className="mx-auto mt-14">
            <div className="sm:w-full sm:mx-10 mx-10 sm:flex sm:gap-30 sm:rounded-lg sm:bg-gray-100 sm:shadow-lg sm:mx-5 bg-gray-300 ">
              <div className="items-center">
                <img src={id.img} className="sm:h-60 sm:w-60 w-full" alt />
              </div>
              <div className="items-center ml-3">
                <div className="w-80">
                  <h1 className="text-2xl font-bold text-gray-900">{id.rName}</h1>

                  <div className='flex gap-5 items-center'>
                    <FaStar className='text-orange-500'/>
                    <h1 className="text-2xl font-bold text-gray-900">{id.rating}</h1>
                  </div>

                  <div className="flex items-center gap-5">
                    <button className="rounded bg-green-800 p-2 text-xs font-bold uppercase text-white">{id.review}</button>
                    <div className="items-center">
                      <h4 className="font-bold text-gray-900">Very good</h4>
                      <h4 className="text-xs font-bold text-gray-900">{id.reviewPeop} review</h4>
                    </div>
                    <div className="items-center">
                      <h4 className="font-bold text-gray-900">Distance</h4>
                      <h4 className="text-xs font-bold text-gray-900">{id.distance} {id.d_unit}</h4>
                    </div>
                  </div>
                </div>
                <h1 className=" mt-4 text-lg font-bold text-gray-900">Save 30% by early booking</h1>
              </div>
              <div className="sm:item-center sm:justify-between ml-3">
                <h1 className="text-2xl font-bold text-gray-900">{id.typeRoom}</h1>
                <h1 className="mt-1 text-xl font-bold text-gray-700">{id.price}</h1>
                <div className="sm:mt-14 mb-10 ">
                  <h6 className="text-xs mb-1 font-bold text-green-900">Free Cancellation</h6>
                  <Link to="/book/bookdetail">

                  <button className="rounded rounded-r-md  p-3 text-xs font-bold uppercase book-now mb-5" id='shine'>Add to Cart</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>


        ))}


      </div>

    </>
  )
}

export default Book