import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from "react";

import logo from "../public/images/image0.svg";
import logo2 from "../public/images/whaite.svg";

export default function Navbar() {

  const showHide = () => {
    if(typeof window !== 'undefined') {

    let main = document.getElementById("smald").style.display;

    if (main == "none") {
      document.getElementById("smalx").style.display = "flex";
      document.getElementById("smald").style.display = "flex";
      document.getElementById("popup").style.width = "auto";
      document.getElementById("popup").style.height = "auto";
      document.getElementById("head-nav").style.bottom = "0";
    } else {
      document.getElementById("smalx").style.display = "none";
      document.getElementById("smald").style.display = "none";
      document.getElementById("popup").style.width = 0;
      document.getElementById("popup").style.height = 0;
      document.getElementById("head-nav").style.bottom = "auto";
    }
  }}


  function scrollFunction() {
    if (
      document.body.scrollTop > 60 ||
      document.documentElement.scrollTop > 60
    ) {
      document.getElementById("head-nav").style.boxShadow =
        "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.05)";
    } else {
      document.getElementById("head-nav").style.boxShadow = "none";
  }}

  if(typeof window !== 'undefined') {
  window.onscroll = function () {
    scrollFunction();
  }
  }


  return (
    <div
      id="popup"
      style={{
        backgroundColor: "rgba(26,26,26, .5)",
        zIndex: "999999",
      }}
      class="w-0 h-0 justify-center px-4 py-8 xl:py-8 xl:px-0 items-center flex-col flex fixed top-0 left-0 bottom-0 right-0"
    >
    <div id="head-nav" class="fixed bg-white left-0 right-0 w-full z-50 top-0">
      <div style={{ zIndex: 99999 }} class="">
        <div
          id="big screen"
          style={{ zIndex: 99999 }}
          class=" hidden lg:flex flex-col xl:flex-row justify-between pl-3 pr-4 lg:pr-20 lg:pl-12"
        >
          <div class="xl:py-6 py-5 xl:block flex justify-between items-center">
            <Link
              href="/"
              id="had-img"
              style={{ marginLeft: "-80px" }}
              class="xl:w-72 w-64 h-10 flex justify-center items-center overflow-hidden"
            >
              <Image src={logo} alt="Hazmick" />
            </Link>

            <div onClick={showHide} class="block xl:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 text-blue-600 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
            </div>
          </div>

          <div class="hidden xl:flex flex-col xl:flex-row items-center overflow-hidden font-medium tracking-wide">
            <div id="dropdown" class="px-5 w-auto">
              <div
                id="dropdown-btn"
                class="relative py-5 xl:py-6 hover:text-blue-700 cursor-pointer w-full xl:w-auto flex justify-center items-center"
              >
                About
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 pl-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <div
                id="dropdown-cont"
                style={{ zIndex: 999989 }}
                class="hidden rounded flex-col py-3 text-black bg-white w-64 xl:w-52 absolute h-auto"
              >
                <Link
                  class="py-3 px-3  hover:text-blue-700 underline"
                  href="/about-us"
                >
                  <span>About Us</span>
                </Link>
                <Link
                  class="py-3 px-3  hover:text-blue-700 underline"
                  href="/careers"
                >
                  <span>Careers</span>
                </Link>
                <Link
                  class="py-3 px-3  hover:text-blue-700 underline"
                  href="/press"
                >
                  <span>Press</span>
                </Link>
                <Link
                  class="py-3 px-3  hover:text-blue-700 underline"
                  href="/contact-us"
                >
                  <span>Contact</span>
                </Link>
              </div>
            </div>
            <div id="dropdown" class="px-5 w-auto">
              <div
                id="dropdown-btn"
                class="relative py-5 xl:py-6 hover:text-blue-700 cursor-pointer w-full xl:w-auto flex justify-center items-center"
              >
                Learn
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 pl-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <div
                id="dropdown-cont"
                style={{ zIndex: 999989 }}
                class="hidden rounded flex-col py-3 text-black bg-white w-64 xl:w-52 absolute h-auto"
              >
                <Link
                  class="py-3 px-3  hover:text-blue-700 underline"
                  href="/blog"
                >
                  <span>Blog</span>
                </Link>
                <Link
                  class="py-3 px-3  hover:text-blue-700 underline"
                  href="https://www.youtube.com/channel/UC1RYZVRvKBaA_Oc6kEr5MWQ"
                >
                  <span>Youtube</span>
                </Link>
                <Link
                  class="py-3 px-3  hover:text-blue-700 underline"
                  href="/about-us"
                >
                  <span>Help</span>
                </Link>
              </div>
            </div>
            <Link
              href="/features"
              class="px-5 py-5 xl:py-6 cursor-pointer hover:text-blue-700"
            >
              Plans
            </Link>
            <div id="dropdown" class="px-5 w-auto">
              <div
                id="dropdown-btn"
                class="relative py-5 xl:py-6 hover:text-blue-700 cursor-pointer w-full xl:w-auto flex justify-center items-center"
              >
                Resources
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 pl-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <div
                id="dropdown-cont"
                style={{ zIndex: 999989 }}
                class="hidden rounded flex-col py-3 text-black bg-white w-64 xl:w-52 absolute h-auto"
              >
                <a class="py-3 px-3 hover:text-blue-700 underline" href="/images/HAZMICK1.pdf" download>
                <span>Whitepaper</span>
              </a>
              </div>
            </div>
            <Link
              href="/prices"
              class="px-5 py-5 xl:py-6 cursor-pointer hover:text-blue-700"
            >
              Price Chart
            </Link>
          </div>

          <div class="hidden xl:flex flex-col xl:flex-row py-5 xl:py-6 items-center justify-between">
          <div class=" mb-8 xl:mb-0 xl:mr-6 hover:text-blue-700">
            <Link href="/auth/login">Login</Link>
          </div>
          <div>
            <Link
              class=" bg-blue-700 text-white rounded-md px-8 py-3 outline-none hover:bg-blue-800"
              href="/auth/register"
            >
              Sign Up
            </Link>
          </div>
        </div>
        </div>

        <div
          id="small-screen"
          style={{ zIndex: 99999 }}
          class=" flex lg:hidden flex-col bg-white xl:flex-row justify-between pl-4 pr-5 xl:px-20"
        >
        <div class="xl:py-6 py-5 xl:block flex justify-between items-center">
          <a
            href="/"
            id="had-img"
            class="xl:w-72 w-64 h-10 flex justify-center items-center overflow-hidden"
          >
            <Image src={logo} alt="Hazmick" style={{ marginLeft: "-120px" }} />
          </a>

          <div onClick={showHide} class="block xl:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 text-blue-600 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
          </div>
        </div>

        <div
          id="smald"
          class="hidden xl:flex flex-col xl:flex-row items-center overflow-hidden font-medium tracking-wide"
        >
          <div id="dropdown" class="px-5 w-auto h-full">
              <div
                id="dropdown-btn"
                class="relative py-5 xl:py-6 hover:text-blue-700 cursor-pointer w-full xl:w-auto flex justify-center items-center"
              >
                About
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 pl-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <div
                id="dropdown-cont"
                style={{ zIndex: 999989 }}
                class="hidden rounded flex-col py-3 text-black bg-white w-64 left-20 xl:w-52 absolute h-auto"
              >
                <Link
                  class="py-3 px-3  hover:text-blue-700 underline"
                  href="/about-us"
                >
                  <span>About Us</span>
                </Link>
                <Link
                  class="py-3 px-3  hover:text-blue-700 underline"
                  href="/careers"
                >
                  <span>Careers</span>
                </Link>
                <Link
                  class="py-3 px-3  hover:text-blue-700 underline"
                  href="/press"
                >
                  <span>Press</span>
                </Link>
                <Link
                  class="py-3 px-3  hover:text-blue-700 underline"
                  href="/contact-us"
                >
                  <span>Contact</span>
                </Link>
              </div>
            </div>
            <div id="dropdown" class="px-5 w-auto h-full">
              <div
                id="dropdown-btn"
                class="relative py-5 xl:py-6 hover:text-blue-700 cursor-pointer w-full xl:w-auto flex justify-center items-center"
              >
                Learn
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 pl-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <div
                id="dropdown-cont"
                style={{ zIndex: 999989 }}
                class="hidden rounded flex-col py-3 text-black bg-white w-64 left-20 xl:w-52 absolute h-auto"
              >
                <Link
                  class="py-3 px-3  hover:text-blue-700 underline"
                  href="/blog"
                >
                  <span>Blog</span>
                </Link>
                <Link
                  class="py-3 px-3  hover:text-blue-700 underline"
                  href="https://www.youtube.com/channel/UC1RYZVRvKBaA_Oc6kEr5MWQ"
                >
                  <span>Youtube</span>
                </Link>
                <Link
                  class="py-3 px-3  hover:text-blue-700 underline"
                  href="/about-us"
                >
                  <span>Help</span>
                </Link>
              </div>
            </div>
            <Link
              href="/features"
              class="px-5 py-5 xl:py-6 cursor-pointer hover:text-blue-700"
            >
              Plans
            </Link>
            <div id="dropdown" class="px-5 w-auto h-full">
              <div
                id="dropdown-btn"
                class="relative py-5 xl:py-6 hover:text-blue-700 cursor-pointer w-full xl:w-auto flex justify-center items-center"
              >
                Resources
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 pl-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <div
                id="dropdown-cont"
                style={{ zIndex: 999989 }}
                class="hidden rounded flex-col py-3 text-black bg-white w-64 left-20 xl:w-52 absolute h-auto"
              >
                <a class="py-3 px-3 hover:text-blue-700 underline" href="/images/HAZMICK1.pdf" download>
                <span>Whitepaper</span>
              </a>
              </div>
            </div>
            <Link
              href="/prices"
              class="px-5 py-5 xl:py-6 cursor-pointer hover:text-blue-700"
            >
              Price Chart
            </Link>
        </div>

        <div
          id="smalx"
          class="hidden xl:flex flex-col xl:flex-row pt-6 pb-16 xl:py-6 items-center justify-between"
        >
          <div class=" mb-8 mt-3 hover:text-blue-700">
            <Link onClick={showHide} href="/auth/login">
              Login
            </Link>
          </div>
          <div>
            <Link
              onClick={showHide}
              class=" bg-blue-700 text-white rounded-md px-8 py-3 outline-none hover:bg-blue-800"
              href="/auth/register"
            >
              Sign Up
            </Link>
          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
}