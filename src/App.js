import './App.css';

// import './AppS.scss'
import HomePage from './Page/HomePage';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Book from './Page/Book';
import NavMenu from './Components/Navbar';
import TopNavbar from './Components/Design_Components/TopNavbar';
import Meal from './Page/Meal';
import { More } from './More';
import Cultural from './Page/Cultural';
import Discover from './Page/Discover';
import All from './Page/All';
import Contact from './Page/Contact';
import MoreThat from './Page/MoreThat';
import Login from './Page/Login';
import Register from './Page/Register';
import BookDetail from './Page/BookDetail';
import Cart from './Components/Cart';
// import SliderImage from './Components/Design_Components/SliderImage';

function App() {
  const Layout=()=>{
    return(
      <>
      {/* <TopNavbar/> */}
      <NavMenu/>
      <Outlet/>
      <Footer/>
      </>
    )
  }
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Layout/>,
        children:[
          {
            path: "/",
            element: <HomePage/>,
          },

          {
            path: "/book",
            element: <Book/>,

          },
          {
            path: "/meal",
            element: <Meal/>,
          },
          {
            path: "/events",
            element: <Cultural/>,
          },
          {
            path: "/discover",
            element: <Discover/>,
          },
          {
            path: "/contact",
            element: <Contact/>,
          },
          {
            path: "/more",
            element: <MoreThat/>,
          },

{
path:"/book/bookdetail",
element:<BookDetail/>,
},
{
  path:"/checkout",
  element:<Cart/>
},

        ]
      },{
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      },



    ]);
      return (
        <div className="App">
     <RouterProvider router={router} />
        </div>
      );
    }

    export default App;
