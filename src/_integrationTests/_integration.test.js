import moxios from 'moxios';
import { testStore } from '../../Utils';
import { fetchPosts } from '../actions';

describe('FetchPosts action', () => {
	beforeEach(() => {
		moxios.install();
	});

	afterEach(() => {
		moxios.uninstall();
	});

	test('Store is updated correctly', () => {
		const expectedState = [
			{
				title: 'Title 1',
				body: 'Desc',
			},
			{
				title: 'Title 2',
				body: 'Desc',
			},
			{
				title: 'Title 3',
				body: 'Desc',
			},
		];

		const store = testStore();

		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: expectedState,
			});
		});

		return store.dispatch(fetchPosts()).then(() => {
			const newState = store.getState();
			expect(newState.posts).toBe(expectedState);
		});
	});
});
