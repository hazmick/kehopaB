import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import blog1 from "../../public/images/blog1.jpg";
import blog2 from "../../public/images/blog2.jpg";
import blog3 from "../../public/images/blog3.jpg";

const Blog = () => {

  return (
    <>
    <Head>
      <title>Blog | Hazmick</title>
      <meta name="description" content="Hazmick - World Class Automated Crypto Trading Bot. Copy traders, manage all your exchange accounts, use market-making and exchange/market arbitrage and simulate or backtest your trading. Trading, Portfolio, Arbitrage, Signals, Bots - everything you need to easily manage crypto assets, within one interface." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    <div class="mt-20 xl:mt-20 mb-16 ">
      <div id="blog" class="xl:px-24 px-6 pt-8 xl:pt-16">
        <div class="flex flex-col xl:flex-row justify-between">
          <div class="xl:text-4xl text-2xl tracking-wide font-bold">
            <h2>The Hazmick Blog</h2>
          </div>
        </div>
        <div class="text-lg max-w-4xl font-semibold pt-10 pb-4">
          <p>
            We constantly review our tools and popular trading strategies.
            Follow our blog to keep up-to-date with the latest news.
          </p>
        </div>

        <div class="flex justify-center items-center flex-col xl:flex-row flex-auto w-full flex-wrap py-8">
          <div class="xl:w-1/3 xl:max-w-max max-w-md p-3">
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
          <div class="xl:w-1/3 xl:max-w-max max-w-md p-3">
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
          <div class="xl:w-1/3 xl:max-w-max max-w-md p-3">
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
    </div>
      <Footer />
      </>
  );
};

export default Blog;
