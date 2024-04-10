import "./Card.css";

function Card(props) {
  const { record } = props;

  if (!record) {
    return <div>No data available</div>;
  }

  return (
    <div key={record.id} className='card'>
      <h2 className='card__name'>{record.name}</h2>
      <div className='card__content'>
        Вселенная: {record.universe}<br/>
        Альтер эго: {record.alterego}<br/>
        Род деятельности: {record.occupation}<br/>
        Друзья: {record.friends}<br/>
        Суперсилы: {record.superpowers}
      </div>
      <div className='card__wrap'>
        <img className='card__image' src={record.url} alt="" />
      </div>
    </div>
  );
}
export default Card;
