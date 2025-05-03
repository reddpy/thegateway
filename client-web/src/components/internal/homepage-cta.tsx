import Image from "next/image";

const HomePageCTA = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-4/5 md:w-3/4 lg:w-2/3 mx-auto mt-10">
        <div className="bg-gradient-to-br from-[#4169E2] to-[#2A4CB9] rounded-2xl overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-3/5 p-8 lg:p-12">
              <div className="flex items-center mb-6">
                <Image
                  src="/oneocular-svg/ISO W.svg"
                  height={20}
                  width={40}
                  alt="OneOcular"
                />
                <h3 className="ml-2 text-white text-2xl font-bold">
                  360° View of your AI
                </h3>
              </div>

              <h2 className="text-white text-4xl font-extrabold mb-4 leading-tight">
                Know-Your-Agent (KYA) Compliance & Agent Observability
              </h2>

              <p className="text-blue-100 text-lg mb-8">
                Gain complete visibility into how AI agents interact with your
                data and systems. Our KYA platform provides real-time
                monitoring, comprehensive audit trails, and automated compliance
                checks to ensure your AI operations meet regulatory requirements
                and internal governance standards.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="mailto:karan@oneocular.com">
                  <button className="bg-white hover:bg-blue-50 text-[#4169E2] font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50">
                    Request Demo
                  </button>
                </a>
                {/* <button className="bg-transparent hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg border-2 border-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50">
                  Sign Up
                </button> */}
              </div>
            </div>

            <div className="w-full lg:w-2/5 relative p-8 flex items-center justify-center">
              <div className="relative z-10 bg-blue-700 bg-opacity-70 backdrop-filter backdrop-blur-sm p-6 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105">
                <div className="flex items-center mb-4">
                  <span className="flex h-3 w-3 mr-2">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <p className="text-white font-semibold">
                    Real-time Monitoring
                  </p>
                </div>

                <ul className="space-y-3 text-blue-100">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-green-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Automated Compliance Checks
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-green-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Risk Assessment & Mitigation
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-green-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Regulatory Updates
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-green-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Intelligent Reporting
                  </li>
                </ul>

                <div className="mt-6 pt-4 border-t border-blue-500 text-white">
                  <div className="flex items-center">
                    <span className="text-2xl font-bold">24/7</span>
                    <span className="ml-2 text-sm">
                      continuous monitoring & alerts
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute top-0 right-0 w-full h-full">
                <svg
                  className="absolute right-0 top-0 h-full w-full text-blue-500 opacity-20"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="75"
                    cy="50"
                    r="20"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                  <circle
                    cx="75"
                    cy="50"
                    r="15"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                  <circle
                    cx="75"
                    cy="50"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                  <circle
                    cx="75"
                    cy="50"
                    r="5"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                  <circle
                    cx="25"
                    cy="50"
                    r="20"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                  <circle
                    cx="25"
                    cy="50"
                    r="15"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                  <circle
                    cx="25"
                    cy="50"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                  <circle
                    cx="25"
                    cy="50"
                    r="5"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="75"
                    y1="50"
                    x2="25"
                    y2="50"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-blue-900 p-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-100 mb-4 md:mb-0">
              Start ensuring AI agent transparency and compliance today
            </p>
            <div className="flex items-center space-x-8">
              <div className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity">
                <svg
                  className="h-full w-auto text-white"
                  viewBox="0 0 100 28"
                  fill="currentColor"
                >
                  <path d="M10 5C7.23858 5 5 7.23858 5 10V18C5 20.7614 7.23858 23 10 23H25C27.7614 23 30 20.7614 30 18V10C30 7.23858 27.7614 5 25 5H10Z" />
                  <path d="M50 5C47.2386 5 45 7.23858 45 10V18C45 20.7614 47.2386 23 50 23H65C67.7614 23 70 20.7614 70 18V10C70 7.23858 67.7614 5 65 5H50Z" />
                  <path d="M90 5C87.2386 5 85 7.23858 85 10V18C85 20.7614 87.2386 23 90 23H95C97.7614 23 100 20.7614 100 18V10C100 7.23858 97.7614 5 95 5H90Z" />
                </svg>
              </div>
              <div className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity">
                <svg
                  className="h-full w-auto text-white"
                  viewBox="0 0 100 28"
                  fill="currentColor"
                >
                  <rect x="5" y="5" width="90" height="18" rx="5" />
                </svg>
              </div>
              <div className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity">
                <svg
                  className="h-full w-auto text-white"
                  viewBox="0 0 100 28"
                  fill="currentColor"
                >
                  <circle cx="17" cy="14" r="12" />
                  <rect x="35" y="5" width="60" height="18" rx="9" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageCTA;
