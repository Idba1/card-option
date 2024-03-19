import { useState } from "react";
import Link from "../../Link/Link";
import { RiMenu2Line } from "react-icons/ri";


const Navbar = () => {

    const [close, setClose] = useState(false)

    const routes =[
        { path: "/", name: "Home", id: 1 },
        { path: "/about", name: "About", id: 2 },
        { path: "/services", name: "Services", id: 3 },
        { path: "/contact", name: "Contact", id: 4 },
        { path: "/blog", name: "Blog", id: 5 }
      ]
      
    return (
        <div>

            <div  className="md:flex text-2xl md:hidden" onClick={()=>setClose(!close)}>
                {
                    close===(true)? 'open' : 'close'
                }
            <RiMenu2Line className="" />
            </div>
            <ul>
            {
                routes.map(route =>  <Link key={route.id} route={route}></Link>)
            }
            </ul>
        </div>
    );
};

export default Navbar;