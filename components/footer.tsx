import React from 'react'

function Footer() {
  return (
    <div className="relative bg-gray-900 text-white">
    <div className="absolute inset-0">
      {/* <Image src={bgImage} alt="Background" layout="fill" objectFit="cover" className="opacity-50" /> */}
    </div>
    <div className="relative z-10">
      <div className="flex justify-between items-center p-6">
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
      </div>
    </div>
  </div>
  )
}

export default Footer