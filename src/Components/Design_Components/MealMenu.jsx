import React,{useState} from 'react'

const MealMenu = (props) => {
  const [data,setData]=useState(false)
  return (
    <>
   <div className="sm:mt-4 mt-10 sm:mx-auto sm:w-full sm:max-w-4xl sm:bg-white bg-gray-50 sm:justify-center sm:items-center grid grid-cols-5 sm:grid-cols-5 md:grid-cols-5 sm:gap-4 gap-1">
   <a target="_blank">
    <img alt className="cursor-pointer shadow-md hover:scale-105 hover:shadow-xl h-14 border-2 border-black rounded-full p-2 sm:h-20 mx-auto" src="https://r2.erweima.ai/imgcompressed/img/compressed_3d08e2dffd10fc64c83723dde4e5a600.webp" />
  <h6 className='items-center justify-center font-bold pt-1 text-center '>All</h6>

  </a>
  <a target="_blank">
    <img alt className="cursor-pointer shadow-md hover:scale-105 hover:shadow-xl h-14 border-2 border-black rounded-full	p-2  sm:h-20 mx-auto" src="https://cdn-icons-png.flaticon.com/512/5417/5417133.png" />
  <h6 className='items-center justify-center font-bold pt-1 text-center '>Thali</h6>
  </a>
  <a target="_blank">
    <img alt className="cursor-pointer shadow-md hover:scale-105 hover:shadow-xl h-14 border-2 border-black rounded-full p-2 sm:h-20 mx-auto" src="https://static.vecteezy.com/system/resources/previews/013/261/991/non_2x/traditional-indian-mithai-free-png.png" />
  <h6 className='items-center justify-center font-bold pt-1 text-center '>Desert</h6>

  </a>
  <a target="_blank">
    <img alt className="cursor-pointer shadow-md hover:scale-105 hover:shadow-xl h-14 border-2 border-black rounded-full p-2 sm:h-20 mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp4NdxqykbigNkEVfy2kzr9LKMa78LpR0o40CQlF4dQvLQs7Pst4rn94ldj45N8SHdbAE&usqp=CAU" />
  <h6 className='items-center justify-center font-bold pt-1 text-center '>Lunch</h6>

  </a>
  <a target="_blank">
    <img alt className="cursor-pointer shadow-md hover:scale-105 hover:shadow-xl h-14 border-2 border-black rounded-full p-2 sm:h-20 mx-auto" src="https://cdn-icons-png.flaticon.com/512/9008/9008111.png" />
  <h6 className='items-center justify-center font-bold pt-1 text-center '>Breakfast</h6>

  </a>

</div>
<hr className='sm:w-full bg-gray-900 sm:mt-1 sm:mx-auto sm:max-w-4xl sm:invisible'/>
    </>
  )
}

export default MealMenu