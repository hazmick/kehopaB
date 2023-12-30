import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useState,useEffect, useNavigate} from "react";

import cardano from "../../public/images/cardano.webp"
import tron from "../../public/images/tron.webp"

import axios from "axios";

const Coin = ( { coinSpec} ) => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    axios.post('https://upset-bee-overcoat.cyclic.app/api/auth/coins', {coinSpec}, config)
      .then((res) => {
        setCoins(res.data);
        console.log(res.data)
      })
      .catch((error) => console.log(error));
      
    // setInterval(() => {
    //   axios
    //     .get(
    //       `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinSpec}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    //     )
    //     .then((res) => {
    //       setCoins(res.data);
    //       console.log(res.data)
    //     })
    //     .catch((error) => console.log(error));
    // }, 10000);
  }, []);

  return (
    <>
      {coins.map((coin) => {
        return (
          <table class="w-full">
            <thead
              class=""
              style={{ background: "#f9f9f9" }}
            >
              <tr>
                <th class="px-5 py-5 text-sm font-normal">&nbsp;</th>
                <th class="px-5 table-cell py-5 text-sm font-normal">Price</th>
                <th class="px-5  py-5 text-sm font-normal">Change</th>
                <th class="px-5 hidden xl:table-cell py-5 text-sm font-normal">Volume(24hrs)</th>
                <th class="px-5 hidden xl:table-cell py-5 text-sm font-normal">Market Cap</th>
              </tr>
            </thead>

            <tbody class="font-bold text-sm">
              <tr
                class="text-center text-sm font-normal mb-8 lg:mb-0"
                style={{ border: "1px solid #e7e7e7" }}
              >
                <td class="px-5 py-5 flex items-center table-cell">
                  <div class="flex justify-center items-center">
                    <div class="pr-8">
                      { coinSpec === "cardano" ?
                      <Image class="h-7 w-7" src={cardano} alt="coin" /> :
                      <Image class="h-7 w-7" src={tron} alt="coin" /> }
                    </div>
                    <div class="flex justify-center items-center">
                      <p>{coin.name}</p>
                    </div>
                  </div>
                </td>
                <td class="px-5 py-5 flex justify-between items-center table-cell">
                  <div>${coin.current_price}</div>
                </td>
                <td class="px-5 py-5 flex justify-between items-center table-cell">
                  <div>
                    {coin.price_change_percentage_24h < 0 ? (
                      <p className="text-red-600">
                        {coin.price_change_percentage_24h.toFixed(2)}%
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
            </tbody>
          </table>
        );
      })}
    </>
  );
};

export default Coin;
