import React, {Component} from 'react';
import './App.css';
import Stopwatch from "./Stopwatch";
import Countdown from "./Countdown";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <div className="App">
        <div className="App-title">Timers</div>
        <div className="Timers">
          <Stopwatch />
          <Countdown />
        </div>
      </div>
    );
  }
}
 
export default App;