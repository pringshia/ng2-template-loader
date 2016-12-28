var expect = require("chai").expect;
var loader = require("../index");

describe("ng2-template-loader", function() {
 it("should escape html correctly", function() {
   var unescaped = "<a href='#'>Link</a>"
   var escaped = "&lt;a href=&#39;#&#39;&gt;Link&lt;/a&gt;"

   expect(loader(unescaped)).to.equal(escaped);
 });
 it("should escape braces correctly", function() {
   var unescaped = "var x = { a: { b: 2 } }";
   var escaped = "var x = {{'{'}} a: {{'{'}} b: 2 {{'}'}} {{'}'}}";

   expect(loader(unescaped)).to.equals(escaped);
 })
});
