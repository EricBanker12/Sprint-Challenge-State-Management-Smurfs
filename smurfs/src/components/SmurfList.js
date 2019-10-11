import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getSmurfs } from '../actions'

// import Smurf from './Smurf'

function SmurfList(props) {
    // API GET on mount
    const dispatch = useDispatch()

    React.useEffect(()=>{
        dispatch(getSmurfs())
    },[dispatch])

    // get smurfs
    const { smurfs } = useSelector(({smurfs})=>({smurfs}))

    return (
        <div>
            {/* {smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf} />)} */}
        </div>
    )
}

export default SmurfList