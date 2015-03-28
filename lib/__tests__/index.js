"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

jest.dontMock("../index");

var Icon = _interopRequire(require("../"));

describe("lib", function () {
    it("exposes the `Icon` component", function () {
        expect(Icon).toBeDefined();
    });
});