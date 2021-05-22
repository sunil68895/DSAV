import React, { Component } from 'react';
import NQueen from './NQueen/NQueen.js';
import Sudoku from './Sudoku/Sudoku.js';
import RatMaze from './RatMaze/RatMaze.js';
import Bar from '../../components/Bar';

class Backtracking extends Component {
  render() {
    return (
      <div>
        <Bar />
        <br />
        <h1 className='ui horizontal divider header ' style={{backgroundColor:"#4fc3f7 ",color:"purple"}}> N-Queen </h1> <NQueen />
        <br />
        <h1 className='ui horizontal divider header' style={{backgroundColor:"#4fc3f7 ",color:"purple"}} > Rat in a Maze </h1>
        <RatMaze />
        <br />
        <h1 className='ui horizontal divider header' style={{backgroundColor:"#4fc3f7 ",color:"purple"}} > Sudoku </h1> <Sudoku />
      </div>
    );
  }
}
export default Backtracking;
