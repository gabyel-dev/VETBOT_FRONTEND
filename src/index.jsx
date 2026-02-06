import { createBrowserRouter } from "react-router";

//pages
import Home from "./pages/NoAuth/Home";
import Contact from "./pages/NoAuth/Contact";

import App from "./App";
import { HomeLayout } from "./pages/NoAuth/Home_Layout";
import SelectPet from "./pages/ChatUI/Chat_Layout";
import ChatUI from "./pages/ChatUI/chatUI";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: HomeLayout },
      { path: "contact", Component: Contact },
      { path: "chat", Component: SelectPet },
      { path: "chat/petType/:pet_type", Component: ChatUI },
    ],
  },
]);
