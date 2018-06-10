import {hideUiLoader, showUiLoader} from '../actions/uiAction';
import {T_UserInterface} from '../utils/appTypes';
import uiReducer from './uiReducer';

describe('UI Reducer', () => {
    it('Ui reducer is defined', () => {
        const ui = uiReducer;
        expect(ui).not.toBeUndefined();
    });

    it('Ui reducer return a state', () => {
        const ui = uiReducer(undefined, {type: 'DEMO'});
        expect(ui).not.toBeUndefined();
    });

    it('should return the initial state', () => {
        const ui = uiReducer(undefined, {type: 'DEMO'});
        expect(ui).toBe(T_UserInterface);
    });

    it('should Handle SHOW_UI_LOADER', () => {
        const ui = uiReducer(undefined, showUiLoader());
        expect(ui.isLoading).toBe(true);
    });

    it('should Handle HIDE_UI_LOADER', () => {
        const ui = uiReducer({isLoading: true}, hideUiLoader());
        expect(ui.isLoading).toBe(false);
    });
});