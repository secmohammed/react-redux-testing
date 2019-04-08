import { testStore } from '../setup.js'
import { index } from '../../store/actions/posts.js'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter';
const mock = new MockAdapter(axios);

describe('fetch posts', () => {
    it('Store is updated correctly', (done) => {
        const expectedState = [
            {
                title: 'Example Title 1',
                body: 'Some Text'
            },
            {
                title: 'Example Title 2',
                body: 'Some Text'
            }
        ]
        const store = testStore();
        mock.onGet('https://jsonplaceholder.typicode.com/posts?_limit=10').reply(200, expectedState);
        store.dispatch(index()).then(() => {
            const newState = store.getState();
            expect(newState.posts.posts).toBe(expectedState)
            
            done()
        })

    })
})