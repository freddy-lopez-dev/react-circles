import './Circle.css'

const Circle = (props) => {
  const { onClickHandler, number, bgColor } = props;
  return (
    <div  onClick={onClickHandler} className="circle" style={{ backgroundColor: bgColor, color: "black" }}>
      <h1>{number}</h1>
    </div>
  );
}

export default Circle;