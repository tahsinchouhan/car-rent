import Head from "next/head";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
const Thankyou = () => {
  return (
    <div>
      <Head>
        <title>Showguru | Thankyou</title>
        <meta name="description" content="Website is coming Soon" />
        {/* <link rel="icon" href="/images/logo1.jpg" /> */}
      </Head>
      <section className="text-gray-600 body-font h-[75vh]">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <AiOutlineHeart className="text-9xl text-green-500" />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Thank You For Your Response We Will Contact You Soon
            </h1>
            {/* <p className="mb-4 leading-relaxed">Website is coming Soon</p> */}
            <p className="mb-4 leading-relaxed pb-4">
              For Direct Contact You Can Call or Whatsapp Us On
            </p>
            <div className="flex justify-between w-full sm:px-4 px-2 my-4">
              <button
                onClick={() => {
                  window.open("tel:7987300407");
                }}
                className="sm:w-52 w-full sm:mr-0 mr-2 bg-green-500 py-3 rounded-lg  text-white text-lg shadow-md shadow-gray-300 font-medium hover:scale-105 ease-in-out transform "
              >
                Call
              </button>
              <button
                onClick={() => {
                  window.open("https://wa.me/7987300407");
                }}
                className="sm:w-52 w-full border border-green-500 py-3 rounded-lg  text-green-500 text-lg shadow-md shadow-green-200 font-medium hover:scale-105 ease-in-out transform"
              >
                Whatsapp
              </button>
            </div>
            {/* <div className="flex justify-center">
              <Link href="/">
                <button className="w-32 text-center mx-2 flex justify-center text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Home
                </button>
              </Link>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Thankyou;
