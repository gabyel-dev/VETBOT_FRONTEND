import {
  FaRobot,
  FaExclamationTriangle,
  FaStethoscope,
  FaThermometerHalf,
  FaClock,
  FaQuestionCircle,
} from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";
import { LuCopy } from "react-icons/lu";
import { FiRotateCcw } from "react-icons/fi";
import { IoIosWarning, IoIosCheckmarkCircle } from "react-icons/io";
import { GoDotFill } from "react-icons/go";

export default function ChatMessages({ messages, loading }) {
  return (
    <div className="w-full flex items-center flex-col h-auto pb-2 overflow-auto max-h-180  relative z-100">
      <section className="w-full max-w-3xl mx-auto  mt-5 space-y-8 ">
        {messages?.map((msg, index) => {
          if (msg?.role === "user") {
            return (
              <div key={index} className="flex justify-end pt-15">
                <div className="max-w-xl">
                  <div className="flex items-center gap-2 mb-1 justify-end">
                    <span className="text-xs text-gray-600">You</span>
                  </div>
                  <div className=" bg-[var(--orange)] text-white px-4 py-3 rounded-2xl rounded-tr-none">
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                  </div>
                </div>
              </div>
            );
          } else {
            const isError = msg?.content?.error;
            const content = msg.content || {};

            if (isError) {
              return (
                <div key={index} className="flex">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-gray-800">
                        VetBot
                      </span>
                      <span className="text-xs text-gray-500">
                        AI Assistant
                      </span>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                      <div className="flex items-center gap-2 text-red-600 mb-2">
                        <IoIosWarning />
                        <span className="font-medium">Notice</span>
                      </div>
                      <p className="text-gray-700 text-sm">{isError}</p>
                    </div>
                  </div>
                </div>
              );
            }

            const urgency = content.urgency || "monitor";
            const urgencyText =
              urgency === "emergency"
                ? "Emergency - Immediate Care Required"
                : urgency === "vet_soon"
                  ? "See a Vet Soon"
                  : "Monitor Closely";

            return (
              <div key={index} className="flex flex-col gap-5">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-gray-800">VetBot</span>
                    <span className="text-xs text-gray-500">AI Assistant</span>
                  </div>

                  {/* Main Content Card */}
                  <div className="bg-white border border-gray-200 rounded-b-2xl rounded-tr-2xl shadow-sm overflow-hidden">
                    {/* Urgency Banner */}
                    <div
                      className={`
                      px-4 py-3 flex items-center justify-between
                      ${
                        urgency === "emergency"
                          ? "bg-gradient-to-r from-red-500 to-red-500"
                          : urgency === "vet_soon"
                            ? "bg-gradient-to-r from-amber-500 to-amber-600"
                            : "bg-gradient-to-r from-blue-500 to-blue-600"
                      }
                    `}
                    >
                      <div className="flex items-center gap-3">
                        {urgency === "emergency" ? (
                          <FaExclamationTriangle className="text-white" />
                        ) : urgency === "vet_soon" ? (
                          <FaStethoscope className="text-white" />
                        ) : (
                          <FaClock className="text-white" />
                        )}
                        <div>
                          <p className="text-white text-xs opacity-90">
                            Urgency Level
                          </p>
                          <p className="text-white font-bold">{urgencyText}</p>
                        </div>
                      </div>
                      <FaThermometerHalf className="text-white opacity-80" />
                    </div>

                    <div className="p-5 space-y-5">
                      {/* Introduction Text */}
                      <div className="text-gray-700">
                        <p className="text-sm leading-relaxed">
                          Based on the symptoms you've described, here's what
                          you should know. This is informational guidance
                          only—always consult a veterinarian for proper
                          diagnosis.
                        </p>
                      </div>

                      {/* Possible Causes */}
                      {content.possible_causes?.length > 0 && (
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <GoDotFill className="text-[var(--orange)]" />
                            <h3 className="font-semibold text-gray-800">
                              Possible Causes
                            </h3>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">
                            Several conditions could be causing these symptoms:
                          </p>
                          <ul className="space-y-1">
                            {content.possible_causes.map((cause, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-sm"
                              >
                                <GoDotFill className="text-gray-400 mt-1 flex-shrink-0" />
                                <span className="text-gray-700">{cause}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Recommended Actions */}
                      {content.what_to_do_now?.length > 0 && (
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <IoIosCheckmarkCircle className="text-green-500" />
                            <h3 className="font-semibold text-gray-800">
                              Recommended Actions
                            </h3>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">
                            Follow these steps to help your pet:
                          </p>
                          <ul className="space-y-2">
                            {content.what_to_do_now.map((action, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg"
                              >
                                <div className="mt-0.5">
                                  {action.includes("temperature") && (
                                    <FaThermometerHalf className="text-blue-500" />
                                  )}
                                  {action.includes("Contact") && (
                                    <FaStethoscope className="text-green-500" />
                                  )}
                                  {action.includes("Avoid") && (
                                    <IoIosWarning className="text-red-400" />
                                  )}
                                  {!action.includes("temperature") &&
                                    !action.includes("Contact") &&
                                    !action.includes("Avoid") && (
                                      <GoDotFill className="text-[var(--orange)]" />
                                    )}
                                </div>
                                <span className="text-sm text-gray-700">
                                  {action}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Warning Signs */}
                      {content.red_flags?.length > 0 && (
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <IoIosWarning className="text-red-500" />
                            <h3 className="font-semibold text-gray-800">
                              Warning Signs
                            </h3>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">
                            Seek immediate veterinary attention if you notice
                            any of these:
                          </p>
                          <div className="bg-red-50 border border-red-100 rounded-lg p-4">
                            <ul className="space-y-2">
                              {content.red_flags.map((flag, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2 text-sm"
                                >
                                  <IoIosWarning className="text-red-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-red-700 font-medium">
                                    {flag}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Follow-up Questions */}
                  {content.followup_questions?.length > 0 && (
                    <div className="mt-4">
                      <div className="flex items-center gap-2 mb-2">
                        <FaQuestionCircle className="text-[var(--orange)]" />
                        <h3 className="font-semibold text-gray-800">
                          Questions to Help Your Vet
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Consider these questions to provide more information to
                        your veterinarian:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {content.followup_questions.map((q, idx) => (
                          <div
                            key={idx}
                            className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-2 text-xs rounded-lg"
                          >
                            <GoDotFill className="text-[var(--orange)]" />
                            {q}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <section className="__chat_options__ text-[var(--dgray)] text-xl flex gap-4">
                  <span className="__copy__ ">
                    <LuCopy />
                  </span>
                  <span className="__retry__">
                    <FiRotateCcw />
                  </span>
                </section>
              </div>
            );
          }
        })}
      </section>

      {/* Loading State */}
      {loading && (
        <div className="w-full max-w-3xl mx-auto  pt-7">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div
                  className="w-2 h-2 bg-[var(--orange)] rounded-full animate-pulse"
                  style={{ animationDelay: "0ms" }}
                ></div>
                <div
                  className="w-2 h-2 bg-[var(--orange)] rounded-full animate-pulse"
                  style={{ animationDelay: "200ms" }}
                ></div>
                <div
                  className="w-2 h-2 bg-[var(--orange)] rounded-full animate-pulse"
                  style={{ animationDelay: "400ms" }}
                ></div>
              </div>
              <span className="text-gray-600 text-sm">
                Analyzing symptoms...
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
