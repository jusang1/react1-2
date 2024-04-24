import React, { useState } from 'react';

const Main = () => {
  const [ Fruits, setFruits ] = useState("사과") 

  function changeFruits() {
    setMyName(Fruits === "사과" ? "오랜지" : "바나나");
  }

  return (
    <div>
      <h1>당신은 어떤 과일을 좋아하나요? {Fruits} 입니다.</h1>
        {}
          <button onClick={changeFruits}>Change</button>
        </div>
    );
};

export default App;