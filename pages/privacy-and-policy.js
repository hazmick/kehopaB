import Head from 'next/head'
import image from 'next/image'
import Link from 'next/link'

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {

  return (
    <>
    <Head>
      <title>Privacy Policy | Hazmick</title>
      <meta name="description" content="Hazmick - World Class Automated Crypto Trading Bot. Copy traders, manage all your exchange accounts, use market-making and exchange/market arbitrage and simulate or backtest your trading. Trading, Portfolio, Arbitrage, Signals, Bots - everything you need to easily manage crypto assets, within one interface." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
      <div class="xl:pt-36 pt-24 px-4 xl:px-20 pb-8">
        <div class="xl:pb-12 pb-6">
          <h2 class="text-2xl font-bold tracking-wide">Privacy and Policy</h2>
        </div>

        <div class="pb-4">
          <h2 class="py-3 text-xl font-bold">Preamble</h2>
          <p class="py-3 tracking-wider leading-7 text-sm">
            Hazmick (hereafter also “We”) offers online software as a service
            (SaaS) through the website https://hazmick.io (hereafter –
            “Website”). Our software (hereafter – “Software”) enables you to
            trade and invest in cryptocurrencies by means of an automatic crypto
            trader bot – of which (solely) you control and configure the
            settings.
          </p>
          <p class="py-3 tracking-wider leading-7 text-sm">
            To provide you with our Services, we might need (and sometimes
            obliged by the law) to collect your personal data.
          </p>
          <p class="py-3 tracking-wider leading-7 text-sm">
            We strictly follow industry best practices and adhere to the rules
            set forth in the General Data Protection Regulation, OPPA, CAN-SPAM
            and COPPA.
          </p>
        </div>

        <div class="pb-4">
          <h2 class="py-3 text-xl font-bold">
            What types of personal information do we collect?
          </h2>

          <p class="py-3 tracking-wider leading-7 text-sm">
            While providing our services we collect:
          </p>

          <div class="py-3">
            <div class="flex pb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 text-blue-700 w-6"
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
              <p class="pl-4 tracking-wider text-sm">IP Address</p>
            </div>
            <div class="flex pb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 text-blue-700 w-6"
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
              <p class="pl-4 tracking-wider text-sm">Your username</p>
            </div>
            <div class="flex pb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 text-blue-700 w-6"
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
              <p class="pl-4 tracking-wider text-sm">Your e-mail address</p>
            </div>
          </div>
        </div>

        <div class="pb-4">
          <h2 class="py-3 text-xl font-bold">
            Where do we store and process data of EU citizens?
          </h2>
          <p class="py-3 tracking-wider leading-7 text-sm">
            We store and process your data on the territory of the EU. Please
            note that we identify your jurisdiction based on your IP address.
          </p>
        </div>

        <div class="pb-4">
          <h2 class="py-3 text-xl font-bold">Who is the data controller?</h2>
          <p class="py-3 tracking-wider leading-7 text-sm">Hazmick</p>
        </div>

        <div class="pb-4">
          <h2 class="py-3 text-xl font-bold">Who is the data processor?</h2>
          <p class="py-3 tracking-wider leading-7 text-sm">
            Digital Ocean, LLC
          </p>
        </div>

        <div class="pb-4">
          <h2 class="py-3 text-xl font-bold">
            Do you honor “do not track” signals?
          </h2>
          <p class="py-3 tracking-wider leading-7 text-sm">
            We do not collect any information that may identify you without your
            permission. However, we use Google Analytics on our website. If you
            want to know more about Google Analytics and its “do not track”
            policy.
          </p>
        </div>

        <div class="pb-4">
          <h2 class="py-3 text-xl font-bold">Can I modify my personal data?</h2>
          <p class="py-3 tracking-wider leading-7 text-sm">
            If you are a registered user of our Services, you can do so in your
            account settings. You may correct, delete, or modify the personal
            information you provided to us and associated with your account
          </p>
        </div>
        <div class="pb-4">
          <h2 class="py-3 text-xl font-bold">
            Do I have a right to access my data?
          </h2>
          <p class="py-3 tracking-wider leading-7 text-sm">
            In the case you are a EU citizen and want to exercise your rights
            enshrined in art. 15 of GDPR, please write us at team@Hazmick.com
          </p>
        </div>
        <div class="pb-4">
          <h2 class="py-3 text-xl font-bold">Law and Harm</h2>
          <p class="py-3 tracking-wider leading-7 text-sm">
            Notwithstanding anything to the contrary in this Privacy Policy, we
            may preserve or disclose your information if we believe that it is
            reasonably necessary to comply with a law, regulation, legal
            process, or governmental request; to protect the safety of any
            person; to address fraud, security or technical issues; or to
            protect our or our users’ rights or property. However, nothing in
            this Privacy Policy is intended to limit any legal defenses or
            objections that you may have to a government’s request for
            disclosure of your information.
          </p>
        </div>
        <div class="pb-4">
          <h2 class="py-3 text-xl font-bold">Right to be forgotten</h2>
          <p class="py-3 tracking-wider leading-7 text-sm">
            If you want to close your account and delete all information that
            would allow anyone to identify you, please write us at
            support@hazmick.xyz. Please note that such a request will also
            terminate your Hazmick account. All money stored on your account
            will be reimbursed according to our Refund Policy.
          </p>
        </div>
      </div>
      <Footer />
      </>
  );
};

export default PrivacyPolicy;
