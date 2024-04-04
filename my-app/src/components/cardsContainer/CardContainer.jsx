import "./CardContainer.css";
import Card from "../card/Card.jsx";
import { record } from "../cardInfo/Records.js"; 

function CardContainer() {
  <div className='container'>
{
record && record.map(record => {
return (<Card/>)
})
}
</div>
}

export default CardContainer;
