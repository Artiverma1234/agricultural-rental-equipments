'use client'

// import Footer from './footer'
// import Navbar from '@/components/Navbar'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (

    <>
      {/* <Navbar /> */}

      <div className="">
        {/* Section 1 */}
        <div className='bg-cover bg-fit  ' style={{ backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/021/368/928/large_2x/green-background-vector-and-premium-high-res-pictures-free-free-photo.jpg')` }}>
          <div className="mx-auto h-full px-4  w-full py-20 md:py-36 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
            <div className="flex flex-col items-center justify-between lg:flex-row">
              <div className=" ">
                <div className="lg:max-w-xl lg:pr-5">
                  <p className="flex text-lg uppercase text-green-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-1 inline h-10 w-10"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Empowering Farmers, Growing Communities
                  </p>
                  <h2 className="mb-6 max-w-lg text-5xl font-light leading-snug tracking-tight text-green-700 sm:text-7xl sm:leading-snug">
                    Revolutionizing
                    <span className="my-1 inline-block border-b-8 border-green-600 bg-yellow-500 px-4 font-bold text-white">
                      Agriculture
                    </span>
                  </h2>
                  <p className="text-base text-gray-700">
                    We provide a platform that connects farmers with the tools and equipment they need to succeed. From small-scale operations to large farms, we help you access the resources necessary to grow, innovate, and thrive.
                  </p>
                </div>
                <div className="mt-10 flex flex-col items-center md:flex-row">
                  <Link
                    href="/search"
                    className="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-green-700 px-6 font-medium tracking-wide text-white shadow-md transition hover:bg-green-800 focus:outline-none md:mr-4 md:mb-0 md:w-auto"
                  >
                    Get Started{" "}
                  </Link>

                </div>
              </div>
              <div className="relative hidden lg:ml-32 lg:block lg:w-1/2">
                <div className="flex">
                  <img className='rounded' src="https://i.pinimg.com/564x/71/e6/84/71e684381c3af78640b6371dfea86e0f.jpg" alt="Agricultural Equipment" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section 2 */}
        <div className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-green-700 sm:text-4xl">
                Featured Products
              </h2>
              <p className="mt-2 text-lg text-yellow-400">
                Discover our top-rated products that are popular among our customers.
              </p>
            </div>

            <div className="mt-12 grid gap-12  sm:grid-cols-2 lg:grid-cols-3">
              {/* Product 1 */}
              <div className="bg-gray-100 p-6 bg-yellow-300 rounded-lg shadow-lg">
                <img
                  className="h-48 w-full object-cover rounded-lg"
                  src="https://cdn.pixabay.com/photo/2019/10/07/19/27/corn-harvest-4533420_640.jpg"
                  alt="Product 1"
                />
                <h3 className="mt-4 text-xl font-semibold text-green-700">
                  john deere 5075e utility tractor
                </h3>
                <p className="mt-2 text-gray-600">
                  The John Deere 5075E is a versatile utility tractor, perfect for small to medium-sized farms. Equipped with a powerful 75 HP engine, it offers excellent performance in the field, handling a wide range of agricultural tasks with ease.
                </p>

              </div>

              {/* Product 2 */}
              <div className="bg-gray-100 p-6  bg-yellow-300 rounded-lg shadow-lg">
                <img
                  className="h-48 w-full object-cover rounded-lg"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-S6TM7cGZnMS8_2_3iM5g0OwPArffVS13cw&s"
                  alt="Product 2"
                />
                <h3 className="mt-4 text-xl font-semibold text-green-700">
                  kubota l2501 compact tractor
                </h3>
                <p className="mt-2 text-gray-600">
                  The Kubota L2501 is a compact and reliable tractor, designed for efficiency and ease of use. With a 24.8 HP diesel engine, it is ideal for small-scale farming, landscaping, and general maintenance work.
                </p>

              </div>

              {/* Product 3 */}
              <div className="bg-gray-100 p-6 bg-yellow-300 rounded-lg shadow-lg">
                <img
                  className="h-48 w-full object-cover rounded-lg"
                  src="https://i.pinimg.com/236x/bf/cd/85/bfcd852e961e99dbfff3a090b8f50b8e.jpg"
                  alt="Product 3"
                />
                <h3 className="mt-4 text-xl font-semibold text-green-700">
                  Case IH Farmall 55A Tractor
                </h3>
                <p className="mt-2 text-gray-600">
                  The Case IH Farmall 55A is known for its robust build and advanced technology. With a 55 HP engine and comfortable operator platform, it ensures maximum productivity on any farm, making it a favorite among farmers.
                </p>

              </div>

              {/* Add more products as needed */}
            </div>
          </div>
        </div>





        {/* Section 3 */}
        <div className='bg-cover bg-bottom  ' style={{ backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5K_NBKByuFY4fn30TNL10eB_k0QrnFcAyIg&s')` }}>

          <div className="mx-auto h-full px-4 py-12 md:py-20 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
            <div className="text-center">
              <p className="text-lg uppercase text-green-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline h-10 w-10 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                    clipRule="evenodd"
                  />
                </svg>
                Why Our Customers Love Us
              </p>
              <h2 className="mb-8 text-4xl font-light leading-snug tracking-tight text-green-600 sm:text-5xl sm:leading-snug">
                Why Choose <span className="font-bold text-yellow-400">FarmRent Hub</span>?
              </h2>
              <div className="flex flex-col items-center lg:flex-row lg:justify-around">
                <div className="flex flex-col items-center text-center mb-8 lg:mb-0 lg:w-1/3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mb-4 h-12 w-12 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm1 0v16h16V4H4z"
                    />
                  </svg>
                  <h3 className="text-2xl font-semibold mb-2 text-green-700">Transparent Pricing</h3>
                  <p className="text-gray-700">
                    Enjoy clear and straightforward pricing with no hidden fees. We believe in fair pricing that reflects the value of our services.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center mb-8 lg:mb-0 lg:w-1/3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mb-4 h-12 w-12 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <h3 className="text-2xl font-semibold mb-2 text-green-700">Reliable Equipment</h3>
                  <p className="text-gray-700">
                    All our equipment is rigorously tested and maintained to ensure you receive only the most reliable and efficient tools.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center lg:w-1/3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mb-4 h-12 w-12 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v8m-4-4h8"
                    />
                  </svg>
                  <h3 className="text-2xl font-semibold mb-2 text-green-700">Customer-Centric Support</h3>
                  <p className="text-gray-700">
                    Our dedicated support team is here to assist you every step of the way. From inquiries to troubleshooting, we’ve got you covered.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4 */}

          <div className="mx-auto h-full px-4 py-20  md:py-36 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
            <div className="flex flex-col items-center justify-between lg:flex-row-reverse">
              <div className="lg:max-w-xl lg:pl-5">
                <p className="flex text-lg uppercase text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-1 inline h-10 w-10"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 01 11-1zM12 2a1 1 011 .744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 01-1.933 0L9.854 12.8 6.5 10.866a1 1 010-1.732l3.354-1.935 1.18-4.455A1 1 01 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Comprehensive Services for Every Farmer
                </p>
                <h2 className="mb-6 max-w-lg text-4xl font-light leading-snug tracking-tight text-green-600 sm:text-6xl sm:leading-snug">
                  Discover Our
                  <span className="my-1 inline-block border-b-8 border-green-600 bg-yellow-400 px-4 font-bold text-white">
                    Offerings
                  </span>
                </h2>
                <ul className="text-lg text-gray-700 list-disc list-inside space-y-4">
                  <li><strong>Wide Range of Equipment:</strong> Access a broad selection of agricultural machinery, from tractors to specialized tools, available for rent at competitive rates.</li>
                  <li><strong>Flexible Rental Options:</strong> Choose rental durations that fit your needs, whether it's for a day, a week, or a season.</li>
                  <li><strong>Quality Assurance:</strong> All equipment is thoroughly inspected and maintained to ensure it meets the highest standards of reliability and performance.</li>
                  <li><strong>Expert Support:</strong> Get advice and assistance from our experienced team to select the right tools for your specific farming tasks.</li>
                  <li><strong>Community-Driven Platform:</strong> Connect with other farmers in your region, share resources, and learn from each other's experiences.</li>
                </ul>
              </div>
              <div className="relative hidden lg:mr-32 lg:block lg:w-1/2">
                <div className="flex">
                  <img className="rounded" src="https://i.pinimg.com/564x/20/a5/3a/20a53a9b15152e3ce80b4628e751656c.jpg" alt="Agricultural Equipment Variety" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5 */}

        <div className="bg-indigo-200 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-green-700 sm:text-4xl">
                What Our <span className="text-yellow-500">Clients</span> Say
              </h2>
              <p className="mt-2 text-lg text-gray-600">
                Hear from the people who have experienced the benefits of our services.
              </p>
            </div>

            <div className="mt-12 grid gap-12 lg:grid-cols-3 sm:grid-cols-2">
              <div className="bg-white p-8 bg-yellow-400 rounded-lg shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <p className="mt-6 text-gray-700">
                  "The equipment we rented was top-notch, and the customer service was exceptional. Highly recommended!"
                </p>
                <div className="mt-6 flex items-center space-x-4">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://en-media.thebetterindia.com/uploads/2017/04/379981_2318793735418_42217482_n.jpg"
                    alt="Client Photo"
                  />
                  <div>
                    <p className="text-lg font-semibold text-gray-900">Sachin Kale</p>
                    <p className="text-gray-600">Farmer</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 bg-yellow-400 rounded-lg shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <p className="mt-6 text-gray-700">
                  "An excellent platform with a wide range of equipment. The process was smooth and hassle-free."
                </p>
                <div className="mt-6 flex items-center space-x-4">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Lv18nUd1Myt2QlGpD1vNDojIiG2QyrAH1g&s"
                    alt="Client Photo"
                  />
                  <div>
                    <p className="text-lg font-semibold text-gray-900">Dnyaneshwar Bodke</p>
                    <p className="text-gray-600">Organic Farming</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 bg-yellow-400 rounded-lg shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <p className="mt-6 text-gray-700">
                  "Great experience! The equipment was reliable, and the support team was very responsive."
                </p>
                <div className="mt-6 flex items-center space-x-4">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7SYdrduWqRTRxM3r_n8DsqlbGSlusHuwoJQ&s"
                    alt="Client Photo"
                  />
                  <div>
                    <p className="text-lg font-semibold text-gray-900">Khema Ramji</p>
                    <p className="text-gray-600">Mixed Farming</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>

  )
}

export default Home