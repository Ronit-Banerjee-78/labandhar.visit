import React,{useContext} from 'react'
import { Carousel } from "flowbite-react"
import Slider from '../Components/Design_Components/Slider'
import Map from '../Components/Design_Components/Map'
// import All from './All'
import {Link} from "react-router-dom"
import MarkettingBanner from '../Components/Design_Components/MarkettingBanner'

import Swiper2 from '../Components/Design_Components/Swiper2'
import Testimonial from '../Components/Design_Components/Testimonial'

const HomePage = () => {
  const data=[
    {
      id:1,
      img:""
    }
  ]
  return (
   <>

{/* hero section  */}

<section className="px-3 py-5 bg-neutral-100 lg:py-10 sm:mt-40">
  <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
    <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
      <p className="text-4xl font-bold md:text-7xl text-orange-600">VISIT LABANDHAR</p>
      <p className="text-xl font-bold md:text-3xl">COME AND ENJOY OUR HOLIDAY HERE</p>
      <p className="mt-2 text-sm md:text-lg">Book Your Ticket Now</p>
     <Link to="/book" reloadDocument>
     <button className="rounded text-lg md:text-2xl bg-black text-white py-2 px-5 mt-10 hover:bg-zinc-800">Book</button>
     </Link>
    </div>
    {/* <div className="order-1 lg:order-2">
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src="https://scontent.frdp2-1.fna.fbcdn.net/v/t39.30808-6/434114821_435433942482625_1703454591344345715_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=DEvA10ubdnsQ7kNvgHrAK39&_nc_ht=scontent.frdp2-1.fna&oh=00_AYAKd0eAzENGl8Xa49k5YZOvC0E3a3WetP5qlpqW6JqSsQ&oe=66592161"
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center "
            src="https://scontent.frdp2-1.fna.fbcdn.net/v/t39.30808-6/433098784_435435175815835_7983303614266324576_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=R8Ef-kYAlEUQ7kNvgFjV1lf&_nc_ht=scontent.frdp2-1.fna&oh=00_AYBG5Em525qFS2kpMtyo_uK35rSK8_eTJFWiqF3BIPslnQ&oe=6659431D"
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src="https://scontent.frdp2-1.fna.fbcdn.net/v/t39.30808-6/428650945_420883233937696_3335729160150244874_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=RpzYnqbDXCEQ7kNvgGDviR8&_nc_ht=scontent.frdp2-1.fna&oh=00_AYC4CNXskl8oDwOt7zMi4i0mFs06WBA2_JaIId9xYVMz3g&oe=66593EC0"
            alt="gallery-photo"
          />
        </div>
      </div>
      <div className="grid gap-1">
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src="https://scontent.frdp2-1.fna.fbcdn.net/v/t39.30808-6/399293580_357310610294959_915010699775082513_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Xaku189MPZEQ7kNvgHcSJYC&_nc_ht=scontent.frdp2-1.fna&oh=00_AYBPl2t9rDZGu9h5aIbOb481SDYvQvxAINS61xhBJQ99bw&oe=66592824"
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="h-32 w-48 max-w-full rounded-lg object-cover object-center"
            src="https://scontent.frdp2-1.fna.fbcdn.net/v/t39.30808-6/335176121_131132893051129_6427830644073307886_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sKMzpqO-kpMQ7kNvgHvFwPV&_nc_ht=scontent.frdp2-1.fna&oh=00_AYBbSCOPrtmkRhikT_RtEMhkQBm5DFqO035Kr8Se4EoTcw&oe=665946CC"
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="h-32 max-w-full rounded-lg object-cover object-center "
            src="https://scontent.frdp2-1.fna.fbcdn.net/v/t39.30808-6/330001988_900706361177893_5950262085717430240_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=75prYKN-xMQQ7kNvgEMnFll&_nc_ht=scontent.frdp2-1.fna&oh=00_AYDryKJdUyi2HE5x4YIrBfjVX3sXR-CJmDA3_Sxa1bIFqQ&oe=66592D83"
            alt="gallery-photo"
          />
        </div>
      </div>
      <div className="grid gap-1">
        <div>
          <img
            className="h-32 max-w-full rounded-lg object-cover object-center"
            src="https://scontent.frdp2-1.fna.fbcdn.net/v/t39.30808-6/330868600_650703840151493_6525875182844389815_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4QM04tw9Z_MQ7kNvgHehneT&_nc_ht=scontent.frdp2-1.fna&oh=00_AYDCQos0DD8RsUiPR3qNxLtI43Ecyj3V5t0Yu3YLWr8w3g&oe=66593043"
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center "
            src="https://scontent.fccu13-1.fna.fbcdn.net/v/t39.30808-1/269794410_106452868573415_4346461559304280553_n.jpg?stp=dst-jpg_s200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=p_JVWZFgmF4Q7kNvgGne9qT&_nc_ht=scontent.fccu13-1.fna&oh=00_AYAKwHO8jkLwtRrNrOss7KpnOvnVGmjeHoWvw2KCb61EfA&oe=66527C1F"
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src="https://scontent.frdp2-1.fna.fbcdn.net/v/t39.30808-6/399293580_357310610294959_915010699775082513_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Xaku189MPZEQ7kNvgHcSJYC&_nc_ht=scontent.frdp2-1.fna&oh=00_AYBPl2t9rDZGu9h5aIbOb481SDYvQvxAINS61xhBJQ99bw&oe=66592824"
            alt="gallery-photo"
          />
        </div>
      </div>

    </div>

    </div> */}
   <div className="container mx-auto px-5 py-2  lg:pt-24">
  <div className="-m-1 flex flex-wrap md:-m-2">
    <div className="flex w-1/2 flex-wrap">
      <div className="w-1/2 p-1 md:p-2">
        <img alt="gallery" className="block h-full w-full rounded-lg hover:scale-105 hover:shadow-xl cursor-pointer object-cover object-center" src="https://nypost.com/wp-content/uploads/sites/2/2021/09/School-2-2.jpg?quality=90&strip=all" />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img alt="gallery" className="block h-full w-full rounded-lg hover:scale-105 hover:shadow-xl cursor-pointer object-cover object-center" src="https://i.pinimg.com/736x/da/08/5b/da085bd6e9418897239f27f4e450d6ed.jpg" />
      </div>
      <div className="w-full p-1 md:p-2">
        <img alt="gallery" className="block h-full w-full rounded-lg hover:scale-105 hover:shadow-xl cursor-pointer object-cover object-center" src="https://img.freepik.com/premium-photo/free-photo-real-village-forest-night-with-forest-moonlight_977950-143.jpg" />
      </div>
    </div>
    <div className="flex w-1/2 flex-wrap">
      <div className="w-full p-1 md:p-2">
        <img alt="gallery" className="block h-full w-full rounded-lg hover:scale-105 hover:shadow-xl cursor-pointer object-cover object-center" src="https://static.toiimg.com/photo/msid-86162023,width-96,height-65.cms" />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img alt="gallery" className="block h-full w-full rounded-lg hover:scale-105 hover:shadow-xl cursor-pointer object-cover object-center" src="https://i.pinimg.com/736x/da/08/5b/da085bd6e9418897239f27f4e450d6ed.jpg" />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img alt="gallery" className="block h-full w-full rounded-lg hover:scale-105 hover:shadow-xl cursor-pointer object-cover object-center" src="https://i.pinimg.com/originals/d1/d5/11/d1d5112b2eaacab46f11e4d03e3103e2.jpg" />
      </div>
    </div>
  </div>
</div>

  </div>
</section>


   {/* Carousoul react  */}
   <div className=" sm:pt-8 pt-20">

<div className="h-56 sm:m-36 sm:min-h-screen sm:h-64 xl:h-80 2xl:h-96 ">
      <Carousel className="sm:max-w-full"  indicators={false} slideInterval={2000}>
        <img src="https://www.tourmyindia.com/blog//wp-content/uploads/2014/10/indian-village-tour.jpg" alt="..." />
        <img src="https://images.herzindagi.info/image/2023/Oct/best-villages-in-the-world.jpg" alt="..." />
        <img src="https://nypost.com/wp-content/uploads/sites/2/2021/09/School-2-2.jpg?quality=90&strip=all" alt="..." />
        <img src="https://www.indiamike.com/files/images/04/61/31/village-temples.jpg" alt="..." />
      </Carousel>
      {/* <Carousel className='content-center justify-center absolute sm:mx-52 sm:my-10 h-4/5 w-3/4 opacity-100 mx-16 my-5' leftControl="." rightControl="." indicators={false} slideInterval={2000}>
        <img src="https://scontent.frdp2-1.fna.fbcdn.net/v/t39.30808-6/433136096_435434782482541_2092010124852217749_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=GA2Nqyp0pWgQ7kNvgF-SJ-K&_nc_ht=scontent.frdp2-1.fna&oh=00_AYCYkr8kTgPcQBeYrR6_dX6oesPpJgb8E6gZiqL4QET6aQ&oe=6658B960" alt="..." />
        <img src="https://scontent.frdp2-1.fna.fbcdn.net/v/t39.30808-6/428645235_420886540604032_1594642950435380976_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=DtVVF-8HNrMQ7kNvgHLdQhW&_nc_ht=scontent.frdp2-1.fna&oh=00_AYAo1JkNxNQX_AiyogLEfGo3JEBuZsFsogj617hrGgKJlw&oe=6658A62A" alt="..." />
        <img src="https://scontent.frdp2-1.fna.fbcdn.net/v/t39.30808-6/428642174_420875353938484_3669085549578105122_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=L9Kjm-t2oCEQ7kNvgGvY4Oa&_nc_ht=scontent.frdp2-1.fna&oh=00_AYB--GzDhxm6yOeYFJdCwAtZG4RU0j-Gwjb82RMoD8Bkzg&oe=6658B543" alt="..." />
        <img src="https://scontent.frdp2-1.fna.fbcdn.net/v/t39.30808-6/428611347_419373664088653_6603960531591200763_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=e5UjKqmDdKAQ7kNvgHQ8eFV&_nc_ht=scontent.frdp2-1.fna&oh=00_AYDIx1xdqnaHSauHT5fxmtSNMt0UAuhDbqNdY8u-_W-ZLQ&oe=6658AD58" alt="..." />
      </Carousel> */}
    </div>

   </div>

{/* owl carosoul */}


<Testimonial/>
<div className="mb-4 flex w-full flex-wrap p-4">
      <div className="mb-6 w-full lg:mb-0">
        <h1 className="title-font mb-2 text-5xl font-bold font-medium text-gray-900 sm:text-4xl">The Most Common</h1>
        <div className="h-1 w-52 rounded bg-indigo-500" />
        <div className="h-1 mt-2 w-44 rounded bg-gray-500" />
      </div>
    </div>
<Slider/>
 {/* Notioce or News section  */}

<section className="body-font text-gray-600">
  <div className="max-w-7x1 container mx-auto px-5 py-24">
    <div className="mb-4 flex w-full flex-wrap p-4">
      <div className="mb-6 w-full lg:mb-0">
        <h1 className="title-font mb-2 text-5xl font-bold font-medium text-gray-900 sm:text-4xl">Fair and Festivales</h1>
        <div className="h-1 w-52 rounded bg-indigo-500" />
      </div>
    </div>
    <div className="-m-4 flex flex-wrap">
      <div className="p-4 md:w-1/2 xl:w-1/3">
        <div className="rounded-lg bg-gray-100 p-6">
          <img className="xs:h-72 mb-6 h-72 w-full rounded object-cover object-center sm:h-72 md:h-64 lg:h-60 xl:h-56" src="https://etimg.etb2bimg.com/photo/104032511.cms" alt="Image Size 720x400" />
          <h3 className="title-font text-xs font-medium tracking-widest text-indigo-500">Award</h3>
          <h2 className="title-font mb-4 text-lg font-medium text-gray-900">Award Ceremony for Forest Restoration</h2>
          <p className="text-base leading-relaxed">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div className="p-4 md:w-1/2 xl:w-1/3">
        <div className="rounded-lg bg-gray-100 p-6">
          <img className="xs:h-72 mb-6 h-72 w-full rounded object-cover object-center sm:h-72 md:h-64 lg:h-60 xl:h-56" src="https://ss-i.thgim.com/public/football/indian-football/article26037804.ece/alternates/FREE_1200/TH20-Michael-Soosairaj-Red-jersey-no-6-and-his-brothers-the-other-red-jerseys-in-a-football-match-in-a-tournament-in-the-villagejpeg" alt="Image Size 720x400" />
          <h3 className="title-font text-xs font-medium tracking-widest text-indigo-500">Sport</h3>
          <h2 className="title-font mb-4 text-lg font-medium text-gray-900">FootBall Match  </h2>
              <p className="text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
         </div>
      </div>
      <div className="p-4 md:w-1/2 xl:w-1/3">
        <div className="rounded-lg bg-gray-100 p-6">
          <img className="xs:h-72 mb-6 h-72 w-full rounded object-cover object-center sm:h-72 md:h-64 lg:h-60 xl:h-56" src="https://th-thumbnailer.cdn-si-edu.com/v8O9ss5YyNuEDwhahau3luiNAOk=/fit-in/1072x0/https://tf-cmsv2-photocontest-smithsonianmag-prod-approved.s3.amazonaws.com/c30de6c9-5245-4d0e-8c14-7bb45db81ab6.jpg" alt="Image Size 720x400" />
          <h3 className="title-font text-xs font-medium tracking-widest text-indigo-500">Art</h3>
          <h2 className="title-font mb-4 text-lg font-medium text-gray-900">Art Competitaion</h2>
          <p className="text-base leading-relaxed">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
    </div>
  </div>
</section>
<MarkettingBanner/>
<Map/>

<div className="">
{/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.

  Plugins:
    - @tailwindcss/forms
*/}

<section className="bg-gray-50">
  <div className="p-8 md:p-6 lg:px-6 lg:py-6">
    <div className="mx-auto max-w-lg text-center">
      <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
      Subscribe to our Newsletter <br />
      Get all the Updates Easily
      </h2>

      <p className="hidden text-gray-500 sm:mt-4 sm:block">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae dolor officia blanditiis
        repellat in, vero, aperiam porro ipsum laboriosam consequuntur exercitationem incidunt
        tempora nisi?
      </p>
    </div>

    <div className="mx-auto mt-8 max-w-xl">
      <form action="#" className="sm:flex sm:gap-4">
        <div className="sm:flex-1">
          <label htmlFor="email" className="sr-only">Email</label>

          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
          />
        </div>

        <button
          type="submit"
          className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
        >
          <span className="text-sm font-medium"> Sign Up </span>

          <svg
            className="size-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </form>
    </div>
  </div>
</section>

</div>


   </>
  )
}

export default HomePage