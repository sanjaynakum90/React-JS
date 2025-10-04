import React from 'react'

const Card = () => {
    return (
        <div className='container'>
            <div className='container mx-auto px-4 '>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-28'>
                    {[...Array(8)].map((_, index) => (
                        <div
                            key={index}
                            className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl hover:shadow-2xl transition-transform duration-300 hover:-translate-y-1 overflow-hidden group"
                        >
                            <a href="#" className="block overflow-hidden">
                                <img
                                    className="rounded-t-2xl w-full h-52 object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    src={`https://source.unsplash.com/random/800x600?technology=${index}`}
                                    alt="Tech News"
                                />
                                <div className="absolute top-4 left-4 bg-black/50 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                                    Trending
                                </div>
                            </a>
                            <div className="p-6 space-y-4">
                                <a href="#">
                                    <h5 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors duration-300">
                                        Latest Technology Trends {new Date().getFullYear()}
                                    </h5>
                                </a>
                                <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                                    Discover the cutting-edge innovations and breakthrough technologies shaping our future.
                                </p>
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 focus:ring-4 focus:ring-blue-300"
                                >
                                    Read more
                                    <svg
                                        className="w-4 h-4 rtl:rotate-180"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 5h12m0 0L9 1m4 4L9 9"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Download Section */}
                <div className="p-8 mt-12 text-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-xl">
                    <h5 className="mb-4 text-4xl font-bold text-white">Work seamlessly anywhere</h5>
                    <p className="mb-8 text-lg text-white/90">
                        Experience the future of productivity with our cross-platform application.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <a href="#" className="flex items-center px-6 py-3 bg-black/20 hover:bg-black/30 rounded-lg backdrop-blur-sm transition-all duration-300">
                            <svg className="me-3 w-8 h-8" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"></svg>
                            <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />


                            <a />
                            <div className="text-left text-white">
                                <div className="text-xs">Download on the</div>
                                <div className="text-sm font-semibold">App Store</div>
                            </div>
                        </a>
                        <a href="#" className="flex items-center px-6 py-3 bg-black/20 hover:bg-black/30 rounded-lg backdrop-blur-sm transition-all duration-300">
                            <svg className="me-3 w-8 h-8" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                            </svg>
                            <div className="text-left text-white">
                                <div className="text-xs">Get it on</div>
                                <div className="text-sm font-semibold">Google Play</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Card