import React from 'react'

const Cart = () => {
  return (
   <>
<section className="bg-white py-8 sm:mt-20 antialiased dark:bg-gray-900 md:py-16">
  <form action="#" className="mx-auto max-w-screen-xl px-4 2xl:px-0">

    <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
      <div className="min-w-0 flex-1 space-y-8">


      <div className="  w-full  sm:w-3/4 bg-white ">
  <div className="flex justify-between border-b pb-8">
    <h1 className="font-semibold text-2xl">Checkout</h1>

  </div>
  <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
    <div className="md:w-4/12 2xl:w-1/4 w-full">
      <img src="https://i.ibb.co/6gzWwSq/Rectangle-20-1.png" alt="Black Leather Purse" className="h-full object-center object-cover md:block hidden" />
      <img src="https://i.ibb.co/TTnzMTf/Rectangle-21.png" alt="Black Leather Purse" className="md:hidden w-full h-full object-center object-cover" />
    </div>
    <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
      <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">RF293</p>
      <div className="flex items-center justify-between w-full">
        <p className="text-base font-black leading-none text-gray-800">Luxe card holder</p>

      </div>
      <p className="text-xs leading-3 text-gray-600 pt-2">Height: 10 inches</p>
      <p className="text-xs leading-3 text-gray-600 py-4">Color: Black</p>
      <p className="w-96 text-xs leading-3 text-gray-600">Composition: 100% calf leather</p>
      <div className="flex items-center justify-between pt-5">
        <div className="flex itemms-center">
          <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">Add to favorites</p>
          <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
        </div>
        <p className="text-base font-black leading-none text-gray-800">,000</p>
      </div>
    </div>
  </div>
  <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
    <div className="md:w-4/12 2xl:w-1/4 w-full">
      <img src="https://i.ibb.co/6gzWwSq/Rectangle-20-1.png" alt="Black Leather Purse" className="h-full object-center object-cover md:block hidden" />
      <img src="https://i.ibb.co/TTnzMTf/Rectangle-21.png" alt="Black Leather Purse" className="md:hidden w-full h-full object-center object-cover" />
    </div>
    <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
      <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">RF293</p>
      <div className="flex items-center justify-between w-full">
        <p className="text-base font-black leading-none text-gray-800">Luxe card holder</p>

      </div>
      <p className="text-xs leading-3 text-gray-600 pt-2">Height: 10 inches</p>
      <p className="text-xs leading-3 text-gray-600 py-4">Color: Black</p>
      <p className="w-96 text-xs leading-3 text-gray-600">Composition: 100% calf leather</p>
      <div className="flex items-center justify-between pt-5">
        <div className="flex itemms-center">
          <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">Add to favorites</p>
          <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
        </div>
        <p className="text-base font-black leading-none text-gray-800">,000</p>
      </div>
    </div>
  </div>
  <a href="#" className="flex font-semibold text-indigo-600 text-sm mt-10">
    <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
      <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
    </svg>
    Continue Shopping
  </a>
</div>



        <div>
          <label htmlFor="voucher" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Enter a gift card, voucher or promotional code </label>
          <div className="flex max-w-md items-center gap-4">
            <input type="text" id="voucher" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder required />
            <button type="button" className="flex items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Apply</button>
          </div>
        </div>
      </div>
      <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
        <div className="flow-root">
          <div className="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
            <dl className="flex items-center justify-between gap-4 py-3">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Subtotal</dt>
              <dd className="text-base font-medium text-gray-900 dark:text-white">$8,094.00</dd>
            </dl>
            <dl className="flex items-center justify-between gap-4 py-3">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
              <dd className="text-base font-medium text-green-500">0</dd>
            </dl>
            <dl className="flex items-center justify-between gap-4 py-3">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Store Pickup</dt>
              <dd className="text-base font-medium text-gray-900 dark:text-white">$99</dd>
            </dl>
            <dl className="flex items-center justify-between gap-4 py-3">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
              <dd className="text-base font-medium text-gray-900 dark:text-white">$199</dd>
            </dl>
            <dl className="flex items-center justify-between gap-4 py-3">
              <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
              <dd className="text-base font-bold text-gray-900 dark:text-white">$8,392.00</dd>
            </dl>
          </div>
        </div>
        <div className="space-y-3">
          <button type="submit" className="flex w-full items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Proceed to Payment</button>
          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">One or more items in your cart require an account. <a href="#" title className="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">Sign in or create an account now.</a>.</p>
        </div>
      </div>
    </div>
  </form>
</section>


   </>
  )
}

export default Cart