import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function Press() {

  return (
    <>
    <Head>
      <title>Press | Hazmick</title>
      <meta name="description" content="Hazmick - World Class Automated Crypto Trading Bot. Copy traders, manage all your exchange accounts, use market-making and exchange/market arbitrage and simulate or backtest your trading. Trading, Portfolio, Arbitrage, Signals, Bots - everything you need to easily manage crypto assets, within one interface." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
      <div
        id="press"
        class="xl:pt-36 px-6 pt-24 pb-8 xl:px-24 flex flex-col xl:flex-row"
      >
        <div id="first" class="xl:w-2/3">
          <div>
            <h2 class="text-2xl font-bold tracking-wide">Press</h2>
          </div>
          <div>
            <p class="py-4 leading-9 tracking-wide">
              Press releases and announcements about our bot and new crypto
              trading features can be found in our blog. Download our marketing
              materials and contact us if you have any questions. Press contact:{" "}
              <span class="text-blue-700">support@hazmick.xyz</span>
            </p>
          </div>
        </div>
        <div id="second" class="xl:w-1/3 xl:px-8">
          <div class="p-8 bg-gray-50 tracking-wide">
            <h2 class="font-semibold pb-3">Contact details</h2>
            <h5 class="pt-4 pb-2 text-sm font-bold">Hazmick</h5>
            <p class="leading-7 text-sm tracking-wider">
              Johan van Hasseltweg 18A 1022 WV Amsterdam
            </p>
            <p class="leading-7 text-sm tracking-wider">Dubai </p>
            <h5 class="pt-4 pb-2 text-sm font-bold">Contact</h5>
            <p class="leading-7 text-sm tracking-wider">support@hazmick.xyz</p>
          </div>
        </div>
      </div>
      <Footer />
      </>
  );
}

export default Press;
