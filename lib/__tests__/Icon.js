"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

jest.dontMock("../Icon");

var React = _interopRequire(require("react"));
var ReactDOM = _interopRequire(require("react-dom"));
var TestUtils = _interopRequire(require("react-dom/test-utils"));

var Icon = _interopRequire(require("../Icon"));

describe("Icon", function () {
    it("renders an svg by default", function () {
        var doc = TestUtils.renderIntoDocument(React.createElement(Icon, { name: "ei-eye", size: "s" }));
        var el = TestUtils.findRenderedDOMComponentWithTag(doc, "svg");
        expect(el).toBeDefined();
    });

    it("adds the `icon--ei-eye icon--s` class if the `name` property is set to `ei-eye` and the `size` property is set to `s`", function () {
        var doc = TestUtils.renderIntoDocument(React.createElement(Icon, { name: "ei-eye", size: "s" }));
        var el = TestUtils.findRenderedDOMComponentWithTag(doc, "div");
        expect(ReactDOM.findDOMNode(el).className).toBe("icon icon--ei-eye icon--s");
    });
});