import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map(){
  const defaultProps = {
    center: {
      lat: 23.499048488402636,
      lng:  87.51522133969833
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly


<>
<section>
  <div className="mx-auto max-w-screen-2xl px-4 py-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div className="relative z-10 lg:py-4">
        <div className="relative h-64 sm:h-80 lg:h-full">
          {/* <img
            alt=""
            src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          /> */}
          <div  className="absolute inset-0  object-cover sm:w-full sm:h-4/5">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
        </div>
      </div>

      <div className="relative flex items-center bg-gray-100">
        <span
          className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
        ></span>

        <div className="p-8 sm:p-16 lg:p-24">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Visit The Place "LABANDHAR" <br />
            Come Here!
          </h2>

          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est
            esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam
            architecto eius quis quibusdam fugiat dicta.
          </p>

          <a
            href="#"
            className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          >
            Visit
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
</>

  );
}