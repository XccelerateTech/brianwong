import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'jest-enzyme';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders a <App /> components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('header.App-header').length).toEqual(1);
  });

  //look for the image component that is being rendered

  it('renders a <App /> components with img',()=>{
    const wrapper = shallow(<App />);
    expect(wrapper.find('img.App-logo').length).toEqual(1);
  })

  it('renders with a p tag within header',()=>{
    const wrapper = shallow(<App />);
    expect(wrapper.find('header p').length).toEqual(1);
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

