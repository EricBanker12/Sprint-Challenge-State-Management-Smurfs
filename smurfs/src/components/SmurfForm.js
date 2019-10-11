import React from 'react'
import { useDispatch } from 'react-redux'
import { Form, Input, Button } from 'reactstrap'

import { addSmurf, editSmurf } from '../actions'

function SmurfForm(props) {
    const dispatch = useDispatch()

    const [input, setInput] = React.useState(() => {
        if (props.edit) {
            return {
                ...props.edit,
                age: String(props.edit.age)
            }
        }
        else {
            return    {
                name: '',
                age: '',
                height: '',
            }
        }
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
        if (props.edit) {
            dispatch(editSmurf({
                ...input,
                age: Number(age)
            }))
            props.setEdit()
        }
        else {
            dispatch(addSmurf({
            ...input,
            age: Number(age)
        }))
        }
    }

    return (
        <Form className='col-sm-6 mx-auto' onSubmit={submitHandler}>
            <h2>{props.edit?'Edit':'Add'} a Smurf</h2>
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
            <Button className='btn-success mt-3' type='submit'>{props.edit?'Edit':'Add'} Smurf</Button>
        </Form>
    )
}

export default SmurfForm