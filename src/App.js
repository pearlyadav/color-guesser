import React,{useState} from "react";
import './App.css'

function App() {

  const [score, setScore] = useState(0);

  const get_random_correct_option = () => Math.floor(Math.random()*3);

  const random_hex_color_code_options = () => {
    let n1 = (Math.random() * 0xfffff * 1000000).toString(16);
    let n2 = (Math.random() * 0xfffff * 1000000).toString(16);
    let n3 = (Math.random() * 0xfffff * 1000000).toString(16);
    return ['#' + n1.slice(0, 6).toUpperCase(), '#' + n2.slice(0, 6).toUpperCase(), '#' + n3.slice(0, 6).toUpperCase()];
  };

  const correct_option = get_random_correct_option();
  const options = random_hex_color_code_options();
  console.log(options[correct_option]);

  function checkSubmission(key){ 
    if(options.indexOf(key) === correct_option){
      let currentScore = score;
      currentScore += 1;
      document.querySelector('#correct-answer').style.display = 'block';
      document.querySelector('#wrong-answer').style.display = 'none';
      setScore(currentScore);
    } else {
      document.querySelector('#wrong-answer').style.display = 'block';
      document.querySelector('#correct-answer').style.display = 'none';
    }
  }

  return (
    <div className="container">
      <div className="color-box" style={{'backgroundColor': options[correct_option]}}>
        <div className="score-counter">
          Score: {score}
        </div>
      </div>
      <div className="button-div">
      {
        options.map( (colorOption) => {
          return <button key={colorOption} className="option" onClick={event => checkSubmission(colorOption)}>{colorOption}</button>;
        })
      }
      </div>

      <div id="correct-answer">Correct Answer!!!</div>
      <div id="wrong-answer">Wrong Answer!!!</div>
      
    </div>
  );
}

export default App;
