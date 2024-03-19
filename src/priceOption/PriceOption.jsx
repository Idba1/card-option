import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';
const PriceOption = ({ option }) => {
    const { name, price, features } = option
    console.log(option)
    return (
        <div className='bg-blue-300 text-black rounded-lg p-8 space-y-1 flex flex-col'>
            <h2 className=' font-bold'>
                <span className='text-6xl'>{price}</span>
                <span className='text-3xl'>/Month</span>
            </h2>
            <h4 className='text-3xl'>{name}</h4>
            <div className='flex-grow'>
                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>
            <button className='bg-blue-800 w-full hover:bg-blue-950 hover:text-white rounded-lg p-3 grid text-xl hover:font-bold mt-12'>Check</button>
        </div>
    );
};

// PriceOption.PropTypes ={
//     option:PropTypes.object
// }
PriceOption.propTypes = {
    option: PropTypes.object
}
export default PriceOption;