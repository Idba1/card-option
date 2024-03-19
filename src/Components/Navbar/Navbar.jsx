const Navbar = () => {

    const routes =[
        { path: "/", name: "Home", id: 1 },
        { path: "/about", name: "About", id: 2 },
        { path: "/services", name: "Services", id: 3 },
        { path: "/contact", name: "Contact", id: 4 },
        { path: "/blog", name: "Blog", id: 5 }
      ]
      
    return (
        <div>
            <ul className="md:flex">
            {
                routes.map(route =>  <li className="mr-10" key={route.id}><a href={route.path}>{route.name}</a></li>)
            }
            </ul>
        </div>
    );
};

export default Navbar;