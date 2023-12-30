import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useState,useEffect, useNavigate} from "react";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import axios from "axios";

import CardanoSmall from "./CardanoSmall";
import Cardano from "./Cardano";
import Tron from "./Tron";

import navimage from "../../public/images/dash-img.svg";
import side1 from "../../public/images/side-1.svg";
import side2 from "../../public/images/side-3.svg";
import side3 from "../../public/images/side-4.svg";
import side4 from "../../public/images/side-5.svg";
import side5 from "../../public/images/help.svg";
import side6 from "../../public/images/settingsImg.svg";
import nav1 from "../../public/images/chatt.svg";
import nav2 from "../../public/images/ringg.svg";
import nav3 from "../../public/images/exchangee.svg";
import nav4 from "../../public/images/credit-card.svg";
import logout from "../../public/images/logout.svg";
import dashboard from "../../public/images/dashboard.svg";
import Coin from "./coin";

const App = ({ user, logoutHandler, cardanoHandler, tronHandler }) => {

  const showHide = () => {
    let main = document.getElementById("smald3").style.display;

    if (main == "none") {
      document.getElementById("smalx3").style.display = "flex";
      document.getElementById("smald3").style.display = "flex";
      document.getElementById("head-nav").style.bottom = "0";
    } else {
      document.getElementById("smalx3").style.display = "none";
      document.getElementById("smald3").style.display = "none";
      document.getElementById("head-nav").style.bottom = "auto";
    }
  };

  return (
    <div>
      <div id="memebership-cont" class="w-full">
        <div
          id="left"
          style={{
            backgroundColor: "#2e2e2e",
            zIndex: "99999",
          }}
          class="top-0 w-full xl:w-44 left-0 xl:bottom-0 fixed "
        >
          <div
            id="image"
            class="xl:mt-12 p-3 xl:p-0 xl:mb-8 xl:block flex justify-between items-center"
          >
            <Link
              href="/dashboard"
              id="had-image"
              class="xl:w-72 w-64 h-10 flex justify-center items-center overflow-hidden"
            >
              <Image
                src={navimage}
                alt="Hazmick"
                style={{ marginLeft: "-110px" }}
              />
            </Link>
            <div onClick={showHide} class="block xl:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 text-white w-6"
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
          <div id="smald3" class="hidden xl:flex flex-col pt-8 pb-12">
            <Link
              href="/dashboard"
              id="sidebar-item"
              class="my-1 bg-white border-blue-600 items-center border-l-8 flex py-3"
            >
              <div class="mr-3 ml-5">
                <Image src={side1} />
              </div>
              <p class=" font-extralight">Dashboard</p>
            </Link>
            <Link
              href="/dashboard/automation"
              id="sidebar-item"
              class=" flex items-center text-white py-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-3 ml-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
              </svg>
              <p class=" font-extralight">Automation</p>
            </Link>
            <Link
              href="/dashboard/trading"
              id="sidebar-item"
              class=" flex items-center text-white py-3"
            >
              <div class="mr-3 ml-5">
                <Image src={side2} />
              </div>
              <p class=" font-extralight">Trading</p>
            </Link>
            <Link
              href="/dashboard/social"
              id="sidebar-item"
              class=" flex items-center text-white py-3"
            >
              <div class="mr-3 ml-5">
                <Image src={side3} />
              </div>
              <p class=" font-extralight">Social</p>
            </Link>
            <Link
              href="/dashboard/history"
              id="sidebar-item"
              class=" flex items-center text-white py-3"
            >
              <div class="mr-3 ml-5">
                <Image src={side4} />
              </div>
              <p class=" font-extralight">History</p>
            </Link>
          </div>
          <div
            id="smalx3"
            class="xl:bottom-0 xl:fixed w-full hidden xl:flex flex-col xl:py-8"
          >
            <Link
              href="/dashboard/settings"
              id="sidebar-item"
              class=" flex items-center text-white py-3"
            >
              <div class="mr-3 ml-5">
                <Image src={side6} />
              </div>
              <p class=" font-extralight">Setting</p>
            </Link>
            <div id="sidebar-item" class=" flex items-center text-white py-3">
              <div class="mr-3 ml-5">
                <Image src={side5} />
              </div>
              <p class=" font-extralight">Help</p>
            </div>
          </div>
        </div>
        <div id="right" class=" xl:pl-44">
          <nav
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
            }}
            class="xl:py-6 py-3 xl:mt-0 mt-16 items-center flex xl:justify-end xl:top-0 left-0 right-0 w-full fixed bg-white"
          >
            <div id="dropdown" class="xl:px-5 px-1">
              <div
                id="dropdown-btn"
                class="relative shadh p-3 rounded-full flex justify-center items-center"
              >
                <Image class="xl:w-5 xl:h-5 w-4 h-4" src={nav1} alt="chat" />
              </div>
              <div
                id="dropdown-cont"
                class="hidden rounded xl:right-72 w-80 flex-col py-3 text-black text-sm bg-white absolute"
              >
                <div class="flex justify-center items-center">
                  <div class="h-2 w-3 rounded-full bg-gray-300 ml-2 mr-2"></div>
                  <div>Select a plan to receive messages from crypto bots.</div>
                </div>
              </div>
            </div>
            <div id="dropdown" class="xl:px-5 px-1">
              <div
                id="dropdown-btn"
                class="relative shadh p-3 rounded-full flex justify-center items-center"
              >
                <Image class="xl:w-5 xl:h-5 w-4 h-4" src={nav2} alt="ring" />
              </div>
              <div
                id="dropdown-cont"
                class="hidden rounded xl:right-52 w-80 flex-col py-3 text-black text-sm bg-white absolute"
              >
                <div class="flex justify-center items-center">
                  <div class="h-2 w-3 rounded-full bg-gray-300 ml-2 mr-2"></div>
                  <div class="px-3 py-3 leading-6 ">
                    Thank you for joining Hazmick! Link your first exchange to
                    start automating your cryptocurrency portfolio.
                  </div>
                </div>
              </div>
            </div>
            <div id="dropdown" class="xl:px-5 px-1">
              <div
                id="dropdown-btn"
                class="relative shadh p-3 rounded-full flex justify-center items-center"
              >
                <Image class="w-4 h-4" src={nav3} alt="exchange" />
              </div>
              <div
                id="dropdown-cont"
                class="hidden rounded xl:right-32 w-64 flex-col py-3 text-black text-sm bg-white absolute"
              >
                <div class="flex flex-col justify-center items-center">
                  <div class="text-lg pt-2 pb-1 font-bold ">
                    <h2>Rebalances</h2>
                  </div>
                  <div class="px-3 pt-1 pb-2 leading-6 ">
                    No Scheduled Rebalances
                  </div>
                </div>
              </div>
            </div>
            <div id="dropdown" class="xl:px-5 px-1">
              <div
                id="dropdown-btn"
                class="relative shadh p-3 rounded-full flex justify-center items-center"
              >
                <Image
                  class="xl:w-6 xl:h-6 w-5 h-5"
                  src={nav4}
                  alt="credit-card"
                />
              </div>
              <div
                id="dropdown-cont"
                class="hidden rounded left-10 xl:left-auto xl:right-8 w-80 flex-col py-3 text-black text-sm bg-white absolute"
              >
                <div class="flex flex-col justify-center items-center">
                  <div class="pt-3 pb-2">
                    <p>You don't have a Hazmick Subscription</p>
                  </div>
                  <div class="py-2 inline-block px-3 w-full">
                    <button class="bg-blue-600 text-lg py-2 px-4 font-semibold text-white w-full">
                      Choose a Plan
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{ width: "1px" }}
              class="xl:mx-3 mx-1 h-5 bg-gray-300"
            ></div>
            <div id="dropdown" class="xl:px-5 px-1">
              <div
                id="dropdown-btn"
                class="relative shadh whitespace-nowrap py-3 rounded-full flex justify-center items-center pl-3 pr-2 xl:pr-10"
              >
                Hi, {user.username}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
                class="hidden rounded left-10 xl:left-auto xl:right-4 w-80 flex-col py-3 text-black text-sm bg-white absolute"
              >
                <div class="flex flex-col w-full px-3 ">
                  <div class="flex py-3 justify-between w-full">
                    <p>Total</p>
                    <p>$0.00</p>
                  </div>
                  <div
                    style={{ height: "1px" }}
                    class=" w-full bg-gray-600"
                  ></div>
                  <div
                    onClick={logoutHandler}
                    class="flex hover:bg-gray-100 cursor-pointer py-3"
                  >
                    <Image src={logout} class="h-5 w-6" alt="logout" />
                    <p class="pl-2">Logout</p>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div id="body">
            <div class="xl:pt-32 pt-40 pb-8 px-6 flex flex-col xl:flex-row flex-nowrap w-full">
              <div class="border  hidden xl:block rounded">
                <Cardano />
              </div>
              <div class="border block xl:hidden rounded">
                <CardanoSmall />
              </div>
              <div class="w-full flex flex-col justify-between pt-4 xl:pt-0 xl:pl-4">
                <div class="border rounded flex py-4 justify-center items-center">
                  <p class=" font-medium tracking-tight pr-4 py-2 xl:text-2xl text-lg">
                    ${user.plan ? user.plan.plan_fee : "0.00000"}
                  </p>
                  <p style={{ color: "rgba(46,46,46,.6)" }} class="text-sm">
                    Portfolio Total
                  </p>
                </div>
                <div class="border rounded flex py-4 justify-center items-center">
                  <p class=" font-medium tracking-tight pr-4 py-2 xl:text-2xl text-lg">
                    $0.00000
                  </p>
                  <p style={{ color: "rgba(46,46,46,.6)" }} class="text-sm">
                    Since Last 28days
                  </p>
                </div>
                <div class="border rounded flex py-4 justify-center items-center">
                  <p class=" font-medium tracking-tight pr-4 py-2 xl:text-2xl text-lg">
                    0.00%
                  </p>
                  <p style={{ color: "rgba(46,46,46,.6)" }} class="text-sm">
                    Since Last 28days
                  </p>
                </div>
              </div>
            </div>

            <div class="px-6">
            {(() => {
                if (user.coin == "cardano") {
                  return <Coin coinSpec="cardano" />;
                } else {
                  return <Coin coinSpec="tron" />;
                }
              })()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
