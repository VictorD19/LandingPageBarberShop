import './style.css'

const CardObs = ({size,icon}) => {
    return (   <div className="card-obs">
        <i className={`${icon} ${size}`}></i>
        <h1>Titulos</h1>
        <h2>subtiluto</h2>
        <p> Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea odio architecto dolor officiis impedit repudiandae dolore iusto totam, hic tempora!</p>
    </div>  );
}
 
export default CardObs;