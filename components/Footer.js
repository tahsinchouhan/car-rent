import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-gray-800">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/">
            <a className="flex items-center justify-center mb-4 sm:mb-0">
              <img
                src="/images/newlogo-removebg.png"
                className=" h-auto w-64"
                alt="Logo"
              />
            </a>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400 justify-center">
            <li>
              <Link href="/about">
                <a className="mr-4 hover:underline md:mr-6 ">About</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className="hover:underline">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className=" text-sm text-gray-500 sm:text-center dark:text-gray-400 flex justify-center">
          © 2022{" "}
          <Link href="/">
            <div>
              <Link href="">
                <a className="hover:underline">Premium Cabs Raipur™</a>
              </Link>
              . All Rights Reserved.
            </div>
          </Link>
        </span>
      </footer>
    </div>
  );
};

export default Footer;
