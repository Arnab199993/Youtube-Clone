import App from "./App";
import Explore from "./Pages/Explore/Explore";
import Library from "./Pages/Library/Library";
import Shorts from "./Pages/Shorts/Shorts";
import Subscription from "./Pages/Subscription/Subscription";
import History from "./Pages/History/History";
import YourVideos from "./Pages/YourVideos/YourVideos";
import WatchLater from "./Pages/WatchLater/WatchLater";
import LikedVideos from "./Pages/LikedVideos/LikedVideos";
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
    },
    {
        path:"/shorts",
        element:<Shorts/>
    },
    {
        path:"/history",
        element:<History/>
    },
    {
        path:"/yourVideos",
        element:<YourVideos/>
    },
    {
        path:"/watchLater",
        element:<WatchLater/>
    },
    {
        path:"/liked-videos",
        element:<LikedVideos/>
    },
]
export default Routes