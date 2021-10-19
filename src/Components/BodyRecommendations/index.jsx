import CardRecommendations from "./CardRecommentations";
import "./style.css";
const BodyRecommendations = () => {
  const listRecomendations = [
    {
      title: "TITULO1",
      id: 1,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatibus in quam necessitatibus veritatis, explicabo quos, esse quaerat, minima accusamus repudiandae officia accusantium incidunt? Doloremque harum nobis explicabo quas dignissimos.",
      img: "https://jeanecarneiro.com.br/wp-content/uploads/2019/08/41548483_2193228597590258_2499427136683638784_n.jpg",
    },
    {
      title: "TITULO2",
      id: 2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatibus in quam necessitatibus veritatis, explicabo quos, esse quaerat, minima accusamus repudiandae officia accusantium incidunt? Doloremque harum nobis explicabo quas dignissimos.",
      img: "https://i.ytimg.com/vi/dbmA8VGiyZE/maxresdefault.jpg",
    },
    {
      title: "TITULO4",
      id: 3,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatibus in quam necessitatibus veritatis, explicabo quos, esse quaerat, minima accusamus repudiandae officia accusantium incidunt? Doloremque harum nobis explicabo quas dignissimos.",
      img: "https://http2.mlstatic.com/D_NQ_NP_769813-MLB41456092256_042020-O.jpg",
    },
  ];
  return (
    <div className="body-recommendations" id='recommentadions'>
        <img src="https://img.myloview.com.br/quadros/bokeh-abstrato-do-ouro-com-fundo-preto-fundo-de-natal-feliz-fundo-de-luzes-de-brilho-desfocado-400-147491480.jpg" alt="" />
      <h1>Recomendações</h1>
     <div className='list-recommendations'>
     {listRecomendations.map((recommendations) => (
        <CardRecommendations
          img={recommendations.img}
          key={recommendations.id}
          description={recommendations.description}
          title={recommendations.title}
        />
      ))}
     </div>
    </div>
  );
};

export default BodyRecommendations;
