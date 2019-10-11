import React from 'react'

function Smurf(props) {
    const { name, age, height, id } = props.smurf

    return (
        <div>
            <h4>{name}</h4>
            <p>Age: {age}</p>
            <p>Height: {height}</p>
        </div>
    )
}

export default Smurf