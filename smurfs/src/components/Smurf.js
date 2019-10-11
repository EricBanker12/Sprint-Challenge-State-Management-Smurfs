import React from 'react'
import { Card, Button } from 'reactstrap'

function Smurf(props) {
    const { name, age, height, id } = props.smurf

    return (
        <Card className="p-3 col-sm-6 mx-auto my-3 d-flex flex-row align-items-start">
            <div>
                <h4>{name}</h4>
                <p>Age: {age}</p>
                <p>Height: {height}</p>
            </div>
            <Button className='btn-info ml-auto' >Edit</Button>
            <Button className='btn-danger ml-3' >Delete</Button>
        </Card>
    )
}

export default Smurf