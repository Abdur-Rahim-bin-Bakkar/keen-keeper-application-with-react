import { createBrowserRouter } from "react-router";
import Home from "../components/Home/Home";
import App from "../App";

export const router = createBrowserRouter([
    {
        path:'/',
        Component: App,
        children:[
            {index:true, Component: Home},
            {path:"timeline", element: <h1>thsi is time line</h1>},
            {path:"stats", element: <h1>thsi is stats</h1>},
            {path:"friend/:id", element: <h1>this is details page</h1>}

        ]
    }
])