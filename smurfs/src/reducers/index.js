import { GET_SMURFS, SET_SMURFS, SET_ERROR } from '../actions'

const initState = {
    smurfs: [],
    loading: false,
    error: '',
}

function reducer(state = initState, action) {
    switch (action.type) {
        case GET_SMURFS:
            return {
                ...state,
                loading: true,
            }
        case SET_SMURFS:
            return {
                ...state,
                smurfs: action.payload,
                loading: false,
                error: '',
            }
        case SET_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}

export default reducer