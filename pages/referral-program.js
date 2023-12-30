import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import headImg from "../public/images/referralImg.svg";
import ref1 from "../public/images/ref1.svg";
import ref2 from "../public/images/ref2.svg";
import ref3 from "../public/images/ref3.svg";

const ReferralProgram = () => {
  return (
    <>
    <Head>
      <title>Referral Program | Hazmick</title>
      <meta name="description" content="Hazmick - World Class Automated Crypto Trading Bot. Copy traders, manage all your exchange accounts, use market-making and exchange/market arbitrage and simulate or backtest your trading. Trading, Portfolio, Arbitrage, Signals, Bots - everything you need to easily manage crypto assets, within one interface." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
      <div
        id="header"
        class="flex flex-col xl:flex-row h-full items-center px-6 xl:px-20 mt-24 mb-12 xl:my-32"
      >
        <div class="xl:w-1/2 xl:px-4">
          <div
            class=" text-3xl xl:text-5xl  font-extrabold py-6"
            style={{ lineHeight: "1.2em" }}
          >
            <h2>Refer your friends & earn up to $30 for every referral</h2>
          </div>
          <div>
            <p class="text-lg xl:py-3 tracking-wide">
              Welcome to the Hazmick referral program!
            </p>
            <p class="text-lg py-3 tracking-wide">
              Our referral program is the way we show our appreciation for our
              strongest supporters. Earn 50% commission for the first 3 months
              on any payments made by the people you refer through your unique
              referral link.
            </p>
          </div>
        </div>

        <div class="xl:w-1/2 xl:px-4">
          <Image class="w-full" src={headImg} alt="right of header" />
        </div>
      </div>

      <div id="our-features" class="mb-16 mt-8">
        <div id="info">
          <div>
            <h2 class="uppercase text-center text-xl font-bold text-blue-700 tracking-widest">
              How IT Works
            </h2>
          </div>
          <div>
            <p class="text-center font-bold tracking-wider py-3 xl:py-5 text-xl xl:text-4xl">
              Earn Money in 3 Simple Steps
            </p>
          </div>
        </div>

        <div
          id="3-features"
          class="flex w-full flex-wrap xl:px-20 pt-6 text-center"
        >
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
              <h2>Copy your unique referral link from your account</h2>
            </div>
            <div class="py-2 font-light leading-7 tracking-wide">
              <p>
                Log into your Hazmick account and navigate to your settings
                page. On this page, you will see a referral link at the top.
                This link is unique to your account. Copy this link.
              </p>
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
              <h2>
                Send this link to your friends so they can sign up for Hazmick
              </h2>
            </div>
            <div class="py-2 font-light leading-7 tracking-wide">
              <p>
                Share your link with friends. When they click this link or
                navigate to your referral link in their browser, we will
                automatically track if they sign up and credit your account.
              </p>
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
              <h2>Earn money when they pay for services in Hazmick</h2>
            </div>
            <div class="py-2 font-light leading-7 tracking-wide">
              <p>
                Get paid for your commitment to the Hazmick project. Navigate to
                the “Settings” tab to view your balance, and get paid out
                whenever you reach a balance over $65.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      </>
  );
};

export default ReferralProgram;
