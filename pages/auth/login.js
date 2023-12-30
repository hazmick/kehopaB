import Head from 'next/head'
import image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useState,useEffect, useNavigate} from "react";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import axios from "axios";

const Login = ({ }) => {

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authUser")) {
      window.location.replace("/dashboard");
    }
  }, []);

  const loginHandler = async (e) => {
    e.preventDefault();

    document.getElementById("deed2").style.display = "flex";
    document.getElementById("deed1").style.display = "none";

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "https://upset-bee-overcoat.cyclic.app/api/auth/login",
        { email, password },
        config
      );

      localStorage.setItem("authToken", data.Token);
      localStorage.setItem("authUser", JSON.stringify(data.user));
      

      setSuccess("Login successful! You're being redirected to your dashboard");
      setEmail("");
      setPassword("");
      setTimeout(() => {
        setSuccess("");
        router.push("/dashboard");
      }, 5000);
    } catch (error) {
      setError(error.response.data.error);

      setTimeout(() => {
      setPassword("");
      document.getElementById("deed2").style.display = "none";
      document.getElementById("deed1").style.display = "block";
      router.push("/auth/login");
    }, 5000);
    }
  };

  return (
    <>
    <Head>
      <title>Login | Hazmick</title>
      <meta name="description" content="Hazmick - World Class Automated Crypto Trading Bot. Copy traders, manage all your exchange accounts, use market-making and exchange/market arbitrage and simulate or backtest your trading. Trading, Portfolio, Arbitrage, Signals, Bots - everything you need to easily manage crypto assets, within one interface." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    <div>
      {error && (
        <div
          id="pop-up"
          style={{ zIndex: 9999, borderTopWidth: "6px" }}
          class="fixed border-red-600 shadow-xl bg-white mt-24 xl:mt-28 mr-4 max-w-xs top-0 right-0 py-2 px-3"
        >
          <h2 class="font-bold tracking-wider">Login Failed</h2>
          <p class="text-sm text-left tracking-wider pt-1">{error}</p>
        </div>
      )}
      {success && (
        <div
          id="pop-up"
          style={{ zIndex: 9999, borderTopWidth: "6px" }}
          class="fixed  border-green-600 shadow-xl bg-white mt-24 xl:mt-28 mr-4 max-w-xs top-0 right-0 py-2 px-3"
        >
          <h2 class="font-bold tracking-wider">Login Successful</h2>
          <p class="text-sm text-left tracking-wider pt-1">{success}</p>
        </div>
      )}

      <div class="lg:pt-36 pt-28 text-gray-900 lg:pb-8 text-2xl lg:text-3xl text-center uppercase font-extrabold">
        <h2>Log into an account</h2>
      </div>

      <form
        onSubmit={loginHandler}
        class="lg:px-28 px-6 text-gray-900 py-8 max-w-3xl mx-auto"
      >
        <div class="py-4 flex flex-col">
          <label class="uppercase font-extrabold tracking-wide text-sm">
            Email:{" "}
          </label>
          <input
            style={{ border: "1px solid #e1e1e1" }}
            class="p-2 my-2 outline-none focus:outline-none rounded text-gray-700"
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </div>
        <div class="py-4 flex flex-col">
          <div class="flex justify-between">
            <label class="uppercase font-extrabold tracking-wide text-sm">
              Password:{" "}
            </label>
            <Link
              class="underline text-sm text-blue-600"
              href="/auth/forgotpassword"
            >
              Forgot Password
            </Link>
          </div>
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
        <div class="py-8 flex flex-col lg:flex-row justify-between lg:items-end">
          <button id="deed1" class="border-0 py-3 px-5 cursor-pointer uppercase font-bold text-sm text-white bg-blue-700">
            Login
          </button>
          <div id="deed2" class="hidden ptt text-white px-3 items-center justify-center cursor-pointer font-bold bg-blue-700">
            <p class="px-3 uppercase font-bold text-sm">
            Login</p>
            <svg class="turn w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
          </div>
          <Link
            href="/auth/register"
            class="underline pt-4 lg:pt-0 text-blue-300 cursor-pointer font-bold hover:text-blue-600"
          >
            Don't have an account ? Sign up
          </Link>
        </div>
      </form>
    </div>
    <Footer />
    </>
  );
};

export default Login;
