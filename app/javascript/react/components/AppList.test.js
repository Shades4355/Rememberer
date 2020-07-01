import React from "react"
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

import AppList from './AppList'

let singleApp = "test"

let wrap = mount(<AppList singleApp={singleApp} />)

describe("AppList 'Test'", () => {
  it("Users should see a list of apps, in this case 'test'", () => {
    expect(wrap.text()).toContain("test")
  })
})
