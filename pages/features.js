import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import rel7 from "../public/images/rel7.svg";

function Features() {

  return (
    <>
    <Head>
      <title>Features | Hazmick</title>
      <meta name="description" content="Hazmick - World Class Automated Crypto Trading Bot. Copy traders, manage all your exchange accounts, use market-making and exchange/market arbitrage and simulate or backtest your trading. Trading, Portfolio, Arbitrage, Signals, Bots - everything you need to easily manage crypto assets, within one interface." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
      <div class="xl:pt-36 pt-24 pb-8 px-6 xl:px-24">
        <div class="pb-4">
          <h2 class="py-3 text-xl font-bold">What is Hazmick?</h2>
          <p class="py-3 tracking-wider leading-7 text-sm">
            Hazmick is the simple portfolio management solution for the busy
            person. Hazmick adapts ideas from smart investors outside of crypto
            to introduce simple automated strategies which can help decrease
            risk and increase returns.
          </p>
        </div>
        <div class="pb-4">
          <h2 class="py-3 text-xl font-bold">How does Hazmick work?</h2>
          <p class="py-3 tracking-wider leading-7 text-sm">
            Once your trading bot is set up and ready to buy and sell
            cryptocurrencies, it will open a deal either immediately or after a
            signal from technical indicators is received, depending on the
            filters set. For the first order crypto bot buys the amount of base
            currency indicated in the settings by the user. When the initial
            order is executed and the deal is open, the automated trading bot
            places the Take Profit order along with several Extra orders. Take
            profit order is the one that makes profit at the percentage level
            set by a user. Each time the price of cryptocurrency goes in the
            opposite direction than the strategy chosen, one extra order is
            executed and a new extra order is automatically placed. The take
            profit level is also reduced each time this happens. Extra orders
            serve to take advantage of the changing price and adapt the trading
            strategy according to the current market conditions.
          </p>
        </div>

        <div class="pb-4">
          <h2 class="py-3 text-xl font-bold">Automation</h2>
          <p class="py-3 tracking-wider leading-7 text-sm">
            Optimize your portfolio by automating strategies that have been
            trusted by institutions for decades to reduce risk and improve
            performance.
          </p>
          <div id="auto-cont" class="flex flex-col xl:flex-row w-full flex-wrap">
            <div id="auto-1" class="flex py-8 xl:pr-4 xl:w-1/2">
              <Image
                class="w-16 h-16"
                src={rel7}
                alt="Just some random testing "
              />
              <div class="px-4">
                <h2 class="text-lg tracking-wide font-bold pb-4">
                  More Automation Features
                </h2>
                <div>
                  <div class="flex pb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 text-green-700 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <p class="pl-4 tracking-wider text-sm">
                      Fee Optimization with Maker Trades
                    </p>
                  </div>
                  <div class="flex pb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 text-green-700 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <p class="pl-4 tracking-wider text-sm">
                      Portfolio Stop Loss
                    </p>
                  </div>
                  <div class="flex pb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 text-green-700 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <p class="pl-4 tracking-wider text-sm">
                      Threshold Rebalancing
                    </p>
                  </div>
                  <div class="flex pb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 text-green-700 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <p class="pl-4 tracking-wider text-sm">
                      Spread/Slippage Control
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="auto-2" class="flex py-8 xl:pr-4 xl:w-1/2">
              <Image
                class="w-16 h-16"
                src={rel7}
                alt="Just some random testing "
              />
              <div class="px-4">
                <h2 class="text-lg tracking-wide font-bold pb-4">
                  Index Market
                </h2>
                <div>
                  <p class="tracking-wider leading-7 text-sm">
                    Automatically index the DeFi market, copy the portfolios of
                    top funds like Pantera Capital or Alameda Research, or build
                    your own custom index.
                  </p>
                </div>
              </div>
            </div>
            <div id="auto-3" class="flex py-8 xl:pr-4 xl:w-1/2">
              <Image
                class="w-16 h-16"
                src={rel7}
                alt="Just some random testing "
              />
              <div class="px-4">
                <h2 class="text-lg tracking-wide font-bold pb-4">
                  Dollar-Cost Averaging
                </h2>
                <div>
                  <p class="tracking-wider leading-7 text-sm">
                    Every time funds are deposited into your account, Hazmick
                    will automatically inject those funds into your portfolio
                    with the desired allocations.
                  </p>
                </div>
              </div>
            </div>
            <div id="auto-4" class="flex py-8 xl:pr-4 xl:w-1/2">
              <Image
                class="w-16 h-16"
                src={rel7}
                alt="Just some random testing "
              />
              <div class="px-4">
                <h2 class="text-lg tracking-wide font-bold pb-4">
                  Smart Rebalancing
                </h2>
                <div>
                  <p class="tracking-wider leading-7 text-sm">
                    Every rebalance is precisely executed by using our advanced
                    smart order routing engine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="pt-8 pb-12">
          <h2 class="text-2xl font-bold tracking-wide">Hazmick Features</h2>
        </div>

        <div class="pb-4">
          <h2 class="py-3 text-xl font-bold">Grid and DCA</h2>
          <p class="py-3 tracking-wider leading-7 text-sm">
            Choose the strategy that suits your trading style and the market
            right now and the bot will take care of the rest whether you opt for
            taking profit for each buy separately (Grid) or average the price
            for all orders (DCA)
          </p>
        </div>
        <div class="pb-4">
          <h2 class="py-3 text-xl font-bold">Extra Orders</h2>
          <p class="py-3 tracking-wider leading-7 text-sm">
            Extra orders give you the chance to make a profit even when market
            fluctuations do not support your initial strategy. In case the price
            goes in opposite direction to your expectations, the Hazmick trading
            bot places extra order to buy (or sell) more coins at the current
            price, making it possible to get desired take profit with a smaller
            price change in the future.
          </p>
        </div>
        <div class="pb-4">
          <h2 class="py-3 text-xl font-bold">Long And Short Strategies</h2>
          <p class="py-3 tracking-wider leading-7 text-sm">
            Hazmick makes it possible for you to launch automated trading bots
            with short and long strategy simultaneously. Whichever direction the
            price goes Hazmick cryptocurrency bots will cover it.
          </p>
        </div>

        <div class="pb-4">
          <h2 class="py-3 text-xl font-bold">Technical Indicators</h2>
          <p class="py-3 tracking-wider leading-7 text-sm">
            Hazmick technical indicators serve to ensure the crypto trading bot
            will enter the market at the optimal point. Hazmick users may choose
            from RSI, MACD and Bollinger signal or use these 3 filters at the
            same time.
          </p>
        </div>
        <div class="pb-4">
          <h2 class="py-3 text-xl font-bold">Stop Loss</h2>
          <p class="py-3 tracking-wider leading-7 text-sm">
            Manage your risks by setting up a Stop Loss to exit the position if
            the trade has gone against your strategy.
          </p>
        </div>

        <div class="pb-4">
          <h2 class="py-3 text-xl font-bold">24/7 Support</h2>
          <p class="py-3 tracking-wider leading-7 text-sm">
            We know that starting to trade cryptocurrency sometimes may be a bit
            confusing. We are ready to answer your questions or solve your
            problems 24/7. Contact us by email.
          </p>
        </div>

        <div class="pt-2">
          <h2 class="py-3 text-xl font-bold">How do I start with Hazmick?</h2>
          <p class="py-3 tracking-wider leading-7 text-sm">
            It’s really easy to automate crypto trading with Hazmick
            cryptocurrency trading bot for Binance, Bittrex, Bitfinex, Upbit,
            Huobi and HitBTC. First, you set up an access point and then you
            configure bot parameters. You choose a trading pair, crypto bot
            strategy (long or short), take profit level and other settings. The
            Wizard guides you through the whole process and Hazmick Bot
            templates will help you to dive into automated crypto trading
            smoothly.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Features;
