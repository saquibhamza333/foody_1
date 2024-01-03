

import ReactDOM from "react-dom/client";
import Header from "../src/components/Header"
import Body from "./components/Body";

import Cart from "./components/Cart";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";


 import { Provider } from "react-redux";
 import appStore from "./utils/appStore";
  import Hero from "./components/Hero";

const AppLayout =()=>{
return (
    <Provider store={appStore}>
         <div>
    <Header/>
    <Outlet/>
    </div>
    </Provider>
   
    
)

}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element:<AppLayout/>,
        children:[
            {
                path: "/",
                element:
                <>
                <Hero/>,
                <Body/>  
                 </>


            },
          
            {
                path:"/cart",
                element:<Cart/> 
            },

            {
                path:"restaurants/:resId",
                element:<RestaurantMenu/>
            },
           
            {
                path:"/cart",
                element:<Cart/>
            }

        ],
    

    }


    ]
)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)