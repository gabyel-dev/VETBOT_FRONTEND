import { FaRobot } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";
import { GoDotFill } from "react-icons/go";

export default function ChatMessages({ messages, loading }) {
  return (
    <div className="w-full flex  items-center flex-col h-auto pb-2 overflow-auto max-h-180 mt-14 relative z-100  ">
      <section className="w-full">
        {messages?.map((msg, index) => {
          if (msg?.role === "user") {
            return (
              <div
                key={index}
                className="w-full flex flex-col items-end justify-end relative mx-auto pt-5"
              >
                <span className="poppins text-xs">You</span>

                <section className="bg-[var(--orange)] text-white ml-10 max-w-2/3 w-fit px-5 py-2 rounded-br-4xl rounded-l-4xl">
                  {msg.text}
                </section>
              </div>
            );
          } else {
            // ---------------- ASSISTANT MESSAGE ----------------
            const isError = msg?.content.error;

            const content = msg.content || {};

            // -------- ERROR UI ----------
            if (isError) {
              return (
                <div key={index} className="w-full  poppins">
                  <section className="flex  items-center gap-2">
                    <span className="flex items-center justify-center bg-[var(--orange)] rounded-full p-2">
                      <FaRobot className="text-white text-xs" />
                    </span>
                    <p className="  font-semibold">
                      VetBot{" "}
                      <span className="text-xs font-light">AI Assistant</span>
                    </p>
                  </section>
                  <section className="bg-red-100 ml-10 border-2 border-red-300 p-4 rounded-r-3xl rounded-bl-3xl max-w-md shadow-md">
                    <div className="flex items-center gap-2 text-red-600 font-semibold">
                      <IoIosWarning />
                      VetBot Notice
                    </div>

                    <p className="text-sm mt-2">{isError}</p>
                  </section>
                </div>
              );
            }

            return (
              <div
                key={index}
                className="w-full right-0 relative mx-auto h-auto poppins"
              >
                <section className="flex  items-center gap-2">
                  <span className="flex items-center justify-center bg-[var(--orange)] rounded-full p-2">
                    <FaRobot className="text-white text-xs" />
                  </span>
                  <p className="  font-semibold">
                    VetBot{" "}
                    <span className="text-xs font-light">AI Assistant</span>
                  </p>
                </section>
                <section className="bg-gray-100 shadow-xl border-1 border-gray-300 ml-10 max-w-full md:max-w-2/3 p-5 rounded-bl-4xl rounded-r-4xl">
                  <span className="__urgency__ bg-[var(--orange)]  flex justify-between items-center rounded-full px-4 py-2  text-white">
                    <h1 className="text-sm ">
                      Urgency: &nbsp;&nbsp;
                      <span className="uppercase font-semibold">
                        {content.urgency}
                      </span>
                    </h1>
                    <IoIosWarning />
                  </span>

                  <section className="__possible_causes__ ">
                    <h1 className="font-semibold pl-3 pt-5 pb-3">
                      Possible Causes:{" "}
                    </h1>

                    <ul className="pl-8 flex flex-col gap-1">
                      {content.possible_causes?.map((cause, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-4 text-xs"
                        >
                          <GoDotFill className="text-xs text-[var(--orange)]" />
                          &nbsp;&nbsp;{cause}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className="__recommended_actions__ bg-white rounded-2xl mt-5 py-3 px-3">
                    <h1 className="font-semibold pl-3 ">
                      Recommended Actions:{" "}
                    </h1>
                    <ul className="pl-8 flex flex-col gap-1">
                      {content.what_to_do_now?.map((reco, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-4 text-xs"
                        >
                          &nbsp;&nbsp;{reco}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className="__recommended_actions__ bg-red-100 border-2 border-red-300 rounded-2xl mt-5 py-3 px-3">
                    <h1 className="font-semibold pl-3 ">Warning Signs!</h1>

                    <IoIosWarning className="absolute opacity-20 text-8xl right-1/2 text-red-400" />
                    <ul className="pl-8 flex flex-col gap-1 poppins">
                      {content.red_flags?.map((warn, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-4 text-xs"
                        >
                          <IoIosWarning className="text-yellow-500" />
                          &nbsp;&nbsp;{warn}
                        </li>
                      ))}
                    </ul>
                  </section>
                </section>
                <section className="ml-10 pt-4">
                  <h1 className="font-semibold">Question to Consider</h1>
                  <ul className="w-1/2 flex gap-2 flex-col md:flex-row">
                    {content.followup_questions?.map((q, i) => (
                      <li
                        key={i}
                        className="bg-[var(--orange)]  flex items-center justify-center text-white px-4 py-2 text-xs rounded-full w-fit h-10"
                      >
                        {q}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            );
          }
        })}
      </section>
      {loading && (
        <div className="flex items-center gap-1 justify-start w-full pt-8">
          <div className="__dot__ __dot1__ bg-orange-500"></div>
          <div className="__dot__ __dot2__ bg-orange-500"></div>
          <div className="__dot__ __dot3__ bg-orange-500"></div>
          <p className="text-[var(--dgray)] font-medium text-sm pl-2">
            VetBot is thinking
          </p>
        </div>
      )}
    </div>
  );
}
