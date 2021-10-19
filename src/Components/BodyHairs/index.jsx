import "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const BodyHairs = () => {
  const listHair = [
    "https://i.pinimg.com/564x/d4/d7/ab/d4d7ab3029c8d45dc30d67a3dd9247e3.jpg",
    "https://static1.segredosdesalao.com.br/articles/0/18/96/0/@/248090-confira-8-perfis-de-instagram-com-tipos-article_media_item_mobile-3.jpg",
    "https://opetroleo.com.br/wp-content/uploads/2021/03/taglio-uomo-Pompadour-rasato-ai-lati.jpg",
    "https://i.pinimg.com/originals/99/4d/50/994d50f3dd70e27b84588ecc1cae50d8.png",
    "https://i2.wp.com/www.canalmasculino.com.br/wp-content/uploads/2018/10/cortes-cabelo-masculinos-2019-destaque.jpg?resize=640%2C640",
    "https://homensquesecuidam.com/wp-content/uploads/2020/07/cortes-masculinos-pra-fazer-em-casa-sem-errar-por-juan-alves-homens-que-se-cuidam-1024x1024.jpg",
    "https://modamasculina.inf.br/wp-content/uploads/2020/05/Cortes-de-Cabelo-Masculino-2021.jpg",
    "https://mhmcdn.manualdohomemmoderno.com.br/?w=781&h=488&quality=100&clipping=crop&url=https://manualdohomemmoderno.com.br/files/2020/09/cortes-de-cabelos-masculinos-para-2021-cortes-de-cabelos-masculinos-para-2021-11.jpg",
  ];


  return (
    <div className="body-hairs" id='hairs'>
      <h2>Cortes de Cabelo</h2>
      <div className="list-hairs">
        {listHair.map((img, id) => (
          <img
            src={img}
            alt="imgHair"
            key={id}
          />
        ))}
      </div>
    </div>
  );
};

export default BodyHairs;
