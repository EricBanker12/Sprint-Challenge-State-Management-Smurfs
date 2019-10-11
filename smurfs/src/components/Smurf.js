import React from 'react'
import { Card } from 'reactstrap'

function Smurf(props) {
    const { name, age, height, id } = props.smurf

    return (
        <Card className="p-3 col-sm-6 mx-auto my-3">
            <div>
                <h4>{name}</h4>
                <p>Age: {age}</p>
                <p>Height: {height}</p>
            </div>
        </Card>
    )
}

export default Smurf