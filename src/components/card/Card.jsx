import "./Card.css";
// const props1 = {
//   img: "https://i.imgur.com/9118928.jpg",
//   title: "Card 1",
//   text: "This is the first card",
// };

function Card(props) {
  // const img = props.img;
  // const title = props.title;
  // const text = props.text;
  const { img, title, text } = props;
  return (
    <div className="card">
      <img src={img} alt={title} className="card__img" />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export default Card;
