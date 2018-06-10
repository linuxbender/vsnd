import {T_Store, T_SystemInfo, T_UserInterface} from './appTypes';

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

    it('create a default T_SystemInfo Object', () => {
        const systemInfo = T_SystemInfo;
        expect(systemInfo).not.toBeUndefined();
    });

    it('create a default T_UserInterface Object', ()=> {
        const ui = T_UserInterface;
        expect(ui).not.toBeUndefined();
    });

    it('T_UserInterface has a property isLoading with the default value false', () => {
        const ui = T_UserInterface;
        expect(ui.isLoading).not.toBeUndefined();
        expect(ui.isLoading).toBe(false);
    });
});