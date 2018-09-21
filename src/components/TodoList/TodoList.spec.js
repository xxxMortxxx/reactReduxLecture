import React from 'react';
import {shallow} from 'enzyme';

import TodoList from './TodoList';

it('should add todo item on add button press', () => {
  const wrapper = shallow(<TodoList/>);
  wrapper.setState({ newTodoText: 'new todo'});
  wrapper.find('button').simulate('click');
  expect(wrapper.find('.todo-item').length).toBe(1);
});