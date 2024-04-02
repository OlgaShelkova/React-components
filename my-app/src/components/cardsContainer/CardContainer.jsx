import "./CardContainer.css";
import Card from "../card/Card.jsx";

function CardContainer() {
  <div className='container'>
{
Records && Records.map(record => {
return (<Card/>)
})
}
</div>
}

export default CardContainer;
