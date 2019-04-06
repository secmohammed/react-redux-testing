import { GET_POSTS } from '../actions/types'
export default (state = {}, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            };
        default:
            return state;
    }
}