import {HIDE_UI_LOADER, hideUiLoader, SHOW_UI_LOADER, showUiLoader} from './uiAction';

describe('UI Action', () => {
    it('should create an action to show ui loader with data parameter set to true', () => {
        const expectedAction = {
            type: SHOW_UI_LOADER,
            data: true
        };
        expect(showUiLoader()).toEqual(expectedAction);
        expect(showUiLoader().data).toBe(true);
    });
    it('should create an action to show ui loader with data parameter set to true', () => {
        const expectedAction = {
            type: HIDE_UI_LOADER,
            data: false
        };
        expect(hideUiLoader()).toEqual(expectedAction);
        expect(hideUiLoader().data).toBe(false);
    });
});