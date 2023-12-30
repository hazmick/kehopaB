import Head from 'next/head'
import image from 'next/image'
import Link from 'next/link'

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Contact = () => {

  return (
    <>
    <Head>
      <title>Contact Us | Hazmick</title>
      <meta name="description" content="Hazmick - World Class Automated Crypto Trading Bot. Copy traders, manage all your exchange accounts, use market-making and exchange/market arbitrage and simulate or backtest your trading. Trading, Portfolio, Arbitrage, Signals, Bots - everything you need to easily manage crypto assets, within one interface." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
      <div class="xl:pt-40 pt-24 pb-12 px-6 xl:px-24 flex flex-col xl:flex-row">
        <div class="xl:w-2/3 xl:pr-12">
          <div class="">
            <h2 class="text-xl font-bold">Contact</h2>
            <p class="tracking-wide pt-5 leading-7">
              Fill in the details below to contact us and we will do our best to
              respond as quickly as possible. All fields marked with an * are
              required.
            </p>
          </div>

          <div class="pt-10">
            <div class="pb-8 flex-col xl:flex-row justify-center items-center whitespace-nowrap">
              <label class="font-semibold xl:w-1/5 text-right pr-6">
                Name *
              </label>
              <input class="outline-none xl:w-4/5 p-2 border " type="text" />
            </div>
            <div class="pb-8 flex-col xl:flex-row justify-center items-center whitespace-nowrap">
              <label class="font-semibold xl:w-1/5 text-right pr-6">
                Email *
              </label>
              <input class="outline-none xl:w-4/5 p-2 border " type="text" />
            </div>
            <div class="pb-8 flex-col xl:flex-row justify-center items-center whitespace-nowrap">
              <label class="font-semibold xl:w-1/5 text-right pr-6">
                Message *
              </label>
              <textarea
                class="outline-none xl:w-4/5 p-2 border h-40"
                type="text"
              />
            </div>
          </div>

          <div class="flex justify-end mb-6 xl:mb-0 xl:mt-6">
            <button class=" bg-blue-600 font-semibold text-sm text-white py-3 px-7 rounded-md">
              Send Email
            </button>
          </div>
        </div>

        <div class="xl:w-1/3">
          <div class="p-8 bg-gray-50 tracking-wide">
            <h2 class="font-semibold pb-3">Contact details</h2>
            <h5 class="pt-4 pb-2 text-sm font-bold">Hazmick</h5>
            <p class="leading-7 text-sm tracking-wider">
              Johan van Hasseltweg 18A 1022 WV Amsterdam
            </p>
            <p class="leading-7 text-sm tracking-wider">Dubai </p>
            <h5 class="pt-4 pb-2 text-sm font-bold">Contact</h5>
            <p class="leading-7 text-sm tracking-wider">support@hazmick.xyz</p>

            <p class="leading-7 pt-4 text-sm tracking-wider">COC: 70270481</p>
            <p class="leading-7 text-sm tracking-wider">VAT: NL858227198B01</p>
          </div>
        </div>
      </div>
    <Footer />
    </>
  );
};

export default Contact;
