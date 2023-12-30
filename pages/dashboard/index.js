import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect, useNavigate } from "react";

import axios from "axios";

import KehoppaPrice from "../../components/coinCharts/App";
import KehoppaPricee from "../../components/coinCharts/App-0-1";
import tron from "../../public/images/tron.png";

const Dashboard = ({}) => {
  let router = useRouter();

  const [coin, setCoin] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState({ level: 9 });
  const [lsat, setlsat] = useState("");

  useEffect(() => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

        const res = axios.get("https://upset-bee-overcoat.cyclic.app/private", config);
      
        res.then(
          async (response) => {
            console.log(response.data.user);
            setUser(response.data.user);
          }
        ).catch( (error) => {
            
        console.log(error.response.data.message)
        setError(error.response.data.message)
        localStorage.removeItem("authToken");
        localStorage.removeItem("authUser");
        router.push("/auth/login");
      })

    } catch (error) {
      setError(error.response.data.error);
      console.log(error.response.data.error)
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("authUser");
    router.push("/auth/login");
  };

  const cardanoHandler = async (e) => {
    e.preventDefault();

    const coin = "cardano";
    const coinres = await axios.post(
      "https://upset-bee-overcoat.cyclic.app/coins/coinselection",
      { coin, user }
    );
    setSuccess(coinres.data);
    setTimeout(() => {
      setSuccess("");
      router.reload();
    }, 5000);
  };

  const tronHandler = async (e) => {
    e.preventDefault();

    const coin = "tron";
    const coinres = await axios.post(
      "https://upset-bee-overcoat.cyclic.app/coins/coinselection",
      { coin, user }
    );
    setSuccess(coinres.data);
    setTimeout(() => {
      setSuccess("");
      router.reload();
    }, 5000);
  };

  const getcharge = async (e) => {
    e.preventDefault();

    if (typeof window !== "undefined") {
      const dataa = await axios.post(
        "https://upset-bee-overcoat.cyclic.app/payment/createCharge",
        user
      );

      document.getElementById("process").style.display = "block";
      document.getElementById("not-process").style.display = "none";
      document.getElementById("blurr").style.backgroundColor =
        "rgb(147, 197, 253)";

      setTimeout(() => {
        document.getElementById("kolsa").style.display = "none";
        document.getElementById("coinbase-pay").style.display = "block";
      }, 1000);

      console.log(dataa.data);

      document.getElementById(
        "amena"
      ).innerHTML = `<a target="_blank" class=" px-5 bg-blue-600 text-white font-bold py-3 text-lg rounded-md" href="${dataa.data.hosted_url}">Pay now</a>`;
    }
  };

  return (
    <>
      <Head>
        <title>Dashboard | Hazmick</title>
        <meta
          name="description"
          content="Hazmick - World Class Automated Crypto Trading Bot. Copy traders, manage all your exchange accounts, use market-making and exchange/market arbitrage and simulate or backtest your trading. Trading, Portfolio, Arbitrage, Signals, Bots - everything you need to easily manage crypto assets, within one interface."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main class="">
        {user.level == "0" ? (
          <div>
            <div
              id="popup"
              style={{
                backgroundColor: "rgba(26,26,26, .5)",
                zIndex: "999999",
                width: "100%",
              }}
              class="bg-gray-100 justify-center px-4 py-8 xl:py-8 xl:px-0 items-center flex-col flex fixed top-0 left-0 bottom-0 right-0"
            >
              <div id="popup-content" class="bg-white w-auto flex xl:max-w-3xl">
                <div id="pop-cont" class="flex flex-col px-4 py-4">
                  <div>
                    <h2 class="font-bold py-4 text-center text-2xl xl:text-4xl">
                      Almost there!
                    </h2>
                  </div>
                  <div>
                    <div class="text-center pt-4 xl:text-lg leading-8">
                      <p class="pb-3">
                        Hi,{" "}
                        <span class="text-blue-700 font-bold ">
                          {user.username}
                        </span>
                      </p>
                      You’re only a few clicks away from automating your
                      portfolio but you have to pay a one-time{" "}
                      <span class="font-bold text-blue-600">
                        membership fee
                      </span>{" "}
                      of <span class="font-bold text-blue-600">$20</span>
                    </div>
                  </div>
                  <div class="text-center pt-4 text-sm xl:text-base pb-2 leading-7">
                    <p>
                      Note: If you have already paid, you'll receive a
                      confirmation and welcome email from Hazmick. If you
                      haven't received an email and you've paid, contact us.
                    </p>
                  </div>
                  <div
                    id="kolsa"
                    class="flex justify-center flex-row flex-wrap items-center pt-4 pb-8"
                  >
                    <button
                      id="blurr"
                      onClick={getcharge}
                      class="bg-blue-600 bg- text-xl py-3 rounded-md px-5 font-bold text-white w-auto"
                    >
                      <div id="not-process">Become a member</div>
                      <div
                        id="process"
                        class="turn"
                        style={{ display: "none" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 spin"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>
                      </div>
                    </button>
                  </div>
                  <div
                    id="coinbase-pay"
                    class="flex justify-center items-center text-center my-4"
                    style={{ display: "none" }}
                  >
                    <div id="amena"></div>
                  </div>
                </div>
              </div>
            </div>

            <KehoppaPricee
              user={user}
              logoutHandler={logoutHandler}
              cardanoHandler={cardanoHandler}
              tronHandler={tronHandler}
            />
          </div>
        ) : (
          ""
        )}

        {/* level one */}
        {user.level === "1" ? (
          <div class="">
            <div
              id="popup"
              style={{
                backgroundColor: "rgba(26,26,26, .5)",
                zIndex: "999999",
                width: "100%",
              }}
              class="bg-gray-100 justify-center px-4 py-8 xl:py-8 xl:px-0 items-center flex-col flex fixed top-0 left-0 bottom-0 right-0"
            >
              <div id="popup-content" class="bg-white w-auto flex xl:max-w-3xl">
                <div id="pop-cont" class="flex flex-col p-6">
                  <div class="flex items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-8 turn w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div class="font-bold w-full pt-4 pl-2 xl:pl-0 pb-2 xl:text-center text-xl xl:text-3xl">
                      Your Hazmick account is almost ready
                    </div>
                  </div>
                  <div>
                    <p class="text-center py-4 px-4 xl:px-0 text-base xl:text-lg">
                      Your Hazmick account set up will take up to 12 hours after
                      membership payment, Hazmick will email you when your
                      account is ready
                    </p>
                  </div>

                  <div></div>
                </div>
              </div>
            </div>

            <KehoppaPricee user={user} />
          </div>
        ) : (
          ""
        )}

        {/* Level Two */}
        {user.level === "2" ? (
          <div class="">
            <div
              id="popup"
              style={{
                backgroundColor: "rgba(26,26,26, .5)",
                zIndex: "999999",
                width: "100%",
              }}
              class="bg-gray-100 justify-center px-4 py-8 xl:py-8 xl:px-0 items-center flex-col flex fixed top-0 left-0 bottom-0 right-0"
            >
              <div
                id="popup-content"
                class="bg-white w-auto overflow-y-scroll flex xl:max-w-3xl"
              >
                <div id="pop-cont" class="flex flex-col py-4">
                  <div>
                    <h2 class="font-bold py-4 text-center text-2xl xl:text-4xl">
                      Choose a plan to enjoy more features!
                    </h2>
                  </div>
                  <div>
                    <p class="text-center py-4 px-3 xl:px-0 xl:text-xl">
                      You’re only a few clicks away from automating your
                      portfolio
                    </p>
                  </div>
                  <div class="flex justify-center items-center pt-4 pb-8">
                    <Link
                      href="/dashboard/settings"
                      class="bg-blue-600 xl:text-xl py-3 rounded-md px-5 font-bold text-white w-auto"
                    >
                      Choose a Plan
                    </Link>
                  </div>

                  <div
                    id="sub-cont"
                    class="flex flex-col xl:flex-row xl:px-8 flex-wrap"
                  >
                    <div class="xl:w-1/2 flex my-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 mr-4 ml-8 text-blue-700 w-8"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p>Backtest Custom Portfolio</p>
                    </div>
                    <div class="xl:w-1/2 flex my-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 mr-4 ml-8 text-blue-700 w-8"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p>Periodic & Threshold Rebalancing</p>
                    </div>
                    <div class="xl:w-1/2 flex my-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 mr-4 ml-8 text-blue-700 w-8"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p>Detailed Trade router Analysis</p>
                    </div>
                    <div class="xl:w-1/2 flex my-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 mr-4 ml-8 text-blue-700 w-8"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p>Create Custom Indexes</p>
                    </div>
                    <div class="xl:w-1/2 flex my-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 mr-4 ml-8 text-blue-700 w-8"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p>Earn Money as a Social Leader</p>
                    </div>
                    <div class="xl:w-1/2 flex my-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 mr-4 ml-8 text-blue-700 w-8"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p>Custom Portfolio Builde</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <KehoppaPricee
              user={user}
              cardanoHandler={cardanoHandler}
              tronHandler={tronHandler}
              logoutHandler={logoutHandler}
            />
          </div>
        ) : (
          ""
        )}

        {/*  Level Three */}
        {user.level === "3" ? (
          <div>
            {success && (
              <div
                id="pop-up"
                style={{ zIndex: 999997, borderTopWidth: "6px" }}
                class="fixed  border-green-600 shadow-xl bg-white mt-28 mr-4 max-w-xs top-0 right-0 py-4 px-3"
              >
                <h2 class="font-bold tracking-wider">Coin Selection</h2>
                <p class="text-sm text-left tracking-wider pt-1">{success}</p>
              </div>
            )}

            {user.coin ? (
              ""
            ) : (
              <div
                id="popup"
                style={{
                  backgroundColor: "rgba(26,26,26, .5)",
                  zIndex: "999995",
                  width: "100%",
                }}
                class="bg-gray-100 px-6 justify-center items-center flex-col flex fixed top-0 left-0 bottom-0 right-0"
              >
                <div id="popup-content" class="bg-white rounded-2xl w-auto flex max-w-xl">
                  <div id="pop-cont" class="flex flex-col px-4 py-8">
                    <div>
                      <h2 class="font-bold py-4 text-center text-2xl lg:text-4xl">
                        Welcome to Hazmick
                      </h2>
                    </div>
                    <div>
                      <p class="text-center pt-4 leading-6 lg:leading-8 opacity-80 lg:opacity-100">
                        Please choose one coin being ADA Cardano or Tron to get
                        started, either one will give the same ROI
                      </p>
                    </div>
                    <div class="flex py-8 justify-center items-center">
                      <div class=" w-80 ">
                        <div class=" text-left pb-4">
                          <p>Pick One:</p>
                        </div>
                        <button
                          onClick={cardanoHandler}
                          class="flex w-full px-4 hover:bg-gray-200 bg-gray-100 py-3 items-center"
                        >
                          <p>Link Cardano</p>
                        </button>
                        <button
                          onClick={tronHandler}
                          class="flex w-full px-4 hover:bg-gray-200 bg-gray-100 py-3 mt-6 items-center"
                        >
                          <p>Link Tron</p>
                        </button>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <KehoppaPrice
              user={user}
              cardanoHandler={cardanoHandler}
              tronHandler={tronHandler}
              logoutHandler={logoutHandler}
            />
          </div>
        ) : (
          "loading..."
        )}
      </main>
    </>
  );
};

export default Dashboard;
