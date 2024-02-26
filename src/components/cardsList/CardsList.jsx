import "./CardsList.css";
import Card from "../card/Card.jsx";
import slo from "../../img/slo.png";

function CardsList() {
  return (
    <div className="cards">
      <Card
        img={slo}
        title="Slowpoke"
        text="покемон, существо из серии игр, манги и аниме"
      />
      <Card
        img="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"
        title="Charizard"
        text="If Charizard becomes truly angered, the flame at the tip of its tail burns in a light blue shade"
      />
    </div>
  );
}

export default CardsList;
