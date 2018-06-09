import React from 'react';
import {shallow} from 'enzyme/build/index';
import Button from './Button';

describe('Button', () => {
    it('renders without crashing', () => {
        shallow(<Button/>);
    });
});