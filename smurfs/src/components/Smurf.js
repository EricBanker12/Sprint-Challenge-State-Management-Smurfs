import React from 'react'
import { Card, Button } from 'reactstrap'
import { useDispatch } from 'react-redux'

import EditModal from './EditModal'

import { delSmurf } from '../actions'

function Smurf(props) {
    const dispatch = useDispatch()

    const { name, age, height } = props.smurf

    const [edit, setEdit] = React.useState()

    return (
        <Card className="p-3 col-sm-6 mx-auto my-3 d-flex flex-row align-items-start">
            <EditModal edit={edit} setEdit={setEdit} />
            <div>
                <h4>{name}</h4>
                <p>Age: {age}</p>
                <p>Height: {height}</p>
            </div>
            <Button className='btn-info ml-auto' onClick={()=>{setEdit(props.smurf)}} >Edit</Button>
            <Button className='btn-danger ml-3' onClick={()=>{dispatch(delSmurf(props.smurf))}}>Delete</Button>
        </Card>
    )
}

export default Smurf