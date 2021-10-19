import '../style.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const CardRecommendations = ({img,description,title}) => {
    return ( <div className="card-recommendations">
        <LazyLoadImage src={img} alt="img-recommentations" width='100%' effect="blur" style={{width:"100%"}} />
        <p>
            {description}
        </p>
        <h2>{title}</h2>
    </div> );
}
 
export default CardRecommendations;