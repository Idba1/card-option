import { useState } from "react";
import Link from "../../Link/Link";
import { RiMenu2Line } from "react-icons/ri";
import { IoIosClose } from "react-icons/io";


const Navbar = () => {

    const [close, setClose] = useState(true)

    const routes =[
        { path: "/", name: "Home", id: 1 },
        { path: "/about", name: "About", id: 2 },
        { path: "/services", name: "Services", id: 3 },
        { path: "/contact", name: "Contact", id: 4 },
        { path: "/blog", name: "Blog", id: 5 }
      ]
      
    return (
        <div className="text-black">

            <div  className="md:flex bg-yellow-200 text-2xl p-6" onClick={()=>setClose(!close)}>
                {
                    close===(true)?<RiMenu2Line className=" md:hidden"/> : <IoIosClose className=" md:hidden"/>
                }
            </div>
            <ul className={`"md:flex bg-yellow-200 duration-1000 absolute md:static 
            ${close? '-top-60':'top-16'}
            md:pb-6 px-6"`}>
            {
                routes.map(route =>  <Link key={route.id} route={route}></Link>)
            }
            </ul>
        </div>
    );
};

export default Navbar;