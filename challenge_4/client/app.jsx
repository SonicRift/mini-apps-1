import React from 'react'
import ReactDOM from 'react-dom'
import Row from './components/Row.jsx'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      board: [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0],
        [1, 2, 1, 1, 2, 2, 1]
      ]
    }
  }
  render() {
    return (
      <div>
        <h1>Connect 4</h1>
        <table className="board">
          <tbody>
            {
              this.state.board.map((row, index) => {
                return <Row key={index} x={index} row={row} />
              })
            }
          </tbody>
        </table>
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('app'))
