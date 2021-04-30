import React from 'react';

function Choices(props){

  let choices = props.choices.map((choice)=> {
    return <div key={choice} onClick={props.handleClick}>{choice}</div>
  })

    return(
      <div className="grid">
        {choices}
      </div>
    )

}

export default Choices;
