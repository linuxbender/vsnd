import {API_REQUEST} from '../actions/apiRequestAction';
import {hideUiLoader, showUiLoader} from '../actions/uiAction';

const apiRequest = ({dispatch}) => next => action => {

    if (action.type === API_REQUEST) {

        dispatch(showUiLoader());

        const {method, url, onSuccess, onError} = action.meta;

        try {
            fetch(url, {method}).then(JSON.parse)
                .then(response => {
                    dispatch({type: onSuccess, data: response});
                    dispatch(hideUiLoader());
                })
                .catch(error => {
                    dispatch({type: onError, data: error});
                    dispatch(hideUiLoader());
                })
        } catch (err) {
            dispatch(hideUiLoader())
        }
    }
    return next(action)
};

export const apiRequestMiddleware = [apiRequest];