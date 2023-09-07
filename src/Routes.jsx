import App from "./App";
import Explore from "./Pages/Explore/Explore";
import Library from "./Pages/Library/Library";
import Subscription from "./Pages/Subscription/Subscription";

const Routes=[
    {
        path:"/",
        element:<App/>
    },
    {
        path:"/library",
        element:<Library/>
    },
    {
        path:"/explore",
        element:<Explore/>
    },
    {
        path:"/subscription",
        element:<Subscription/>
    }
]
export default Routes