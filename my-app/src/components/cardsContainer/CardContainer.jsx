import "./CardContainer.css";
import Card from "../card/Card.jsx";
import { record } from "../../data/Records.js"; 

function CardContainer() {
  return (
    <div className='container'>
      {
        record && record.map((item, index) => (
          <Card key={index} record={item} />
        ))
      }
    </div>
  );
}

export default CardContainer;
