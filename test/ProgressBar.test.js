import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import renderer from 'react-test-renderer';
import ProgressBar from '../public/js/progress-bar/ProgressBar'

jest.useFakeTimers();

describe('ProgressBar', () => {
  let container = null
  beforeAll(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterAll(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null;
  })

  test('Snapshot test', () => {
    // For snapshot test by react-test-renderer
    const tree = renderer
      .create(<ProgressBar/>)
      .toJSON();
    
    expect(tree).toMatchSnapshot();
  })

  test(`When it clicks button, width of progress bar changes from 
  0% to 100% for test time;It is 2seconds.`, (done) => {
    act(() => {
      render(<ProgressBar/>, container)
    })

    const button = document.body.querySelector('button')
    const bar = document.body.querySelector('#bar')

    act(() => {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      
      jest.advanceTimersByTime(2 * 1000);
    })

    expect(bar.style.width).toEqual("100%")
    done()
  })
})