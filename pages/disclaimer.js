import Head from 'next/head'
import image from 'next/image'
import Link from 'next/link'

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Disclaimer = () => {

  return (
    <>
    <Head>
      <title>Contact Us | Hazmick</title>
      <meta name="description" content="Hazmick - World Class Automated Crypto Trading Bot. Copy traders, manage all your exchange accounts, use market-making and exchange/market arbitrage and simulate or backtest your trading. Trading, Portfolio, Arbitrage, Signals, Bots - everything you need to easily manage crypto assets, within one interface." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
      <div class="xl:pt-36 pt-28 px-6 xl:px-20 pb-8">
        <div class="xl:pb-12 pb-6">
          <h2 class="text-2xl font-bold tracking-wide">Disclaimer</h2>
        </div>

        <div class="pb-4">
          <p class="py-3 tracking-wider leading-7 text-sm">
            By using Hazmick.io (“website”), you confirm that you have read
            this Disclaimer, that you understand it and that you unconditionally
            agree to be bound by it.
          </p>
        </div>

        <div class="pb-4">
          <p class="py-3 tracking-wider leading-7 text-sm">
            Investments in securities, commodities, currencies, derivatives and
            other investment options are speculative and involve high degrees of
            risk. You could lose all or a substantial amount of your investment.
            You should carefully read all related information regarding any
            investment, and consult with your advisors, before investing. The
            website does not list, and does not purport to list, the risk
            factors associated with any investment. The past trading performance
            of any trading program or instrument discussed herein is not
            indicative or a guarantee of future results.
          </p>
        </div>

        <div class="pb-4">
          <p class="py-3 tracking-wider leading-7 text-sm">
            We are not a registered broker-dealer or an investment advisor. The
            services and information we offer do not constitute personal
            investment advice. No representation is being made that any stock,
            currency or commodity will or is likely to achieve trading profits
            or trading losses, as predictions by their very nature are distinct
            from guarantees.
          </p>
        </div>

        <div class="pb-4">
          <p class="py-3 tracking-wider leading-7 text-sm">
            You must trade and take sole responsibility to evaluate all
            information provided by this website and use it at your own risk.
            All trading information we provide is intended as trade assistance
            only. All trading strategies are used at your own risk. None of the
            content published on the website constitutes a recommendation that
            any particular cryptocurrency (or cryptocurrency token/asset/index),
            portfolio of cryptocurrencies, transaction or investment strategy is
            suitable for any specific person.
          </p>
        </div>
        <div class="pb-4">
          <p class="py-3 tracking-wider leading-7 text-sm">
            The website owner shall not be responsible for and disclaims all
            liability for any loss, liability, damage (whether direct, indirect
            or consequential), personal injury or expense of any nature
            whatsoever which may be suffered by you or any third party
            (including your company), as a result of or which may be
            attributable, directly or indirectly, to your access and use of the
            website, any information contained on the website, your or your
            company’s personal information or material and information
            transmitted over our system.
          </p>
        </div>
        <div class="pb-4">
          <p class="py-3 tracking-wider leading-7 text-sm">
            We make no guarantees as to the accuracy, thoroughness or quality of
            the information on this website or any message posted on it. Some of
            the information may not be relevant to or compliant with the laws,
            regulations or other legal requirements of your country of
            residence. It is your responsibility to determine whether, how and
            to what extent your intended use of the services and website will be
            technically and legally possible in the areas of the world where you
            intend to use them. You are advised to verify any information before
            using it for any personal, financial or business purpose. The
            website content and the services may be modified at any time by us,
            without advance notice or reason, and we shall have no obligation to
            notify you of any corrections or changes to any website content.
          </p>
        </div>
        <div class="pb-4">
          <p class="py-3 tracking-wider leading-7 text-sm">
            The information contained in the website is not intended to provide
            legal, accounting, tax or specific investment advice. If such advice
            is required, the services of a competent professional advisor should
            be sought.
          </p>
        </div>
      </div>
    <Footer />
    </>
  );
};

export default Disclaimer;
