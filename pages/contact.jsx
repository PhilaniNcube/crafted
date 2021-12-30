import React from 'react';
function contact() {
  return (
    <div className="container mx-auto pt-16">
      <div className="xl:flex lg:flex">
        <div className="xl:w-3/5 lg:w-3/5 bg-gray-200 h-full">
          <form
            id="contact"
            className="bg-white py-5 px-8"
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <h1 className="xl:text-4xl text-3xl text-amber-600 font-extrabold mb-8">
              Send Us A Message
            </h1>

            <input
              type="hidden"
              name="apikey"
              value="e729bee8-0b5b-4fdf-8f15-be8fb4bd38b0"
            ></input>
            <div className="block xl:flex w-full flex-wrap justify-between mb-6">
              <div className="w-2/4 max-w-xs mb-6 xl:mb-0">
                <div className="flex flex-col">
                  <label
                    htmlFor="full_name"
                    className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    required
                    id="full_name"
                    name="full_name"
                    type="text"
                    className="focus:outline-none focus:border focus:border-amber-200 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  />
                </div>
              </div>
              <div className="w-2/4 max-w-xs">
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                  >
                    Email
                  </label>
                  <input
                    required
                    id="email"
                    name="email"
                    type="email"
                    className="focus:outline-none focus:border focus:border-amber-200 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full flex-wrap">
              <div className="w-2/4 max-w-xs">
                <div className="flex flex-col">
                  <label
                    htmlFor="phone"
                    className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                  >
                    Phone
                  </label>
                  <input
                    required
                    id="phone"
                    name="phone"
                    type="tel"
                    className="focus:outline-none focus:border focus:border-amber-200 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-full sm:w-1/2 mt-6">
              <div className="flex flex-col">
                <label
                  className="text-sm font-semibold text-gray-800 mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="text-sm border-gray-300 border mb-6 rounded py-2 outline-none resize-none px-3 xl:w-11/12"
                  rows={5}
                  id="message"
                  defaultValue={''}
                />
              </div>
              <button
                type="submit"
                className="focus:outline-none bg-amber-600 mb-1 transition duration-150 ease-in-out hover:bg-amber-800 rounded text-white px-8 py-3 text-sm leading-6"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="xl:w-2/5 lg:w-2/5 py-16 flex items-center">
          <div className="w-5/6 mx-auto">
            <p className="text-base text-gray-600 tracking-wide font-normal">
              14 Nondlwana Street, Zwide, Gqeberha <br />
              (formerly Port Elizabeth, South Africa)
            </p>
            <div className="flex flex-col space-y-2 justify-between mt-6 mb-3">
              <div className="flex items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-mail"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#718096"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <rect x={3} y={5} width={18} height={14} rx={2} />
                    <polyline points="3 7 12 13 21 7" />
                  </svg>
                </div>
                <p className="pl-2 text-gray-600 text-sm font-normal">
                  info@craftedphotographs.com
                </p>
              </div>
              <div className="flex items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-phone-call"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#718096"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M4 4h5l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v5a1 1 0 0 1 -1 1a16 16 0 0 1 -16 -16a1 1 0 0 1 1 -1" />
                    <path d="M15 7a2 2 0 0 1 2 2" />
                    <path d="M15 3a6 6 0 0 1 6 6" />
                  </svg>
                </div>
                <p className="pl-2 text-gray-600 text-sm font-normal">
                  078 307 9194
                </p>
              </div>
              <div className="flex items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-phone-call"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1"
                    stroke="#718096"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <p className="pl-2 text-gray-600 text-sm font-normal">
                  @crafted.photographs
                </p>
              </div>
            </div>
            <iframe
              className="w-full rounded shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.402037867453!2d25.563391614922924!3d-33.87929822703458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e7ad682fb75fdad%3A0x6cb45db8774406a8!2s14%20Nodlwana%20St%2C%20Zwide%203%2C%20Ibhayi%2C%206205!5e0!3m2!1sen!2sza!4v1640853569321!5m2!1sen!2sza"
              width={425}
              height={250}
              style={{
                border: 0,
              }}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default contact;
