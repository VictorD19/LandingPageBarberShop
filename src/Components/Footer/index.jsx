import "./style.css";

const Footer = () => {
  return (
    <footer>
      <div className="list-redes">
        <a href="https://www.linkedin.com/in/victord08/">
          <i className="fab fa-2x fa-linkedin"></i>
        </a>
        <a href="https://api.whatsapp.com/send?phone=5549998218294&text=Oi%20gostaria%20de%20falar%20com%20voc%C3%AA.%20%C3%A9%20de%20teu%20interesse!.">
          <i className="fab fa-2x fa-whatsapp"></i>
        </a>
        <a href="https://github.com/VictorD19">
          <i className="fab fa-2x fa-github"></i>
        </a>
      </div>
    <h1>Desenvolvido por VictorD</h1>
    <h2>Tecnologias: <i className="fab fa-react"></i> -  <i className="fab fa-html5"></i> -  <i className="fab fa-css3-alt"></i></h2>



    </footer>
  );
};

export default Footer;
