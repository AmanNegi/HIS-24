export default function Contract() {
  return (
    <>
      <div className=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Aashirvaad Aata Pvt. Ltd.
          </h5>
        </a>
        <p className="mb-3 text-xs text-gray-700 dark:text-gray-400">
          Since 20-Jan-2024
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          This agreement outlines the terms and conditions for providing
          agricultural services, including land preparation, crop management,
          and post-harvest activities, ensuring efficient farming operations and
          fair compensation between the service provider and the farm owner.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-950 rounded-lg hover:bg-green-700  focus:outline-none   dark:hover:bg-green-700 "
        >
          View Details
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </>
  );
}
