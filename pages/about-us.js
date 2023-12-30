import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import headimage from "../public/images/aboutImg.svg";
import about1 from "../public/images/about1.svg";
import about2 from "../public/images/about2.svg";
import about3 from "../public/images/about3.svg";
import part1 from "../public/images/part1.png";
import part2 from "../public/images/part2.png";
import part3 from "../public/images/part3.png";
import part4 from "../public/images/part4.jpg";
import part5 from "../public/images/part5.svg";
import part6 from "../public/images/part6.png";
import part7 from "../public/images/part7.png";
import part8 from "../public/images/part8.svg";
import part9 from "../public/images/part9.png";
import team1 from "../public/images/team1.png";
import team2 from "../public/images/team2.png";
import team3 from "../public/images/team3.jpeg";
import team4 from "../public/images/team4.png";
import footer1 from "../public/images/fb.svg";
import footer2 from "../public/images/tweet.svg";
import footer3 from "../public/images/yoube.svg";
import footer4 from "../public/images/in.svg";
import footer5 from "../public/images/ig.svg";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {

  return (
    <>
    <Head>
      <title>About Us | Hazmick</title>
      <meta name="description" content="Hazmick - World Class Automated Crypto Trading Bot. Copy traders, manage all your exchange accounts, use market-making and exchange/market arbitrage and simulate or backtest your trading. Trading, Portfolio, Arbitrage, Signals, Bots - everything you need to easily manage crypto assets, within one interface." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />

      <div
        id="header"
        class="flex flex-col xl:flex-row h-full items-center px-6 xl:px-20 mt-24 mb-12 xl:my-32"
      >
        <div id="words" class="xl:w-1/2 xl:px-4 order-2 xl:order1">
          <div
            class="text-2xl xl:text-5xl font-bold py-6"
            style={{ lineHeight: "1.3em" }}
          >
            <h2>Connecting the Crypto Industry</h2>
          </div>
          <div>
            <p class="text-lg py-3 tracking-wide">
              Hazmick is building a unified portal for the cryptocurrency
              market. Our mission is to connect our customers to every custody
              solution and liquidity provider to enable seamless portfolio
              management. ‍
            </p>
            <p class="text-lg py-3 tracking-wide">
              We designed Hazmick with the idea at heart to make automated
              crypto trading accessible to everyone and provide opportunities to
              traders of all experience levels to make a profit in the
              ever-growing crypto market.
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

      <div class="xl:px-36 py-8 xl:py-16 w-full flex-col xl:flex-row flex justify-between">
        <div class="text-center py-4 xl:w-1/3">
          <div class=" flex justify-center">
            <div
              style={{ backgroundColor: "#ecf6ff" }}
              class="w-16 h-16 my-2 rounded-full flex justify-center items-center"
            >
              <Image
                class=" w-8 h-8"
                src={about1}
                alt="Just some random testing "
              />
            </div>
          </div>
          <div>
            <h2 class="text-3xl font-extrabold pt-1">30+</h2>
          </div>
          <div>
            <p class="text-lg font-normal py-2">Integrations</p>
          </div>
        </div>
        <div class="text-center py-4 xl:w-1/3">
          <div class=" flex justify-center">
            <div
              style={{ backgroundColor: "#ecfdf7" }}
              class="w-16 h-16 my-2 rounded-full flex justify-center items-center"
            >
              <Image
                class=" w-8 h-8"
                src={about2}
                alt="Just some random testing "
              />
            </div>
          </div>
          <div>
            <h2 class="text-3xl font-extrabold pt-1">$7.5 Billion</h2>
          </div>
          <div>
            <p class="text-lg font-normal py-2">Trade Volume</p>
          </div>
        </div>
        <div class="text-center py-4 xl:w-1/3">
          <div class=" flex justify-center">
            <div
              style={{ backgroundColor: "#feecee" }}
              class="w-16 h-16 my-2 rounded-full flex justify-center items-center"
            >
              <Image
                class=" w-8 h-8"
                src={about3}
                alt="Just some random testing "
              />
            </div>
          </div>
          <div>
            <h2 class="text-3xl font-extrabold pt-1">500k</h2>
          </div>
          <div>
            <p class="text-lg font-normal py-2"> Trades per Day</p>
          </div>
        </div>
      </div>

      <div id="partners" class="xl:px-20 py-8 xl:py-16">
        <div class="pb-10">
          <div id="info">
            <div>
              <h2 class="uppercase text-center text-xl font-bold text-blue-700 tracking-widest">
                Partners
              </h2>
            </div>
            <div>
              <p class="text-center font-bold tracking-wider py-3 xl:py-5 text-xl xl:text-4xl">
                Our Offical Partners
              </p>
            </div>
          </div>
        </div>

        <div class=" w-full flex-col xl:flex-row flex-wrap flex justify-between">
          <div class="xl:w-1/3 flex justify-center p-8 flex-col items-center">
            <Image
              src={part1}
              height="104"
              width="104"
              loading="lazy"
              alt="Stuffs for the partners"
            />
            <p class="py-6 text-2xl font-bold">CoinApi.io</p>
          </div>
          <div class="xl:w-1/3 flex justify-center p-8 flex-col items-center">
            <Image
              src={part2}
              height="104"
              width="104"
              loading="lazy"
              alt="Stuffs for the partners"
            />
            <p class="py-6 text-2xl font-bold">CoinStats</p>
          </div>
          <div class="xl:w-1/3 flex justify-center p-8 flex-col items-center">
            <Image
              src={part3}
              height="104"
              width="104"
              loading="lazy"
              alt="Stuffs for the partners"
            />
            <p class="py-6 text-2xl font-bold">CoinTracker</p>
          </div>
          <div class="xl:w-1/3 flex justify-center p-8 flex-col items-center">
            <Image
              src={part4}
              height="104"
              width="104"
              loading="lazy"
              alt="Stuffs for the partners"
            />
            <p class="py-6 text-2xl font-bold">CoinTrader.tax</p>
          </div>
          <div class="xl:w-1/3 flex justify-center p-8 flex-col items-center">
            <Image
              src={part5}
              height="104"
              width="104"
              loading="lazy"
              alt="Stuffs for the partners"
            />
            <p class="py-6 text-2xl font-bold">HitBTC</p>
          </div>
          <div class="xl:w-1/3 flex justify-center p-8 flex-col items-center">
            <Image
              src={part6}
              height="104"
              width="104"
              loading="lazy"
              alt="Stuffs for the partners"
            />
            <p class="py-6 text-2xl font-bold">Kaiko</p>
          </div>
          <div class="xl:w-1/3 flex justify-center p-8 flex-col items-center">
            <Image
              src={part7}
              height="104"
              width="104"
              loading="lazy"
              alt="Stuffs for the partners"
            />
            <p class="py-6 text-2xl font-bold">Koinly</p>
          </div>
          <div class="xl:w-1/3 flex justify-center p-8 flex-col items-center">
            <Image
              src={part8}
              height="104"
              width="104"
              loading="lazy"
              alt="Stuffs for the partners"
            />
            <p class="py-6 text-2xl font-bold">KuCoin</p>
          </div>
          <div class="xl:w-1/3 flex justify-center p-8 flex-col items-center">
            <Image
              src={part9}
              height="104"
              width="104"
              loading="lazy"
              alt="Stuffs for the partners"
            />
            <p class="py-6 text-2xl font-bold">OKEK</p>
          </div>
        </div>
      </div>

      <div id="Team" class="xl:px-20 pt-16 py-8 xl:py-16">
        <div id="info">
          <div>
            <h2 class="uppercase text-center text-xl font-bold text-blue-700 tracking-widest">
              The Team
            </h2>
          </div>
          <div>
            <p class="text-center font-bold tracking-wider py-3 xl:py-5 text-xl xl:text-4xl">
              MEET THE TEAM
            </p>
          </div>
          <div id="" class="py-6 px-6 xl:px-32 xl:text-xl leading-9 text-center">
            <p>
              The Hazmick team consists of 17 experts across fields of business,
              engineering, and design. The combined efforts of our team drives
              the development for our core products.
            </p>
          </div>
        </div>

        <div class="flex flex-col xl:flex-row justify-between">
          <div id="card" class="p-6 flex flex-col justify-center items-center text-center">
            <div id="image">
              <Image
                class="rounded-full"
                style={{ maxWidth: "207px" }}
                src={team1}
                alt=""
              />
            </div>
            <div>
              <h2 class="font-bold text-2xl py-2">Michael McCarty</h2>
              <p class="text-lg">CEO & Co-Founder</p>
            </div>
          </div>
          <div id="card" class="p-6 flex flex-col justify-center items-center text-center">
            <div id="image">
              <Image
                class="rounded-full"
                style={{ maxWidth: "207px" }}
                src={team2}
                alt=""
              />
            </div>
            <div>
              <h2 class="font-bold text-2xl py-2">Matthew Wesly</h2>
              <p class="text-lg">CTO & Co-Founder</p>
            </div>
          </div>
          <div id="card" class="p-6 flex flex-col justify-center items-center text-center">
            <div id="image">
              <Image
                class="rounded-full"
                style={{ maxWidth: "207px" }}
                src={team3}
                alt=""
              />
            </div>
            <div>
              <h2 class="font-bold text-2xl py-2">Nishant Nayudu</h2>
              <p class="text-lg">Head of Infrastructure</p>
            </div>
          </div>
          <div id="card" class="p-6 flex flex-col justify-center items-center text-center">
            <div id="image">
              <Image
                class="rounded-full"
                style={{ maxWidth: "207px" }}
                src={team4}
                alt=""
              />
            </div>
            <div>
              <h2 class="font-bold text-2xl py-2">Sumaya Mehzabin</h2>
              <p class="text-lg">Senior Product Designer</p>
            </div>
          </div>
        </div>
      </div>

      <div id="Team" class="xl:px-20 py-8 xl:py-16">
        <div id="info">
          <div>
            <h2 class="uppercase text-center text-xl font-bold text-blue-700 tracking-widest">
              Connect with Us
            </h2>
          </div>
          <div>
            <p class="text-center font-bold tracking-wider py-3 xl:py-5 text-xl xl:text-4xl">
              Join Our Community
            </p>
          </div>
          <div id="" class="py-6 px-6 xl:px-32 xl:text-xl leading-9 text-center">
            <p>
              Joining our community gives you direct access to the Hazmick team.
              Ask us questions about the services we provide, learn about
              cryptocurrencies from our experienced users, and enjoy the thrill
              of a rapidly growing community. We love hearing your feedback, so
              we can’t wait to discuss with you.
            </p>
          </div>

          <div class="" style={{ backgroundColor: "rgb(245, 250, 254)" }}>
            <div class="flex justify-center items-center py-20 mt-10 mb-6 flex-col">
              <h2 class="xl:text-5xl text-4xl font-bold">Join Our Team</h2>
              <div class="flex">
                <p class="my-8 shadow py-3 tracking-wider font-bold rounded px-7 bg-blue-600 text-white">
                  View Positions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
