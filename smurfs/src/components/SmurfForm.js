import React from 'react'
import { useDispatch } from 'react-redux'
import { Form, Input, Button } from 'reactstrap'

import { addSmurf } from '../actions'

function SmurfForm(props) {
    const dispatch = useDispatch()

    const [input, setInput] = React.useState({
        name: '',
        age: '',
        height: '',
    })

    const { name, age, height } = input

    function changeHandler(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function submitHandler(e) {
        e.preventDefault()
        dispatch(addSmurf({
            ...input,
            age: Number(age)
        }))
    }

    return (
        <Form className='col-sm-6 mx-auto' onSubmit={submitHandler}>
            <h2>Add a Smurf</h2>
            <Input
                type='text'
                name='name'
                placeholder='Name'
                title='Name'
                required
                value={name}
                onChange={changeHandler}
            />
            <Input
                type='text'
                name='age'
                placeholder='Age'
                title='Age: must be a number'
                required
                pattern="\d+"
                value={age}
                onChange={changeHandler}
            />
            <Input
                type='text'
                name='height'
                placeholder='Height'
                title='Height'
                required
                value={height}
                onChange={changeHandler}
            />
            <Button className='btn-success mt-3' type='submit'>Add Smurf</Button>
        </Form>
    )
}

export default SmurfForm