import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="text-white  bg-black py-10">
      <div className="flex relative z-10 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="space-y-8">
            <div>
              <Image
                src="/logo.png" // Path to your image
                height="80"
                width="150"
                quality={100} // Optional: define the quality of the image
                alt="Background Image" // Optional: define a meaningful alt attribute
              />
            </div>
            <div className="flex gap-12">
              <div>
                <h2 className="text-lg font-bold mb-3">Navigation</h2>
                <ul>
                  <li>
                    <a href="#" className="hover:underline">
                      Promotions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Sports
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Live Betting
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Casino
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      News
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-bold mb-3">Legal</h2>
                <ul>
                  <li>
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Responsible Gambling
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      General Rules
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Betting Rules
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-bold mb-3">Contact us</h2>
                <ul>
                  <li>
                    <a href="#" className="hover:underline">
                      info@linepros.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-lg text-gray-500">
              &copy; 2024 - All Rights Reserved. Only 18+ individuals allowed to
              register.
            </p>
          </div>
          <div className="flex flex-col justify-end space-y-8">
            <div className="font-bold text-xl">Newsletter</div>

            <div>
              <div className="mb-3">
                <span className="font-black ">200% bonus</span> is simply dummy
                text of the printing and typesetting industry.
              </div>
              <div className="w-full rounded-lg p-2 border-2 border-white flex">
                <input className="w-full bg-transparent outline-none" />
                <button className="text-white px-4">Subscribe</button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 6l6 6l-6 6" />
                </svg>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex gap-8">
                <div className="font-bold text-2xl">Follow us</div>
                <div className="flex gap-3">
                  <Link href="#">
                    <Image
                      src="./facebook.svg"
                      height="20"
                      width="20"
                      alt="facebook icon"
                    />
                  </Link>
                  <Link href="#">
                  <Image
                      src="./instra.svg"
                      height="36"
                      width="36"
                      alt="facebook icon"
                    /></Link>
                  <Link href="#">
                  <Image
                      src="./youtube.svg"
                      height="36"
                      width="48"
                      alt="facebook icon"
                    /></Link>
                </div>
              </div>
              <div className="font-black text-red-700 text-3xl">18+</div>
            </div>
          </div>
        </div>

        {/* <div className="flex justify-between items-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h2 className="text-lg font-bold">Navigation</h2>
            <ul>
              <li><a href="#" className="hover:underline">Promotions</a></li>
              <li><a href="#" className="hover:underline">Sports</a></li>
              <li><a href="#" className="hover:underline">Live Betting</a></li>
              <li><a href="#" className="hover:underline">Casino</a></li>
              <li><a href="#" className="hover:underline">News</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold">Legal</h2>
            <ul>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Responsible Gambling</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">General Rules</a></li>
              <li><a href="#" className="hover:underline">Betting Rules</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold">Contact Us</h2>
            <p>info@linepros.com</p>
          </div>
        </div>
        <h1 className="text-4xl font-bold">
          200% bonus is simply dummy text of the printing and typesetting industry.
        </h1>
        <button className="bg-red-600 px-6 py-2 text-white font-bold rounded flex items-center">
          CONTACT US
          <svg className="ml-2" fill="currentColor" viewBox="0 0 20 20" width="20" height="20">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0L17 8.586a1 1 0 010 1.414l-5.293 5.293a1 1 0 01-1.414-1.414L13.586 10H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      <div className="bg-black bg-opacity-75 p-6 mt-6">
        
        <div className="mt-6">
          <h2 className="text-lg font-bold">Newsletter</h2>
          <p className="mb-2">200% bonus is simply dummy text of the printing and typesetting industry.</p>
          <div className="flex">
            <input type="email" className="flex-1 px-4 py-2 border border-gray-400 rounded-l" placeholder="Email address" />
            <button className="bg-red-600 px-4 py-2 text-white font-bold rounded-r">Subscribe</button>
          </div>
        </div>
        <div className="flex justify-between items-center mt-6">
          <p className="text-sm">&copy; 2024 - All Rights Reserved. Only 18+ individuals allowed to register.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-gray-400"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-gray-400"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div> */}
      </div>
    </div>
  );
}

export default Footer;
