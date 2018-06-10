import {apiRequestMiddleware} from './apiRequestMiddleware';

describe('apiRequest Middleware', () => {

    let create = undefined;

    beforeEach(() => {
        create = () => {
            const store = {
                getState: jest.fn(() => ({})),
                dispatch: jest.fn(),
            };
            const next = jest.fn();
            const invoke = (action) => apiRequestMiddleware[0](store)(next)(action);
            return {store, next, invoke}
        }
    });

    it('apiRequest is not undefined', () => {
        const apiRequest = apiRequestMiddleware[0];
        expect(apiRequest).not.toBeUndefined();
    });

    it('apiRequestMiddleware', () => {
        const {next, invoke} = create();
        const action = {type: 'TEST'};
        invoke(action);
        expect(next).toHaveBeenCalledWith(action)
    });
});