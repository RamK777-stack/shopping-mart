import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-20 bottom-0 bg-gray-100 text-white py-8 px-2 lg:px-12 md:px-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8 text-left">
        {/* Logo and Description */}
        <div>
          <a href="/" className="text-2xl font-extrabold text-black">
            SHOP.CO
          </a>
          <p className="text-gray-500 mt-3">
            We have clothes that suit your style and make you proud to wear them, from women to men.
          </p>
          {/* Social icons */}
          <div className="flex space-x-4 mt-5">
            <a href="#"><img src="images/icons/twitter.svg" alt="Twitter" /></a>
            <a href="#"><img src="images/icons/facebook.svg" alt="Facebook" /></a>
            <a href="#"><img src="images/icons/instagram.svg" alt="Instagram" /></a>
            <a href="#"><img src="images/icons/github.svg" alt="GitHub" /></a>
          </div>
        </div>

        {/* Company Section */}
        <div className="flex flex-col space-y-2">
          <h5 className="text-black mb-3">COMPANY</h5>
          <a href="/" className="text-gray-500 text-sm">About</a>
          <a href="/" className="text-gray-500 text-sm">Features</a>
          <a href="/" className="text-gray-500 text-sm">Works</a>
          <a href="/" className="text-gray-500 text-sm">Career</a>
        </div>

        {/* Help Section */}
        <div className="flex flex-col space-y-2">
          <h5 className="text-black mb-3">HELP</h5>
          <a href="/" className="text-gray-500 text-sm">Customer Support</a>
          <a href="/" className="text-gray-500 text-sm">Delivery Details</a>
          <a href="/" className="text-gray-500 text-sm">Terms & Conditions</a>
          <a href="/" className="text-gray-500 text-sm">Privacy Policy</a>
        </div>

        {/* FAQ Section */}
        <div className="flex flex-col space-y-2">
          <h5 className="text-black mb-3">FAQ</h5>
          <a href="/" className="text-gray-500 text-sm">Account</a>
          <a href="/" className="text-gray-500 text-sm">Manage Deliveries</a>
          <a href="/" className="text-gray-500 text-sm">Orders</a>
          <a href="/" className="text-gray-500 text-sm">Payments</a>
        </div>

        {/* Resources Section */}
        <div className="flex flex-col space-y-2">
          <h5 className="text-black mb-3">RESOURCES</h5>
          <a href="/" className="text-gray-500 text-sm">Free eBooks</a>
          <a href="/" className="text-gray-500 text-sm">Development Tutorial</a>
          <a href="/" className="text-gray-500 text-sm">How to - Blog</a>
          <a href="/" className="text-gray-500 text-sm">YouTube Playlist</a>
        </div>
      </div>

      <div className='mt-12'>
        <div className='border-b-2 border-gray-200'></div>
      </div>

      <div className='flex flex-col lg:flex-row justify-between space-y-5 mt-5 px-3 lg:px-5'>
        <p className="text-sm text-gray-500 self-center">
          &copy; {new Date().getFullYear()} Shop.co. All rights reserved.
        </p>
        <div className='flex'>
          <img src="images/icons/visa-badge.svg" className='h-14' alt="Twitter" />
          <img src="images/icons/master-badge.svg" className='h-14' alt="Twitter" />
          <img src="images/icons/apple-badge.svg" className='h-14' alt="Twitter" />
          <img src="images/icons/gpay-badge.svg" className='h-14' alt="Twitter" />
        </div>
      </div>
    </footer>

  )
}
