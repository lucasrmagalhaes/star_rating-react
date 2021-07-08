import { FaStar } from 'react-icons/fa'

const StarRating = () => {
    return (
        <div>
            {[...Array(5)].map(star => {
                return <FaStar size={100} />
            })}
        </div>
    )        
}

export default StarRating