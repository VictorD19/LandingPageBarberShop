import BodyHairs from "../BodyHairs";
import BodyHome from "../BodyHome";
import BodyMedium from "../BodyMedium";
import BodyRecommendations from "../BodyRecommendations";
import BodyServices from "../BodyServices";
import "./style.css";

const Body = () => {
  return (
    <main style={{width:'100%'}}>
      <BodyHome />
      <BodyMedium />
      <BodyServices />
      <BodyRecommendations />
      <BodyHairs />
    </main>
  );
};

export default Body;
