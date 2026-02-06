import { useParams } from "react-router";
import NavBarHome from "../../components/Navbar/NavbarHOME";
import { FaPaw } from "react-icons/fa";
import ChatInput from "../../components/ChatInput";
import ChatMessages from "../../components/ChatMessages";
import { useEffect, useState } from "react";

export default function ChatUI() {
  const { pet_type } = useParams();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isSend, setIsSend] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [messages, setMessages] = useState([]);

  return (
    <div>
      <NavBarHome />
      <img
        src="/cat_bg_hero.png"
        alt="cat_image_hero"
        draggable={false}
        className="fixed select-none hidden lg:block bottom-0 right-0 translate-y-30 translate-x-30 w-150 opacity-10 overflow-hidden"
      />
      <div className="w-full h-auto  flex flex-col items-center justify-center  bg-gradient-to-br from-orange-500/4 to-orange-600/4 px-5 md:px-15 lg:px-20 ">
        <div
          className={`w-full lg:w-1/2 h-screen flex flex-col  items-center ${isSend ? "justify-end" : "justify-center"} overflow-auto`}
        >
          {!isSend && (
            <header className="__header__ w-full flex flex-col items-center justify-center">
              <h1 className="text-[--black] font-bold font-[grotesk] text-3xl md:text-6xl text-center">
                Welcome to
                <span className="text-[var(--orange)] font-[oughter] font-normal">
                  VetBot
                </span>
              </h1>

              <p className="text-normal md:text-base text-sm pt-3 text-gray-500 w-full md:w-full lg:w-1/2 text-center poppins">
                AI-powered pet symptom checker for quick guidance—anytime,
                anywhere. Describe your pet’s symptoms and get instant advice on
                what to do next.
              </p>
            </header>
          )}
          <ChatMessages messages={messages} loading={isLoading} />
          <ChatInput
            setMessages={setMessages}
            setSend={setIsSend}
            loading={setIsLoading}
          />
        </div>
        <section className="fixed -bottom-13 left-0 flex flex-col items-center justify-center">
          <span className="hidden md:block">
            <p>You choose: </p>
            <h1 className="font-black poppins text-5xl uppercase text-[var(--orange)]">
              {pet_type}
            </h1>
          </span>
          <section className="">
            {pet_type === "Dog" ? (
              <img
                src={`/${pet_type}.png`}
                alt="doggy"
                className={` ${windowWidth <= 1024 ? "fixed z-10 w-150 select-none lg:block bottom-0 right-0 translate-y-30 translate-x-30  opacity-20 overflow-hidden" : "  lg:w-100 "}`}
              />
            ) : pet_type === "Cat" ? (
              <img
                src={`/${pet_type}.png`}
                alt="catty"
                className={` ${windowWidth <= 1024 ? "fixed z-10 w-150 select-none lg:block bottom-0 right-0 translate-y-30 translate-x-30  opacity-20 overflow-hidden" : "  lg:w-100 "}`}
              />
            ) : (
              <FaPaw className="w-80 h-80 text-[var(--orange)]" />
            )}
          </section>
        </section>
      </div>
    </div>
  );
}
