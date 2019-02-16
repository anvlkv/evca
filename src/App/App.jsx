import React, { Component } from 'react';
import './App.scss';
import * as ReactDOM from 'react-dom';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'

class App extends Component {
  resize$ = new Subject();

  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0
    }
  }

  componentDidMount() {
    this.resizeSubscription = this.resize$.pipe(debounceTime(150)).subscribe(() => this.updateWindowDimensions());
    window.addEventListener('resize', () => {
      this.resize$.next();
    });
    this.resize$.next();
  }

  componentWillUnmount() {
    this.resizeSubscription.unsubscribe();
    window.removeEventListener('resize');
  }

  render() {
    return (
      <div className="App">
          <svg viewBox={`0 0 100 100`}
               width={this.state.width}
               height={this.state.height}
               xmlns="http://www.w3.org/2000/svg"
               preserveAspectRatio="xMidYMin meet">
          </svg>
      </div>
    );
  }

  updateWindowDimensions() {
    const el = ReactDOM.findDOMNode(this);
    if (el && el.parentElement) {
      this.setState({width: el.clientWidth, height: el.clientHeight});
    }
  }
}

export default App;
