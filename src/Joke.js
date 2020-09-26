import React from 'react';

function Joke(props) {
    return (
        <div>
            <h3 style={{display: !props.joke.question && "none"}} >{props.joke.question}</h3>
            <h4 style={{color: !props.joke.question && "turquoise"}} >{props.joke.punchLine}</h4>
            <hr/>
        </div>
    )
}

export default Joke;