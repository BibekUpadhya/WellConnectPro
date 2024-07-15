import React from 'react'
import { Link } from 'react-router-dom'

const Payments = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Payment Page</h2>
      <form className="space-y-6">
      <div>
        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
          Card Number
        </label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
          Expiry Date
        </label>
        <input
          type="text"
          id="expiryDate"
          name="expiryDate"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
          CVC
        </label>
        <input
          type="text"
          id="cvc"
          name="cvc"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="nameOnCard" className="block text-sm font-medium text-gray-700">
          Name on Card
        </label>
        <input
          type="text"
          id="nameOnCard"
          name="nameOnCard"
          className="mt-1 mb-5 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <Link
      to="/checkout-success"
        className="w-full bg-indigo-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Pay
      </Link>
    </form>
    </div>
  </div>
  )
}

export default Payments