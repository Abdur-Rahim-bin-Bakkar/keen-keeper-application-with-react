import { createBrowserRouter } from "react-router";
import Home from "../components/Home/Home";
import App from "../App";
import FriendDetails from "../components/FriendDetails/FriendDetails";
import Timeline from "../pages/Timeline";
import Stats from "../pages/Stats";

export const router = createBrowserRouter([
    {
        path:'/',
        Component: App,
        children:[
            {index:true, Component: Home},
            {path:"timeline", Component: Timeline},
            {path:"stats", Component: Stats},
            {path:"friend/:id", Component: FriendDetails}

        ]
    }
])