import { useParams } from "react-router";
import { api } from "../api/axios";
import stringJSON from "../utility/stringJSON";
import { useState, useRef, useEffect } from "react";
import { FaPaperPlane, FaPaw } from "react-icons/fa";

export default function ChatInput({ setMessages, setSend, loading }) {
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { pet_type } = useParams();
  const textareaRef = useRef(null);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight,
        120,
      )}px`;
    }
  }, [userInput]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSend = async () => {
    if (!userInput.trim()) return;

    setSend(true);
    loading(true);

    const userMessage = { role: "user", text: userInput };
    setMessages((prev) => [...prev, userMessage]);
    setUserInput("");
    setIsLoading(true);

    try {
      const payload = {
        message: `
      Pet Type: ${pet_type}
      Symptoms: ${userInput}
    `,
      };

      const res = await api.post("ai", JSON.stringify(payload));

      let aiContent = res?.data?.message?.response;
      aiContent = aiContent.replace(/```json|```/g, "").trim();

      let aiParsed = null;
      aiParsed = JSON.parse(aiContent);

      const aiMessage = { role: "ai", content: aiParsed };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      console.log("ERROR", err.response.data.error);
      const aiMessage = {
        role: "ai",
        content: { error: "Oops! Something went wrong. Please try again." },
      };
      setMessages((prev) => [...prev, aiMessage]);
      loading(false);
    } finally {
      setIsLoading(false);
      loading(false);
    }
  };

  return (
    <div className="relative  h-fit w-full">
      <div className="container  py-4">
        <div className=" ">
          {/* Input container with better styling */}
          <div className="relative z-100 rounded-4xl px-5 py-2 flex items-center justify-center border-2 h-fit border-[var(--orange)] bg-white shadow-sm transition-all duration-200 focus-within:border-orange-500 focus-within:shadow-md">
            <textarea
              ref={textareaRef}
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder={`Describe your ${pet_type || "your pet"}'s symptoms...`}
              disabled={isLoading}
              className="w-full resize-none outline-none border-none wrap-break-word  pr-16 min-h-[30px]  max-h-[120px] text-gray-800 placeholder-gray-400 disabled:opacity-50"
              rows="1"
            />

            {/* Send button with loading state */}
            <div className="absolute right-3 bottom-2">
              <button
                onClick={handleSend}
                disabled={!userInput.trim() || isLoading}
                className={`
                  flex items-center justify-center 
                  w-15 h-8 rounded-full 
                  transition-all duration-200 
                  ${
                    !userInput.trim() || isLoading
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-[var(--orange)] hover:bg-orange-600 active:scale-95"
                  }
                  text-white shadow-md
                `}
                aria-label="Send message"
              >
                {isLoading ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <FaPaperPlane className="text-sm" />
                )}
              </button>
            </div>
          </div>

          {/* Helper text */}
          <div className="mt-3 text-center">
            <p className="text-xs text-gray-500">
              VetBot provides guidance only and is not a replacement for a
              licensed veterinarian.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
