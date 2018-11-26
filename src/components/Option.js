import React from 'react';

const Option = (props) => {

    return (
      <div> {props.optionText}
            <button onClick ={(e) => {props.handleDeleteOption(props.optionText)}}>Remove Option</button>
      </div>
      // <Option/>
      // {props.options.map((option) => { return <p key={option}>{option} <button onClick={props.handleDeleteOption}>Remove Option</button></p>})}
    )
}

export {Option as default}
