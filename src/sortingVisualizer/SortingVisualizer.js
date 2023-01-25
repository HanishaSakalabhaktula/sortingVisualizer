import React from 'react';
import {getMergeSortAnimations} from '../sortingAlgo/sortingAlgorithms.js';


export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < 130; i++) {
      array.push(randomIntFromInterval(5, 500));
    }
    this.setState({array});
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? '#B08BBB' : '#FAAB78';
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 2);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * 2);
      }
    }
  }

  render() {
    const {array} = this.state;

    return (
      <div className='align-center justify-center'>
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: '#7286D3',
              height: `${value}px`,
              width: '2px',
              margin: '0 1px',
              display: 'inline-block'
            }}></div>
        ))}
      </div>
      <div className='flex flex-row'>
      <button className='rounded bg-[#7286D3] p-1 text-white mx-1' onClick={() => this.resetArray()}>Generate New Array</button>
      <button className='rounded bg-[#7286D3] p-1 text-white mx-1' onClick={() => this.mergeSort()}>Merge Sort</button>
      </div>
      </div>
    );
  }
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
