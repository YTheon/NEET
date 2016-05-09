"use strict";

const should = require("should");

const index = require("../index.js");

describe("Main test", () => {
  describe("teszt()", () => {
    it("should return true", (done) => {
      should(index.teszt()).be.ok();
      done();
    });
  });
});
