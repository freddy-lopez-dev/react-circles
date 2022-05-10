import Circle from "./Circle";
import { useState } from "react";

function randomColor() {
  return (
    'rgb(' +
    Math.floor(Math.random() * 255) +
    ',' +
    Math.floor(Math.random() * 255) +
    ',' +
    Math.floor(Math.random() * 255) +
    ')'
  );
}

const randomNo = () => {
  return Math.floor(Math.random() * 100)
}

const Circles = () => {
  const [circles, setCircles] = useState([]);

  const createCircleHandler = () => {
    setCircles((prevState) => {
      // circles.push({ number: randomNo(), bgColor: randomColor() })
      return [...prevState, { number: randomNo(), bgColor: randomColor() }]
    })
  }

  const deleteCircleHandler = (event) => {
    const selectedCircleNumber = parseInt(event.target.innerText)
    const newCircle = circles.filter((circle) => circle.number !== selectedCircleNumber)
    setCircles(newCircle)
  }

  return (
    <div className="container">
      <div className="circles">
        <button onClick={createCircleHandler}>Create Circle!</button>
        {
          circles.map((circle, index) =>
            <Circle
              onClickHandler={deleteCircleHandler}
              key={index}
              number={circle.number}
              bgColor={circle.bgColor} />
          )
        }
      </div>

    </div>
  );
}

export default Circles
