import React from 'react';
import ReactDOM from 'react-dom';
import {Board, Square} from './59/TicTacToeTest';
import 'jest-enzyme';
import { configure,shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Board />', ()=>{
    it('render a <Board /> component',()=>{
        const wrapper = shallow(<Board />);
        expect(wrapper.find(Square).length).toEqual(9);
    })

    it('Board should divide the Square into 3 rows',()=>{
        const wrapper = shallow(<Board />);
        expect(wrapper.find('.board-row').length).toEqual(3);
    })

    it('propagates the click to parent component', () => {
        const onClick = jest.fn();
        const wrapper = shallow(<Square value={null} onClick={onClick} />);
        wrapper.simulate('click');
        expect(onClick.mock.calls.length).toEqual(1);
      });
})
