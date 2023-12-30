import Head from 'next/head'
import image from 'next/image'
import Link from 'next/link'

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function Careers() {


  return (
    <>
    <Head>
      <title>Careers | Hazmick</title>
      <meta name="description" content="Hazmick - World Class Automated Crypto Trading Bot. Copy traders, manage all your exchange accounts, use market-making and exchange/market arbitrage and simulate or backtest your trading. Trading, Portfolio, Arbitrage, Signals, Bots - everything you need to easily manage crypto assets, within one interface." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
      <div id="header" class="xl:pt-36 pt-24 px-6 pb-8 xl:px-24">
        <div class="py-3 text-2xl font-bold">
          <h2> Hazmick</h2>
        </div>
        <div class="py-3">
          <div class="xl:p-6 p-3 bg-gray-50 tracking-wide">
            <h2 class="font-semibold text-sm tracking-wide pb-3">
              Work with us! We have openings for the following positions.
            </h2>
          </div>
        </div>
        <div class="py-3 mt-6 text-2xl font-bold">
          <h2>Careers Opportunities</h2>
        </div>
        <div class="py-3">
          <div class="py-3 px-3 xl:px-6 tracking-wide">
            <h2 class="font-semibold text-sm tracking-wide pb-3">
              No open positions at this time
            </h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Careers;
