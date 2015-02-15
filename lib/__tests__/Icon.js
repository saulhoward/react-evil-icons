"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

jest.dontMock("../Icon");

describe("Icon", function () {
  var React = _interopRequire(require("react/addons"));

  var Icon = _interopRequire(require("../Icon"));

  var TestUtils = React.addons.TestUtils;


  it("renders an svg by default", function () {
    var doc = TestUtils.renderIntoDocument(React.createElement(Icon, { name: "ei-eye", size: "s" }));
    var el = TestUtils.findRenderedDOMComponentWithTag(doc, "svg");
    expect(el).toBeDefined();
  });

  it("adds the `icon--ei-eye icon--s` class if the `name` property is set to `ei-eye` and the `size` property is set to `s`", function () {
    var doc = TestUtils.renderIntoDocument(React.createElement(Icon, { name: "ei-eye", size: "s" }));
    var el = TestUtils.findRenderedDOMComponentWithTag(doc, "div");
    expect(el.getDOMNode().className).toBe("icon icon--ei-eye icon--s");
  });
});