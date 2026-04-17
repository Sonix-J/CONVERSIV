import { useEffect } from "react";

const ChatbotWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/gh/a14o/FlowiseChatEmbed@latest/dist/web.js";
    script.type = "module";
    script.async = true;

    document.body.appendChild(script);

    script.onload = () => {
      window.Chatbot.init({
        chatflowid: import.meta.env.VITE_CHATFLOW_ID,
        apiHost: import.meta.env.VITE_API_HOST,
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="chatbot-container"></div>;
};

export default ChatbotWidget;
