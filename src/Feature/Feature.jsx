import PropTypes from 'prop-types'
import { FaRegCheckCircle } from "react-icons/fa";

const Feature = ({feature}) => {
    return (
        <div className='text-left '>
            <p className='flex gap-4'> <FaRegCheckCircle className='text-blue-950'/> {feature}</p>
            
        </div>
    );
};

Feature.propTypes = {
    feature:PropTypes.string
}
export default Feature;