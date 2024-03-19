import PropTypes from 'prop-types'
const PriceOption = ({option}) => {
    const {name, price, features} = option
    console.log(option)
    return (
        <div className='bg-blue-300 text-black rounded-lg p-8'>
            <h2>
                <span className='text-6xl'>{price}</span>
                <span className='text-3xl'>/Month</span>
            </h2>
            <h4 className='text-3xl'>{name}</h4>
        </div>
    );
};

// PriceOption.PropTypes ={
//     option:PropTypes.object
// }
PriceOption.propTypes = {
    option:PropTypes.object
}
export default PriceOption;