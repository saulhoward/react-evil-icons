"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

jest.dontMock("../index");

describe("lib", function () {
  it("exposes the `Icon` component", function () {
    var Icon = _interopRequire(require("../"));

    expect(Icon).toBeDefined();
  });
});