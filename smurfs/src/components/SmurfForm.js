import React from 'react'
import { useDispatch } from 'react-redux'

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
        <form onSubmit={submitHandler}>
            <input
                type='text'
                name='name'
                placeholder='Name'
                title='Name'
                required
                value={name}
                onChange={changeHandler}
            />
            <input
                type='text'
                name='age'
                placeholder='Age'
                title='Age: must be a number'
                required
                pattern="\d+"
                value={age}
                onChange={changeHandler}
            />
            <input
                type='text'
                name='height'
                placeholder='Height'
                title='Height'
                required
                value={height}
                onChange={changeHandler}
            />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default SmurfForm