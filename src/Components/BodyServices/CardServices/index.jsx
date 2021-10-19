import "../style.css";
const CardServices = ({ name }) => {
  return (
    <div className="card-services">
      <h1>{name.type}</h1>
      <ul className="list-item-service">
        {name.services.map((service) => (
          <li className="item-services" key={service.id}>
            <pre>{service.name}</pre> 
            <div className="linha-item"></div>

            <pre>R$ {service.price}</pre>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardServices;
