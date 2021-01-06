import React from 'react';
import './index.css';
import IconButton from '@material-ui/core/IconButton';
import FunctionsIcon from '@material-ui/icons/Functions';


class Result extends React.Component {
  render() {
    return (
      <>
        <div className = "resultField"> 
          {this.props.finalResult} 
        </div>
        
        <div className="freqBorder">
          <div className="bar">
          </div>
        </div>
      </>
    )
  }
};

export default Result;