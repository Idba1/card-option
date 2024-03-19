import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip} from 'recharts';


const Phones = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data;
                const phoneWithFackData = phoneData.map(Phone => {
                    const obj = {
                        name: Phone.phone_name,
                        price: parseInt(Phone.slug.split('-') [1])
                    }
                    return obj;
                })
                console.log(phoneWithFackData);
                setData(phoneWithFackData)
            })
    }, [])
    return (
        <div>
            <h1 className="text-2xl text-blue-500">Total Phones : {data.length}</h1>
            {/* <ResponsiveContainer width="100%" height="100%"> */}
                <BarChart width={1200} height={600} data={data}>
                    {/* <Bar dataKey="name" fill="#8884d8" /> */}
                    <Bar dataKey={"price"} fill="#87cefa" />
                    <XAxis dataKey={name}></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                </BarChart>
            {/* </ResponsiveContainer> */}
        </div>
    );
};

export default Phones;