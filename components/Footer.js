import image from 'next/image'
import Link from 'next/link'
import footer1 from "../public/images/fb.svg";
import footer2 from "../public/images/tweet.svg";
import footer3 from "../public/images/yoube.svg";
import footer4 from "../public/images/in.svg";
import footer5 from "../public/images/ig.svg";

const Footer = () => {
  return (
    <div>
      <div
        id="footer"
        style={{ backgroundColor: "rgba(249,250,251,1)" }}
        class="xl:px-56 px-6 pt-12 lg:pt-24 pb-4 lg:pb-8"
      >
        <div
          id="footer-1"
          class="flex flex-wrap lg:flex-row flex-col justify-between items-start"
        >
          <div class="flex flex-col py-3 lg:py-0">
            <div>
              <h2 class=" text-base font-bold tracking-wide ">About</h2>
            </div>
            <div class="py-4 font-medium tracking-wider leading-9 text-sm">
              <Link class="block" href="/features">
                Features
              </Link>
              <Link class="block" href="/dashboard/settings">
                Pricing
              </Link>
              <Link class="block" href="/about-us">
                Company
              </Link>
              <Link class="block" href="/careers">
                Careers
              </Link>
              <Link class="block" href="/press">
                Press
              </Link>
            </div>
          </div>
          <div class="flex flex-col py-3 lg:py-0">
            <div>
              <h2 class=" text-base font-bold tracking-wide ">Learn</h2>
            </div>
            <div class="py-4 font-medium tracking-wider leading-9 text-sm">
              <p>Blog</p>
              <p>Youtube</p>
              <p>Help</p>
              <Link class="block" href="/social-trading">
                Social Trading
              </Link>
            </div>
          </div>
          <div class="flex flex-col py-3 lg:py-0">
            <div>
              <h2 class=" text-base font-bold tracking-wide ">Resources</h2>
            </div>

            <div class="py-4 font-medium tracking-wider leading-9 text-sm">
              <p>Whitepaper</p>
              <Link class="block" href="/referral-program">
                Referral Program
              </Link>
            </div>
          </div>
          <div class="flex flex-col py-3 lg:py-0">
            <div>
              <Link
                href="/contact-us"
                class=" text-base font-bold tracking-wide block"
              >
                Contact
              </Link>
            </div>
            <div class="py-4 font-medium tracking-wider leading-9 text-sm">
              <p>support@hazmick.xyz</p>
              <Link class="block" href="/privacy-and-policy">
                Privacy Policy
              </Link>
              <Link class="block" href="/disclaimer">
                Disclaimer
              </Link>
              <Link class="block" href="/terms-of-services">
                Terms and services
              </Link>
            </div>
          </div>
        </div>

        <div id="footer-3" class="pt-5 lg:pt-10 pb-10">
          <div class="font-medium tracking-wider text-center text-sm">
            <p>© 2020-2023 Hazmick Labs Inc. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
