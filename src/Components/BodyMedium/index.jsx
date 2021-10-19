import CardObs from '../CardObs';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import './style.css'

const BodyMedium = () => {
  const listIcon =['fas fa-users','fas fa-hands-helping','fas fa-microphone']


  return <div className="body-medium" id="about">
      <h1>O &laquo;MELHOR&raquo; BARBERSHOP DA CIDADE</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quia sint doloremque odit, totam dignissimos earum recusandae aperiam ut alias illum? Nobis, ipsam placeat necessitatibus velit incidunt consectetur quos laudantium!,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione quibusdam et temporibus mollitia, animi velit at. Temporibus quam voluptas autem aliquid commodi soluta praesentium voluptate explicabo illo! Illo, vitae ea?</p>
      <div className="card-medium">
         {
           listIcon.map((icon,id) => (
             <LazyLoadComponent >
                <CardObs size='fa-3x' key={id} icon={icon}></CardObs>
             </LazyLoadComponent>
               ))
         }
      </div>
      <h1>MAS SOBRE NÓS</h1>
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia quod molestiae odit aspernatur exercitationem neque corporis id aliquam quo molestias. Veritatis maxime nostrum tenetur distinctio eos possimus, nesciunt exercitationem atque! Lorem ipsum dolor sit amet consectetur adipisicing elit..</p> <br />
         <p> Veniam dolores natus, eius magni id quisquam rerum cum beatae eos ut ducimus, laborum tempora reprehenderit architecto atque nisi, voluptate porro rem</p> <br />
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia ut iure placeat voluptate, incidunt voluptatem fugiat deleniti impedit sed error facilis earum voluptatum officiis soluta labore. Magni maxime quaerat ea.</p>
  </div>;
};

export default BodyMedium;

