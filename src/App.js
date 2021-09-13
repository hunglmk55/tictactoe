
import React from 'react';
import './App.css';
import {store} from "./store";
import {getHistory, setXO, setStepNum} from "./actions";
import Board from "./Board";




class App extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//         history: [
//             {
//                 squares: Array(9).fill(null)
//             }
//         ],
//     };
// }
  handleClick(i) {
    
  

    const history = store.getState().history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    
    if (calculateWinner(squares) || squares[i]) {
      return;
  }
    
    squares[i] = store.getState().xIsNext ? "X" : "O";

    const history_concat = history.concat([
        {
            squares: squares
        }
    ])
    // this.setState({
    //     history: history.concat([
    //         {
    //             squares: squares
    //         }
    //     ])
    // });

    store.dispatch(getHistory(history_concat));

    store.dispatch(setXO());
    store.dispatch(setStepNum(history.length));
   
  }
jumpTo(step) {
    
        store.dispatch(setStepNum(step));
      //  xIsNext: (step % 2) === 0
   
}



   render(){
    const history = store.getState().history;
    const current = history[store.getState().stepNumber];
    console.log(current);
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
          'Go to move #' + move :
          'Go to game start';
      return (
          <li key={move}>
              <button onClick={() => this.jumpTo(move)}>{desc}</button>
          </li>
      );
  });

    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (!store.getState().xIsNext ? "X" : "O");
    }

    return [
      <div className="game">
          <div className="game-board">
              <Board
                  squares={current.squares}
                  onClick={i => this.handleClick(i)}
              />
          </div>
          <div className="game-info">
              <div>{status} </div>
              <ol>{moves}</ol>
          </div>
      </div>
    ];
 
   }
}

function calculateWinner(squares) {
  const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
      }
  }
  return null;
}

export default App;
