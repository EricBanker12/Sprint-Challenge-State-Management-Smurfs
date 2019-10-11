import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getSmurfs } from '../actions'

// import Smurf from './Smurf'

function SmurfList(props) {
    // API GET on mount
    React.useEffect(()=>{
        const dispatch = useDispatch()
        dispatch(getSmurfs())
    },[])

    // get smurfs
    const { smurfs } = useSelector(({smurfs})=>({smurfs}))

    return (
        <div>
            {/* {smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf} />)} */}
        </div>
    )
}

export default SmurfList