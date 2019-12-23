import React from 'react'
import renderer from 'react-test-renderer';
import { render, fireEvent, cleanup } from '@testing-library/react'

import MockCheckboxWithLabel from './mock/mock-checkboxWithLabel'

describe('mock_checkboxWithLabe', () => {
  afterEach(cleanup)

  test.skip('test with react-test-renderer', () => {
  // const Component = renderer.create(<CheckboxWithLabel labelOn="On" labelOff="Off" />)

  // let tree = Component.toJSON();

  // tree.props.onMouseEnter();
  // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
  })


  test('changes the text after click', () => {
    const {queryByLabelText, getByLabelText, container} = render(
      <MockCheckboxWithLabel labelOn="On" labelOff="Off" />,
    );

    expect(container).toMatchSnapshot()
    
    expect(queryByLabelText(/off/i)).toBeTruthy();

    fireEvent.click(getByLabelText(/off/i));

    expect(queryByLabelText(/on/i)).toBeTruthy();
  })
})
