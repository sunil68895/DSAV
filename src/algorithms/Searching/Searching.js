import React, { Component } from 'react';
import LinearSearch from './LinearSearch/LinearSearch.js';
import BinarySearch from './BinarySearch/BinarySearch.js';
import Bar from '../../components/Bar';

class Searching extends Component {
  render() {
    return (
      <div>
        <Bar />
        <br />
        <h1 class='ui horizontal divider header' style={{backgroundColor:"#4fc3f7 ",color:"purple"}}>Linear Search</h1>
        <LinearSearch />
        <h1 class='ui horizontal divider header' style={{backgroundColor:"#4fc3f7 ",color:"purple"}}m star>Binary Search</h1>
        <BinarySearch />
      </div>
    );
  }
}
export default Searching;
