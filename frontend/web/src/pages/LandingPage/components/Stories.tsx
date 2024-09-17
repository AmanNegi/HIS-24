export default function Stories() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Success Stories
            </h2>
            <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Here are a few success stories from farmers who have transformed their livelihoods through our platform.
            </p>
          </div>
          <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Gaining Access to Expert Resources
                </h3>
                <p className="my-4">
                  "Being a farmer in Maharashtra, I always wanted to improve my
                  crop yield but didn't have the right tools. Through this
                  platform, I connected with an agri-tech company that provided
                  me with better seeds, fertilizers, and modern farming
                  techniques. My yield went up by 30%, and I was able to sell my
                  crops for a better price.
                </p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <img
                  className="w-9 h-9 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Beena Kumari</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                   Cotton Farmer    
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Steady Income Through Contract Farming
                </h3>
                <p className="my-4">
                  "As a small-scale vegetable farmer, I used to worry about
                  market prices all the time. After joining this platform, I
                  secured a contract with a local grocery chain that guaranteed
                  a fixed price for my produce. Now, I don't stress about price
                  fluctuations and can focus on improving my farming methods,
                  knowing my income is stable.
                </p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <img
                  className="w-9 h-9 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Radha Devi</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Vegetable Farmer
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Post-Harvest Risk Protection
                </h3>
                <p className="my-4">
                "As a wheat farmer, I often faced financial losses due to falling market prices after harvest. Thanks to this platform, I signed a contract with a mill that offered a fixed price for my crop. When market rates dropped, I was still able to make a profit, and my livelihood remained secure."
                </p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <img
                  className="w-9 h-9 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Kamlesh Chandan</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                   Wheat Farmer
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Expanding to Export Markets
                </h3>
                <p className="my-4">
                "I always dreamed of selling my fruits internationally, but I didn’t know how to start. This platform helped me connect with international buyers and secure contracts that made it possible to export my produce. Now, my farm's profits have increased, and I’m expanding my business like never before."
                </p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <img
                  className="w-9 h-9 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Ramesh Shukla</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Fruits Farmer
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="text-center">
            <a className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              Show more...
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
