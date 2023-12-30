import React, { useEffect, useState } from "react";
import axios from "axios";

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Price = () => {
  useEffect(() => {
    document.title = "Cryptocurrency Prices | Hamick";
  }, []);

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=65&page=1&sparkline=false`
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));

    setInterval(() => {
      axios
        .get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=65&page=1&sparkline=false`
        )
        .then((res) => {
          setCoins(res.data);
        })
        .catch((error) => console.log(error));
    }, 10000);
  }, []);

  return (
    <>
    <Head>
      <title>Price of Top 100 Cryptocurrency | Hazmick</title>
      <meta name="description" content="Hazmick - World Class Automated Crypto Trading Bot. Copy traders, manage all your exchange accounts, use market-making and exchange/market arbitrage and simulate or backtest your trading. Trading, Portfolio, Arbitrage, Signals, Bots - everything you need to easily manage crypto assets, within one interface." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    <div class="xl:px-24 mt-32 ">
      <div class="px-4">
        <div>
          <div
            class="text-2xl xl:text-4xl font-bold"
            style={{ lineHeight: "1.3em" }}
          >
            <h2>Prices</h2>
          </div>
        </div>

        <table class="w-full my-16">
          <thead class="border" style={{ background: "#f9f9f9" }}>
            <tr>
              <th class="px-5 py-5 text-sm font-normal">&nbsp;</th>
              <th class="px-5 py-5 text-sm font-normal">Price</th>
              <th class="px-5 py-5 text-sm font-normal">Change</th>
              <th class="px-5 hidden xl:table-cell py-5 text-sm font-normal">
                Volume(24hrs)
              </th>
              <th class="px-5 hidden xl:table-cell py-5 text-sm font-normal">
                Market Cap
              </th>
            </tr>
          </thead>
          <tbody class="font-bold text-sm">
            {coins.map((coin) => {
              return (
                <tr
                  class="text-center text-sm font-normal mb-8 lg:mb-0"
                  style={{ border: "1px solid #e7e7e7" }}
                >
                  <td class="xl:px-5 pl-1 xl:pl-5 py-5 flex items-center table-cell">
                    <div class="flex items-center">
                      <div class="xl:pr-8 pr-3">
                        <Image class="h-7 w-7" height="20" width="20" src={coin.image} />
                      </div>
                      <div class="flex whitespace-nowrap items-center">
                        <p>{coin.name}</p>
                      </div>
                    </div>
                  </td>
                  <td class="px-5 py-5 flex justify-between items-center table-cell">
                    <div>${coin.current_price.toLocaleString()}</div>
                  </td>
                  <td class="px-5 py-5 flex justify-between items-center table-cell">
                    <div>
                      {coin.price_change_percentage_24h < 0 ? (
                        <p className="text-red-600">
                          -{coin.price_change_percentage_24h.toFixed(2)}%
                        </p>
                      ) : (
                        <p className="text-green-600">
                          +{coin.price_change_percentage_24h.toFixed(2)}%
                        </p>
                      )}
                    </div>
                  </td>
                  <td class="px-5 py-5 hidden xl:flex justify-between items-center xl:table-cell">
                    <div>${coin.total_volume.toLocaleString()}</div>
                  </td>
                  <td class="px-5 py-5 hidden xl:flex justify-between items-center lg:table-cell">
                    <div>${coin.market_cap.toLocaleString()}</div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
      <Footer />
      </>
  );
};

export default Price;
