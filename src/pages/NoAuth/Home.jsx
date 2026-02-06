import { FaRobot } from "react-icons/fa";
import { Link } from "react-router";

const Home = ({ setOpen }) => {
  return (
    <div className="h-screen  bg-gradient-to-br from-gray-50 to-white">
      <img
        src="/dog_bg_hero.png"
        alt="Happy healthy dog with veterinary care"
        className="absolute top-0 left-1/2 z-1 -translate-x-1/2 opacity-20 w-[310px]  md:hidden"
      />
      <main className="__hero__ bg-gradient-to-br relative z-20 from-orange-700/20  to-orange-500/10 flex flex-col items-center md:gap-5 justify-start md:flex-row lg:pt-20 pt-32 px-10 md:px-10 lg:px-20">
        <aside className="__left_panel__ flex-1 ">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs bg-orange-100 text-[var(--orange)] text-sm font-medium mb-6">
            <span className="w-2 h-2  bg-[var(--orange)] rounded-full"></span>
            AI-Powered Veterinary Assistant
          </div>
          <section className="__title__ flex flex-col w-full font-[grotesk]">
            <h1 className="font-black text-[var(--black)] text-7xl md:text-6xl lg:text-8xl  ">
              <span className="text-[var(--orange)]">AI-Powered</span> Animal
              Health Diagnosis
            </h1>

            <p className="text-md md:text-sm pt-5  md:pt-10 text-gray-500 mont ">
              VetBot combines cutting-edge artificial intelligence with
              veterinary expertise to provide instant, reliable health
              assessments for your pets and livestock. Get 24/7 support and
              actionable insights before visiting your veterinarian.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                to={"/chat"}
                className="md:px-4 text-center flex items-center justify-center px-8 md:py-0 md:text-sm mont py-4 bg-[var(--orange)] text-white font-semibold rounded-xl hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                Chat Now
              </Link>
              <button className="px-8 mont py-4 bg-white text-[var(--dgray)] font-semibold rounded-xl border-2 border-gray-200 hover:border-[var(--orange)] transition-all duration-300">
                Learn more
              </button>
            </div>
          </section>
        </aside>

        <aside className="__right_panel__ flex-1 py-8  flex items-center justify-end">
          <section className="relative rounded-2xl bg-gradient-to-br from-[var(--orange)] to-orange-700 w-full max-w-lg pt-8 shadow-2xl shadow-orange-200 flex flex-col items-center justify-center overflow-hidden">
            <div className="relative transform hover:scale-105 transition-transform duration-500 hidden md:block">
              <img
                src="/dog_bg_hero.png"
                alt="Happy healthy dog with veterinary care"
                width={380}
                height={380}
                className="drop-shadow-2xl lg:w-[380px] lg:h-full md:w-[300px] md:h-full"
              />
            </div>

            {/* Chat bubble */}
            <div className="absolute bottom-24 right-8 bg-white p-4 rounded-2xl rounded-br-none shadow-lg max-w-xs animate-fade-in">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-[var(--orange)] rounded-full flex items-center justify-center text-white">
                  <FaRobot />
                </div>
                <span className="font-semibold text-sm">VetBot</span>
                <span className="text-xs text-gray-500 ml-auto">Now</span>
              </div>
              <p className="text-sm text-gray-700">
                Hello! How can I help your pet today?
              </p>
            </div>
          </section>
        </aside>
      </main>
    </div>
  );
};

export default Home;
