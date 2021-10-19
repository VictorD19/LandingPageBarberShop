import CardServices from "./CardServices";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import "./style.css";
const BodyServices = () => {
  const listServices = [
    {
      type: "Corte",
      id: 1,
      services: [
        { id: 1, name: "Normal", price: 19.99 },
        { id: 2, name: "Degrade", price: 34.99 },
        { id: 3, name: "Militar", price: 19.99 },
        { id: 4, name: "Sayayin", price: 19.99 },
        { id: 5, name: "Magrei", price: 19.99 },
        { id: 6, name: "Rapado", price: 19.99 },
        { id: 7, name: "Plata Banda", price: 19.99 },
        { id: 8, name: "Don Omar", price: 19.99 },
        { id: 9, name: "Otros", price: 19.99 },
        { id: 10, name: "Lorem", price: 19.99 },
      ],
    },
    {
      id: 2,
      type: "Secado",
      services: [
        { id: 1, name: "Secado1", price: 15.99 },
        { id: 2, name: "Secado12", price: 15.99 },
        { id: 3, name: "Secado331", price: 15.99 },
        { id: 4, name: "Secado53431", price: 15.99 },
        { id: 5, name: "Secado1", price: 15.99 },
        { id: 6, name: "Secado1asd", price: 15.99 },
        { id: 7, name: "Secado1324", price: 15.99 },
        { id: 8, name: "Secado1532235", price: 15.99 },
        { id: 9, name: "Secado1532", price: 15.99 },
      ],
    },
    {
      type: "Pintura",
      id: 3,
      services: [
        { id: 1, name: "Color1", price: 14.99 },
        { id: 2, name: "Color2", price: 14.99 },
        { id: 3, name: "Color34", price: 14.99 },
        { id: 4, name: "Color5", price: 14.99 },
        { id: 5, name: "Color13", price: 14.99 },
        { id: 6, name: "Color13", price: 14.99 },
        { id: 7, name: "Color13", price: 14.99 },
        { id: 8, name: "Color13", price: 14.99 },
      ],
    },
  ];

  return (
    <div className="body-services"  id='service'>
      <div>
      <LazyLoadImage
        id='imgservice'
        src="https://i.pinimg.com/474x/3a/98/7c/3a987ce86280ab3ef15badf0f58c4954.jpg"
        alt="imgcortes"
        effect="blur"
        height='100%'
        width="100%"
        style={{width:'100%'}}
  
      />
      </div>
      <div className="services" id='service'>
        {listServices.map((service) => (
          <CardServices key={service.id} name={service} />
        ))}
      </div>
   
    </div>
  );
};

export default BodyServices;
