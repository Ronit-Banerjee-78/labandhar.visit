import React, { useState } from 'react'
import MealMenu from '../Components/Design_Components/MealMenu'


const Meal = () => {
  const mealData=[
    // Non-Veg ::
    // Non-Veg thali with egg
    // Non-Veg thali with fish
    // Non-Veg thali with chicken
    // Non-Veg thali with mutton

    // Veg::
    // Plain veg thali
    // Special veg thali

    // Drink ::
    // Water
    // Soft drink

    // Sweet ::
    // Rosogolla
    // Pantua
    // Rasmalai
    // Barfi
    // Suger free sandesh
    // Misti Dahi




{
    mealId:"Non-Veg",
    cat:"thali",
    mName:"Non-Veg Thali With Egg",
    imgSrc:"https://png.pngtree.com/png-clipart/20210715/ourmid/pngtree-punjabi-dish-thali-png-image_3594373.jpg",
    price:"350"
},
{
    mealId:"Non-Veg",
    cat:"thali",
    mName:"Non-Veg Thali With Fish",
    imgSrc:"https://png.pngtree.com/png-clipart/20210715/ourmid/pngtree-punjabi-dish-thali-png-image_3594373.jpg",
    price:"350"
},
{
    mealId:"Non-Veg",
    cat:"thali",
    mName:"Non-Veg Thali With Chicken",
    imgSrc:"https://png.pngtree.com/png-clipart/20210715/ourmid/pngtree-punjabi-dish-thali-png-image_3594373.jpg",
    price:"350"
},
{
    mealId:"Non-Veg",
    cat:"thali",
    mName:"Non-Veg Thali With Mutton",
    imgSrc:"https://png.pngtree.com/png-clipart/20210715/ourmid/pngtree-punjabi-dish-thali-png-image_3594373.jpg",
    price:"350"
},
{
    mealId:"Veg",
    cat:"thali",
    mName:"Veg Thali",
    imgSrc:"https://png.pngtree.com/png-clipart/20231121/original/pngtree-indian-thali-vegan-healthy-picture-image_13273128.png",
    price:"350"
},
{
    mealId:"Veg",
    cat:"thali",
    mName:"Special Veg Thali",
    imgSrc:"https://png.pngtree.com/png-clipart/20231121/original/pngtree-indian-thali-vegan-healthy-picture-image_13273128.png",
    price:"350"
},
{
    mealId:"Desert",
    cat:"swt",
    mName:"Rosogolla",
    imgSrc:"https://png.pngtree.com/png-vector/20240117/ourmid/pngtree-bengali-rasgulla-dessert-in-clay-bowl-on-pink-png-image_11447723.png",
    price:"350"
},
{
    mealId:"Desert",
    cat:"swt",
    mName:"Pantua",
    imgSrc:"https://png.pngtree.com/png-vector/20231017/ourmid/pngtree-diwali-gulab-jamun-png-image_10201571.png",
    price:"350"
},
{
    mealId:"Desert",
    cat:"swt",
    mName:"Rasmalai",
    imgSrc:"https://png.pngtree.com/png-clipart/20220909/original/pngtree-rasmalai-png-image-png-image_8500415.png",
    price:"350"
},
{
    mealId:"Desert",
    cat:"swt",
    mName:"Misti Doi",
    imgSrc:"https://i.pinimg.com/originals/97/3e/6a/973e6a5c1e9ffc87ed2b25dbc261695c.png",
    price:"350"
},


]

const [data,setData]=useState(mealData)
const [showModal, setShowModal] = React.useState(false);

const handleBtns = (e) => {
  let word=e.target.value;

  if(word === "all"){
    setData(mealData)
  }
  else if(word === "thali") {
    const filtered = mealData.filter(item=>item.cat === "thali");
    setData(filtered)
  }
  else if(word === "swt") {
    const filtered = mealData.filter(item=>item.cat === "swt");
    setData(filtered)
  }
  else if(word === "lunch") {
    const filtered = mealData.filter(item=>item.cat === "lunch");
    setData(filtered)
  }
  else if(word === "breakfast") {
    const filtered = mealData.filter(item=>item.cat === "breakfast");
    setData(filtered)
  }
}

  return (
    <>
    <div className='sm:mt-40 ' >

    <div onClick={() => setShowModal(false)} className="sm:mt-4 mt-10 sm:mx-auto sm:w-full sm:max-w-4xl sm:bg-white bg-gray-50 sm:justify-center sm:items-center grid grid-cols-6 sm:grid-cols-6 md:grid-cols-6 sm:gap-4 gap-1">
   <a target="_blank" className='flex flex-col items-center'>
    <img alt className=" shadow-md hover:scale-105 hover:shadow-xl h-14 border-2 border-black rounded-full p-2 sm:h-20 mx-auto" src="https://r2.erweima.ai/imgcompressed/img/compressed_3d08e2dffd10fc64c83723dde4e5a600.webp" />
  <button onClick={handleBtns} value="all" className='items-center justify-center font-bold pt-1 text-center '>All</button>

  </a>
  <a target="_blank"  className='flex flex-col items-center'>
    <img alt className=" shadow-md hover:scale-105 hover:shadow-xl h-14 border-2 border-black rounded-full	p-2  sm:h-20 mx-auto" src="https://cdn-icons-png.flaticon.com/512/5417/5417133.png" />
  <button onClick={handleBtns} value="thali" className='items-center justify-center font-bold pt-1 text-center '>Thali</button>
  </a>
  <a target="_blank"  className='flex flex-col items-center'>
    <img alt className=" shadow-md hover:scale-105 hover:shadow-xl h-14 border-2 border-black rounded-full p-2 sm:h-20 mx-auto" src="https://static.vecteezy.com/system/resources/previews/013/261/991/non_2x/traditional-indian-mithai-free-png.png" />
  <button onClick={handleBtns} value="swt" className='items-center justify-center font-bold pt-1  '>Desert</button>

  </a>
  <a target="_blank"  className='flex flex-col items-center'>
    <img alt className=" shadow-md hover:scale-105 hover:shadow-xl h-14 border-2 border-black rounded-full p-2 sm:h-20 mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp4NdxqykbigNkEVfy2kzr9LKMa78LpR0o40CQlF4dQvLQs7Pst4rn94ldj45N8SHdbAE&usqp=CAU" />
  <button onClick={handleBtns} value="lunch" className='items-center justify-center font-bold pt-1 text-center '>Lunch</button>

  </a>
  <a target="_blank"  className='flex flex-col items-center'>
    <img alt className=" shadow-md hover:scale-105 hover:shadow-xl h-14 border-2 border-black rounded-full p-2 sm:h-20 mx-auto" src="https://cdn-icons-png.flaticon.com/512/9008/9008111.png" />
  <button onClick={handleBtns} value="breakfast" className='items-center justify-center font-bold pt-1 text-center '>Breakfast</button>

  </a>


</div>
<hr className='sm:w-full bg-gray-900 sm:mt-1 sm:mx-auto sm:max-w-4xl sm:invisible'/>

<div className='mx-32 z-50'>
<button type="button" onClick={() =>{ setShowModal(true)
}
} class=" float-right text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Check</button>
</div>

<div className="p-1 flex flex-wrap items-center justify-center">


        {data.map((key)=>(

<div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg">
  <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style={{transform: 'scale(1.5)', opacity: '0.1'}}>
    <rect x="159.52" y={175} width={152} height={152} rx={8} transform="rotate(-45 159.52 175)" fill="white" />
    <rect y="107.48" width={152} height={152} rx={8} transform="rotate(-45 0 107.48)" fill="white" />
  </svg>
  <div className="relative pt-10 px-10 flex items-center justify-center">
    <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style={{background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: '0.2'}}>
    </div>
    <img className="relative w-40" src={key.imgSrc} alt />
  </div>
  <div className="relative text-white px-6 pb-6 mt-6">
    <span className="block opacity-75 -mb-1">{key.mName}</span>
    <div className="flex justify-between">
      <span className="block font-semibold text-xl">{key.price}</span>
      <span className="block bg-white rounded-full cursor-pointer text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">Book</span>
    </div>
  </div>
</div>





        ))}
</div>



    </div>
    {showModal ? (
        <>


<div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 mt-10 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <div className="flex items-center justify-center">
      <h1 className="text-2xl font-semibold text-gray-900">Your Cart</h1>
    </div>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-gray-900 opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                <div className="px-4 py-6 sm:px-8 sm:py-10">
          <div className="flow-root">
            <ul className="-my-8">
              <li className="flex flex-col space-y-3  text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                <div className="shrink-0 relative">
                  <span className="absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-white text-sm font-medium text-gray-500 shadow sm:-top-2 sm:-right-2">1</span>
                  <img className="h-24 w-24 max-w-full rounded-lg object-cover" src="https://images.unsplash.com/photo-1588484628369-dd7a85bfdc38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNuZWFrZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=150&q=60" alt />
                </div>
                <div className="relative flex flex-1 flex-col justify-between">
                  <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                    <div className="pr-8 sm:pr-5">
                      <p className="text-base font-semibold text-gray-900">Nike Air Max 2019</p>
                      <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">36EU - 4US</p>
                    </div>
                    <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                      <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">$1259.00</p>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                    <button type="button" className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" className />
                      </svg>
                    </button>
                  </div>
                </div>
              </li>
              <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                <div className="shrink-0 relative">
                  <span className="absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-white text-sm font-medium text-gray-500 shadow sm:-top-2 sm:-right-2">1</span>
                  <img className="h-24 w-24 max-w-full rounded-lg object-cover" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=150&q=60" alt />
                </div>
                <div className="relative flex flex-1 flex-col justify-between">
                  <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                    <div className="pr-8 sm:pr-5">
                      <p className="text-base font-semibold text-gray-900">Nike Air Max 2019</p>
                      <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">36EU - 4US</p>
                    </div>
                    <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                      <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">$1259.00</p>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                    <button type="button" className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                      <svg className="block h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" className />
                      </svg>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* <hr class="mx-0 mt-6 mb-0 h-0 border-r-0 border-b-0 border-l-0 border-t border-solid border-gray-300" /> */}
          <div className="mt-6 space-y-3 border-t border-b py-8">
            <div className="flex items-center justify-between">
              <p className="text-gray-400">Subtotal</p>
              <p className="text-lg font-semibold text-gray-900">$2399.00</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-gray-400">Shipping</p>
              <p className="text-lg font-semibold text-gray-900">$8.00</p>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900">Total</p>
            <p className="text-2xl font-semibold text-gray-900"><span className="text-xs font-normal text-gray-400">USD</span> 2499.00</p>
          </div>

        </div>
                </div>
                {/*footer*/}
                <div className="mt-6 text-center">

<div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
        <button
          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(false)}
        >
          Close
        </button>

  <button type="button" className="group inline-flex w-full items-center justify-center rounded-md bg-orange-500 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
    Place Order
    <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  </button>
      </div>
</div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>






        </>
      ) : null}

    </>
  )
}

export default Meal