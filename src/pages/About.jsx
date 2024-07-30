import { VscGithub } from "react-icons/vsc";
import { FaTelegram } from "react-icons/fa";

function About() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-8 lg:px-16">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10 md:text-5xl lg:text-6xl">
        About the Author
      </h1>

      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-6">
          Author{" "}
          <a
            className="text-teal-500 hover:text-teal-700 transition-colors duration-300"
            href="https://t.me/Ziyodillokhon_V"
          >
            Ziyodillokhon Valamatov
          </a>
        </h2>

        <div className="stats shadow-lg flex flex-wrap justify-center gap-6 p-6 bg-white rounded-lg">
          <div className="stat text-center p-4 bg-gray-50 rounded-lg shadow-md w-full md:w-1/3 lg:w-1/4">
            <div className="stat-title text-gray-700 font-medium">Works</div>
            <div className="stat-value text-3xl font-bold text-gray-900">
              18
            </div>
            <div className="stat-desc text-gray-600">From October to April</div>
          </div>

          <div className="stat text-center p-4 bg-gray-50 rounded-lg shadow-md w-full md:w-1/3 lg:w-1/4">
            <div className="stat-title text-gray-700 font-medium">Visited</div>
            <div className="stat-value text-3xl font-bold text-teal-500">
              40
            </div>
            <div className="stat-desc text-gray-600">↗︎ 40 (400%)</div>
          </div>

          <div className="stat text-center p-4 bg-gray-50 rounded-lg shadow-md w-full md:w-1/3 lg:w-1/4">
            <div className="stat-title text-gray-700 font-medium">
              Appreciated
            </div>
            <div className="stat-value text-3xl font-bold text-gray-900">
              10
            </div>
            <div className="stat-desc text-gray-600">↘︎ 30 (300%)</div>
          </div>
        </div>

        <ul className="timeline flex flex-col items-center gap-6 mb-10 mt-6">
          <li className="relative w-full md:w-3/4 lg:w-1/2">
            <div className="timeline-start timeline-box bg-teal-100 text-teal-800 p-4 rounded-lg">
              Get off the couch
            </div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6 text-teal-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <hr className="bg-teal-500" />
          </li>
          <li className="relative w-full md:w-3/4 lg:w-1/2">
            <hr className="bg-teal-500" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6 text-teal-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box bg-teal-100 text-teal-800 p-4 rounded-lg">
              Start learning programming
            </div>
            <hr className="bg-teal-500" />
          </li>
          <li className="relative w-full md:w-3/4 lg:w-1/2">
            <hr className="bg-teal-500" />
            <div className="timeline-start timeline-box bg-teal-100 text-teal-800 p-4 rounded-lg">
              Make the first website
            </div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6 text-teal-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <hr />
          </li>
          <li className="relative w-full md:w-3/4 lg:w-1/2">
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6 text-gray-600"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box bg-gray-100 text-gray-800 p-4 rounded-lg">
              Make a full-fledged website
            </div>
            <hr />
          </li>
          <li className="relative w-full md:w-3/4 lg:w-1/2">
            <hr />
            <div className="timeline-start timeline-box bg-gray-100 text-gray-800 p-4 rounded-lg">
              Reach the junior level
            </div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6 text-gray-600"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </li>
        </ul>

        <p className="text-center text-xl md:text-2xl text-gray-700 mb-6">
          I am a novice frontend programmer, still learning how to improve my
          work. I would be glad if you could review and rate my other work.
          <span role="img" aria-label="happy">
            ଘ(੭ˊᵕˋ)੭
          </span>
        </p>
      </div>

      <p className="text-center text-xl md:text-2xl text-teal-500 mb-6">
        You can view and evaluate my works on the following platforms:
      </p>

      <div className="flex justify-center items-center gap-6 mb-10">
        <a
          href="https://github.com/Ziyodilloxon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <VscGithub className="w-8 h-8 text-gray-800 hover:text-teal-500 transition-colors duration-300" />
        </a>
        <a
          href="https://t.me/Ziyodillokhon_V"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegram className="w-8 h-8 text-gray-800 hover:text-teal-500 transition-colors duration-300" />
        </a>
      </div>
    </div>
  );
}

export default About;
