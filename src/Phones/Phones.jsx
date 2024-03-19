import axios from "axios";
import { useEffect, useState } from "react";


const Phones = () => {

    const [data, setData] = useState([])
    useEffect (()=>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => setData(data.data.data))
    },[])
    return (
        <div>
            <h1 className="text-2xl text-blue-500">Total Phones : {data.length}</h1>
        </div>
    );
};

export default Phones;