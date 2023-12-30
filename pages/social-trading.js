import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import headimage from "../public/images/socialImg.svg";
import soc2 from "../public/images/soc2.svg";
import soc3 from "../public/images/soc3.svg";
import ref1 from "../public/images/ref1.svg";
import ref2 from "../public/images/ref2.svg";
import ref3 from "../public/images/ref3.svg";

const SocialTrading = () => {

  return (
    <>
    <Head>
      <title>Social Trading | Hazmick</title>
      <meta name="description" content="Hazmick - World Class Automated Crypto Trading Bot. Copy traders, manage all your exchange accounts, use market-making and exchange/market arbitrage and simulate or backtest your trading. Trading, Portfolio, Arbitrage, Signals, Bots - everything you need to easily manage crypto assets, within one interface." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
      <div
        id="header"
        class="flex flex-col xl:flex-row h-full items-center px-6 xl:px-20 mt-24 mb-12 xl:my-32"
      >
        <div id="words" class="xl:w-1/2 xl:px-4 py-6 xl:py-0 order-2 xl:order1">
          <div>
            <h2 class="text-blue-700 text-lg font-extrabold uppercase tracking-widest">
              Social trading
            </h2>
          </div>
          <div>
            <h2
              class="text-2xl xl:text-4xl font-bold py-6"
              style={{ lineHeight: "1.3em" }}
            >
              The Social Trading Platform for Crypto
            </h2>
          </div>
          <div>
            <p class="text-xl py-3 leading-8 tracking-wide">
              Automatically copy the top crypto traders on the only social
              trading platform that was built for simple portfolio management.
            </p>
          </div>
        </div>

        <div
          id="picture"
          class="w-full py-3 max-w-md xl:max-w-full xl:py-0 xl:w-1/2 xl:px-8 order-1 xl:order-2"
        >
          <Image class="w-full" src={headimage} alt="right of header" />
        </div>
      </div>

      <div class="xl:px-20 px-6 my-8">
        <div class="xl:px-12 text-2xl xl:text-4xl text-center font-bold py-4">
          <h2>Social Followers Can Copy The Strategies Of Other Top Traders</h2>
        </div>
        <div class="xl:px-20 py-4 text-center text-lg xl:text-xl tracking-wide leading-9">
          <p>
            Join a community of traders that can help you grow a crypto
            portfolio. Follow a leader and put your trading strategy on
            autopilot.
          </p>
        </div>
        <div class="flex justify-center items-center py-6">
          <div class="flex flex-col xl:flex-row py-6 items-center justify-between">
            <div class=" mb-6 xl:mr-6 hover:text-blue-700">
              <Link href="/dashboard">View Leaderboard</Link>
            </div>
            <div>
              <Link
                class=" bg-blue-700 text-white rounded-md px-8 py-3 outline-none border-2 border-blue-700 hover:bg-white hover:text-blue-700"
                href="/dashboard"
              >
                Follow a Leaderboard
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div class="py-8 px-6 xl:px-20">
        <div id="full-one" class="flex flex-col xl:flex-row py-6">
          <div class="xl:w-3/5 flex flex-col justify-center order-2 xl:order-1">
            <h2 class="xl:text-3xl text-xl py-3 font-bold">
              Copy the Best Cryptocurrency Traders
            </h2>
            <p class="py-2 xl:text-lg tracking-wider leading-9">
              When your leader trades, you trade. Hazmick will automatically
              update your portfolio to always match your leader’s. Browse
              through hundreds of cryptocurrency traders to copy.
            </p>
          </div>
          <div class="xl:w-2/5 flex justify-center items-center max-w-md xl:max-w-full order-1 xl:order-2">
            <Image src={soc2} alt="pressure" />
          </div>
        </div>
        <div id="full-two" class="flex flex-col lg:flex-row py-6">
          <div class="xl:w-2/5 flex justify-center items-center max-w-md xl:max-w-full ">
            <Image src={soc3} alt="pressure" />
          </div>
          <div class="xl:w-3/5 flex flex-col justify-center">
            <h2 class="xl:text-3xl text-xl py-3 font-bold">Trade like an expert</h2>
            <p class="py-2 text-lg tracking-wider leading-9">
              Hazmick is designed to provide a completely new experience for
              trading cryptocurrency. Rather than learning about crypto trading
              from unreliable sources, we want to connect you with experienced
              traders who can help you succeed..
            </p>
          </div>
        </div>
        <div id="full-three" class="flex flex-col xl:flex-row py-6">
          <div class="xl:w-3/5 flex flex-col justify-center order-2 xl:order-1">
            <h2 class="xl:text-3xl text-xl py-3 font-bold">
              Learn from a growing community
            </h2>
            <p class="py-2 text-lg tracking-wider leading-9">
              Social trading is more than just copying traders. Stay up to date
              on the latest market trends and participate in the community that
              can teach you to be a better trader.
            </p>
          </div>
          <div class="xl:w-2/5 flex justify-center items-center max-w-md xl:max-w-full order-1 xl:order-2">
            <Image src={soc2} alt="pressure" />
          </div>
        </div>
      </div>

      <div id="3-features" class="flex w-full flex-wrap flex-col xl:flex-row xl:px-20 pt-6 text-center">
        <div id="feat-1" class="xl:w-1/3 py-6 px-4">
          <div class="flex justify-center">
            <div
              style={{ backgroundColor: "#ecf6ff" }}
              class="w-16 h-16 my-2 rounded-full flex justify-center items-center"
            >
              <Image
                class=" w-8 h-8"
                src={ref1}
                alt="Just some random testing "
              />
            </div>
          </div>
          <div class="py-2 text-center text-3xl font-bold tracking-wider">
            <h2>Step 1</h2>
          </div>
          <div class="py-2 text-center text-lg font-semibold tracking-wider">
            <h2>Connect Exchanges</h2>
          </div>
          <div class="py-2 font-light leading-7 tracking-wide">
            <p>Sign up for Hazmick and connect your Exchange</p>
          </div>
        </div>
        <div id="feat-1" class="xl:w-1/3 py-6 px-4">
          <div class="flex justify-center">
            <div
              style={{ backgroundColor: "#ecfdf7" }}
              class="w-16 h-16 my-2 rounded-full flex justify-center items-center"
            >
              <Image
                class=" w-8 h-8"
                src={ref2}
                alt="Just some random testing "
              />
            </div>
          </div>
          <div class="py-2 text-center text-3xl font-bold tracking-wider">
            <h2>Step 2</h2>
          </div>
          <div class="py-2 text-center text-lg font-semibold tracking-wider">
            <h2>View Leaderboard</h2>
          </div>
          <div class="py-2 font-light leading-7 tracking-wide">
            <p>Browse the social Leaderboard to find top traders</p>
          </div>
        </div>
        <div id="feat-1" class="xl:w-1/3 py-6 px-4">
          <div class="flex justify-center">
            <div
              style={{ backgroundColor: "#feecee" }}
              class="w-16 h-16 my-2 rounded-full flex justify-center items-center"
            >
              <Image
                class=" w-8 h-8"
                src={ref3}
                alt="Just some random testing "
              />
            </div>
          </div>
          <div class="py-2 text-center text-3xl font-bold tracking-wider">
            <h2>Step 3</h2>
          </div>
          <div class="py-2 text-center text-lg font-semibold tracking-wider">
            <h2>Start Following</h2>
          </div>
          <div class="py-2 font-light leading-7 tracking-wide">
            <p>Follow a leader to start automating your portfolio</p>
          </div>
        </div>
      </div>

      <div
        class="my-16 mx-6 xl:mx-20 rounded-3xl"
        style={{ backgroundColor: "rgb(245, 250, 254)" }}
      >
        <div class="flex justify-center items-center py-20 mt-10 mb-6 flex-col">
          <h2 class="xl:text-4xl text-2xl font-bold">Ready to get started?</h2>
          <div class="flex">
            <Link href="/dashboard" class="mt-8 shadow-lg py-3 tracking-wider font-bold rounded px-7 bg-blue-600 text-white">
              Get started
            </Link>
          </div>
        </div>
      </div>

      <Footer />
      </>
  );
};

export default SocialTrading;
