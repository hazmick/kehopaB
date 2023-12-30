import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import headerImg from "../public/images/headerImg.svg";
import binance from "../public/images/binance.svg";
import bitmex from "../public/images/bitmex.svg";
import bitstamp from "../public/images/bitstamp.svg";
import bittrex from "../public/images/bittrex.svg";
import coinbase_pro from "../public/images/coinbase_pro.svg";
import ftx from "../public/images/ftx.svg";
import kraken from "../public/images/kraken.svg";
import howimage from "../public/images/image-how.svg";
import test from "../public/images/image1.svg";
import com1 from "../public/images/community1.svg";
import com2 from "../public/images/community2.svg";
import com3 from "../public/images/community3.svg";
import med1 from "../public/images/med1.webp";
import med2 from "../public/images/med2.webp";
import med3 from "../public/images/med3.webp";
import med4 from "../public/images/med4.webp";
import med5 from "../public/images/med5.svg";
import med6 from "../public/images/med6.svg";
import med7 from "../public/images/med7.svg";
import med8 from "../public/images/med8.svg";
import rel1 from "../public/images/rel1.svg";
import rel2 from "../public/images/rel2.svg";
import rel3 from "../public/images/rel3.svg";
import rel4 from "../public/images/rel4.svg";
import rel5 from "../public/images/rel5.svg";
import rel6 from "../public/images/rel6.svg";
import guh1 from "../public/images/guh1.svg";
import guh2 from "../public/images/guh2.svg";
import guh3 from "../public/images/guh3.svg";
import guh4 from "../public/images/guh4.svg";
import guh5 from "../public/images/guh5.svg";
import guh6 from "../public/images/guh6.svg";
import blog1 from "../public/images/blog1.jpg";
import blog2 from "../public/images/blog2.jpg";
import blog3 from "../public/images/blog3.jpg";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {

  function hideOrshow1() {
    if(typeof window !== 'undefined') {
    var x = document.getElementById("faq-x");
    var butplus = document.getElementById("but-plus");
    var butminus = document.getElementById("but-minus");
    if (x.style.display === "none") {
      x.style.display = "block";
      butminus.style.display = "block";
      butplus.style.display = "none";
    } else {
      x.style.display = "none";
      butplus.style.display = "block";
      butminus.style.display = "none";
    }
  }}

  function hideOrshow2() {
  if(typeof window !== 'undefined') {
    var x = document.getElementById("faq-a");
    var butplus = document.getElementById("but-plusa");
    var butminus = document.getElementById("but-minusa");
    if (x.style.display === "none") {
      x.style.display = "block";
      butminus.style.display = "block";
      butplus.style.display = "none";
    } else {
      x.style.display = "none";
      butplus.style.display = "block";
      butminus.style.display = "none";
    }
  }}

  function hideOrshow3() {
    if(typeof window !== 'undefined') {
    var x = document.getElementById("faq-b");
    var butplus = document.getElementById("but-plusb");
    var butminus = document.getElementById("but-minusb");
    if (x.style.display === "none") {
      x.style.display = "block";
      butminus.style.display = "block";
      butplus.style.display = "none";
    } else {
      x.style.display = "none";
      butplus.style.display = "block";
      butminus.style.display = "none";
    }
  }}

  function hideOrshow4() {
    if(typeof window !== 'undefined') {
    var x = document.getElementById("faq-c");
    var butplus = document.getElementById("but-plusc");
    var butminus = document.getElementById("but-minusc");
    if (x.style.display === "none") {
      x.style.display = "block";
      butminus.style.display = "block";
      butplus.style.display = "none";
    } else {
      x.style.display = "none";
      butplus.style.display = "block";
      butminus.style.display = "none";
    }}
  }

  function hideOrshow5() {
    if(typeof window !== 'undefined') {
    var x = document.getElementById("faq-d");
    var butplus = document.getElementById("but-plusd");
    var butminus = document.getElementById("but-minusd");
    if (x.style.display === "none") {
      x.style.display = "block";
      butminus.style.display = "block";
      butplus.style.display = "none";
    } else {
      x.style.display = "none";
      butplus.style.display = "block";
      butminus.style.display = "none";
    }}
  }
  function hideOrshow6() {
    if(typeof window !== 'undefined') {
    var x = document.getElementById("faq--h1");
    var butplus = document.getElementById("but-plusdx");
    var butminus = document.getElementById("but-minusdx");
    if (x.style.display === "none") {
      x.style.display = "block";
      butminus.style.display = "block";
      butplus.style.display = "none";
    } else {
      x.style.display = "none";
      butplus.style.display = "block";
      butminus.style.display = "none";
    }
  }}

  return (
    <>
      <Head>
        <title>HomePage | Hazmick</title>
        <meta name="description" content="Hazmick - The World's Most Popular Way to Buy, Hold, Invest, Mine & trade Crypto. Copy traders, manage all your exchange accounts, use market-making and exchange/market arbitrage and simulate or backtest your trading. Trading, Portfolio, Arbitrage, Signals, Bots - everything you need to easily manage crypto assets, within one interface." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main>
      <header
        id="header"
        class="flex flex-col lg:flex-row h-full items-center px-6 lg:px-20 my-24 lg:my-32"
      >
        <div id="words" class="lg:w-1/2 lg:px-4 order-2 lg:order1 ">
          <div
            class="text-2xl lg:text-5xl font-bold py-6"
            style={{ lineHeight: "1.32em" }}
          >
            <h2>The World's Most Popular Way to Buy, Hold, Invest, Mine & Trade Crypto</h2>
          </div>
          <div class=" text-lg py-2">
            <p>
              Copy traders and Miners, manage all your exchange accounts, use market-making
              and exchange/market arbitrage and simulate or backtest your
              trading.
            </p>
          </div>
          <div class=" text-lg py-2">
            <p>
              Invest, Mine, Trading, Portfolio, Arbitrage, Signals, Bots - everything you need
              to easily manage crypto assets, within one interface.
            </p>
          </div>

          <div class="pt-8">
            <Link
              href="/dashboard"
              class="px-8 inline-block py-5 bg-blue-600 text-white rounded-sm"
            >
              Get Started
            </Link>
          </div>
        </div>

        <div
          id="picture"
          class="w-full py-3 max-w-md lg:max-w-full lg:py-0 lg:w-1/2 lg:px-8 order-1 lg:order-2"
        >
          <div>
            <Image class="h-full w-full" src={headerImg} alt="Looks like something related to crypto" />
          </div>
        </div>
      </header>

      <div id="our-features" class="lg:mb-16 my-8 lg:mt-8">
        <div id="info">
          <div>
            <h2 class="uppercase text-center text-xl font-bold text-blue-700 tracking-widest">
              Our Features
            </h2>
          </div>
          <div>
            <p class="text-center font-bold tracking-wider py-3 lg:py-4 text-xl lg:text-4xl">
              Why Choose Hazmick?
            </p>
          </div>
        </div>

        <div
          id="6-features"
          class="flex w-full flex-wrap lg:px-20 pt-6 text-center"
        >
          <div id="feat-1" class="lg:w-1/3 py-6 px-4">
            <div class="flex justify-center">
              <div
                style={{ backgroundColor: "#ecf6ff" }}
                class="w-16 h-16 my-2 rounded-full flex justify-center items-center"
              >
                <Image
                  class=" w-8 h-8"
                  src={rel1}
                  alt="Just some random testing "
                />
              </div>
            </div>
            <div class="py-2 text-center text-2xl lg:text-3xl font-bold tracking-wider">
              <h2>Connect Accounts</h2>
            </div>
            <div class="py-2 font-light lg:text-lg tracking-wide">
              <p>
                Hazmick is the one place you can connect all your wallets and
                exchanges. Manage your entire portfolio through a single portal
                and monitor the market in real-time.
              </p>
            </div>
          </div>
          <div id="feat-1" class="lg:w-1/3 py-6 px-4">
            <div class="flex justify-center">
              <div
                style={{ backgroundColor: "#ecfdf7" }}
                class="w-16 h-16 my-2 rounded-full flex justify-center items-center"
              >
                <Image
                  class=" w-8 h-8"
                  src={rel2}
                  alt="Just some random testing "
                />
              </div>
            </div>
            <div class="py-2 text-center text-2xl lg:text-3xl font-bold tracking-wider">
              <h2>Backtest Strategies</h2>
            </div>
            <div class="py-2 font-light lg:text-lg tracking-wide">
              <p>
                Study trading strategies with our advanced portfolio
                backtesting. Use our comprehensive set of precise market data to
                construct the most accurate strategy profiles in the market.
              </p>
            </div>
          </div>
          <div id="feat-1" class="lg:w-1/3 py-6 px-4">
            <div class="flex justify-center">
              <div
                style={{ backgroundColor: "#feecee" }}
                class="w-16 h-16 my-2 rounded-full flex justify-center items-center"
              >
                <Image
                  class=" w-8 h-8"
                  src={rel3}
                  alt="Just some random testing "
                />
              </div>
            </div>
            <div class="py-2 text-center text-2xl lg:text-3xl font-bold tracking-wider">
              <h2>Automate Trading</h2>
            </div>
            <div class="py-2 font-light lg:text-lg tracking-wide">
              <p>
                Optimize your portfolio by automating a strategy that has been
                trusted by institutions for decades to reduce risk and improve
                performance.
              </p>
            </div>
          </div>
          <div id="feat-1" class="lg:w-1/3 py-6 px-4">
            <div class="flex justify-center">
              <div
                style={{ backgroundColor: "#ecf6ff" }}
                class="w-16 h-16 my-2 rounded-full flex justify-center items-center"
              >
                <Image
                  class=" w-8 h-8"
                  src={rel4}
                  alt="Just some random testing "
                />
              </div>
            </div>
            <div class="py-2 text-center text-2xl lg:text-3xl font-bold tracking-wider">
              <h2>Copy Top Traders</h2>
            </div>
            <div class="py-2 font-light lg:text-lg tracking-wide">
              <p>
                Copy strategies from the world’s best traders or imitate the
                portfolios of investment funds like Coinbase Ventures,
                Blockchain Capital, or Binance Labs.
              </p>
            </div>
          </div>
          <div id="feat-1" class="lg:w-1/3 py-6 px-4">
            <div class="flex justify-center">
              <div
                style={{ backgroundColor: "#ecfdf7" }}
                class="w-16 h-16 my-2 rounded-full flex justify-center items-center"
              >
                <Image
                  class=" w-8 h-8"
                  src={rel5}
                  alt="Just some random testing "
                />
              </div>
            </div>
            <div class="py-2 text-center text-2xl lg:text-3xl font-bold tracking-wider">
              <h2>Track Performance</h2>
            </div>
            <div class="py-2 font-light lg:text-lg tracking-wide">
              <p>
                No matter your experience with cryptocurrency, Hazmick can help
                you build a portfolio strategy, track performance, and monitor
                the market.
              </p>
            </div>
          </div>
          <div id="feat-1" class="lg:w-1/3 py-6 px-4">
            <div class="flex justify-center">
              <div
                style={{ backgroundColor: "#feecee" }}
                class="w-16 h-16 my-2 rounded-full flex justify-center items-center"
              >
                <Image
                  class=" w-8 h-8"
                  src={rel6}
                  alt="Just some random testing "
                />
              </div>
            </div>
            <div class="py-2 text-center text-2xl lg:text-3xl font-bold tracking-wider">
              <h2>Manage Portfolios</h2>
            </div>
            <div class="py-2 font-light lg:text-lg tracking-wide">
              <p>
                Manage all of your crypto portfolios in one place, create
                dynamic indexes that track the DeFi market or other asset types,
                and set portfolio stop-losses.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="next-body" class="mt-8">
        <div class="lg:px-20 px-6 pt-8 pb-8">
          <div class="text-xl font-bold flex items-center">
            <div
              style={{ height: "2px", backgroundColor: "#2e2e2e" }}
              class="lg:w-10 w-5 mr-3"
            >
              &nbsp;
            </div>
            <p>Hazmick – manage your Сryptocurrencies Cross-Exchange</p>
          </div>
          <div class="lg:py-4 py-5  lg:text-xl">
            <p class="font-light pl-6 lg:pl-12">
              Automated trading tools are supported on 23 major cryptocurrency
              exchanges
            </p>
          </div>
          <div class="flex justify-center items-center py-10">
            <div class="flex w-full flex-wrap justify-center items-center max-w-3xl">
              <div
                style={{ borderColor: "#cedce5", minHeight: "136px" }}
                class="w-1/3 shad justify-center items-center flex border-r border-b hover:bg-blue-50 cursor-pointer px-3 hover:shadow-xl"
              >
                <Image style={{ height: "100%" }} src={coinbase_pro} alt="" />
              </div>
              <div
                style={{ borderColor: "#cedce5", minHeight: "136px" }}
                class="w-1/3 justify-center items-center flex border-r border-b hover:bg-blue-50 cursor-pointer px-3 hover:shadow-xl"
              >
                <Image style={{ height: "100%" }} src={bitmex} alt="" />
              </div>
              <div
                style={{ borderColor: "#cedce5", minHeight: "136px" }}
                class="w-1/3 justify-center items-center flex border-b hover:bg-blue-50 cursor-pointer px-3 hover:shadow-xl"
              >
                <Image style={{ height: "100%" }} src={binance} alt="" />
              </div>
              <div
                style={{ borderColor: "#cedce5", minHeight: "136px" }}
                class="w-1/3 justify-center items-center flex border-r border-b hover:bg-blue-50 cursor-pointer px-3 hover:shadow-xl"
              >
                <Image style={{ height: "100%" }} src={bitstamp} alt="" />
              </div>
              <div
                style={{ borderColor: "#cedce5", minHeight: "136px" }}
                class="w-1/3 justify-center items-center flex border-r border-b hover:bg-blue-50 cursor-pointer px-3 hover:shadow-xl"
              >
                <Image style={{ height: "100%" }} src={ftx} alt="" />
              </div>
              <div
                style={{ borderColor: "#cedce5", minHeight: "136px" }}
                class="w-1/3 justify-center items-center flex border-b hover:bg-blue-50 cursor-pointer px-3 hover:shadow-xl"
              >
                <Image style={{ height: "100%" }} src={bittrex} alt="" />
              </div>
              <div
                style={{ borderColor: "#cedce5", minHeight: "136px" }}
                class="w-1/3 justify-center items-center flex border-r border-l hover:bg-blue-50 cursor-pointer px-3 hover:shadow-xl"
              >
                <Image style={{ height: "100%" }} src={kraken} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="other-feats" class="py-8 lg:px-20">
        <div id="info">
          <div>
            <h2 class="uppercase text-center text-xl font-bold text-blue-700 tracking-widest">
              Extra Features
            </h2>
          </div>
          <div>
            <p class="text-center font-bold tracking-wider py-3 lg:py-4 text-xl lg:text-4xl">
              Addition Hazmick features
            </p>
          </div>
        </div>

        <div class="lg:my-16 flex flex-wrap">
          <div class="flex lg:w-1/3 px-3 py-10">
            <Image
              src={guh1}
              alt="just something to fill up"
              class="w-24"
            />
            <div>
              <div class="lg:text-2xl text-xl font-extrabold">
                <h2>Long and short strategies</h2>
              </div>
              <div class="py-2 font-medium">
                <p>
                  Take advantage of both bull and bear markets using long and
                  short bots.
                </p>
              </div>
            </div>
          </div>

          <div class="flex lg:w-1/3 px-3 py-10">
            <Image
              src={guh2}
              alt="just something to fill up"
              class="w-24"
            />
            <div>
              <div class="lg:text-2xl text-xl font-extrabold">
                <h2>Take profit targets</h2>
              </div>
              <div class="py-2 font-medium">
                <p>
                  Set your target profit and let the bot track the market to
                  close the deal at the right moment.
                </p>
              </div>
            </div>
          </div>
          <div class="flex lg:w-1/3 px-3 py-10">
            <Image
              src={guh3}
              alt="just something to fill up"
              class="w-24"
            />
            <div>
              <div class="lg:text-2xl text-xl font-extrabold">
                <h2>Technical indicators</h2>
              </div>
              <div class="py-2 font-medium">
                <p>
                  Set the bot to use Bollinger, Day or Volume filters to open
                  the trade at the right time.
                </p>
              </div>
            </div>
          </div>
          <div class="flex lg:w-1/3 px-3 py-10">
            <Image
              src={guh4}
              alt="just something to fill up"
              class="w-24"
            />
            <div>
              <div class="lg:text-2xl text-xl font-extrabold">
                <h2>Large volume trading</h2>
              </div>
              <div class="py-2 font-medium">
                <p>
                  Buy or sell large volumes of crypto without causing the price
                  to spike or drop.
                </p>
              </div>
            </div>
          </div>
          <div class="flex lg:w-1/3 px-3 py-10">
            <Image
              src={guh5}
              alt="just something to fill up"
              class="w-24"
            />
            <div>
              <div class="lg:text-2xl text-xl font-extrabold">
                <h2>Bot templates</h2>
              </div>
              <div class="py-2 font-medium">
                <p>
                  Launch a trading bot in just 5 minutes using pre-set templates
                  or build your own customized strategy from scratch.
                </p>
              </div>
            </div>
          </div>
          <div class="flex lg:w-1/3 px-3 py-10">
            <Image
              src={guh6}
              alt="just something to fill up"
              class="w-24"
            />
            <div>
              <div class="lg:text-2xl text-xl font-extrabold">
                <h2>Real-time tracking</h2>
              </div>
              <div class="py-2 font-medium">
                <p>
                  Track bot progress from anywhere with transparent analytics
                  and telegram notifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="how-it-works" class="my-8">
        <div id="info">
          <div>
            <h2 class="uppercase text-center text-xl font-bold text-blue-700 tracking-widest">
              How it Works
            </h2>
          </div>
          <div>
            <p class="text-center font-bold tracking-wider py-3 lg:py-4 text-xl lg:text-4xl">
              Get Started in 3 Simple Steps
            </p>
          </div>
        </div>

        <div class="flex flex-col lg:flex-row w-full items-start lg:px-20 pt-10">
          <div id="image" class="lg:w-1/2 w-full py-3 lg:py-0">
            <Image src={howimage} alt="side by side" />
          </div>
          <div id="not-image" class="lg:w-1/2 px-4 py-3 lg:py-0 lg:px-12">
            <div id="how-one">
              <div class="flex py-3 lg:py-6">
                <div class="lg:text-5xl text-4xl font-bold pr-4 lg:pr-12">
                  <p>1.</p>
                </div>
                <div>
                  <div class="text-2xl font-semibold">
                    <p>Connect</p>
                  </div>
                  <div class="py-4 opacity-70 tracking-wide">
                    <p>
                      Link all your exchange accounts and wallets to Hazmick. We
                      will automatically collect information on the assets you
                      own and make it easy to manage your accounts in one place.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="how-two">
              <div class="flex py-3 lg:py-6">
                <div class="lg:text-5xl text-4xl font-bold pr-4 lg:pr-12">
                  <p>2.</p>
                </div>
                <div>
                  <div class="text-2xl font-semibold">
                    <p>Automate</p>
                  </div>
                  <div class="py-4 opacity-70 tracking-wide">
                    <p>
                      Select an automated strategy that can help reduce risk and
                      increase returns. Whether you follow a social leader or
                      decide to implement your own strategy, Hazmick is here to
                      help.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="how-three">
              <div class="flex py-3 lg:py-6">
                <div class="lg:text-5xl text-4xl font-bold pr-4 lg:pr-12">
                  <p>3.</p>
                </div>
                <div>
                  <div class="text-2xl font-semibold">
                    <p>Track</p>
                  </div>
                  <div class="py-4 opacity-70 tracking-wide">
                    <p>
                      Track your cryptocurrency for the long-term. Hazmick is
                      the easiest way to stay up-to-date on your portfolio
                      performance and monitor your assets over time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="blog" class="lg:px-20 px-6 pt-8 lg:pt-16">
        <div class="flex flex-col lg:flex-row items-center justify-between">
          <div class="lg:text-4xl text-2xl tracking-wide font-bold">
            <h2>Follow the Hazmick Blog</h2>
          </div>
          <Link
            href="/blog"
            class="flex text-blue-700 py-3 lg:py-0 lg:text-lg font-bold items-center tracking-wide"
          >
            <p>Go to blog</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 ml-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
        <div class="text-lg max-w-4xl font-semibold pt-6 pb-4">
          <p>
            We constantly review our tools and popular trading strategies.
            Follow our blog to keep up-to-date with the latest news.
          </p>
        </div>

        <div class="flex justify-center items-center flex-col lg:flex-row flex-auto w-full flex-wrap py-8">
          <div class="lg:w-1/3 lg:max-w-max max-w-md p-3">
            <div class="shadow-md w-full m-0 rounded-xl">
              <Image
                src={blog1}
                class="rounded-t-xl"
                style={{ width: "100%" }}
                alt="something about blogs"
              />
              <div class=" p-6">
                <Link
                  href="/blog/0"
                  class="font-bold pb-2 cursor-pointer inline-block hover:text-blue-600"
                >
                  How to Day Trade Cryptocurrency: Best Strategy for Beginners
                </Link>
                <p class="p-3 mt-2 font-bold bg-blue-50 rounded-full text-blue-600 tracking-wider inline-block text-xs ">
                  Cryptocurrency
                </p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 lg:max-w-max max-w-md p-3">
            <div class="shadow-md w-full m-0 rounded-xl">
              <Image
                src={blog2}
                class="rounded-t-xl"
                style={{ width: "100%" }}
                alt="something about blogs"
              />
              <div class=" p-6">
                <Link
                  href="/blog/1"
                  class="font-bold pb-2 cursor-pointer inline-block hover:text-blue-600"
                >
                  Crypto Trading Bot – 2020: Top 16 Bitcoin Trading Bots
                  Reviewed
                </Link>
                <p class="p-3 mt-2 font-bold bg-blue-50 rounded-full text-blue-600 tracking-wider inline-block text-xs ">
                  Cryptocurrency
                </p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 lg:max-w-max max-w-md p-3">
            <div class="shadow-md w-full m-0 rounded-xl">
              <Image
                src={blog3}
                class="rounded-t-xl"
                style={{ width: "100%" }}
                alt="something about blogs"
              />
              <div class=" p-6">
                <Link
                  href="/blog/2"
                  class="font-bold pb-2 cursor-pointer inline-block hover:text-blue-600"
                >
                  Cryptocurrencies to Keep an Eye On in 2023
                </Link>
                <p class="p-3 mt-2 font-bold bg-blue-50 rounded-full text-blue-600 tracking-wider inline-block text-xs ">
                  Cryptocurrency
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="media-bout" class="py-16 my-16 bg-med px-4 lg:px-20">
        <div>
          <div class="pt-4 text-center text-white text-4xl x:text-5xl tracking-wide font-bold">
            <h2>Media about us</h2>
          </div>

          <div class="w-full flex items-center justify-around flex-wrap pb-6 pt-12 ">
            <div class="p-6">
              <a href="https://w3schools.com">
                <Image style={{ width: "221px" }} src={med8} alt="" />
              </a>
            </div>
            <div class="p-6">
              <a href="https://w3schools.com">
                <Image style={{ width: "209px" }} src={med2} alt="" />
              </a>
            </div>
            <div class="p-6">
              <a href="https://w3schools.com">
                <Image style={{ width: "225px" }} src={med3} alt="" />
              </a>
            </div>
            <div class="p-6">
              <a href="https://w3schools.com">
                <Image style={{ width: "210px" }} src={med4} alt="" />
              </a>
            </div>
            <div class="p-6">
              <a href="https://w3schools.com">
                <Image style={{ width: "160px" }} src={med5} alt="" />
              </a>
            </div>
            <div class="p-6">
              <a href="https://w3schools.com">
                <Image style={{ width: "209px" }} src={med6} alt="" />
              </a>
            </div>
            <div class="p-6">
              <a href="https://w3schools.com">
                <Image style={{ width: "219px" }} src={med7} alt="" />
              </a>
            </div>
            <div class="p-6">
              <a href="https://w3schools.com">
                <Image style={{ width: "246px" }} src={med1} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="community" class="my-16 py-8 px-4 lg:px-32">
        <div class="text-3xl font-bold text-center">
          <h2>
            <span class="text-blue-600">Join our user community</span> to share
            your news and ideas
          </h2>
        </div>

        <div class="lg:pt-20 pt-12 flex flex-col lg:flex-row justify-between">
          <div class="text-center px-8">
            <div
              style={{ color: "#bebebe" }}
              class="counter text-7xl font-bold"
            >
              <p data-target="69188" class="count">
              69188
              </p>
            </div>
            <div class=" font-normal py-6 text-2xl">
              <p>Active Users</p>
            </div>
          </div>

          <div class="text-center py-4 lg:py-0 px-8">
            <div
              style={{ color: "#bebebe" }}
              class="counter text-7xl font-bold"
            >
              <p data-target="1498" class="count">
                1498
              </p>
            </div>
            <div class=" font-normal py-6 text-2xl">
              <p>Active trading bots</p>
            </div>
          </div>

          <div class="text-center px-8">
            <div
              style={{ color: "#bebebe" }}
              class="counter text-7xl font-bold"
            >
              <p data-target="531036" class="count">
                531036
              </p>
            </div>
            <div class=" font-normal py-6 text-2xl">
              <p>Completed deals</p>
            </div>
          </div>
        </div>

        <div class="lg:pt-20 pt-10 flex flex-col items-center lg:flex-row justify-between">
          <div class="relative my-12">
            <Image src={com1} alt="community shield one" />
            <div
              class=" absolute left-16 py-10 w-auto p-4"
              style={{
                height: "180px",
                maxWidth: "280px",
                right: "17px",
                bottom: 0,
              }}
            >
              <p class="font-light text-sm lg:text-base">
                Excellent... this is so far the best bot I know! There are some
                paid out there that do not even hit the mark!
              </p>
              <p class="font-bold py-3">Ricardo</p>
            </div>
          </div>
          <div class="relative my-12">
            <Image src={com2} alt="community shield one" />
            <div
              class=" absolute left-16 py-10 w-auto p-4"
              style={{
                height: "180px",
                maxWidth: "280px",
                right: "17px",
                bottom: 0,
              }}
            >
              <p class="font-light text-sm lg:text-base">
                Hazmick team has been very responsive and quick in resolving
                issues and giving feedback.
              </p>
              <p class="font-bold py-3">Laura</p>
            </div>
          </div>
          <div class="relative my-12">
            <Image src={com3} alt="community shield one" />
            <div
              class=" absolute left-16 py-10 px-4 w-auto lg:p-4"
              style={{
                height: "180px",
                maxWidth: "280px",
                right: "17px",
                bottom: 0,
              }}
            >
              <p class="font-light text-sm lg:text-base">
                So far for a begginer I'm enjoying this, got a lot to learn but
                it's a good platform with useful tutorials to assist you along.
              </p>
              <p class="font-bold py-3">Galen Grassi</p>
            </div>
          </div>
        </div>
      </div>

      <div id="faqs" class="mt-16 py-8 px-4 lg:px-20">
        <div id="info">
          <div>
            <h2 class="uppercase text-center text-xl font-bold text-blue-700 tracking-widest">
              Faq
            </h2>
          </div>
          <div>
            <p class="text-center font-semibold tracking-wider py-5 text-xl lg:text-4xl">
              Frequently Asked Questions
            </p>
          </div>
        </div>

        <div id="main">
          <div class="lg:px-28 lg:pb-8 pt-4">
            <div class="py-4" id="faq-1">
              <div
                id="faq--1"
                onClick={hideOrshow1}
                class="lg:text-2xl text-lg flex justify-between tracking-wide p-3 font-bold"
              >
                <h2>Is Hazmick safe?</h2>
                <button
                  id="but-plus"
                  style={{ display: "none" }}
                  class="text-2xl outline-none focus:outline-none font-bold px-4"
                >
                  +
                </button>
                <button
                  id="but-minus"
                  class="text-2xl focus:outline-none outline-none font-bold px-4"
                >
                  -
                </button>
              </div>
              <div
                style={{ display: "block" }}
                id="faq-x"
                class="py-4 border-b-2 leading-loose text-gray-500 lg:text-lg tracking-wide font-normal"
              >
                <p class="py-2 px-4">
                  Yes, Hazmick was built with your security in mind from the
                  beginning. Every API key is securely encrypted and stored
                  using FIPS 140-2 validated hardware security modules (HSMs) to
                  protect the confidentiality and integrity of your exchange API
                  keys.
                </p>
                <p class="py-2 px-4">
                  Hazmick only requires the ability to read data and make
                  trades, so your funds can't be removed from the exchange. We
                  also encourage all users to utilize our Two-Factor
                  Authentication (“2FA”) service which secures access to your
                  account.
                </p>
              </div>
            </div>
            <div class="py-4" id="faq-2">
              <div
                id="faq--a"
                onClick={hideOrshow2}
                class="lg:text-2xl text-lg flex justify-between tracking-wide p-3 font-bold"
              >
                <h2>Can Hazmick automate trades on multiple accounts?</h2>
                <button
                  id="but-plusa"
                  class="text-2xl outline-none focus:outline-none font-bold px-4"
                >
                  +
                </button>
                <button
                  id="but-minusa"
                  style={{ display: "none" }}
                  class="text-2xl focus:outline-none outline-none font-bold px-4"
                >
                  -
                </button>
              </div>
              <div
                style={{ display: "none" }}
                id="faq-a"
                class="py-4 border-b-2 leading-loose text-gray-500 lg:text-lg tracking-wide font-normal"
              >
                <p class="py-2 px-4">
                  Yes, Hazmick can automate trades on multiple accounts at the
                  same time. Each account that is connected to Hazmick is
                  treated separately, which means each trading strategy is
                  specific to each account.
                </p>
              </div>
            </div>
            <div class="py-4" id="faq-3">
              <div
                id="faq--b"
                onClick={hideOrshow3}
                class="lg:text-2xl text-lg flex justify-between tracking-wide p-3 font-bold"
              >
                <h2>How do I copy another trader?</h2>
                <button
                  id="but-plusb"
                  class="text-2xl outline-none focus:outline-none font-bold px-4"
                >
                  +
                </button>
                <button
                  id="but-minusb"
                  style={{ display: "none" }}
                  class="text-2xl focus:outline-none outline-none font-bold px-4"
                >
                  -
                </button>
              </div>
              <div
                style={{ display: "none" }}
                id="faq-b"
                class="py-4 border-b-2 leading-loose text-gray-500 lg:text-lg tracking-wide font-normal"
              >
                <p class="py-2 px-4">
                  Hazmick supports a lively social trader community. Our social
                  leaders can be found by visiting our leaderboard. Copying a
                  leader is as simple as clicking the “Follow Leader” button on
                  the portfolio you would like to begin copying. Each time your
                  leader makes a change to their portfolio, the same changes
                  will be made to your portfolio.
                </p>
              </div>
            </div>
            <div class="py-4" id="faq-4">
              <div
                id="faq--c"
                onClick={hideOrshow4}
                class="lg:text-2xl text-lg flex justify-between tracking-wide p-3 font-bold"
              >
                <h2>
                  How much money can I earn as a social leader on Hazmick?
                </h2>
                <button
                  id="but-plusc"
                  class="text-2xl outline-none focus:outline-none font-bold px-4"
                >
                  +
                </button>
                <button
                  id="but-minusc"
                  style={{ display: "none" }}
                  class="text-2xl focus:outline-none outline-none font-bold px-4"
                >
                  -
                </button>
              </div>
              <div
                style={{ display: "none" }}
                id="faq-c"
                class="py-4 border-b-2 leading-loose text-gray-500 lg:text-lg tracking-wide font-normal"
              >
                <div class="px-4 py-2">
                  <p>
                    The earning potential for leaders depends on a number of
                    factors. The most important factor is the fee structure that
                    is chosen by the leader. With optimal fee structures,
                    leaders have been able to earn as much as $45,000+ in a
                    single month. Besides having an optimal fee structure,
                    leaders that continuously engage the community and act with
                    integrity have been able to produce outstanding results.
                  </p>
                </div>
              </div>
            </div>
            <div class="py-4" id="faq-5">
              <div
                id="faq--d"
                onClick={hideOrshow5}
                class="lg:text-2xl text-lg flex justify-between tracking-wide p-3 font-bold"
              >
                <h2>Do I need to deposit funds to Hazmick?</h2>
                <button
                  id="but-plusd"
                  class="text-2xl outline-none focus:outline-none font-bold px-4"
                >
                  +
                </button>
                <button
                  id="but-minusd"
                  style={{ display: "none" }}
                  class="text-2xl focus:outline-none outline-none font-bold px-4"
                >
                  -
                </button>
              </div>
              <div
                style={{ display: "none" }}
                id="faq-d"
                class="py-4 border-b-2 leading-loose text-gray-500 lg:text-lg tracking-wide font-normal"
              >
                <div class="px-4 py-2">
                  <p>
                    No, Hazmick will never ask you to deposit funds. All of your
                    funds should be maintained on exchanges or wallets that are
                    connected to Hazmick. Once a wallet or exchange is
                    connected, Hazmick can view those balances and execute
                    trades.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="py-4" id="faq-6">
              <div
                id="faq--h1"
                onClick={hideOrshow6}
                class="lg:text-2xl text-lg flex justify-between tracking-wide p-3 font-bold"
              >
                <h2>Does Hazmick support futures trading?</h2>
                <button
                  id="but-plusdx"
                  class="text-2xl outline-none focus:outline-none font-bold px-4"
                >
                  +
                </button>
                <button
                  id="but-minusdx"
                  style={{ display: "none" }}
                  class="text-2xl focus:outline-none outline-none font-bold px-4"
                >
                  -
                </button>
              </div>
              <div
                style={{ display: "none" }}
                id="faq-h1"
                class="py-4 border-b-2 leading-loose text-gray-500 text-lg tracking-wide font-normal"
              >
                <div class="px-4 py-2">
                  <p>Yes, Hazmick supports Futures Trading and Spot Trading.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </>
  )
}
