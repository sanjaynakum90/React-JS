import { Fragment } from 'react'

const Card = () => {
    return (
        <div className='container'>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-28'>
                    {[1, 2, 3, 4].map((item, index) => (
                        <div key={index} className="relative group duration-500 cursor-pointer overflow-hidden text-gray-50 text-gray-800 bg-lime-400 rounded-2xl hover:duration-700">
                            <div className="w-100 h-72 bg-lime-400 text-gray-800">
                                <div className="flex flex-row justify-between">
                                    <svg className="fill-current stroke-current w-8 h-8 p-2 hover:bg-lime-200 rounded-full m-1" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
                                        <path d="M15.8,32.9V15.8m0,0H32.9m-17.1,0L37.2,37.2m47-4.3V15.8m0,0H67.1m17.1,0L62.8,37.2m-47,29.9V84.2m0,0H32.9m-17.1,0L37.2,62.8m47,21.4L62.8,62.8M84.2,84.2V67.1m0,17.1H67.1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
                                    </svg>
                                    <svg className="fill-current stroke-current w-8 h-8 p-2 m-1 hover:bg-lime-200 rounded-full" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
                                        <path className="svg-stroke-primary" d="M50,17.4h0M50,50h0m0,32.6h0M50,22a4.7,4.7,0,1,1,4.7-4.6A4.7,4.7,0,0,1,50,22Zm0,32.7A4.7,4.7,0,1,1,54.7,50,4.7,4.7,0,0,1,50,54.7Zm0,32.6a4.7,4.7,0,1,1,4.7-4.7A4.7,4.7,0,0,1,50,87.3Z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
                                    </svg>
                                </div>
                            </div>
                            <div className="absolute bg-gray-50 -bottom-24 w-100 p-3 flex flex-col gap-1 group-hover:bottom-0 group-hover:duration-600 duration-500">
                                <span className="text-lime-400 font-bold text-xs">TAILWIND</span>
                                <span className="text-gray-800 font-bold text-3xl">Cheat Sheet {item}</span>
                                <p className="text-neutral-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                            <svg className="me-3 w-8 h-8" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" />
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
        </div>
    )
}

export default Card