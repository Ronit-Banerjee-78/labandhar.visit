import React,{useState,useEffect} from "react";
import Mobile from "./Design_Components/Mobile";
import Desktop from "./Design_Components/Desktop";



const NavMenu= () => {

  const breakPoint=980
  const [width, setWidth] = useState(window.innerWidth);
      useEffect(() => {
          const handleWindowResize = () => setWidth(window.innerWidth)
          window.addEventListener("resize", handleWindowResize);

          // Return a function from the effect that removes the event listener
          return () => window.removeEventListener("resize", handleWindowResize);
        }, []);

        return width<breakPoint? <Mobile/>:<Desktop/>
}

export default NavMenu