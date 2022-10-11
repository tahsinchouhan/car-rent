import React from "react";
import Slider from "./Slider";

const Home = () => {
  return (
    <div className="mx-auto max-w-7xl lg:my-12 my-8">
      <h1 className="sm:text-4xl text-3xl text-center font-semibold lg:pb-8 pb-4 flex justify-center">
        BOOK A CAR IN RELIABLE WAY TO TRAVEL!
      </h1>

      <div className="flex sm:flex-row flex-col-reverse">
        <div className="sm:w-1/2 flex flex-col space-y-6 sm:p-8 p-2  items-center">
          <div className="flex flex-col space-y-2 w-full sm:w-[400px]">
            <h2 className="text-2xl bg-gray-100 shadow-sm rounded-md flex justify-center py-2 sm:w-[400px] w-full">
              A Local Use
            </h2>
            <span className="justify-between flex text-lg">
              <p className="">8 Hrs X 80 Kms.</p>
              <p className="">₹ 2800</p>
            </span>
            <span className="justify-between flex text-lg">
              <p className="">Extra Kms.</p>
              <p className="">₹ 18</p>
            </span>
            <span className="justify-between flex text-lg">
              <p className="">Extra Hrs</p>
              <p className="">₹ 200</p>
            </span>
          </div>
          <div className="flex flex-col space-y-2 w-full sm:w-[400px]">
            <h2 className="text-2xl bg-gray-100 shadow-sm rounded-md flex justify-center py-2 sm:w-[400px] w-full">
              Railway Station Transfer
            </h2>
            <span className="justify-between flex text-lg">
              <p className="">3 Hrs X 30 Kms.</p>
              <p className="">₹ 0</p>
            </span>
          </div>
          <div className="flex flex-col space-y-2 w-full sm:w-[400px]">
            <h2 className="text-2xl bg-gray-100 shadow-sm rounded-md flex justify-center py-2 sm:w-[400px] w-full">
              Airport Transfer
            </h2>
            <span className="justify-between flex text-lg">
              <p className="">4 Hrs X 50 Kms.</p>
              <p className="">₹ 2000</p>
            </span>
          </div>
          <div className="flex flex-col space-y-2 w-full sm:w-[400px]">
            <h2 className="text-2xl bg-gray-100 shadow-sm rounded-md flex justify-center py-2 sm:w-[400px] w-full">
              Outstation
            </h2>
            <span className="justify-between flex text-lg">
              <p className="">Min. 250 Kms.</p>
              <p className="">₹ 18</p>
            </span>
          </div>
          <div className="flex flex-col space-y-2 w-full sm:w-[400px]">
            <h2 className="text-2xl bg-gray-100 shadow-sm rounded-md flex justify-center py-2 sm:w-[400px] w-full">
              Driver Allowances
            </h2>
            <span className="justify-between flex text-lg">
              <p className="">Per calendar daily</p>
              <p className="">₹ 300</p>
            </span>
          </div>
        </div>
        <div className="sm:w-1/2 flex flex-col items-center justify-center">
          <Slider />
          {/* <img src="/images/car1.png" alt="" /> */}
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
        </div>
      </div>
    </div>
  );
};

export default Home;

{
  /* <h1 className="text-4xl flex justify-center py-5">Car Rent Prices</h1> */
}
