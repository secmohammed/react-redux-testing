import { GET_POSTS } from '../../actions/types'
import postsReducer from '../postsReducer.js'
describe('Posts Reducer', () => {
    it('should return default state', () => {
        const newState = postsReducer(undefined, {})
        expect(newState).toEqual({})
    })

    it('Should return new state if receiving type', () => {
        const posts = [
            { title: 'Hello', id: 1},
            { title: 'There', id: 2},
            { title: 'Some', id: 3}
        ]
        const newState = postsReducer(undefined, {
            type: GET_POSTS,
            payload: posts
        })
        expect(newState.posts).toEqual(posts)
    })
})