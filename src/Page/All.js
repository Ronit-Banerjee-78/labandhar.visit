import React from 'react'
import {Link} from "react-router-dom"


const data=[
  {
    imgUrl:"https://banduksmithstudio.in/sites/banduksmithstudio.in/files/styles/large/public/g_%20%2815%29.JPG?itok=s4fGbQC8",
    text:"Bunglow"
  },
  {
    imgUrl:"https://i.pinimg.com/originals/75/5d/2d/755d2d94df37e7fea45d62ab3240e5b6.jpg",
    text:"Resort"
  },
  {
    imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkqhsZy-pnQ1V-nplqzxhESaoaL1C8NJYeJH0Yugd1D3TRRojiU1XQ8e52eQt4VhH29_Q&usqp=CAU",
    text:"Muddy House"
  },
  {
    imgUrl:"https://storage.googleapis.com/redbrics-prod-backend.appspot.com/webstory/item/1689321999055_Traditional_Village_House_Design.webp",
    text:"M.O.R.E"
  },
]
const All = () => {
  return (
    <>
    <div className="bg-orange-500">

<div className="m-20  py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-white mb-8"> Our Latest Stayes</h2>
    <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-4 gap-8">
      {data.map((id=>(

<Link to="/book" reloadDocument> <div className="bg-white rounded-lg shadow-lg p-2 hover:scale-105 hover:shadow-xl cursor-pointer">
        <div className="relative overflow-hidden">
          <img className="object-cover w-full h-96" src={id.imgUrl} alt="Product" />
          <div className="absolute inset-0 bg-black opacity-40" />
          <div className="absolute inset-0 flex items-end justify-start">
            <button className=" text-white py-2 px-6 rounded-full font-bold ">{id.text}</button>
          </div>
        </div>
      </div>
      </Link>
      )
      ))}
    </div>
  </div>
</div>
    </div>

    </>
  )
}

export default All