import React from "react"
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

import App from './App'

let wrap = mount(<App />)

describe("Welcome", () => {
  it("Users should see a 'Welcome' message", () => {
    expect(wrap.text()).toContain("Welcome to Rememberer!")
  })
})
