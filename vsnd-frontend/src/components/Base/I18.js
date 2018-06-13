import React, {Component, Fragment} from 'react';

const translationService = (key, ...params) => {

    const param = (key) => params[key] || '';

    const listEng = [
        {key: 'global.a', value: ' Title A'},
        {key: 'global.b', value: ' Title B'},
        {key: 'global.c', value: ' Title C'},
        {key: 'global.d', value: ` Title D ${param(0)}`},
        {key: 'global.e', value: ` Title E ${param(0)} , was geht ab ${param(1)} ${param(2)}`}
    ];
    const item = listEng.filter(i => i.key === key)[0] || '';

    return item.value || '';
};


class I18 extends Component {
    render() {
        return (<Fragment>{this.props.translate(translationService)}</Fragment>);
    }
}

export default I18