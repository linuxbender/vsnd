import {T_Store} from './appTypes';

describe('App Types', () => {
    it('create a default T_Store Object', () => {
        const store = T_Store;
        expect(store).not.toBeUndefined();
    });

    it('T_Store Object has a property ui', () => {
        const store = T_Store;
        expect(store.ui).not.toBeUndefined();
    });

    it('T_Store Object has a property systemInfo', () => {
        const store = T_Store;
        expect(store.systemInfo).not.toBeUndefined();
    });

    it('T_Store Object has a property partnerInfo', () => {
        const store = T_Store;
        expect(store.partnerInfo).not.toBeUndefined();
    });
});