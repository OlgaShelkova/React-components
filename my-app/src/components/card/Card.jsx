import "./Card.css";

function Card(props) {
  <div className='card' key={record.id}>
<h2 className='card__name'>{record.name}</h2>
<div className='card__content'>
Вселенная: {record.universe}<br/>
Альтер эго: {record.alterego}<br/>
Род деятельности:{record.occupation}<br/>
Друзья: {record.friends}<br/>
Суперсилы: {record.superpowers}
</div>
<div className='card__wrap'>
<img className='card__image' src={record.url} alt="" />
</div>
</div>
}
export default Card;
