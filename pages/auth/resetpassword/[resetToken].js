import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt from "jsonwebtoken";

import Head from 'next/head'
import image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ResetPassword = ({}) => {
  let router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authUser")) {
      window.location.replace("/dashboard");
    }
  }, []);

  const resetPasswordHandler = async (e) => {
    e.preventDefault();

    document.getElementById("deed2").style.display = "flex";
    document.getElementById("deed1").style.display = "none";

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      setError("Password doesn't match");
      setTimeout(() => {
        setError("");
      }, 5000);
    } else {
      try {

        let token  = router.query.resetToken;

        if (token) {
          const { data } = await axios.put(
          `https://upset-bee-overcoat.cyclic.app/api/auth/resetpassword/${token}`,
          { password },
          config
        );
        setSuccess(data.message);
        setTimeout(() => {
          setSuccess("");
          router.push("/auth/login");
        }, 5000);
      }
        } catch (error) {
        setError(error.response.data.error);

      document.getElementById("deed2").style.display = "none";
      document.getElementById("deed1").style.display = "block";
      }
    }
  };

  return (
    <>
    <Head>
      <title>Reset Password | Hazmick</title>
      <meta name="description" content="Hazmick - World Class Automated Crypto Trading Bot. Copy traders, manage all your exchange accounts, use market-making and exchange/market arbitrage and simulate or backtest your trading. Trading, Portfolio, Arbitrage, Signals, Bots - everything you need to easily manage crypto assets, within one interface." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    <div class="xl:pt-36 pt-24 pb-16">
      {error && (
        <div
          id="pop-up"
          style={{ zIndex: 9999, borderTopWidth: "6px" }}
          class="fixed  border-red-600 shadow-xl bg-white mt-24 xl:mt-28 mr-4 max-w-xs top-0 right-0 py-2 px-3"
        >
          <h2 class="font-bold tracking-wider">Forgot Password</h2>
          <p class="text-sm text-left tracking-wider pt-1">{error}</p>
        </div>
      )}
      {success && (
        <div
          id="pop-up"
          style={{ zIndex: 9999, borderTopWidth: "6px" }}
          class="fixed  border-green-600 shadow-xl bg-white mt-24 xl:mt-28 mr-4 max-w-xs top-0 right-0 py-2 px-3"
        >
          <h2 class="font-bold tracking-wider">Forgot Password</h2>
          <p class="text-sm text-left tracking-wider pt-1">{success}</p>
        </div>
      )}

      <form
        onSubmit={resetPasswordHandler}
        class="lg:px-28 px-6 text-gray-900 py-8 max-w-4xl mx-auto"
      >
        <h3 class="text-gray-900 pb-8 text-2xl lg:text-3xl text-center uppercase font-extrabold">
          Reset Password
        </h3>
        <div class="py-4 flex flex-col">
          <label class="uppercase font-extrabold tracking-wide text-sm">
            Password:{" "}
          </label>
          <input
            style={{ border: "1px solid #e1e1e1" }}
            class="p-2 my-2 outline-none focus:outline-none rounded text-gray-700"
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
        </div>
        <div class="py-4 flex flex-col">
          <label class="uppercase font-extrabold tracking-wide text-sm">
            Confirm Password:{" "}
          </label>
          <input
            style={{ border: "1px solid #e1e1e1" }}
            class="p-2 my-2 outline-none focus:outline-none rounded text-gray-700"
            type="password"
            id="confirmpassword"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            required
          />
        </div>
        <div class="flex justify-center pt-3"><button id="deed1" class="border-0 py-3 px-5 cursor-pointer uppercase font-bold text-sm text-white bg-blue-700">
                Reset Password
              </button>
              <div id="deed2" class="hidden ptt text-white px-3 items-center justify-center cursor-pointer font-bold bg-blue-700">
                <p class="px-3 uppercase font-bold text-sm">
                Reset Password</p>
                <svg class="turn w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
              </div></div>
      </form>
    </div>
    </>
  );
};

export default ResetPassword;
