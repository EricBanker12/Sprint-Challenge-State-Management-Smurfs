import React from 'react'

function SmurfForm(props) {
    return (
        <form>
            <input
                type='text'
                placeholder='Name'
                // value={}
                // onChange={}
            />
            <input
                type='text'
                placeholder='Age'
                // value={}
                // onChange={}
            />
            <input
                type='text'
                placeholder='Height'
                // value={}
                // onChange={}
            />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default SmurfForm