import axios from 'axios'

export const GET_SMURFS = 'GET_SMURFS'
export const SET_SMURFS = 'SET_SMURFS'
export const SET_ERROR = 'SET_ERROR'

export const getSmurfs = () => dispatch => {
    dispatch({type: GET_SMURFS})
    axios.get('http://localhost:3333/smurfs')
        .then(resp => {
            console.log(resp)
            dispatch({type: SET_SMURFS, payload: resp.data})
        })
        .catch(err => {
            console.error(err)
            dispatch({type: SET_ERROR, payload: err.message})
        })
}