var RevealTimeline = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/jsbi/dist/jsbi-umd.js
  var require_jsbi_umd = __commonJS({
    "node_modules/jsbi/dist/jsbi-umd.js"(exports, module) {
      (function(e2, t2) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t2() : "function" == typeof define && define.amd ? define(t2) : (e2 = e2 || self, e2.JSBI = t2());
      })(exports, function() {
        "use strict";
        var e2 = Math.imul, t2 = Math.clz32;
        function i2(t3, i3) {
          (null == i3 || i3 > t3.length) && (i3 = t3.length);
          for (var _3 = 0, o3 = Array(i3); _3 < i3; _3++)
            o3[_3] = t3[_3];
          return o3;
        }
        function _2(e3) {
          if (Array.isArray(e3))
            return e3;
        }
        function n2(t3) {
          if (void 0 === t3)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t3;
        }
        function o2(i3, t3, _3) {
          return t3 = r2(t3), v2(i3, b2() ? Reflect.construct(t3, _3 || [], r2(i3).constructor) : t3.apply(i3, _3));
        }
        function l2(e3, t3) {
          if (!(e3 instanceof t3))
            throw new TypeError("Cannot call a class as a function");
        }
        function g2(i3, t3, e3) {
          if (b2())
            return Reflect.construct.apply(null, arguments);
          var _3 = [null];
          _3.push.apply(_3, t3);
          var n3 = new (i3.bind.apply(i3, _3))();
          return e3 && y2(n3, e3.prototype), n3;
        }
        function a2(i3, e3) {
          for (var _3, n3 = 0; n3 < e3.length; n3++)
            _3 = e3[n3], _3.enumerable = _3.enumerable || false, _3.configurable = true, "value" in _3 && (_3.writable = true), Object.defineProperty(i3, D2(_3.key), _3);
        }
        function s2(i3, e3, _3) {
          return e3 && a2(i3.prototype, e3), _3 && a2(i3, _3), Object.defineProperty(i3, "prototype", { writable: false }), i3;
        }
        function u2(i3, _3) {
          var e3 = "undefined" != typeof Symbol && i3[Symbol.iterator] || i3["@@iterator"];
          if (!e3) {
            if (Array.isArray(i3) || (e3 = B2(i3)) || _3 && i3 && "number" == typeof i3.length) {
              e3 && (i3 = e3);
              var l3 = 0, g3 = function() {
              };
              return { s: g3, n: function() {
                return l3 >= i3.length ? { done: true } : { done: false, value: i3[l3++] };
              }, e: function(e4) {
                throw e4;
              }, f: g3 };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }
          var s3, d3 = true, h3 = false;
          return { s: function() {
            e3 = e3.call(i3);
          }, n: function() {
            var t3 = e3.next();
            return d3 = t3.done, t3;
          }, e: function(e4) {
            h3 = true, s3 = e4;
          }, f: function() {
            try {
              d3 || null == e3.return || e3.return();
            } finally {
              if (h3)
                throw s3;
            }
          } };
        }
        function r2(e3) {
          return r2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e4) {
            return e4.__proto__ || Object.getPrototypeOf(e4);
          }, r2(e3);
        }
        function d2(i3, t3) {
          if ("function" != typeof t3 && null !== t3)
            throw new TypeError("Super expression must either be null or a function");
          i3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: i3, writable: true, configurable: true } }), Object.defineProperty(i3, "prototype", { writable: false }), t3 && y2(i3, t3);
        }
        function h2(e3) {
          try {
            return -1 !== Function.toString.call(e3).indexOf("[native code]");
          } catch (t3) {
            return "function" == typeof e3;
          }
        }
        function b2() {
          try {
            var e3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            }));
          } catch (e4) {
          }
          return (b2 = function() {
            return !!e3;
          })();
        }
        function m2(_3, g3) {
          var l3 = null == _3 ? null : "undefined" != typeof Symbol && _3[Symbol.iterator] || _3["@@iterator"];
          if (null != l3) {
            var s3, d3, r3, h3, b3 = [], a3 = true, m3 = false;
            try {
              if (r3 = (l3 = l3.call(_3)).next, 0 === g3) {
                if (Object(l3) !== l3)
                  return;
                a3 = false;
              } else
                for (; !(a3 = (s3 = r3.call(l3)).done) && (b3.push(s3.value), b3.length !== g3); a3 = true)
                  ;
            } catch (e3) {
              m3 = true, d3 = e3;
            } finally {
              try {
                if (!a3 && null != l3.return && (h3 = l3.return(), Object(h3) !== h3))
                  return;
              } finally {
                if (m3)
                  throw d3;
              }
            }
            return b3;
          }
        }
        function c2() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function v2(i3, t3) {
          if (t3 && ("object" == typeof t3 || "function" == typeof t3))
            return t3;
          if (void 0 !== t3)
            throw new TypeError("Derived constructors may only return object or undefined");
          return n2(i3);
        }
        function y2(i3, t3) {
          return y2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i4, t4) {
            return i4.__proto__ = t4, i4;
          }, y2(i3, t3);
        }
        function f2(t3, i3) {
          return _2(t3) || m2(t3, i3) || B2(t3, i3) || c2();
        }
        function k2(_3, t3) {
          if ("object" != typeof _3 || !_3)
            return _3;
          var n3 = _3[Symbol.toPrimitive];
          if (void 0 !== n3) {
            var e3 = n3.call(_3, t3 || "default");
            if ("object" != typeof e3)
              return e3;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t3 ? String : Number)(_3);
        }
        function D2(e3) {
          var t3 = k2(e3, "string");
          return "symbol" == typeof t3 ? t3 : t3 + "";
        }
        function p2(e3) {
          "@babel/helpers - typeof";
          return p2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          }, p2(e3);
        }
        function B2(e3, _3) {
          if (e3) {
            if ("string" == typeof e3)
              return i2(e3, _3);
            var n3 = {}.toString.call(e3).slice(8, -1);
            return "Object" === n3 && e3.constructor && (n3 = e3.constructor.name), "Map" === n3 || "Set" === n3 ? Array.from(e3) : "Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? i2(e3, _3) : void 0;
          }
        }
        function S2(e3) {
          var i3 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
          return S2 = function(e4) {
            function t3() {
              return g2(e4, arguments, r2(this).constructor);
            }
            if (null === e4 || !h2(e4))
              return e4;
            if ("function" != typeof e4)
              throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== i3) {
              if (i3.has(e4))
                return i3.get(e4);
              i3.set(e4, t3);
            }
            return t3.prototype = Object.create(e4.prototype, { constructor: { value: t3, enumerable: false, writable: true, configurable: true } }), y2(t3, e4);
          }, S2(e3);
        }
        var C2 = function(e3) {
          var t3 = Math.abs, i3 = Math.max, _3 = Math.floor;
          function g3(e4, t4) {
            var i4;
            if (l2(this, g3), i4 = o2(this, g3, [e4]), i4.sign = t4, Object.setPrototypeOf(i4, g3.prototype), e4 > g3.__kMaxLength)
              throw new RangeError("Maximum BigInt size exceeded");
            return i4;
          }
          return d2(g3, e3), s2(g3, [{ key: "toDebugString", value: function e4() {
            var t4, i4 = ["BigInt["], _4 = u2(this);
            try {
              for (_4.s(); !(t4 = _4.n()).done; ) {
                var n3 = t4.value;
                i4.push((n3 ? (n3 >>> 0).toString(16) : n3) + ", ");
              }
            } catch (e5) {
              _4.e(e5);
            } finally {
              _4.f();
            }
            return i4.push("]"), i4.join("");
          } }, { key: "toString", value: function e4() {
            var t4 = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 10;
            if (2 > t4 || 36 < t4)
              throw new RangeError("toString() radix argument must be between 2 and 36");
            return 0 === this.length ? "0" : 0 == (t4 & t4 - 1) ? g3.__toStringBasePowerOfTwo(this, t4) : g3.__toStringGeneric(this, t4, false);
          } }, { key: "valueOf", value: function e4() {
            throw new Error("Convert JSBI instances to native numbers using `toNumber`.");
          } }, { key: "__copy", value: function e4() {
            for (var t4 = new g3(this.length, this.sign), _4 = 0; _4 < this.length; _4++)
              t4[_4] = this[_4];
            return t4;
          } }, { key: "__trim", value: function e4() {
            for (var t4 = this.length, i4 = this[t4 - 1]; 0 === i4; )
              t4--, i4 = this[t4 - 1], this.pop();
            return 0 === t4 && (this.sign = false), this;
          } }, { key: "__initializeDigits", value: function e4() {
            for (var t4 = 0; t4 < this.length; t4++)
              this[t4] = 0;
          } }, { key: "__clzmsd", value: function e4() {
            return g3.__clz30(this.__digit(this.length - 1));
          } }, { key: "__inplaceMultiplyAdd", value: function n3(e4, t4, _4) {
            _4 > this.length && (_4 = this.length);
            for (var o3 = 32767 & e4, l3 = e4 >>> 15, a3 = 0, s3 = t4, u3 = 0; u3 < _4; u3++) {
              var r3 = this.__digit(u3), h3 = 32767 & r3, b3 = r3 >>> 15, m3 = g3.__imul(h3, o3), c3 = g3.__imul(h3, l3), v3 = g3.__imul(b3, o3), y3 = g3.__imul(b3, l3), f3 = s3 + m3 + a3;
              a3 = f3 >>> 30, f3 &= 1073741823, f3 += ((32767 & c3) << 15) + ((32767 & v3) << 15), a3 += f3 >>> 30, s3 = y3 + (c3 >>> 15) + (v3 >>> 15), this.__setDigit(u3, 1073741823 & f3);
            }
            if (0 !== a3 || 0 !== s3)
              throw new Error("implementation bug");
          } }, { key: "__inplaceAdd", value: function n3(e4, t4, _4) {
            for (var o3, l3 = 0, g4 = 0; g4 < _4; g4++)
              o3 = this.__halfDigit(t4 + g4) + e4.__halfDigit(g4) + l3, l3 = o3 >>> 15, this.__setHalfDigit(t4 + g4, 32767 & o3);
            return l3;
          } }, { key: "__inplaceSub", value: function n3(e4, t4, _4) {
            var o3 = _4 - 1 >>> 1, l3 = 0;
            if (1 & t4) {
              t4 >>= 1;
              for (var g4 = this.__digit(t4), a3 = 32767 & g4, s3 = 0; s3 < o3; s3++) {
                var u3 = e4.__digit(s3), r3 = (g4 >>> 15) - (32767 & u3) - l3;
                l3 = 1 & r3 >>> 15, this.__setDigit(t4 + s3, (32767 & r3) << 15 | 32767 & a3), g4 = this.__digit(t4 + s3 + 1), a3 = (32767 & g4) - (u3 >>> 15) - l3, l3 = 1 & a3 >>> 15;
              }
              var d3 = e4.__digit(s3), h3 = (g4 >>> 15) - (32767 & d3) - l3;
              l3 = 1 & h3 >>> 15, this.__setDigit(t4 + s3, (32767 & h3) << 15 | 32767 & a3);
              var b3 = d3 >>> 15;
              if (t4 + s3 + 1 >= this.length)
                throw new RangeError("out of bounds");
              0 == (1 & _4) && (g4 = this.__digit(t4 + s3 + 1), a3 = (32767 & g4) - b3 - l3, l3 = 1 & a3 >>> 15, this.__setDigit(t4 + e4.length, 1073709056 & g4 | 32767 & a3));
            } else {
              t4 >>= 1;
              for (var m3 = 0; m3 < e4.length - 1; m3++) {
                var c3 = this.__digit(t4 + m3), v3 = e4.__digit(m3), y3 = (32767 & c3) - (32767 & v3) - l3;
                l3 = 1 & y3 >>> 15;
                var f3 = (c3 >>> 15) - (v3 >>> 15) - l3;
                l3 = 1 & f3 >>> 15, this.__setDigit(t4 + m3, (32767 & f3) << 15 | 32767 & y3);
              }
              var k3 = this.__digit(t4 + m3), D3 = e4.__digit(m3), p3 = (32767 & k3) - (32767 & D3) - l3;
              l3 = 1 & p3 >>> 15;
              var B3 = 0;
              0 == (1 & _4) && (B3 = (k3 >>> 15) - (D3 >>> 15) - l3, l3 = 1 & B3 >>> 15), this.__setDigit(t4 + m3, (32767 & B3) << 15 | 32767 & p3);
            }
            return l3;
          } }, { key: "__inplaceRightShift", value: function t4(e4) {
            if (0 !== e4) {
              for (var _4, n3 = this.__digit(0) >>> e4, o3 = this.length - 1, l3 = 0; l3 < o3; l3++)
                _4 = this.__digit(l3 + 1), this.__setDigit(l3, 1073741823 & _4 << 30 - e4 | n3), n3 = _4 >>> e4;
              this.__setDigit(o3, n3);
            }
          } }, { key: "__digit", value: function t4(e4) {
            return this[e4];
          } }, { key: "__unsignedDigit", value: function t4(e4) {
            return this[e4] >>> 0;
          } }, { key: "__setDigit", value: function i4(e4, t4) {
            this[e4] = 0 | t4;
          } }, { key: "__setDigitGrow", value: function i4(e4, t4) {
            this[e4] = 0 | t4;
          } }, { key: "__halfDigitLength", value: function e4() {
            var t4 = this.length;
            return 32767 >= this.__unsignedDigit(t4 - 1) ? 2 * t4 - 1 : 2 * t4;
          } }, { key: "__halfDigit", value: function t4(e4) {
            return 32767 & this[e4 >>> 1] >>> 15 * (1 & e4);
          } }, { key: "__setHalfDigit", value: function i4(e4, t4) {
            var _4 = e4 >>> 1, n3 = this.__digit(_4), o3 = 1 & e4 ? 32767 & n3 | t4 << 15 : 1073709056 & n3 | 32767 & t4;
            this.__setDigit(_4, o3);
          } }], [{ key: "BigInt", value: function t4(e4) {
            var i4 = Number.isFinite;
            if ("number" == typeof e4) {
              if (0 === e4)
                return g3.__zero();
              if (g3.__isOneDigitInt(e4))
                return 0 > e4 ? g3.__oneDigit(-e4, true) : g3.__oneDigit(e4, false);
              if (!i4(e4) || _3(e4) !== e4)
                throw new RangeError("The number " + e4 + " cannot be converted to BigInt because it is not an integer");
              return g3.__fromDouble(e4);
            }
            if ("string" == typeof e4) {
              var n3 = g3.__fromString(e4);
              if (null === n3)
                throw new SyntaxError("Cannot convert " + e4 + " to a BigInt");
              return n3;
            }
            if ("boolean" == typeof e4)
              return true === e4 ? g3.__oneDigit(1, false) : g3.__zero();
            if ("object" === p2(e4)) {
              if (e4.constructor === g3)
                return e4;
              var o3 = g3.__toPrimitive(e4);
              return g3.BigInt(o3);
            }
            throw new TypeError("Cannot convert " + e4 + " to a BigInt");
          } }, { key: "toNumber", value: function t4(e4) {
            var i4 = e4.length;
            if (0 === i4)
              return 0;
            if (1 === i4) {
              var _4 = e4.__unsignedDigit(0);
              return e4.sign ? -_4 : _4;
            }
            var n3 = e4.__digit(i4 - 1), o3 = g3.__clz30(n3), l3 = 30 * i4 - o3;
            if (1024 < l3)
              return e4.sign ? -Infinity : 1 / 0;
            var a3 = l3 - 1, s3 = n3, u3 = i4 - 1, r3 = o3 + 3, d3 = 32 === r3 ? 0 : s3 << r3;
            d3 >>>= 12;
            var h3 = r3 - 12, b3 = 12 <= r3 ? 0 : s3 << 20 + r3, m3 = 20 + r3;
            for (0 < h3 && 0 < u3 && (u3--, s3 = e4.__digit(u3), d3 |= s3 >>> 30 - h3, b3 = s3 << h3 + 2, m3 = h3 + 2); 0 < m3 && 0 < u3; )
              u3--, s3 = e4.__digit(u3), b3 |= 30 <= m3 ? s3 << m3 - 30 : s3 >>> 30 - m3, m3 -= 30;
            var c3 = g3.__decideRounding(e4, m3, u3, s3);
            if ((1 === c3 || 0 === c3 && 1 == (1 & b3)) && (b3 = b3 + 1 >>> 0, 0 === b3 && (d3++, 0 != d3 >>> 20 && (d3 = 0, a3++, 1023 < a3))))
              return e4.sign ? -Infinity : 1 / 0;
            var v3 = e4.sign ? -2147483648 : 0;
            return a3 = a3 + 1023 << 20, g3.__kBitConversionInts[g3.__kBitConversionIntHigh] = v3 | a3 | d3, g3.__kBitConversionInts[g3.__kBitConversionIntLow] = b3, g3.__kBitConversionDouble[0];
          } }, { key: "unaryMinus", value: function t4(e4) {
            if (0 === e4.length)
              return e4;
            var i4 = e4.__copy();
            return i4.sign = !e4.sign, i4;
          } }, { key: "bitwiseNot", value: function t4(e4) {
            return e4.sign ? g3.__absoluteSubOne(e4).__trim() : g3.__absoluteAddOne(e4, true);
          } }, { key: "exponentiate", value: function i4(e4, t4) {
            if (t4.sign)
              throw new RangeError("Exponent must be positive");
            if (0 === t4.length)
              return g3.__oneDigit(1, false);
            if (0 === e4.length)
              return e4;
            if (1 === e4.length && 1 === e4.__digit(0))
              return e4.sign && 0 == (1 & t4.__digit(0)) ? g3.unaryMinus(e4) : e4;
            if (1 < t4.length)
              throw new RangeError("BigInt too big");
            var _4 = t4.__unsignedDigit(0);
            if (1 === _4)
              return e4;
            if (_4 >= g3.__kMaxLengthBits)
              throw new RangeError("BigInt too big");
            if (1 === e4.length && 2 === e4.__digit(0)) {
              var n3 = 1 + (0 | _4 / 30), o3 = e4.sign && 0 != (1 & _4), l3 = new g3(n3, o3);
              l3.__initializeDigits();
              var a3 = 1 << _4 % 30;
              return l3.__setDigit(n3 - 1, a3), l3;
            }
            var s3 = null, u3 = e4;
            for (0 != (1 & _4) && (s3 = e4), _4 >>= 1; 0 !== _4; _4 >>= 1)
              u3 = g3.multiply(u3, u3), 0 != (1 & _4) && (null === s3 ? s3 = u3 : s3 = g3.multiply(s3, u3));
            return s3;
          } }, { key: "multiply", value: function _4(e4, t4) {
            if (0 === e4.length)
              return e4;
            if (0 === t4.length)
              return t4;
            var n3 = e4.length + t4.length;
            30 <= e4.__clzmsd() + t4.__clzmsd() && n3--;
            var o3 = new g3(n3, e4.sign !== t4.sign);
            o3.__initializeDigits();
            for (var l3 = 0; l3 < e4.length; l3++)
              g3.__multiplyAccumulate(t4, e4.__digit(l3), o3, l3);
            return o3.__trim();
          } }, { key: "divide", value: function i4(e4, t4) {
            if (0 === t4.length)
              throw new RangeError("Division by zero");
            if (0 > g3.__absoluteCompare(e4, t4))
              return g3.__zero();
            var _4, n3 = e4.sign !== t4.sign, o3 = t4.__unsignedDigit(0);
            if (1 === t4.length && 32767 >= o3) {
              if (1 === o3)
                return n3 === e4.sign ? e4 : g3.unaryMinus(e4);
              _4 = g3.__absoluteDivSmall(e4, o3, null);
            } else
              _4 = g3.__absoluteDivLarge(e4, t4, true, false);
            return _4.sign = n3, _4.__trim();
          } }, { key: "remainder", value: function i4(e4, t4) {
            if (0 === t4.length)
              throw new RangeError("Division by zero");
            if (0 > g3.__absoluteCompare(e4, t4))
              return e4;
            var _4 = t4.__unsignedDigit(0);
            if (1 === t4.length && 32767 >= _4) {
              if (1 === _4)
                return g3.__zero();
              var n3 = g3.__absoluteModSmall(e4, _4);
              return 0 === n3 ? g3.__zero() : g3.__oneDigit(n3, e4.sign);
            }
            var i5 = g3.__absoluteDivLarge(e4, t4, false, true);
            return i5.sign = e4.sign, i5.__trim();
          } }, { key: "add", value: function i4(e4, t4) {
            var _4 = e4.sign;
            return _4 === t4.sign ? g3.__absoluteAdd(e4, t4, _4) : 0 <= g3.__absoluteCompare(e4, t4) ? g3.__absoluteSub(e4, t4, _4) : g3.__absoluteSub(t4, e4, !_4);
          } }, { key: "subtract", value: function i4(e4, t4) {
            var _4 = e4.sign;
            return _4 === t4.sign ? 0 <= g3.__absoluteCompare(e4, t4) ? g3.__absoluteSub(e4, t4, _4) : g3.__absoluteSub(t4, e4, !_4) : g3.__absoluteAdd(e4, t4, _4);
          } }, { key: "leftShift", value: function i4(e4, t4) {
            return 0 === t4.length || 0 === e4.length ? e4 : t4.sign ? g3.__rightShiftByAbsolute(e4, t4) : g3.__leftShiftByAbsolute(e4, t4);
          } }, { key: "signedRightShift", value: function i4(e4, t4) {
            return 0 === t4.length || 0 === e4.length ? e4 : t4.sign ? g3.__leftShiftByAbsolute(e4, t4) : g3.__rightShiftByAbsolute(e4, t4);
          } }, { key: "unsignedRightShift", value: function e4() {
            throw new TypeError("BigInts have no unsigned right shift; use >> instead");
          } }, { key: "lessThan", value: function i4(e4, t4) {
            return 0 > g3.__compareToBigInt(e4, t4);
          } }, { key: "lessThanOrEqual", value: function i4(e4, t4) {
            return 0 >= g3.__compareToBigInt(e4, t4);
          } }, { key: "greaterThan", value: function i4(e4, t4) {
            return 0 < g3.__compareToBigInt(e4, t4);
          } }, { key: "greaterThanOrEqual", value: function i4(e4, t4) {
            return 0 <= g3.__compareToBigInt(e4, t4);
          } }, { key: "equal", value: function _4(e4, t4) {
            if (e4.sign !== t4.sign)
              return false;
            if (e4.length !== t4.length)
              return false;
            for (var n3 = 0; n3 < e4.length; n3++)
              if (e4.__digit(n3) !== t4.__digit(n3))
                return false;
            return true;
          } }, { key: "notEqual", value: function i4(e4, t4) {
            return !g3.equal(e4, t4);
          } }, { key: "bitwiseAnd", value: function _4(e4, t4) {
            if (!e4.sign && !t4.sign)
              return g3.__absoluteAnd(e4, t4).__trim();
            if (e4.sign && t4.sign) {
              var n3 = i3(e4.length, t4.length) + 1, o3 = g3.__absoluteSubOne(e4, n3), l3 = g3.__absoluteSubOne(t4);
              return o3 = g3.__absoluteOr(o3, l3, o3), g3.__absoluteAddOne(o3, true, o3).__trim();
            }
            if (e4.sign) {
              var a3 = [t4, e4];
              e4 = a3[0], t4 = a3[1];
            }
            return g3.__absoluteAndNot(e4, g3.__absoluteSubOne(t4)).__trim();
          } }, { key: "bitwiseXor", value: function _4(e4, t4) {
            if (!e4.sign && !t4.sign)
              return g3.__absoluteXor(e4, t4).__trim();
            if (e4.sign && t4.sign) {
              var n3 = i3(e4.length, t4.length), o3 = g3.__absoluteSubOne(e4, n3), l3 = g3.__absoluteSubOne(t4);
              return g3.__absoluteXor(o3, l3, o3).__trim();
            }
            var a3 = i3(e4.length, t4.length) + 1;
            if (e4.sign) {
              var s3 = [t4, e4];
              e4 = s3[0], t4 = s3[1];
            }
            var u3 = g3.__absoluteSubOne(t4, a3);
            return u3 = g3.__absoluteXor(u3, e4, u3), g3.__absoluteAddOne(u3, true, u3).__trim();
          } }, { key: "bitwiseOr", value: function _4(e4, t4) {
            var n3 = i3(e4.length, t4.length);
            if (!e4.sign && !t4.sign)
              return g3.__absoluteOr(e4, t4).__trim();
            if (e4.sign && t4.sign) {
              var o3 = g3.__absoluteSubOne(e4, n3), l3 = g3.__absoluteSubOne(t4);
              return o3 = g3.__absoluteAnd(o3, l3, o3), g3.__absoluteAddOne(o3, true, o3).__trim();
            }
            if (e4.sign) {
              var a3 = [t4, e4];
              e4 = a3[0], t4 = a3[1];
            }
            var s3 = g3.__absoluteSubOne(t4, n3);
            return s3 = g3.__absoluteAndNot(s3, e4, s3), g3.__absoluteAddOne(s3, true, s3).__trim();
          } }, { key: "asIntN", value: function o3(e4, t4) {
            if (0 === t4.length)
              return t4;
            if (e4 = _3(e4), 0 > e4)
              throw new RangeError("Invalid value: not (convertible to) a safe integer");
            if (0 === e4)
              return g3.__zero();
            if (e4 >= g3.__kMaxLengthBits)
              return t4;
            var l3 = 0 | (e4 + 29) / 30;
            if (t4.length < l3)
              return t4;
            var a3 = t4.__unsignedDigit(l3 - 1), s3 = 1 << (e4 - 1) % 30;
            if (t4.length === l3 && a3 < s3)
              return t4;
            var u3 = (a3 & s3) === s3;
            if (!u3)
              return g3.__truncateToNBits(e4, t4);
            if (!t4.sign)
              return g3.__truncateAndSubFromPowerOfTwo(e4, t4, true);
            if (0 == (a3 & s3 - 1)) {
              for (var r3 = l3 - 2; 0 <= r3; r3--)
                if (0 !== t4.__digit(r3))
                  return g3.__truncateAndSubFromPowerOfTwo(e4, t4, false);
              return t4.length === l3 && a3 === s3 ? t4 : g3.__truncateToNBits(e4, t4);
            }
            return g3.__truncateAndSubFromPowerOfTwo(e4, t4, false);
          } }, { key: "asUintN", value: function i4(e4, t4) {
            if (0 === t4.length)
              return t4;
            if (e4 = _3(e4), 0 > e4)
              throw new RangeError("Invalid value: not (convertible to) a safe integer");
            if (0 === e4)
              return g3.__zero();
            if (t4.sign) {
              if (e4 > g3.__kMaxLengthBits)
                throw new RangeError("BigInt too big");
              return g3.__truncateAndSubFromPowerOfTwo(e4, t4, false);
            }
            if (e4 >= g3.__kMaxLengthBits)
              return t4;
            var o3 = 0 | (e4 + 29) / 30;
            if (t4.length < o3)
              return t4;
            var l3 = e4 % 30;
            if (t4.length == o3) {
              if (0 === l3)
                return t4;
              var a3 = t4.__digit(o3 - 1);
              if (0 == a3 >>> l3)
                return t4;
            }
            return g3.__truncateToNBits(e4, t4);
          } }, { key: "ADD", value: function i4(e4, t4) {
            if (e4 = g3.__toPrimitive(e4), t4 = g3.__toPrimitive(t4), "string" == typeof e4)
              return "string" != typeof t4 && (t4 = t4.toString()), e4 + t4;
            if ("string" == typeof t4)
              return e4.toString() + t4;
            if (e4 = g3.__toNumeric(e4), t4 = g3.__toNumeric(t4), g3.__isBigInt(e4) && g3.__isBigInt(t4))
              return g3.add(e4, t4);
            if ("number" == typeof e4 && "number" == typeof t4)
              return e4 + t4;
            throw new TypeError("Cannot mix BigInt and other types, use explicit conversions");
          } }, { key: "LT", value: function i4(e4, t4) {
            return g3.__compare(e4, t4, 0);
          } }, { key: "LE", value: function i4(e4, t4) {
            return g3.__compare(e4, t4, 1);
          } }, { key: "GT", value: function i4(e4, t4) {
            return g3.__compare(e4, t4, 2);
          } }, { key: "GE", value: function i4(e4, t4) {
            return g3.__compare(e4, t4, 3);
          } }, { key: "EQ", value: function i4(e4, t4) {
            for (; true; ) {
              if (g3.__isBigInt(e4))
                return g3.__isBigInt(t4) ? g3.equal(e4, t4) : g3.EQ(t4, e4);
              if ("number" == typeof e4) {
                if (g3.__isBigInt(t4))
                  return g3.__equalToNumber(t4, e4);
                if ("object" !== p2(t4))
                  return e4 == t4;
                t4 = g3.__toPrimitive(t4);
              } else if ("string" == typeof e4) {
                if (g3.__isBigInt(t4))
                  return e4 = g3.__fromString(e4), null !== e4 && g3.equal(e4, t4);
                if ("object" !== p2(t4))
                  return e4 == t4;
                t4 = g3.__toPrimitive(t4);
              } else if ("boolean" == typeof e4) {
                if (g3.__isBigInt(t4))
                  return g3.__equalToNumber(t4, +e4);
                if ("object" !== p2(t4))
                  return e4 == t4;
                t4 = g3.__toPrimitive(t4);
              } else if ("symbol" === p2(e4)) {
                if (g3.__isBigInt(t4))
                  return false;
                if ("object" !== p2(t4))
                  return e4 == t4;
                t4 = g3.__toPrimitive(t4);
              } else if ("object" === p2(e4)) {
                if ("object" === p2(t4) && t4.constructor !== g3)
                  return e4 == t4;
                e4 = g3.__toPrimitive(e4);
              } else
                return e4 == t4;
            }
          } }, { key: "NE", value: function i4(e4, t4) {
            return !g3.EQ(e4, t4);
          } }, { key: "DataViewGetBigInt64", value: function i4(e4, t4) {
            var _4 = !!(2 < arguments.length && void 0 !== arguments[2]) && arguments[2];
            return g3.asIntN(64, g3.DataViewGetBigUint64(e4, t4, _4));
          } }, { key: "DataViewGetBigUint64", value: function i4(e4, t4) {
            var _4 = !!(2 < arguments.length && void 0 !== arguments[2]) && arguments[2], n3 = _4 ? [4, 0] : [0, 4], o3 = f2(n3, 2), a3 = o3[0], s3 = o3[1], l3 = e4.getUint32(t4 + a3, _4), u3 = e4.getUint32(t4 + s3, _4), r3 = new g3(3, false);
            return r3.__setDigit(0, 1073741823 & u3), r3.__setDigit(1, (268435455 & l3) << 2 | u3 >>> 30), r3.__setDigit(2, l3 >>> 28), r3.__trim();
          } }, { key: "DataViewSetBigInt64", value: function _4(e4, t4, i4) {
            var n3 = !!(3 < arguments.length && void 0 !== arguments[3]) && arguments[3];
            g3.DataViewSetBigUint64(e4, t4, i4, n3);
          } }, { key: "DataViewSetBigUint64", value: function _4(e4, t4, i4) {
            var n3 = !!(3 < arguments.length && void 0 !== arguments[3]) && arguments[3];
            i4 = g3.asUintN(64, i4);
            var o3 = 0, a3 = 0;
            if (0 < i4.length && (a3 = i4.__digit(0), 1 < i4.length)) {
              var s3 = i4.__digit(1);
              a3 |= s3 << 30, o3 = s3 >>> 2, 2 < i4.length && (o3 |= i4.__digit(2) << 28);
            }
            var u3 = n3 ? [4, 0] : [0, 4], r3 = f2(u3, 2), d3 = r3[0], h3 = r3[1];
            e4.setUint32(t4 + d3, o3, n3), e4.setUint32(t4 + h3, a3, n3);
          } }, { key: "__zero", value: function e4() {
            return new g3(0, false);
          } }, { key: "__oneDigit", value: function i4(e4, t4) {
            var _4 = new g3(1, t4);
            return _4.__setDigit(0, e4), _4;
          } }, { key: "__decideRounding", value: function n3(e4, t4, i4, _4) {
            if (0 < t4)
              return -1;
            var o3;
            if (0 > t4)
              o3 = -t4 - 1;
            else {
              if (0 === i4)
                return -1;
              i4--, _4 = e4.__digit(i4), o3 = 29;
            }
            var l3 = 1 << o3;
            if (0 == (_4 & l3))
              return -1;
            if (l3 -= 1, 0 != (_4 & l3))
              return 1;
            for (; 0 < i4; )
              if (i4--, 0 !== e4.__digit(i4))
                return 1;
            return 0;
          } }, { key: "__fromDouble", value: function t4(e4) {
            var i4 = 0 > e4;
            g3.__kBitConversionDouble[0] = e4;
            var _4, n3 = 2047 & g3.__kBitConversionInts[g3.__kBitConversionIntHigh] >>> 20, o3 = n3 - 1023, l3 = (0 | o3 / 30) + 1, a3 = new g3(l3, i4), s3 = 1048576, u3 = 1048575 & g3.__kBitConversionInts[g3.__kBitConversionIntHigh] | s3, r3 = g3.__kBitConversionInts[g3.__kBitConversionIntLow], d3 = 20, h3 = o3 % 30, b3 = 0;
            if (h3 < d3) {
              var m3 = d3 - h3;
              b3 = m3 + 32, _4 = u3 >>> m3, u3 = u3 << 32 - m3 | r3 >>> m3, r3 <<= 32 - m3;
            } else if (h3 === d3)
              b3 = 32, _4 = u3, u3 = r3, r3 = 0;
            else {
              var c3 = h3 - d3;
              b3 = 32 - c3, _4 = u3 << c3 | r3 >>> 32 - c3, u3 = r3 << c3, r3 = 0;
            }
            a3.__setDigit(l3 - 1, _4);
            for (var v3 = l3 - 2; 0 <= v3; v3--)
              0 < b3 ? (b3 -= 30, _4 = u3 >>> 2, u3 = u3 << 30 | r3 >>> 2, r3 <<= 30) : _4 = 0, a3.__setDigit(v3, _4);
            return a3.__trim();
          } }, { key: "__isWhitespace", value: function t4(e4) {
            return !!(13 >= e4 && 9 <= e4) || (159 >= e4 ? 32 == e4 : 131071 >= e4 ? 160 == e4 || 5760 == e4 : 196607 >= e4 ? (e4 &= 131071, 10 >= e4 || 40 == e4 || 41 == e4 || 47 == e4 || 95 == e4 || 4096 == e4) : 65279 == e4);
          } }, { key: "__fromString", value: function t4(e4) {
            var i4 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0, _4 = 0, n3 = e4.length, o3 = 0;
            if (o3 === n3)
              return g3.__zero();
            for (var l3 = e4.charCodeAt(o3); g3.__isWhitespace(l3); ) {
              if (++o3 === n3)
                return g3.__zero();
              l3 = e4.charCodeAt(o3);
            }
            if (43 === l3) {
              if (++o3 === n3)
                return null;
              l3 = e4.charCodeAt(o3), _4 = 1;
            } else if (45 === l3) {
              if (++o3 === n3)
                return null;
              l3 = e4.charCodeAt(o3), _4 = -1;
            }
            if (0 === i4) {
              if (i4 = 10, 48 === l3) {
                if (++o3 === n3)
                  return g3.__zero();
                if (l3 = e4.charCodeAt(o3), 88 === l3 || 120 === l3) {
                  if (i4 = 16, ++o3 === n3)
                    return null;
                  l3 = e4.charCodeAt(o3);
                } else if (79 === l3 || 111 === l3) {
                  if (i4 = 8, ++o3 === n3)
                    return null;
                  l3 = e4.charCodeAt(o3);
                } else if (66 === l3 || 98 === l3) {
                  if (i4 = 2, ++o3 === n3)
                    return null;
                  l3 = e4.charCodeAt(o3);
                }
              }
            } else if (16 === i4 && 48 === l3) {
              if (++o3 === n3)
                return g3.__zero();
              if (l3 = e4.charCodeAt(o3), 88 === l3 || 120 === l3) {
                if (++o3 === n3)
                  return null;
                l3 = e4.charCodeAt(o3);
              }
            }
            if (0 !== _4 && 10 !== i4)
              return null;
            for (; 48 === l3; ) {
              if (++o3 === n3)
                return g3.__zero();
              l3 = e4.charCodeAt(o3);
            }
            var a3 = n3 - o3, s3 = g3.__kMaxBitsPerChar[i4], u3 = g3.__kBitsPerCharTableMultiplier - 1;
            if (a3 > 1073741824 / s3)
              return null;
            var r3 = s3 * a3 + u3 >>> g3.__kBitsPerCharTableShift, h3 = 0 | (r3 + 29) / 30, b3 = new g3(h3, false), c3 = 10 > i4 ? i4 : 10, v3 = 10 < i4 ? i4 - 10 : 0;
            if (0 == (i4 & i4 - 1)) {
              s3 >>= g3.__kBitsPerCharTableShift;
              var y3 = [], f3 = [], k3 = false;
              do {
                for (var D3, p3 = 0, B3 = 0; true; ) {
                  if (D3 = void 0, l3 - 48 >>> 0 < c3)
                    D3 = l3 - 48;
                  else if ((32 | l3) - 97 >>> 0 < v3)
                    D3 = (32 | l3) - 87;
                  else {
                    k3 = true;
                    break;
                  }
                  if (B3 += s3, p3 = p3 << s3 | D3, ++o3 === n3) {
                    k3 = true;
                    break;
                  }
                  if (l3 = e4.charCodeAt(o3), 30 < B3 + s3)
                    break;
                }
                y3.push(p3), f3.push(B3);
              } while (!k3);
              g3.__fillFromParts(b3, y3, f3);
            } else {
              b3.__initializeDigits();
              var S3 = false, C3 = 0;
              do {
                for (var I2, A2 = 0, T2 = 1; true; ) {
                  if (I2 = void 0, l3 - 48 >>> 0 < c3)
                    I2 = l3 - 48;
                  else if ((32 | l3) - 97 >>> 0 < v3)
                    I2 = (32 | l3) - 87;
                  else {
                    S3 = true;
                    break;
                  }
                  var P2 = T2 * i4;
                  if (1073741823 < P2)
                    break;
                  if (T2 = P2, A2 = A2 * i4 + I2, C3++, ++o3 === n3) {
                    S3 = true;
                    break;
                  }
                  l3 = e4.charCodeAt(o3);
                }
                u3 = 30 * g3.__kBitsPerCharTableMultiplier - 1;
                var O2 = 0 | (s3 * C3 + u3 >>> g3.__kBitsPerCharTableShift) / 30;
                b3.__inplaceMultiplyAdd(T2, A2, O2);
              } while (!S3);
            }
            if (o3 !== n3) {
              if (!g3.__isWhitespace(l3))
                return null;
              for (o3++; o3 < n3; o3++)
                if (l3 = e4.charCodeAt(o3), !g3.__isWhitespace(l3))
                  return null;
            }
            return b3.sign = -1 === _4, b3.__trim();
          } }, { key: "__fillFromParts", value: function n3(e4, t4, _4) {
            for (var o3 = 0, l3 = 0, g4 = 0, a3 = t4.length - 1; 0 <= a3; a3--) {
              var s3 = t4[a3], u3 = _4[a3];
              l3 |= s3 << g4, g4 += u3, 30 === g4 ? (e4.__setDigit(o3++, l3), g4 = 0, l3 = 0) : 30 < g4 && (e4.__setDigit(o3++, 1073741823 & l3), g4 -= 30, l3 = s3 >>> u3 - g4);
            }
            if (0 !== l3) {
              if (o3 >= e4.length)
                throw new Error("implementation bug");
              e4.__setDigit(o3++, l3);
            }
            for (; o3 < e4.length; o3++)
              e4.__setDigit(o3, 0);
          } }, { key: "__toStringBasePowerOfTwo", value: function _4(e4, t4) {
            var n3 = e4.length, o3 = t4 - 1;
            o3 = (85 & o3 >>> 1) + (85 & o3), o3 = (51 & o3 >>> 2) + (51 & o3), o3 = (15 & o3 >>> 4) + (15 & o3);
            var l3 = o3, a3 = t4 - 1, s3 = e4.__digit(n3 - 1), u3 = g3.__clz30(s3), r3 = 30 * n3 - u3, d3 = 0 | (r3 + l3 - 1) / l3;
            if (e4.sign && d3++, 268435456 < d3)
              throw new Error("string too long");
            for (var h3 = Array(d3), b3 = d3 - 1, m3 = 0, c3 = 0, v3 = 0; v3 < n3 - 1; v3++) {
              var y3 = e4.__digit(v3), f3 = (m3 | y3 << c3) & a3;
              h3[b3--] = g3.__kConversionChars[f3];
              var k3 = l3 - c3;
              for (m3 = y3 >>> k3, c3 = 30 - k3; c3 >= l3; )
                h3[b3--] = g3.__kConversionChars[m3 & a3], m3 >>>= l3, c3 -= l3;
            }
            var D3 = (m3 | s3 << c3) & a3;
            for (h3[b3--] = g3.__kConversionChars[D3], m3 = s3 >>> l3 - c3; 0 !== m3; )
              h3[b3--] = g3.__kConversionChars[m3 & a3], m3 >>>= l3;
            if (e4.sign && (h3[b3--] = "-"), -1 !== b3)
              throw new Error("implementation bug");
            return h3.join("");
          } }, { key: "__toStringGeneric", value: function n3(e4, t4, _4) {
            var o3 = e4.length;
            if (0 === o3)
              return "";
            if (1 === o3) {
              var l3 = e4.__unsignedDigit(0).toString(t4);
              return false === _4 && e4.sign && (l3 = "-" + l3), l3;
            }
            var a3 = 30 * o3 - g3.__clz30(e4.__digit(o3 - 1)), s3 = g3.__kMaxBitsPerChar[t4], u3 = s3 - 1, r3 = a3 * g3.__kBitsPerCharTableMultiplier;
            r3 += u3 - 1, r3 = 0 | r3 / u3;
            var d3, h3, b3 = r3 + 1 >> 1, m3 = g3.exponentiate(g3.__oneDigit(t4, false), g3.__oneDigit(b3, false)), c3 = m3.__unsignedDigit(0);
            if (1 === m3.length && 32767 >= c3) {
              d3 = new g3(e4.length, false), d3.__initializeDigits();
              for (var v3, y3 = 0, f3 = 2 * e4.length - 1; 0 <= f3; f3--)
                v3 = y3 << 15 | e4.__halfDigit(f3), d3.__setHalfDigit(f3, 0 | v3 / c3), y3 = 0 | v3 % c3;
              h3 = y3.toString(t4);
            } else {
              var k3 = g3.__absoluteDivLarge(e4, m3, true, true);
              d3 = k3.quotient;
              var D3 = k3.remainder.__trim();
              h3 = g3.__toStringGeneric(D3, t4, true);
            }
            d3.__trim();
            for (var p3 = g3.__toStringGeneric(d3, t4, true); h3.length < b3; )
              h3 = "0" + h3;
            return false === _4 && e4.sign && (p3 = "-" + p3), p3 + h3;
          } }, { key: "__unequalSign", value: function t4(e4) {
            return e4 ? -1 : 1;
          } }, { key: "__absoluteGreater", value: function t4(e4) {
            return e4 ? -1 : 1;
          } }, { key: "__absoluteLess", value: function t4(e4) {
            return e4 ? 1 : -1;
          } }, { key: "__compareToBigInt", value: function i4(e4, t4) {
            var _4 = e4.sign;
            if (_4 !== t4.sign)
              return g3.__unequalSign(_4);
            var n3 = g3.__absoluteCompare(e4, t4);
            return 0 < n3 ? g3.__absoluteGreater(_4) : 0 > n3 ? g3.__absoluteLess(_4) : 0;
          } }, { key: "__compareToNumber", value: function _4(e4, i4) {
            if (g3.__isOneDigitInt(i4)) {
              var n3 = e4.sign, o3 = 0 > i4;
              if (n3 !== o3)
                return g3.__unequalSign(n3);
              if (0 === e4.length) {
                if (o3)
                  throw new Error("implementation bug");
                return 0 === i4 ? 0 : -1;
              }
              if (1 < e4.length)
                return g3.__absoluteGreater(n3);
              var l3 = t3(i4), a3 = e4.__unsignedDigit(0);
              return a3 > l3 ? g3.__absoluteGreater(n3) : a3 < l3 ? g3.__absoluteLess(n3) : 0;
            }
            return g3.__compareToDouble(e4, i4);
          } }, { key: "__compareToDouble", value: function i4(e4, t4) {
            if (t4 !== t4)
              return t4;
            if (t4 === 1 / 0)
              return -1;
            if (t4 === -Infinity)
              return 1;
            var _4 = e4.sign, n3 = 0 > t4;
            if (_4 !== n3)
              return g3.__unequalSign(_4);
            if (0 === t4)
              throw new Error("implementation bug: should be handled elsewhere");
            if (0 === e4.length)
              return -1;
            g3.__kBitConversionDouble[0] = t4;
            var o3 = 2047 & g3.__kBitConversionInts[g3.__kBitConversionIntHigh] >>> 20;
            if (2047 == o3)
              throw new Error("implementation bug: handled elsewhere");
            var l3 = o3 - 1023;
            if (0 > l3)
              return g3.__absoluteGreater(_4);
            var a3 = e4.length, s3 = e4.__digit(a3 - 1), u3 = g3.__clz30(s3), r3 = 30 * a3 - u3, d3 = l3 + 1;
            if (r3 < d3)
              return g3.__absoluteLess(_4);
            if (r3 > d3)
              return g3.__absoluteGreater(_4);
            var h3 = 1048576, b3 = 1048576 | 1048575 & g3.__kBitConversionInts[g3.__kBitConversionIntHigh], m3 = g3.__kBitConversionInts[g3.__kBitConversionIntLow], c3 = 20, v3 = 29 - u3;
            if (v3 !== (0 | (r3 - 1) % 30))
              throw new Error("implementation bug");
            var y3, f3 = 0;
            if (v3 < c3) {
              var k3 = c3 - v3;
              f3 = k3 + 32, y3 = b3 >>> k3, b3 = b3 << 32 - k3 | m3 >>> k3, m3 <<= 32 - k3;
            } else if (v3 === c3)
              f3 = 32, y3 = b3, b3 = m3, m3 = 0;
            else {
              var D3 = v3 - c3;
              f3 = 32 - D3, y3 = b3 << D3 | m3 >>> 32 - D3, b3 = m3 << D3, m3 = 0;
            }
            if (s3 >>>= 0, y3 >>>= 0, s3 > y3)
              return g3.__absoluteGreater(_4);
            if (s3 < y3)
              return g3.__absoluteLess(_4);
            for (var p3 = a3 - 2; 0 <= p3; p3--) {
              0 < f3 ? (f3 -= 30, y3 = b3 >>> 2, b3 = b3 << 30 | m3 >>> 2, m3 <<= 30) : y3 = 0;
              var B3 = e4.__unsignedDigit(p3);
              if (B3 > y3)
                return g3.__absoluteGreater(_4);
              if (B3 < y3)
                return g3.__absoluteLess(_4);
            }
            if (0 !== b3 || 0 !== m3) {
              if (0 === f3)
                throw new Error("implementation bug");
              return g3.__absoluteLess(_4);
            }
            return 0;
          } }, { key: "__equalToNumber", value: function _4(e4, i4) {
            return g3.__isOneDigitInt(i4) ? 0 === i4 ? 0 === e4.length : 1 === e4.length && e4.sign === 0 > i4 && e4.__unsignedDigit(0) === t3(i4) : 0 === g3.__compareToDouble(e4, i4);
          } }, { key: "__comparisonResultToBool", value: function i4(e4, t4) {
            return 0 === t4 ? 0 > e4 : 1 === t4 ? 0 >= e4 : 2 === t4 ? 0 < e4 : 3 === t4 ? 0 <= e4 : void 0;
          } }, { key: "__compare", value: function _4(e4, t4, i4) {
            if (e4 = g3.__toPrimitive(e4), t4 = g3.__toPrimitive(t4), "string" == typeof e4 && "string" == typeof t4)
              switch (i4) {
                case 0:
                  return e4 < t4;
                case 1:
                  return e4 <= t4;
                case 2:
                  return e4 > t4;
                case 3:
                  return e4 >= t4;
              }
            if (g3.__isBigInt(e4) && "string" == typeof t4)
              return t4 = g3.__fromString(t4), null !== t4 && g3.__comparisonResultToBool(g3.__compareToBigInt(e4, t4), i4);
            if ("string" == typeof e4 && g3.__isBigInt(t4))
              return e4 = g3.__fromString(e4), null !== e4 && g3.__comparisonResultToBool(g3.__compareToBigInt(e4, t4), i4);
            if (e4 = g3.__toNumeric(e4), t4 = g3.__toNumeric(t4), g3.__isBigInt(e4)) {
              if (g3.__isBigInt(t4))
                return g3.__comparisonResultToBool(g3.__compareToBigInt(e4, t4), i4);
              if ("number" != typeof t4)
                throw new Error("implementation bug");
              return g3.__comparisonResultToBool(g3.__compareToNumber(e4, t4), i4);
            }
            if ("number" != typeof e4)
              throw new Error("implementation bug");
            if (g3.__isBigInt(t4))
              return g3.__comparisonResultToBool(g3.__compareToNumber(t4, e4), 2 ^ i4);
            if ("number" != typeof t4)
              throw new Error("implementation bug");
            return 0 === i4 ? e4 < t4 : 1 === i4 ? e4 <= t4 : 2 === i4 ? e4 > t4 : 3 === i4 ? e4 >= t4 : void 0;
          } }, { key: "__absoluteAdd", value: function n3(e4, t4, _4) {
            if (e4.length < t4.length)
              return g3.__absoluteAdd(t4, e4, _4);
            if (0 === e4.length)
              return e4;
            if (0 === t4.length)
              return e4.sign === _4 ? e4 : g3.unaryMinus(e4);
            var o3 = e4.length;
            (0 === e4.__clzmsd() || t4.length === e4.length && 0 === t4.__clzmsd()) && o3++;
            for (var l3, a3 = new g3(o3, _4), s3 = 0, u3 = 0; u3 < t4.length; u3++)
              l3 = e4.__digit(u3) + t4.__digit(u3) + s3, s3 = l3 >>> 30, a3.__setDigit(u3, 1073741823 & l3);
            for (; u3 < e4.length; u3++) {
              var d3 = e4.__digit(u3) + s3;
              s3 = d3 >>> 30, a3.__setDigit(u3, 1073741823 & d3);
            }
            return u3 < a3.length && a3.__setDigit(u3, s3), a3.__trim();
          } }, { key: "__absoluteSub", value: function n3(e4, t4, _4) {
            if (0 === e4.length)
              return e4;
            if (0 === t4.length)
              return e4.sign === _4 ? e4 : g3.unaryMinus(e4);
            for (var o3, l3 = new g3(e4.length, _4), a3 = 0, s3 = 0; s3 < t4.length; s3++)
              o3 = e4.__digit(s3) - t4.__digit(s3) - a3, a3 = 1 & o3 >>> 30, l3.__setDigit(s3, 1073741823 & o3);
            for (; s3 < e4.length; s3++) {
              var u3 = e4.__digit(s3) - a3;
              a3 = 1 & u3 >>> 30, l3.__setDigit(s3, 1073741823 & u3);
            }
            return l3.__trim();
          } }, { key: "__absoluteAddOne", value: function _4(e4, t4) {
            var n3 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null, o3 = e4.length;
            null === n3 ? n3 = new g3(o3, t4) : n3.sign = t4;
            for (var l3, a3 = 1, s3 = 0; s3 < o3; s3++)
              l3 = e4.__digit(s3) + a3, a3 = l3 >>> 30, n3.__setDigit(s3, 1073741823 & l3);
            return 0 !== a3 && n3.__setDigitGrow(o3, 1), n3;
          } }, { key: "__absoluteSubOne", value: function _4(e4, t4) {
            var n3 = e4.length;
            t4 = t4 || n3;
            for (var o3, l3 = new g3(t4, false), a3 = 1, s3 = 0; s3 < n3; s3++)
              o3 = e4.__digit(s3) - a3, a3 = 1 & o3 >>> 30, l3.__setDigit(s3, 1073741823 & o3);
            if (0 !== a3)
              throw new Error("implementation bug");
            for (var u3 = n3; u3 < t4; u3++)
              l3.__setDigit(u3, 0);
            return l3;
          } }, { key: "__absoluteAnd", value: function _4(e4, t4) {
            var n3 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null, o3 = e4.length, l3 = t4.length, a3 = l3;
            if (o3 < l3) {
              a3 = o3;
              var s3 = e4, u3 = o3;
              e4 = t4, o3 = l3, t4 = s3, l3 = u3;
            }
            var r3 = a3;
            null === n3 ? n3 = new g3(r3, false) : r3 = n3.length;
            for (var d3 = 0; d3 < a3; d3++)
              n3.__setDigit(d3, e4.__digit(d3) & t4.__digit(d3));
            for (; d3 < r3; d3++)
              n3.__setDigit(d3, 0);
            return n3;
          } }, { key: "__absoluteAndNot", value: function _4(e4, t4) {
            var n3 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null, o3 = e4.length, l3 = t4.length, a3 = l3;
            o3 < l3 && (a3 = o3);
            var s3 = o3;
            null === n3 ? n3 = new g3(s3, false) : s3 = n3.length;
            for (var u3 = 0; u3 < a3; u3++)
              n3.__setDigit(u3, e4.__digit(u3) & ~t4.__digit(u3));
            for (; u3 < o3; u3++)
              n3.__setDigit(u3, e4.__digit(u3));
            for (; u3 < s3; u3++)
              n3.__setDigit(u3, 0);
            return n3;
          } }, { key: "__absoluteOr", value: function _4(e4, t4) {
            var n3 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null, o3 = e4.length, l3 = t4.length, a3 = l3;
            if (o3 < l3) {
              a3 = o3;
              var s3 = e4, u3 = o3;
              e4 = t4, o3 = l3, t4 = s3, l3 = u3;
            }
            var r3 = o3;
            null === n3 ? n3 = new g3(r3, false) : r3 = n3.length;
            for (var d3 = 0; d3 < a3; d3++)
              n3.__setDigit(d3, e4.__digit(d3) | t4.__digit(d3));
            for (; d3 < o3; d3++)
              n3.__setDigit(d3, e4.__digit(d3));
            for (; d3 < r3; d3++)
              n3.__setDigit(d3, 0);
            return n3;
          } }, { key: "__absoluteXor", value: function _4(e4, t4) {
            var n3 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null, o3 = e4.length, l3 = t4.length, a3 = l3;
            if (o3 < l3) {
              a3 = o3;
              var s3 = e4, u3 = o3;
              e4 = t4, o3 = l3, t4 = s3, l3 = u3;
            }
            var r3 = o3;
            null === n3 ? n3 = new g3(r3, false) : r3 = n3.length;
            for (var d3 = 0; d3 < a3; d3++)
              n3.__setDigit(d3, e4.__digit(d3) ^ t4.__digit(d3));
            for (; d3 < o3; d3++)
              n3.__setDigit(d3, e4.__digit(d3));
            for (; d3 < r3; d3++)
              n3.__setDigit(d3, 0);
            return n3;
          } }, { key: "__absoluteCompare", value: function _4(e4, t4) {
            var n3 = e4.length - t4.length;
            if (0 != n3)
              return n3;
            for (var o3 = e4.length - 1; 0 <= o3 && e4.__digit(o3) === t4.__digit(o3); )
              o3--;
            return 0 > o3 ? 0 : e4.__unsignedDigit(o3) > t4.__unsignedDigit(o3) ? 1 : -1;
          } }, { key: "__multiplyAccumulate", value: function o3(e4, t4, _4, n3) {
            if (0 !== t4) {
              for (var l3 = 32767 & t4, a3 = t4 >>> 15, s3 = 0, u3 = 0, r3 = 0; r3 < e4.length; r3++, n3++) {
                var d3 = _4.__digit(n3), h3 = e4.__digit(r3), b3 = 32767 & h3, m3 = h3 >>> 15, c3 = g3.__imul(b3, l3), v3 = g3.__imul(b3, a3), y3 = g3.__imul(m3, l3), f3 = g3.__imul(m3, a3);
                d3 += u3 + c3 + s3, s3 = d3 >>> 30, d3 &= 1073741823, d3 += ((32767 & v3) << 15) + ((32767 & y3) << 15), s3 += d3 >>> 30, u3 = f3 + (v3 >>> 15) + (y3 >>> 15), _4.__setDigit(n3, 1073741823 & d3);
              }
              for (; 0 !== s3 || 0 !== u3; n3++) {
                var k3 = _4.__digit(n3);
                k3 += s3 + u3, u3 = 0, s3 = k3 >>> 30, _4.__setDigit(n3, 1073741823 & k3);
              }
            }
          } }, { key: "__internalMultiplyAdd", value: function a3(e4, t4, _4, o3, l3) {
            for (var s3 = _4, u3 = 0, d3 = 0; d3 < o3; d3++) {
              var h3 = e4.__digit(d3), b3 = g3.__imul(32767 & h3, t4), m3 = g3.__imul(h3 >>> 15, t4), c3 = b3 + ((32767 & m3) << 15) + u3 + s3;
              s3 = c3 >>> 30, u3 = m3 >>> 15, l3.__setDigit(d3, 1073741823 & c3);
            }
            if (l3.length > o3)
              for (l3.__setDigit(o3++, s3 + u3); o3 < l3.length; )
                l3.__setDigit(o3++, 0);
            else if (0 !== s3 + u3)
              throw new Error("implementation bug");
          } }, { key: "__absoluteDivSmall", value: function _4(e4, t4) {
            var n3 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
            null === n3 && (n3 = new g3(e4.length, false));
            for (var o3 = 0, l3 = 2 * e4.length - 1; 0 <= l3; l3 -= 2) {
              var a3 = (o3 << 15 | e4.__halfDigit(l3)) >>> 0, s3 = 0 | a3 / t4;
              o3 = 0 | a3 % t4, a3 = (o3 << 15 | e4.__halfDigit(l3 - 1)) >>> 0;
              var u3 = 0 | a3 / t4;
              o3 = 0 | a3 % t4, n3.__setDigit(l3 >>> 1, s3 << 15 | u3);
            }
            return n3;
          } }, { key: "__absoluteModSmall", value: function _4(e4, t4) {
            for (var n3, o3 = 0, l3 = 2 * e4.length - 1; 0 <= l3; l3--)
              n3 = (o3 << 15 | e4.__halfDigit(l3)) >>> 0, o3 = 0 | n3 % t4;
            return o3;
          } }, { key: "__absoluteDivLarge", value: function o3(e4, t4, i4, _4) {
            var l3 = t4.__halfDigitLength(), n3 = t4.length, a3 = e4.__halfDigitLength() - l3, s3 = null;
            i4 && (s3 = new g3(a3 + 2 >>> 1, false), s3.__initializeDigits());
            var r3 = new g3(l3 + 2 >>> 1, false);
            r3.__initializeDigits();
            var d3 = g3.__clz15(t4.__halfDigit(l3 - 1));
            0 < d3 && (t4 = g3.__specialLeftShift(t4, d3, 0));
            for (var h3 = g3.__specialLeftShift(e4, d3, 1), u3 = t4.__halfDigit(l3 - 1), b3 = 0, m3 = a3; 0 <= m3; m3--) {
              var v3 = 32767, y3 = h3.__halfDigit(m3 + l3);
              if (y3 !== u3) {
                var f3 = (y3 << 15 | h3.__halfDigit(m3 + l3 - 1)) >>> 0;
                v3 = 0 | f3 / u3;
                for (var k3 = 0 | f3 % u3, D3 = t4.__halfDigit(l3 - 2), p3 = h3.__halfDigit(m3 + l3 - 2); g3.__imul(v3, D3) >>> 0 > (k3 << 16 | p3) >>> 0 && (v3--, k3 += u3, !(32767 < k3)); )
                  ;
              }
              g3.__internalMultiplyAdd(t4, v3, 0, n3, r3);
              var B3 = h3.__inplaceSub(r3, m3, l3 + 1);
              0 !== B3 && (B3 = h3.__inplaceAdd(t4, m3, l3), h3.__setHalfDigit(m3 + l3, 32767 & h3.__halfDigit(m3 + l3) + B3), v3--), i4 && (1 & m3 ? b3 = v3 << 15 : s3.__setDigit(m3 >>> 1, b3 | v3));
            }
            if (_4)
              return h3.__inplaceRightShift(d3), i4 ? { quotient: s3, remainder: h3 } : h3;
            if (i4)
              return s3;
            throw new Error("unreachable");
          } }, { key: "__clz15", value: function t4(e4) {
            return g3.__clz30(e4) - 15;
          } }, { key: "__specialLeftShift", value: function o3(e4, t4, _4) {
            var l3 = e4.length, n3 = l3 + _4, a3 = new g3(n3, false);
            if (0 === t4) {
              for (var s3 = 0; s3 < l3; s3++)
                a3.__setDigit(s3, e4.__digit(s3));
              return 0 < _4 && a3.__setDigit(l3, 0), a3;
            }
            for (var u3, r3 = 0, h3 = 0; h3 < l3; h3++)
              u3 = e4.__digit(h3), a3.__setDigit(h3, 1073741823 & u3 << t4 | r3), r3 = u3 >>> 30 - t4;
            return 0 < _4 && a3.__setDigit(l3, r3), a3;
          } }, { key: "__leftShiftByAbsolute", value: function _4(e4, t4) {
            var n3 = g3.__toShiftAmount(t4);
            if (0 > n3)
              throw new RangeError("BigInt too big");
            var o3 = 0 | n3 / 30, l3 = n3 % 30, a3 = e4.length, s3 = 0 !== l3 && 0 != e4.__digit(a3 - 1) >>> 30 - l3, u3 = a3 + o3 + (s3 ? 1 : 0), r3 = new g3(u3, e4.sign);
            if (0 === l3) {
              for (var h3 = 0; h3 < o3; h3++)
                r3.__setDigit(h3, 0);
              for (; h3 < u3; h3++)
                r3.__setDigit(h3, e4.__digit(h3 - o3));
            } else {
              for (var b3 = 0, m3 = 0; m3 < o3; m3++)
                r3.__setDigit(m3, 0);
              for (var c3, v3 = 0; v3 < a3; v3++)
                c3 = e4.__digit(v3), r3.__setDigit(v3 + o3, 1073741823 & c3 << l3 | b3), b3 = c3 >>> 30 - l3;
              if (s3)
                r3.__setDigit(a3 + o3, b3);
              else if (0 !== b3)
                throw new Error("implementation bug");
            }
            return r3.__trim();
          } }, { key: "__rightShiftByAbsolute", value: function _4(e4, t4) {
            var n3 = e4.length, o3 = e4.sign, l3 = g3.__toShiftAmount(t4);
            if (0 > l3)
              return g3.__rightShiftByMaximum(o3);
            var a3 = 0 | l3 / 30, s3 = l3 % 30, u3 = n3 - a3;
            if (0 >= u3)
              return g3.__rightShiftByMaximum(o3);
            var r3 = false;
            if (o3) {
              var h3 = (1 << s3) - 1;
              if (0 != (e4.__digit(a3) & h3))
                r3 = true;
              else
                for (var b3 = 0; b3 < a3; b3++)
                  if (0 !== e4.__digit(b3)) {
                    r3 = true;
                    break;
                  }
            }
            if (r3 && 0 === s3) {
              var m3 = e4.__digit(n3 - 1), c3 = 0 == ~m3;
              c3 && u3++;
            }
            var v3 = new g3(u3, o3);
            if (0 === s3) {
              v3.__setDigit(u3 - 1, 0);
              for (var y3 = a3; y3 < n3; y3++)
                v3.__setDigit(y3 - a3, e4.__digit(y3));
            } else {
              for (var f3, k3 = e4.__digit(a3) >>> s3, D3 = n3 - a3 - 1, p3 = 0; p3 < D3; p3++)
                f3 = e4.__digit(p3 + a3 + 1), v3.__setDigit(p3, 1073741823 & f3 << 30 - s3 | k3), k3 = f3 >>> s3;
              v3.__setDigit(D3, k3);
            }
            return r3 && (v3 = g3.__absoluteAddOne(v3, true, v3)), v3.__trim();
          } }, { key: "__rightShiftByMaximum", value: function t4(e4) {
            return e4 ? g3.__oneDigit(1, true) : g3.__zero();
          } }, { key: "__toShiftAmount", value: function t4(e4) {
            if (1 < e4.length)
              return -1;
            var i4 = e4.__unsignedDigit(0);
            return i4 > g3.__kMaxLengthBits ? -1 : i4;
          } }, { key: "__toPrimitive", value: function t4(e4) {
            var i4 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "default";
            if ("object" !== p2(e4))
              return e4;
            if (e4.constructor === g3)
              return e4;
            if ("undefined" != typeof Symbol && "symbol" === p2(Symbol.toPrimitive) && e4[Symbol.toPrimitive]) {
              var _4 = e4[Symbol.toPrimitive](i4);
              if ("object" !== p2(_4))
                return _4;
              throw new TypeError("Cannot convert object to primitive value");
            }
            var n3 = e4.valueOf;
            if (n3) {
              var o3 = n3.call(e4);
              if ("object" !== p2(o3))
                return o3;
            }
            var l3 = e4.toString;
            if (l3) {
              var a3 = l3.call(e4);
              if ("object" !== p2(a3))
                return a3;
            }
            throw new TypeError("Cannot convert object to primitive value");
          } }, { key: "__toNumeric", value: function t4(e4) {
            return g3.__isBigInt(e4) ? e4 : +e4;
          } }, { key: "__isBigInt", value: function t4(e4) {
            return "object" === p2(e4) && null !== e4 && e4.constructor === g3;
          } }, { key: "__truncateToNBits", value: function _4(e4, t4) {
            for (var n3 = 0 | (e4 + 29) / 30, o3 = new g3(n3, t4.sign), l3 = n3 - 1, a3 = 0; a3 < l3; a3++)
              o3.__setDigit(a3, t4.__digit(a3));
            var s3 = t4.__digit(l3);
            if (0 != e4 % 30) {
              var u3 = 32 - e4 % 30;
              s3 = s3 << u3 >>> u3;
            }
            return o3.__setDigit(l3, s3), o3.__trim();
          } }, { key: "__truncateAndSubFromPowerOfTwo", value: function n3(e4, t4, _4) {
            for (var o3 = Math.min, l3, a3 = 0 | (e4 + 29) / 30, s3 = new g3(a3, _4), u3 = 0, d3 = a3 - 1, h3 = 0, b3 = o3(d3, t4.length); u3 < b3; u3++)
              l3 = 0 - t4.__digit(u3) - h3, h3 = 1 & l3 >>> 30, s3.__setDigit(u3, 1073741823 & l3);
            for (; u3 < d3; u3++)
              s3.__setDigit(u3, 0 | 1073741823 & -h3);
            var m3, c3 = d3 < t4.length ? t4.__digit(d3) : 0, v3 = e4 % 30;
            if (0 === v3)
              m3 = 0 - c3 - h3, m3 &= 1073741823;
            else {
              var y3 = 32 - v3;
              c3 = c3 << y3 >>> y3;
              var f3 = 1 << 32 - y3;
              m3 = f3 - c3 - h3, m3 &= f3 - 1;
            }
            return s3.__setDigit(d3, m3), s3.__trim();
          } }, { key: "__digitPow", value: function i4(e4, t4) {
            for (var _4 = 1; 0 < t4; )
              1 & t4 && (_4 *= e4), t4 >>>= 1, e4 *= e4;
            return _4;
          } }, { key: "__detectBigEndian", value: function e4() {
            return g3.__kBitConversionDouble[0] = -0, 0 !== g3.__kBitConversionInts[0];
          } }, { key: "__isOneDigitInt", value: function t4(e4) {
            return (1073741823 & e4) === e4;
          } }]);
        }(S2(Array));
        return C2.__kMaxLength = 33554432, C2.__kMaxLengthBits = C2.__kMaxLength << 5, C2.__kMaxBitsPerChar = [0, 0, 32, 51, 64, 75, 83, 90, 96, 102, 107, 111, 115, 119, 122, 126, 128, 131, 134, 136, 139, 141, 143, 145, 147, 149, 151, 153, 154, 156, 158, 159, 160, 162, 163, 165, 166], C2.__kBitsPerCharTableShift = 5, C2.__kBitsPerCharTableMultiplier = 1 << C2.__kBitsPerCharTableShift, C2.__kConversionChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], C2.__kBitConversionBuffer = new ArrayBuffer(8), C2.__kBitConversionDouble = new Float64Array(C2.__kBitConversionBuffer), C2.__kBitConversionInts = new Int32Array(C2.__kBitConversionBuffer), C2.__kBitConversionIntHigh = C2.__detectBigEndian() ? 0 : 1, C2.__kBitConversionIntLow = C2.__detectBigEndian() ? 1 : 0, C2.__clz30 = t2 ? function(e3) {
          return t2(e3) - 2;
        } : function(e3) {
          var t3 = Math.LN2, i3 = Math.log;
          return 0 === e3 ? 30 : 0 | 29 - (0 | i3(e3 >>> 0) / t3);
        }, C2.__imul = e2 || function(e3, t3) {
          return 0 | e3 * t3;
        }, C2;
      });
    }
  });

  // src/index.js
  var src_exports = {};
  __export(src_exports, {
    default: () => src_default
  });

  // node_modules/@js-temporal/polyfill/dist/index.esm.js
  var import_jsbi = __toESM(require_jsbi_umd(), 1);
  var t = {};
  function MakeIntrinsicClass(e2, t2) {
    Object.defineProperty(e2.prototype, Symbol.toStringTag, { value: t2, writable: false, enumerable: false, configurable: true });
    for (const t3 of Object.getOwnPropertyNames(e2)) {
      const r2 = Object.getOwnPropertyDescriptor(e2, t3);
      r2.configurable && r2.enumerable && (r2.enumerable = false, Object.defineProperty(e2, t3, r2));
    }
    for (const t3 of Object.getOwnPropertyNames(e2.prototype)) {
      const r2 = Object.getOwnPropertyDescriptor(e2.prototype, t3);
      r2.configurable && r2.enumerable && (r2.enumerable = false, Object.defineProperty(e2.prototype, t3, r2));
    }
    DefineIntrinsic(t2, e2), DefineIntrinsic(`${t2}.prototype`, e2.prototype);
  }
  function DefineIntrinsic(e2, r2) {
    const o2 = `%${e2}%`;
    if (void 0 !== t[o2])
      throw new Error(`intrinsic ${e2} already exists`);
    t[o2] = r2;
  }
  function GetIntrinsic(e2) {
    return t[e2];
  }
  var r;
  var o;
  var n = "slot-epochNanoSeconds";
  var a = "slot-timezone-identifier";
  var i = "slot-year";
  var s = "slot-month";
  var l = "slot-day";
  var d = "slot-hour";
  var m = "slot-minute";
  var c = "slot-second";
  var h = "slot-millisecond";
  var u = "slot-microsecond";
  var T = "slot-nanosecond";
  var p = "slot-calendar";
  var f = "slot-date-brand";
  var y = "slot-year-month-brand";
  var I = "slot-month-day-brand";
  var S = "slot-cached-instant";
  var g = "slot-time-zone";
  var w = "slot-years";
  var D = "slot-months";
  var G = "slot-weeks";
  var v = "slot-days";
  var C = "slot-hours";
  var O = "slot-minutes";
  var b = "slot-seconds";
  var E = "slot-milliseconds";
  var M = "slot-microseconds";
  var R = "slot-nanoseconds";
  var F = "slot-calendar-identifier";
  var Y = /* @__PURE__ */ new WeakMap();
  var P = Symbol.for("@@Temporal__GetSlots");
  (r = globalThis)[P] || (r[P] = function _GetSlots(e2) {
    return Y.get(e2);
  });
  var Z = globalThis[P];
  var B = Symbol.for("@@Temporal__CreateSlots");
  (o = globalThis)[B] || (o[B] = function _CreateSlots(e2) {
    Y.set(e2, /* @__PURE__ */ Object.create(null));
  });
  var N = globalThis[B];
  function HasSlot(e2, ...t2) {
    if (!e2 || "object" != typeof e2)
      return false;
    const r2 = Z(e2);
    return !!r2 && t2.every((e3) => e3 in r2);
  }
  function GetSlot(e2, t2) {
    const r2 = Z(e2)?.[t2];
    if (void 0 === r2)
      throw new TypeError(`Missing internal slot ${t2}`);
    return r2;
  }
  function SetSlot(e2, t2, r2) {
    const o2 = Z(e2);
    if (void 0 === o2)
      throw new TypeError("Missing slots for the given container");
    if (o2[t2])
      throw new TypeError(`${t2} already has set`);
    o2[t2] = r2;
  }
  var j = /\.[-A-Za-z_]|\.\.[-A-Za-z._]{1,12}|\.[-A-Za-z_][-A-Za-z._]{0,12}|[A-Za-z_][-A-Za-z._]{0,13}/;
  var $ = new RegExp("(?:" + [`(?:${j.source})(?:\\/(?:${j.source}))*`, "Etc/GMT(?:0|[-+]\\d{1,2})", "GMT[-+]?0", "EST5EDT", "CST6CDT", "MST7MDT", "PST8PDT", /(?:[+\u2212-][0-2][0-9](?::?[0-5][0-9](?::?[0-5][0-9](?:[.,]\d{1,9})?)?)?)/.source].join("|") + ")");
  var k = /(?:[+\u2212-]\d{6}|\d{4})/;
  var U = /(?:0[1-9]|1[0-2])/;
  var A = /(?:0[1-9]|[12]\d|3[01])/;
  var L = new RegExp(`(${k.source})(?:-(${U.source})-(${A.source})|(${U.source})(${A.source}))`);
  var x = /(\d{2})(?::(\d{2})(?::(\d{2})(?:[.,](\d{1,9}))?)?|(\d{2})(?:(\d{2})(?:[.,](\d{1,9}))?)?)?/;
  var W = /([+\u2212-])([01][0-9]|2[0-3])(?::?([0-5][0-9])(?::?([0-5][0-9])(?:[.,](\d{1,9}))?)?)?/;
  var q = new RegExp(`([zZ])|${W.source}?`);
  var H = /\[(!)?([a-z_][a-z0-9_-]*)=([A-Za-z0-9]+(?:-[A-Za-z0-9]+)*)\]/g;
  var V = new RegExp([`^${L.source}`, `(?:(?:T|\\s+)${x.source}(?:${q.source})?)?`, `(?:\\[!?(${$.source})\\])?`, `((?:${H.source})*)$`].join(""), "i");
  var z = new RegExp([`^T?${x.source}`, `(?:${q.source})?`, `(?:\\[!?${$.source}\\])?`, `((?:${H.source})*)$`].join(""), "i");
  var _ = new RegExp(`^(${k.source})-?(${U.source})(?:\\[!?${$.source}\\])?((?:${H.source})*)$`);
  var J = new RegExp(`^(?:--)?(${U.source})-?(${A.source})(?:\\[!?${$.source}\\])?((?:${H.source})*)$`);
  var K = /(\d+)(?:[.,](\d{1,9}))?/;
  var X = new RegExp(`(?:${K.source}H)?(?:${K.source}M)?(?:${K.source}S)?`);
  var Q = new RegExp(`^([+\u2212-])?P${/(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?/.source}(?:T(?!$)${X.source})?$`, "i");
  var ee = Array.prototype.includes;
  var te = Array.prototype.push;
  var re = globalThis.Intl.DateTimeFormat;
  var oe = Math.min;
  var ne = Math.max;
  var ae = Math.abs;
  var ie = Math.floor;
  var se = Math.sign;
  var le = Math.trunc;
  var de = Number.isNaN;
  var me = Number.isFinite;
  var ce = Number;
  var he = String;
  var ue = Number.MAX_SAFE_INTEGER;
  var Te = Object.create;
  var pe = Object.getOwnPropertyDescriptor;
  var fe = Reflect.apply;
  var ye = Reflect.ownKeys;
  var Ie = import_jsbi.default.BigInt(0);
  var Se = import_jsbi.default.BigInt(1);
  var ge = import_jsbi.default.BigInt(60);
  var we = import_jsbi.default.BigInt(24);
  var De = import_jsbi.default.BigInt(1e3);
  var Ge = import_jsbi.default.BigInt(1e6);
  var ve = import_jsbi.default.BigInt(1e9);
  var Ce = import_jsbi.default.BigInt(-1);
  var Oe = import_jsbi.default.multiply(import_jsbi.default.BigInt(3600), ve);
  var be = import_jsbi.default.multiply(ge, ve);
  var Ee = import_jsbi.default.multiply(Oe, we);
  var Me = import_jsbi.default.multiply(import_jsbi.default.BigInt(-86400), import_jsbi.default.BigInt(1e17));
  var Re = import_jsbi.default.multiply(import_jsbi.default.BigInt(86400), import_jsbi.default.BigInt(1e17));
  var Fe = -271821;
  var Ye = 275760;
  var Pe = import_jsbi.default.multiply(import_jsbi.default.BigInt(-388152), import_jsbi.default.BigInt(1e13));
  var Ze = import_jsbi.default.multiply(Ee, import_jsbi.default.BigInt(3660));
  var Be = import_jsbi.default.multiply(Ee, import_jsbi.default.BigInt(366));
  var Ne = import_jsbi.default.multiply(Ee, import_jsbi.default.BigInt(14));
  var je = ["iso8601", "hebrew", "islamic", "islamic-umalqura", "islamic-tbla", "islamic-civil", "islamic-rgsa", "islamicc", "persian", "ethiopic", "ethioaa", "coptic", "chinese", "dangi", "roc", "indian", "buddhist", "japanese", "gregory"];
  function isZero(t2) {
    return import_jsbi.default.equal(t2, Ie);
  }
  function GetMethod(e2, t2) {
    const r2 = e2[t2];
    if (void 0 !== r2)
      return r2;
  }
  function Call(e2, t2, r2) {
    const o2 = arguments.length > 2 ? r2 : [];
    return fe(e2, t2, o2);
  }
  function IsObject(e2) {
    return "object" == typeof e2 && null !== e2 || "function" == typeof e2;
  }
  function ToNumber(e2) {
    if ("bigint" == typeof e2)
      throw new TypeError("Cannot convert BigInt to number");
    return ce(e2);
  }
  function ToIntegerOrInfinity(e2) {
    const t2 = ToNumber(e2);
    if (de(t2) || 0 === t2)
      return 0;
    if (!me(t2))
      return t2;
    const r2 = ie(ae(t2));
    return 0 === r2 ? 0 : se(t2) * r2;
  }
  function IsIntegralNumber(e2) {
    if ("number" != typeof e2 || de(e2) || !me(e2))
      return false;
    const t2 = ae(e2);
    return ie(t2) === t2;
  }
  function ToString(e2) {
    if ("symbol" == typeof e2)
      throw new TypeError("Cannot convert a Symbol value to a String");
    return he(e2);
  }
  function ToIntegerWithTruncation(e2) {
    const t2 = ToNumber(e2);
    if (0 === t2)
      return 0;
    if (de(t2) || !me(t2))
      throw new RangeError("invalid number value");
    const r2 = le(t2);
    return 0 === r2 ? 0 : r2;
  }
  function ToPositiveIntegerWithTruncation(e2, t2) {
    const r2 = ToIntegerWithTruncation(e2);
    if (r2 <= 0) {
      if (void 0 !== t2)
        throw new RangeError(`property '${t2}' cannot be a a number less than one`);
      throw new RangeError("Cannot convert a number less than one to a positive integer");
    }
    return r2;
  }
  function ToIntegerIfIntegral(e2) {
    const t2 = ToNumber(e2);
    if (!me(t2))
      throw new RangeError("infinity is out of range");
    if (!IsIntegralNumber(t2))
      throw new RangeError(`unsupported fractional value ${e2}`);
    return 0 === t2 ? 0 : t2;
  }
  function divmod(t2, r2) {
    return { quotient: import_jsbi.default.divide(t2, r2), remainder: import_jsbi.default.remainder(t2, r2) };
  }
  function isNegativeJSBI(t2) {
    return import_jsbi.default.lessThan(t2, Ie);
  }
  function signJSBI(e2) {
    return isZero(e2) ? 0 : isNegativeJSBI(e2) ? -1 : 1;
  }
  function abs(t2) {
    return import_jsbi.default.lessThan(t2, Ie) ? import_jsbi.default.multiply(t2, Ce) : t2;
  }
  var $e = /* @__PURE__ */ new Map([["year", ToIntegerWithTruncation], ["month", ToPositiveIntegerWithTruncation], ["monthCode", ToString], ["day", ToPositiveIntegerWithTruncation], ["hour", ToIntegerWithTruncation], ["minute", ToIntegerWithTruncation], ["second", ToIntegerWithTruncation], ["millisecond", ToIntegerWithTruncation], ["microsecond", ToIntegerWithTruncation], ["nanosecond", ToIntegerWithTruncation], ["years", ToIntegerIfIntegral], ["months", ToIntegerIfIntegral], ["weeks", ToIntegerIfIntegral], ["days", ToIntegerIfIntegral], ["hours", ToIntegerIfIntegral], ["minutes", ToIntegerIfIntegral], ["seconds", ToIntegerIfIntegral], ["milliseconds", ToIntegerIfIntegral], ["microseconds", ToIntegerIfIntegral], ["nanoseconds", ToIntegerIfIntegral], ["era", ToString], ["eraYear", ToIntegerOrInfinity], ["offset", ToString]]);
  var ke = /* @__PURE__ */ new Map([["hour", 0], ["minute", 0], ["second", 0], ["millisecond", 0], ["microsecond", 0], ["nanosecond", 0]]);
  var Ue = [["years", "year", "date"], ["months", "month", "date"], ["weeks", "week", "date"], ["days", "day", "date"], ["hours", "hour", "time"], ["minutes", "minute", "time"], ["seconds", "second", "time"], ["milliseconds", "millisecond", "time"], ["microseconds", "microsecond", "time"], ["nanoseconds", "nanosecond", "time"]];
  var Ae = new Map(Ue.map((e2) => [e2[0], e2[1]]));
  var Le = new Map(Ue.map(([e2, t2]) => [t2, e2]));
  var xe = Ue.map(([, e2]) => e2);
  var We = Array.from(Ae.keys()).sort();
  var qe = /* @__PURE__ */ new Map();
  function getIntlDateTimeFormatEnUsForTimeZone(e2) {
    let t2 = qe.get(e2);
    return void 0 === t2 && (t2 = new re("en-us", { timeZone: he(e2), hour12: false, era: "short", year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" }), qe.set(e2, t2)), t2;
  }
  function ToObject(e2) {
    if (null == e2)
      throw new TypeError(`Expected object not ${e2}`);
    return Object(e2);
  }
  function CopyDataProperties(e2, t2, r2, o2) {
    if (null == t2)
      return;
    const n2 = ye(t2);
    for (const a2 of n2)
      if (!r2.some((e3) => Object.is(e3, a2)) && Object.prototype.propertyIsEnumerable.call(t2, a2)) {
        const r3 = t2[a2];
        if (o2 && o2.some((e3) => Object.is(e3, r3)))
          continue;
        e2[a2] = r3;
      }
  }
  function IsTemporalInstant(e2) {
    return HasSlot(e2, n) && !HasSlot(e2, g, p);
  }
  function IsTemporalTimeZone(e2) {
    return HasSlot(e2, a);
  }
  function IsTemporalCalendar(e2) {
    return HasSlot(e2, F);
  }
  function IsTemporalDuration(e2) {
    return HasSlot(e2, w, D, v, C, O, b, E, M, R);
  }
  function IsTemporalDate(e2) {
    return HasSlot(e2, f);
  }
  function IsTemporalTime(e2) {
    return HasSlot(e2, d, m, c, h, u, T) && !HasSlot(e2, i, s, l);
  }
  function IsTemporalDateTime(e2) {
    return HasSlot(e2, i, s, l, d, m, c, h, u, T);
  }
  function IsTemporalYearMonth(e2) {
    return HasSlot(e2, y);
  }
  function IsTemporalMonthDay(e2) {
    return HasSlot(e2, I);
  }
  function IsTemporalZonedDateTime(e2) {
    return HasSlot(e2, n, g, p);
  }
  function RejectTemporalLikeObject(e2) {
    if (HasSlot(e2, p) || HasSlot(e2, g))
      throw new TypeError("with() does not support a calendar or timeZone property");
    if (IsTemporalTime(e2))
      throw new TypeError("with() does not accept Temporal.PlainTime, use withPlainTime() instead");
    if (void 0 !== e2.calendar)
      throw new TypeError("with() does not support a calendar property");
    if (void 0 !== e2.timeZone)
      throw new TypeError("with() does not support a timeZone property");
  }
  function ParseTemporalTimeZone(e2) {
    const { ianaName: t2, offset: r2, z: o2 } = function ParseTemporalTimeZoneString(e3) {
      if (new RegExp(`^${$.source}$`, "i").test(e3))
        return { ianaName: e3 };
      try {
        const t3 = ParseISODateTime(e3);
        if (t3.z || t3.offset || t3.ianaName)
          return t3;
      } catch {
      }
      throw new RangeError(`Invalid time zone: ${e3}`);
    }(e2);
    if (t2)
      return GetCanonicalTimeZoneIdentifier(t2);
    if (o2)
      return "UTC";
    return FormatTimeZoneOffsetString(ParseTimeZoneOffsetString(r2));
  }
  function MaybeFormatCalendarAnnotation(e2, t2) {
    return "never" === t2 ? "" : FormatCalendarAnnotation(ToTemporalCalendarIdentifier(e2), t2);
  }
  function FormatCalendarAnnotation(e2, t2) {
    if ("never" === t2)
      return "";
    if ("auto" === t2 && "iso8601" === e2)
      return "";
    return `[${"critical" === t2 ? "!" : ""}u-ca=${e2}]`;
  }
  function ParseISODateTime(e2) {
    const t2 = V.exec(e2);
    if (!t2)
      throw new RangeError(`invalid ISO 8601 string: ${e2}`);
    let r2 = t2[1];
    if ("\u2212" === r2[0] && (r2 = `-${r2.slice(1)}`), "-000000" === r2)
      throw new RangeError(`invalid ISO 8601 string: ${e2}`);
    const o2 = ToIntegerOrInfinity(r2), n2 = ToIntegerOrInfinity(t2[2] || t2[4]), a2 = ToIntegerOrInfinity(t2[3] || t2[5]), i2 = ToIntegerOrInfinity(t2[6]), s2 = void 0 !== t2[6], l2 = ToIntegerOrInfinity(t2[7] || t2[10]);
    let d2 = ToIntegerOrInfinity(t2[8] || t2[11]);
    60 === d2 && (d2 = 59);
    const m2 = (t2[9] || t2[12]) + "000000000", c2 = ToIntegerOrInfinity(m2.slice(0, 3)), h2 = ToIntegerOrInfinity(m2.slice(3, 6)), u2 = ToIntegerOrInfinity(m2.slice(6, 9));
    let T2, p2 = false;
    if (t2[13])
      T2 = void 0, p2 = true;
    else if (t2[14] && t2[15]) {
      const e3 = "-" === t2[14] || "\u2212" === t2[14] ? "-" : "+", r3 = t2[15] || "00", o3 = t2[16] || "00", n3 = t2[17] || "00";
      let a3 = t2[18] || "0";
      if (T2 = `${e3}${r3}:${o3}`, +a3) {
        for (; a3.endsWith("0"); )
          a3 = a3.slice(0, -1);
        T2 += `:${n3}.${a3}`;
      } else
        +n3 && (T2 += `:${n3}`);
      "-00:00" === T2 && (T2 = "+00:00");
    }
    const f2 = t2[19], y2 = t2[20];
    let I2;
    for (const [, e3, t3, r3] of y2.matchAll(H))
      if ("u-ca" === t3)
        void 0 === I2 && (I2 = r3);
      else if ("!" === e3)
        throw new RangeError(`Unrecognized annotation: !${t3}=${r3}`);
    return RejectDateTime(o2, n2, a2, i2, l2, d2, c2, h2, u2), { year: o2, month: n2, day: a2, hasTime: s2, hour: i2, minute: l2, second: d2, millisecond: c2, microsecond: h2, nanosecond: u2, ianaName: f2, offset: T2, z: p2, calendar: I2 };
  }
  function ParseTemporalYearMonthString(e2) {
    const t2 = _.exec(e2);
    let r2, o2, n2, a2;
    if (t2) {
      let a3 = t2[1];
      if ("\u2212" === a3[0] && (a3 = `-${a3.slice(1)}`), "-000000" === a3)
        throw new RangeError(`invalid ISO 8601 string: ${e2}`);
      r2 = ToIntegerOrInfinity(a3), o2 = ToIntegerOrInfinity(t2[2]);
      const i2 = t2[3];
      for (const [, e3, t3, r3] of i2.matchAll(H))
        if ("u-ca" === t3)
          void 0 === n2 && (n2 = r3);
        else if ("!" === e3)
          throw new RangeError(`Unrecognized annotation: !${t3}=${r3}`);
      if (void 0 !== n2 && "iso8601" !== n2)
        throw new RangeError("YYYY-MM format is only valid with iso8601 calendar");
    } else {
      let t3;
      if ({ year: r2, month: o2, calendar: n2, day: a2, z: t3 } = ParseISODateTime(e2), t3)
        throw new RangeError("Z designator not supported for PlainYearMonth");
    }
    return { year: r2, month: o2, calendar: n2, referenceISODay: a2 };
  }
  function ParseTemporalMonthDayString(e2) {
    const t2 = J.exec(e2);
    let r2, o2, n2, a2;
    if (t2) {
      r2 = ToIntegerOrInfinity(t2[1]), o2 = ToIntegerOrInfinity(t2[2]);
      const e3 = t2[3];
      for (const [, t3, r3, o3] of e3.matchAll(H))
        if ("u-ca" === r3)
          void 0 === n2 && (n2 = o3);
        else if ("!" === t3)
          throw new RangeError(`Unrecognized annotation: !${r3}=${o3}`);
      if (void 0 !== n2 && "iso8601" !== n2)
        throw new RangeError("MM-DD format is only valid with iso8601 calendar");
    } else {
      let t3;
      if ({ month: r2, day: o2, calendar: n2, year: a2, z: t3 } = ParseISODateTime(e2), t3)
        throw new RangeError("Z designator not supported for PlainMonthDay");
    }
    return { month: r2, day: o2, calendar: n2, referenceISOYear: a2 };
  }
  function ParseTemporalInstant(e2) {
    let { year: t2, month: r2, day: o2, hour: n2, minute: a2, second: i2, millisecond: s2, microsecond: l2, nanosecond: d2, offset: m2, z: c2 } = function ParseTemporalInstantString(e3) {
      const t3 = ParseISODateTime(e3);
      if (!t3.z && !t3.offset)
        throw new RangeError("Temporal.Instant requires a time zone offset");
      return t3;
    }(e2);
    if (!c2 && !m2)
      throw new RangeError("Temporal.Instant requires a time zone offset");
    const h2 = c2 ? 0 : ParseTimeZoneOffsetString(m2);
    ({ year: t2, month: r2, day: o2, hour: n2, minute: a2, second: i2, millisecond: s2, microsecond: l2, nanosecond: d2 } = BalanceISODateTime(t2, r2, o2, n2, a2, i2, s2, l2, d2 - h2));
    const u2 = GetUTCEpochNanoseconds(t2, r2, o2, n2, a2, i2, s2, l2, d2);
    if (null === u2)
      throw new RangeError("DateTime outside of supported range");
    return u2;
  }
  function RegulateISODate(e2, t2, r2, o2) {
    let n2 = e2, a2 = t2, i2 = r2;
    switch (o2) {
      case "reject":
        RejectISODate(n2, a2, i2);
        break;
      case "constrain":
        ({ year: n2, month: a2, day: i2 } = ConstrainISODate(n2, a2, i2));
    }
    return { year: n2, month: a2, day: i2 };
  }
  function RegulateTime(e2, t2, r2, o2, n2, a2, i2) {
    let s2 = e2, l2 = t2, d2 = r2, m2 = o2, c2 = n2, h2 = a2;
    switch (i2) {
      case "reject":
        RejectTime(s2, l2, d2, m2, c2, h2);
        break;
      case "constrain":
        ({ hour: s2, minute: l2, second: d2, millisecond: m2, microsecond: c2, nanosecond: h2 } = function ConstrainTime(e3, t3, r3, o3, n3, a3) {
          const i3 = ConstrainToRange(e3, 0, 23), s3 = ConstrainToRange(t3, 0, 59), l3 = ConstrainToRange(r3, 0, 59), d3 = ConstrainToRange(o3, 0, 999), m3 = ConstrainToRange(n3, 0, 999), c3 = ConstrainToRange(a3, 0, 999);
          return { hour: i3, minute: s3, second: l3, millisecond: d3, microsecond: m3, nanosecond: c3 };
        }(s2, l2, d2, m2, c2, h2));
    }
    return { hour: s2, minute: l2, second: d2, millisecond: m2, microsecond: c2, nanosecond: h2 };
  }
  function ToTemporalDurationRecord(e2) {
    if (!IsObject(e2))
      return function ParseTemporalDurationString(e3) {
        const t3 = Q.exec(e3);
        if (!t3)
          throw new RangeError(`invalid duration: ${e3}`);
        if (t3.slice(2).every((e4) => void 0 === e4))
          throw new RangeError(`invalid duration: ${e3}`);
        const r3 = "-" === t3[1] || "\u2212" === t3[1] ? -1 : 1, o3 = void 0 === t3[2] ? 0 : ToIntegerWithTruncation(t3[2]) * r3, n3 = void 0 === t3[3] ? 0 : ToIntegerWithTruncation(t3[3]) * r3, a3 = void 0 === t3[4] ? 0 : ToIntegerWithTruncation(t3[4]) * r3, i3 = void 0 === t3[5] ? 0 : ToIntegerWithTruncation(t3[5]) * r3, s3 = void 0 === t3[6] ? 0 : ToIntegerWithTruncation(t3[6]) * r3, l3 = t3[7], d3 = t3[8], m3 = t3[9], c3 = t3[10], h3 = t3[11];
        let u2 = 0, T2 = 0, p2 = 0;
        if (void 0 !== l3) {
          if (d3 ?? m3 ?? c3 ?? h3)
            throw new RangeError("only the smallest unit can be fractional");
          p2 = 3600 * ToIntegerOrInfinity((l3 + "000000000").slice(0, 9)) * r3;
        } else if (u2 = void 0 === d3 ? 0 : ToIntegerWithTruncation(d3) * r3, void 0 !== m3) {
          if (c3 ?? h3)
            throw new RangeError("only the smallest unit can be fractional");
          p2 = 60 * ToIntegerOrInfinity((m3 + "000000000").slice(0, 9)) * r3;
        } else
          T2 = void 0 === c3 ? 0 : ToIntegerWithTruncation(c3) * r3, void 0 !== h3 && (p2 = ToIntegerOrInfinity((h3 + "000000000").slice(0, 9)) * r3);
        const f2 = p2 % 1e3, y2 = le(p2 / 1e3) % 1e3, I2 = le(p2 / 1e6) % 1e3;
        return T2 += le(p2 / 1e9) % 60, u2 += le(p2 / 6e10), RejectDuration(o3, n3, a3, i3, s3, u2, T2, I2, y2, f2), { years: o3, months: n3, weeks: a3, days: i3, hours: s3, minutes: u2, seconds: T2, milliseconds: I2, microseconds: y2, nanoseconds: f2 };
      }(ToString(e2));
    if (IsTemporalDuration(e2))
      return { years: GetSlot(e2, w), months: GetSlot(e2, D), weeks: GetSlot(e2, G), days: GetSlot(e2, v), hours: GetSlot(e2, C), minutes: GetSlot(e2, O), seconds: GetSlot(e2, b), milliseconds: GetSlot(e2, E), microseconds: GetSlot(e2, M), nanoseconds: GetSlot(e2, R) };
    const t2 = { years: 0, months: 0, weeks: 0, days: 0, hours: 0, minutes: 0, seconds: 0, milliseconds: 0, microseconds: 0, nanoseconds: 0 };
    let r2 = function ToTemporalPartialDurationRecord(e3) {
      if (!IsObject(e3))
        throw new TypeError("invalid duration-like");
      const t3 = { years: void 0, months: void 0, weeks: void 0, days: void 0, hours: void 0, minutes: void 0, seconds: void 0, milliseconds: void 0, microseconds: void 0, nanoseconds: void 0 };
      let r3 = false;
      for (const o3 of We) {
        const n3 = e3[o3];
        void 0 !== n3 && (r3 = true, t3[o3] = ToIntegerIfIntegral(n3));
      }
      if (!r3)
        throw new TypeError("invalid duration-like");
      return t3;
    }(e2);
    for (const e3 of We) {
      const o3 = r2[e3];
      void 0 !== o3 && (t2[e3] = o3);
    }
    let { years: o2, months: n2, weeks: a2, days: i2, hours: s2, minutes: l2, seconds: d2, milliseconds: m2, microseconds: c2, nanoseconds: h2 } = t2;
    return RejectDuration(o2, n2, a2, i2, s2, l2, d2, m2, c2, h2), { years: o2, months: n2, weeks: a2, days: i2, hours: s2, minutes: l2, seconds: d2, milliseconds: m2, microseconds: c2, nanoseconds: h2 };
  }
  function ToTemporalOverflow(e2) {
    return void 0 === e2 ? "constrain" : GetOption(e2, "overflow", ["constrain", "reject"], "constrain");
  }
  function ToTemporalDisambiguation(e2) {
    return void 0 === e2 ? "compatible" : GetOption(e2, "disambiguation", ["compatible", "earlier", "later", "reject"], "compatible");
  }
  function ToTemporalRoundingMode(e2, t2) {
    return GetOption(e2, "roundingMode", ["ceil", "floor", "expand", "trunc", "halfCeil", "halfFloor", "halfExpand", "halfTrunc", "halfEven"], t2);
  }
  function ToTemporalOffset(e2, t2) {
    return void 0 === e2 ? t2 : GetOption(e2, "offset", ["prefer", "use", "ignore", "reject"], t2);
  }
  function ToCalendarNameOption(e2) {
    return GetOption(e2, "calendarName", ["auto", "always", "never", "critical"], "auto");
  }
  function ToTemporalRoundingIncrement(e2) {
    let t2 = e2.roundingIncrement;
    if (void 0 === t2)
      return 1;
    if (t2 = ToNumber(t2), !me(t2))
      throw new RangeError("roundingIncrement must be finite");
    const r2 = le(t2);
    if (r2 < 1 || r2 > 1e9)
      throw new RangeError(`roundingIncrement must be at least 1 and at most 1e9, not ${t2}`);
    return r2;
  }
  function ValidateTemporalRoundingIncrement(e2, t2, r2) {
    const o2 = r2 ? t2 : t2 - 1;
    if (e2 > o2)
      throw new RangeError(`roundingIncrement must be at least 1 and less than ${o2}, not ${e2}`);
    if (t2 % e2 != 0)
      throw new RangeError(`Rounding increment must divide evenly into ${t2}`);
  }
  function ToFractionalSecondDigits(e2) {
    const t2 = e2.fractionalSecondDigits;
    if (void 0 === t2)
      return "auto";
    if ("number" != typeof t2) {
      if ("auto" !== ToString(t2))
        throw new RangeError(`fractionalSecondDigits must be 'auto' or 0 through 9, not ${t2}`);
      return "auto";
    }
    const r2 = ie(t2);
    if (!me(r2) || r2 < 0 || r2 > 9)
      throw new RangeError(`fractionalSecondDigits must be 'auto' or 0 through 9, not ${t2}`);
    return r2;
  }
  function ToSecondsStringPrecisionRecord(e2, t2) {
    switch (e2) {
      case "minute":
        return { precision: "minute", unit: "minute", increment: 1 };
      case "second":
        return { precision: 0, unit: "second", increment: 1 };
      case "millisecond":
        return { precision: 3, unit: "millisecond", increment: 1 };
      case "microsecond":
        return { precision: 6, unit: "microsecond", increment: 1 };
      case "nanosecond":
        return { precision: 9, unit: "nanosecond", increment: 1 };
    }
    switch (t2) {
      case "auto":
        return { precision: t2, unit: "nanosecond", increment: 1 };
      case 0:
        return { precision: t2, unit: "second", increment: 1 };
      case 1:
      case 2:
      case 3:
        return { precision: t2, unit: "millisecond", increment: 10 ** (3 - t2) };
      case 4:
      case 5:
      case 6:
        return { precision: t2, unit: "microsecond", increment: 10 ** (6 - t2) };
      case 7:
      case 8:
      case 9:
        return { precision: t2, unit: "nanosecond", increment: 10 ** (9 - t2) };
      default:
        throw new RangeError(`fractionalSecondDigits must be 'auto' or 0 through 9, not ${t2}`);
    }
  }
  var He = Symbol("~required~");
  function GetTemporalUnit(e2, t2, r2, o2, n2 = []) {
    const a2 = [];
    for (const [, e3, t3] of Ue)
      "datetime" !== r2 && r2 !== t3 || a2.push(e3);
    a2.push(...n2);
    let i2 = o2;
    i2 === He ? i2 = void 0 : void 0 !== i2 && a2.push(i2);
    const s2 = [...a2];
    for (const e3 of a2) {
      const t3 = Le.get(e3);
      void 0 !== t3 && s2.push(t3);
    }
    let l2 = GetOption(e2, t2, s2, i2);
    if (void 0 === l2 && o2 === He)
      throw new RangeError(`${t2} is required`);
    return Ae.has(l2) ? Ae.get(l2) : l2;
  }
  function ToRelativeTemporalObject(e2) {
    const t2 = e2.relativeTo;
    if (void 0 === t2)
      return t2;
    let r2, o2, n2, a2, i2, s2, l2, d2, m2, c2, h2, u2, T2 = "option", p2 = false;
    if (IsObject(t2)) {
      if (IsTemporalZonedDateTime(t2) || IsTemporalDate(t2))
        return t2;
      if (IsTemporalDateTime(t2))
        return TemporalDateTimeToDate(t2);
      c2 = GetTemporalCalendarSlotValueWithISODefault(t2);
      const e3 = CalendarFields(c2, ["day", "hour", "microsecond", "millisecond", "minute", "month", "monthCode", "nanosecond", "second", "year"]);
      e3.push("timeZone", "offset");
      const p3 = PrepareTemporalFields(t2, e3, []), f2 = Te(null);
      f2.overflow = "constrain", { year: r2, month: o2, day: n2, hour: a2, minute: i2, second: s2, millisecond: l2, microsecond: d2, nanosecond: m2 } = InterpretTemporalDateTimeFields(c2, p3, f2), u2 = p3.offset, void 0 === u2 && (T2 = "wall"), h2 = p3.timeZone, void 0 !== h2 && (h2 = ToTemporalTimeZoneSlotValue(h2));
    } else {
      let e3, f2;
      if ({ year: r2, month: o2, day: n2, hour: a2, minute: i2, second: s2, millisecond: l2, microsecond: d2, nanosecond: m2, calendar: c2, ianaName: e3, offset: u2, z: f2 } = ParseISODateTime(ToString(t2)), e3)
        h2 = ToTemporalTimeZoneSlotValue(e3), f2 ? T2 = "exact" : u2 || (T2 = "wall"), p2 = true;
      else if (f2)
        throw new RangeError("Z designator not supported for PlainDate relativeTo; either remove the Z or add a bracketed time zone");
      if (c2 || (c2 = "iso8601"), !IsBuiltinCalendar(c2))
        throw new RangeError(`invalid calendar identifier ${c2}`);
      c2 = ASCIILowercase(c2);
    }
    if (void 0 === h2)
      return CreateTemporalDate(r2, o2, n2, c2);
    return CreateTemporalZonedDateTime(InterpretISODateTimeOffset(r2, o2, n2, a2, i2, s2, l2, d2, m2, T2, "option" === T2 ? ParseTimeZoneOffsetString(u2) : 0, h2, "compatible", "reject", p2), h2, c2);
  }
  function DefaultTemporalLargestUnit(e2, t2, r2, o2, n2, a2, i2, s2, l2, d2) {
    for (const [m2, c2] of [["years", e2], ["months", t2], ["weeks", r2], ["days", o2], ["hours", n2], ["minutes", a2], ["seconds", i2], ["milliseconds", s2], ["microseconds", l2], ["nanoseconds", d2]])
      if (0 !== c2)
        return Ae.get(m2);
    return "nanosecond";
  }
  function LargerOfTwoTemporalUnits(e2, t2) {
    return xe.indexOf(e2) > xe.indexOf(t2) ? t2 : e2;
  }
  function PrepareTemporalFields(e2, t2, r2, { emptySourceErrorMessage: o2 } = { emptySourceErrorMessage: "no supported properties found" }) {
    const n2 = Te(null);
    let a2 = false;
    t2.sort();
    for (const o3 of t2) {
      let t3 = e2[o3];
      if (void 0 !== t3)
        a2 = true, $e.has(o3) && (t3 = $e.get(o3)(t3)), n2[o3] = t3;
      else if ("partial" !== r2) {
        if (ee.call(r2, o3))
          throw new TypeError(`required property '${o3}' missing or undefined`);
        t3 = ke.get(o3), n2[o3] = t3;
      }
    }
    if ("partial" === r2 && !a2)
      throw new TypeError(o2);
    return n2;
  }
  function ToTemporalTimeRecord(e2, t2 = "complete") {
    const r2 = ["hour", "microsecond", "millisecond", "minute", "nanosecond", "second"], o2 = PrepareTemporalFields(e2, r2, "partial", { emptySourceErrorMessage: "invalid time-like" }), n2 = {};
    for (const e3 of r2) {
      const r3 = pe(o2, e3);
      void 0 !== r3 ? n2[e3] = r3.value : "complete" === t2 && (n2[e3] = 0);
    }
    return n2;
  }
  function ToTemporalDate(e2, t2) {
    let r2 = e2;
    if (IsObject(r2)) {
      if (IsTemporalDate(r2))
        return r2;
      if (IsTemporalZonedDateTime(r2) && (ToTemporalOverflow(t2), r2 = GetPlainDateTimeFor(GetSlot(r2, g), GetSlot(r2, S), GetSlot(r2, p))), IsTemporalDateTime(r2))
        return ToTemporalOverflow(t2), CreateTemporalDate(GetSlot(r2, i), GetSlot(r2, s), GetSlot(r2, l), GetSlot(r2, p));
      const e3 = GetTemporalCalendarSlotValueWithISODefault(r2);
      return CalendarDateFromFields(e3, PrepareTemporalFields(r2, CalendarFields(e3, ["day", "month", "monthCode", "year"]), []), t2);
    }
    ToTemporalOverflow(t2);
    let { year: o2, month: n2, day: a2, calendar: d2, z: m2 } = function ParseTemporalDateString(e3) {
      return ParseISODateTime(e3);
    }(ToString(r2));
    if (m2)
      throw new RangeError("Z designator not supported for PlainDate");
    if (d2 || (d2 = "iso8601"), !IsBuiltinCalendar(d2))
      throw new RangeError(`invalid calendar identifier ${d2}`);
    return d2 = ASCIILowercase(d2), CreateTemporalDate(o2, n2, a2, d2);
  }
  function InterpretTemporalDateTimeFields(e2, t2, r2) {
    let { hour: o2, minute: n2, second: a2, millisecond: d2, microsecond: m2, nanosecond: c2 } = ToTemporalTimeRecord(t2);
    const h2 = ToTemporalOverflow(r2), u2 = CalendarDateFromFields(e2, t2, r2), T2 = GetSlot(u2, i), p2 = GetSlot(u2, s), f2 = GetSlot(u2, l);
    return { hour: o2, minute: n2, second: a2, millisecond: d2, microsecond: m2, nanosecond: c2 } = RegulateTime(o2, n2, a2, d2, m2, c2, h2), { year: T2, month: p2, day: f2, hour: o2, minute: n2, second: a2, millisecond: d2, microsecond: m2, nanosecond: c2 };
  }
  function ToTemporalDateTime(e2, t2) {
    let r2, o2, n2, a2, d2, m2, c2, h2, u2, T2;
    if (IsObject(e2)) {
      if (IsTemporalDateTime(e2))
        return e2;
      if (IsTemporalZonedDateTime(e2))
        return ToTemporalOverflow(t2), GetPlainDateTimeFor(GetSlot(e2, g), GetSlot(e2, S), GetSlot(e2, p));
      if (IsTemporalDate(e2))
        return ToTemporalOverflow(t2), CreateTemporalDateTime(GetSlot(e2, i), GetSlot(e2, s), GetSlot(e2, l), 0, 0, 0, 0, 0, 0, GetSlot(e2, p));
      T2 = GetTemporalCalendarSlotValueWithISODefault(e2);
      const f2 = PrepareTemporalFields(e2, CalendarFields(T2, ["day", "hour", "microsecond", "millisecond", "minute", "month", "monthCode", "nanosecond", "second", "year"]), []);
      ({ year: r2, month: o2, day: n2, hour: a2, minute: d2, second: m2, millisecond: c2, microsecond: h2, nanosecond: u2 } = InterpretTemporalDateTimeFields(T2, f2, t2));
    } else {
      let i2;
      if (ToTemporalOverflow(t2), { year: r2, month: o2, day: n2, hour: a2, minute: d2, second: m2, millisecond: c2, microsecond: h2, nanosecond: u2, calendar: T2, z: i2 } = function ParseTemporalDateTimeString(e3) {
        return ParseISODateTime(e3);
      }(ToString(e2)), i2)
        throw new RangeError("Z designator not supported for PlainDateTime");
      if (RejectDateTime(r2, o2, n2, a2, d2, m2, c2, h2, u2), T2 || (T2 = "iso8601"), !IsBuiltinCalendar(T2))
        throw new RangeError(`invalid calendar identifier ${T2}`);
      T2 = ASCIILowercase(T2);
    }
    return CreateTemporalDateTime(r2, o2, n2, a2, d2, m2, c2, h2, u2, T2);
  }
  function ToTemporalDuration(e2) {
    if (IsTemporalDuration(e2))
      return e2;
    let { years: t2, months: r2, weeks: o2, days: n2, hours: a2, minutes: i2, seconds: s2, milliseconds: l2, microseconds: d2, nanoseconds: m2 } = ToTemporalDurationRecord(e2);
    return new (GetIntrinsic("%Temporal.Duration%"))(t2, r2, o2, n2, a2, i2, s2, l2, d2, m2);
  }
  function ToTemporalInstant(e2) {
    if (IsTemporalInstant(e2))
      return e2;
    if (IsTemporalZonedDateTime(e2)) {
      return new (GetIntrinsic("%Temporal.Instant%"))(GetSlot(e2, n));
    }
    const t2 = ParseTemporalInstant(ToString(e2));
    return new (GetIntrinsic("%Temporal.Instant%"))(t2);
  }
  function ToTemporalMonthDay(e2, t2) {
    let r2 = e2;
    if (IsObject(r2)) {
      if (IsTemporalMonthDay(r2))
        return r2;
      let e3, o3;
      if (HasSlot(r2, p))
        e3 = GetSlot(r2, p), o3 = false;
      else {
        let t3 = r2.calendar;
        o3 = void 0 === t3, void 0 === t3 && (t3 = "iso8601"), e3 = ToTemporalCalendarSlotValue(t3);
      }
      const n3 = PrepareTemporalFields(r2, CalendarFields(e3, ["day", "month", "monthCode", "year"]), []);
      return o3 && void 0 !== n3.month && void 0 === n3.monthCode && void 0 === n3.year && (n3.year = 1972), CalendarMonthDayFromFields(e3, n3, t2);
    }
    ToTemporalOverflow(t2);
    let { month: o2, day: n2, referenceISOYear: a2, calendar: i2 } = ParseTemporalMonthDayString(ToString(r2));
    if (void 0 === i2 && (i2 = "iso8601"), !IsBuiltinCalendar(i2))
      throw new RangeError(`invalid calendar identifier ${i2}`);
    if (i2 = ASCIILowercase(i2), void 0 === a2)
      return RejectISODate(1972, o2, n2), CreateTemporalMonthDay(o2, n2, i2);
    return CalendarMonthDayFromFields(i2, CreateTemporalMonthDay(o2, n2, i2, a2));
  }
  function ToTemporalTime(e2, t2 = "constrain") {
    let r2, o2, n2, a2, i2, s2, l2 = e2;
    if (IsObject(l2)) {
      if (IsTemporalTime(l2))
        return l2;
      if (IsTemporalZonedDateTime(l2) && (l2 = GetPlainDateTimeFor(GetSlot(l2, g), GetSlot(l2, S), GetSlot(l2, p))), IsTemporalDateTime(l2)) {
        return new (GetIntrinsic("%Temporal.PlainTime%"))(GetSlot(l2, d), GetSlot(l2, m), GetSlot(l2, c), GetSlot(l2, h), GetSlot(l2, u), GetSlot(l2, T));
      }
      ({ hour: r2, minute: o2, second: n2, millisecond: a2, microsecond: i2, nanosecond: s2 } = ToTemporalTimeRecord(l2)), { hour: r2, minute: o2, second: n2, millisecond: a2, microsecond: i2, nanosecond: s2 } = RegulateTime(r2, o2, n2, a2, i2, s2, t2);
    } else
      ({ hour: r2, minute: o2, second: n2, millisecond: a2, microsecond: i2, nanosecond: s2 } = function ParseTemporalTimeString(e3) {
        const t3 = z.exec(e3);
        let r3, o3, n3, a3, i3, s3, l3;
        if (t3) {
          r3 = ToIntegerOrInfinity(t3[1]), o3 = ToIntegerOrInfinity(t3[2] || t3[5]), n3 = ToIntegerOrInfinity(t3[3] || t3[6]), 60 === n3 && (n3 = 59);
          const e4 = (t3[4] || t3[7]) + "000000000";
          a3 = ToIntegerOrInfinity(e4.slice(0, 3)), i3 = ToIntegerOrInfinity(e4.slice(3, 6)), s3 = ToIntegerOrInfinity(e4.slice(6, 9)), l3 = t3[14];
          for (const [, e5, t4, r4] of l3.matchAll(H))
            if ("u-ca" !== t4 && "!" === e5)
              throw new RangeError(`Unrecognized annotation: !${t4}=${r4}`);
          if (t3[8])
            throw new RangeError("Z designator not supported for PlainTime");
        } else {
          let t4, l4;
          if ({ hasTime: l4, hour: r3, minute: o3, second: n3, millisecond: a3, microsecond: i3, nanosecond: s3, z: t4 } = ParseISODateTime(e3), !l4)
            throw new RangeError(`time is missing in string: ${e3}`);
          if (t4)
            throw new RangeError("Z designator not supported for PlainTime");
        }
        if (/[tT ][0-9][0-9]/.test(e3))
          return { hour: r3, minute: o3, second: n3, millisecond: a3, microsecond: i3, nanosecond: s3 };
        try {
          const { month: t4, day: r4 } = ParseTemporalMonthDayString(e3);
          RejectISODate(1972, t4, r4);
        } catch {
          try {
            const { year: t4, month: r4 } = ParseTemporalYearMonthString(e3);
            RejectISODate(t4, r4, 1);
          } catch {
            return { hour: r3, minute: o3, second: n3, millisecond: a3, microsecond: i3, nanosecond: s3 };
          }
        }
        throw new RangeError(`invalid ISO 8601 time-only string ${e3}; may need a T prefix`);
      }(ToString(l2))), RejectTime(r2, o2, n2, a2, i2, s2);
    return new (GetIntrinsic("%Temporal.PlainTime%"))(r2, o2, n2, a2, i2, s2);
  }
  function ToTemporalYearMonth(e2, t2) {
    if (IsObject(e2)) {
      if (IsTemporalYearMonth(e2))
        return e2;
      const r3 = GetTemporalCalendarSlotValueWithISODefault(e2);
      return CalendarYearMonthFromFields(r3, PrepareTemporalFields(e2, CalendarFields(r3, ["month", "monthCode", "year"]), []), t2);
    }
    ToTemporalOverflow(t2);
    let { year: r2, month: o2, referenceISODay: n2, calendar: a2 } = ParseTemporalYearMonthString(ToString(e2));
    if (void 0 === a2 && (a2 = "iso8601"), !IsBuiltinCalendar(a2))
      throw new RangeError(`invalid calendar identifier ${a2}`);
    if (a2 = ASCIILowercase(a2), void 0 === n2)
      return RejectISODate(r2, o2, 1), CreateTemporalYearMonth(r2, o2, a2);
    return CalendarYearMonthFromFields(a2, CreateTemporalYearMonth(r2, o2, a2, n2));
  }
  function InterpretISODateTimeOffset(t2, r2, o2, i2, s2, l2, d2, m2, c2, h2, u2, T2, p2, f2, y2) {
    const I2 = new (GetIntrinsic("%Temporal.PlainDateTime%"))(t2, r2, o2, i2, s2, l2, d2, m2, c2);
    if ("wall" === h2 || "ignore" === f2) {
      return GetSlot(GetInstantFor(T2, I2, p2), n);
    }
    if ("exact" === h2 || "use" === f2) {
      const n2 = GetUTCEpochNanoseconds(t2, r2, o2, i2, s2, l2, d2, m2, c2);
      if (null === n2)
        throw new RangeError("ZonedDateTime outside of supported range");
      return import_jsbi.default.subtract(n2, import_jsbi.default.BigInt(u2));
    }
    const S2 = GetPossibleInstantsFor(T2, I2);
    for (const t3 of S2) {
      const r3 = GetOffsetNanosecondsFor(T2, t3), o3 = import_jsbi.default.toNumber(RoundNumberToIncrement(import_jsbi.default.BigInt(r3), be, "halfExpand"));
      if (r3 === u2 || y2 && o3 === u2)
        return GetSlot(t3, n);
    }
    if ("reject" === f2) {
      const e2 = FormatTimeZoneOffsetString(u2), t3 = IsTemporalTimeZone(T2) ? GetSlot(T2, a) : "time zone";
      throw new RangeError(`Offset ${e2} is invalid for ${I2.toString()} in ${t3}`);
    }
    return GetSlot(DisambiguatePossibleInstants(S2, T2, I2, p2), n);
  }
  function ToTemporalZonedDateTime(e2, t2) {
    let r2, o2, n2, a2, i2, s2, l2, d2, m2, c2, h2, u2, T2, p2, f2 = false, y2 = "option";
    if (IsObject(e2)) {
      if (IsTemporalZonedDateTime(e2))
        return e2;
      u2 = GetTemporalCalendarSlotValueWithISODefault(e2);
      const f3 = CalendarFields(u2, ["day", "hour", "microsecond", "millisecond", "minute", "month", "monthCode", "nanosecond", "second", "year"]);
      f3.push("timeZone", "offset");
      const I3 = PrepareTemporalFields(e2, f3, ["timeZone"]);
      c2 = ToTemporalTimeZoneSlotValue(I3.timeZone), h2 = I3.offset, void 0 === h2 && (y2 = "wall"), T2 = ToTemporalDisambiguation(t2), p2 = ToTemporalOffset(t2, "reject"), { year: r2, month: o2, day: n2, hour: a2, minute: i2, second: s2, millisecond: l2, microsecond: d2, nanosecond: m2 } = InterpretTemporalDateTimeFields(u2, I3, t2);
    } else {
      let I3, S2;
      if ({ year: r2, month: o2, day: n2, hour: a2, minute: i2, second: s2, millisecond: l2, microsecond: d2, nanosecond: m2, ianaName: I3, offset: h2, z: S2, calendar: u2 } = function ParseTemporalZonedDateTimeString(e3) {
        const t3 = ParseISODateTime(e3);
        if (!t3.ianaName)
          throw new RangeError("Temporal.ZonedDateTime requires a time zone ID in brackets");
        return t3;
      }(ToString(e2)), c2 = ToTemporalTimeZoneSlotValue(I3), S2 ? y2 = "exact" : h2 || (y2 = "wall"), u2 || (u2 = "iso8601"), !IsBuiltinCalendar(u2))
        throw new RangeError(`invalid calendar identifier ${u2}`);
      u2 = ASCIILowercase(u2), f2 = true, T2 = ToTemporalDisambiguation(t2), p2 = ToTemporalOffset(t2, "reject"), ToTemporalOverflow(t2);
    }
    let I2 = 0;
    "option" === y2 && (I2 = ParseTimeZoneOffsetString(h2));
    return CreateTemporalZonedDateTime(InterpretISODateTimeOffset(r2, o2, n2, a2, i2, s2, l2, d2, m2, y2, I2, c2, T2, p2, f2), c2, u2);
  }
  function CreateTemporalDateSlots(e2, t2, r2, o2, n2) {
    RejectISODate(t2, r2, o2), RejectDateRange(t2, r2, o2), N(e2), SetSlot(e2, i, t2), SetSlot(e2, s, r2), SetSlot(e2, l, o2), SetSlot(e2, p, n2), SetSlot(e2, f, true);
  }
  function CreateTemporalDate(e2, t2, r2, o2 = "iso8601") {
    const n2 = GetIntrinsic("%Temporal.PlainDate%"), a2 = Te(n2.prototype);
    return CreateTemporalDateSlots(a2, e2, t2, r2, o2), a2;
  }
  function CreateTemporalDateTimeSlots(e2, t2, r2, o2, n2, a2, f2, y2, I2, S2, g2) {
    RejectDateTime(t2, r2, o2, n2, a2, f2, y2, I2, S2), RejectDateTimeRange(t2, r2, o2, n2, a2, f2, y2, I2, S2), N(e2), SetSlot(e2, i, t2), SetSlot(e2, s, r2), SetSlot(e2, l, o2), SetSlot(e2, d, n2), SetSlot(e2, m, a2), SetSlot(e2, c, f2), SetSlot(e2, h, y2), SetSlot(e2, u, I2), SetSlot(e2, T, S2), SetSlot(e2, p, g2);
  }
  function CreateTemporalDateTime(e2, t2, r2, o2, n2, a2, i2, s2, l2, d2 = "iso8601") {
    const m2 = GetIntrinsic("%Temporal.PlainDateTime%"), c2 = Te(m2.prototype);
    return CreateTemporalDateTimeSlots(c2, e2, t2, r2, o2, n2, a2, i2, s2, l2, d2), c2;
  }
  function CreateTemporalMonthDaySlots(e2, t2, r2, o2, n2) {
    RejectISODate(n2, t2, r2), RejectDateRange(n2, t2, r2), N(e2), SetSlot(e2, s, t2), SetSlot(e2, l, r2), SetSlot(e2, i, n2), SetSlot(e2, p, o2), SetSlot(e2, I, true);
  }
  function CreateTemporalMonthDay(e2, t2, r2 = "iso8601", o2 = 1972) {
    const n2 = GetIntrinsic("%Temporal.PlainMonthDay%"), a2 = Te(n2.prototype);
    return CreateTemporalMonthDaySlots(a2, e2, t2, r2, o2), a2;
  }
  function CreateTemporalYearMonthSlots(e2, t2, r2, o2, n2) {
    RejectISODate(t2, r2, n2), function RejectYearMonthRange(e3, t3) {
      RejectToRange(e3, Fe, Ye), e3 === Fe ? RejectToRange(t3, 4, 12) : e3 === Ye && RejectToRange(t3, 1, 9);
    }(t2, r2), N(e2), SetSlot(e2, i, t2), SetSlot(e2, s, r2), SetSlot(e2, l, n2), SetSlot(e2, p, o2), SetSlot(e2, y, true);
  }
  function CreateTemporalYearMonth(e2, t2, r2 = "iso8601", o2 = 1) {
    const n2 = GetIntrinsic("%Temporal.PlainYearMonth%"), a2 = Te(n2.prototype);
    return CreateTemporalYearMonthSlots(a2, e2, t2, r2, o2), a2;
  }
  function CreateTemporalZonedDateTimeSlots(e2, t2, r2, o2) {
    ValidateEpochNanoseconds(t2), N(e2), SetSlot(e2, n, t2), SetSlot(e2, g, r2), SetSlot(e2, p, o2);
    const a2 = new (GetIntrinsic("%Temporal.Instant%"))(GetSlot(e2, n));
    SetSlot(e2, S, a2);
  }
  function CreateTemporalZonedDateTime(e2, t2, r2 = "iso8601") {
    const o2 = GetIntrinsic("%Temporal.ZonedDateTime%"), n2 = Te(o2.prototype);
    return CreateTemporalZonedDateTimeSlots(n2, e2, t2, r2), n2;
  }
  function CalendarFields(e2, t2) {
    if ("string" == typeof e2) {
      const r3 = new (GetIntrinsic("%Temporal.Calendar%"))(e2);
      return Call(GetIntrinsic("%Temporal.Calendar.prototype.fields%"), r3, [t2]);
    }
    const r2 = Call(GetMethod(e2, "fields"), e2, [t2]), o2 = [];
    for (const e3 of r2) {
      if ("string" != typeof e3)
        throw new TypeError("bad return from calendar.fields()");
      te.call(o2, e3);
    }
    return o2;
  }
  function CalendarMergeFields(e2, t2, r2) {
    if ("string" == typeof e2) {
      const o3 = new (GetIntrinsic("%Temporal.Calendar%"))(e2);
      return Call(GetIntrinsic("%Temporal.Calendar.prototype.mergeFields%"), o3, [t2, r2]);
    }
    const o2 = Call(GetMethod(e2, "mergeFields"), e2, [t2, r2]);
    if (!IsObject(o2))
      throw new TypeError("bad return from calendar.mergeFields()");
    return o2;
  }
  function CalendarDateAdd(e2, t2, r2, o2, n2) {
    let a2 = n2;
    if ("string" == typeof e2) {
      const n3 = new (GetIntrinsic("%Temporal.Calendar%"))(e2);
      return Call(GetIntrinsic("%Temporal.Calendar.prototype.dateAdd%"), n3, [t2, r2, o2]);
    }
    void 0 === a2 && (a2 = GetMethod(e2, "dateAdd"));
    const i2 = fe(a2, e2, [t2, r2, o2]);
    if (!IsTemporalDate(i2))
      throw new TypeError("invalid result");
    return i2;
  }
  function CalendarDateUntil(e2, t2, r2, o2, n2) {
    let a2 = n2;
    if ("string" == typeof e2) {
      const n3 = new (GetIntrinsic("%Temporal.Calendar%"))(e2);
      return Call(GetIntrinsic("%Temporal.Calendar.prototype.dateUntil%"), n3, [t2, r2, o2]);
    }
    void 0 === a2 && (a2 = GetMethod(e2, "dateUntil"));
    const i2 = fe(a2, e2, [t2, r2, o2]);
    if (!IsTemporalDuration(i2))
      throw new TypeError("invalid result");
    return i2;
  }
  function CalendarYear(e2, t2) {
    if ("string" == typeof e2) {
      const r3 = new (GetIntrinsic("%Temporal.Calendar%"))(e2);
      return Call(GetIntrinsic("%Temporal.Calendar.prototype.year%"), r3, [t2]);
    }
    let r2 = Call(GetMethod(e2, "year"), e2, [t2]);
    if ("number" != typeof r2)
      throw new TypeError("calendar year result must be an integer");
    if (!IsIntegralNumber(r2))
      throw new RangeError("calendar year result must be an integer");
    return r2;
  }
  function CalendarMonth(e2, t2) {
    if ("string" == typeof e2) {
      const r3 = new (GetIntrinsic("%Temporal.Calendar%"))(e2);
      return Call(GetIntrinsic("%Temporal.Calendar.prototype.month%"), r3, [t2]);
    }
    let r2 = Call(GetMethod(e2, "month"), e2, [t2]);
    if ("number" != typeof r2)
      throw new TypeError("calendar month result must be a positive integer");
    if (!IsIntegralNumber(r2) || r2 < 1)
      throw new RangeError("calendar month result must be a positive integer");
    return r2;
  }
  function CalendarMonthCode(e2, t2) {
    if ("string" == typeof e2) {
      const r3 = new (GetIntrinsic("%Temporal.Calendar%"))(e2);
      return Call(GetIntrinsic("%Temporal.Calendar.prototype.monthCode%"), r3, [t2]);
    }
    let r2 = Call(GetMethod(e2, "monthCode"), e2, [t2]);
    if ("string" != typeof r2)
      throw new TypeError("calendar monthCode result must be a string");
    return r2;
  }
  function CalendarDay(e2, t2) {
    if ("string" == typeof e2) {
      const r3 = new (GetIntrinsic("%Temporal.Calendar%"))(e2);
      return Call(GetIntrinsic("%Temporal.Calendar.prototype.day%"), r3, [t2]);
    }
    const r2 = Call(GetMethod(e2, "day"), e2, [t2]);
    if ("number" != typeof r2)
      throw new TypeError("calendar day result must be a positive integer");
    if (!IsIntegralNumber(r2) || r2 < 1)
      throw new RangeError("calendar day result must be a positive integer");
    return r2;
  }
  function CalendarEra(e2, t2) {
    if ("string" == typeof e2) {
      const r3 = new (GetIntrinsic("%Temporal.Calendar%"))(e2);
      return Call(GetIntrinsic("%Temporal.Calendar.prototype.era%"), r3, [t2]);
    }
    let r2 = Call(GetMethod(e2, "era"), e2, [t2]);
    if (void 0 === r2)
      return r2;
    if ("string" != typeof r2)
      throw new TypeError("calendar era result must be a string or undefined");
    return r2;
  }
  function CalendarEraYear(e2, t2) {
    if ("string" == typeof e2) {
      const r3 = new (GetIntrinsic("%Temporal.Calendar%"))(e2);
      return Call(GetIntrinsic("%Temporal.Calendar.prototype.eraYear%"), r3, [t2]);
    }
    let r2 = Call(GetMethod(e2, "eraYear"), e2, [t2]);
    if (void 0 === r2)
      return r2;
    if ("number" != typeof r2)
      throw new TypeError("calendar eraYear result must be an integer or undefined");
    if (!IsIntegralNumber(r2))
      throw new RangeError("calendar eraYear result must be an integer or undefined");
    return r2;
  }
  function CalendarDayOfWeek(e2, t2) {
    if ("string" == typeof e2) {
      const r3 = new (GetIntrinsic("%Temporal.Calendar%"))(e2);
      return Call(GetIntrinsic("%Temporal.Calendar.prototype.dayOfWeek%"), r3, [t2]);
    }
    const r2 = Call(GetMethod(e2, "dayOfWeek"), e2, [t2]);
    if ("number" != typeof r2)
      throw new TypeError("calendar dayOfWeek result must be a positive integer");
    if (!IsIntegralNumber(r2) || r2 < 1)
      throw new RangeError("calendar dayOfWeek result must be a positive integer");
    return r2;
  }
  function CalendarDayOfYear(e2, t2) {
    if ("string" == typeof e2) {
      const r3 = new (GetIntrinsic("%Temporal.Calendar%"))(e2);
      return Call(GetIntrinsic("%Temporal.Calendar.prototype.dayOfYear%"), r3, [t2]);
    }
    const r2 = Call(GetMethod(e2, "dayOfYear"), e2, [t2]);
    if ("number" != typeof r2)
      throw new TypeError("calendar dayOfYear result must be a positive integer");
    if (!IsIntegralNumber(r2) || r2 < 1)
      throw new RangeError("calendar dayOfYear result must be a positive integer");
    return r2;
  }
  function CalendarWeekOfYear(e2, t2) {
    if ("string" == typeof e2) {
      const r3 = new (GetIntrinsic("%Temporal.Calendar%"))(e2);
      return Call(GetIntrinsic("%Temporal.Calendar.prototype.weekOfYear%"), r3, [t2]);
    }
    const r2 = Call(GetMethod(e2, "weekOfYear"), e2, [t2]);
    if ("number" != typeof r2)
      throw new TypeError("calendar weekOfYear result must be a positive integer");
    if (!IsIntegralNumber(r2) || r2 < 1)
      throw new RangeError("calendar weekOfYear result must be a positive integer");
    return r2;
  }
  function CalendarYearOfWeek(e2, t2) {
    if ("string" == typeof e2) {
      const r3 = new (GetIntrinsic("%Temporal.Calendar%"))(e2);
      return Call(GetIntrinsic("%Temporal.Calendar.prototype.yearOfWeek%"), r3, [t2]);
    }
    const r2 = Call(GetMethod(e2, "yearOfWeek"), e2, [t2]);
    if ("number" != typeof r2)
      throw new TypeError("calendar yearOfWeek result must be an integer");
    if (!IsIntegralNumber(r2))
      throw new RangeError("calendar yearOfWeek result must be an integer");
    return r2;
  }
  function CalendarDaysInWeek(e2, t2) {
    if ("string" == typeof e2) {
      const r3 = new (GetIntrinsic("%Temporal.Calendar%"))(e2);
      return Call(GetIntrinsic("%Temporal.Calendar.prototype.daysInWeek%"), r3, [t2]);
    }
    const r2 = Call(GetMethod(e2, "daysInWeek"), e2, [t2]);
    if ("number" != typeof r2)
      throw new TypeError("calendar daysInWeek result must be a positive integer");
    if (!IsIntegralNumber(r2) || r2 < 1)
      throw new RangeError("calendar daysInWeek result must be a positive integer");
    return r2;
  }
  function CalendarDaysInMonth(e2, t2) {
    if ("string" == typeof e2) {
      const r3 = new (GetIntrinsic("%Temporal.Calendar%"))(e2);
      return Call(GetIntrinsic("%Temporal.Calendar.prototype.daysInMonth%"), r3, [t2]);
    }
    const r2 = Call(GetMethod(e2, "daysInMonth"), e2, [t2]);
    if ("number" != typeof r2)
      throw new TypeError("calendar daysInMonth result must be a positive integer");
    if (!IsIntegralNumber(r2) || r2 < 1)
      throw new RangeError("calendar daysInMonth result must be a positive integer");
    return r2;
  }
  function CalendarDaysInYear(e2, t2) {
    if ("string" == typeof e2) {
      const r3 = new (GetIntrinsic("%Temporal.Calendar%"))(e2);
      return Call(GetIntrinsic("%Temporal.Calendar.prototype.daysInYear%"), r3, [t2]);
    }
    const r2 = Call(GetMethod(e2, "daysInYear"), e2, [t2]);
    if ("number" != typeof r2)
      throw new TypeError("calendar daysInYear result must be a positive integer");
    if (!IsIntegralNumber(r2) || r2 < 1)
      throw new RangeError("calendar daysInYear result must be a positive integer");
    return r2;
  }
  function CalendarMonthsInYear(e2, t2) {
    if ("string" == typeof e2) {
      const r3 = new (GetIntrinsic("%Temporal.Calendar%"))(e2);
      return Call(GetIntrinsic("%Temporal.Calendar.prototype.monthsInYear%"), r3, [t2]);
    }
    const r2 = Call(GetMethod(e2, "monthsInYear"), e2, [t2]);
    if ("number" != typeof r2)
      throw new TypeError("calendar monthsInYear result must be a positive integer");
    if (!IsIntegralNumber(r2) || r2 < 1)
      throw new RangeError("calendar monthsInYear result must be a positive integer");
    return r2;
  }
  function CalendarInLeapYear(e2, t2) {
    if ("string" == typeof e2) {
      const r3 = new (GetIntrinsic("%Temporal.Calendar%"))(e2);
      return Call(GetIntrinsic("%Temporal.Calendar.prototype.inLeapYear%"), r3, [t2]);
    }
    const r2 = Call(GetMethod(e2, "inLeapYear"), e2, [t2]);
    if ("boolean" != typeof r2)
      throw new TypeError("calendar inLeapYear result must be a boolean");
    return r2;
  }
  function ToTemporalCalendarSlotValue(e2) {
    if (IsObject(e2)) {
      if (HasSlot(e2, p))
        return GetSlot(e2, p);
      if (!function ObjectImplementsTemporalCalendarProtocol(e3) {
        return !!IsTemporalCalendar(e3) || "dateAdd" in e3 && "dateFromFields" in e3 && "dateUntil" in e3 && "day" in e3 && "dayOfWeek" in e3 && "dayOfYear" in e3 && "daysInMonth" in e3 && "daysInWeek" in e3 && "daysInYear" in e3 && "fields" in e3 && "id" in e3 && "inLeapYear" in e3 && "mergeFields" in e3 && "month" in e3 && "monthCode" in e3 && "monthDayFromFields" in e3 && "monthsInYear" in e3 && "weekOfYear" in e3 && "year" in e3 && "yearMonthFromFields" in e3 && "yearOfWeek" in e3;
      }(e2))
        throw new TypeError("expected a Temporal.Calendar or object implementing the Temporal.Calendar protocol");
      return e2;
    }
    const t2 = ToString(e2);
    if (IsBuiltinCalendar(t2))
      return ASCIILowercase(t2);
    let r2;
    try {
      ({ calendar: r2 } = ParseISODateTime(t2));
    } catch {
      try {
        ({ calendar: r2 } = ParseTemporalYearMonthString(t2));
      } catch {
        ({ calendar: r2 } = ParseTemporalMonthDayString(t2));
      }
    }
    if (r2 || (r2 = "iso8601"), !IsBuiltinCalendar(r2))
      throw new RangeError(`invalid calendar identifier ${r2}`);
    return ASCIILowercase(r2);
  }
  function GetTemporalCalendarSlotValueWithISODefault(e2) {
    if (HasSlot(e2, p))
      return GetSlot(e2, p);
    const { calendar: t2 } = e2;
    return void 0 === t2 ? "iso8601" : ToTemporalCalendarSlotValue(t2);
  }
  function ToTemporalCalendarIdentifier(e2) {
    if ("string" == typeof e2)
      return e2;
    const t2 = e2.id;
    if ("string" != typeof t2)
      throw new TypeError("calendar.id should be a string");
    return t2;
  }
  function ToTemporalCalendarObject(e2) {
    if (IsObject(e2))
      return e2;
    return new (GetIntrinsic("%Temporal.Calendar%"))(e2);
  }
  function CalendarEquals(e2, t2) {
    if (e2 === t2)
      return true;
    return ToTemporalCalendarIdentifier(e2) === ToTemporalCalendarIdentifier(t2);
  }
  function ThrowIfCalendarsNotEqual(e2, t2, r2) {
    if (e2 === t2)
      return;
    const o2 = ToTemporalCalendarIdentifier(e2), n2 = ToTemporalCalendarIdentifier(t2);
    if (o2 !== n2)
      throw new RangeError(`cannot ${r2} of ${o2} and ${n2} calendars`);
  }
  function ConsolidateCalendars(e2, t2) {
    if (e2 === t2)
      return t2;
    const r2 = ToTemporalCalendarIdentifier(e2), o2 = ToTemporalCalendarIdentifier(t2);
    if (r2 === o2 || "iso8601" === r2)
      return t2;
    if ("iso8601" === o2)
      return e2;
    throw new RangeError("irreconcilable calendars");
  }
  function CalendarDateFromFields(e2, t2, r2, o2) {
    if ("string" == typeof e2) {
      const o3 = new (GetIntrinsic("%Temporal.Calendar%"))(e2);
      return Call(GetIntrinsic("%Temporal.Calendar.prototype.dateFromFields%"), o3, [t2, r2]);
    }
    const n2 = Call(o2 ?? GetMethod(e2, "dateFromFields"), e2, [t2, r2]);
    if (!IsTemporalDate(n2))
      throw new TypeError("invalid result");
    return n2;
  }
  function CalendarYearMonthFromFields(e2, t2, r2) {
    if ("string" == typeof e2) {
      const o3 = new (GetIntrinsic("%Temporal.Calendar%"))(e2);
      return Call(GetIntrinsic("%Temporal.Calendar.prototype.yearMonthFromFields%"), o3, [t2, r2]);
    }
    let o2 = Call(GetMethod(e2, "yearMonthFromFields"), e2, [t2, r2]);
    if (!IsTemporalYearMonth(o2))
      throw new TypeError("invalid result");
    return o2;
  }
  function CalendarMonthDayFromFields(e2, t2, r2) {
    if ("string" == typeof e2) {
      const o3 = new (GetIntrinsic("%Temporal.Calendar%"))(e2);
      return Call(GetIntrinsic("%Temporal.Calendar.prototype.monthDayFromFields%"), o3, [t2, r2]);
    }
    let o2 = Call(GetMethod(e2, "monthDayFromFields"), e2, [t2, r2]);
    if (!IsTemporalMonthDay(o2))
      throw new TypeError("invalid result");
    return o2;
  }
  function ToTemporalTimeZoneSlotValue(e2) {
    if (IsObject(e2)) {
      if (IsTemporalZonedDateTime(e2))
        return GetSlot(e2, g);
      if (!function ObjectImplementsTemporalTimeZoneProtocol(e3) {
        return !!IsTemporalTimeZone(e3) || "getOffsetNanosecondsFor" in e3 && "getPossibleInstantsFor" in e3 && "id" in e3;
      }(e2))
        throw new TypeError("expected a Temporal.TimeZone or object implementing the Temporal.TimeZone protocol");
      return e2;
    }
    return ParseTemporalTimeZone(ToString(e2));
  }
  function ToTemporalTimeZoneIdentifier(e2) {
    if ("string" == typeof e2)
      return e2;
    const t2 = e2.id;
    if ("string" != typeof t2)
      throw new TypeError("timeZone.id should be a string");
    return t2;
  }
  function ToTemporalTimeZoneObject(e2) {
    if (IsObject(e2))
      return e2;
    return new (GetIntrinsic("%Temporal.TimeZone%"))(e2);
  }
  function TimeZoneEquals(e2, t2) {
    if (e2 === t2)
      return true;
    return ToTemporalTimeZoneIdentifier(e2) === ToTemporalTimeZoneIdentifier(t2);
  }
  function TemporalDateTimeToDate(e2) {
    return CreateTemporalDate(GetSlot(e2, i), GetSlot(e2, s), GetSlot(e2, l), GetSlot(e2, p));
  }
  function TemporalDateTimeToTime(e2) {
    return new (GetIntrinsic("%Temporal.PlainTime%"))(GetSlot(e2, d), GetSlot(e2, m), GetSlot(e2, c), GetSlot(e2, h), GetSlot(e2, u), GetSlot(e2, T));
  }
  function GetOffsetNanosecondsFor(e2, t2, r2) {
    if ("string" == typeof e2) {
      const r3 = new (GetIntrinsic("%Temporal.TimeZone%"))(e2);
      return Call(GetIntrinsic("%Temporal.TimeZone.prototype.getOffsetNanosecondsFor%"), r3, [t2]);
    }
    const o2 = Call(r2 ?? GetMethod(e2, "getOffsetNanosecondsFor"), e2, [t2]);
    if ("number" != typeof o2)
      throw new TypeError("bad return from getOffsetNanosecondsFor");
    if (!IsIntegralNumber(o2) || ae(o2) >= 864e11)
      throw new RangeError("out-of-range return from getOffsetNanosecondsFor");
    return o2;
  }
  function GetOffsetStringFor(e2, t2) {
    return FormatTimeZoneOffsetString(GetOffsetNanosecondsFor(e2, t2));
  }
  function GetPlainDateTimeFor(e2, t2, r2) {
    const o2 = GetSlot(t2, n), a2 = GetOffsetNanosecondsFor(e2, t2);
    let { year: i2, month: s2, day: l2, hour: d2, minute: m2, second: c2, millisecond: h2, microsecond: u2, nanosecond: T2 } = GetISOPartsFromEpoch(o2);
    return { year: i2, month: s2, day: l2, hour: d2, minute: m2, second: c2, millisecond: h2, microsecond: u2, nanosecond: T2 } = BalanceISODateTime(i2, s2, l2, d2, m2, c2, h2, u2, T2 + a2), CreateTemporalDateTime(i2, s2, l2, d2, m2, c2, h2, u2, T2, r2);
  }
  function GetInstantFor(e2, t2, r2) {
    return DisambiguatePossibleInstants(GetPossibleInstantsFor(e2, t2), e2, t2, r2);
  }
  function DisambiguatePossibleInstants(t2, r2, o2, n2) {
    const a2 = GetIntrinsic("%Temporal.Instant%"), f2 = t2.length;
    if (1 === f2)
      return t2[0];
    if (f2)
      switch (n2) {
        case "compatible":
        case "earlier":
          return t2[0];
        case "later":
          return t2[f2 - 1];
        case "reject":
          throw new RangeError("multiple instants found");
      }
    const y2 = GetSlot(o2, i), I2 = GetSlot(o2, s), S2 = GetSlot(o2, l), g2 = GetSlot(o2, d), w2 = GetSlot(o2, m), D2 = GetSlot(o2, c), G2 = GetSlot(o2, h), v2 = GetSlot(o2, u), C2 = GetSlot(o2, T), O2 = GetUTCEpochNanoseconds(y2, I2, S2, g2, w2, D2, G2, v2, C2);
    if (null === O2)
      throw new RangeError("DateTime outside of supported range");
    const b2 = new a2(import_jsbi.default.subtract(O2, Ee)), E2 = new a2(import_jsbi.default.add(O2, Ee)), M2 = GetOffsetNanosecondsFor(r2, b2), R2 = GetOffsetNanosecondsFor(r2, E2) - M2;
    switch (n2) {
      case "earlier": {
        const e2 = GetSlot(o2, p), t3 = GetIntrinsic("%Temporal.PlainDateTime%"), n3 = AddDateTime(y2, I2, S2, g2, w2, D2, G2, v2, C2, e2, 0, 0, 0, 0, 0, 0, 0, 0, 0, -R2, void 0);
        return GetPossibleInstantsFor(r2, new t3(n3.year, n3.month, n3.day, n3.hour, n3.minute, n3.second, n3.millisecond, n3.microsecond, n3.nanosecond, e2))[0];
      }
      case "compatible":
      case "later": {
        const e2 = GetSlot(o2, p), t3 = GetIntrinsic("%Temporal.PlainDateTime%"), n3 = AddDateTime(y2, I2, S2, g2, w2, D2, G2, v2, C2, e2, 0, 0, 0, 0, 0, 0, 0, 0, 0, R2, void 0), a3 = GetPossibleInstantsFor(r2, new t3(n3.year, n3.month, n3.day, n3.hour, n3.minute, n3.second, n3.millisecond, n3.microsecond, n3.nanosecond, e2));
        return a3[a3.length - 1];
      }
      case "reject":
        throw new RangeError("no such instant found");
    }
  }
  function GetPossibleInstantsFor(e2, t2, r2) {
    if ("string" == typeof e2) {
      const r3 = new (GetIntrinsic("%Temporal.TimeZone%"))(e2);
      return Call(GetIntrinsic("%Temporal.TimeZone.prototype.getPossibleInstantsFor%"), r3, [t2]);
    }
    const o2 = Call(r2 ?? GetMethod(e2, "getPossibleInstantsFor"), e2, [t2]), n2 = [];
    for (const e3 of o2) {
      if (!IsTemporalInstant(e3))
        throw new TypeError("bad return from getPossibleInstantsFor");
      te.call(n2, e3);
    }
    return n2;
  }
  function ISOYearString(e2) {
    let t2;
    if (e2 < 0 || e2 > 9999) {
      t2 = (e2 < 0 ? "-" : "+") + `000000${ae(e2)}`.slice(-6);
    } else
      t2 = `0000${e2}`.slice(-4);
    return t2;
  }
  function ISODateTimePartString(e2) {
    return `00${e2}`.slice(-2);
  }
  function FormatSecondsStringPart(e2, t2, r2, o2, n2) {
    if ("minute" === n2)
      return "";
    const a2 = `:${ISODateTimePartString(e2)}`;
    let i2, s2 = 1e6 * t2 + 1e3 * r2 + o2;
    if ("auto" === n2) {
      if (0 === s2)
        return a2;
      for (i2 = `${s2}`.padStart(9, "0"); "0" === i2[i2.length - 1]; )
        i2 = i2.slice(0, -1);
    } else {
      if (0 === n2)
        return a2;
      i2 = `${s2}`.padStart(9, "0").slice(0, n2);
    }
    return `${a2}.${i2}`;
  }
  function TemporalInstantToString(e2, t2, r2) {
    let o2 = t2;
    void 0 === o2 && (o2 = "UTC");
    const n2 = GetPlainDateTimeFor(o2, e2, "iso8601"), a2 = ISOYearString(GetSlot(n2, i)), p2 = ISODateTimePartString(GetSlot(n2, s)), f2 = ISODateTimePartString(GetSlot(n2, l)), y2 = ISODateTimePartString(GetSlot(n2, d)), I2 = ISODateTimePartString(GetSlot(n2, m)), S2 = FormatSecondsStringPart(GetSlot(n2, c), GetSlot(n2, h), GetSlot(n2, u), GetSlot(n2, T), r2);
    let g2 = "Z";
    if (void 0 !== t2) {
      g2 = FormatISOTimeZoneOffsetString(GetOffsetNanosecondsFor(o2, e2));
    }
    return `${a2}-${p2}-${f2}T${y2}:${I2}${S2}${g2}`;
  }
  function TemporalDurationToString(t2, r2 = "auto", o2) {
    function formatNumber(t3) {
      return t3 <= ue ? t3.toString(10) : import_jsbi.default.BigInt(t3).toString(10);
    }
    const n2 = GetSlot(t2, w), a2 = GetSlot(t2, D), i2 = GetSlot(t2, G), s2 = GetSlot(t2, v), l2 = GetSlot(t2, C), d2 = GetSlot(t2, O);
    let m2 = GetSlot(t2, b), c2 = GetSlot(t2, E), h2 = GetSlot(t2, M), u2 = GetSlot(t2, R);
    const T2 = DurationSign(n2, a2, i2, s2, l2, d2, m2, c2, h2, u2);
    if (o2) {
      const { unit: e2, increment: t3, roundingMode: r3 } = o2;
      ({ seconds: m2, milliseconds: c2, microseconds: h2, nanoseconds: u2 } = RoundDuration(0, 0, 0, 0, 0, 0, m2, c2, h2, u2, t3, e2, r3));
    }
    const p2 = [];
    n2 && p2.push(`${formatNumber(ae(n2))}Y`), a2 && p2.push(`${formatNumber(ae(a2))}M`), i2 && p2.push(`${formatNumber(ae(i2))}W`), s2 && p2.push(`${formatNumber(ae(s2))}D`);
    const f2 = [];
    l2 && f2.push(`${formatNumber(ae(l2))}H`), d2 && f2.push(`${formatNumber(ae(d2))}M`);
    const y2 = [];
    let I2, S2, g2, F2, Y2 = TotalDurationNanoseconds(0, 0, 0, m2, c2, h2, u2, 0);
    ({ quotient: Y2, remainder: I2 } = divmod(Y2, De)), { quotient: Y2, remainder: S2 } = divmod(Y2, De), { quotient: F2, remainder: g2 } = divmod(Y2, De);
    const P2 = 1e6 * ae(import_jsbi.default.toNumber(g2)) + 1e3 * ae(import_jsbi.default.toNumber(S2)) + ae(import_jsbi.default.toNumber(I2));
    let Z2;
    if ("auto" === r2) {
      if (0 !== P2)
        for (Z2 = `${P2}`.padStart(9, "0"); "0" === Z2[Z2.length - 1]; )
          Z2 = Z2.slice(0, -1);
    } else
      0 !== r2 && (Z2 = `${P2}`.padStart(9, "0").slice(0, r2));
    return Z2 && y2.unshift(".", Z2), import_jsbi.default.equal(F2, Ie) && !y2.length && "auto" === r2 || y2.unshift(abs(F2).toString()), y2.length && f2.push(`${y2.join("")}S`), f2.length && f2.unshift("T"), p2.length || f2.length ? `${T2 < 0 ? "-" : ""}P${p2.join("")}${f2.join("")}` : "PT0S";
  }
  function TemporalDateToString(e2, t2 = "auto") {
    return `${ISOYearString(GetSlot(e2, i))}-${ISODateTimePartString(GetSlot(e2, s))}-${ISODateTimePartString(GetSlot(e2, l))}${MaybeFormatCalendarAnnotation(GetSlot(e2, p), t2)}`;
  }
  function TemporalDateTimeToString(e2, t2, r2 = "auto", o2) {
    let n2 = GetSlot(e2, i), a2 = GetSlot(e2, s), f2 = GetSlot(e2, l), y2 = GetSlot(e2, d), I2 = GetSlot(e2, m), S2 = GetSlot(e2, c), g2 = GetSlot(e2, h), w2 = GetSlot(e2, u), D2 = GetSlot(e2, T);
    if (o2) {
      const { unit: e3, increment: t3, roundingMode: r3 } = o2;
      ({ year: n2, month: a2, day: f2, hour: y2, minute: I2, second: S2, millisecond: g2, microsecond: w2, nanosecond: D2 } = RoundISODateTime(n2, a2, f2, y2, I2, S2, g2, w2, D2, t3, e3, r3));
    }
    return `${ISOYearString(n2)}-${ISODateTimePartString(a2)}-${ISODateTimePartString(f2)}T${ISODateTimePartString(y2)}:${ISODateTimePartString(I2)}${FormatSecondsStringPart(S2, g2, w2, D2, t2)}${MaybeFormatCalendarAnnotation(GetSlot(e2, p), r2)}`;
  }
  function TemporalMonthDayToString(e2, t2 = "auto") {
    let r2 = `${ISODateTimePartString(GetSlot(e2, s))}-${ISODateTimePartString(GetSlot(e2, l))}`;
    const o2 = ToTemporalCalendarIdentifier(GetSlot(e2, p));
    if ("always" === t2 || "critical" === t2 || "iso8601" !== o2) {
      r2 = `${ISOYearString(GetSlot(e2, i))}-${r2}`;
    }
    const n2 = FormatCalendarAnnotation(o2, t2);
    return n2 && (r2 += n2), r2;
  }
  function TemporalYearMonthToString(e2, t2 = "auto") {
    let r2 = `${ISOYearString(GetSlot(e2, i))}-${ISODateTimePartString(GetSlot(e2, s))}`;
    const o2 = ToTemporalCalendarIdentifier(GetSlot(e2, p));
    if ("always" === t2 || "critical" === t2 || "iso8601" !== o2) {
      r2 += `-${ISODateTimePartString(GetSlot(e2, l))}`;
    }
    const n2 = FormatCalendarAnnotation(o2, t2);
    return n2 && (r2 += n2), r2;
  }
  function TemporalZonedDateTimeToString(e2, t2, r2 = "auto", o2 = "auto", a2 = "auto", f2) {
    let y2 = GetSlot(e2, S);
    if (f2) {
      const { unit: t3, increment: r3, roundingMode: o3 } = f2, a3 = RoundInstant(GetSlot(e2, n), r3, t3, o3);
      y2 = new (GetIntrinsic("%Temporal.Instant%"))(a3);
    }
    const I2 = GetSlot(e2, g), w2 = GetPlainDateTimeFor(I2, y2, "iso8601");
    let D2 = `${ISOYearString(GetSlot(w2, i))}-${ISODateTimePartString(GetSlot(w2, s))}-${ISODateTimePartString(GetSlot(w2, l))}T${ISODateTimePartString(GetSlot(w2, d))}:${ISODateTimePartString(GetSlot(w2, m))}${FormatSecondsStringPart(GetSlot(w2, c), GetSlot(w2, h), GetSlot(w2, u), GetSlot(w2, T), t2)}`;
    if ("never" !== a2) {
      D2 += FormatISOTimeZoneOffsetString(GetOffsetNanosecondsFor(I2, y2));
    }
    if ("never" !== o2) {
      D2 += `[${"critical" === o2 ? "!" : ""}${ToTemporalTimeZoneIdentifier(I2)}]`;
    }
    return D2 += MaybeFormatCalendarAnnotation(GetSlot(e2, p), r2), D2;
  }
  function IsTimeZoneOffsetString(e2) {
    return ze.test(he(e2));
  }
  function ParseTimeZoneOffsetString(e2) {
    const t2 = ze.exec(he(e2));
    if (!t2)
      throw new RangeError(`invalid time zone offset: ${e2}`);
    return ("-" === t2[1] || "\u2212" === t2[1] ? -1 : 1) * (1e9 * (60 * (60 * +t2[2] + +(t2[3] || 0)) + +(t2[4] || 0)) + +((t2[5] || 0) + "000000000").slice(0, 9));
  }
  function GetCanonicalTimeZoneIdentifier(e2) {
    if (IsTimeZoneOffsetString(e2)) {
      return FormatTimeZoneOffsetString(ParseTimeZoneOffsetString(e2));
    }
    return getIntlDateTimeFormatEnUsForTimeZone(he(e2)).resolvedOptions().timeZone;
  }
  function GetNamedTimeZoneOffsetNanoseconds(t2, r2) {
    const { year: o2, month: n2, day: a2, hour: i2, minute: s2, second: l2, millisecond: d2, microsecond: m2, nanosecond: c2 } = GetNamedTimeZoneDateTimeParts(t2, r2), h2 = o2 % 400, u2 = (o2 - h2) / 400, T2 = import_jsbi.default.multiply(import_jsbi.default.BigInt(146097), Ee), p2 = GetUTCEpochNanoseconds(h2, n2, a2, i2, s2, l2, d2, m2, c2), f2 = import_jsbi.default.add(p2, import_jsbi.default.multiply(T2, import_jsbi.default.BigInt(u2)));
    return import_jsbi.default.toNumber(import_jsbi.default.subtract(f2, r2));
  }
  function FormatTimeZoneOffsetString(e2) {
    const t2 = e2 < 0 ? "-" : "+", r2 = ae(e2), o2 = r2 % 1e9, n2 = ie(r2 / 1e9) % 60, a2 = ie(r2 / 6e10) % 60, i2 = ISODateTimePartString(ie(r2 / 36e11)), s2 = ISODateTimePartString(a2), l2 = ISODateTimePartString(n2);
    let d2 = "";
    if (o2) {
      let e3 = `${o2}`.padStart(9, "0");
      for (; "0" === e3[e3.length - 1]; )
        e3 = e3.slice(0, -1);
      d2 = `:${l2}.${e3}`;
    } else
      n2 && (d2 = `:${l2}`);
    return `${t2}${i2}:${s2}${d2}`;
  }
  function FormatISOTimeZoneOffsetString(t2) {
    let r2 = import_jsbi.default.toNumber(RoundNumberToIncrement(import_jsbi.default.BigInt(t2), be, "halfExpand"));
    const o2 = r2 < 0 ? "-" : "+";
    r2 = ae(r2);
    const n2 = r2 / 6e10 % 60;
    return `${o2}${ISODateTimePartString(ie(r2 / 36e11))}:${ISODateTimePartString(n2)}`;
  }
  function GetUTCEpochNanoseconds(t2, r2, o2, n2, a2, i2, s2, l2, d2) {
    const m2 = /* @__PURE__ */ new Date();
    m2.setUTCHours(n2, a2, i2, s2), m2.setUTCFullYear(t2, r2 - 1, o2);
    const c2 = m2.getTime();
    if (de(c2))
      return null;
    let h2 = import_jsbi.default.multiply(import_jsbi.default.BigInt(c2), Ge);
    return h2 = import_jsbi.default.add(h2, import_jsbi.default.multiply(import_jsbi.default.BigInt(l2), De)), h2 = import_jsbi.default.add(h2, import_jsbi.default.BigInt(d2)), import_jsbi.default.lessThan(h2, Me) || import_jsbi.default.greaterThan(h2, Re) ? null : h2;
  }
  function GetISOPartsFromEpoch(t2) {
    const { quotient: r2, remainder: o2 } = divmod(t2, Ge);
    let n2 = import_jsbi.default.toNumber(r2), a2 = import_jsbi.default.toNumber(o2);
    a2 < 0 && (a2 += 1e6, n2 -= 1);
    const i2 = ie(a2 / 1e3) % 1e3, s2 = a2 % 1e3, l2 = new Date(n2);
    return { epochMilliseconds: n2, year: l2.getUTCFullYear(), month: l2.getUTCMonth() + 1, day: l2.getUTCDate(), hour: l2.getUTCHours(), minute: l2.getUTCMinutes(), second: l2.getUTCSeconds(), millisecond: l2.getUTCMilliseconds(), microsecond: i2, nanosecond: s2 };
  }
  function GetNamedTimeZoneDateTimeParts(e2, t2) {
    const { epochMilliseconds: r2, millisecond: o2, microsecond: n2, nanosecond: a2 } = GetISOPartsFromEpoch(t2), { year: i2, month: s2, day: l2, hour: d2, minute: m2, second: c2 } = function GetFormatterParts(e3, t3) {
      const r3 = getIntlDateTimeFormatEnUsForTimeZone(e3).format(new Date(t3));
      return function parseFromEnUsFormat(e4) {
        const t4 = e4.split(/[^\w]+/);
        if (7 !== t4.length)
          throw new RangeError(`expected 7 parts in "${e4}`);
        const r4 = +t4[0], o3 = +t4[1];
        let n3 = +t4[2];
        const a3 = t4[3].toUpperCase();
        if ("B" === a3 || "BC" === a3)
          n3 = 1 - n3;
        else if ("A" !== a3 && "AD" !== a3)
          throw new RangeError(`Unknown era ${a3} in "${e4}`);
        let i3 = +t4[4];
        24 === i3 && (i3 = 0);
        const s3 = +t4[5], l3 = +t4[6];
        if (!(me(n3) && me(r4) && me(o3) && me(i3) && me(s3) && me(l3)))
          throw new RangeError(`Invalid number in "${e4}`);
        return { year: n3, month: r4, day: o3, hour: i3, minute: s3, second: l3 };
      }(r3);
    }(e2, r2);
    return BalanceISODateTime(i2, s2, l2, d2, m2, c2, o2, n2, a2);
  }
  function maxJSBI(t2, r2) {
    return import_jsbi.default.lessThan(t2, r2) ? r2 : t2;
  }
  function afterLatestPossibleTzdbRuleChange() {
    return import_jsbi.default.add(Ve(), Ze);
  }
  function GetNamedTimeZoneNextTransition(t2, r2) {
    if (import_jsbi.default.lessThan(r2, Pe))
      return GetNamedTimeZoneNextTransition(t2, Pe);
    const o2 = import_jsbi.default.add(r2, Be), n2 = maxJSBI(afterLatestPossibleTzdbRuleChange(), o2);
    let a2 = maxJSBI(Pe, r2);
    const i2 = GetNamedTimeZoneOffsetNanoseconds(t2, a2);
    let s2 = a2, l2 = i2;
    for (; i2 === l2 && import_jsbi.default.lessThan(import_jsbi.default.BigInt(a2), n2); ) {
      if (s2 = import_jsbi.default.add(a2, Ne), import_jsbi.default.greaterThan(s2, Re))
        return null;
      l2 = GetNamedTimeZoneOffsetNanoseconds(t2, s2), i2 === l2 && (a2 = s2);
    }
    if (i2 === l2)
      return null;
    return bisect((e2) => GetNamedTimeZoneOffsetNanoseconds(t2, e2), a2, s2, i2, l2);
  }
  function GetNamedTimeZonePreviousTransition(t2, r2) {
    const o2 = afterLatestPossibleTzdbRuleChange(), a2 = import_jsbi.default.greaterThan(r2, o2), i2 = a2 ? import_jsbi.default.subtract(r2, Be) : Pe;
    if ("Africa/Casablanca" === t2 || "Africa/El_Aaiun" === t2) {
      const o3 = GetSlot(ToTemporalInstant("2088-01-01T00Z"), n);
      if (import_jsbi.default.lessThan(o3, r2))
        return GetNamedTimeZonePreviousTransition(t2, o3);
    }
    let s2 = import_jsbi.default.subtract(r2, Se);
    if (import_jsbi.default.lessThan(s2, Pe))
      return null;
    const l2 = GetNamedTimeZoneOffsetNanoseconds(t2, s2);
    let d2 = s2, m2 = l2;
    for (; l2 === m2 && import_jsbi.default.greaterThan(s2, i2); ) {
      if (d2 = import_jsbi.default.subtract(s2, Ne), import_jsbi.default.lessThan(d2, Pe))
        return null;
      m2 = GetNamedTimeZoneOffsetNanoseconds(t2, d2), l2 === m2 && (s2 = d2);
    }
    if (l2 === m2) {
      if (a2) {
        const r3 = import_jsbi.default.subtract(o2, Ee);
        return GetNamedTimeZonePreviousTransition(t2, r3);
      }
      return null;
    }
    return bisect((e2) => GetNamedTimeZoneOffsetNanoseconds(t2, e2), d2, s2, m2, l2);
  }
  function LeapYear(e2) {
    if (void 0 === e2)
      return false;
    return e2 % 4 == 0 && (!(e2 % 100 == 0) || e2 % 400 == 0);
  }
  function ISODaysInMonth(e2, t2) {
    return { standard: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], leapyear: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] }[LeapYear(e2) ? "leapyear" : "standard"][t2 - 1];
  }
  function DayOfWeek(e2, t2, r2) {
    const o2 = t2 + (t2 < 3 ? 10 : -2), n2 = e2 - (t2 < 3 ? 1 : 0), a2 = ie(n2 / 100), i2 = n2 - 100 * a2, s2 = (r2 + ie(2.6 * o2 - 0.2) + (i2 + ie(i2 / 4)) + (ie(a2 / 4) - 2 * a2)) % 7;
    return s2 + (s2 <= 0 ? 7 : 0);
  }
  function DayOfYear(e2, t2, r2) {
    let o2 = r2;
    for (let r3 = t2 - 1; r3 > 0; r3--)
      o2 += ISODaysInMonth(e2, r3);
    return o2;
  }
  function WeekOfYear(e2, t2, r2) {
    const o2 = DayOfYear(e2, t2, r2), n2 = DayOfWeek(e2, t2, r2) || 7, a2 = DayOfWeek(e2, 1, 1), i2 = ie((o2 - n2 + 10) / 7);
    return i2 < 1 ? 5 === a2 || 6 === a2 && LeapYear(e2 - 1) ? { week: 53, year: e2 - 1 } : { week: 52, year: e2 - 1 } : 53 === i2 && (LeapYear(e2) ? 366 : 365) - o2 < 4 - n2 ? { week: 1, year: e2 + 1 } : { week: i2, year: e2 };
  }
  function DurationSign(e2, t2, r2, o2, n2, a2, i2, s2, l2, d2) {
    for (const m2 of [e2, t2, r2, o2, n2, a2, i2, s2, l2, d2])
      if (0 !== m2)
        return m2 < 0 ? -1 : 1;
    return 0;
  }
  function BalanceISOYearMonth(e2, t2) {
    let r2 = e2, o2 = t2;
    if (!me(r2) || !me(o2))
      throw new RangeError("infinity is out of range");
    return o2 -= 1, r2 += ie(o2 / 12), o2 %= 12, o2 < 0 && (o2 += 12), o2 += 1, { year: r2, month: o2 };
  }
  function BalanceISODate(e2, t2, r2) {
    let o2 = e2, n2 = t2, a2 = r2;
    if (!me(a2))
      throw new RangeError("infinity is out of range");
    ({ year: o2, month: n2 } = BalanceISOYearMonth(o2, n2));
    const i2 = 146097;
    if (ae(a2) > i2) {
      const e3 = le(a2 / i2);
      o2 += 400 * e3, a2 -= e3 * i2;
    }
    let s2 = 0, l2 = n2 > 2 ? o2 : o2 - 1;
    for (; s2 = LeapYear(l2) ? 366 : 365, a2 < -s2; )
      o2 -= 1, l2 -= 1, a2 += s2;
    for (l2 += 1; s2 = LeapYear(l2) ? 366 : 365, a2 > s2; )
      o2 += 1, l2 += 1, a2 -= s2;
    for (; a2 < 1; )
      ({ year: o2, month: n2 } = BalanceISOYearMonth(o2, n2 - 1)), a2 += ISODaysInMonth(o2, n2);
    for (; a2 > ISODaysInMonth(o2, n2); )
      a2 -= ISODaysInMonth(o2, n2), { year: o2, month: n2 } = BalanceISOYearMonth(o2, n2 + 1);
    return { year: o2, month: n2, day: a2 };
  }
  function BalanceISODateTime(e2, t2, r2, o2, n2, a2, i2, s2, l2) {
    const { deltaDays: d2, hour: m2, minute: c2, second: h2, millisecond: u2, microsecond: T2, nanosecond: p2 } = BalanceTime(o2, n2, a2, i2, s2, l2), { year: f2, month: y2, day: I2 } = BalanceISODate(e2, t2, r2 + d2);
    return { year: f2, month: y2, day: I2, hour: m2, minute: c2, second: h2, millisecond: u2, microsecond: T2, nanosecond: p2 };
  }
  function BalanceTime(t2, r2, o2, n2, a2, i2) {
    let s2, l2 = import_jsbi.default.BigInt(t2), d2 = import_jsbi.default.BigInt(r2), m2 = import_jsbi.default.BigInt(o2), c2 = import_jsbi.default.BigInt(n2), h2 = import_jsbi.default.BigInt(a2), u2 = import_jsbi.default.BigInt(i2);
    return { quotient: s2, remainder: u2 } = NonNegativeBigIntDivmod(u2, De), h2 = import_jsbi.default.add(h2, s2), { quotient: s2, remainder: h2 } = NonNegativeBigIntDivmod(h2, De), c2 = import_jsbi.default.add(c2, s2), { quotient: s2, remainder: c2 } = NonNegativeBigIntDivmod(c2, De), m2 = import_jsbi.default.add(m2, s2), { quotient: s2, remainder: m2 } = NonNegativeBigIntDivmod(m2, ge), d2 = import_jsbi.default.add(d2, s2), { quotient: s2, remainder: d2 } = NonNegativeBigIntDivmod(d2, ge), l2 = import_jsbi.default.add(l2, s2), { quotient: s2, remainder: l2 } = NonNegativeBigIntDivmod(l2, we), { deltaDays: import_jsbi.default.toNumber(s2), hour: import_jsbi.default.toNumber(l2), minute: import_jsbi.default.toNumber(d2), second: import_jsbi.default.toNumber(m2), millisecond: import_jsbi.default.toNumber(c2), microsecond: import_jsbi.default.toNumber(h2), nanosecond: import_jsbi.default.toNumber(u2) };
  }
  function TotalDurationNanoseconds(t2, r2, o2, n2, a2, i2, s2, l2) {
    const d2 = import_jsbi.default.BigInt(t2);
    let m2 = import_jsbi.default.BigInt(s2);
    0 !== t2 && (m2 = import_jsbi.default.subtract(import_jsbi.default.BigInt(s2), import_jsbi.default.BigInt(l2)));
    const c2 = import_jsbi.default.add(import_jsbi.default.BigInt(r2), import_jsbi.default.multiply(d2, import_jsbi.default.BigInt(24))), h2 = import_jsbi.default.add(import_jsbi.default.BigInt(o2), import_jsbi.default.multiply(c2, ge)), u2 = import_jsbi.default.add(import_jsbi.default.BigInt(n2), import_jsbi.default.multiply(h2, ge)), T2 = import_jsbi.default.add(import_jsbi.default.BigInt(a2), import_jsbi.default.multiply(u2, De)), p2 = import_jsbi.default.add(import_jsbi.default.BigInt(i2), import_jsbi.default.multiply(T2, De));
    return import_jsbi.default.add(import_jsbi.default.BigInt(m2), import_jsbi.default.multiply(p2, De));
  }
  function NanosecondsToDays(t2, r2) {
    const o2 = GetIntrinsic("%Temporal.Instant%"), a2 = se(import_jsbi.default.toNumber(t2));
    let f2 = import_jsbi.default.BigInt(t2), y2 = 864e11;
    if (0 === a2)
      return { days: 0, nanoseconds: Ie, dayLengthNs: y2 };
    if (!IsTemporalZonedDateTime(r2)) {
      let t3;
      return { quotient: t3, remainder: f2 } = divmod(f2, import_jsbi.default.BigInt(y2)), { days: import_jsbi.default.toNumber(t3), nanoseconds: f2, dayLengthNs: y2 };
    }
    const I2 = GetSlot(r2, n), w2 = GetSlot(r2, S), D2 = import_jsbi.default.add(I2, f2), G2 = new o2(D2), v2 = GetSlot(r2, g), C2 = GetSlot(r2, p), O2 = GetPlainDateTimeFor(v2, w2, C2), b2 = GetPlainDateTimeFor(v2, G2, C2);
    let { days: E2 } = DifferenceISODateTime(GetSlot(O2, i), GetSlot(O2, s), GetSlot(O2, l), GetSlot(O2, d), GetSlot(O2, m), GetSlot(O2, c), GetSlot(O2, h), GetSlot(O2, u), GetSlot(O2, T), GetSlot(b2, i), GetSlot(b2, s), GetSlot(b2, l), GetSlot(b2, d), GetSlot(b2, m), GetSlot(b2, c), GetSlot(b2, h), GetSlot(b2, u), GetSlot(b2, T), C2, "day", Te(null)), M2 = AddZonedDateTime(w2, v2, C2, 0, 0, 0, E2, 0, 0, 0, 0, 0, 0), R2 = import_jsbi.default.BigInt(E2);
    if (1 === a2)
      for (; import_jsbi.default.greaterThan(R2, Ie) && import_jsbi.default.greaterThan(M2, D2); )
        R2 = import_jsbi.default.subtract(R2, Se), M2 = AddZonedDateTime(w2, v2, C2, 0, 0, 0, import_jsbi.default.toNumber(R2), 0, 0, 0, 0, 0, 0);
    f2 = import_jsbi.default.subtract(D2, M2);
    let F2 = false, Y2 = new o2(M2);
    do {
      const t3 = AddZonedDateTime(Y2, v2, C2, 0, 0, 0, a2, 0, 0, 0, 0, 0, 0), r3 = GetSlot(Y2, n);
      y2 = import_jsbi.default.toNumber(import_jsbi.default.subtract(t3, r3)), F2 = import_jsbi.default.greaterThanOrEqual(import_jsbi.default.multiply(import_jsbi.default.subtract(f2, import_jsbi.default.BigInt(y2)), import_jsbi.default.BigInt(a2)), Ie), F2 && (f2 = import_jsbi.default.subtract(f2, import_jsbi.default.BigInt(y2)), Y2 = new o2(t3), R2 = import_jsbi.default.add(R2, import_jsbi.default.BigInt(a2)));
    } while (F2);
    if (!isZero(R2) && signJSBI(R2) !== a2)
      throw new RangeError("Time zone or calendar converted nanoseconds into a number of days with the opposite sign");
    if (!isZero(f2) && signJSBI(f2) !== a2) {
      if (isNegativeJSBI(f2) && 1 === a2)
        throw new Error("assert not reached");
      throw new RangeError("Time zone or calendar ended up with a remainder of nanoseconds with the opposite sign");
    }
    if (import_jsbi.default.greaterThanOrEqual(abs(f2), abs(import_jsbi.default.BigInt(y2))))
      throw new Error("assert not reached");
    return { days: import_jsbi.default.toNumber(R2), nanoseconds: f2, dayLengthNs: ae(y2) };
  }
  function BalanceDuration(e2, t2, r2, o2, n2, a2, i2, s2, l2) {
    let d2 = BalancePossiblyInfiniteDuration(e2, t2, r2, o2, n2, a2, i2, s2, l2);
    if ("positive overflow" === d2 || "negative overflow" === d2)
      throw new RangeError("Duration out of range");
    return d2;
  }
  function BalancePossiblyInfiniteDuration(t2, r2, o2, a2, i2, s2, l2, d2, m2) {
    let c2, h2, u2, T2, f2, y2, I2 = t2;
    if (IsTemporalZonedDateTime(m2)) {
      const t3 = AddZonedDateTime(GetSlot(m2, S), GetSlot(m2, g), GetSlot(m2, p), 0, 0, 0, I2, r2, o2, a2, i2, s2, l2), d3 = GetSlot(m2, n);
      c2 = import_jsbi.default.subtract(t3, d3);
    } else
      c2 = TotalDurationNanoseconds(I2, r2, o2, a2, i2, s2, l2, 0);
    "year" === d2 || "month" === d2 || "week" === d2 || "day" === d2 ? { days: I2, nanoseconds: c2 } = NanosecondsToDays(c2, m2) : I2 = 0;
    const w2 = import_jsbi.default.lessThan(c2, Ie) ? -1 : 1;
    switch (c2 = abs(c2), h2 = u2 = T2 = f2 = y2 = Ie, d2) {
      case "year":
      case "month":
      case "week":
      case "day":
      case "hour":
        ({ quotient: h2, remainder: c2 } = divmod(c2, De)), { quotient: u2, remainder: h2 } = divmod(h2, De), { quotient: T2, remainder: u2 } = divmod(u2, De), { quotient: f2, remainder: T2 } = divmod(T2, ge), { quotient: y2, remainder: f2 } = divmod(f2, ge);
        break;
      case "minute":
        ({ quotient: h2, remainder: c2 } = divmod(c2, De)), { quotient: u2, remainder: h2 } = divmod(h2, De), { quotient: T2, remainder: u2 } = divmod(u2, De), { quotient: f2, remainder: T2 } = divmod(T2, ge);
        break;
      case "second":
        ({ quotient: h2, remainder: c2 } = divmod(c2, De)), { quotient: u2, remainder: h2 } = divmod(h2, De), { quotient: T2, remainder: u2 } = divmod(u2, De);
        break;
      case "millisecond":
        ({ quotient: h2, remainder: c2 } = divmod(c2, De)), { quotient: u2, remainder: h2 } = divmod(h2, De);
        break;
      case "microsecond":
        ({ quotient: h2, remainder: c2 } = divmod(c2, De));
        break;
      case "nanosecond":
        break;
      default:
        throw new Error("assert not reached");
    }
    const D2 = import_jsbi.default.toNumber(y2) * w2, G2 = import_jsbi.default.toNumber(f2) * w2, v2 = import_jsbi.default.toNumber(T2) * w2, C2 = import_jsbi.default.toNumber(u2) * w2, O2 = import_jsbi.default.toNumber(h2) * w2, b2 = import_jsbi.default.toNumber(c2) * w2;
    for (const e2 of [I2, D2, G2, v2, C2, O2, b2])
      if (!me(e2))
        return 1 === w2 ? "positive overflow" : "negative overflow";
    return { days: I2, hours: D2, minutes: G2, seconds: v2, milliseconds: C2, microseconds: O2, nanoseconds: b2 };
  }
  function UnbalanceDurationRelative(t2, r2, o2, n2, a2, i2) {
    const s2 = GetIntrinsic("%Temporal.Duration%"), l2 = DurationSign(t2, r2, o2, n2, 0, 0, 0, 0, 0, 0);
    if (0 === l2)
      return { years: t2, months: r2, weeks: o2, days: n2 };
    const d2 = import_jsbi.default.BigInt(l2);
    let m2, c2, h2 = import_jsbi.default.BigInt(t2), u2 = import_jsbi.default.BigInt(r2), T2 = import_jsbi.default.BigInt(o2), f2 = import_jsbi.default.BigInt(n2);
    i2 && (c2 = ToTemporalDate(i2), m2 = GetSlot(c2, p));
    const y2 = new s2(l2), I2 = new s2(0, l2), S2 = new s2(0, 0, l2);
    switch (a2) {
      case "year":
        break;
      case "month":
        {
          if (!m2)
            throw new RangeError("a starting point is required for months balancing");
          let t3, r3;
          for ("string" != typeof m2 && (t3 = GetMethod(m2, "dateAdd"), r3 = GetMethod(m2, "dateUntil")); !isZero(h2); ) {
            const o3 = CalendarDateAdd(m2, c2, y2, void 0, t3), n3 = Te(null);
            n3.largestUnit = "month";
            const a3 = CalendarDateUntil(m2, c2, o3, n3, r3), i3 = import_jsbi.default.BigInt(GetSlot(a3, D));
            c2 = o3, u2 = import_jsbi.default.add(u2, i3), h2 = import_jsbi.default.subtract(h2, d2);
          }
        }
        break;
      case "week": {
        if (!m2)
          throw new RangeError("a starting point is required for weeks balancing");
        const t3 = "string" != typeof m2 ? GetMethod(m2, "dateAdd") : void 0;
        for (; !isZero(h2); ) {
          let r3;
          ({ relativeTo: c2, days: r3 } = MoveRelativeDate(m2, c2, y2, t3)), f2 = import_jsbi.default.add(f2, import_jsbi.default.BigInt(r3)), h2 = import_jsbi.default.subtract(h2, d2);
        }
        for (; !isZero(u2); ) {
          let r3;
          ({ relativeTo: c2, days: r3 } = MoveRelativeDate(m2, c2, I2, t3)), f2 = import_jsbi.default.add(f2, import_jsbi.default.BigInt(r3)), u2 = import_jsbi.default.subtract(u2, d2);
        }
        break;
      }
      default: {
        if (isZero(h2) && isZero(u2) && isZero(T2))
          break;
        if (!m2)
          throw new RangeError("a starting point is required for balancing calendar units");
        const t3 = "string" != typeof m2 ? GetMethod(m2, "dateAdd") : void 0;
        for (; !isZero(h2); ) {
          let r3;
          ({ relativeTo: c2, days: r3 } = MoveRelativeDate(m2, c2, y2, t3)), f2 = import_jsbi.default.add(f2, import_jsbi.default.BigInt(r3)), h2 = import_jsbi.default.subtract(h2, d2);
        }
        for (; !isZero(u2); ) {
          let r3;
          ({ relativeTo: c2, days: r3 } = MoveRelativeDate(m2, c2, I2, t3)), f2 = import_jsbi.default.add(f2, import_jsbi.default.BigInt(r3)), u2 = import_jsbi.default.subtract(u2, d2);
        }
        for (; !isZero(T2); ) {
          let r3;
          ({ relativeTo: c2, days: r3 } = MoveRelativeDate(m2, c2, S2, t3)), f2 = import_jsbi.default.add(f2, import_jsbi.default.BigInt(r3)), T2 = import_jsbi.default.subtract(T2, d2);
        }
        break;
      }
    }
    return { years: import_jsbi.default.toNumber(h2), months: import_jsbi.default.toNumber(u2), weeks: import_jsbi.default.toNumber(T2), days: import_jsbi.default.toNumber(f2) };
  }
  function CalculateOffsetShift(e2, t2, r2, o2, n2) {
    if (IsTemporalZonedDateTime(e2)) {
      const a2 = GetSlot(e2, S), i2 = GetSlot(e2, g), s2 = GetSlot(e2, p), l2 = GetOffsetNanosecondsFor(i2, a2), d2 = AddZonedDateTime(a2, i2, s2, t2, r2, o2, n2, 0, 0, 0, 0, 0, 0);
      return GetOffsetNanosecondsFor(i2, new (GetIntrinsic("%Temporal.Instant%"))(d2)) - l2;
    }
    return 0;
  }
  function CreateNegatedTemporalDuration(e2) {
    return new (GetIntrinsic("%Temporal.Duration%"))(-GetSlot(e2, w), -GetSlot(e2, D), -GetSlot(e2, G), -GetSlot(e2, v), -GetSlot(e2, C), -GetSlot(e2, O), -GetSlot(e2, b), -GetSlot(e2, E), -GetSlot(e2, M), -GetSlot(e2, R));
  }
  function ConstrainToRange(e2, t2, r2) {
    return oe(r2, ne(t2, e2));
  }
  function ConstrainISODate(e2, t2, r2) {
    const o2 = ConstrainToRange(t2, 1, 12);
    return { year: e2, month: o2, day: ConstrainToRange(r2, 1, ISODaysInMonth(e2, o2)) };
  }
  function RejectToRange(e2, t2, r2) {
    if (e2 < t2 || e2 > r2)
      throw new RangeError(`value out of range: ${t2} <= ${e2} <= ${r2}`);
  }
  function RejectISODate(e2, t2, r2) {
    RejectToRange(t2, 1, 12), RejectToRange(r2, 1, ISODaysInMonth(e2, t2));
  }
  function RejectDateRange(e2, t2, r2) {
    RejectDateTimeRange(e2, t2, r2, 12, 0, 0, 0, 0, 0);
  }
  function RejectTime(e2, t2, r2, o2, n2, a2) {
    RejectToRange(e2, 0, 23), RejectToRange(t2, 0, 59), RejectToRange(r2, 0, 59), RejectToRange(o2, 0, 999), RejectToRange(n2, 0, 999), RejectToRange(a2, 0, 999);
  }
  function RejectDateTime(e2, t2, r2, o2, n2, a2, i2, s2, l2) {
    RejectISODate(e2, t2, r2), RejectTime(o2, n2, a2, i2, s2, l2);
  }
  function RejectDateTimeRange(e2, t2, r2, o2, n2, a2, i2, s2, l2) {
    if (RejectToRange(e2, Fe, Ye), e2 === Fe && null == GetUTCEpochNanoseconds(e2, t2, r2 + 1, o2, n2, a2, i2, s2, l2 - 1) || e2 === Ye && null == GetUTCEpochNanoseconds(e2, t2, r2 - 1, o2, n2, a2, i2, s2, l2 + 1))
      throw new RangeError("DateTime outside of supported range");
  }
  function ValidateEpochNanoseconds(t2) {
    if (import_jsbi.default.lessThan(t2, Me) || import_jsbi.default.greaterThan(t2, Re))
      throw new RangeError("Instant outside of supported range");
  }
  function RejectDuration(e2, t2, r2, o2, n2, a2, i2, s2, l2, d2) {
    const m2 = DurationSign(e2, t2, r2, o2, n2, a2, i2, s2, l2, d2);
    for (const c2 of [e2, t2, r2, o2, n2, a2, i2, s2, l2, d2]) {
      if (!me(c2))
        throw new RangeError("infinite values not allowed as duration fields");
      const e3 = se(c2);
      if (0 !== e3 && e3 !== m2)
        throw new RangeError("mixed-sign values not allowed as duration fields");
    }
  }
  function DifferenceISODate(e2, t2, r2, o2, n2, a2, i2) {
    switch (i2) {
      case "year":
      case "month": {
        const s2 = -CompareISODate(e2, t2, r2, o2, n2, a2);
        if (0 === s2)
          return { years: 0, months: 0, weeks: 0, days: 0 };
        const l2 = { year: e2, month: t2, day: r2 }, d2 = { year: o2, month: n2, day: a2 };
        let m2 = d2.year - l2.year, c2 = AddISODate(e2, t2, r2, m2, 0, 0, 0, "constrain"), h2 = -CompareISODate(c2.year, c2.month, c2.day, o2, n2, a2);
        if (0 === h2)
          return "year" === i2 ? { years: m2, months: 0, weeks: 0, days: 0 } : { years: 0, months: 12 * m2, weeks: 0, days: 0 };
        let u2 = d2.month - l2.month;
        if (h2 !== s2 && (m2 -= s2, u2 += 12 * s2), c2 = AddISODate(e2, t2, r2, m2, u2, 0, 0, "constrain"), h2 = -CompareISODate(c2.year, c2.month, c2.day, o2, n2, a2), 0 === h2)
          return "year" === i2 ? { years: m2, months: u2, weeks: 0, days: 0 } : { years: 0, months: u2 + 12 * m2, weeks: 0, days: 0 };
        h2 !== s2 && (u2 -= s2, u2 === -s2 && (m2 -= s2, u2 = 11 * s2), c2 = AddISODate(e2, t2, r2, m2, u2, 0, 0, "constrain"));
        let T2 = 0;
        return T2 = c2.month === d2.month ? d2.day - c2.day : s2 < 0 ? -c2.day - (ISODaysInMonth(d2.year, d2.month) - d2.day) : d2.day + (ISODaysInMonth(c2.year, c2.month) - c2.day), "month" === i2 && (u2 += 12 * m2, m2 = 0), { years: m2, months: u2, weeks: 0, days: T2 };
      }
      case "week":
      case "day": {
        let s2, l2, d2;
        CompareISODate(e2, t2, r2, o2, n2, a2) < 0 ? (l2 = { year: e2, month: t2, day: r2 }, s2 = { year: o2, month: n2, day: a2 }, d2 = 1) : (l2 = { year: o2, month: n2, day: a2 }, s2 = { year: e2, month: t2, day: r2 }, d2 = -1);
        let m2 = DayOfYear(s2.year, s2.month, s2.day) - DayOfYear(l2.year, l2.month, l2.day);
        for (let e3 = l2.year; e3 < s2.year; ++e3)
          m2 += LeapYear(e3) ? 366 : 365;
        let c2 = 0;
        return "week" === i2 && (c2 = ie(m2 / 7), m2 %= 7), c2 *= d2, m2 *= d2, { years: 0, months: 0, weeks: c2, days: m2 };
      }
      default:
        throw new Error("assert not reached");
    }
  }
  function DifferenceTime(e2, t2, r2, o2, n2, a2, i2, s2, l2, d2, m2, c2) {
    let h2 = i2 - e2, u2 = s2 - t2, T2 = l2 - r2, p2 = d2 - o2, f2 = m2 - n2, y2 = c2 - a2;
    const I2 = DurationSign(0, 0, 0, 0, h2, u2, T2, p2, f2, y2);
    h2 *= I2, u2 *= I2, T2 *= I2, p2 *= I2, f2 *= I2, y2 *= I2;
    let S2 = 0;
    if ({ deltaDays: S2, hour: h2, minute: u2, second: T2, millisecond: p2, microsecond: f2, nanosecond: y2 } = BalanceTime(h2, u2, T2, p2, f2, y2), 0 != S2)
      throw new Error("assertion failure in DifferenceTime: _bt_.[[Days]] should be 0");
    return h2 *= I2, u2 *= I2, T2 *= I2, p2 *= I2, f2 *= I2, y2 *= I2, { hours: h2, minutes: u2, seconds: T2, milliseconds: p2, microseconds: f2, nanoseconds: y2 };
  }
  function DifferenceInstant(t2, r2, o2, n2, a2, i2) {
    const s2 = import_jsbi.default.subtract(r2, t2);
    let l2 = 0, d2 = 0, m2 = import_jsbi.default.toNumber(import_jsbi.default.remainder(s2, De)), c2 = import_jsbi.default.toNumber(import_jsbi.default.remainder(import_jsbi.default.divide(s2, De), De)), h2 = import_jsbi.default.toNumber(import_jsbi.default.remainder(import_jsbi.default.divide(s2, Ge), De)), u2 = import_jsbi.default.toNumber(import_jsbi.default.divide(s2, ve));
    return { hours: l2, minutes: d2, seconds: u2, milliseconds: h2, microseconds: c2, nanoseconds: m2 } = RoundDuration(0, 0, 0, 0, 0, 0, u2, h2, c2, m2, o2, n2, i2), BalanceDuration(0, l2, d2, u2, h2, c2, m2, a2);
  }
  function DifferenceISODateTime(e2, t2, r2, o2, n2, a2, i2, s2, l2, d2, m2, c2, h2, u2, T2, p2, f2, y2, I2, S2, g2) {
    let w2 = e2, D2 = t2, G2 = r2, { hours: v2, minutes: C2, seconds: O2, milliseconds: b2, microseconds: E2, nanoseconds: M2 } = DifferenceTime(o2, n2, a2, i2, s2, l2, h2, u2, T2, p2, f2, y2);
    const R2 = DurationSign(0, 0, 0, 0, v2, C2, O2, b2, E2, M2);
    CompareISODate(d2, m2, c2, w2, D2, G2) === -R2 && ({ year: w2, month: D2, day: G2 } = BalanceISODate(w2, D2, G2 - R2), { hours: v2, minutes: C2, seconds: O2, milliseconds: b2, microseconds: E2, nanoseconds: M2 } = BalanceDuration(-R2, v2, C2, O2, b2, E2, M2, S2));
    const F2 = CreateTemporalDate(w2, D2, G2, I2), Y2 = CreateTemporalDate(d2, m2, c2, I2), P2 = LargerOfTwoTemporalUnits("day", S2), Z2 = CopyOptions(g2);
    Z2.largestUnit = P2;
    let { years: B2, months: N2, weeks: j2, days: $2 } = CalendarDateUntil(I2, F2, Y2, Z2);
    return { days: $2, hours: v2, minutes: C2, seconds: O2, milliseconds: b2, microseconds: E2, nanoseconds: M2 } = BalanceDuration($2, v2, C2, O2, b2, E2, M2, S2), { years: B2, months: N2, weeks: j2, days: $2, hours: v2, minutes: C2, seconds: O2, milliseconds: b2, microseconds: E2, nanoseconds: M2 };
  }
  function DifferenceZonedDateTime(t2, r2, o2, n2, a2, p2) {
    const f2 = import_jsbi.default.subtract(r2, t2);
    if (import_jsbi.default.equal(f2, Ie))
      return { years: 0, months: 0, weeks: 0, days: 0, hours: 0, minutes: 0, seconds: 0, milliseconds: 0, microseconds: 0, nanoseconds: 0 };
    const y2 = GetIntrinsic("%Temporal.Instant%"), I2 = new y2(t2), S2 = new y2(r2), g2 = GetPlainDateTimeFor(o2, I2, n2), w2 = GetPlainDateTimeFor(o2, S2, n2);
    let { years: D2, months: G2, weeks: v2, days: C2 } = DifferenceISODateTime(GetSlot(g2, i), GetSlot(g2, s), GetSlot(g2, l), GetSlot(g2, d), GetSlot(g2, m), GetSlot(g2, c), GetSlot(g2, h), GetSlot(g2, u), GetSlot(g2, T), GetSlot(w2, i), GetSlot(w2, s), GetSlot(w2, l), GetSlot(w2, d), GetSlot(w2, m), GetSlot(w2, c), GetSlot(w2, h), GetSlot(w2, u), GetSlot(w2, T), n2, a2, p2);
    const O2 = AddZonedDateTime(I2, o2, n2, D2, G2, v2, 0, 0, 0, 0, 0, 0, 0);
    let b2 = import_jsbi.default.subtract(r2, O2);
    const E2 = CreateTemporalZonedDateTime(O2, o2, n2);
    ({ nanoseconds: b2, days: C2 } = NanosecondsToDays(b2, E2));
    const { hours: M2, minutes: R2, seconds: F2, milliseconds: Y2, microseconds: P2, nanoseconds: Z2 } = BalanceDuration(0, 0, 0, 0, 0, 0, import_jsbi.default.toNumber(b2), "hour");
    return { years: D2, months: G2, weeks: v2, days: C2, hours: M2, minutes: R2, seconds: F2, milliseconds: Y2, microseconds: P2, nanoseconds: Z2 };
  }
  function GetDifferenceSettings(e2, t2, r2, o2, n2, a2) {
    const i2 = Ue.reduce((e3, t3) => {
      const n3 = t3[0], a3 = t3[1], i3 = t3[2];
      return "datetime" !== r2 && i3 !== r2 || o2.includes(a3) || e3.push(a3, n3), e3;
    }, []);
    let s2 = GetTemporalUnit(t2, "largestUnit", r2, "auto");
    if (o2.includes(s2))
      throw new RangeError(`largestUnit must be one of ${i2.join(", ")}, not ${s2}`);
    const l2 = ToTemporalRoundingIncrement(t2);
    let d2 = ToTemporalRoundingMode(t2, "trunc");
    "since" === e2 && (d2 = function NegateTemporalRoundingMode(e3) {
      switch (e3) {
        case "ceil":
          return "floor";
        case "floor":
          return "ceil";
        case "halfCeil":
          return "halfFloor";
        case "halfFloor":
          return "halfCeil";
        default:
          return e3;
      }
    }(d2));
    const m2 = GetTemporalUnit(t2, "smallestUnit", r2, n2);
    if (o2.includes(m2))
      throw new RangeError(`smallestUnit must be one of ${i2.join(", ")}, not ${m2}`);
    const c2 = LargerOfTwoTemporalUnits(a2, m2);
    if ("auto" === s2 && (s2 = c2), LargerOfTwoTemporalUnits(s2, m2) !== s2)
      throw new RangeError(`largestUnit ${s2} cannot be smaller than smallestUnit ${m2}`);
    const h2 = { hour: 24, minute: 60, second: 60, millisecond: 1e3, microsecond: 1e3, nanosecond: 1e3 }[m2];
    return void 0 !== h2 && ValidateTemporalRoundingIncrement(l2, h2, false), { largestUnit: s2, roundingIncrement: l2, roundingMode: d2, smallestUnit: m2 };
  }
  function DifferenceTemporalInstant(e2, t2, r2, o2) {
    const a2 = "since" === e2 ? -1 : 1, i2 = ToTemporalInstant(r2), s2 = GetDifferenceSettings(e2, CopyOptions(o2), "time", [], "nanosecond", "second"), l2 = GetSlot(t2, n), d2 = GetSlot(i2, n);
    let { hours: m2, minutes: c2, seconds: h2, milliseconds: u2, microseconds: T2, nanoseconds: p2 } = DifferenceInstant(l2, d2, s2.roundingIncrement, s2.smallestUnit, s2.largestUnit, s2.roundingMode);
    return new (GetIntrinsic("%Temporal.Duration%"))(0, 0, 0, 0, a2 * m2, a2 * c2, a2 * h2, a2 * u2, a2 * T2, a2 * p2);
  }
  function DifferenceTemporalPlainDate(e2, t2, r2, o2) {
    const n2 = "since" === e2 ? -1 : 1, a2 = ToTemporalDate(r2), i2 = GetSlot(t2, p);
    ThrowIfCalendarsNotEqual(i2, GetSlot(a2, p), "compute difference between dates");
    const s2 = CopyOptions(o2), l2 = GetDifferenceSettings(e2, s2, "date", [], "day", "day");
    s2.largestUnit = l2.largestUnit;
    let { years: d2, months: m2, weeks: c2, days: h2 } = CalendarDateUntil(i2, t2, a2, s2);
    "day" === l2.smallestUnit && 1 === l2.roundingIncrement || ({ years: d2, months: m2, weeks: c2, days: h2 } = RoundDuration(d2, m2, c2, h2, 0, 0, 0, 0, 0, 0, l2.roundingIncrement, l2.smallestUnit, l2.roundingMode, t2));
    return new (GetIntrinsic("%Temporal.Duration%"))(n2 * d2, n2 * m2, n2 * c2, n2 * h2, 0, 0, 0, 0, 0, 0);
  }
  function DifferenceTemporalPlainDateTime(e2, t2, r2, o2) {
    const n2 = "since" === e2 ? -1 : 1, a2 = ToTemporalDateTime(r2), f2 = GetSlot(t2, p);
    ThrowIfCalendarsNotEqual(f2, GetSlot(a2, p), "compute difference between dates");
    const y2 = CopyOptions(o2), I2 = GetDifferenceSettings(e2, y2, "datetime", [], "nanosecond", "day");
    let { years: S2, months: g2, weeks: w2, days: D2, hours: G2, minutes: v2, seconds: C2, milliseconds: O2, microseconds: b2, nanoseconds: E2 } = DifferenceISODateTime(GetSlot(t2, i), GetSlot(t2, s), GetSlot(t2, l), GetSlot(t2, d), GetSlot(t2, m), GetSlot(t2, c), GetSlot(t2, h), GetSlot(t2, u), GetSlot(t2, T), GetSlot(a2, i), GetSlot(a2, s), GetSlot(a2, l), GetSlot(a2, d), GetSlot(a2, m), GetSlot(a2, c), GetSlot(a2, h), GetSlot(a2, u), GetSlot(a2, T), f2, I2.largestUnit, y2);
    const M2 = TemporalDateTimeToDate(t2);
    ({ years: S2, months: g2, weeks: w2, days: D2, hours: G2, minutes: v2, seconds: C2, milliseconds: O2, microseconds: b2, nanoseconds: E2 } = RoundDuration(S2, g2, w2, D2, G2, v2, C2, O2, b2, E2, I2.roundingIncrement, I2.smallestUnit, I2.roundingMode, M2)), { days: D2, hours: G2, minutes: v2, seconds: C2, milliseconds: O2, microseconds: b2, nanoseconds: E2 } = BalanceDuration(D2, G2, v2, C2, O2, b2, E2, I2.largestUnit);
    return new (GetIntrinsic("%Temporal.Duration%"))(n2 * S2, n2 * g2, n2 * w2, n2 * D2, n2 * G2, n2 * v2, n2 * C2, n2 * O2, n2 * b2, n2 * E2);
  }
  function DifferenceTemporalPlainTime(e2, t2, r2, o2) {
    const n2 = "since" === e2 ? -1 : 1, a2 = ToTemporalTime(r2), i2 = GetDifferenceSettings(e2, CopyOptions(o2), "time", [], "nanosecond", "hour");
    let { hours: s2, minutes: l2, seconds: p2, milliseconds: f2, microseconds: y2, nanoseconds: I2 } = DifferenceTime(GetSlot(t2, d), GetSlot(t2, m), GetSlot(t2, c), GetSlot(t2, h), GetSlot(t2, u), GetSlot(t2, T), GetSlot(a2, d), GetSlot(a2, m), GetSlot(a2, c), GetSlot(a2, h), GetSlot(a2, u), GetSlot(a2, T));
    ({ hours: s2, minutes: l2, seconds: p2, milliseconds: f2, microseconds: y2, nanoseconds: I2 } = RoundDuration(0, 0, 0, 0, s2, l2, p2, f2, y2, I2, i2.roundingIncrement, i2.smallestUnit, i2.roundingMode)), { hours: s2, minutes: l2, seconds: p2, milliseconds: f2, microseconds: y2, nanoseconds: I2 } = BalanceDuration(0, s2, l2, p2, f2, y2, I2, i2.largestUnit);
    return new (GetIntrinsic("%Temporal.Duration%"))(0, 0, 0, 0, n2 * s2, n2 * l2, n2 * p2, n2 * f2, n2 * y2, n2 * I2);
  }
  function DifferenceTemporalPlainYearMonth(e2, t2, r2, o2) {
    const n2 = "since" === e2 ? -1 : 1, a2 = ToTemporalYearMonth(r2), i2 = GetSlot(t2, p);
    ThrowIfCalendarsNotEqual(i2, GetSlot(a2, p), "compute difference between months");
    const s2 = CopyOptions(o2), l2 = GetDifferenceSettings(e2, s2, "date", ["week", "day"], "month", "year");
    s2.largestUnit = l2.largestUnit;
    const d2 = CalendarFields(i2, ["monthCode", "year"]), m2 = PrepareTemporalFields(t2, d2, []);
    m2.day = 1;
    const c2 = CalendarDateFromFields(i2, m2), h2 = PrepareTemporalFields(a2, d2, []);
    h2.day = 1;
    const u2 = CalendarDateFromFields(i2, h2);
    let { years: T2, months: f2 } = CalendarDateUntil(i2, c2, u2, s2);
    "month" === l2.smallestUnit && 1 === l2.roundingIncrement || ({ years: T2, months: f2 } = RoundDuration(T2, f2, 0, 0, 0, 0, 0, 0, 0, 0, l2.roundingIncrement, l2.smallestUnit, l2.roundingMode, c2));
    return new (GetIntrinsic("%Temporal.Duration%"))(n2 * T2, n2 * f2, 0, 0, 0, 0, 0, 0, 0, 0);
  }
  function DifferenceTemporalZonedDateTime(e2, t2, r2, o2) {
    const a2 = "since" === e2 ? -1 : 1, i2 = ToTemporalZonedDateTime(r2), s2 = GetSlot(t2, p);
    ThrowIfCalendarsNotEqual(s2, GetSlot(i2, p), "compute difference between dates");
    const l2 = CopyOptions(o2), d2 = GetDifferenceSettings(e2, l2, "datetime", [], "nanosecond", "hour");
    l2.largestUnit = d2.largestUnit;
    const m2 = GetSlot(t2, n), c2 = GetSlot(i2, n);
    let h2, u2, T2, f2, y2, I2, S2, w2, D2, G2;
    if ("year" !== d2.largestUnit && "month" !== d2.largestUnit && "week" !== d2.largestUnit && "day" !== d2.largestUnit)
      h2 = 0, u2 = 0, T2 = 0, f2 = 0, { hours: y2, minutes: I2, seconds: S2, milliseconds: w2, microseconds: D2, nanoseconds: G2 } = DifferenceInstant(m2, c2, d2.roundingIncrement, d2.smallestUnit, d2.largestUnit, d2.roundingMode);
    else {
      const e3 = GetSlot(t2, g);
      if (!TimeZoneEquals(e3, GetSlot(i2, g)))
        throw new RangeError("When calculating difference between time zones, largestUnit must be 'hours' or smaller because day lengths can vary between time zones due to DST or time zone offset changes.");
      ({ years: h2, months: u2, weeks: T2, days: f2, hours: y2, minutes: I2, seconds: S2, milliseconds: w2, microseconds: D2, nanoseconds: G2 } = DifferenceZonedDateTime(m2, c2, e3, s2, d2.largestUnit, l2)), { years: h2, months: u2, weeks: T2, days: f2, hours: y2, minutes: I2, seconds: S2, milliseconds: w2, microseconds: D2, nanoseconds: G2 } = RoundDuration(h2, u2, T2, f2, y2, I2, S2, w2, D2, G2, d2.roundingIncrement, d2.smallestUnit, d2.roundingMode, t2), { years: h2, months: u2, weeks: T2, days: f2, hours: y2, minutes: I2, seconds: S2, milliseconds: w2, microseconds: D2, nanoseconds: G2 } = AdjustRoundedDurationDays(h2, u2, T2, f2, y2, I2, S2, w2, D2, G2, d2.roundingIncrement, d2.smallestUnit, d2.roundingMode, t2);
    }
    return new (GetIntrinsic("%Temporal.Duration%"))(a2 * h2, a2 * u2, a2 * T2, a2 * f2, a2 * y2, a2 * I2, a2 * S2, a2 * w2, a2 * D2, a2 * G2);
  }
  function AddISODate(e2, t2, r2, o2, n2, a2, i2, s2) {
    let l2 = e2, d2 = t2, m2 = r2, c2 = a2, h2 = i2;
    return l2 += o2, d2 += n2, { year: l2, month: d2 } = BalanceISOYearMonth(l2, d2), { year: l2, month: d2, day: m2 } = RegulateISODate(l2, d2, m2, s2), h2 += 7 * c2, m2 += h2, { year: l2, month: d2, day: m2 } = BalanceISODate(l2, d2, m2), { year: l2, month: d2, day: m2 };
  }
  function AddTime(e2, t2, r2, o2, n2, a2, i2, s2, l2, d2, m2, c2) {
    let h2 = e2, u2 = t2, T2 = r2, p2 = o2, f2 = n2, y2 = a2;
    h2 += i2, u2 += s2, T2 += l2, p2 += d2, f2 += m2, y2 += c2;
    let I2 = 0;
    return { deltaDays: I2, hour: h2, minute: u2, second: T2, millisecond: p2, microsecond: f2, nanosecond: y2 } = BalanceTime(h2, u2, T2, p2, f2, y2), { deltaDays: I2, hour: h2, minute: u2, second: T2, millisecond: p2, microsecond: f2, nanosecond: y2 };
  }
  function AddDuration(t2, r2, o2, a2, i2, s2, l2, d2, m2, c2, h2, u2, T2, f2, y2, I2, w2, D2, G2, v2, C2) {
    const O2 = LargerOfTwoTemporalUnits(DefaultTemporalLargestUnit(t2, r2, o2, a2, i2, s2, l2, d2, m2, c2), DefaultTemporalLargestUnit(h2, u2, T2, f2, y2, I2, w2, D2, G2, v2));
    let b2, E2, M2, R2, F2, Y2, P2, Z2, B2, N2;
    if (C2)
      if (IsTemporalDate(C2)) {
        const n2 = GetIntrinsic("%Temporal.Duration%"), S2 = GetSlot(C2, p), g2 = new n2(t2, r2, o2, a2, 0, 0, 0, 0, 0, 0), j2 = new n2(h2, u2, T2, f2, 0, 0, 0, 0, 0, 0), $2 = "string" != typeof S2 ? GetMethod(S2, "dateAdd") : void 0, k2 = CalendarDateAdd(S2, C2, g2, void 0, $2), U2 = CalendarDateAdd(S2, k2, j2, void 0, $2), A2 = LargerOfTwoTemporalUnits("day", O2), L2 = Te(null);
        L2.largestUnit = A2, { years: b2, months: E2, weeks: M2, days: R2 } = CalendarDateUntil(S2, C2, U2, L2), { days: R2, hours: F2, minutes: Y2, seconds: P2, milliseconds: Z2, microseconds: B2, nanoseconds: N2 } = BalanceDuration(R2, import_jsbi.default.add(import_jsbi.default.BigInt(i2), import_jsbi.default.BigInt(y2)), import_jsbi.default.add(import_jsbi.default.BigInt(s2), import_jsbi.default.BigInt(I2)), import_jsbi.default.add(import_jsbi.default.BigInt(l2), import_jsbi.default.BigInt(w2)), import_jsbi.default.add(import_jsbi.default.BigInt(d2), import_jsbi.default.BigInt(D2)), import_jsbi.default.add(import_jsbi.default.BigInt(m2), import_jsbi.default.BigInt(G2)), import_jsbi.default.add(import_jsbi.default.BigInt(c2), import_jsbi.default.BigInt(v2)), O2);
      } else {
        const e2 = GetIntrinsic("%Temporal.Instant%"), j2 = GetSlot(C2, g), $2 = GetSlot(C2, p), k2 = AddZonedDateTime(GetSlot(C2, S), j2, $2, t2, r2, o2, a2, i2, s2, l2, d2, m2, c2), U2 = AddZonedDateTime(new e2(k2), j2, $2, h2, u2, T2, f2, y2, I2, w2, D2, G2, v2);
        "year" !== O2 && "month" !== O2 && "week" !== O2 && "day" !== O2 ? (b2 = 0, E2 = 0, M2 = 0, R2 = 0, { hours: F2, minutes: Y2, seconds: P2, milliseconds: Z2, microseconds: B2, nanoseconds: N2 } = DifferenceInstant(GetSlot(C2, n), U2, 1, "nanosecond", O2, "halfExpand")) : { years: b2, months: E2, weeks: M2, days: R2, hours: F2, minutes: Y2, seconds: P2, milliseconds: Z2, microseconds: B2, nanoseconds: N2 } = DifferenceZonedDateTime(GetSlot(C2, n), U2, j2, $2, O2, Te(null));
      }
    else {
      if ("year" === O2 || "month" === O2 || "week" === O2)
        throw new RangeError("relativeTo is required for years, months, or weeks arithmetic");
      b2 = E2 = M2 = 0, { days: R2, hours: F2, minutes: Y2, seconds: P2, milliseconds: Z2, microseconds: B2, nanoseconds: N2 } = BalanceDuration(a2 + f2, import_jsbi.default.add(import_jsbi.default.BigInt(i2), import_jsbi.default.BigInt(y2)), import_jsbi.default.add(import_jsbi.default.BigInt(s2), import_jsbi.default.BigInt(I2)), import_jsbi.default.add(import_jsbi.default.BigInt(l2), import_jsbi.default.BigInt(w2)), import_jsbi.default.add(import_jsbi.default.BigInt(d2), import_jsbi.default.BigInt(D2)), import_jsbi.default.add(import_jsbi.default.BigInt(m2), import_jsbi.default.BigInt(G2)), import_jsbi.default.add(import_jsbi.default.BigInt(c2), import_jsbi.default.BigInt(v2)), O2);
    }
    return RejectDuration(b2, E2, M2, R2, F2, Y2, P2, Z2, B2, N2), { years: b2, months: E2, weeks: M2, days: R2, hours: F2, minutes: Y2, seconds: P2, milliseconds: Z2, microseconds: B2, nanoseconds: N2 };
  }
  function AddInstant(t2, r2, o2, n2, a2, i2, s2) {
    let l2 = Ie;
    l2 = import_jsbi.default.add(l2, import_jsbi.default.BigInt(s2)), l2 = import_jsbi.default.add(l2, import_jsbi.default.multiply(import_jsbi.default.BigInt(i2), De)), l2 = import_jsbi.default.add(l2, import_jsbi.default.multiply(import_jsbi.default.BigInt(a2), Ge)), l2 = import_jsbi.default.add(l2, import_jsbi.default.multiply(import_jsbi.default.BigInt(n2), ve)), l2 = import_jsbi.default.add(l2, import_jsbi.default.multiply(import_jsbi.default.BigInt(o2), import_jsbi.default.BigInt(6e10))), l2 = import_jsbi.default.add(l2, import_jsbi.default.multiply(import_jsbi.default.BigInt(r2), import_jsbi.default.BigInt(36e11)));
    const d2 = import_jsbi.default.add(t2, l2);
    return ValidateEpochNanoseconds(d2), d2;
  }
  function AddDateTime(e2, t2, r2, o2, n2, a2, d2, m2, c2, h2, u2, T2, p2, f2, y2, I2, S2, g2, w2, D2, G2) {
    let v2 = f2, { deltaDays: C2, hour: O2, minute: b2, second: E2, millisecond: M2, microsecond: R2, nanosecond: F2 } = AddTime(o2, n2, a2, d2, m2, c2, y2, I2, S2, g2, w2, D2);
    v2 += C2;
    const Y2 = GetIntrinsic("%Temporal.Duration%"), P2 = CalendarDateAdd(h2, CreateTemporalDate(e2, t2, r2, h2), new Y2(u2, T2, p2, v2, 0, 0, 0, 0, 0, 0), G2);
    return { year: GetSlot(P2, i), month: GetSlot(P2, s), day: GetSlot(P2, l), hour: O2, minute: b2, second: E2, millisecond: M2, microsecond: R2, nanosecond: F2 };
  }
  function AddZonedDateTime(e2, t2, r2, o2, a2, p2, f2, y2, I2, S2, g2, w2, D2, G2) {
    const v2 = GetIntrinsic("%Temporal.Duration%");
    if (0 === DurationSign(o2, a2, p2, f2, 0, 0, 0, 0, 0, 0))
      return AddInstant(GetSlot(e2, n), y2, I2, S2, g2, w2, D2);
    const C2 = GetPlainDateTimeFor(t2, e2, r2), O2 = CalendarDateAdd(r2, CreateTemporalDate(GetSlot(C2, i), GetSlot(C2, s), GetSlot(C2, l), r2), new v2(o2, a2, p2, f2, 0, 0, 0, 0, 0, 0), G2), b2 = CreateTemporalDateTime(GetSlot(O2, i), GetSlot(O2, s), GetSlot(O2, l), GetSlot(C2, d), GetSlot(C2, m), GetSlot(C2, c), GetSlot(C2, h), GetSlot(C2, u), GetSlot(C2, T), r2);
    return AddInstant(GetSlot(GetInstantFor(t2, b2, "compatible"), n), y2, I2, S2, g2, w2, D2);
  }
  function AddDurationToOrSubtractDurationFromDuration(e2, t2, r2, o2) {
    const n2 = "subtract" === e2 ? -1 : 1;
    let { years: a2, months: i2, weeks: s2, days: l2, hours: d2, minutes: m2, seconds: c2, milliseconds: h2, microseconds: u2, nanoseconds: T2 } = ToTemporalDurationRecord(r2);
    const p2 = ToRelativeTemporalObject(GetOptionsObject(o2));
    ({ years: a2, months: i2, weeks: s2, days: l2, hours: d2, minutes: m2, seconds: c2, milliseconds: h2, microseconds: u2, nanoseconds: T2 } = AddDuration(GetSlot(t2, w), GetSlot(t2, D), GetSlot(t2, G), GetSlot(t2, v), GetSlot(t2, C), GetSlot(t2, O), GetSlot(t2, b), GetSlot(t2, E), GetSlot(t2, M), GetSlot(t2, R), n2 * a2, n2 * i2, n2 * s2, n2 * l2, n2 * d2, n2 * m2, n2 * c2, n2 * h2, n2 * u2, n2 * T2, p2));
    return new (GetIntrinsic("%Temporal.Duration%"))(a2, i2, s2, l2, d2, m2, c2, h2, u2, T2);
  }
  function AddDurationToOrSubtractDurationFromInstant(e2, t2, r2) {
    const o2 = "subtract" === e2 ? -1 : 1, { hours: a2, minutes: i2, seconds: s2, milliseconds: l2, microseconds: d2, nanoseconds: m2 } = function ToLimitedTemporalDuration(e3, t3) {
      let r3 = ToTemporalDurationRecord(e3);
      for (const e4 of t3)
        if (0 !== r3[e4])
          throw new RangeError(`Duration field ${e4} not supported by Temporal.Instant. Try Temporal.ZonedDateTime instead.`);
      return r3;
    }(r2, ["years", "months", "weeks", "days"]), c2 = AddInstant(GetSlot(t2, n), o2 * a2, o2 * i2, o2 * s2, o2 * l2, o2 * d2, o2 * m2);
    return new (GetIntrinsic("%Temporal.Instant%"))(c2);
  }
  function AddDurationToOrSubtractDurationFromPlainDateTime(e2, t2, r2, o2) {
    const n2 = "subtract" === e2 ? -1 : 1, { years: a2, months: f2, weeks: y2, days: I2, hours: S2, minutes: g2, seconds: w2, milliseconds: D2, microseconds: G2, nanoseconds: v2 } = ToTemporalDurationRecord(r2), C2 = GetOptionsObject(o2), O2 = GetSlot(t2, p), { year: b2, month: E2, day: M2, hour: R2, minute: F2, second: Y2, millisecond: P2, microsecond: Z2, nanosecond: B2 } = AddDateTime(GetSlot(t2, i), GetSlot(t2, s), GetSlot(t2, l), GetSlot(t2, d), GetSlot(t2, m), GetSlot(t2, c), GetSlot(t2, h), GetSlot(t2, u), GetSlot(t2, T), O2, n2 * a2, n2 * f2, n2 * y2, n2 * I2, n2 * S2, n2 * g2, n2 * w2, n2 * D2, n2 * G2, n2 * v2, C2);
    return CreateTemporalDateTime(b2, E2, M2, R2, F2, Y2, P2, Z2, B2, O2);
  }
  function AddDurationToOrSubtractDurationFromPlainTime(e2, t2, r2) {
    const o2 = "subtract" === e2 ? -1 : 1, { hours: n2, minutes: a2, seconds: i2, milliseconds: s2, microseconds: l2, nanoseconds: p2 } = ToTemporalDurationRecord(r2);
    let { hour: f2, minute: y2, second: I2, millisecond: S2, microsecond: g2, nanosecond: w2 } = AddTime(GetSlot(t2, d), GetSlot(t2, m), GetSlot(t2, c), GetSlot(t2, h), GetSlot(t2, u), GetSlot(t2, T), o2 * n2, o2 * a2, o2 * i2, o2 * s2, o2 * l2, o2 * p2);
    ({ hour: f2, minute: y2, second: I2, millisecond: S2, microsecond: g2, nanosecond: w2 } = RegulateTime(f2, y2, I2, S2, g2, w2, "reject"));
    return new (GetIntrinsic("%Temporal.PlainTime%"))(f2, y2, I2, S2, g2, w2);
  }
  function AddDurationToOrSubtractDurationFromPlainYearMonth(e2, t2, r2, o2) {
    let n2 = ToTemporalDurationRecord(r2);
    "subtract" === e2 && (n2 = { years: -n2.years, months: -n2.months, weeks: -n2.weeks, days: -n2.days, hours: -n2.hours, minutes: -n2.minutes, seconds: -n2.seconds, milliseconds: -n2.milliseconds, microseconds: -n2.microseconds, nanoseconds: -n2.nanoseconds });
    let { years: a2, months: i2, weeks: s2, days: l2, hours: d2, minutes: m2, seconds: c2, milliseconds: h2, microseconds: u2, nanoseconds: T2 } = n2;
    ({ days: l2 } = BalanceDuration(l2, d2, m2, c2, h2, u2, T2, "day"));
    const f2 = GetOptionsObject(o2), y2 = GetSlot(t2, p), I2 = CalendarFields(y2, ["monthCode", "year"]), S2 = PrepareTemporalFields(t2, I2, []), g2 = Te(null);
    CopyDataProperties(g2, S2, []), S2.day = 1;
    let w2 = CalendarDateFromFields(y2, S2);
    const D2 = DurationSign(a2, i2, s2, l2, 0, 0, 0, 0, 0, 0), G2 = GetMethod(y2, "dateAdd"), v2 = GetIntrinsic("%Temporal.Duration%");
    if (D2 < 0) {
      const e3 = CalendarDateAdd(y2, w2, new v2(0, 1, 0, 0, 0, 0, 0, 0, 0, 0), void 0, G2), t3 = CalendarDateAdd(y2, e3, new v2(0, 0, 0, -1, 0, 0, 0, 0, 0, 0), void 0, G2);
      g2.day = CalendarDay(y2, t3), w2 = CalendarDateFromFields(y2, g2);
    }
    const C2 = new v2(a2, i2, s2, l2, 0, 0, 0, 0, 0, 0), O2 = CopyOptions(f2);
    return CalendarYearMonthFromFields(y2, PrepareTemporalFields(CalendarDateAdd(y2, w2, C2, f2, G2), I2, []), O2);
  }
  function AddDurationToOrSubtractDurationFromZonedDateTime(e2, t2, r2, o2) {
    const n2 = "subtract" === e2 ? -1 : 1, { years: a2, months: i2, weeks: s2, days: l2, hours: d2, minutes: m2, seconds: c2, milliseconds: h2, microseconds: u2, nanoseconds: T2 } = ToTemporalDurationRecord(r2), f2 = GetOptionsObject(o2), y2 = GetSlot(t2, g), I2 = GetSlot(t2, p);
    return CreateTemporalZonedDateTime(AddZonedDateTime(GetSlot(t2, S), y2, I2, n2 * a2, n2 * i2, n2 * s2, n2 * l2, n2 * d2, n2 * m2, n2 * c2, n2 * h2, n2 * u2, n2 * T2, f2), y2, I2);
  }
  function RoundNumberToIncrement(t2, r2, o2) {
    if (import_jsbi.default.equal(r2, Se))
      return t2;
    let { quotient: n2, remainder: a2 } = divmod(t2, r2);
    if (import_jsbi.default.equal(a2, Ie))
      return t2;
    const i2 = import_jsbi.default.lessThan(a2, Ie) ? -1 : 1, s2 = abs(import_jsbi.default.multiply(a2, import_jsbi.default.BigInt(2))), l2 = import_jsbi.default.equal(s2, r2), d2 = import_jsbi.default.greaterThan(s2, r2);
    switch (o2) {
      case "ceil":
        i2 > 0 && (n2 = import_jsbi.default.add(n2, import_jsbi.default.BigInt(i2)));
        break;
      case "floor":
        i2 < 0 && (n2 = import_jsbi.default.add(n2, import_jsbi.default.BigInt(i2)));
        break;
      case "expand":
        n2 = import_jsbi.default.add(n2, import_jsbi.default.BigInt(i2));
        break;
      case "trunc":
        break;
      case "halfCeil":
        (d2 || l2 && i2 > 0) && (n2 = import_jsbi.default.add(n2, import_jsbi.default.BigInt(i2)));
        break;
      case "halfFloor":
        (d2 || l2 && i2 < 0) && (n2 = import_jsbi.default.add(n2, import_jsbi.default.BigInt(i2)));
        break;
      case "halfExpand":
        (d2 || l2) && (n2 = import_jsbi.default.add(n2, import_jsbi.default.BigInt(i2)));
        break;
      case "halfTrunc":
        d2 && (n2 = import_jsbi.default.add(n2, import_jsbi.default.BigInt(i2)));
        break;
      case "halfEven":
        (d2 || l2 && 1 === import_jsbi.default.toNumber(import_jsbi.default.remainder(abs(n2), import_jsbi.default.BigInt(2)))) && (n2 = import_jsbi.default.add(n2, import_jsbi.default.BigInt(i2)));
    }
    return import_jsbi.default.multiply(n2, r2);
  }
  function RoundInstant(t2, r2, o2, n2) {
    let { remainder: a2 } = NonNegativeBigIntDivmod(t2, Ee);
    const i2 = import_jsbi.default.subtract(t2, a2), s2 = RoundNumberToIncrement(a2, import_jsbi.default.BigInt(_e[o2] * r2), n2);
    return import_jsbi.default.add(i2, s2);
  }
  function RoundISODateTime(e2, t2, r2, o2, n2, a2, i2, s2, l2, d2, m2, c2, h2 = 864e11) {
    const { deltaDays: u2, hour: T2, minute: p2, second: f2, millisecond: y2, microsecond: I2, nanosecond: S2 } = RoundTime(o2, n2, a2, i2, s2, l2, d2, m2, c2, h2), { year: g2, month: w2, day: D2 } = BalanceISODate(e2, t2, r2 + u2);
    return { year: g2, month: w2, day: D2, hour: T2, minute: p2, second: f2, millisecond: y2, microsecond: I2, nanosecond: S2 };
  }
  function RoundTime(t2, r2, o2, n2, a2, i2, s2, l2, d2, m2 = 864e11) {
    let c2 = Ie;
    switch (l2) {
      case "day":
      case "hour":
        c2 = import_jsbi.default.BigInt(t2);
      case "minute":
        c2 = import_jsbi.default.add(import_jsbi.default.multiply(c2, ge), import_jsbi.default.BigInt(r2));
      case "second":
        c2 = import_jsbi.default.add(import_jsbi.default.multiply(c2, ge), import_jsbi.default.BigInt(o2));
      case "millisecond":
        c2 = import_jsbi.default.add(import_jsbi.default.multiply(c2, De), import_jsbi.default.BigInt(n2));
      case "microsecond":
        c2 = import_jsbi.default.add(import_jsbi.default.multiply(c2, De), import_jsbi.default.BigInt(a2));
      case "nanosecond":
        c2 = import_jsbi.default.add(import_jsbi.default.multiply(c2, De), import_jsbi.default.BigInt(i2));
    }
    const h2 = "day" === l2 ? m2 : _e[l2], u2 = RoundNumberToIncrement(c2, import_jsbi.default.BigInt(h2 * s2), d2), T2 = import_jsbi.default.toNumber(import_jsbi.default.divide(u2, import_jsbi.default.BigInt(h2)));
    switch (l2) {
      case "day":
        return { deltaDays: T2, hour: 0, minute: 0, second: 0, millisecond: 0, microsecond: 0, nanosecond: 0 };
      case "hour":
        return BalanceTime(T2, 0, 0, 0, 0, 0);
      case "minute":
        return BalanceTime(t2, T2, 0, 0, 0, 0);
      case "second":
        return BalanceTime(t2, r2, T2, 0, 0, 0);
      case "millisecond":
        return BalanceTime(t2, r2, o2, T2, 0, 0);
      case "microsecond":
        return BalanceTime(t2, r2, o2, n2, T2, 0);
      case "nanosecond":
        return BalanceTime(t2, r2, o2, n2, a2, T2);
      default:
        throw new Error(`Invalid unit ${l2}`);
    }
  }
  function DaysUntil(e2, t2) {
    return DifferenceISODate(GetSlot(e2, i), GetSlot(e2, s), GetSlot(e2, l), GetSlot(t2, i), GetSlot(t2, s), GetSlot(t2, l), "day").days;
  }
  function MoveRelativeDate(e2, t2, r2, o2) {
    const n2 = CalendarDateAdd(e2, t2, r2, void 0, o2);
    return { relativeTo: n2, days: DaysUntil(t2, n2) };
  }
  function MoveRelativeZonedDateTime(e2, t2, r2, o2, n2) {
    const a2 = GetSlot(e2, g), i2 = GetSlot(e2, p);
    return CreateTemporalZonedDateTime(AddZonedDateTime(GetSlot(e2, S), a2, i2, t2, r2, o2, n2, 0, 0, 0, 0, 0, 0), a2, i2);
  }
  function AdjustRoundedDurationDays(t2, r2, o2, n2, a2, i2, s2, l2, d2, m2, c2, h2, u2, T2) {
    let f2 = t2, y2 = r2, I2 = o2, w2 = n2, D2 = a2, G2 = i2, v2 = s2, C2 = l2, O2 = d2, b2 = m2;
    if (!IsTemporalZonedDateTime(T2) || "year" === h2 || "month" === h2 || "week" === h2 || "day" === h2 || "nanosecond" === h2 && 1 === c2)
      return { years: f2, months: y2, weeks: I2, days: w2, hours: D2, minutes: G2, seconds: v2, milliseconds: C2, microseconds: O2, nanoseconds: b2 };
    let E2 = TotalDurationNanoseconds(0, D2, G2, v2, C2, O2, b2, 0);
    const M2 = se(import_jsbi.default.toNumber(E2)), R2 = GetSlot(T2, g), F2 = GetSlot(T2, p), Y2 = AddZonedDateTime(GetSlot(T2, S), R2, F2, f2, y2, I2, w2, 0, 0, 0, 0, 0, 0), P2 = AddZonedDateTime(new (GetIntrinsic("%Temporal.Instant%"))(Y2), R2, F2, 0, 0, 0, M2, 0, 0, 0, 0, 0, 0), Z2 = import_jsbi.default.subtract(P2, Y2);
    return import_jsbi.default.greaterThanOrEqual(import_jsbi.default.multiply(import_jsbi.default.subtract(E2, Z2), import_jsbi.default.BigInt(M2)), Ie) && ({ years: f2, months: y2, weeks: I2, days: w2 } = AddDuration(f2, y2, I2, w2, 0, 0, 0, 0, 0, 0, 0, 0, 0, M2, 0, 0, 0, 0, 0, 0, T2), E2 = RoundInstant(import_jsbi.default.subtract(E2, Z2), c2, h2, u2), { hours: D2, minutes: G2, seconds: v2, milliseconds: C2, microseconds: O2, nanoseconds: b2 } = BalanceDuration(0, 0, 0, 0, 0, 0, import_jsbi.default.toNumber(E2), "hour")), { years: f2, months: y2, weeks: I2, days: w2, hours: D2, minutes: G2, seconds: v2, milliseconds: C2, microseconds: O2, nanoseconds: b2 };
  }
  function RoundDuration(t2, r2, o2, n2, a2, i2, s2, l2, d2, m2, c2, h2, u2, T2) {
    let f2 = t2, y2 = r2, I2 = o2, S2 = n2, g2 = a2, w2 = i2, D2 = s2, G2 = l2, v2 = d2, C2 = import_jsbi.default.BigInt(m2);
    const O2 = GetIntrinsic("%Temporal.Duration%");
    let b2, E2, M2, R2, F2 = T2;
    if (F2) {
      if (IsTemporalZonedDateTime(F2))
        E2 = F2, F2 = ToTemporalDate(F2);
      else if (!IsTemporalDate(F2))
        throw new TypeError("starting point must be PlainDate or ZonedDateTime");
      b2 = GetSlot(F2, p);
    }
    if ("year" === h2 || "month" === h2 || "week" === h2 || "day" === h2) {
      let t3, r3, o3;
      C2 = TotalDurationNanoseconds(0, g2, w2, D2, G2, v2, m2, 0), E2 && (t3 = MoveRelativeZonedDateTime(E2, f2, y2, I2, S2)), { days: r3, nanoseconds: C2, dayLengthNs: o3 } = NanosecondsToDays(C2, t3), M2 = import_jsbi.default.BigInt(o3), S2 += r3, g2 = w2 = D2 = G2 = v2 = 0;
    }
    switch (h2) {
      case "year": {
        if (!b2)
          throw new RangeError("A starting point is required for years rounding");
        const t3 = new O2(f2), r3 = "string" != typeof b2 ? GetMethod(b2, "dateAdd") : void 0, o3 = CalendarDateAdd(b2, F2, t3, void 0, r3), n3 = CalendarDateAdd(b2, F2, new O2(f2, y2, I2), void 0, r3);
        F2 = o3, S2 += DaysUntil(o3, n3);
        const a3 = CalendarDateAdd(b2, F2, new O2(0, 0, 0, S2), void 0, r3), i3 = Te(null);
        i3.largestUnit = "year";
        const s3 = CalendarDateUntil(b2, F2, a3, i3).years;
        f2 += s3;
        const l3 = F2;
        F2 = CalendarDateAdd(b2, F2, new O2(s3), void 0, r3);
        S2 -= DaysUntil(l3, F2);
        const d3 = new O2(S2 < 0 ? -1 : 1);
        let { days: m3 } = MoveRelativeDate(b2, F2, d3, r3);
        m3 = ae(m3);
        const h3 = import_jsbi.default.multiply(import_jsbi.default.BigInt(m3), M2);
        C2 = import_jsbi.default.add(import_jsbi.default.add(import_jsbi.default.multiply(h3, import_jsbi.default.BigInt(f2)), import_jsbi.default.multiply(import_jsbi.default.BigInt(S2), M2)), C2);
        const T3 = RoundNumberToIncrement(C2, import_jsbi.default.multiply(h3, import_jsbi.default.BigInt(c2)), u2);
        R2 = BigIntDivideToNumber(C2, h3), f2 = import_jsbi.default.toNumber(import_jsbi.default.divide(T3, h3)), C2 = Ie, y2 = I2 = S2 = 0;
        break;
      }
      case "month": {
        if (!b2)
          throw new RangeError("A starting point is required for months rounding");
        const t3 = new O2(f2, y2), r3 = "string" != typeof b2 ? GetMethod(b2, "dateAdd") : void 0, o3 = CalendarDateAdd(b2, F2, t3, void 0, r3), n3 = CalendarDateAdd(b2, F2, new O2(f2, y2, I2), void 0, r3);
        F2 = o3, S2 += DaysUntil(o3, n3);
        const a3 = se(S2), i3 = new O2(0, S2 < 0 ? -1 : 1);
        let s3;
        for ({ relativeTo: F2, days: s3 } = MoveRelativeDate(b2, F2, i3, r3); ae(S2) >= ae(s3); )
          y2 += a3, S2 -= s3, { relativeTo: F2, days: s3 } = MoveRelativeDate(b2, F2, i3, r3);
        s3 = ae(s3);
        const l3 = import_jsbi.default.multiply(import_jsbi.default.BigInt(s3), M2);
        C2 = import_jsbi.default.add(import_jsbi.default.add(import_jsbi.default.multiply(l3, import_jsbi.default.BigInt(y2)), import_jsbi.default.multiply(import_jsbi.default.BigInt(S2), M2)), C2);
        const d3 = RoundNumberToIncrement(C2, import_jsbi.default.multiply(l3, import_jsbi.default.BigInt(c2)), u2);
        R2 = BigIntDivideToNumber(C2, l3), y2 = import_jsbi.default.toNumber(import_jsbi.default.divide(d3, l3)), C2 = Ie, I2 = S2 = 0;
        break;
      }
      case "week": {
        if (!b2)
          throw new RangeError("A starting point is required for weeks rounding");
        const t3 = se(S2), r3 = new O2(0, 0, S2 < 0 ? -1 : 1), o3 = "string" != typeof b2 ? GetMethod(b2, "dateAdd") : void 0;
        let n3;
        for ({ relativeTo: F2, days: n3 } = MoveRelativeDate(b2, F2, r3, o3); ae(S2) >= ae(n3); )
          I2 += t3, S2 -= n3, { relativeTo: F2, days: n3 } = MoveRelativeDate(b2, F2, r3, o3);
        n3 = ae(n3);
        const a3 = import_jsbi.default.multiply(import_jsbi.default.BigInt(n3), M2);
        C2 = import_jsbi.default.add(import_jsbi.default.add(import_jsbi.default.multiply(a3, import_jsbi.default.BigInt(I2)), import_jsbi.default.multiply(import_jsbi.default.BigInt(S2), M2)), C2);
        const i3 = RoundNumberToIncrement(C2, import_jsbi.default.multiply(a3, import_jsbi.default.BigInt(c2)), u2);
        R2 = BigIntDivideToNumber(C2, a3), I2 = import_jsbi.default.toNumber(import_jsbi.default.divide(i3, a3)), C2 = Ie, S2 = 0;
        break;
      }
      case "day": {
        const t3 = M2;
        C2 = import_jsbi.default.add(import_jsbi.default.multiply(t3, import_jsbi.default.BigInt(S2)), C2);
        const r3 = RoundNumberToIncrement(C2, import_jsbi.default.multiply(t3, import_jsbi.default.BigInt(c2)), u2);
        R2 = BigIntDivideToNumber(C2, t3), S2 = import_jsbi.default.toNumber(import_jsbi.default.divide(r3, t3)), C2 = Ie;
        break;
      }
      case "hour": {
        const t3 = 36e11;
        let r3 = import_jsbi.default.multiply(import_jsbi.default.BigInt(g2), import_jsbi.default.BigInt(36e11));
        r3 = import_jsbi.default.add(r3, import_jsbi.default.multiply(import_jsbi.default.BigInt(w2), import_jsbi.default.BigInt(6e10))), r3 = import_jsbi.default.add(r3, import_jsbi.default.multiply(import_jsbi.default.BigInt(D2), ve)), r3 = import_jsbi.default.add(r3, import_jsbi.default.multiply(import_jsbi.default.BigInt(G2), Ge)), r3 = import_jsbi.default.add(r3, import_jsbi.default.multiply(import_jsbi.default.BigInt(v2), De)), r3 = import_jsbi.default.add(r3, C2), R2 = BigIntDivideToNumber(r3, import_jsbi.default.BigInt(t3));
        const o3 = RoundNumberToIncrement(r3, import_jsbi.default.BigInt(t3 * c2), u2);
        g2 = import_jsbi.default.toNumber(import_jsbi.default.divide(o3, import_jsbi.default.BigInt(t3))), C2 = Ie, w2 = D2 = G2 = v2 = 0;
        break;
      }
      case "minute": {
        const t3 = 6e10;
        let r3 = import_jsbi.default.multiply(import_jsbi.default.BigInt(w2), import_jsbi.default.BigInt(6e10));
        r3 = import_jsbi.default.add(r3, import_jsbi.default.multiply(import_jsbi.default.BigInt(D2), ve)), r3 = import_jsbi.default.add(r3, import_jsbi.default.multiply(import_jsbi.default.BigInt(G2), Ge)), r3 = import_jsbi.default.add(r3, import_jsbi.default.multiply(import_jsbi.default.BigInt(v2), De)), r3 = import_jsbi.default.add(r3, C2), R2 = BigIntDivideToNumber(r3, import_jsbi.default.BigInt(t3));
        const o3 = RoundNumberToIncrement(r3, import_jsbi.default.BigInt(t3 * c2), u2);
        w2 = import_jsbi.default.toNumber(import_jsbi.default.divide(o3, import_jsbi.default.BigInt(t3))), C2 = Ie, D2 = G2 = v2 = 0;
        break;
      }
      case "second": {
        const t3 = 1e9;
        let r3 = import_jsbi.default.multiply(import_jsbi.default.BigInt(D2), ve);
        r3 = import_jsbi.default.add(r3, import_jsbi.default.multiply(import_jsbi.default.BigInt(G2), Ge)), r3 = import_jsbi.default.add(r3, import_jsbi.default.multiply(import_jsbi.default.BigInt(v2), De)), r3 = import_jsbi.default.add(r3, C2), R2 = BigIntDivideToNumber(r3, import_jsbi.default.BigInt(t3));
        const o3 = RoundNumberToIncrement(r3, import_jsbi.default.BigInt(t3 * c2), u2);
        D2 = import_jsbi.default.toNumber(import_jsbi.default.divide(o3, import_jsbi.default.BigInt(t3))), C2 = Ie, G2 = v2 = 0;
        break;
      }
      case "millisecond": {
        const t3 = 1e6;
        let r3 = import_jsbi.default.multiply(import_jsbi.default.BigInt(G2), Ge);
        r3 = import_jsbi.default.add(r3, import_jsbi.default.multiply(import_jsbi.default.BigInt(v2), De)), r3 = import_jsbi.default.add(r3, C2), R2 = BigIntDivideToNumber(r3, import_jsbi.default.BigInt(t3));
        const o3 = RoundNumberToIncrement(r3, import_jsbi.default.BigInt(t3 * c2), u2);
        G2 = import_jsbi.default.toNumber(import_jsbi.default.divide(o3, import_jsbi.default.BigInt(t3))), C2 = Ie, v2 = 0;
        break;
      }
      case "microsecond": {
        const t3 = 1e3;
        let r3 = import_jsbi.default.multiply(import_jsbi.default.BigInt(v2), De);
        r3 = import_jsbi.default.add(r3, C2), R2 = BigIntDivideToNumber(r3, import_jsbi.default.BigInt(t3));
        const o3 = RoundNumberToIncrement(r3, import_jsbi.default.BigInt(t3 * c2), u2);
        v2 = import_jsbi.default.toNumber(import_jsbi.default.divide(o3, import_jsbi.default.BigInt(t3))), C2 = Ie;
        break;
      }
      case "nanosecond":
        R2 = import_jsbi.default.toNumber(C2), C2 = RoundNumberToIncrement(import_jsbi.default.BigInt(C2), import_jsbi.default.BigInt(c2), u2);
    }
    return { years: f2, months: y2, weeks: I2, days: S2, hours: g2, minutes: w2, seconds: D2, milliseconds: G2, microseconds: v2, nanoseconds: import_jsbi.default.toNumber(C2), total: R2 };
  }
  function CompareISODate(e2, t2, r2, o2, n2, a2) {
    for (const [i2, s2] of [[e2, o2], [t2, n2], [r2, a2]])
      if (i2 !== s2)
        return ComparisonResult(i2 - s2);
    return 0;
  }
  function NonNegativeBigIntDivmod(t2, r2) {
    let { quotient: o2, remainder: n2 } = divmod(t2, r2);
    return import_jsbi.default.lessThan(n2, Ie) && (o2 = import_jsbi.default.subtract(o2, Se), n2 = import_jsbi.default.add(n2, r2)), { quotient: o2, remainder: n2 };
  }
  function BigIntFloorDiv(t2, r2) {
    const { quotient: o2, remainder: n2 } = divmod(t2, r2);
    return isZero(n2) || !isNegativeJSBI(t2) == !isNegativeJSBI(r2) ? o2 : import_jsbi.default.subtract(o2, Se);
  }
  function BigIntDivideToNumber(t2, r2) {
    const { quotient: o2, remainder: n2 } = divmod(t2, r2);
    return import_jsbi.default.toNumber(o2) + import_jsbi.default.toNumber(n2) / import_jsbi.default.toNumber(r2);
  }
  function ToBigIntExternal(e2) {
    const t2 = ToBigInt(e2);
    return void 0 !== globalThis.BigInt ? globalThis.BigInt(t2.toString(10)) : t2;
  }
  function ToBigInt(t2) {
    let r2 = t2;
    if ("object" == typeof t2) {
      const e2 = t2[Symbol.toPrimitive];
      e2 && "function" == typeof e2 && (r2 = fe(e2, t2, ["number"]));
    }
    if ("number" == typeof r2)
      throw new TypeError("cannot convert number to bigint");
    return "bigint" == typeof r2 ? import_jsbi.default.BigInt(r2.toString(10)) : import_jsbi.default.BigInt(r2);
  }
  var Ve = (() => {
    let t2 = import_jsbi.default.BigInt(Date.now() % 1e6);
    return () => {
      const r2 = import_jsbi.default.BigInt(Date.now()), o2 = import_jsbi.default.add(import_jsbi.default.multiply(r2, Ge), t2);
      return t2 = import_jsbi.default.remainder(r2, Ge), import_jsbi.default.greaterThan(o2, Re) ? Re : import_jsbi.default.lessThan(o2, Me) ? Me : o2;
    };
  })();
  function DefaultTimeZone() {
    return new re().resolvedOptions().timeZone;
  }
  function ComparisonResult(e2) {
    return e2 < 0 ? -1 : e2 > 0 ? 1 : e2;
  }
  function GetOptionsObject(e2) {
    if (void 0 === e2)
      return Te(null);
    if (IsObject(e2) && null !== e2)
      return e2;
    throw new TypeError("Options parameter must be an object, not " + (null === e2 ? "null" : typeof e2));
  }
  function CreateOnePropObject(e2, t2) {
    const r2 = Te(null);
    return r2[e2] = t2, r2;
  }
  function CopyOptions(e2) {
    const t2 = Te(null);
    return CopyDataProperties(t2, GetOptionsObject(e2), []), t2;
  }
  function GetOption(e2, t2, r2, o2) {
    let n2 = e2[t2];
    if (void 0 !== n2) {
      if (n2 = ToString(n2), !r2.includes(n2))
        throw new RangeError(`${t2} must be one of ${r2.join(", ")}, not ${n2}`);
      return n2;
    }
    return o2;
  }
  function IsBuiltinCalendar(e2) {
    return je.includes(ASCIILowercase(e2));
  }
  function ASCIILowercase(e2) {
    return e2.replace(/[A-Z]/g, (e3) => {
      const t2 = e3.charCodeAt(0);
      return String.fromCharCode(t2 + 32);
    });
  }
  var ze = new RegExp(`^${W.source}$`);
  function bisect(t2, r2, o2, n2 = t2(r2), a2 = t2(o2)) {
    let i2 = import_jsbi.default.BigInt(r2), s2 = import_jsbi.default.BigInt(o2), l2 = n2, d2 = a2;
    for (; import_jsbi.default.greaterThan(import_jsbi.default.subtract(s2, i2), Se); ) {
      const r3 = import_jsbi.default.divide(import_jsbi.default.add(i2, s2), import_jsbi.default.BigInt(2)), o3 = t2(r3);
      if (o3 === l2)
        i2 = r3, l2 = o3;
      else {
        if (o3 !== d2)
          throw new Error(`invalid state in bisection ${l2} - ${o3} - ${d2}`);
        s2 = r3, d2 = o3;
      }
    }
    return s2;
  }
  var _e = { hour: 36e11, minute: 6e10, second: 1e9, millisecond: 1e6, microsecond: 1e3, nanosecond: 1 };
  var Je = Symbol("date");
  var Ke = Symbol("ym");
  var Xe = Symbol("md");
  var Qe = Symbol("time");
  var et = Symbol("datetime");
  var tt = Symbol("instant");
  var rt = Symbol("original");
  var ot = Symbol("timezone");
  var nt = Symbol("calendar-id");
  var at = Symbol("locale");
  var it = Symbol("options");
  var descriptor = (e2) => ({ value: e2, enumerable: true, writable: false, configurable: true });
  var st = globalThis.Intl.DateTimeFormat;
  var lt = Object.assign;
  var dt = Object.prototype.hasOwnProperty;
  var mt = Reflect.apply;
  function getPropLazy(e2, t2) {
    let r2 = e2[t2];
    return "function" == typeof r2 && (r2 = new st(e2[at], r2(e2[it])), e2[t2] = r2), r2;
  }
  function DateTimeFormatImpl(e2, t2 = {}) {
    if (!(this instanceof DateTimeFormatImpl))
      return new DateTimeFormatImpl(e2, t2);
    const r2 = void 0 !== t2, o2 = r2 ? lt({}, t2) : {}, n2 = new st(e2, o2), a2 = n2.resolvedOptions();
    if (r2) {
      const e3 = lt({}, a2);
      for (const t3 in e3)
        mt(dt, o2, [t3]) || delete e3[t3];
      this[it] = e3;
    } else
      this[it] = o2;
    this[at] = a2.locale, this[rt] = n2, this[ot] = a2.timeZone, this[nt] = a2.calendar, this[Je] = dateAmend, this[Ke] = yearMonthAmend, this[Xe] = monthDayAmend, this[Qe] = timeAmend, this[et] = datetimeAmend, this[tt] = instantAmend;
  }
  Object.defineProperty(DateTimeFormatImpl, "name", { writable: true, value: "DateTimeFormat" }), DateTimeFormatImpl.supportedLocalesOf = function(e2, t2) {
    return st.supportedLocalesOf(e2, t2);
  };
  var ct = { resolvedOptions: descriptor(function resolvedOptions() {
    return this[rt].resolvedOptions();
  }), format: descriptor(function format(e2, ...t2) {
    let { instant: r2, formatter: o2 } = extractOverrides(e2, this);
    if (r2 && o2)
      return o2.format(r2.epochMilliseconds);
    return this[rt].format(e2, ...t2);
  }), formatRange: descriptor(function formatRange(e2, t2) {
    if (isTemporalObject(e2) || isTemporalObject(t2)) {
      if (!sameTemporalType(e2, t2))
        throw new TypeError("Intl.DateTimeFormat.formatRange accepts two values of the same type");
      const { instant: r2, formatter: o2 } = extractOverrides(e2, this), { instant: n2, formatter: a2 } = extractOverrides(t2, this);
      if (r2 && n2 && o2 && a2 && o2 === a2)
        return o2.formatRange(r2.epochMilliseconds, n2.epochMilliseconds);
    }
    return this[rt].formatRange(e2, t2);
  }) };
  "formatToParts" in st.prototype && (ct.formatToParts = descriptor(function formatToParts(e2, ...t2) {
    let { instant: r2, formatter: o2 } = extractOverrides(e2, this);
    if (r2 && o2)
      return o2.formatToParts(r2.epochMilliseconds);
    return this[rt].formatToParts(e2, ...t2);
  })), "formatRangeToParts" in st.prototype && (ct.formatRangeToParts = descriptor(function formatRangeToParts(e2, t2) {
    if (isTemporalObject(e2) || isTemporalObject(t2)) {
      if (!sameTemporalType(e2, t2))
        throw new TypeError("Intl.DateTimeFormat.formatRangeToParts accepts two values of the same type");
      const { instant: r2, formatter: o2 } = extractOverrides(e2, this), { instant: n2, formatter: a2 } = extractOverrides(t2, this);
      if (r2 && n2 && o2 && a2 && o2 === a2)
        return o2.formatRangeToParts(r2.epochMilliseconds, n2.epochMilliseconds);
    }
    return this[rt].formatRangeToParts(e2, t2);
  })), DateTimeFormatImpl.prototype = Object.create(st.prototype, ct), Object.defineProperty(DateTimeFormatImpl, "prototype", { writable: false, enumerable: false, configurable: false });
  var ht = DateTimeFormatImpl;
  function amend(e2 = {}, t2 = {}) {
    const r2 = lt({}, e2);
    for (const e3 of ["year", "month", "day", "hour", "minute", "second", "weekday", "dayPeriod", "timeZoneName", "dateStyle", "timeStyle"])
      r2[e3] = e3 in t2 ? t2[e3] : r2[e3], false !== r2[e3] && void 0 !== r2[e3] || delete r2[e3];
    return r2;
  }
  function timeAmend(e2) {
    let t2 = amend(e2, { year: false, month: false, day: false, weekday: false, timeZoneName: false, dateStyle: false });
    return hasTimeOptions(t2) || (t2 = lt({}, t2, { hour: "numeric", minute: "numeric", second: "numeric" })), t2;
  }
  function yearMonthAmend(e2) {
    let t2 = amend(e2, { day: false, hour: false, minute: false, second: false, weekday: false, dayPeriod: false, timeZoneName: false, dateStyle: false, timeStyle: false });
    return "year" in t2 || "month" in t2 || (t2 = lt(t2, { year: "numeric", month: "numeric" })), t2;
  }
  function monthDayAmend(e2) {
    let t2 = amend(e2, { year: false, hour: false, minute: false, second: false, weekday: false, dayPeriod: false, timeZoneName: false, dateStyle: false, timeStyle: false });
    return "month" in t2 || "day" in t2 || (t2 = lt({}, t2, { month: "numeric", day: "numeric" })), t2;
  }
  function dateAmend(e2) {
    let t2 = amend(e2, { hour: false, minute: false, second: false, dayPeriod: false, timeZoneName: false, timeStyle: false });
    return hasDateOptions(t2) || (t2 = lt({}, t2, { year: "numeric", month: "numeric", day: "numeric" })), t2;
  }
  function datetimeAmend(e2) {
    let t2 = amend(e2, { timeZoneName: false });
    return hasTimeOptions(t2) || hasDateOptions(t2) || (t2 = lt({}, t2, { year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" })), t2;
  }
  function instantAmend(e2) {
    let t2 = e2;
    return hasTimeOptions(t2) || hasDateOptions(t2) || (t2 = lt({}, t2, { year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" })), t2;
  }
  function hasDateOptions(e2) {
    return "year" in e2 || "month" in e2 || "day" in e2 || "weekday" in e2 || "dateStyle" in e2;
  }
  function hasTimeOptions(e2) {
    return "hour" in e2 || "minute" in e2 || "second" in e2 || "timeStyle" in e2 || "dayPeriod" in e2;
  }
  function isTemporalObject(e2) {
    return IsTemporalDate(e2) || IsTemporalTime(e2) || IsTemporalDateTime(e2) || IsTemporalZonedDateTime(e2) || IsTemporalYearMonth(e2) || IsTemporalMonthDay(e2) || IsTemporalInstant(e2);
  }
  function sameTemporalType(e2, t2) {
    return !(!isTemporalObject(e2) || !isTemporalObject(t2)) && (!(IsTemporalTime(e2) && !IsTemporalTime(t2)) && (!(IsTemporalDate(e2) && !IsTemporalDate(t2)) && (!(IsTemporalDateTime(e2) && !IsTemporalDateTime(t2)) && (!(IsTemporalZonedDateTime(e2) && !IsTemporalZonedDateTime(t2)) && (!(IsTemporalYearMonth(e2) && !IsTemporalYearMonth(t2)) && (!(IsTemporalMonthDay(e2) && !IsTemporalMonthDay(t2)) && !(IsTemporalInstant(e2) && !IsTemporalInstant(t2))))))));
  }
  function extractOverrides(e2, t2) {
    const r2 = GetIntrinsic("%Temporal.PlainDateTime%");
    if (IsTemporalTime(e2)) {
      const o2 = new r2(1970, 1, 1, GetSlot(e2, d), GetSlot(e2, m), GetSlot(e2, c), GetSlot(e2, h), GetSlot(e2, u), GetSlot(e2, T), t2[nt]);
      return { instant: GetInstantFor(t2[ot], o2, "compatible"), formatter: getPropLazy(t2, Qe) };
    }
    if (IsTemporalYearMonth(e2)) {
      const o2 = GetSlot(e2, i), n2 = GetSlot(e2, s), a2 = GetSlot(e2, l), d2 = ToTemporalCalendarIdentifier(GetSlot(e2, p));
      if (d2 !== t2[nt])
        throw new RangeError(`cannot format PlainYearMonth with calendar ${d2} in locale with calendar ${t2[nt]}`);
      const m2 = new r2(o2, n2, a2, 12, 0, 0, 0, 0, 0, d2);
      return { instant: GetInstantFor(t2[ot], m2, "compatible"), formatter: getPropLazy(t2, Ke) };
    }
    if (IsTemporalMonthDay(e2)) {
      const o2 = GetSlot(e2, i), n2 = GetSlot(e2, s), a2 = GetSlot(e2, l), d2 = ToTemporalCalendarIdentifier(GetSlot(e2, p));
      if (d2 !== t2[nt])
        throw new RangeError(`cannot format PlainMonthDay with calendar ${d2} in locale with calendar ${t2[nt]}`);
      const m2 = new r2(o2, n2, a2, 12, 0, 0, 0, 0, 0, d2);
      return { instant: GetInstantFor(t2[ot], m2, "compatible"), formatter: getPropLazy(t2, Xe) };
    }
    if (IsTemporalDate(e2)) {
      const o2 = GetSlot(e2, i), n2 = GetSlot(e2, s), a2 = GetSlot(e2, l), d2 = ToTemporalCalendarIdentifier(GetSlot(e2, p));
      if ("iso8601" !== d2 && d2 !== t2[nt])
        throw new RangeError(`cannot format PlainDate with calendar ${d2} in locale with calendar ${t2[nt]}`);
      const m2 = new r2(o2, n2, a2, 12, 0, 0, 0, 0, 0, t2[nt]);
      return { instant: GetInstantFor(t2[ot], m2, "compatible"), formatter: getPropLazy(t2, Je) };
    }
    if (IsTemporalDateTime(e2)) {
      const o2 = GetSlot(e2, i), n2 = GetSlot(e2, s), a2 = GetSlot(e2, l), f2 = GetSlot(e2, d), y2 = GetSlot(e2, m), I2 = GetSlot(e2, c), S2 = GetSlot(e2, h), g2 = GetSlot(e2, u), w2 = GetSlot(e2, T), D2 = ToTemporalCalendarIdentifier(GetSlot(e2, p));
      if ("iso8601" !== D2 && D2 !== t2[nt])
        throw new RangeError(`cannot format PlainDateTime with calendar ${D2} in locale with calendar ${t2[nt]}`);
      let G2 = e2;
      return "iso8601" === D2 && (G2 = new r2(o2, n2, a2, f2, y2, I2, S2, g2, w2, t2[nt])), { instant: GetInstantFor(t2[ot], G2, "compatible"), formatter: getPropLazy(t2, et) };
    }
    if (IsTemporalZonedDateTime(e2))
      throw new TypeError("Temporal.ZonedDateTime not supported in DateTimeFormat methods. Use toLocaleString() instead.");
    return IsTemporalInstant(e2) ? { instant: e2, formatter: getPropLazy(t2, tt) } : {};
  }
  var ut = Object.freeze({ __proto__: null, DateTimeFormat: ht });
  var Instant = class _Instant {
    constructor(e2) {
      if (arguments.length < 1)
        throw new TypeError("missing argument: epochNanoseconds is required");
      const t2 = ToBigInt(e2);
      ValidateEpochNanoseconds(t2), N(this), SetSlot(this, n, t2);
    }
    get epochSeconds() {
      if (!IsTemporalInstant(this))
        throw new TypeError("invalid receiver");
      const t2 = GetSlot(this, n);
      return import_jsbi.default.toNumber(BigIntFloorDiv(t2, ve));
    }
    get epochMilliseconds() {
      if (!IsTemporalInstant(this))
        throw new TypeError("invalid receiver");
      const t2 = import_jsbi.default.BigInt(GetSlot(this, n));
      return import_jsbi.default.toNumber(BigIntFloorDiv(t2, Ge));
    }
    get epochMicroseconds() {
      if (!IsTemporalInstant(this))
        throw new TypeError("invalid receiver");
      return ToBigIntExternal(BigIntFloorDiv(import_jsbi.default.BigInt(GetSlot(this, n)), De));
    }
    get epochNanoseconds() {
      if (!IsTemporalInstant(this))
        throw new TypeError("invalid receiver");
      return ToBigIntExternal(import_jsbi.default.BigInt(GetSlot(this, n)));
    }
    add(e2) {
      if (!IsTemporalInstant(this))
        throw new TypeError("invalid receiver");
      return AddDurationToOrSubtractDurationFromInstant("add", this, e2);
    }
    subtract(e2) {
      if (!IsTemporalInstant(this))
        throw new TypeError("invalid receiver");
      return AddDurationToOrSubtractDurationFromInstant("subtract", this, e2);
    }
    until(e2, t2) {
      if (!IsTemporalInstant(this))
        throw new TypeError("invalid receiver");
      return DifferenceTemporalInstant("until", this, e2, t2);
    }
    since(e2, t2) {
      if (!IsTemporalInstant(this))
        throw new TypeError("invalid receiver");
      return DifferenceTemporalInstant("since", this, e2, t2);
    }
    round(e2) {
      if (!IsTemporalInstant(this))
        throw new TypeError("invalid receiver");
      if (void 0 === e2)
        throw new TypeError("options parameter is required");
      const t2 = "string" == typeof e2 ? CreateOnePropObject("smallestUnit", e2) : GetOptionsObject(e2), r2 = ToTemporalRoundingIncrement(t2), o2 = ToTemporalRoundingMode(t2, "halfExpand"), a2 = GetTemporalUnit(t2, "smallestUnit", "time", He);
      ValidateTemporalRoundingIncrement(r2, { hour: 24, minute: 1440, second: 86400, millisecond: 864e5, microsecond: 864e8, nanosecond: 864e11 }[a2], true);
      const i2 = RoundInstant(GetSlot(this, n), r2, a2, o2);
      return new _Instant(i2);
    }
    equals(t2) {
      if (!IsTemporalInstant(this))
        throw new TypeError("invalid receiver");
      const r2 = ToTemporalInstant(t2), o2 = GetSlot(this, n), a2 = GetSlot(r2, n);
      return import_jsbi.default.equal(import_jsbi.default.BigInt(o2), import_jsbi.default.BigInt(a2));
    }
    toString(e2) {
      if (!IsTemporalInstant(this))
        throw new TypeError("invalid receiver");
      const t2 = GetOptionsObject(e2), r2 = ToFractionalSecondDigits(t2), o2 = ToTemporalRoundingMode(t2, "trunc"), a2 = GetTemporalUnit(t2, "smallestUnit", "time", void 0);
      if ("hour" === a2)
        throw new RangeError('smallestUnit must be a time unit other than "hour"');
      let i2 = t2.timeZone;
      void 0 !== i2 && (i2 = ToTemporalTimeZoneSlotValue(i2));
      const { precision: s2, unit: l2, increment: d2 } = ToSecondsStringPrecisionRecord(a2, r2), m2 = RoundInstant(GetSlot(this, n), d2, l2, o2);
      return TemporalInstantToString(new _Instant(m2), i2, s2);
    }
    toJSON() {
      if (!IsTemporalInstant(this))
        throw new TypeError("invalid receiver");
      return TemporalInstantToString(this, void 0, "auto");
    }
    toLocaleString(e2, t2) {
      if (!IsTemporalInstant(this))
        throw new TypeError("invalid receiver");
      return new ht(e2, t2).format(this);
    }
    valueOf() {
      throw new TypeError("use compare() or equals() to compare Temporal.Instant");
    }
    toZonedDateTime(e2) {
      if (!IsTemporalInstant(this))
        throw new TypeError("invalid receiver");
      if (!IsObject(e2))
        throw new TypeError("invalid argument in toZonedDateTime");
      const t2 = e2.calendar;
      if (void 0 === t2)
        throw new TypeError("missing calendar property in toZonedDateTime");
      const r2 = ToTemporalCalendarSlotValue(t2), o2 = e2.timeZone;
      if (void 0 === o2)
        throw new TypeError("missing timeZone property in toZonedDateTime");
      const a2 = ToTemporalTimeZoneSlotValue(o2);
      return CreateTemporalZonedDateTime(GetSlot(this, n), a2, r2);
    }
    toZonedDateTimeISO(e2) {
      if (!IsTemporalInstant(this))
        throw new TypeError("invalid receiver");
      const t2 = ToTemporalTimeZoneSlotValue(e2);
      return CreateTemporalZonedDateTime(GetSlot(this, n), t2, "iso8601");
    }
    static fromEpochSeconds(t2) {
      const r2 = ToNumber(t2), o2 = import_jsbi.default.multiply(import_jsbi.default.BigInt(r2), ve);
      return ValidateEpochNanoseconds(o2), new _Instant(o2);
    }
    static fromEpochMilliseconds(t2) {
      const r2 = ToNumber(t2), o2 = import_jsbi.default.multiply(import_jsbi.default.BigInt(r2), Ge);
      return ValidateEpochNanoseconds(o2), new _Instant(o2);
    }
    static fromEpochMicroseconds(t2) {
      const r2 = ToBigInt(t2), o2 = import_jsbi.default.multiply(r2, De);
      return ValidateEpochNanoseconds(o2), new _Instant(o2);
    }
    static fromEpochNanoseconds(e2) {
      const t2 = ToBigInt(e2);
      return ValidateEpochNanoseconds(t2), new _Instant(t2);
    }
    static from(e2) {
      return IsTemporalInstant(e2) ? new _Instant(GetSlot(e2, n)) : ToTemporalInstant(e2);
    }
    static compare(t2, r2) {
      const o2 = ToTemporalInstant(t2), a2 = ToTemporalInstant(r2), i2 = GetSlot(o2, n), s2 = GetSlot(a2, n);
      return import_jsbi.default.lessThan(i2, s2) ? -1 : import_jsbi.default.greaterThan(i2, s2) ? 1 : 0;
    }
  };
  MakeIntrinsicClass(Instant, "Temporal.Instant");
  var Tt = Array.prototype.includes;
  var pt = Array.prototype.push;
  var ft = globalThis.Intl.DateTimeFormat;
  var yt = Array.prototype.sort;
  var It = Math.abs;
  var St = Math.floor;
  var gt = Object.create;
  var wt = Object.entries;
  var Dt = Set;
  var Gt = Reflect.ownKeys;
  var vt = Set.prototype.add;
  var Ct = Set.prototype.values;
  var Ot = {};
  var Calendar = class {
    constructor(e2) {
      if (arguments.length < 1)
        throw new RangeError("missing argument: id is required");
      const t2 = ToString(e2);
      if (!IsBuiltinCalendar(t2))
        throw new RangeError(`invalid calendar identifier ${t2}`);
      N(this), SetSlot(this, F, ASCIILowercase(t2));
    }
    get id() {
      if (!IsTemporalCalendar(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, F);
    }
    dateFromFields(e2, t2) {
      if (!IsTemporalCalendar(this))
        throw new TypeError("invalid receiver");
      if (!IsObject(e2))
        throw new TypeError("invalid fields");
      const r2 = GetOptionsObject(t2), o2 = GetSlot(this, F);
      return Ot[o2].dateFromFields(e2, r2, o2);
    }
    yearMonthFromFields(e2, t2) {
      if (!IsTemporalCalendar(this))
        throw new TypeError("invalid receiver");
      if (!IsObject(e2))
        throw new TypeError("invalid fields");
      const r2 = GetOptionsObject(t2), o2 = GetSlot(this, F);
      return Ot[o2].yearMonthFromFields(e2, r2, o2);
    }
    monthDayFromFields(e2, t2) {
      if (!IsTemporalCalendar(this))
        throw new TypeError("invalid receiver");
      if (!IsObject(e2))
        throw new TypeError("invalid fields");
      const r2 = GetOptionsObject(t2), o2 = GetSlot(this, F);
      return Ot[o2].monthDayFromFields(e2, r2, o2);
    }
    fields(e2) {
      if (!IsTemporalCalendar(this))
        throw new TypeError("invalid receiver");
      const t2 = [], r2 = /* @__PURE__ */ new Set(["year", "month", "monthCode", "day", "hour", "minute", "second", "millisecond", "microsecond", "nanosecond"]);
      for (const o2 of e2) {
        if ("string" != typeof o2)
          throw new TypeError("invalid fields");
        if (!r2.has(o2))
          throw new RangeError(`invalid field name ${o2}`);
        r2.delete(o2), pt.call(t2, o2);
      }
      return Ot[GetSlot(this, F)].fields(t2);
    }
    mergeFields(e2, t2) {
      if (!IsTemporalCalendar(this))
        throw new TypeError("invalid receiver");
      const r2 = ToObject(e2), o2 = gt(null);
      CopyDataProperties(o2, r2, [], [void 0]);
      const n2 = ToObject(t2), a2 = gt(null);
      CopyDataProperties(a2, n2, [], [void 0]);
      const i2 = Gt(a2), s2 = Ot[GetSlot(this, F)].fieldKeysToIgnore(i2), l2 = gt(null), d2 = Gt(o2);
      for (const e3 of d2) {
        let t3;
        t3 = Call(Tt, s2, [e3]) ? a2[e3] : o2[e3], void 0 !== t3 && (l2[e3] = t3);
      }
      return CopyDataProperties(l2, a2, []), l2;
    }
    dateAdd(e2, t2, r2) {
      if (!IsTemporalCalendar(this))
        throw new TypeError("invalid receiver");
      const o2 = ToTemporalDate(e2), n2 = ToTemporalDuration(t2), a2 = ToTemporalOverflow(GetOptionsObject(r2)), { days: i2 } = BalanceDuration(GetSlot(n2, v), GetSlot(n2, C), GetSlot(n2, O), GetSlot(n2, b), GetSlot(n2, E), GetSlot(n2, M), GetSlot(n2, R), "day"), s2 = GetSlot(this, F);
      return Ot[s2].dateAdd(o2, GetSlot(n2, w), GetSlot(n2, D), GetSlot(n2, G), i2, a2, s2);
    }
    dateUntil(e2, t2, r2) {
      if (!IsTemporalCalendar(this))
        throw new TypeError("invalid receiver");
      const o2 = ToTemporalDate(e2), n2 = ToTemporalDate(t2);
      let a2 = GetTemporalUnit(GetOptionsObject(r2), "largestUnit", "date", "auto");
      "auto" === a2 && (a2 = "day");
      const { years: i2, months: s2, weeks: l2, days: d2 } = Ot[GetSlot(this, F)].dateUntil(o2, n2, a2);
      return new (GetIntrinsic("%Temporal.Duration%"))(i2, s2, l2, d2, 0, 0, 0, 0, 0, 0);
    }
    year(e2) {
      let t2 = e2;
      if (!IsTemporalCalendar(this))
        throw new TypeError("invalid receiver");
      return IsTemporalYearMonth(t2) || (t2 = ToTemporalDate(t2)), Ot[GetSlot(this, F)].year(t2);
    }
    month(e2) {
      let t2 = e2;
      if (!IsTemporalCalendar(this))
        throw new TypeError("invalid receiver");
      if (IsTemporalMonthDay(t2))
        throw new TypeError("use monthCode on PlainMonthDay instead");
      return IsTemporalYearMonth(t2) || (t2 = ToTemporalDate(t2)), Ot[GetSlot(this, F)].month(t2);
    }
    monthCode(e2) {
      let t2 = e2;
      if (!IsTemporalCalendar(this))
        throw new TypeError("invalid receiver");
      return IsTemporalYearMonth(t2) || IsTemporalMonthDay(t2) || (t2 = ToTemporalDate(t2)), Ot[GetSlot(this, F)].monthCode(t2);
    }
    day(e2) {
      let t2 = e2;
      if (!IsTemporalCalendar(this))
        throw new TypeError("invalid receiver");
      return IsTemporalMonthDay(t2) || (t2 = ToTemporalDate(t2)), Ot[GetSlot(this, F)].day(t2);
    }
    era(e2) {
      let t2 = e2;
      if (!IsTemporalCalendar(this))
        throw new TypeError("invalid receiver");
      return IsTemporalYearMonth(t2) || (t2 = ToTemporalDate(t2)), Ot[GetSlot(this, F)].era(t2);
    }
    eraYear(e2) {
      let t2 = e2;
      if (!IsTemporalCalendar(this))
        throw new TypeError("invalid receiver");
      return IsTemporalYearMonth(t2) || (t2 = ToTemporalDate(t2)), Ot[GetSlot(this, F)].eraYear(t2);
    }
    dayOfWeek(e2) {
      if (!IsTemporalCalendar(this))
        throw new TypeError("invalid receiver");
      const t2 = ToTemporalDate(e2);
      return Ot[GetSlot(this, F)].dayOfWeek(t2);
    }
    dayOfYear(e2) {
      if (!IsTemporalCalendar(this))
        throw new TypeError("invalid receiver");
      const t2 = ToTemporalDate(e2);
      return Ot[GetSlot(this, F)].dayOfYear(t2);
    }
    weekOfYear(e2) {
      if (!IsTemporalCalendar(this))
        throw new TypeError("invalid receiver");
      const t2 = ToTemporalDate(e2);
      return Ot[GetSlot(this, F)].weekOfYear(t2);
    }
    yearOfWeek(e2) {
      if (!IsTemporalCalendar(this))
        throw new TypeError("invalid receiver");
      const t2 = ToTemporalDate(e2);
      return Ot[GetSlot(this, F)].yearOfWeek(t2);
    }
    daysInWeek(e2) {
      if (!IsTemporalCalendar(this))
        throw new TypeError("invalid receiver");
      const t2 = ToTemporalDate(e2);
      return Ot[GetSlot(this, F)].daysInWeek(t2);
    }
    daysInMonth(e2) {
      let t2 = e2;
      if (!IsTemporalCalendar(this))
        throw new TypeError("invalid receiver");
      return IsTemporalYearMonth(t2) || (t2 = ToTemporalDate(t2)), Ot[GetSlot(this, F)].daysInMonth(t2);
    }
    daysInYear(e2) {
      let t2 = e2;
      if (!IsTemporalCalendar(this))
        throw new TypeError("invalid receiver");
      return IsTemporalYearMonth(t2) || (t2 = ToTemporalDate(t2)), Ot[GetSlot(this, F)].daysInYear(t2);
    }
    monthsInYear(e2) {
      let t2 = e2;
      if (!IsTemporalCalendar(this))
        throw new TypeError("invalid receiver");
      return IsTemporalYearMonth(t2) || (t2 = ToTemporalDate(t2)), Ot[GetSlot(this, F)].monthsInYear(t2);
    }
    inLeapYear(e2) {
      let t2 = e2;
      if (!IsTemporalCalendar(this))
        throw new TypeError("invalid receiver");
      return IsTemporalYearMonth(t2) || (t2 = ToTemporalDate(t2)), Ot[GetSlot(this, F)].inLeapYear(t2);
    }
    toString() {
      if (!IsTemporalCalendar(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, F);
    }
    toJSON() {
      if (!IsTemporalCalendar(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, F);
    }
    static from(e2) {
      return ToTemporalCalendarObject(ToTemporalCalendarSlotValue(e2));
    }
  };
  function monthCodeNumberPart(e2) {
    if (!e2.startsWith("M"))
      throw new RangeError(`Invalid month code: ${e2}.  Month codes must start with M.`);
    const t2 = +e2.slice(1);
    if (isNaN(t2))
      throw new RangeError(`Invalid month code: ${e2}`);
    return t2;
  }
  function buildMonthCode(e2, t2 = false) {
    return `M${e2.toString().padStart(2, "0")}${t2 ? "L" : ""}`;
  }
  function resolveNonLunisolarMonth(e2, t2, r2 = 12) {
    let { month: o2, monthCode: n2 } = e2;
    if (void 0 === n2) {
      if (void 0 === o2)
        throw new TypeError("Either month or monthCode are required");
      "reject" === t2 && RejectToRange(o2, 1, r2), "constrain" === t2 && (o2 = ConstrainToRange(o2, 1, r2)), n2 = buildMonthCode(o2);
    } else {
      const e3 = monthCodeNumberPart(n2);
      if (void 0 !== o2 && o2 !== e3)
        throw new RangeError(`monthCode ${n2} and month ${o2} must match if both are present`);
      if (n2 !== buildMonthCode(e3))
        throw new RangeError(`Invalid month code: ${n2}`);
      if (o2 = e3, o2 < 1 || o2 > r2)
        throw new RangeError(`Invalid monthCode: ${n2}`);
    }
    return { ...e2, month: o2, monthCode: n2 };
  }
  MakeIntrinsicClass(Calendar, "Temporal.Calendar"), DefineIntrinsic("Temporal.Calendar.from", Calendar.from), DefineIntrinsic("Temporal.Calendar.prototype.dateAdd", Calendar.prototype.dateAdd), DefineIntrinsic("Temporal.Calendar.prototype.dateFromFields", Calendar.prototype.dateFromFields), DefineIntrinsic("Temporal.Calendar.prototype.dateUntil", Calendar.prototype.dateUntil), DefineIntrinsic("Temporal.Calendar.prototype.day", Calendar.prototype.day), DefineIntrinsic("Temporal.Calendar.prototype.dayOfWeek", Calendar.prototype.dayOfWeek), DefineIntrinsic("Temporal.Calendar.prototype.dayOfYear", Calendar.prototype.dayOfYear), DefineIntrinsic("Temporal.Calendar.prototype.daysInMonth", Calendar.prototype.daysInMonth), DefineIntrinsic("Temporal.Calendar.prototype.daysInWeek", Calendar.prototype.daysInWeek), DefineIntrinsic("Temporal.Calendar.prototype.daysInYear", Calendar.prototype.daysInYear), DefineIntrinsic("Temporal.Calendar.prototype.era", Calendar.prototype.era), DefineIntrinsic("Temporal.Calendar.prototype.eraYear", Calendar.prototype.eraYear), DefineIntrinsic("Temporal.Calendar.prototype.fields", Calendar.prototype.fields), DefineIntrinsic("Temporal.Calendar.prototype.inLeapYear", Calendar.prototype.inLeapYear), DefineIntrinsic("Temporal.Calendar.prototype.mergeFields", Calendar.prototype.mergeFields), DefineIntrinsic("Temporal.Calendar.prototype.month", Calendar.prototype.month), DefineIntrinsic("Temporal.Calendar.prototype.monthCode", Calendar.prototype.monthCode), DefineIntrinsic("Temporal.Calendar.prototype.monthDayFromFields", Calendar.prototype.monthDayFromFields), DefineIntrinsic("Temporal.Calendar.prototype.monthsInYear", Calendar.prototype.monthsInYear), DefineIntrinsic("Temporal.Calendar.prototype.weekOfYear", Calendar.prototype.weekOfYear), DefineIntrinsic("Temporal.Calendar.prototype.year", Calendar.prototype.year), DefineIntrinsic("Temporal.Calendar.prototype.yearMonthFromFields", Calendar.prototype.yearMonthFromFields), DefineIntrinsic("Temporal.Calendar.prototype.yearOfWeek", Calendar.prototype.yearOfWeek), Ot.iso8601 = { dateFromFields(e2, t2, r2) {
    let o2 = PrepareTemporalFields(e2, ["day", "month", "monthCode", "year"], ["year", "day"]);
    const n2 = ToTemporalOverflow(t2);
    o2 = resolveNonLunisolarMonth(o2);
    let { year: a2, month: i2, day: s2 } = o2;
    return { year: a2, month: i2, day: s2 } = RegulateISODate(a2, i2, s2, n2), CreateTemporalDate(a2, i2, s2, r2);
  }, yearMonthFromFields(e2, t2, r2) {
    let o2 = PrepareTemporalFields(e2, ["month", "monthCode", "year"], ["year"]);
    const n2 = ToTemporalOverflow(t2);
    o2 = resolveNonLunisolarMonth(o2);
    let { year: a2, month: i2 } = o2;
    return { year: a2, month: i2 } = function RegulateISOYearMonth(e3, t3, r3) {
      let o3 = e3, n3 = t3;
      switch (r3) {
        case "reject":
          RejectISODate(o3, n3, 1);
          break;
        case "constrain":
          ({ year: o3, month: n3 } = ConstrainISODate(o3, n3));
      }
      return { year: o3, month: n3 };
    }(a2, i2, n2), CreateTemporalYearMonth(a2, i2, r2, 1);
  }, monthDayFromFields(e2, t2, r2) {
    let o2 = PrepareTemporalFields(e2, ["day", "month", "monthCode", "year"], ["day"]);
    const n2 = ToTemporalOverflow(t2);
    if (void 0 !== o2.month && void 0 === o2.year && void 0 === o2.monthCode)
      throw new TypeError("either year or monthCode required with month");
    const a2 = void 0 === o2.monthCode;
    o2 = resolveNonLunisolarMonth(o2);
    let { month: i2, day: s2, year: l2 } = o2;
    return { month: i2, day: s2 } = RegulateISODate(a2 ? l2 : 1972, i2, s2, n2), CreateTemporalMonthDay(i2, s2, r2, 1972);
  }, fields: (e2) => e2, fieldKeysToIgnore(e2) {
    const t2 = new Dt();
    for (let r2 = 0; r2 < e2.length; r2++) {
      const o2 = e2[r2];
      Call(vt, t2, [o2]), "month" === o2 ? Call(vt, t2, ["monthCode"]) : "monthCode" === o2 && Call(vt, t2, ["month"]);
    }
    return [...Call(Ct, t2, [])];
  }, dateAdd(e2, t2, r2, o2, n2, a2, d2) {
    let m2 = GetSlot(e2, i), c2 = GetSlot(e2, s), h2 = GetSlot(e2, l);
    return { year: m2, month: c2, day: h2 } = AddISODate(m2, c2, h2, t2, r2, o2, n2, a2), CreateTemporalDate(m2, c2, h2, d2);
  }, dateUntil: (e2, t2, r2) => DifferenceISODate(GetSlot(e2, i), GetSlot(e2, s), GetSlot(e2, l), GetSlot(t2, i), GetSlot(t2, s), GetSlot(t2, l), r2), year: (e2) => GetSlot(e2, i), era() {
  }, eraYear() {
  }, month: (e2) => GetSlot(e2, s), monthCode: (e2) => buildMonthCode(GetSlot(e2, s)), day: (e2) => GetSlot(e2, l), dayOfWeek: (e2) => DayOfWeek(GetSlot(e2, i), GetSlot(e2, s), GetSlot(e2, l)), dayOfYear: (e2) => DayOfYear(GetSlot(e2, i), GetSlot(e2, s), GetSlot(e2, l)), weekOfYear: (e2) => WeekOfYear(GetSlot(e2, i), GetSlot(e2, s), GetSlot(e2, l)).week, yearOfWeek: (e2) => WeekOfYear(GetSlot(e2, i), GetSlot(e2, s), GetSlot(e2, l)).year, daysInWeek: () => 7, daysInMonth: (e2) => ISODaysInMonth(GetSlot(e2, i), GetSlot(e2, s)), daysInYear(e2) {
    let t2 = e2;
    return HasSlot(t2, i) || (t2 = ToTemporalDate(t2)), LeapYear(GetSlot(t2, i)) ? 366 : 365;
  }, monthsInYear: () => 12, inLeapYear(e2) {
    let t2 = e2;
    return HasSlot(t2, i) || (t2 = ToTemporalDate(t2)), LeapYear(GetSlot(t2, i));
  } };
  var OneObjectCache = class _OneObjectCache {
    constructor(e2) {
      if (this.map = /* @__PURE__ */ new Map(), this.calls = 0, this.hits = 0, this.misses = 0, this.now = globalThis.performance ? globalThis.performance.now() : Date.now(), void 0 !== e2) {
        let t2 = 0;
        for (const r2 of e2.map.entries()) {
          if (++t2 > _OneObjectCache.MAX_CACHE_ENTRIES)
            break;
          this.map.set(...r2);
        }
      }
    }
    get(e2) {
      const t2 = this.map.get(e2);
      return t2 && (this.hits++, this.report()), this.calls++, t2;
    }
    set(e2, t2) {
      this.map.set(e2, t2), this.misses++, this.report();
    }
    report() {
    }
    setObject(e2) {
      if (_OneObjectCache.objectMap.get(e2))
        throw new RangeError("object already cached");
      _OneObjectCache.objectMap.set(e2, this), this.report();
    }
    static getCacheForObject(e2) {
      let t2 = _OneObjectCache.objectMap.get(e2);
      return t2 || (t2 = new _OneObjectCache(), _OneObjectCache.objectMap.set(e2, t2)), t2;
    }
  };
  function toUtcIsoDateString({ isoYear: e2, isoMonth: t2, isoDay: r2 }) {
    return `${ISOYearString(e2)}-${ISODateTimePartString(t2)}-${ISODateTimePartString(r2)}T00:00Z`;
  }
  function simpleDateDiff(e2, t2) {
    return { years: e2.year - t2.year, months: e2.month - t2.month, days: e2.day - t2.day };
  }
  OneObjectCache.objectMap = /* @__PURE__ */ new WeakMap(), OneObjectCache.MAX_CACHE_ENTRIES = 1e3;
  var HelperBase = class {
    constructor() {
      this.eraLength = "short", this.hasEra = true, this.erasBeginMidYear = false;
    }
    getFormatter() {
      return void 0 === this.formatter && (this.formatter = new ft(`en-US-u-ca-${this.id}`, { day: "numeric", month: "numeric", year: "numeric", era: this.eraLength, timeZone: "UTC" })), this.formatter;
    }
    isoToCalendarDate(e2, t2) {
      const { year: r2, month: o2, day: n2 } = e2, a2 = JSON.stringify({ func: "isoToCalendarDate", isoYear: r2, isoMonth: o2, isoDay: n2, id: this.id }), i2 = t2.get(a2);
      if (i2)
        return i2;
      const s2 = this.getFormatter();
      let l2, d2;
      try {
        d2 = toUtcIsoDateString({ isoYear: r2, isoMonth: o2, isoDay: n2 }), l2 = s2.formatToParts(new Date(d2));
      } catch (e3) {
        throw new RangeError(`Invalid ISO date: ${JSON.stringify({ isoYear: r2, isoMonth: o2, isoDay: n2 })}`);
      }
      const m2 = {};
      for (let { type: e3, value: t3 } of l2) {
        if ("year" === e3 && (m2.eraYear = +t3), "relatedYear" === e3 && (m2.eraYear = +t3), "month" === e3) {
          const e4 = /^([0-9]*)(.*?)$/.exec(t3);
          if (!e4 || 3 != e4.length || !e4[1] && !e4[2])
            throw new RangeError(`Unexpected month: ${t3}`);
          if (m2.month = e4[1] ? +e4[1] : 1, m2.month < 1)
            throw new RangeError(`Invalid month ${t3} from ${d2}[u-ca-${this.id}] (probably due to https://bugs.chromium.org/p/v8/issues/detail?id=10527)`);
          if (m2.month > 13)
            throw new RangeError(`Invalid month ${t3} from ${d2}[u-ca-${this.id}] (probably due to https://bugs.chromium.org/p/v8/issues/detail?id=10529)`);
          e4[2] && (m2.monthExtra = e4[2]);
        }
        "day" === e3 && (m2.day = +t3), this.hasEra && "era" === e3 && null != t3 && "" !== t3 && (t3 = t3.split(" (")[0], m2.era = t3.normalize("NFD").replace(/[^-0-9 \p{L}]/gu, "").replace(" ", "-").toLowerCase());
      }
      if (void 0 === m2.eraYear)
        throw new RangeError(`Intl.DateTimeFormat.formatToParts lacks relatedYear in ${this.id} calendar. Try Node 14+ or modern browsers.`);
      if (this.reviseIntlEra) {
        const { era: t3, eraYear: r3 } = this.reviseIntlEra(m2, e2);
        m2.era = t3, m2.eraYear = r3;
      }
      this.checkIcuBugs && this.checkIcuBugs(e2);
      const c2 = this.adjustCalendarDate(m2, t2, "constrain", true);
      if (void 0 === c2.year)
        throw new RangeError(`Missing year converting ${JSON.stringify(e2)}`);
      if (void 0 === c2.month)
        throw new RangeError(`Missing month converting ${JSON.stringify(e2)}`);
      if (void 0 === c2.day)
        throw new RangeError(`Missing day converting ${JSON.stringify(e2)}`);
      return t2.set(a2, c2), ["constrain", "reject"].forEach((r3) => {
        const o3 = JSON.stringify({ func: "calendarToIsoDate", year: c2.year, month: c2.month, day: c2.day, overflow: r3, id: this.id });
        t2.set(o3, e2);
      }), c2;
    }
    validateCalendarDate(e2) {
      const { era: t2, month: r2, year: o2, day: n2, eraYear: a2, monthCode: i2, monthExtra: s2 } = e2;
      if (void 0 !== s2)
        throw new RangeError("Unexpected `monthExtra` value");
      if (void 0 === o2 && void 0 === a2)
        throw new TypeError("year or eraYear is required");
      if (void 0 === r2 && void 0 === i2)
        throw new TypeError("month or monthCode is required");
      if (void 0 === n2)
        throw new RangeError("Missing day");
      if (void 0 !== i2) {
        if ("string" != typeof i2)
          throw new RangeError("monthCode must be a string, not " + typeof i2);
        if (!/^M([01]?\d)(L?)$/.test(i2))
          throw new RangeError(`Invalid monthCode: ${i2}`);
      }
      if (this.constantEra) {
        if (void 0 !== t2 && t2 !== this.constantEra)
          throw new RangeError(`era must be ${this.constantEra}, not ${t2}`);
        if (void 0 !== a2 && void 0 !== o2 && a2 !== o2)
          throw new RangeError(`eraYear ${a2} does not match year ${o2}`);
      }
      if (this.hasEra && void 0 === e2.era != (void 0 === e2.eraYear))
        throw new RangeError("properties 'era' and 'eraYear' must be provided together");
    }
    adjustCalendarDate(e2, t2, r2 = "constrain", o2 = false) {
      if ("lunisolar" === this.calendarType)
        throw new RangeError("Override required for lunisolar calendars");
      let n2 = e2;
      if (this.validateCalendarDate(n2), this.constantEra) {
        const { year: e3, eraYear: t3 } = n2;
        n2 = { ...n2, era: this.constantEra, year: void 0 !== e3 ? e3 : t3, eraYear: void 0 !== t3 ? t3 : e3 };
      }
      const a2 = this.monthsInYear(n2, t2);
      let { month: i2, monthCode: s2 } = n2;
      return { month: i2, monthCode: s2 } = resolveNonLunisolarMonth(n2, r2, a2), { ...n2, month: i2, monthCode: s2 };
    }
    regulateMonthDayNaive(e2, t2, r2) {
      const o2 = this.monthsInYear(e2, r2);
      let { month: n2, day: a2 } = e2;
      return "reject" === t2 ? (RejectToRange(n2, 1, o2), RejectToRange(a2, 1, this.maximumMonthLength(e2))) : (n2 = ConstrainToRange(n2, 1, o2), a2 = ConstrainToRange(a2, 1, this.maximumMonthLength({ ...e2, month: n2 }))), { ...e2, month: n2, day: a2 };
    }
    calendarToIsoDate(e2, t2 = "constrain", r2) {
      const o2 = e2;
      let n2 = this.adjustCalendarDate(e2, r2, t2, false);
      n2 = this.regulateMonthDayNaive(n2, t2, r2);
      const { year: a2, month: i2, day: s2 } = n2, l2 = JSON.stringify({ func: "calendarToIsoDate", year: a2, month: i2, day: s2, overflow: t2, id: this.id });
      let d2, m2 = r2.get(l2);
      if (m2)
        return m2;
      if (void 0 !== o2.year && void 0 !== o2.month && void 0 !== o2.day && (o2.year !== n2.year || o2.month !== n2.month || o2.day !== n2.day) && (d2 = JSON.stringify({ func: "calendarToIsoDate", year: o2.year, month: o2.month, day: o2.day, overflow: t2, id: this.id }), m2 = r2.get(d2), m2))
        return m2;
      let c2 = this.estimateIsoDate({ year: a2, month: i2, day: s2 });
      const calculateSameMonthResult = (e3) => {
        let o3 = this.addDaysIso(c2, e3);
        if (n2.day > this.minimumMonthLength(n2)) {
          let e4 = this.isoToCalendarDate(o3, r2);
          for (; e4.month !== i2 || e4.year !== a2; ) {
            if ("reject" === t2)
              throw new RangeError(`day ${s2} does not exist in month ${i2} of year ${a2}`);
            o3 = this.addDaysIso(o3, -1), e4 = this.isoToCalendarDate(o3, r2);
          }
        }
        return o3;
      };
      let h2 = 0, u2 = this.isoToCalendarDate(c2, r2), T2 = simpleDateDiff(n2, u2);
      if (0 !== T2.years || 0 !== T2.months || 0 !== T2.days) {
        const e3 = 365 * T2.years + 30 * T2.months + T2.days;
        c2 = this.addDaysIso(c2, e3), u2 = this.isoToCalendarDate(c2, r2), T2 = simpleDateDiff(n2, u2), 0 === T2.years && 0 === T2.months ? c2 = calculateSameMonthResult(T2.days) : h2 = this.compareCalendarDates(n2, u2);
      }
      let p2 = 8;
      for (; h2; ) {
        c2 = this.addDaysIso(c2, h2 * p2);
        const e3 = u2;
        u2 = this.isoToCalendarDate(c2, r2);
        const a3 = h2;
        if (h2 = this.compareCalendarDates(n2, u2), h2) {
          if (T2 = simpleDateDiff(n2, u2), 0 === T2.years && 0 === T2.months)
            c2 = calculateSameMonthResult(T2.days), h2 = 0;
          else if (a3 && h2 !== a3)
            if (p2 > 1)
              p2 /= 2;
            else {
              if ("reject" === t2)
                throw new RangeError(`Can't find ISO date from calendar date: ${JSON.stringify({ ...o2 })}`);
              this.compareCalendarDates(u2, e3) > 0 && (c2 = this.addDaysIso(c2, -1)), h2 = 0;
            }
        }
      }
      if (r2.set(l2, c2), d2 && r2.set(d2, c2), void 0 === n2.year || void 0 === n2.month || void 0 === n2.day || void 0 === n2.monthCode || this.hasEra && (void 0 === n2.era || void 0 === n2.eraYear))
        throw new RangeError("Unexpected missing property");
      return c2;
    }
    temporalToCalendarDate(e2, t2) {
      const r2 = { year: GetSlot(e2, i), month: GetSlot(e2, s), day: GetSlot(e2, l) };
      return this.isoToCalendarDate(r2, t2);
    }
    compareCalendarDates(e2, t2) {
      const r2 = PrepareTemporalFields(e2, ["day", "month", "year"], ["day", "month", "year"]), o2 = PrepareTemporalFields(t2, ["day", "month", "year"], ["day", "month", "year"]);
      return r2.year !== o2.year ? ComparisonResult(r2.year - o2.year) : r2.month !== o2.month ? ComparisonResult(r2.month - o2.month) : r2.day !== o2.day ? ComparisonResult(r2.day - o2.day) : 0;
    }
    regulateDate(e2, t2 = "constrain", r2) {
      const o2 = this.calendarToIsoDate(e2, t2, r2);
      return this.isoToCalendarDate(o2, r2);
    }
    addDaysIso(e2, t2) {
      return AddISODate(e2.year, e2.month, e2.day, 0, 0, 0, t2, "constrain");
    }
    addDaysCalendar(e2, t2, r2) {
      const o2 = this.calendarToIsoDate(e2, "constrain", r2), n2 = this.addDaysIso(o2, t2);
      return this.isoToCalendarDate(n2, r2);
    }
    addMonthsCalendar(e2, t2, r2, o2) {
      let n2 = e2;
      const { day: a2 } = n2;
      for (let e3 = 0, r3 = It(t2); e3 < r3; e3++) {
        const { month: e4 } = n2, r4 = n2, i2 = t2 < 0 ? -Math.max(a2, this.daysInPreviousMonth(n2, o2)) : this.daysInMonth(n2, o2), s2 = this.calendarToIsoDate(n2, "constrain", o2);
        let l2 = this.addDaysIso(s2, i2);
        if (n2 = this.isoToCalendarDate(l2, o2), t2 > 0) {
          const t3 = this.monthsInYear(r4, o2);
          for (; n2.month - 1 != e4 % t3; )
            l2 = this.addDaysIso(l2, -1), n2 = this.isoToCalendarDate(l2, o2);
        }
        n2.day !== a2 && (n2 = this.regulateDate({ ...n2, day: a2 }, "constrain", o2));
      }
      if ("reject" === r2 && n2.day !== a2)
        throw new RangeError(`Day ${a2} does not exist in resulting calendar month`);
      return n2;
    }
    addCalendar(e2, { years: t2 = 0, months: r2 = 0, weeks: o2 = 0, days: n2 = 0 }, a2, i2) {
      const { year: s2, day: l2, monthCode: d2 } = e2, m2 = this.adjustCalendarDate({ year: s2 + t2, monthCode: d2, day: l2 }, i2), c2 = this.addMonthsCalendar(m2, r2, a2, i2), h2 = n2 + 7 * o2;
      return this.addDaysCalendar(c2, h2, i2);
    }
    untilCalendar(e2, t2, r2, o2) {
      let n2 = 0, a2 = 0, i2 = 0, s2 = 0;
      switch (r2) {
        case "day":
          n2 = this.calendarDaysUntil(e2, t2, o2);
          break;
        case "week": {
          const r3 = this.calendarDaysUntil(e2, t2, o2);
          n2 = r3 % 7, a2 = (r3 - n2) / 7;
          break;
        }
        case "month":
        case "year": {
          const a3 = this.compareCalendarDates(t2, e2);
          if (!a3)
            return { years: 0, months: 0, weeks: 0, days: 0 };
          const l2 = t2.year - e2.year, d2 = t2.day - e2.day;
          if ("year" === r2 && l2) {
            let r3 = 0;
            t2.monthCode > e2.monthCode && (r3 = 1), t2.monthCode < e2.monthCode && (r3 = -1), r3 || (r3 = Math.sign(d2));
            s2 = r3 * a3 < 0 ? l2 - a3 : l2;
          }
          let m2, c2 = s2 ? this.addCalendar(e2, { years: s2 }, "constrain", o2) : e2;
          do {
            i2 += a3, m2 = c2, c2 = this.addMonthsCalendar(m2, a3, "constrain", o2), c2.day !== e2.day && (c2 = this.regulateDate({ ...c2, day: e2.day }, "constrain", o2));
          } while (this.compareCalendarDates(t2, c2) * a3 >= 0);
          i2 -= a3;
          n2 = this.calendarDaysUntil(m2, t2, o2);
          break;
        }
      }
      return { years: s2, months: i2, weeks: a2, days: n2 };
    }
    daysInMonth(e2, t2) {
      const { day: r2 } = e2, o2 = this.maximumMonthLength(e2), n2 = this.minimumMonthLength(e2);
      if (n2 === o2)
        return n2;
      const a2 = r2 <= o2 - n2 ? o2 : n2, i2 = this.calendarToIsoDate(e2, "constrain", t2), s2 = this.addDaysIso(i2, a2), l2 = this.isoToCalendarDate(s2, t2), d2 = this.addDaysIso(s2, -l2.day);
      return this.isoToCalendarDate(d2, t2).day;
    }
    daysInPreviousMonth(e2, t2) {
      const { day: r2, month: o2, year: n2 } = e2;
      let a2 = { year: o2 > 1 ? n2 : n2 - 1, month: o2, day: 1 };
      const i2 = o2 > 1 ? o2 - 1 : this.monthsInYear(a2, t2);
      a2 = { ...a2, month: i2 };
      const s2 = this.minimumMonthLength(a2), l2 = this.maximumMonthLength(a2);
      if (s2 === l2)
        return l2;
      const d2 = this.calendarToIsoDate(e2, "constrain", t2), m2 = this.addDaysIso(d2, -r2);
      return this.isoToCalendarDate(m2, t2).day;
    }
    startOfCalendarYear(e2) {
      return { year: e2.year, month: 1, monthCode: "M01", day: 1 };
    }
    startOfCalendarMonth(e2) {
      return { year: e2.year, month: e2.month, day: 1 };
    }
    calendarDaysUntil(e2, t2, r2) {
      const o2 = this.calendarToIsoDate(e2, "constrain", r2), n2 = this.calendarToIsoDate(t2, "constrain", r2);
      return this.isoDaysUntil(o2, n2);
    }
    isoDaysUntil(e2, t2) {
      return DifferenceISODate(e2.year, e2.month, e2.day, t2.year, t2.month, t2.day, "day").days;
    }
    monthDayFromFields(e2, t2, r2) {
      let o2, n2, a2, i2, s2, { monthCode: l2, day: d2 } = e2;
      if (void 0 === l2) {
        let { year: o3, era: n3, eraYear: a3 } = e2;
        if (void 0 === o3 && (void 0 === n3 || void 0 === a3))
          throw new TypeError("when `monthCode` is omitted, `year` (or `era` and `eraYear`) and `month` are required");
        ({ monthCode: l2, day: d2 } = this.isoToCalendarDate(this.calendarToIsoDate(e2, t2, r2), r2));
      }
      const m2 = this.isoToCalendarDate({ year: 1972, month: 12, day: 31 }, r2), c2 = m2.monthCode > l2 || m2.monthCode === l2 && m2.day >= d2 ? m2.year : m2.year - 1;
      for (let e3 = 0; e3 < 100; e3++) {
        const m3 = this.adjustCalendarDate({ day: d2, monthCode: l2, year: c2 - e3 }, r2), h2 = this.calendarToIsoDate(m3, "constrain", r2), u2 = this.isoToCalendarDate(h2, r2);
        if ({ year: o2, month: n2, day: a2 } = h2, u2.monthCode === l2 && u2.day === d2)
          return { month: n2, day: a2, year: o2 };
        "constrain" === t2 && (void 0 === i2 || u2.monthCode === i2.monthCode && u2.day > i2.day) && (i2 = u2, s2 = h2);
      }
      if ("constrain" === t2 && void 0 !== s2)
        return s2;
      throw new RangeError(`No recent ${this.id} year with monthCode ${l2} and day ${d2}`);
    }
  };
  var HebrewHelper = class extends HelperBase {
    constructor() {
      super(...arguments), this.id = "hebrew", this.calendarType = "lunisolar", this.months = { Tishri: { leap: 1, regular: 1, monthCode: "M01", days: 30 }, Heshvan: { leap: 2, regular: 2, monthCode: "M02", days: { min: 29, max: 30 } }, Kislev: { leap: 3, regular: 3, monthCode: "M03", days: { min: 29, max: 30 } }, Tevet: { leap: 4, regular: 4, monthCode: "M04", days: 29 }, Shevat: { leap: 5, regular: 5, monthCode: "M05", days: 30 }, Adar: { leap: void 0, regular: 6, monthCode: "M06", days: 29 }, "Adar I": { leap: 6, regular: void 0, monthCode: "M05L", days: 30 }, "Adar II": { leap: 7, regular: void 0, monthCode: "M06", days: 29 }, Nisan: { leap: 8, regular: 7, monthCode: "M07", days: 30 }, Iyar: { leap: 9, regular: 8, monthCode: "M08", days: 29 }, Sivan: { leap: 10, regular: 9, monthCode: "M09", days: 30 }, Tamuz: { leap: 11, regular: 10, monthCode: "M10", days: 29 }, Av: { leap: 12, regular: 11, monthCode: "M11", days: 30 }, Elul: { leap: 13, regular: 12, monthCode: "M12", days: 29 } }, this.hasEra = false;
    }
    inLeapYear(e2) {
      const { year: t2 } = e2;
      return (7 * t2 + 1) % 19 < 7;
    }
    monthsInYear(e2) {
      return this.inLeapYear(e2) ? 13 : 12;
    }
    minimumMonthLength(e2) {
      return this.minMaxMonthLength(e2, "min");
    }
    maximumMonthLength(e2) {
      return this.minMaxMonthLength(e2, "max");
    }
    minMaxMonthLength(e2, t2) {
      const { month: r2, year: o2 } = e2, n2 = this.getMonthCode(o2, r2), a2 = wt(this.months).find((e3) => e3[1].monthCode === n2);
      if (void 0 === a2)
        throw new RangeError(`unmatched Hebrew month: ${r2}`);
      const i2 = a2[1].days;
      return "number" == typeof i2 ? i2 : i2[t2];
    }
    estimateIsoDate(e2) {
      const { year: t2 } = e2;
      return { year: t2 - 3760, month: 1, day: 1 };
    }
    getMonthCode(e2, t2) {
      return this.inLeapYear({ year: e2 }) ? 6 === t2 ? buildMonthCode(5, true) : buildMonthCode(t2 < 6 ? t2 : t2 - 1) : buildMonthCode(t2);
    }
    adjustCalendarDate(e2, t2, r2 = "constrain", o2 = false) {
      let { year: n2, eraYear: a2, month: i2, monthCode: s2, day: l2, monthExtra: d2 } = e2;
      if (void 0 === n2 && void 0 !== a2 && (n2 = a2), void 0 === a2 && void 0 !== n2 && (a2 = n2), o2) {
        if (d2) {
          const e3 = this.months[d2];
          if (!e3)
            throw new RangeError(`Unrecognized month from formatToParts: ${d2}`);
          i2 = this.inLeapYear({ year: n2 }) ? e3.leap : e3.regular;
        }
        s2 = this.getMonthCode(n2, i2);
        return { year: n2, month: i2, day: l2, era: void 0, eraYear: a2, monthCode: s2 };
      }
      if (this.validateCalendarDate(e2), void 0 === i2)
        if (s2.endsWith("L")) {
          if ("M05L" !== s2)
            throw new RangeError(`Hebrew leap month must have monthCode M05L, not ${s2}`);
          if (i2 = 6, !this.inLeapYear({ year: n2 })) {
            if ("reject" === r2)
              throw new RangeError(`Hebrew monthCode M05L is invalid in year ${n2} which is not a leap year`);
            i2 = 6, s2 = "M06";
          }
        } else {
          i2 = monthCodeNumberPart(s2), this.inLeapYear({ year: n2 }) && i2 >= 6 && i2++;
          const e3 = this.monthsInYear({ year: n2 });
          if (i2 < 1 || i2 > e3)
            throw new RangeError(`Invalid monthCode: ${s2}`);
        }
      else if ("reject" === r2 ? (RejectToRange(i2, 1, this.monthsInYear({ year: n2 })), RejectToRange(l2, 1, this.maximumMonthLength({ year: n2, month: i2 }))) : (i2 = ConstrainToRange(i2, 1, this.monthsInYear({ year: n2 })), l2 = ConstrainToRange(l2, 1, this.maximumMonthLength({ year: n2, month: i2 }))), void 0 === s2)
        s2 = this.getMonthCode(n2, i2);
      else {
        if (this.getMonthCode(n2, i2) !== s2)
          throw new RangeError(`monthCode ${s2} doesn't correspond to month ${i2} in Hebrew year ${n2}`);
      }
      return { ...e2, day: l2, month: i2, monthCode: s2, year: n2, eraYear: a2 };
    }
  };
  var IslamicBaseHelper = class extends HelperBase {
    constructor() {
      super(...arguments), this.calendarType = "lunar", this.DAYS_PER_ISLAMIC_YEAR = 354 + 11 / 30, this.DAYS_PER_ISO_YEAR = 365.2425, this.constantEra = "ah";
    }
    inLeapYear(e2, t2) {
      return 30 === this.daysInMonth({ year: e2.year, month: 12, day: 1 }, t2);
    }
    monthsInYear() {
      return 12;
    }
    minimumMonthLength() {
      return 29;
    }
    maximumMonthLength() {
      return 30;
    }
    estimateIsoDate(e2) {
      const { year: t2 } = this.adjustCalendarDate(e2);
      return { year: St(t2 * this.DAYS_PER_ISLAMIC_YEAR / this.DAYS_PER_ISO_YEAR) + 622, month: 1, day: 1 };
    }
  };
  var IslamicHelper = class extends IslamicBaseHelper {
    constructor() {
      super(...arguments), this.id = "islamic";
    }
  };
  var IslamicUmalquraHelper = class extends IslamicBaseHelper {
    constructor() {
      super(...arguments), this.id = "islamic-umalqura";
    }
  };
  var IslamicTblaHelper = class extends IslamicBaseHelper {
    constructor() {
      super(...arguments), this.id = "islamic-tbla";
    }
  };
  var IslamicCivilHelper = class extends IslamicBaseHelper {
    constructor() {
      super(...arguments), this.id = "islamic-civil";
    }
  };
  var IslamicRgsaHelper = class extends IslamicBaseHelper {
    constructor() {
      super(...arguments), this.id = "islamic-rgsa";
    }
  };
  var IslamicCcHelper = class extends IslamicBaseHelper {
    constructor() {
      super(...arguments), this.id = "islamicc";
    }
  };
  var PersianHelper = class extends HelperBase {
    constructor() {
      super(...arguments), this.id = "persian", this.calendarType = "solar", this.constantEra = "ap";
    }
    inLeapYear(e2, t2) {
      return IslamicHelper.prototype.inLeapYear.call(this, e2, t2);
    }
    monthsInYear() {
      return 12;
    }
    minimumMonthLength(e2) {
      const { month: t2 } = e2;
      return 12 === t2 ? 29 : t2 <= 6 ? 31 : 30;
    }
    maximumMonthLength(e2) {
      const { month: t2 } = e2;
      return 12 === t2 ? 30 : t2 <= 6 ? 31 : 30;
    }
    estimateIsoDate(e2) {
      const { year: t2 } = this.adjustCalendarDate(e2);
      return { year: t2 + 621, month: 1, day: 1 };
    }
  };
  var IndianHelper = class extends HelperBase {
    constructor() {
      super(...arguments), this.id = "indian", this.calendarType = "solar", this.constantEra = "saka", this.months = { 1: { length: 30, month: 3, day: 22, leap: { length: 31, month: 3, day: 21 } }, 2: { length: 31, month: 4, day: 21 }, 3: { length: 31, month: 5, day: 22 }, 4: { length: 31, month: 6, day: 22 }, 5: { length: 31, month: 7, day: 23 }, 6: { length: 31, month: 8, day: 23 }, 7: { length: 30, month: 9, day: 23 }, 8: { length: 30, month: 10, day: 23 }, 9: { length: 30, month: 11, day: 22 }, 10: { length: 30, month: 12, day: 22 }, 11: { length: 30, month: 1, nextYear: true, day: 21 }, 12: { length: 30, month: 2, nextYear: true, day: 20 } }, this.vulnerableToBceBug = "10/11/-79 Saka" !== (/* @__PURE__ */ new Date("0000-01-01T00:00Z")).toLocaleDateString("en-US-u-ca-indian", { timeZone: "UTC" });
    }
    inLeapYear(e2) {
      return isGregorianLeapYear(e2.year + 78);
    }
    monthsInYear() {
      return 12;
    }
    minimumMonthLength(e2) {
      return this.getMonthInfo(e2).length;
    }
    maximumMonthLength(e2) {
      return this.getMonthInfo(e2).length;
    }
    getMonthInfo(e2) {
      const { month: t2 } = e2;
      let r2 = this.months[t2];
      if (void 0 === r2)
        throw new RangeError(`Invalid month: ${t2}`);
      return this.inLeapYear(e2) && r2.leap && (r2 = r2.leap), r2;
    }
    estimateIsoDate(e2) {
      const t2 = this.adjustCalendarDate(e2), r2 = this.getMonthInfo(t2);
      return AddISODate(t2.year + 78 + (r2.nextYear ? 1 : 0), r2.month, r2.day, 0, 0, 0, t2.day - 1, "constrain");
    }
    checkIcuBugs(e2) {
      if (this.vulnerableToBceBug && e2.year < 1)
        throw new RangeError(`calendar '${this.id}' is broken for ISO dates before 0001-01-01 (see https://bugs.chromium.org/p/v8/issues/detail?id=10529)`);
    }
  };
  function isGregorianLeapYear(e2) {
    return e2 % 4 == 0 && (e2 % 100 != 0 || e2 % 400 == 0);
  }
  var GregorianBaseHelper = class extends HelperBase {
    constructor(e2, t2) {
      super(), this.calendarType = "solar", this.v8IsVulnerableToJulianBug = (/* @__PURE__ */ new Date("+001001-01-01T00:00Z")).toLocaleDateString("en-US-u-ca-japanese", { timeZone: "UTC" }).startsWith("12"), this.calendarIsVulnerableToJulianBug = false, this.id = e2;
      const { eras: r2, anchorEra: o2 } = function adjustEras(e3) {
        let t3, r3 = e3;
        if (0 === r3.length)
          throw new RangeError("Invalid era data: eras are required");
        if (1 === r3.length && r3[0].reverseOf)
          throw new RangeError("Invalid era data: anchor era cannot count years backwards");
        if (1 === r3.length && !r3[0].name)
          throw new RangeError("Invalid era data: at least one named era is required");
        if (r3.filter((e4) => null != e4.reverseOf).length > 1)
          throw new RangeError("Invalid era data: only one era can count years backwards");
        r3.forEach((e4) => {
          if (e4.isAnchor || !e4.anchorEpoch && !e4.reverseOf) {
            if (t3)
              throw new RangeError("Invalid era data: cannot have multiple anchor eras");
            t3 = e4, e4.anchorEpoch = { year: e4.hasYearZero ? 0 : 1 };
          } else if (!e4.name)
            throw new RangeError("If era name is blank, it must be the anchor era");
        }), r3 = r3.filter((e4) => e4.name), r3.forEach((e4) => {
          const { reverseOf: t4 } = e4;
          if (t4) {
            const o4 = r3.find((e5) => e5.name === t4);
            if (void 0 === o4)
              throw new RangeError(`Invalid era data: unmatched reverseOf era: ${t4}`);
            e4.reverseOf = o4, e4.anchorEpoch = o4.anchorEpoch, e4.isoEpoch = o4.isoEpoch;
          }
          void 0 === e4.anchorEpoch.month && (e4.anchorEpoch.month = 1), void 0 === e4.anchorEpoch.day && (e4.anchorEpoch.day = 1);
        }), yt.call(r3, (e4, t4) => {
          if (e4.reverseOf)
            return 1;
          if (t4.reverseOf)
            return -1;
          if (!e4.isoEpoch || !t4.isoEpoch)
            throw new RangeError("Invalid era data: missing ISO epoch");
          return t4.isoEpoch.year - e4.isoEpoch.year;
        });
        const o3 = r3[r3.length - 1].reverseOf;
        if (o3 && o3 !== r3[r3.length - 2])
          throw new RangeError("Invalid era data: invalid reverse-sign era");
        return r3.forEach((e4, t4) => {
          e4.genericName = "era" + (r3.length - 1 - t4);
        }), { eras: r3, anchorEra: t3 || r3[0] };
      }(t2);
      this.anchorEra = o2, this.eras = r2;
    }
    inLeapYear(e2) {
      const { year: t2 } = this.estimateIsoDate({ month: 1, day: 1, year: e2.year });
      return isGregorianLeapYear(t2);
    }
    monthsInYear() {
      return 12;
    }
    minimumMonthLength(e2) {
      const { month: t2 } = e2;
      return 2 === t2 ? this.inLeapYear(e2) ? 29 : 28 : [4, 6, 9, 11].indexOf(t2) >= 0 ? 30 : 31;
    }
    maximumMonthLength(e2) {
      return this.minimumMonthLength(e2);
    }
    completeEraYear(e2) {
      const checkField = (t3, r3) => {
        const o3 = e2[t3];
        if (null != o3 && o3 != r3)
          throw new RangeError(`Input ${t3} ${o3} doesn't match calculated value ${r3}`);
      }, eraFromYear = (t3) => {
        let r3;
        const o3 = { ...e2, year: t3 }, n2 = this.eras.find((e3, n3) => {
          if (n3 === this.eras.length - 1) {
            if (e3.reverseOf) {
              if (t3 > 0)
                throw new RangeError(`Signed year ${t3} is invalid for era ${e3.name}`);
              return r3 = e3.anchorEpoch.year - t3, true;
            }
            return r3 = t3 - e3.anchorEpoch.year + (e3.hasYearZero ? 0 : 1), true;
          }
          return this.compareCalendarDates(o3, e3.anchorEpoch) >= 0 && (r3 = t3 - e3.anchorEpoch.year + (e3.hasYearZero ? 0 : 1), true);
        });
        if (!n2)
          throw new RangeError(`Year ${t3} was not matched by any era`);
        return { eraYear: r3, era: n2.name };
      };
      let { year: t2, eraYear: r2, era: o2 } = e2;
      if (null != t2)
        ({ eraYear: r2, era: o2 } = eraFromYear(t2)), checkField("era", o2), checkField("eraYear", r2);
      else {
        if (null == r2)
          throw new RangeError("Either `year` or `eraYear` and `era` are required");
        {
          const e3 = void 0 === o2 ? void 0 : this.eras.find((e4) => e4.name === o2 || e4.genericName === o2);
          if (!e3)
            throw new RangeError(`Era ${o2} (ISO year ${r2}) was not matched by any era`);
          if (r2 < 1 && e3.reverseOf)
            throw new RangeError(`Years in ${o2} era must be positive, not ${t2}`);
          t2 = e3.reverseOf ? e3.anchorEpoch.year - r2 : r2 + e3.anchorEpoch.year - (e3.hasYearZero ? 0 : 1), checkField("year", t2), { eraYear: r2, era: o2 } = eraFromYear(t2);
        }
      }
      return { ...e2, year: t2, eraYear: r2, era: o2 };
    }
    adjustCalendarDate(e2, t2, r2 = "constrain") {
      let o2 = e2;
      const { month: n2, monthCode: a2 } = o2;
      return void 0 === n2 && (o2 = { ...o2, month: monthCodeNumberPart(a2) }), this.validateCalendarDate(o2), o2 = this.completeEraYear(o2), super.adjustCalendarDate(o2, t2, r2);
    }
    estimateIsoDate(e2) {
      const t2 = this.adjustCalendarDate(e2), { year: r2, month: o2, day: n2 } = t2, { anchorEra: a2 } = this;
      return RegulateISODate(r2 + a2.isoEpoch.year - (a2.hasYearZero ? 0 : 1), o2, n2, "constrain");
    }
    checkIcuBugs(e2) {
      if (this.calendarIsVulnerableToJulianBug && this.v8IsVulnerableToJulianBug) {
        if (CompareISODate(e2.year, e2.month, e2.day, 1582, 10, 15) < 0)
          throw new RangeError(`calendar '${this.id}' is broken for ISO dates before 1582-10-15 (see https://bugs.chromium.org/p/chromium/issues/detail?id=1173158)`);
      }
    }
  };
  var OrthodoxBaseHelper = class extends GregorianBaseHelper {
    constructor(e2, t2) {
      super(e2, t2);
    }
    inLeapYear(e2) {
      const { year: t2 } = e2;
      return (t2 + 1) % 4 == 0;
    }
    monthsInYear() {
      return 13;
    }
    minimumMonthLength(e2) {
      const { month: t2 } = e2;
      return 13 === t2 ? this.inLeapYear(e2) ? 6 : 5 : 30;
    }
    maximumMonthLength(e2) {
      return this.minimumMonthLength(e2);
    }
  };
  var EthioaaHelper = class extends OrthodoxBaseHelper {
    constructor() {
      super("ethioaa", [{ name: "era0", isoEpoch: { year: -5492, month: 7, day: 17 } }]);
    }
  };
  var CopticHelper = class extends OrthodoxBaseHelper {
    constructor() {
      super("coptic", [{ name: "era1", isoEpoch: { year: 284, month: 8, day: 29 } }, { name: "era0", reverseOf: "era1" }]);
    }
  };
  var EthiopicHelper = class extends OrthodoxBaseHelper {
    constructor() {
      super("ethiopic", [{ name: "era0", isoEpoch: { year: -5492, month: 7, day: 17 } }, { name: "era1", isoEpoch: { year: 8, month: 8, day: 27 }, anchorEpoch: { year: 5501 } }]);
    }
  };
  var RocHelper = class extends GregorianBaseHelper {
    constructor() {
      super("roc", [{ name: "minguo", isoEpoch: { year: 1912, month: 1, day: 1 } }, { name: "before-roc", reverseOf: "minguo" }]), this.calendarIsVulnerableToJulianBug = true;
    }
  };
  var BuddhistHelper = class extends GregorianBaseHelper {
    constructor() {
      super("buddhist", [{ name: "be", hasYearZero: true, isoEpoch: { year: -543, month: 1, day: 1 } }]), this.calendarIsVulnerableToJulianBug = true;
    }
  };
  var GregoryHelper = class extends GregorianBaseHelper {
    constructor() {
      super("gregory", [{ name: "ce", isoEpoch: { year: 1, month: 1, day: 1 } }, { name: "bce", reverseOf: "ce" }]);
    }
    reviseIntlEra(e2) {
      let { era: t2, eraYear: r2 } = e2;
      return "bc" !== t2 && "b" !== t2 || (t2 = "bce"), "ad" !== t2 && "a" !== t2 || (t2 = "ce"), { era: t2, eraYear: r2 };
    }
  };
  var JapaneseHelper = class extends GregorianBaseHelper {
    constructor() {
      super("japanese", [{ name: "reiwa", isoEpoch: { year: 2019, month: 5, day: 1 }, anchorEpoch: { year: 2019, month: 5, day: 1 } }, { name: "heisei", isoEpoch: { year: 1989, month: 1, day: 8 }, anchorEpoch: { year: 1989, month: 1, day: 8 } }, { name: "showa", isoEpoch: { year: 1926, month: 12, day: 25 }, anchorEpoch: { year: 1926, month: 12, day: 25 } }, { name: "taisho", isoEpoch: { year: 1912, month: 7, day: 30 }, anchorEpoch: { year: 1912, month: 7, day: 30 } }, { name: "meiji", isoEpoch: { year: 1868, month: 9, day: 8 }, anchorEpoch: { year: 1868, month: 9, day: 8 } }, { name: "ce", isoEpoch: { year: 1, month: 1, day: 1 } }, { name: "bce", reverseOf: "ce" }]), this.calendarIsVulnerableToJulianBug = true, this.eraLength = "long", this.erasBeginMidYear = true;
    }
    reviseIntlEra(e2, t2) {
      const { era: r2, eraYear: o2 } = e2, { year: n2 } = t2;
      return this.eras.find((e3) => e3.name === r2) ? { era: r2, eraYear: o2 } : n2 < 1 ? { era: "bce", eraYear: 1 - n2 } : { era: "ce", eraYear: n2 };
    }
  };
  var ChineseBaseHelper = class extends HelperBase {
    constructor() {
      super(...arguments), this.calendarType = "lunisolar", this.hasEra = false;
    }
    inLeapYear(e2, t2) {
      const r2 = this.getMonthList(e2.year, t2);
      return 13 === wt(r2).length;
    }
    monthsInYear(e2, t2) {
      return this.inLeapYear(e2, t2) ? 13 : 12;
    }
    minimumMonthLength() {
      return 29;
    }
    maximumMonthLength() {
      return 30;
    }
    getMonthList(e2, t2) {
      if (void 0 === e2)
        throw new TypeError("Missing year");
      const r2 = JSON.stringify({ func: "getMonthList", calendarYear: e2, id: this.id }), o2 = t2.get(r2);
      if (o2)
        return o2;
      const n2 = this.getFormatter(), getCalendarDate = (e3, t3) => {
        const r3 = toUtcIsoDateString({ isoYear: e3, isoMonth: 2, isoDay: 1 }), o3 = new Date(r3);
        o3.setUTCDate(t3 + 1);
        const a3 = n2.formatToParts(o3), i3 = a3.find((e4) => "month" === e4.type).value, s3 = +a3.find((e4) => "day" === e4.type).value;
        let l3 = a3.find((e4) => "relatedYear" === e4.type);
        if (void 0 === l3)
          throw new RangeError(`Intl.DateTimeFormat.formatToParts lacks relatedYear in ${this.id} calendar. Try Node 14+ or modern browsers.`);
        return l3 = +l3.value, { calendarMonthString: i3, calendarDay: s3, calendarYearToVerify: l3 };
      };
      let a2 = 17, { calendarMonthString: i2, calendarDay: s2, calendarYearToVerify: l2 } = getCalendarDate(e2, a2);
      "1" !== i2 && (a2 += 29, { calendarMonthString: i2, calendarDay: s2 } = getCalendarDate(e2, a2)), a2 -= s2 - 5;
      const d2 = {};
      let m2, c2, h2 = 1, u2 = false;
      do {
        ({ calendarMonthString: i2, calendarDay: s2, calendarYearToVerify: l2 } = getCalendarDate(e2, a2)), m2 && (d2[c2].daysInMonth = m2 + 30 - s2), l2 !== e2 ? u2 = true : (d2[i2] = { monthIndex: h2++ }, a2 += 30), m2 = s2, c2 = i2;
      } while (!u2);
      return d2[c2].daysInMonth = m2 + 30 - s2, t2.set(r2, d2), d2;
    }
    estimateIsoDate(e2) {
      const { year: t2, month: r2 } = e2;
      return { year: t2, month: r2 >= 12 ? 12 : r2 + 1, day: 1 };
    }
    adjustCalendarDate(e2, t2, r2 = "constrain", o2 = false) {
      let { year: n2, month: a2, monthExtra: i2, day: s2, monthCode: l2, eraYear: d2 } = e2;
      if (o2) {
        if (n2 = d2, i2 && "bis" !== i2)
          throw new RangeError(`Unexpected leap month suffix: ${i2}`);
        const e3 = buildMonthCode(a2, void 0 !== i2), r3 = `${a2}${i2 || ""}`, o3 = this.getMonthList(n2, t2)[r3];
        if (void 0 === o3)
          throw new RangeError(`Unmatched month ${r3} in Chinese year ${n2}`);
        return a2 = o3.monthIndex, { year: n2, month: a2, day: s2, era: void 0, eraYear: d2, monthCode: e3 };
      }
      if (this.validateCalendarDate(e2), void 0 === n2 && (n2 = d2), void 0 === d2 && (d2 = n2), void 0 === a2) {
        const e3 = this.getMonthList(n2, t2);
        let o3 = l2.replace("L", "bis").slice(1);
        "0" === o3[0] && (o3 = o3.slice(1));
        let i3 = e3[o3];
        if (a2 = i3 && i3.monthIndex, void 0 === a2 && l2.endsWith("L") && "M13L" != l2 && "constrain" === r2) {
          let t3 = l2.slice(1, -1);
          "0" === t3[0] && (t3 = t3.slice(1)), i3 = e3[t3], i3 && (a2 = i3.monthIndex, l2 = buildMonthCode(t3));
        }
        if (void 0 === a2)
          throw new RangeError(`Unmatched month ${l2} in Chinese year ${n2}`);
      } else if (void 0 === l2) {
        const e3 = this.getMonthList(n2, t2), o3 = wt(e3), i3 = o3.length;
        "reject" === r2 ? (RejectToRange(a2, 1, i3), RejectToRange(s2, 1, this.maximumMonthLength())) : (a2 = ConstrainToRange(a2, 1, i3), s2 = ConstrainToRange(s2, 1, this.maximumMonthLength()));
        const d3 = o3.find(([, e4]) => e4.monthIndex === a2);
        if (void 0 === d3)
          throw new RangeError(`Invalid month ${a2} in Chinese year ${n2}`);
        l2 = buildMonthCode(d3[0].replace("bis", ""), -1 !== d3[0].indexOf("bis"));
      } else {
        const e3 = this.getMonthList(n2, t2);
        let r3 = l2.replace("L", "bis").slice(1);
        "0" === r3[0] && (r3 = r3.slice(1));
        const o3 = e3[r3];
        if (!o3)
          throw new RangeError(`Unmatched monthCode ${l2} in Chinese year ${n2}`);
        if (a2 !== o3.monthIndex)
          throw new RangeError(`monthCode ${l2} doesn't correspond to month ${a2} in Chinese year ${n2}`);
      }
      return { ...e2, year: n2, eraYear: d2, month: a2, monthCode: l2, day: s2 };
    }
  };
  var ChineseHelper = class extends ChineseBaseHelper {
    constructor() {
      super(...arguments), this.id = "chinese";
    }
  };
  var DangiHelper = class extends ChineseBaseHelper {
    constructor() {
      super(...arguments), this.id = "dangi";
    }
  };
  var NonIsoCalendar = class {
    constructor(e2) {
      this.helper = e2;
    }
    dateFromFields(e2, t2, r2) {
      const o2 = new OneObjectCache(), n2 = PrepareTemporalFields(e2, this.fields(["day", "month", "monthCode", "year"]), []), a2 = ToTemporalOverflow(t2), { year: i2, month: s2, day: l2 } = this.helper.calendarToIsoDate(n2, a2, o2), d2 = CreateTemporalDate(i2, s2, l2, r2);
      return o2.setObject(d2), d2;
    }
    yearMonthFromFields(e2, t2, r2) {
      const o2 = new OneObjectCache(), n2 = PrepareTemporalFields(e2, this.fields(["month", "monthCode", "year"]), []), a2 = ToTemporalOverflow(t2), { year: i2, month: s2, day: l2 } = this.helper.calendarToIsoDate({ ...n2, day: 1 }, a2, o2), d2 = CreateTemporalYearMonth(i2, s2, r2, l2);
      return o2.setObject(d2), d2;
    }
    monthDayFromFields(e2, t2, r2) {
      const o2 = new OneObjectCache(), n2 = PrepareTemporalFields(e2, this.fields(["day", "month", "monthCode", "year"]), []), a2 = ToTemporalOverflow(t2), { year: i2, month: s2, day: l2 } = this.helper.monthDayFromFields(n2, a2, o2), d2 = CreateTemporalMonthDay(s2, l2, r2, i2);
      return o2.setObject(d2), d2;
    }
    fields(e2) {
      let t2 = e2;
      return Tt.call(t2, "year") && (t2 = [...t2, "era", "eraYear"]), t2;
    }
    fieldKeysToIgnore(e2) {
      const t2 = new Dt();
      for (let r2 = 0; r2 < e2.length; r2++) {
        const o2 = e2[r2];
        switch (Call(vt, t2, [o2]), o2) {
          case "era":
            Call(vt, t2, ["eraYear"]), Call(vt, t2, ["year"]);
            break;
          case "eraYear":
            Call(vt, t2, ["era"]), Call(vt, t2, ["year"]);
            break;
          case "year":
            Call(vt, t2, ["era"]), Call(vt, t2, ["eraYear"]);
            break;
          case "month":
            Call(vt, t2, ["monthCode"]), this.helper.erasBeginMidYear && (Call(vt, t2, ["era"]), Call(vt, t2, ["eraYear"]));
            break;
          case "monthCode":
            Call(vt, t2, ["month"]), this.helper.erasBeginMidYear && (Call(vt, t2, ["era"]), Call(vt, t2, ["eraYear"]));
            break;
          case "day":
            this.helper.erasBeginMidYear && (Call(vt, t2, ["era"]), Call(vt, t2, ["eraYear"]));
        }
      }
      return [...Call(Ct, t2, [])];
    }
    dateAdd(e2, t2, r2, o2, n2, a2, i2) {
      const s2 = OneObjectCache.getCacheForObject(e2), l2 = this.helper.temporalToCalendarDate(e2, s2), d2 = this.helper.addCalendar(l2, { years: t2, months: r2, weeks: o2, days: n2 }, a2, s2), m2 = this.helper.calendarToIsoDate(d2, "constrain", s2), { year: c2, month: h2, day: u2 } = m2, T2 = CreateTemporalDate(c2, h2, u2, i2);
      return new OneObjectCache(s2).setObject(T2), T2;
    }
    dateUntil(e2, t2, r2) {
      const o2 = OneObjectCache.getCacheForObject(e2), n2 = OneObjectCache.getCacheForObject(t2), a2 = this.helper.temporalToCalendarDate(e2, o2), i2 = this.helper.temporalToCalendarDate(t2, n2);
      return this.helper.untilCalendar(a2, i2, r2, o2);
    }
    year(e2) {
      const t2 = OneObjectCache.getCacheForObject(e2);
      return this.helper.temporalToCalendarDate(e2, t2).year;
    }
    month(e2) {
      const t2 = OneObjectCache.getCacheForObject(e2);
      return this.helper.temporalToCalendarDate(e2, t2).month;
    }
    day(e2) {
      const t2 = OneObjectCache.getCacheForObject(e2);
      return this.helper.temporalToCalendarDate(e2, t2).day;
    }
    era(e2) {
      if (!this.helper.hasEra)
        return;
      const t2 = OneObjectCache.getCacheForObject(e2);
      return this.helper.temporalToCalendarDate(e2, t2).era;
    }
    eraYear(e2) {
      if (!this.helper.hasEra)
        return;
      const t2 = OneObjectCache.getCacheForObject(e2);
      return this.helper.temporalToCalendarDate(e2, t2).eraYear;
    }
    monthCode(e2) {
      const t2 = OneObjectCache.getCacheForObject(e2);
      return this.helper.temporalToCalendarDate(e2, t2).monthCode;
    }
    dayOfWeek(e2) {
      return Ot.iso8601.dayOfWeek(e2);
    }
    dayOfYear(e2) {
      const t2 = OneObjectCache.getCacheForObject(e2), r2 = this.helper.isoToCalendarDate(e2, t2), o2 = this.helper.startOfCalendarYear(r2);
      return this.helper.calendarDaysUntil(o2, r2, t2) + 1;
    }
    weekOfYear(e2) {
      return Ot.iso8601.weekOfYear(e2);
    }
    yearOfWeek(e2) {
      return Ot.iso8601.yearOfWeek(e2);
    }
    daysInWeek(e2) {
      return Ot.iso8601.daysInWeek(e2);
    }
    daysInMonth(e2) {
      const t2 = OneObjectCache.getCacheForObject(e2), r2 = this.helper.temporalToCalendarDate(e2, t2), o2 = this.helper.maximumMonthLength(r2);
      if (o2 === this.helper.minimumMonthLength(r2))
        return o2;
      const n2 = this.helper.startOfCalendarMonth(r2), a2 = this.helper.addMonthsCalendar(n2, 1, "constrain", t2);
      return this.helper.calendarDaysUntil(n2, a2, t2);
    }
    daysInYear(e2) {
      let t2 = e2;
      HasSlot(t2, i) || (t2 = ToTemporalDate(t2));
      const r2 = OneObjectCache.getCacheForObject(t2), o2 = this.helper.temporalToCalendarDate(t2, r2), n2 = this.helper.startOfCalendarYear(o2), a2 = this.helper.addCalendar(n2, { years: 1 }, "constrain", r2);
      return this.helper.calendarDaysUntil(n2, a2, r2);
    }
    monthsInYear(e2) {
      const t2 = OneObjectCache.getCacheForObject(e2), r2 = this.helper.temporalToCalendarDate(e2, t2);
      return this.helper.monthsInYear(r2, t2);
    }
    inLeapYear(e2) {
      let t2 = e2;
      HasSlot(t2, i) || (t2 = ToTemporalDate(t2));
      const r2 = OneObjectCache.getCacheForObject(t2), o2 = this.helper.temporalToCalendarDate(t2, r2);
      return this.helper.inLeapYear(o2, r2);
    }
  };
  for (const e2 of [HebrewHelper, PersianHelper, EthiopicHelper, EthioaaHelper, CopticHelper, ChineseHelper, DangiHelper, RocHelper, IndianHelper, BuddhistHelper, GregoryHelper, JapaneseHelper, IslamicHelper, IslamicUmalquraHelper, IslamicTblaHelper, IslamicCivilHelper, IslamicRgsaHelper, IslamicCcHelper]) {
    const t2 = new e2();
    Ot[t2.id] = new NonIsoCalendar(t2);
  }
  var PlainDate = class _PlainDate {
    constructor(e2, t2, r2, o2 = "iso8601") {
      CreateTemporalDateSlots(this, ToIntegerWithTruncation(e2), ToIntegerWithTruncation(t2), ToIntegerWithTruncation(r2), ToTemporalCalendarSlotValue(o2));
    }
    get calendarId() {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      return ToTemporalCalendarIdentifier(GetSlot(this, p));
    }
    get era() {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      return CalendarEra(GetSlot(this, p), this);
    }
    get eraYear() {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      return CalendarEraYear(GetSlot(this, p), this);
    }
    get year() {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      return CalendarYear(GetSlot(this, p), this);
    }
    get month() {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      return CalendarMonth(GetSlot(this, p), this);
    }
    get monthCode() {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      return CalendarMonthCode(GetSlot(this, p), this);
    }
    get day() {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      return CalendarDay(GetSlot(this, p), this);
    }
    get dayOfWeek() {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      return CalendarDayOfWeek(GetSlot(this, p), this);
    }
    get dayOfYear() {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      return CalendarDayOfYear(GetSlot(this, p), this);
    }
    get weekOfYear() {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      return CalendarWeekOfYear(GetSlot(this, p), this);
    }
    get yearOfWeek() {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      return CalendarYearOfWeek(GetSlot(this, p), this);
    }
    get daysInWeek() {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      return CalendarDaysInWeek(GetSlot(this, p), this);
    }
    get daysInMonth() {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      return CalendarDaysInMonth(GetSlot(this, p), this);
    }
    get daysInYear() {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      return CalendarDaysInYear(GetSlot(this, p), this);
    }
    get monthsInYear() {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      return CalendarMonthsInYear(GetSlot(this, p), this);
    }
    get inLeapYear() {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      return CalendarInLeapYear(GetSlot(this, p), this);
    }
    with(e2, t2) {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      if (!IsObject(e2))
        throw new TypeError("invalid argument");
      RejectTemporalLikeObject(e2);
      const r2 = GetOptionsObject(t2), o2 = GetSlot(this, p), n2 = CalendarFields(o2, ["day", "month", "monthCode", "year"]);
      let a2 = PrepareTemporalFields(this, n2, []);
      return a2 = CalendarMergeFields(o2, a2, PrepareTemporalFields(e2, n2, "partial")), a2 = PrepareTemporalFields(a2, n2, []), CalendarDateFromFields(o2, a2, r2);
    }
    withCalendar(e2) {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      const t2 = ToTemporalCalendarSlotValue(e2);
      return new _PlainDate(GetSlot(this, i), GetSlot(this, s), GetSlot(this, l), t2);
    }
    add(e2, t2) {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      const r2 = ToTemporalDuration(e2), o2 = GetOptionsObject(t2);
      return CalendarDateAdd(GetSlot(this, p), this, r2, o2);
    }
    subtract(e2, t2) {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      const r2 = CreateNegatedTemporalDuration(ToTemporalDuration(e2)), o2 = GetOptionsObject(t2);
      return CalendarDateAdd(GetSlot(this, p), this, r2, o2);
    }
    until(e2, t2) {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      return DifferenceTemporalPlainDate("until", this, e2, t2);
    }
    since(e2, t2) {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      return DifferenceTemporalPlainDate("since", this, e2, t2);
    }
    equals(e2) {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      const t2 = ToTemporalDate(e2);
      for (const e3 of [i, s, l]) {
        if (GetSlot(this, e3) !== GetSlot(t2, e3))
          return false;
      }
      return CalendarEquals(GetSlot(this, p), GetSlot(t2, p));
    }
    toString(e2) {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      return TemporalDateToString(this, ToCalendarNameOption(GetOptionsObject(e2)));
    }
    toJSON() {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      return TemporalDateToString(this);
    }
    toLocaleString(e2, t2) {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      return new ht(e2, t2).format(this);
    }
    valueOf() {
      throw new TypeError("use compare() or equals() to compare Temporal.PlainDate");
    }
    toPlainDateTime(e2) {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      const t2 = GetSlot(this, i), r2 = GetSlot(this, s), o2 = GetSlot(this, l), n2 = GetSlot(this, p);
      if (void 0 === e2)
        return CreateTemporalDateTime(t2, r2, o2, 0, 0, 0, 0, 0, 0, n2);
      const a2 = ToTemporalTime(e2);
      return CreateTemporalDateTime(t2, r2, o2, GetSlot(a2, d), GetSlot(a2, m), GetSlot(a2, c), GetSlot(a2, h), GetSlot(a2, u), GetSlot(a2, T), n2);
    }
    toZonedDateTime(e2) {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      let t2, r2;
      if (IsObject(e2))
        if (IsTemporalTimeZone(e2))
          t2 = e2;
        else {
          const o3 = e2.timeZone;
          void 0 === o3 ? t2 = ToTemporalTimeZoneSlotValue(e2) : (t2 = ToTemporalTimeZoneSlotValue(o3), r2 = e2.plainTime);
        }
      else
        t2 = ToTemporalTimeZoneSlotValue(e2);
      const o2 = GetSlot(this, i), a2 = GetSlot(this, s), f2 = GetSlot(this, l), y2 = GetSlot(this, p);
      let I2 = 0, S2 = 0, g2 = 0, w2 = 0, D2 = 0, G2 = 0;
      void 0 !== r2 && (r2 = ToTemporalTime(r2), I2 = GetSlot(r2, d), S2 = GetSlot(r2, m), g2 = GetSlot(r2, c), w2 = GetSlot(r2, h), D2 = GetSlot(r2, u), G2 = GetSlot(r2, T));
      return CreateTemporalZonedDateTime(GetSlot(GetInstantFor(t2, CreateTemporalDateTime(o2, a2, f2, I2, S2, g2, w2, D2, G2, y2), "compatible"), n), t2, y2);
    }
    toPlainYearMonth() {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      const e2 = GetSlot(this, p);
      return CalendarYearMonthFromFields(e2, PrepareTemporalFields(this, CalendarFields(e2, ["monthCode", "year"]), []));
    }
    toPlainMonthDay() {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      const e2 = GetSlot(this, p);
      return CalendarMonthDayFromFields(e2, PrepareTemporalFields(this, CalendarFields(e2, ["day", "monthCode"]), []));
    }
    getISOFields() {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      return { calendar: GetSlot(this, p), isoDay: GetSlot(this, l), isoMonth: GetSlot(this, s), isoYear: GetSlot(this, i) };
    }
    getCalendar() {
      if (!IsTemporalDate(this))
        throw new TypeError("invalid receiver");
      return ToTemporalCalendarObject(GetSlot(this, p));
    }
    static from(e2, t2) {
      const r2 = GetOptionsObject(t2);
      return IsTemporalDate(e2) ? (ToTemporalOverflow(r2), CreateTemporalDate(GetSlot(e2, i), GetSlot(e2, s), GetSlot(e2, l), GetSlot(e2, p))) : ToTemporalDate(e2, r2);
    }
    static compare(e2, t2) {
      const r2 = ToTemporalDate(e2), o2 = ToTemporalDate(t2);
      return CompareISODate(GetSlot(r2, i), GetSlot(r2, s), GetSlot(r2, l), GetSlot(o2, i), GetSlot(o2, s), GetSlot(o2, l));
    }
  };
  MakeIntrinsicClass(PlainDate, "Temporal.PlainDate");
  var PlainDateTime = class _PlainDateTime {
    constructor(e2, t2, r2, o2 = 0, n2 = 0, a2 = 0, i2 = 0, s2 = 0, l2 = 0, d2 = "iso8601") {
      CreateTemporalDateTimeSlots(this, ToIntegerWithTruncation(e2), ToIntegerWithTruncation(t2), ToIntegerWithTruncation(r2), void 0 === o2 ? 0 : ToIntegerWithTruncation(o2), void 0 === n2 ? 0 : ToIntegerWithTruncation(n2), void 0 === a2 ? 0 : ToIntegerWithTruncation(a2), void 0 === i2 ? 0 : ToIntegerWithTruncation(i2), void 0 === s2 ? 0 : ToIntegerWithTruncation(s2), void 0 === l2 ? 0 : ToIntegerWithTruncation(l2), ToTemporalCalendarSlotValue(d2));
    }
    get calendarId() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return ToTemporalCalendarIdentifier(GetSlot(this, p));
    }
    get year() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarYear(GetSlot(this, p), this);
    }
    get month() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarMonth(GetSlot(this, p), this);
    }
    get monthCode() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarMonthCode(GetSlot(this, p), this);
    }
    get day() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarDay(GetSlot(this, p), this);
    }
    get hour() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, d);
    }
    get minute() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, m);
    }
    get second() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, c);
    }
    get millisecond() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, h);
    }
    get microsecond() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, u);
    }
    get nanosecond() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, T);
    }
    get era() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarEra(GetSlot(this, p), this);
    }
    get eraYear() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarEraYear(GetSlot(this, p), this);
    }
    get dayOfWeek() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarDayOfWeek(GetSlot(this, p), this);
    }
    get dayOfYear() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarDayOfYear(GetSlot(this, p), this);
    }
    get weekOfYear() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarWeekOfYear(GetSlot(this, p), this);
    }
    get yearOfWeek() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarYearOfWeek(GetSlot(this, p), this);
    }
    get daysInWeek() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarDaysInWeek(GetSlot(this, p), this);
    }
    get daysInYear() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarDaysInYear(GetSlot(this, p), this);
    }
    get daysInMonth() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarDaysInMonth(GetSlot(this, p), this);
    }
    get monthsInYear() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarMonthsInYear(GetSlot(this, p), this);
    }
    get inLeapYear() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarInLeapYear(GetSlot(this, p), this);
    }
    with(e2, t2) {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      if (!IsObject(e2))
        throw new TypeError("invalid argument");
      RejectTemporalLikeObject(e2);
      const r2 = GetOptionsObject(t2), o2 = GetSlot(this, p), n2 = CalendarFields(o2, ["day", "hour", "microsecond", "millisecond", "minute", "month", "monthCode", "nanosecond", "second", "year"]);
      let a2 = PrepareTemporalFields(this, n2, []);
      a2 = CalendarMergeFields(o2, a2, PrepareTemporalFields(e2, n2, "partial")), a2 = PrepareTemporalFields(a2, n2, []);
      const { year: i2, month: s2, day: l2, hour: d2, minute: m2, second: c2, millisecond: h2, microsecond: u2, nanosecond: T2 } = InterpretTemporalDateTimeFields(o2, a2, r2);
      return CreateTemporalDateTime(i2, s2, l2, d2, m2, c2, h2, u2, T2, o2);
    }
    withPlainTime(e2) {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      const t2 = GetSlot(this, i), r2 = GetSlot(this, s), o2 = GetSlot(this, l), n2 = GetSlot(this, p);
      if (void 0 === e2)
        return CreateTemporalDateTime(t2, r2, o2, 0, 0, 0, 0, 0, 0, n2);
      const a2 = ToTemporalTime(e2);
      return CreateTemporalDateTime(t2, r2, o2, GetSlot(a2, d), GetSlot(a2, m), GetSlot(a2, c), GetSlot(a2, h), GetSlot(a2, u), GetSlot(a2, T), n2);
    }
    withPlainDate(e2) {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      const t2 = ToTemporalDate(e2), r2 = GetSlot(t2, i), o2 = GetSlot(t2, s), n2 = GetSlot(t2, l);
      let a2 = GetSlot(t2, p);
      const f2 = GetSlot(this, d), y2 = GetSlot(this, m), I2 = GetSlot(this, c), S2 = GetSlot(this, h), g2 = GetSlot(this, u), w2 = GetSlot(this, T);
      return a2 = ConsolidateCalendars(GetSlot(this, p), a2), CreateTemporalDateTime(r2, o2, n2, f2, y2, I2, S2, g2, w2, a2);
    }
    withCalendar(e2) {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      const t2 = ToTemporalCalendarSlotValue(e2);
      return new _PlainDateTime(GetSlot(this, i), GetSlot(this, s), GetSlot(this, l), GetSlot(this, d), GetSlot(this, m), GetSlot(this, c), GetSlot(this, h), GetSlot(this, u), GetSlot(this, T), t2);
    }
    add(e2, t2) {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return AddDurationToOrSubtractDurationFromPlainDateTime("add", this, e2, t2);
    }
    subtract(e2, t2) {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return AddDurationToOrSubtractDurationFromPlainDateTime("subtract", this, e2, t2);
    }
    until(e2, t2) {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return DifferenceTemporalPlainDateTime("until", this, e2, t2);
    }
    since(e2, t2) {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return DifferenceTemporalPlainDateTime("since", this, e2, t2);
    }
    round(e2) {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      if (void 0 === e2)
        throw new TypeError("options parameter is required");
      const t2 = "string" == typeof e2 ? CreateOnePropObject("smallestUnit", e2) : GetOptionsObject(e2), r2 = ToTemporalRoundingIncrement(t2), o2 = ToTemporalRoundingMode(t2, "halfExpand"), n2 = GetTemporalUnit(t2, "smallestUnit", "time", He, ["day"]), a2 = { day: 1, hour: 24, minute: 60, second: 60, millisecond: 1e3, microsecond: 1e3, nanosecond: 1e3 }[n2];
      ValidateTemporalRoundingIncrement(r2, a2, 1 === a2);
      let f2 = GetSlot(this, i), y2 = GetSlot(this, s), I2 = GetSlot(this, l), S2 = GetSlot(this, d), g2 = GetSlot(this, m), w2 = GetSlot(this, c), D2 = GetSlot(this, h), G2 = GetSlot(this, u), v2 = GetSlot(this, T);
      return { year: f2, month: y2, day: I2, hour: S2, minute: g2, second: w2, millisecond: D2, microsecond: G2, nanosecond: v2 } = RoundISODateTime(f2, y2, I2, S2, g2, w2, D2, G2, v2, r2, n2, o2), CreateTemporalDateTime(f2, y2, I2, S2, g2, w2, D2, G2, v2, GetSlot(this, p));
    }
    equals(e2) {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      const t2 = ToTemporalDateTime(e2);
      for (const e3 of [i, s, l, d, m, c, h, u, T]) {
        if (GetSlot(this, e3) !== GetSlot(t2, e3))
          return false;
      }
      return CalendarEquals(GetSlot(this, p), GetSlot(t2, p));
    }
    toString(e2) {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      const t2 = GetOptionsObject(e2), r2 = ToCalendarNameOption(t2), o2 = ToFractionalSecondDigits(t2), n2 = ToTemporalRoundingMode(t2, "trunc"), a2 = GetTemporalUnit(t2, "smallestUnit", "time", void 0);
      if ("hour" === a2)
        throw new RangeError('smallestUnit must be a time unit other than "hour"');
      const { precision: i2, unit: s2, increment: l2 } = ToSecondsStringPrecisionRecord(a2, o2);
      return TemporalDateTimeToString(this, i2, r2, { unit: s2, increment: l2, roundingMode: n2 });
    }
    toJSON() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return TemporalDateTimeToString(this, "auto");
    }
    toLocaleString(e2, t2) {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return new ht(e2, t2).format(this);
    }
    valueOf() {
      throw new TypeError("use compare() or equals() to compare Temporal.PlainDateTime");
    }
    toZonedDateTime(e2, t2) {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      const r2 = ToTemporalTimeZoneSlotValue(e2);
      return CreateTemporalZonedDateTime(GetSlot(GetInstantFor(r2, this, ToTemporalDisambiguation(GetOptionsObject(t2))), n), r2, GetSlot(this, p));
    }
    toPlainDate() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return TemporalDateTimeToDate(this);
    }
    toPlainYearMonth() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      const e2 = GetSlot(this, p);
      return CalendarYearMonthFromFields(e2, PrepareTemporalFields(this, CalendarFields(e2, ["monthCode", "year"]), []));
    }
    toPlainMonthDay() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      const e2 = GetSlot(this, p);
      return CalendarMonthDayFromFields(e2, PrepareTemporalFields(this, CalendarFields(e2, ["day", "monthCode"]), []));
    }
    toPlainTime() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return TemporalDateTimeToTime(this);
    }
    getISOFields() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return { calendar: GetSlot(this, p), isoDay: GetSlot(this, l), isoHour: GetSlot(this, d), isoMicrosecond: GetSlot(this, u), isoMillisecond: GetSlot(this, h), isoMinute: GetSlot(this, m), isoMonth: GetSlot(this, s), isoNanosecond: GetSlot(this, T), isoSecond: GetSlot(this, c), isoYear: GetSlot(this, i) };
    }
    getCalendar() {
      if (!IsTemporalDateTime(this))
        throw new TypeError("invalid receiver");
      return ToTemporalCalendarObject(GetSlot(this, p));
    }
    static from(e2, t2) {
      const r2 = GetOptionsObject(t2);
      return IsTemporalDateTime(e2) ? (ToTemporalOverflow(r2), CreateTemporalDateTime(GetSlot(e2, i), GetSlot(e2, s), GetSlot(e2, l), GetSlot(e2, d), GetSlot(e2, m), GetSlot(e2, c), GetSlot(e2, h), GetSlot(e2, u), GetSlot(e2, T), GetSlot(e2, p))) : ToTemporalDateTime(e2, r2);
    }
    static compare(e2, t2) {
      const r2 = ToTemporalDateTime(e2), o2 = ToTemporalDateTime(t2);
      for (const e3 of [i, s, l, d, m, c, h, u, T]) {
        const t3 = GetSlot(r2, e3), n2 = GetSlot(o2, e3);
        if (t3 !== n2)
          return ComparisonResult(t3 - n2);
      }
      return 0;
    }
  };
  MakeIntrinsicClass(PlainDateTime, "Temporal.PlainDateTime");
  var Duration = class _Duration {
    constructor(e2 = 0, t2 = 0, r2 = 0, o2 = 0, n2 = 0, a2 = 0, i2 = 0, s2 = 0, l2 = 0, d2 = 0) {
      const m2 = void 0 === e2 ? 0 : ToIntegerIfIntegral(e2), c2 = void 0 === t2 ? 0 : ToIntegerIfIntegral(t2), h2 = void 0 === r2 ? 0 : ToIntegerIfIntegral(r2), u2 = void 0 === o2 ? 0 : ToIntegerIfIntegral(o2), T2 = void 0 === n2 ? 0 : ToIntegerIfIntegral(n2), p2 = void 0 === a2 ? 0 : ToIntegerIfIntegral(a2), f2 = void 0 === i2 ? 0 : ToIntegerIfIntegral(i2), y2 = void 0 === s2 ? 0 : ToIntegerIfIntegral(s2), I2 = void 0 === l2 ? 0 : ToIntegerIfIntegral(l2), S2 = void 0 === d2 ? 0 : ToIntegerIfIntegral(d2);
      RejectDuration(m2, c2, h2, u2, T2, p2, f2, y2, I2, S2), N(this), SetSlot(this, w, m2), SetSlot(this, D, c2), SetSlot(this, G, h2), SetSlot(this, v, u2), SetSlot(this, C, T2), SetSlot(this, O, p2), SetSlot(this, b, f2), SetSlot(this, E, y2), SetSlot(this, M, I2), SetSlot(this, R, S2);
    }
    get years() {
      if (!IsTemporalDuration(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, w);
    }
    get months() {
      if (!IsTemporalDuration(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, D);
    }
    get weeks() {
      if (!IsTemporalDuration(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, G);
    }
    get days() {
      if (!IsTemporalDuration(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, v);
    }
    get hours() {
      if (!IsTemporalDuration(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, C);
    }
    get minutes() {
      if (!IsTemporalDuration(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, O);
    }
    get seconds() {
      if (!IsTemporalDuration(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, b);
    }
    get milliseconds() {
      if (!IsTemporalDuration(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, E);
    }
    get microseconds() {
      if (!IsTemporalDuration(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, M);
    }
    get nanoseconds() {
      if (!IsTemporalDuration(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, R);
    }
    get sign() {
      if (!IsTemporalDuration(this))
        throw new TypeError("invalid receiver");
      return DurationSign(GetSlot(this, w), GetSlot(this, D), GetSlot(this, G), GetSlot(this, v), GetSlot(this, C), GetSlot(this, O), GetSlot(this, b), GetSlot(this, E), GetSlot(this, M), GetSlot(this, R));
    }
    get blank() {
      if (!IsTemporalDuration(this))
        throw new TypeError("invalid receiver");
      return 0 === DurationSign(GetSlot(this, w), GetSlot(this, D), GetSlot(this, G), GetSlot(this, v), GetSlot(this, C), GetSlot(this, O), GetSlot(this, b), GetSlot(this, E), GetSlot(this, M), GetSlot(this, R));
    }
    with(e2) {
      if (!IsTemporalDuration(this))
        throw new TypeError("invalid receiver");
      const t2 = PrepareTemporalFields(e2, ["days", "hours", "microseconds", "milliseconds", "minutes", "months", "nanoseconds", "seconds", "weeks", "years"], "partial"), { years: r2 = GetSlot(this, w), months: o2 = GetSlot(this, D), weeks: n2 = GetSlot(this, G), days: a2 = GetSlot(this, v), hours: i2 = GetSlot(this, C), minutes: s2 = GetSlot(this, O), seconds: l2 = GetSlot(this, b), milliseconds: d2 = GetSlot(this, E), microseconds: m2 = GetSlot(this, M), nanoseconds: c2 = GetSlot(this, R) } = t2;
      return new _Duration(r2, o2, n2, a2, i2, s2, l2, d2, m2, c2);
    }
    negated() {
      if (!IsTemporalDuration(this))
        throw new TypeError("invalid receiver");
      return CreateNegatedTemporalDuration(this);
    }
    abs() {
      if (!IsTemporalDuration(this))
        throw new TypeError("invalid receiver");
      return new _Duration(Math.abs(GetSlot(this, w)), Math.abs(GetSlot(this, D)), Math.abs(GetSlot(this, G)), Math.abs(GetSlot(this, v)), Math.abs(GetSlot(this, C)), Math.abs(GetSlot(this, O)), Math.abs(GetSlot(this, b)), Math.abs(GetSlot(this, E)), Math.abs(GetSlot(this, M)), Math.abs(GetSlot(this, R)));
    }
    add(e2, t2) {
      if (!IsTemporalDuration(this))
        throw new TypeError("invalid receiver");
      return AddDurationToOrSubtractDurationFromDuration("add", this, e2, t2);
    }
    subtract(e2, t2) {
      if (!IsTemporalDuration(this))
        throw new TypeError("invalid receiver");
      return AddDurationToOrSubtractDurationFromDuration("subtract", this, e2, t2);
    }
    round(t2) {
      if (!IsTemporalDuration(this))
        throw new TypeError("invalid receiver");
      if (void 0 === t2)
        throw new TypeError("options parameter is required");
      let r2 = GetSlot(this, w), o2 = GetSlot(this, D), n2 = GetSlot(this, G), a2 = GetSlot(this, v), i2 = GetSlot(this, C), s2 = GetSlot(this, O), l2 = GetSlot(this, b), d2 = GetSlot(this, E), m2 = GetSlot(this, M), c2 = GetSlot(this, R), h2 = DefaultTemporalLargestUnit(r2, o2, n2, a2, i2, s2, l2, d2, m2, c2);
      const u2 = "string" == typeof t2 ? CreateOnePropObject("smallestUnit", t2) : GetOptionsObject(t2);
      let T2 = GetTemporalUnit(u2, "largestUnit", "datetime", void 0, ["auto"]), f2 = ToRelativeTemporalObject(u2);
      const y2 = ToTemporalRoundingIncrement(u2), I2 = ToTemporalRoundingMode(u2, "halfExpand");
      let S2 = GetTemporalUnit(u2, "smallestUnit", "datetime", void 0), g2 = true;
      S2 || (g2 = false, S2 = "nanosecond"), h2 = LargerOfTwoTemporalUnits(h2, S2);
      let F2 = true;
      if (T2 || (F2 = false, T2 = h2), "auto" === T2 && (T2 = h2), !g2 && !F2)
        throw new RangeError("at least one of smallestUnit or largestUnit is required");
      if (LargerOfTwoTemporalUnits(T2, S2) !== T2)
        throw new RangeError(`largestUnit ${T2} cannot be smaller than smallestUnit ${S2}`);
      const Y2 = { hour: 24, minute: 60, second: 60, millisecond: 1e3, microsecond: 1e3, nanosecond: 1e3 }[S2];
      return void 0 !== Y2 && ValidateTemporalRoundingIncrement(y2, Y2, false), { years: r2, months: o2, weeks: n2, days: a2 } = UnbalanceDurationRelative(r2, o2, n2, a2, T2, f2), { years: r2, months: o2, weeks: n2, days: a2, hours: i2, minutes: s2, seconds: l2, milliseconds: d2, microseconds: m2, nanoseconds: c2 } = RoundDuration(r2, o2, n2, a2, i2, s2, l2, d2, m2, c2, y2, S2, I2, f2), { years: r2, months: o2, weeks: n2, days: a2, hours: i2, minutes: s2, seconds: l2, milliseconds: d2, microseconds: m2, nanoseconds: c2 } = AdjustRoundedDurationDays(r2, o2, n2, a2, i2, s2, l2, d2, m2, c2, y2, S2, I2, f2), { days: a2, hours: i2, minutes: s2, seconds: l2, milliseconds: d2, microseconds: m2, nanoseconds: c2 } = BalanceDuration(a2, i2, s2, l2, d2, m2, c2, T2, f2), { years: r2, months: o2, weeks: n2, days: a2 } = function BalanceDurationRelative(t3, r3, o3, n3, a3, i3) {
        const s3 = GetIntrinsic("%Temporal.Duration%"), l3 = DurationSign(t3, r3, o3, n3, 0, 0, 0, 0, 0, 0);
        if (0 === l3)
          return { years: t3, months: r3, weeks: o3, days: n3 };
        const d3 = import_jsbi.default.BigInt(l3);
        let m3, c3, h3 = import_jsbi.default.BigInt(t3), u3 = import_jsbi.default.BigInt(r3), T3 = import_jsbi.default.BigInt(o3), f3 = import_jsbi.default.BigInt(n3);
        i3 && (c3 = ToTemporalDate(i3), m3 = GetSlot(c3, p));
        const y3 = new s3(l3), I3 = new s3(0, l3), S3 = new s3(0, 0, l3);
        switch (a3) {
          case "year": {
            if (!m3)
              throw new RangeError("a starting point is required for years balancing");
            const t4 = "string" != typeof m3 ? GetMethod(m3, "dateAdd") : void 0;
            let r4, o4, n4;
            for ({ relativeTo: r4, days: o4 } = MoveRelativeDate(m3, c3, y3, t4); import_jsbi.default.greaterThanOrEqual(abs(f3), import_jsbi.default.BigInt(ae(o4))); )
              f3 = import_jsbi.default.subtract(f3, import_jsbi.default.BigInt(o4)), h3 = import_jsbi.default.add(h3, d3), c3 = r4, { relativeTo: r4, days: o4 } = MoveRelativeDate(m3, c3, y3, t4);
            for ({ relativeTo: r4, days: n4 } = MoveRelativeDate(m3, c3, I3, t4); import_jsbi.default.greaterThanOrEqual(abs(f3), import_jsbi.default.BigInt(ae(n4))); )
              f3 = import_jsbi.default.subtract(f3, import_jsbi.default.BigInt(n4)), u3 = import_jsbi.default.add(u3, d3), c3 = r4, { relativeTo: r4, days: n4 } = MoveRelativeDate(m3, c3, I3, t4);
            r4 = CalendarDateAdd(m3, c3, y3, void 0, t4);
            const a4 = "string" != typeof m3 ? GetMethod(m3, "dateUntil") : void 0, i4 = Te(null);
            i4.largestUnit = "month";
            let s4 = CalendarDateUntil(m3, c3, r4, i4, a4), l4 = GetSlot(s4, D);
            for (; import_jsbi.default.greaterThanOrEqual(abs(u3), import_jsbi.default.BigInt(ae(l4))); ) {
              u3 = import_jsbi.default.subtract(u3, import_jsbi.default.BigInt(l4)), h3 = import_jsbi.default.add(h3, d3), c3 = r4, r4 = CalendarDateAdd(m3, c3, y3, void 0, t4);
              const o5 = Te(null);
              o5.largestUnit = "month", s4 = CalendarDateUntil(m3, c3, r4, o5, a4), l4 = GetSlot(s4, D);
            }
            break;
          }
          case "month": {
            if (!m3)
              throw new RangeError("a starting point is required for months balancing");
            const t4 = "string" != typeof m3 ? GetMethod(m3, "dateAdd") : void 0;
            let r4, o4;
            for ({ relativeTo: r4, days: o4 } = MoveRelativeDate(m3, c3, I3, t4); import_jsbi.default.greaterThanOrEqual(abs(f3), import_jsbi.default.BigInt(ae(o4))); )
              f3 = import_jsbi.default.subtract(f3, import_jsbi.default.BigInt(o4)), u3 = import_jsbi.default.add(u3, d3), c3 = r4, { relativeTo: r4, days: o4 } = MoveRelativeDate(m3, c3, I3, t4);
            break;
          }
          case "week": {
            if (!m3)
              throw new RangeError("a starting point is required for weeks balancing");
            const t4 = "string" != typeof m3 ? GetMethod(m3, "dateAdd") : void 0;
            let r4, o4;
            for ({ relativeTo: r4, days: o4 } = MoveRelativeDate(m3, c3, S3, t4); import_jsbi.default.greaterThanOrEqual(abs(f3), import_jsbi.default.BigInt(ae(o4))); )
              f3 = import_jsbi.default.subtract(f3, import_jsbi.default.BigInt(o4)), T3 = import_jsbi.default.add(T3, d3), c3 = r4, { relativeTo: r4, days: o4 } = MoveRelativeDate(m3, c3, S3, t4);
            break;
          }
        }
        return { years: import_jsbi.default.toNumber(h3), months: import_jsbi.default.toNumber(u3), weeks: import_jsbi.default.toNumber(T3), days: import_jsbi.default.toNumber(f3) };
      }(r2, o2, n2, a2, T2, f2), new _Duration(r2, o2, n2, a2, i2, s2, l2, d2, m2, c2);
    }
    total(e2) {
      if (!IsTemporalDuration(this))
        throw new TypeError("invalid receiver");
      let t2 = GetSlot(this, w), r2 = GetSlot(this, D), o2 = GetSlot(this, G), n2 = GetSlot(this, v), a2 = GetSlot(this, C), i2 = GetSlot(this, O), s2 = GetSlot(this, b), l2 = GetSlot(this, E), d2 = GetSlot(this, M), m2 = GetSlot(this, R);
      if (void 0 === e2)
        throw new TypeError("options argument is required");
      const c2 = "string" == typeof e2 ? CreateOnePropObject("unit", e2) : GetOptionsObject(e2), h2 = ToRelativeTemporalObject(c2), u2 = GetTemporalUnit(c2, "unit", "datetime", He);
      let T2;
      ({ years: t2, months: r2, weeks: o2, days: n2 } = UnbalanceDurationRelative(t2, r2, o2, n2, u2, h2)), IsTemporalZonedDateTime(h2) && (T2 = MoveRelativeZonedDateTime(h2, t2, r2, o2, 0));
      let p2 = BalancePossiblyInfiniteDuration(n2, a2, i2, s2, l2, d2, m2, u2, T2);
      if ("positive overflow" === p2)
        return 1 / 0;
      if ("negative overflow" === p2)
        return -1 / 0;
      ({ days: n2, hours: a2, minutes: i2, seconds: s2, milliseconds: l2, microseconds: d2, nanoseconds: m2 } = p2);
      const { total: f2 } = RoundDuration(t2, r2, o2, n2, a2, i2, s2, l2, d2, m2, 1, u2, "trunc", h2);
      return f2;
    }
    toString(e2) {
      if (!IsTemporalDuration(this))
        throw new TypeError("invalid receiver");
      const t2 = GetOptionsObject(e2), r2 = ToFractionalSecondDigits(t2), o2 = ToTemporalRoundingMode(t2, "trunc"), n2 = GetTemporalUnit(t2, "smallestUnit", "time", void 0);
      if ("hour" === n2 || "minute" === n2)
        throw new RangeError('smallestUnit must be a time unit other than "hours" or "minutes"');
      const { precision: a2, unit: i2, increment: s2 } = ToSecondsStringPrecisionRecord(n2, r2);
      return TemporalDurationToString(this, a2, { unit: i2, increment: s2, roundingMode: o2 });
    }
    toJSON() {
      if (!IsTemporalDuration(this))
        throw new TypeError("invalid receiver");
      return TemporalDurationToString(this);
    }
    toLocaleString(e2, t2) {
      if (!IsTemporalDuration(this))
        throw new TypeError("invalid receiver");
      return "undefined" != typeof Intl && void 0 !== Intl.DurationFormat ? new Intl.DurationFormat(e2, t2).format(this) : (console.warn("Temporal.Duration.prototype.toLocaleString() requires Intl.DurationFormat."), TemporalDurationToString(this));
    }
    valueOf() {
      throw new TypeError("use compare() to compare Temporal.Duration");
    }
    static from(e2) {
      return IsTemporalDuration(e2) ? new _Duration(GetSlot(e2, w), GetSlot(e2, D), GetSlot(e2, G), GetSlot(e2, v), GetSlot(e2, C), GetSlot(e2, O), GetSlot(e2, b), GetSlot(e2, E), GetSlot(e2, M), GetSlot(e2, R)) : ToTemporalDuration(e2);
    }
    static compare(t2, r2, o2) {
      const n2 = ToTemporalDuration(t2), a2 = ToTemporalDuration(r2), i2 = ToRelativeTemporalObject(GetOptionsObject(o2)), s2 = GetSlot(n2, w), l2 = GetSlot(n2, D), d2 = GetSlot(n2, G);
      let m2 = GetSlot(n2, v);
      const c2 = GetSlot(n2, C), h2 = GetSlot(n2, O), u2 = GetSlot(n2, b), T2 = GetSlot(n2, E), p2 = GetSlot(n2, M);
      let f2 = GetSlot(n2, R);
      const y2 = GetSlot(a2, w), I2 = GetSlot(a2, D), S2 = GetSlot(a2, G);
      let g2 = GetSlot(a2, v);
      const F2 = GetSlot(a2, C), Y2 = GetSlot(a2, O), P2 = GetSlot(a2, b), Z2 = GetSlot(a2, E), B2 = GetSlot(a2, M);
      let N2 = GetSlot(a2, R);
      const j2 = CalculateOffsetShift(i2, s2, l2, d2, m2), $2 = CalculateOffsetShift(i2, y2, I2, S2, g2);
      0 === s2 && 0 === y2 && 0 === l2 && 0 === I2 && 0 === d2 && 0 === S2 || ({ days: m2 } = UnbalanceDurationRelative(s2, l2, d2, m2, "day", i2), { days: g2 } = UnbalanceDurationRelative(y2, I2, S2, g2, "day", i2));
      const k2 = TotalDurationNanoseconds(m2, c2, h2, u2, T2, p2, f2, j2), U2 = TotalDurationNanoseconds(g2, F2, Y2, P2, Z2, B2, N2, $2);
      return ComparisonResult(import_jsbi.default.toNumber(import_jsbi.default.subtract(k2, U2)));
    }
  };
  MakeIntrinsicClass(Duration, "Temporal.Duration");
  var bt = Object.create;
  var PlainMonthDay = class {
    constructor(e2, t2, r2 = "iso8601", o2 = 1972) {
      CreateTemporalMonthDaySlots(this, ToIntegerWithTruncation(e2), ToIntegerWithTruncation(t2), ToTemporalCalendarSlotValue(r2), ToIntegerWithTruncation(o2));
    }
    get monthCode() {
      if (!IsTemporalMonthDay(this))
        throw new TypeError("invalid receiver");
      return CalendarMonthCode(GetSlot(this, p), this);
    }
    get day() {
      if (!IsTemporalMonthDay(this))
        throw new TypeError("invalid receiver");
      return CalendarDay(GetSlot(this, p), this);
    }
    get calendarId() {
      if (!IsTemporalMonthDay(this))
        throw new TypeError("invalid receiver");
      return ToTemporalCalendarIdentifier(GetSlot(this, p));
    }
    with(e2, t2) {
      if (!IsTemporalMonthDay(this))
        throw new TypeError("invalid receiver");
      if (!IsObject(e2))
        throw new TypeError("invalid argument");
      RejectTemporalLikeObject(e2);
      const r2 = GetOptionsObject(t2), o2 = GetSlot(this, p), n2 = CalendarFields(o2, ["day", "month", "monthCode", "year"]);
      let a2 = PrepareTemporalFields(this, n2, []);
      return a2 = CalendarMergeFields(o2, a2, PrepareTemporalFields(e2, n2, "partial")), a2 = PrepareTemporalFields(a2, n2, []), CalendarMonthDayFromFields(o2, a2, r2);
    }
    equals(e2) {
      if (!IsTemporalMonthDay(this))
        throw new TypeError("invalid receiver");
      const t2 = ToTemporalMonthDay(e2);
      for (const e3 of [s, l, i]) {
        if (GetSlot(this, e3) !== GetSlot(t2, e3))
          return false;
      }
      return CalendarEquals(GetSlot(this, p), GetSlot(t2, p));
    }
    toString(e2) {
      if (!IsTemporalMonthDay(this))
        throw new TypeError("invalid receiver");
      return TemporalMonthDayToString(this, ToCalendarNameOption(GetOptionsObject(e2)));
    }
    toJSON() {
      if (!IsTemporalMonthDay(this))
        throw new TypeError("invalid receiver");
      return TemporalMonthDayToString(this);
    }
    toLocaleString(e2, t2) {
      if (!IsTemporalMonthDay(this))
        throw new TypeError("invalid receiver");
      return new ht(e2, t2).format(this);
    }
    valueOf() {
      throw new TypeError("use equals() to compare Temporal.PlainMonthDay");
    }
    toPlainDate(e2) {
      if (!IsTemporalMonthDay(this))
        throw new TypeError("invalid receiver");
      if (!IsObject(e2))
        throw new TypeError("argument should be an object");
      const t2 = GetSlot(this, p), r2 = CalendarFields(t2, ["day", "monthCode"]), o2 = PrepareTemporalFields(this, r2, []), n2 = CalendarFields(t2, ["year"]);
      let a2 = CalendarMergeFields(t2, o2, PrepareTemporalFields(e2, n2, []));
      a2 = PrepareTemporalFields(a2, [.../* @__PURE__ */ new Set([...r2, ...n2])], []);
      const i2 = bt(null);
      return i2.overflow = "reject", CalendarDateFromFields(t2, a2, i2);
    }
    getISOFields() {
      if (!IsTemporalMonthDay(this))
        throw new TypeError("invalid receiver");
      return { calendar: GetSlot(this, p), isoDay: GetSlot(this, l), isoMonth: GetSlot(this, s), isoYear: GetSlot(this, i) };
    }
    getCalendar() {
      if (!IsTemporalMonthDay(this))
        throw new TypeError("invalid receiver");
      return ToTemporalCalendarObject(GetSlot(this, p));
    }
    static from(e2, t2) {
      const r2 = GetOptionsObject(t2);
      return IsTemporalMonthDay(e2) ? (ToTemporalOverflow(r2), CreateTemporalMonthDay(GetSlot(e2, s), GetSlot(e2, l), GetSlot(e2, p), GetSlot(e2, i))) : ToTemporalMonthDay(e2, r2);
    }
  };
  MakeIntrinsicClass(PlainMonthDay, "Temporal.PlainMonthDay");
  var instant = () => new (GetIntrinsic("%Temporal.Instant%"))(Ve());
  var plainDateTime = (e2, t2 = DefaultTimeZone()) => {
    const r2 = ToTemporalTimeZoneSlotValue(t2), o2 = ToTemporalCalendarSlotValue(e2);
    return GetPlainDateTimeFor(r2, instant(), o2);
  };
  var plainDateTimeISO = (e2 = DefaultTimeZone()) => GetPlainDateTimeFor(ToTemporalTimeZoneSlotValue(e2), instant(), "iso8601");
  var zonedDateTime = (e2, t2 = DefaultTimeZone()) => {
    const r2 = ToTemporalTimeZoneSlotValue(t2), o2 = ToTemporalCalendarSlotValue(e2);
    return CreateTemporalZonedDateTime(Ve(), r2, o2);
  };
  var Et = { instant, plainDateTime, plainDateTimeISO, plainDate: (e2, t2 = DefaultTimeZone()) => TemporalDateTimeToDate(plainDateTime(e2, t2)), plainDateISO: (e2 = DefaultTimeZone()) => TemporalDateTimeToDate(plainDateTimeISO(e2)), plainTimeISO: (e2 = DefaultTimeZone()) => TemporalDateTimeToTime(plainDateTimeISO(e2)), timeZoneId: () => DefaultTimeZone(), zonedDateTime, zonedDateTimeISO: (e2 = DefaultTimeZone()) => zonedDateTime("iso8601", e2), [Symbol.toStringTag]: "Temporal.Now" };
  Object.defineProperty(Et, Symbol.toStringTag, { value: "Temporal.Now", writable: false, enumerable: false, configurable: true });
  var Mt = Object.assign;
  function TemporalTimeToString(e2, t2, r2) {
    let o2 = GetSlot(e2, d), n2 = GetSlot(e2, m), a2 = GetSlot(e2, c), i2 = GetSlot(e2, h), s2 = GetSlot(e2, u), l2 = GetSlot(e2, T);
    if (r2) {
      const { unit: e3, increment: t3, roundingMode: d2 } = r2;
      ({ hour: o2, minute: n2, second: a2, millisecond: i2, microsecond: s2, nanosecond: l2 } = RoundTime(o2, n2, a2, i2, s2, l2, t3, e3, d2));
    }
    return `${ISODateTimePartString(o2)}:${ISODateTimePartString(n2)}${FormatSecondsStringPart(a2, i2, s2, l2, t2)}`;
  }
  var PlainTime = class _PlainTime {
    constructor(e2 = 0, t2 = 0, r2 = 0, o2 = 0, n2 = 0, a2 = 0) {
      const i2 = void 0 === e2 ? 0 : ToIntegerWithTruncation(e2), s2 = void 0 === t2 ? 0 : ToIntegerWithTruncation(t2), l2 = void 0 === r2 ? 0 : ToIntegerWithTruncation(r2), p2 = void 0 === o2 ? 0 : ToIntegerWithTruncation(o2), f2 = void 0 === n2 ? 0 : ToIntegerWithTruncation(n2), y2 = void 0 === a2 ? 0 : ToIntegerWithTruncation(a2);
      RejectTime(i2, s2, l2, p2, f2, y2), N(this), SetSlot(this, d, i2), SetSlot(this, m, s2), SetSlot(this, c, l2), SetSlot(this, h, p2), SetSlot(this, u, f2), SetSlot(this, T, y2);
    }
    get hour() {
      if (!IsTemporalTime(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, d);
    }
    get minute() {
      if (!IsTemporalTime(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, m);
    }
    get second() {
      if (!IsTemporalTime(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, c);
    }
    get millisecond() {
      if (!IsTemporalTime(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, h);
    }
    get microsecond() {
      if (!IsTemporalTime(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, u);
    }
    get nanosecond() {
      if (!IsTemporalTime(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, T);
    }
    with(e2, t2) {
      if (!IsTemporalTime(this))
        throw new TypeError("invalid receiver");
      if (!IsObject(e2))
        throw new TypeError("invalid argument");
      RejectTemporalLikeObject(e2);
      const r2 = ToTemporalOverflow(GetOptionsObject(t2)), o2 = ToTemporalTimeRecord(e2, "partial"), n2 = ToTemporalTimeRecord(this);
      let { hour: a2, minute: i2, second: s2, millisecond: l2, microsecond: d2, nanosecond: m2 } = Mt(n2, o2);
      return { hour: a2, minute: i2, second: s2, millisecond: l2, microsecond: d2, nanosecond: m2 } = RegulateTime(a2, i2, s2, l2, d2, m2, r2), new _PlainTime(a2, i2, s2, l2, d2, m2);
    }
    add(e2) {
      if (!IsTemporalTime(this))
        throw new TypeError("invalid receiver");
      return AddDurationToOrSubtractDurationFromPlainTime("add", this, e2);
    }
    subtract(e2) {
      if (!IsTemporalTime(this))
        throw new TypeError("invalid receiver");
      return AddDurationToOrSubtractDurationFromPlainTime("subtract", this, e2);
    }
    until(e2, t2) {
      if (!IsTemporalTime(this))
        throw new TypeError("invalid receiver");
      return DifferenceTemporalPlainTime("until", this, e2, t2);
    }
    since(e2, t2) {
      if (!IsTemporalTime(this))
        throw new TypeError("invalid receiver");
      return DifferenceTemporalPlainTime("since", this, e2, t2);
    }
    round(e2) {
      if (!IsTemporalTime(this))
        throw new TypeError("invalid receiver");
      if (void 0 === e2)
        throw new TypeError("options parameter is required");
      const t2 = "string" == typeof e2 ? CreateOnePropObject("smallestUnit", e2) : GetOptionsObject(e2), r2 = ToTemporalRoundingIncrement(t2), o2 = ToTemporalRoundingMode(t2, "halfExpand"), n2 = GetTemporalUnit(t2, "smallestUnit", "time", He);
      ValidateTemporalRoundingIncrement(r2, { hour: 24, minute: 60, second: 60, millisecond: 1e3, microsecond: 1e3, nanosecond: 1e3 }[n2], false);
      let a2 = GetSlot(this, d), i2 = GetSlot(this, m), s2 = GetSlot(this, c), l2 = GetSlot(this, h), p2 = GetSlot(this, u), f2 = GetSlot(this, T);
      return { hour: a2, minute: i2, second: s2, millisecond: l2, microsecond: p2, nanosecond: f2 } = RoundTime(a2, i2, s2, l2, p2, f2, r2, n2, o2), new _PlainTime(a2, i2, s2, l2, p2, f2);
    }
    equals(e2) {
      if (!IsTemporalTime(this))
        throw new TypeError("invalid receiver");
      const t2 = ToTemporalTime(e2);
      for (const e3 of [d, m, c, h, u, T]) {
        if (GetSlot(this, e3) !== GetSlot(t2, e3))
          return false;
      }
      return true;
    }
    toString(e2) {
      if (!IsTemporalTime(this))
        throw new TypeError("invalid receiver");
      const t2 = GetOptionsObject(e2), r2 = ToFractionalSecondDigits(t2), o2 = ToTemporalRoundingMode(t2, "trunc"), n2 = GetTemporalUnit(t2, "smallestUnit", "time", void 0);
      if ("hour" === n2)
        throw new RangeError('smallestUnit must be a time unit other than "hour"');
      const { precision: a2, unit: i2, increment: s2 } = ToSecondsStringPrecisionRecord(n2, r2);
      return TemporalTimeToString(this, a2, { unit: i2, increment: s2, roundingMode: o2 });
    }
    toJSON() {
      if (!IsTemporalTime(this))
        throw new TypeError("invalid receiver");
      return TemporalTimeToString(this, "auto");
    }
    toLocaleString(e2, t2) {
      if (!IsTemporalTime(this))
        throw new TypeError("invalid receiver");
      return new ht(e2, t2).format(this);
    }
    valueOf() {
      throw new TypeError("use compare() or equals() to compare Temporal.PlainTime");
    }
    toPlainDateTime(e2) {
      if (!IsTemporalTime(this))
        throw new TypeError("invalid receiver");
      const t2 = ToTemporalDate(e2), r2 = GetSlot(t2, i), o2 = GetSlot(t2, s), n2 = GetSlot(t2, l), a2 = GetSlot(t2, p);
      return CreateTemporalDateTime(r2, o2, n2, GetSlot(this, d), GetSlot(this, m), GetSlot(this, c), GetSlot(this, h), GetSlot(this, u), GetSlot(this, T), a2);
    }
    toZonedDateTime(e2) {
      if (!IsTemporalTime(this))
        throw new TypeError("invalid receiver");
      if (!IsObject(e2))
        throw new TypeError("invalid argument");
      const t2 = e2.plainDate;
      if (void 0 === t2)
        throw new TypeError("missing date property");
      const r2 = ToTemporalDate(t2), o2 = e2.timeZone;
      if (void 0 === o2)
        throw new TypeError("missing timeZone property");
      const a2 = ToTemporalTimeZoneSlotValue(o2), f2 = GetSlot(r2, i), y2 = GetSlot(r2, s), I2 = GetSlot(r2, l), S2 = GetSlot(r2, p), g2 = GetSlot(this, d), w2 = GetSlot(this, m), D2 = GetSlot(this, c), G2 = GetSlot(this, h), v2 = GetSlot(this, u), C2 = GetSlot(this, T);
      return CreateTemporalZonedDateTime(GetSlot(GetInstantFor(a2, new (GetIntrinsic("%Temporal.PlainDateTime%"))(f2, y2, I2, g2, w2, D2, G2, v2, C2, S2), "compatible"), n), a2, S2);
    }
    getISOFields() {
      if (!IsTemporalTime(this))
        throw new TypeError("invalid receiver");
      return { isoHour: GetSlot(this, d), isoMicrosecond: GetSlot(this, u), isoMillisecond: GetSlot(this, h), isoMinute: GetSlot(this, m), isoNanosecond: GetSlot(this, T), isoSecond: GetSlot(this, c) };
    }
    static from(e2, t2) {
      const r2 = ToTemporalOverflow(GetOptionsObject(t2));
      return IsTemporalTime(e2) ? new _PlainTime(GetSlot(e2, d), GetSlot(e2, m), GetSlot(e2, c), GetSlot(e2, h), GetSlot(e2, u), GetSlot(e2, T)) : ToTemporalTime(e2, r2);
    }
    static compare(e2, t2) {
      const r2 = ToTemporalTime(e2), o2 = ToTemporalTime(t2);
      for (const e3 of [d, m, c, h, u, T]) {
        const t3 = GetSlot(r2, e3), n2 = GetSlot(o2, e3);
        if (t3 !== n2)
          return ComparisonResult(t3 - n2);
      }
      return 0;
    }
  };
  MakeIntrinsicClass(PlainTime, "Temporal.PlainTime");
  var TimeZone = class {
    constructor(e2) {
      if (arguments.length < 1)
        throw new RangeError("missing argument: identifier is required");
      const t2 = GetCanonicalTimeZoneIdentifier(e2);
      N(this), SetSlot(this, a, t2);
    }
    get id() {
      if (!IsTemporalTimeZone(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, a);
    }
    getOffsetNanosecondsFor(e2) {
      if (!IsTemporalTimeZone(this))
        throw new TypeError("invalid receiver");
      const t2 = ToTemporalInstant(e2), r2 = GetSlot(this, a);
      return IsTimeZoneOffsetString(r2) ? ParseTimeZoneOffsetString(r2) : GetNamedTimeZoneOffsetNanoseconds(r2, GetSlot(t2, n));
    }
    getOffsetStringFor(e2) {
      if (!IsTemporalTimeZone(this))
        throw new TypeError("invalid receiver");
      return GetOffsetStringFor(this, ToTemporalInstant(e2));
    }
    getPlainDateTimeFor(e2, t2 = "iso8601") {
      if (!IsTemporalTimeZone(this))
        throw new TypeError("invalid receiver");
      return GetPlainDateTimeFor(this, ToTemporalInstant(e2), ToTemporalCalendarSlotValue(t2));
    }
    getInstantFor(e2, t2) {
      if (!IsTemporalTimeZone(this))
        throw new TypeError("invalid receiver");
      return GetInstantFor(this, ToTemporalDateTime(e2), ToTemporalDisambiguation(GetOptionsObject(t2)));
    }
    getPossibleInstantsFor(t2) {
      if (!IsTemporalTimeZone(this))
        throw new TypeError("invalid receiver");
      const r2 = ToTemporalDateTime(t2), o2 = GetIntrinsic("%Temporal.Instant%"), n2 = GetSlot(this, a);
      if (IsTimeZoneOffsetString(n2)) {
        const t3 = GetUTCEpochNanoseconds(GetSlot(r2, i), GetSlot(r2, s), GetSlot(r2, l), GetSlot(r2, d), GetSlot(r2, m), GetSlot(r2, c), GetSlot(r2, h), GetSlot(r2, u), GetSlot(r2, T));
        if (null === t3)
          throw new RangeError("DateTime outside of supported range");
        const a2 = ParseTimeZoneOffsetString(n2);
        return [new o2(import_jsbi.default.subtract(t3, import_jsbi.default.BigInt(a2)))];
      }
      const p2 = function GetNamedTimeZoneEpochNanoseconds(t3, r3, o3, n3, a2, i2, s2, l2, d2, m2) {
        const c2 = GetUTCEpochNanoseconds(r3, o3, n3, a2, i2, s2, l2, d2, m2);
        if (null === c2)
          throw new RangeError("DateTime outside of supported range");
        let h2 = import_jsbi.default.subtract(c2, Ee);
        import_jsbi.default.lessThan(h2, Me) && (h2 = c2);
        let u2 = import_jsbi.default.add(c2, Ee);
        import_jsbi.default.greaterThan(u2, Re) && (u2 = c2);
        const T2 = GetNamedTimeZoneOffsetNanoseconds(t3, h2), p3 = GetNamedTimeZoneOffsetNanoseconds(t3, u2);
        return (T2 === p3 ? [T2] : [T2, p3]).map((h3) => {
          const u3 = import_jsbi.default.subtract(c2, import_jsbi.default.BigInt(h3)), T3 = GetNamedTimeZoneDateTimeParts(t3, u3);
          if (r3 === T3.year && o3 === T3.month && n3 === T3.day && a2 === T3.hour && i2 === T3.minute && s2 === T3.second && l2 === T3.millisecond && d2 === T3.microsecond && m2 === T3.nanosecond)
            return u3;
        }).filter((e2) => void 0 !== e2);
      }(n2, GetSlot(r2, i), GetSlot(r2, s), GetSlot(r2, l), GetSlot(r2, d), GetSlot(r2, m), GetSlot(r2, c), GetSlot(r2, h), GetSlot(r2, u), GetSlot(r2, T));
      return p2.map((e2) => new o2(e2));
    }
    getNextTransition(e2) {
      if (!IsTemporalTimeZone(this))
        throw new TypeError("invalid receiver");
      const t2 = ToTemporalInstant(e2), r2 = GetSlot(this, a);
      if (IsTimeZoneOffsetString(r2) || "UTC" === r2)
        return null;
      let o2 = GetSlot(t2, n);
      const i2 = GetIntrinsic("%Temporal.Instant%");
      return o2 = GetNamedTimeZoneNextTransition(r2, o2), null === o2 ? null : new i2(o2);
    }
    getPreviousTransition(e2) {
      if (!IsTemporalTimeZone(this))
        throw new TypeError("invalid receiver");
      const t2 = ToTemporalInstant(e2), r2 = GetSlot(this, a);
      if (IsTimeZoneOffsetString(r2) || "UTC" === r2)
        return null;
      let o2 = GetSlot(t2, n);
      const i2 = GetIntrinsic("%Temporal.Instant%");
      return o2 = GetNamedTimeZonePreviousTransition(r2, o2), null === o2 ? null : new i2(o2);
    }
    toString() {
      if (!IsTemporalTimeZone(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, a);
    }
    toJSON() {
      if (!IsTemporalTimeZone(this))
        throw new TypeError("invalid receiver");
      return GetSlot(this, a);
    }
    static from(e2) {
      return ToTemporalTimeZoneObject(ToTemporalTimeZoneSlotValue(e2));
    }
  };
  MakeIntrinsicClass(TimeZone, "Temporal.TimeZone"), DefineIntrinsic("Temporal.TimeZone.prototype.getOffsetNanosecondsFor", TimeZone.prototype.getOffsetNanosecondsFor), DefineIntrinsic("Temporal.TimeZone.prototype.getPossibleInstantsFor", TimeZone.prototype.getPossibleInstantsFor);
  var Rt = Object.create;
  var PlainYearMonth = class {
    constructor(e2, t2, r2 = "iso8601", o2 = 1) {
      CreateTemporalYearMonthSlots(this, ToIntegerWithTruncation(e2), ToIntegerWithTruncation(t2), ToTemporalCalendarSlotValue(r2), ToIntegerWithTruncation(o2));
    }
    get year() {
      if (!IsTemporalYearMonth(this))
        throw new TypeError("invalid receiver");
      return CalendarYear(GetSlot(this, p), this);
    }
    get month() {
      if (!IsTemporalYearMonth(this))
        throw new TypeError("invalid receiver");
      return CalendarMonth(GetSlot(this, p), this);
    }
    get monthCode() {
      if (!IsTemporalYearMonth(this))
        throw new TypeError("invalid receiver");
      return CalendarMonthCode(GetSlot(this, p), this);
    }
    get calendarId() {
      if (!IsTemporalYearMonth(this))
        throw new TypeError("invalid receiver");
      return ToTemporalCalendarIdentifier(GetSlot(this, p));
    }
    get era() {
      if (!IsTemporalYearMonth(this))
        throw new TypeError("invalid receiver");
      return CalendarEra(GetSlot(this, p), this);
    }
    get eraYear() {
      if (!IsTemporalYearMonth(this))
        throw new TypeError("invalid receiver");
      return CalendarEraYear(GetSlot(this, p), this);
    }
    get daysInMonth() {
      if (!IsTemporalYearMonth(this))
        throw new TypeError("invalid receiver");
      return CalendarDaysInMonth(GetSlot(this, p), this);
    }
    get daysInYear() {
      if (!IsTemporalYearMonth(this))
        throw new TypeError("invalid receiver");
      return CalendarDaysInYear(GetSlot(this, p), this);
    }
    get monthsInYear() {
      if (!IsTemporalYearMonth(this))
        throw new TypeError("invalid receiver");
      return CalendarMonthsInYear(GetSlot(this, p), this);
    }
    get inLeapYear() {
      if (!IsTemporalYearMonth(this))
        throw new TypeError("invalid receiver");
      return CalendarInLeapYear(GetSlot(this, p), this);
    }
    with(e2, t2) {
      if (!IsTemporalYearMonth(this))
        throw new TypeError("invalid receiver");
      if (!IsObject(e2))
        throw new TypeError("invalid argument");
      RejectTemporalLikeObject(e2);
      const r2 = GetOptionsObject(t2), o2 = GetSlot(this, p), n2 = CalendarFields(o2, ["month", "monthCode", "year"]);
      let a2 = PrepareTemporalFields(this, n2, []);
      return a2 = CalendarMergeFields(o2, a2, PrepareTemporalFields(e2, n2, "partial")), a2 = PrepareTemporalFields(a2, n2, []), CalendarYearMonthFromFields(o2, a2, r2);
    }
    add(e2, t2) {
      if (!IsTemporalYearMonth(this))
        throw new TypeError("invalid receiver");
      return AddDurationToOrSubtractDurationFromPlainYearMonth("add", this, e2, t2);
    }
    subtract(e2, t2) {
      if (!IsTemporalYearMonth(this))
        throw new TypeError("invalid receiver");
      return AddDurationToOrSubtractDurationFromPlainYearMonth("subtract", this, e2, t2);
    }
    until(e2, t2) {
      if (!IsTemporalYearMonth(this))
        throw new TypeError("invalid receiver");
      return DifferenceTemporalPlainYearMonth("until", this, e2, t2);
    }
    since(e2, t2) {
      if (!IsTemporalYearMonth(this))
        throw new TypeError("invalid receiver");
      return DifferenceTemporalPlainYearMonth("since", this, e2, t2);
    }
    equals(e2) {
      if (!IsTemporalYearMonth(this))
        throw new TypeError("invalid receiver");
      const t2 = ToTemporalYearMonth(e2);
      for (const e3 of [i, s, l]) {
        if (GetSlot(this, e3) !== GetSlot(t2, e3))
          return false;
      }
      return CalendarEquals(GetSlot(this, p), GetSlot(t2, p));
    }
    toString(e2) {
      if (!IsTemporalYearMonth(this))
        throw new TypeError("invalid receiver");
      return TemporalYearMonthToString(this, ToCalendarNameOption(GetOptionsObject(e2)));
    }
    toJSON() {
      if (!IsTemporalYearMonth(this))
        throw new TypeError("invalid receiver");
      return TemporalYearMonthToString(this);
    }
    toLocaleString(e2, t2) {
      if (!IsTemporalYearMonth(this))
        throw new TypeError("invalid receiver");
      return new ht(e2, t2).format(this);
    }
    valueOf() {
      throw new TypeError("use compare() or equals() to compare Temporal.PlainYearMonth");
    }
    toPlainDate(e2) {
      if (!IsTemporalYearMonth(this))
        throw new TypeError("invalid receiver");
      if (!IsObject(e2))
        throw new TypeError("argument should be an object");
      const t2 = GetSlot(this, p), r2 = CalendarFields(t2, ["monthCode", "year"]), o2 = PrepareTemporalFields(this, r2, []), n2 = CalendarFields(t2, ["day"]);
      let a2 = CalendarMergeFields(t2, o2, PrepareTemporalFields(e2, n2, []));
      a2 = PrepareTemporalFields(a2, [.../* @__PURE__ */ new Set([...r2, ...n2])], []);
      const i2 = Rt(null);
      return i2.overflow = "reject", CalendarDateFromFields(t2, a2, i2);
    }
    getISOFields() {
      if (!IsTemporalYearMonth(this))
        throw new TypeError("invalid receiver");
      return { calendar: GetSlot(this, p), isoDay: GetSlot(this, l), isoMonth: GetSlot(this, s), isoYear: GetSlot(this, i) };
    }
    getCalendar() {
      if (!IsTemporalYearMonth(this))
        throw new TypeError("invalid receiver");
      return ToTemporalCalendarObject(GetSlot(this, p));
    }
    static from(e2, t2) {
      const r2 = GetOptionsObject(t2);
      return IsTemporalYearMonth(e2) ? (ToTemporalOverflow(r2), CreateTemporalYearMonth(GetSlot(e2, i), GetSlot(e2, s), GetSlot(e2, p), GetSlot(e2, l))) : ToTemporalYearMonth(e2, r2);
    }
    static compare(e2, t2) {
      const r2 = ToTemporalYearMonth(e2), o2 = ToTemporalYearMonth(t2);
      return CompareISODate(GetSlot(r2, i), GetSlot(r2, s), GetSlot(r2, l), GetSlot(o2, i), GetSlot(o2, s), GetSlot(o2, l));
    }
  };
  MakeIntrinsicClass(PlainYearMonth, "Temporal.PlainYearMonth");
  var Ft = ht.prototype.resolvedOptions;
  var Yt = Object.create;
  var ZonedDateTime = class {
    constructor(e2, t2, r2 = "iso8601") {
      if (arguments.length < 1)
        throw new TypeError("missing argument: epochNanoseconds is required");
      CreateTemporalZonedDateTimeSlots(this, ToBigInt(e2), ToTemporalTimeZoneSlotValue(t2), ToTemporalCalendarSlotValue(r2));
    }
    get calendarId() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return ToTemporalCalendarIdentifier(GetSlot(this, p));
    }
    get timeZoneId() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return ToTemporalTimeZoneIdentifier(GetSlot(this, g));
    }
    get year() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarYear(GetSlot(this, p), dateTime(this));
    }
    get month() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarMonth(GetSlot(this, p), dateTime(this));
    }
    get monthCode() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarMonthCode(GetSlot(this, p), dateTime(this));
    }
    get day() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarDay(GetSlot(this, p), dateTime(this));
    }
    get hour() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return GetSlot(dateTime(this), d);
    }
    get minute() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return GetSlot(dateTime(this), m);
    }
    get second() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return GetSlot(dateTime(this), c);
    }
    get millisecond() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return GetSlot(dateTime(this), h);
    }
    get microsecond() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return GetSlot(dateTime(this), u);
    }
    get nanosecond() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return GetSlot(dateTime(this), T);
    }
    get era() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarEra(GetSlot(this, p), dateTime(this));
    }
    get eraYear() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarEraYear(GetSlot(this, p), dateTime(this));
    }
    get epochSeconds() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      const t2 = GetSlot(this, n);
      return import_jsbi.default.toNumber(BigIntFloorDiv(t2, ve));
    }
    get epochMilliseconds() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      const t2 = GetSlot(this, n);
      return import_jsbi.default.toNumber(BigIntFloorDiv(t2, Ge));
    }
    get epochMicroseconds() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return ToBigIntExternal(BigIntFloorDiv(GetSlot(this, n), De));
    }
    get epochNanoseconds() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return ToBigIntExternal(GetSlot(this, n));
    }
    get dayOfWeek() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarDayOfWeek(GetSlot(this, p), dateTime(this));
    }
    get dayOfYear() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarDayOfYear(GetSlot(this, p), dateTime(this));
    }
    get weekOfYear() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarWeekOfYear(GetSlot(this, p), dateTime(this));
    }
    get yearOfWeek() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarYearOfWeek(GetSlot(this, p), dateTime(this));
    }
    get hoursInDay() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      const t2 = dateTime(this), r2 = GetIntrinsic("%Temporal.PlainDateTime%"), o2 = GetSlot(t2, i), a2 = GetSlot(t2, s), d2 = GetSlot(t2, l), m2 = new r2(o2, a2, d2, 0, 0, 0, 0, 0, 0), c2 = AddISODate(o2, a2, d2, 0, 0, 0, 1, "reject"), h2 = new r2(c2.year, c2.month, c2.day, 0, 0, 0, 0, 0, 0), u2 = GetSlot(this, g), T2 = GetSlot(GetInstantFor(u2, m2, "compatible"), n), p2 = GetSlot(GetInstantFor(u2, h2, "compatible"), n);
      return BigIntDivideToNumber(import_jsbi.default.subtract(p2, T2), Oe);
    }
    get daysInWeek() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarDaysInWeek(GetSlot(this, p), dateTime(this));
    }
    get daysInMonth() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarDaysInMonth(GetSlot(this, p), dateTime(this));
    }
    get daysInYear() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarDaysInYear(GetSlot(this, p), dateTime(this));
    }
    get monthsInYear() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarMonthsInYear(GetSlot(this, p), dateTime(this));
    }
    get inLeapYear() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return CalendarInLeapYear(GetSlot(this, p), dateTime(this));
    }
    get offset() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return GetOffsetStringFor(GetSlot(this, g), GetSlot(this, S));
    }
    get offsetNanoseconds() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return GetOffsetNanosecondsFor(GetSlot(this, g), GetSlot(this, S));
    }
    with(e2, t2) {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      if (!IsObject(e2))
        throw new TypeError("invalid zoned-date-time-like");
      RejectTemporalLikeObject(e2);
      const r2 = GetOptionsObject(t2), o2 = GetSlot(this, p);
      let n2 = CalendarFields(o2, ["day", "hour", "microsecond", "millisecond", "minute", "month", "monthCode", "nanosecond", "second", "year"]);
      n2.push("offset");
      let a2 = PrepareTemporalFields(this, n2, ["offset"]);
      a2 = CalendarMergeFields(o2, a2, PrepareTemporalFields(e2, n2, "partial")), a2 = PrepareTemporalFields(a2, n2, ["offset"]);
      const i2 = ToTemporalDisambiguation(r2), s2 = ToTemporalOffset(r2, "prefer");
      let { year: l2, month: d2, day: m2, hour: c2, minute: h2, second: u2, millisecond: T2, microsecond: f2, nanosecond: y2 } = InterpretTemporalDateTimeFields(o2, a2, r2);
      const I2 = ParseTimeZoneOffsetString(a2.offset), S2 = GetSlot(this, g);
      return CreateTemporalZonedDateTime(InterpretISODateTimeOffset(l2, d2, m2, c2, h2, u2, T2, f2, y2, "option", I2, S2, i2, s2, false), S2, o2);
    }
    withPlainDate(e2) {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      const t2 = ToTemporalDate(e2), r2 = GetSlot(t2, i), o2 = GetSlot(t2, s), a2 = GetSlot(t2, l);
      let f2 = GetSlot(t2, p);
      const y2 = dateTime(this), I2 = GetSlot(y2, d), S2 = GetSlot(y2, m), w2 = GetSlot(y2, c), D2 = GetSlot(y2, h), G2 = GetSlot(y2, u), v2 = GetSlot(y2, T);
      f2 = ConsolidateCalendars(GetSlot(this, p), f2);
      const C2 = GetSlot(this, g);
      return CreateTemporalZonedDateTime(GetSlot(GetInstantFor(C2, new (GetIntrinsic("%Temporal.PlainDateTime%"))(r2, o2, a2, I2, S2, w2, D2, G2, v2, f2), "compatible"), n), C2, f2);
    }
    withPlainTime(e2) {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      const t2 = GetIntrinsic("%Temporal.PlainTime%"), r2 = void 0 === e2 ? new t2() : ToTemporalTime(e2), o2 = dateTime(this), a2 = GetSlot(o2, i), f2 = GetSlot(o2, s), y2 = GetSlot(o2, l), I2 = GetSlot(this, p), S2 = GetSlot(r2, d), w2 = GetSlot(r2, m), D2 = GetSlot(r2, c), G2 = GetSlot(r2, h), v2 = GetSlot(r2, u), C2 = GetSlot(r2, T), O2 = GetSlot(this, g);
      return CreateTemporalZonedDateTime(GetSlot(GetInstantFor(O2, new (GetIntrinsic("%Temporal.PlainDateTime%"))(a2, f2, y2, S2, w2, D2, G2, v2, C2, I2), "compatible"), n), O2, I2);
    }
    withTimeZone(e2) {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      const t2 = ToTemporalTimeZoneSlotValue(e2);
      return CreateTemporalZonedDateTime(GetSlot(this, n), t2, GetSlot(this, p));
    }
    withCalendar(e2) {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      const t2 = ToTemporalCalendarSlotValue(e2);
      return CreateTemporalZonedDateTime(GetSlot(this, n), GetSlot(this, g), t2);
    }
    add(e2, t2) {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return AddDurationToOrSubtractDurationFromZonedDateTime("add", this, e2, t2);
    }
    subtract(e2, t2) {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return AddDurationToOrSubtractDurationFromZonedDateTime("subtract", this, e2, t2);
    }
    until(e2, t2) {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return DifferenceTemporalZonedDateTime("until", this, e2, t2);
    }
    since(e2, t2) {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return DifferenceTemporalZonedDateTime("since", this, e2, t2);
    }
    round(t2) {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      if (void 0 === t2)
        throw new TypeError("options parameter is required");
      const r2 = "string" == typeof t2 ? CreateOnePropObject("smallestUnit", t2) : GetOptionsObject(t2), o2 = ToTemporalRoundingIncrement(r2), a2 = ToTemporalRoundingMode(r2, "halfExpand"), f2 = GetTemporalUnit(r2, "smallestUnit", "time", He, ["day"]), y2 = { day: 1, hour: 24, minute: 60, second: 60, millisecond: 1e3, microsecond: 1e3, nanosecond: 1e3 }[f2];
      ValidateTemporalRoundingIncrement(o2, y2, 1 === y2);
      const I2 = dateTime(this);
      let w2 = GetSlot(I2, i), D2 = GetSlot(I2, s), G2 = GetSlot(I2, l), v2 = GetSlot(I2, d), C2 = GetSlot(I2, m), O2 = GetSlot(I2, c), b2 = GetSlot(I2, h), E2 = GetSlot(I2, u), M2 = GetSlot(I2, T);
      const R2 = GetIntrinsic("%Temporal.PlainDateTime%"), F2 = GetSlot(this, g), Y2 = GetSlot(this, p), P2 = GetInstantFor(F2, new R2(GetSlot(I2, i), GetSlot(I2, s), GetSlot(I2, l), 0, 0, 0, 0, 0, 0), "compatible"), Z2 = AddZonedDateTime(P2, F2, Y2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0), B2 = import_jsbi.default.subtract(Z2, import_jsbi.default.BigInt(GetSlot(P2, n)));
      if (import_jsbi.default.lessThanOrEqual(B2, Ie))
        throw new RangeError("cannot round a ZonedDateTime in a calendar with zero or negative length days");
      ({ year: w2, month: D2, day: G2, hour: v2, minute: C2, second: O2, millisecond: b2, microsecond: E2, nanosecond: M2 } = RoundISODateTime(w2, D2, G2, v2, C2, O2, b2, E2, M2, o2, f2, a2, import_jsbi.default.toNumber(B2)));
      return CreateTemporalZonedDateTime(InterpretISODateTimeOffset(w2, D2, G2, v2, C2, O2, b2, E2, M2, "option", GetOffsetNanosecondsFor(F2, GetSlot(this, S)), F2, "compatible", "prefer", false), F2, GetSlot(this, p));
    }
    equals(t2) {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      const r2 = ToTemporalZonedDateTime(t2), o2 = GetSlot(this, n), a2 = GetSlot(r2, n);
      return !!import_jsbi.default.equal(import_jsbi.default.BigInt(o2), import_jsbi.default.BigInt(a2)) && (!!TimeZoneEquals(GetSlot(this, g), GetSlot(r2, g)) && CalendarEquals(GetSlot(this, p), GetSlot(r2, p)));
    }
    toString(e2) {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      const t2 = GetOptionsObject(e2), r2 = ToCalendarNameOption(t2), o2 = ToFractionalSecondDigits(t2), n2 = function ToShowOffsetOption(e3) {
        return GetOption(e3, "offset", ["auto", "never"], "auto");
      }(t2), a2 = ToTemporalRoundingMode(t2, "trunc"), i2 = GetTemporalUnit(t2, "smallestUnit", "time", void 0);
      if ("hour" === i2)
        throw new RangeError('smallestUnit must be a time unit other than "hour"');
      const s2 = function ToTimeZoneNameOption(e3) {
        return GetOption(e3, "timeZoneName", ["auto", "never", "critical"], "auto");
      }(t2), { precision: l2, unit: d2, increment: m2 } = ToSecondsStringPrecisionRecord(i2, o2);
      return TemporalZonedDateTimeToString(this, l2, r2, s2, n2, { unit: d2, increment: m2, roundingMode: a2 });
    }
    toLocaleString(e2, t2) {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      const r2 = GetOptionsObject(t2), o2 = Yt(null);
      if (CopyDataProperties(o2, r2, ["timeZone"]), void 0 !== r2.timeZone)
        throw new TypeError("ZonedDateTime toLocaleString does not accept a timeZone option");
      void 0 === o2.year && void 0 === o2.month && void 0 === o2.day && void 0 === o2.weekday && void 0 === o2.dateStyle && void 0 === o2.hour && void 0 === o2.minute && void 0 === o2.second && void 0 === o2.timeStyle && void 0 === o2.dayPeriod && void 0 === o2.timeZoneName && (o2.timeZoneName = "short");
      let n2 = ToTemporalTimeZoneIdentifier(GetSlot(this, g));
      if (IsTimeZoneOffsetString(n2))
        throw new RangeError("toLocaleString does not support offset string time zones");
      n2 = GetCanonicalTimeZoneIdentifier(n2), o2.timeZone = n2;
      const a2 = new ht(e2, o2), i2 = Call(Ft, a2, []).calendar, s2 = ToTemporalCalendarIdentifier(GetSlot(this, p));
      if ("iso8601" !== s2 && "iso8601" !== i2 && i2 !== s2)
        throw new RangeError(`cannot format ZonedDateTime with calendar ${s2} in locale with calendar ${i2}`);
      return a2.format(GetSlot(this, S));
    }
    toJSON() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return TemporalZonedDateTimeToString(this, "auto");
    }
    valueOf() {
      throw new TypeError("use compare() or equals() to compare Temporal.ZonedDateTime");
    }
    startOfDay() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      const e2 = dateTime(this), t2 = GetIntrinsic("%Temporal.PlainDateTime%"), r2 = GetSlot(this, p), o2 = new t2(GetSlot(e2, i), GetSlot(e2, s), GetSlot(e2, l), 0, 0, 0, 0, 0, 0, r2), a2 = GetSlot(this, g);
      return CreateTemporalZonedDateTime(GetSlot(GetInstantFor(a2, o2, "compatible"), n), a2, r2);
    }
    toInstant() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return new (GetIntrinsic("%Temporal.Instant%"))(GetSlot(this, n));
    }
    toPlainDate() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return TemporalDateTimeToDate(dateTime(this));
    }
    toPlainTime() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return TemporalDateTimeToTime(dateTime(this));
    }
    toPlainDateTime() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return dateTime(this);
    }
    toPlainYearMonth() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      const e2 = GetSlot(this, p);
      return CalendarYearMonthFromFields(e2, PrepareTemporalFields(this, CalendarFields(e2, ["monthCode", "year"]), []));
    }
    toPlainMonthDay() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      const e2 = GetSlot(this, p);
      return CalendarMonthDayFromFields(e2, PrepareTemporalFields(this, CalendarFields(e2, ["day", "monthCode"]), []));
    }
    getISOFields() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      const e2 = dateTime(this), t2 = GetSlot(this, g);
      return { calendar: GetSlot(this, p), isoDay: GetSlot(e2, l), isoHour: GetSlot(e2, d), isoMicrosecond: GetSlot(e2, u), isoMillisecond: GetSlot(e2, h), isoMinute: GetSlot(e2, m), isoMonth: GetSlot(e2, s), isoNanosecond: GetSlot(e2, T), isoSecond: GetSlot(e2, c), isoYear: GetSlot(e2, i), offset: GetOffsetStringFor(t2, GetSlot(this, S)), timeZone: t2 };
    }
    getCalendar() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return ToTemporalCalendarObject(GetSlot(this, p));
    }
    getTimeZone() {
      if (!IsTemporalZonedDateTime(this))
        throw new TypeError("invalid receiver");
      return ToTemporalTimeZoneObject(GetSlot(this, g));
    }
    static from(e2, t2) {
      const r2 = GetOptionsObject(t2);
      return IsTemporalZonedDateTime(e2) ? (ToTemporalDisambiguation(r2), ToTemporalOffset(r2, "reject"), ToTemporalOverflow(r2), CreateTemporalZonedDateTime(GetSlot(e2, n), GetSlot(e2, g), GetSlot(e2, p))) : ToTemporalZonedDateTime(e2, r2);
    }
    static compare(t2, r2) {
      const o2 = ToTemporalZonedDateTime(t2), a2 = ToTemporalZonedDateTime(r2), i2 = GetSlot(o2, n), s2 = GetSlot(a2, n);
      return import_jsbi.default.lessThan(import_jsbi.default.BigInt(i2), import_jsbi.default.BigInt(s2)) ? -1 : import_jsbi.default.greaterThan(import_jsbi.default.BigInt(i2), import_jsbi.default.BigInt(s2)) ? 1 : 0;
    }
  };
  function dateTime(e2) {
    return GetPlainDateTimeFor(GetSlot(e2, g), GetSlot(e2, S), GetSlot(e2, p));
  }
  MakeIntrinsicClass(ZonedDateTime, "Temporal.ZonedDateTime");
  var Pt = Object.freeze({ __proto__: null, Calendar, Duration, Instant, Now: Et, PlainDate, PlainDateTime, PlainMonthDay, PlainTime, PlainYearMonth, TimeZone, ZonedDateTime });
  var Zt = [Instant, Calendar, PlainDate, PlainDateTime, Duration, PlainMonthDay, PlainTime, TimeZone, PlainYearMonth, ZonedDateTime];
  for (const e2 of Zt) {
    const t2 = Object.getOwnPropertyDescriptor(e2, "prototype");
    (t2.configurable || t2.enumerable || t2.writable) && (t2.configurable = false, t2.enumerable = false, t2.writable = false, Object.defineProperty(e2, "prototype", t2));
  }

  // src/config.js
  var DEFAULT_CONFIG = {
    defaultSpan: "10 years",
    position: "bottom",
    height: 56,
    centerLabel: true,
    labelFormat: "auto",
    noTimestamp: "fade",
    animation: {
      duration: 600,
      easing: "ease-in-out"
    },
    eraSuffix: {
      bce: "BCE",
      ce: "CE"
    }
  };
  function resolveConfig(userConfig) {
    if (!userConfig || typeof userConfig !== "object") {
      return { ...DEFAULT_CONFIG, animation: { ...DEFAULT_CONFIG.animation }, eraSuffix: { ...DEFAULT_CONFIG.eraSuffix } };
    }
    const merged = { ...DEFAULT_CONFIG, ...userConfig };
    merged.animation = {
      ...DEFAULT_CONFIG.animation,
      ...userConfig.animation || {}
    };
    merged.eraSuffix = {
      ...DEFAULT_CONFIG.eraSuffix,
      ...userConfig.eraSuffix || {}
    };
    return merged;
  }

  // src/span-parser.js
  var UNIT_MAP = {
    second: "seconds",
    seconds: "seconds",
    minute: "minutes",
    minutes: "minutes",
    hour: "hours",
    hours: "hours",
    day: "days",
    days: "days",
    week: "weeks",
    weeks: "weeks",
    month: "months",
    months: "months",
    year: "years",
    years: "years",
    century: "centuries",
    centuries: "centuries"
  };
  var MS_PER_UNIT = {
    seconds: 1e3,
    minutes: 6e4,
    hours: 36e5,
    days: 864e5,
    weeks: 6048e5,
    months: 2629746e3,
    years: 31556952e3,
    centuries: 31556952e5
  };
  function parseSpan(spanString) {
    if (typeof spanString !== "string") {
      console.warn("parseSpan: expected a string, got", typeof spanString);
      return null;
    }
    const trimmed = spanString.trim();
    const match = trimmed.match(/^(\d+(?:\.\d+)?)\s+([a-zA-Z]+)$/);
    if (!match) {
      console.warn("parseSpan: could not parse span string:", spanString);
      return null;
    }
    const value = parseFloat(match[1]);
    const rawUnit = match[2].toLowerCase();
    const unit = UNIT_MAP[rawUnit];
    if (!unit) {
      console.warn("parseSpan: unrecognized unit:", match[2]);
      return null;
    }
    return { unit, value };
  }
  function spanToMilliseconds(parsedSpan) {
    if (!parsedSpan || !parsedSpan.unit || parsedSpan.value == null) {
      return null;
    }
    const multiplier = MS_PER_UNIT[parsedSpan.unit];
    if (multiplier == null) {
      return null;
    }
    return parsedSpan.value * multiplier;
  }
  function spanToString(parsedSpan) {
    if (!parsedSpan || !parsedSpan.unit || parsedSpan.value == null) {
      return "";
    }
    const value = parsedSpan.value;
    const unit = parsedSpan.unit;
    if (value === 1) {
      return `${value} ${unit.replace(/s$/, "")}`;
    }
    return `${value} ${unit}`;
  }

  // src/timeline-model.js
  var RE_YEAR_ONLY = /^(-?\d{4,6})$/;
  var RE_YEAR_MONTH = /^(-?\d{4,6})-(\d{2})$/;
  var RE_DATE_ONLY = /^(-?\d{4,6})-(\d{2})-(\d{2})$/;
  var RE_DATETIME = /^(-?\d{4,6})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(\.\d+)?$/;
  function parseTimestamp(str) {
    if (typeof str !== "string" || str.trim() === "") {
      return null;
    }
    const s2 = str.trim();
    try {
      if (RE_YEAR_ONLY.test(s2)) {
        const year = parseInt(s2, 10);
        return Pt.PlainDateTime.from({ year, month: 1, day: 1, hour: 0, minute: 0, second: 0 });
      }
      if (RE_YEAR_MONTH.test(s2)) {
        const m2 = s2.match(RE_YEAR_MONTH);
        const year = parseInt(m2[1], 10);
        const month = parseInt(m2[2], 10);
        return Pt.PlainDateTime.from({ year, month, day: 1, hour: 0, minute: 0, second: 0 });
      }
      if (RE_DATE_ONLY.test(s2)) {
        const m2 = s2.match(RE_DATE_ONLY);
        const year = parseInt(m2[1], 10);
        const month = parseInt(m2[2], 10);
        const day = parseInt(m2[3], 10);
        return Pt.PlainDateTime.from({ year, month, day, hour: 0, minute: 0, second: 0 });
      }
      if (RE_DATETIME.test(s2)) {
        return Pt.PlainDateTime.from(s2);
      }
      console.warn("parseTimestamp: unrecognized timestamp format:", str);
      return null;
    } catch (e2) {
      console.warn("parseTimestamp: failed to parse timestamp:", str, e2.message);
      return null;
    }
  }
  function buildTimelineModel(slides, config) {
    const entries = slides.map((slideEl, slideIndex) => {
      const rawTimestamp = slideEl.dataset ? slideEl.dataset.timestamp : void 0;
      const rawSpan = slideEl.dataset ? slideEl.dataset.span : void 0;
      let timestamp = null;
      let temporal = false;
      if (rawTimestamp != null && rawTimestamp !== "") {
        timestamp = parseTimestamp(rawTimestamp);
        if (timestamp !== null) {
          temporal = true;
        }
      }
      let parsedSpan = null;
      let spanMs = null;
      if (rawSpan != null && rawSpan !== "") {
        parsedSpan = parseSpan(rawSpan);
      } else {
        parsedSpan = parseSpan(config.defaultSpan);
      }
      if (parsedSpan === null) {
        if (temporal) {
          console.warn("buildTimelineModel: slide", slideIndex, "has a valid timestamp but an invalid span; marking as non-temporal");
          temporal = false;
        }
      } else {
        spanMs = spanToMilliseconds(parsedSpan);
      }
      return {
        slideIndex,
        slideEl,
        temporal,
        timestamp,
        parsedSpan,
        spanMs,
        visited: false
      };
    });
    const temporalEntries = entries.filter((e2) => e2.temporal);
    let minTimestamp = null;
    let maxTimestamp = null;
    for (const entry of temporalEntries) {
      if (minTimestamp === null || Pt.PlainDateTime.compare(entry.timestamp, minTimestamp) < 0) {
        minTimestamp = entry.timestamp;
      }
      if (maxTimestamp === null || Pt.PlainDateTime.compare(entry.timestamp, maxTimestamp) > 0) {
        maxTimestamp = entry.timestamp;
      }
    }
    return {
      entries,
      temporalEntries,
      minTimestamp,
      maxTimestamp
    };
  }

  // src/ticker-renderer.js
  var SVG_NS = "http://www.w3.org/2000/svg";
  var STYLES_INJECTED_ATTR = "data-tl-styles-injected";
  var TICK_INTERVAL_TABLE = [
    { maxSpan: 12e4, unit: "second", value: 10 },
    { maxSpan: 36e5, unit: "minute", value: 5 },
    { maxSpan: 432e5, unit: "hour", value: 1 },
    { maxSpan: 6048e5, unit: "hour", value: 12 },
    { maxSpan: 7776e6, unit: "week", value: 1 },
    { maxSpan: 473364e5, unit: "month", value: 1 },
    { maxSpan: 31556952e4, unit: "year", value: 1 },
    { maxSpan: 31556952e5, unit: "year", value: 10 },
    { maxSpan: 31556952e6, unit: "year", value: 100 }
  ];
  var DEFAULT_TICK_INTERVAL = { unit: "year", value: 500 };
  var CSS = `
.tl-ticker {
  position: absolute;
  left: 0;
  width: 100%;
  z-index: 100;
  font-family: inherit;
  --tl-tick-color: rgba(255,255,255,0.6);
  --tl-label-color: rgba(255,255,255,0.8);
  --tl-marker-color: #fff;
  --tl-center-color: #4af;
  --tl-dot-visited: rgba(255,255,255,0.7);
  --tl-dot-unvisited: rgba(255,255,255,0.25);
  --tl-dot-current: #4af;
  --tl-font-size: 11px;
}
.tl-ticker.tl-position-bottom { bottom: 0; }
.tl-ticker.tl-position-top { top: 0; }
`;
  function svgEl(tag, attrs) {
    const el = document.createElementNS(SVG_NS, tag);
    for (const [k2, v2] of Object.entries(attrs)) {
      el.setAttribute(k2, v2);
    }
    return el;
  }
  function clearGroup(group) {
    while (group.firstChild) {
      group.removeChild(group.firstChild);
    }
  }
  function plainDateTimeToMs(pdt) {
    const year = pdt.year;
    const dayOfYear = getDayOfYear(pdt);
    const msInDay = (pdt.hour * 3600 + pdt.minute * 60 + pdt.second) * 1e3 + pdt.millisecond;
    return year * 365.2425 * 864e5 + (dayOfYear - 1) * 864e5 + msInDay;
  }
  function getDayOfYear(pdt) {
    const daysInMonths = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const year = pdt.year;
    const isLeap = year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    if (isLeap) {
      daysInMonths[2] = 29;
    }
    let day = 0;
    for (let m2 = 1; m2 < pdt.month; m2++) {
      day += daysInMonths[m2];
    }
    day += pdt.day;
    return day;
  }
  function padTwo(n2) {
    return String(n2).padStart(2, "0");
  }
  var MONTH_ABBREVS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var DAY_ABBREVS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  function injectStyles() {
    if (document.head.hasAttribute(STYLES_INJECTED_ATTR)) {
      return;
    }
    const style = document.createElement("style");
    style.textContent = CSS;
    document.head.appendChild(style);
    document.head.setAttribute(STYLES_INJECTED_ATTR, "true");
  }
  function injectTicker(revealEl, config) {
    injectStyles();
    const svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttribute("class", "tl-ticker");
    svg.setAttribute("xmlns", SVG_NS);
    const axisGroup = document.createElementNS(SVG_NS, "g");
    axisGroup.setAttribute("class", "tl-axis");
    svg.appendChild(axisGroup);
    const ticksGroup = document.createElementNS(SVG_NS, "g");
    ticksGroup.setAttribute("class", "tl-ticks");
    svg.appendChild(ticksGroup);
    const labelsA = document.createElementNS(SVG_NS, "g");
    labelsA.setAttribute("class", "tl-labels-a tl-labels");
    svg.appendChild(labelsA);
    const labelsB = document.createElementNS(SVG_NS, "g");
    labelsB.setAttribute("class", "tl-labels-b tl-labels");
    svg.appendChild(labelsB);
    const dotsGroup = document.createElementNS(SVG_NS, "g");
    dotsGroup.setAttribute("class", "tl-dots");
    svg.appendChild(dotsGroup);
    const centerGroup = document.createElementNS(SVG_NS, "g");
    centerGroup.setAttribute("class", "tl-center");
    svg.appendChild(centerGroup);
    revealEl.appendChild(svg);
    positionTicker(svg, config);
    return svg;
  }
  function positionTicker(svg, config) {
    svg.style.height = config.height + "px";
    svg.classList.remove("tl-position-top", "tl-position-bottom");
    if (config.position === "top") {
      svg.classList.add("tl-position-top");
    } else {
      svg.classList.add("tl-position-bottom");
    }
  }
  function resolveTickInterval(spanMs) {
    for (const entry of TICK_INTERVAL_TABLE) {
      if (spanMs < entry.maxSpan) {
        return { unit: entry.unit, value: entry.value };
      }
    }
    return { ...DEFAULT_TICK_INTERVAL };
  }
  function snapToFloor(pdt, unit, value) {
    switch (unit) {
      case "second": {
        const snappedSecond = Math.floor(pdt.second / value) * value;
        return Pt.PlainDateTime.from({
          year: pdt.year,
          month: pdt.month,
          day: pdt.day,
          hour: pdt.hour,
          minute: pdt.minute,
          second: snappedSecond
        });
      }
      case "minute": {
        const snappedMinute = Math.floor(pdt.minute / value) * value;
        return Pt.PlainDateTime.from({
          year: pdt.year,
          month: pdt.month,
          day: pdt.day,
          hour: pdt.hour,
          minute: snappedMinute,
          second: 0
        });
      }
      case "hour": {
        const snappedHour = Math.floor(pdt.hour / value) * value;
        return Pt.PlainDateTime.from({
          year: pdt.year,
          month: pdt.month,
          day: pdt.day,
          hour: snappedHour,
          minute: 0,
          second: 0
        });
      }
      case "day": {
        return Pt.PlainDateTime.from({
          year: pdt.year,
          month: pdt.month,
          day: pdt.day,
          hour: 0,
          minute: 0,
          second: 0
        });
      }
      case "week": {
        const dow = pdt.dayOfWeek;
        const daysToSubtract = dow % 7;
        return Pt.PlainDateTime.from({
          year: pdt.year,
          month: pdt.month,
          day: pdt.day,
          hour: 0,
          minute: 0,
          second: 0
        }).subtract({ days: daysToSubtract });
      }
      case "month": {
        return Pt.PlainDateTime.from({
          year: pdt.year,
          month: pdt.month,
          day: 1,
          hour: 0,
          minute: 0,
          second: 0
        });
      }
      case "year": {
        const snappedYear = Math.floor(pdt.year / value) * value;
        const safeYear = snappedYear === 0 ? -1 : snappedYear;
        return Pt.PlainDateTime.from({
          year: safeYear,
          month: 1,
          day: 1,
          hour: 0,
          minute: 0,
          second: 0
        });
      }
      default:
        return pdt;
    }
  }
  function advanceTick(pdt, unit, value) {
    switch (unit) {
      case "second":
        return pdt.add({ seconds: value });
      case "minute":
        return pdt.add({ minutes: value });
      case "hour":
        return pdt.add({ hours: value });
      case "day":
        return pdt.add({ days: value });
      case "week":
        return pdt.add({ weeks: value });
      case "month":
        return pdt.add({ months: value });
      case "year":
        return pdt.add({ years: value });
      default:
        return pdt.add({ years: value });
    }
  }
  function computeTicks(centerTimestamp, spanMs, width) {
    const { unit, value } = resolveTickInterval(spanMs);
    const centerMs = plainDateTimeToMs(centerTimestamp);
    const halfSpan = spanMs / 2;
    const startMs = centerMs - halfSpan;
    const endMs = centerMs + halfSpan;
    const centerX = width / 2;
    let startPdt;
    try {
      startPdt = centerTimestamp.subtract(durationFromMs(halfSpan + spanMs * 0.1));
    } catch (e2) {
      startPdt = centerTimestamp.subtract({ years: 1 });
    }
    let current = snapToFloor(startPdt, unit, value);
    const ticks = [];
    let safetyLimit = 2e3;
    while (safetyLimit-- > 0) {
      const tickMs = plainDateTimeToMs(current);
      if (tickMs > endMs + spanMs * 0.1) {
        break;
      }
      const x2 = centerX + (tickMs - centerMs) / spanMs * width;
      if (x2 >= -20 && x2 <= width + 20) {
        const label = formatTickLabel(current, unit, value, { bce: "BCE", ce: "CE" });
        ticks.push({ timestamp: current, x: x2, label });
      }
      const next = advanceTick(current, unit, value);
      if (plainDateTimeToMs(next) <= tickMs) {
        break;
      }
      current = next;
    }
    return ticks;
  }
  function durationFromMs(ms) {
    const HOUR_MS = 36e5;
    const DAY_MS = 864e5;
    const YEAR_MS = 31556952e3;
    if (ms >= YEAR_MS) {
      const years = Math.floor(ms / YEAR_MS);
      return { years: Math.max(years, 1) };
    }
    if (ms >= DAY_MS) {
      const days = Math.floor(ms / DAY_MS);
      return { days: Math.max(days, 1) };
    }
    const hours = Math.floor(ms / HOUR_MS);
    return { hours: Math.max(hours, 1) };
  }
  function formatTickLabel(timestamp, intervalUnit, intervalValue, eraSuffix) {
    const eras = eraSuffix || { bce: "BCE", ce: "CE" };
    if (intervalUnit === "second" || intervalUnit === "minute") {
      return `${padTwo(timestamp.hour)}:${padTwo(timestamp.minute)}`;
    }
    if (intervalUnit === "hour") {
      if (intervalValue === 1) {
        const h2 = timestamp.hour;
        const ampm = h2 < 12 ? "am" : "pm";
        const h12 = h2 % 12 === 0 ? 12 : h2 % 12;
        return `${h12}${ampm}`;
      } else {
        const dow = DAY_ABBREVS[timestamp.dayOfWeek % 7];
        return `${dow} ${padTwo(timestamp.hour)}:00`;
      }
    }
    if (intervalUnit === "week" || intervalUnit === "day") {
      const mon = MONTH_ABBREVS[timestamp.month - 1];
      return `${mon} ${timestamp.day}`;
    }
    if (intervalUnit === "month") {
      if (timestamp.year <= 0) {
        const bceYear = 1 - timestamp.year;
        return `${MONTH_ABBREVS[timestamp.month - 1]} ${bceYear} ${eras.bce}`;
      }
      return `${MONTH_ABBREVS[timestamp.month - 1]} ${timestamp.year}`;
    }
    if (intervalUnit === "year") {
      if (intervalValue === 1) {
        if (timestamp.year <= 0) {
          return `${1 - timestamp.year} ${eras.bce}`;
        }
        return `${timestamp.year}`;
      }
      if (intervalValue === 10) {
        if (timestamp.year <= 0) {
          const bceYear = 1 - timestamp.year;
          const decadeBase = Math.floor(bceYear / 10) * 10;
          return `${decadeBase}s ${eras.bce}`;
        }
        const decade = Math.floor(timestamp.year / 10) * 10;
        return `${decade}s`;
      }
      if (intervalValue === 100) {
        if (timestamp.year <= 0) {
          const bceYear = 1 - timestamp.year;
          const centuryBase = Math.floor(bceYear / 100) * 100;
          return `${centuryBase}s ${eras.bce}`;
        }
        const century = Math.floor(timestamp.year / 100) * 100;
        return `${century}s`;
      }
      if (timestamp.year <= 0) {
        return `${1 - timestamp.year} ${eras.bce}`;
      }
      return `${timestamp.year}`;
    }
    return `${timestamp.year}`;
  }
  function renderTicker(svgElement, state, model, config) {
    const rect = svgElement.getBoundingClientRect();
    const width = rect.width || svgElement.clientWidth || 800;
    const height = config.height;
    const { centerTimestamp, spanMs, activeLayer, layerOpacity } = state;
    const ticks = computeTicks(centerTimestamp, spanMs, width);
    const axisGroup = svgElement.querySelector(".tl-axis");
    if (axisGroup) {
      clearGroup(axisGroup);
      const axisY = height - 14;
      const line = svgEl("line", {
        class: "tl-axis-line",
        x1: "0",
        y1: axisY,
        x2: "100%",
        y2: axisY,
        stroke: "var(--tl-tick-color)",
        "stroke-width": "1"
      });
      axisGroup.appendChild(line);
    }
    const ticksGroup = svgElement.querySelector(".tl-ticks");
    if (ticksGroup) {
      renderTickLines(ticksGroup, ticks, height);
    }
    const labelsA = svgElement.querySelector(".tl-labels-a");
    const labelsB = svgElement.querySelector(".tl-labels-b");
    if (labelsA && labelsB) {
      const opA = layerOpacity ? layerOpacity.a != null ? layerOpacity.a : 1 : 1;
      const opB = layerOpacity ? layerOpacity.b != null ? layerOpacity.b : 0 : 0;
      if (activeLayer === "a") {
        renderTickLabels(labelsA, ticks, height, opA);
        labelsB.setAttribute("opacity", String(opB));
      } else {
        renderTickLabels(labelsB, ticks, height, opB);
        labelsA.setAttribute("opacity", String(opA));
      }
    }
    const dotsGroup = svgElement.querySelector(".tl-dots");
    if (dotsGroup) {
      updateDotMarkers(dotsGroup, model, centerTimestamp, spanMs, width, height, config);
    }
    const centerGroup = svgElement.querySelector(".tl-center");
    if (centerGroup) {
      renderCenterMarker(centerGroup, width, height, centerTimestamp, config);
    }
  }
  function renderTickLines(group, ticks, svgHeight) {
    clearGroup(group);
    const axisY = svgHeight - 14;
    for (const tick of ticks) {
      const isMajor = tick.label !== "";
      const tickHeight = isMajor ? 8 : 4;
      const line = svgEl("line", {
        class: "tl-tick",
        x1: tick.x,
        y1: axisY - tickHeight,
        x2: tick.x,
        y2: axisY,
        stroke: "var(--tl-tick-color)",
        "stroke-width": isMajor ? "1.5" : "1"
      });
      group.appendChild(line);
    }
  }
  function renderTickLabels(group, ticks, svgHeight, opacity) {
    clearGroup(group);
    group.setAttribute("opacity", String(opacity));
    const labelY = svgHeight - 16;
    for (const tick of ticks) {
      if (!tick.label) {
        continue;
      }
      const text = svgEl("text", {
        class: "tl-tick-label",
        x: tick.x,
        y: labelY,
        "text-anchor": "middle",
        fill: "var(--tl-label-color)",
        "font-size": "var(--tl-font-size)"
      });
      text.textContent = tick.label;
      group.appendChild(text);
    }
  }
  function renderCenterMarker(centerGroup, svgWidth, svgHeight, centerTimestamp, config) {
    clearGroup(centerGroup);
    const cx = svgWidth / 2;
    const axisY = svgHeight - 14;
    const labelHeight = 16;
    const line = svgEl("line", {
      class: "tl-center-line",
      x1: cx,
      y1: 0,
      x2: cx,
      y2: axisY - labelHeight,
      stroke: "var(--tl-center-color)",
      "stroke-width": "2"
    });
    centerGroup.appendChild(line);
    const diamondSize = 5;
    const dy = axisY;
    const diamond = svgEl("polygon", {
      class: "tl-center-marker",
      points: `${cx},${dy - diamondSize} ${cx + diamondSize},${dy} ${cx},${dy + diamondSize} ${cx - diamondSize},${dy}`,
      fill: "var(--tl-center-color)"
    });
    centerGroup.appendChild(diamond);
    if (config.centerLabel && centerTimestamp) {
      const labelText = formatCenterLabel(centerTimestamp);
      const text = svgEl("text", {
        class: "tl-center-label",
        x: cx,
        y: svgHeight - 2,
        "text-anchor": "middle",
        fill: "var(--tl-center-color)",
        "font-size": "var(--tl-font-size)",
        "font-weight": "bold"
      });
      text.textContent = labelText;
      centerGroup.appendChild(text);
    }
  }
  function formatCenterLabel(pdt) {
    if (pdt.year <= 0) {
      const bceYear = 1 - pdt.year;
      return `${bceYear} BCE`;
    }
    const month = MONTH_ABBREVS[pdt.month - 1];
    if (pdt.hour !== 0 || pdt.minute !== 0 || pdt.second !== 0) {
      return `${month} ${pdt.day}, ${pdt.year} ${padTwo(pdt.hour)}:${padTwo(pdt.minute)}`;
    }
    return `${month} ${pdt.day}, ${pdt.year}`;
  }
  function updateDotMarkers(dotsGroup, model, centerTimestamp, spanMs, svgWidth, svgHeight, config) {
    clearGroup(dotsGroup);
    if (!model || !model.temporalEntries) {
      return;
    }
    const centerMs = plainDateTimeToMs(centerTimestamp);
    const centerX = svgWidth / 2;
    const dotY = svgHeight - 14;
    for (const entry of model.temporalEntries) {
      const entryMs = plainDateTimeToMs(entry.timestamp);
      const x2 = centerX + (entryMs - centerMs) / spanMs * svgWidth;
      if (x2 < 0 || x2 > svgWidth) {
        continue;
      }
      const isCurrent = Pt.PlainDateTime.compare(entry.timestamp, centerTimestamp) === 0;
      const isVisited = entry.visited;
      let fill;
      let radius;
      if (isCurrent) {
        fill = "var(--tl-dot-current)";
        radius = 5;
      } else if (isVisited) {
        fill = "var(--tl-dot-visited)";
        radius = 4;
      } else {
        fill = "var(--tl-dot-unvisited)";
        radius = 3;
      }
      const circle = svgEl("circle", {
        class: "tl-dot",
        cx: x2,
        cy: dotY,
        r: radius,
        fill
      });
      dotsGroup.appendChild(circle);
    }
  }

  // src/animation.js
  function getDayOfYear2(pdt) {
    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const year = pdt.year;
    const isLeap = year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    if (isLeap)
      monthDays[1] = 29;
    let day = 0;
    for (let i2 = 0; i2 < pdt.month - 1; i2++)
      day += monthDays[i2];
    return day + pdt.day;
  }
  function plainDateTimeToMs2(pdt) {
    const dayOfYear = getDayOfYear2(pdt);
    const msInDay = (pdt.hour * 3600 + pdt.minute * 60 + pdt.second) * 1e3 + pdt.millisecond;
    return pdt.year * 365.2425 * 864e5 + (dayOfYear - 1) * 864e5 + msInDay;
  }
  function msToPlainDateTime(ms) {
    const msPerYear = 365.2425 * 864e5;
    let year = Math.floor(ms / msPerYear);
    let remainder = ms - year * msPerYear;
    if (remainder < 0) {
      year -= 1;
      remainder += msPerYear;
    }
    const msPerDay = 864e5;
    const dayOfYear = Math.floor(remainder / msPerDay);
    const msInDay = remainder - dayOfYear * msPerDay;
    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const isLeap = year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    if (isLeap)
      monthDays[1] = 29;
    let month = 1;
    let remaining = dayOfYear;
    for (let i2 = 0; i2 < 12; i2++) {
      if (remaining < monthDays[i2]) {
        month = i2 + 1;
        break;
      }
      remaining -= monthDays[i2];
    }
    const day = Math.max(1, remaining + 1);
    const hour = Math.floor(msInDay / 36e5);
    const minute = Math.floor(msInDay % 36e5 / 6e4);
    const second = Math.floor(msInDay % 6e4 / 1e3);
    const millisecond = Math.floor(msInDay % 1e3);
    const safeYear = year === 0 ? -1 : year;
    try {
      return Pt.PlainDateTime.from({ year: safeYear, month, day, hour, minute, second, millisecond });
    } catch (e2) {
      return Pt.PlainDateTime.from({ year: safeYear, month: 1, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0 });
    }
  }
  function lerp(a2, b2, t2) {
    return a2 + (b2 - a2) * t2;
  }
  function logLerp(a2, b2, t2) {
    return Math.exp(lerp(Math.log(a2), Math.log(b2), t2));
  }
  function resolveEasing(easingConfig) {
    const name = easingConfig || "ease-in-out";
    switch (name) {
      case "ease-in-out":
        return (t2) => t2 < 0.5 ? 2 * t2 * t2 : -1 + (4 - 2 * t2) * t2;
      case "ease-in":
        return (t2) => t2 * t2;
      case "ease-out":
        return (t2) => t2 * (2 - t2);
      case "linear":
        return (t2) => t2;
      default:
        console.warn(`[timeline] Unknown easing "${name}", falling back to ease-in-out`);
        return (t2) => t2 < 0.5 ? 2 * t2 * t2 : -1 + (4 - 2 * t2) * t2;
    }
  }
  var AnimationController = class {
    constructor(config, onFrame, onComplete) {
      this._config = config;
      this._onFrame = onFrame;
      this._onComplete = onComplete;
      this._rafId = null;
      this._startTime = null;
      this._fromMs = null;
      this._toMs = null;
      this._fromSpanMs = null;
      this._toSpanMs = null;
      this._toState = null;
      this._duration = null;
      this._easing = null;
      this._currentMs = null;
      this._currentSpanMs = null;
    }
    start(from, to) {
      if (this.isRunning()) {
        this.cancel();
        const current = this.getCurrentState();
        if (current) {
          from = current;
        }
      }
      const animConfig = this._config && this._config.animation || {};
      const durationMs = animConfig.duration != null ? animConfig.duration : 800;
      const easingName = animConfig.easing || "ease-in-out";
      this._fromMs = plainDateTimeToMs2(from.timestamp);
      this._toMs = plainDateTimeToMs2(to.timestamp);
      this._fromSpanMs = from.spanMs;
      this._toSpanMs = to.spanMs;
      this._toState = to;
      this._duration = durationMs;
      this._easing = resolveEasing(easingName);
      this._startTime = null;
      this._currentMs = this._fromMs;
      this._currentSpanMs = this._fromSpanMs;
      const tick = (now) => {
        if (this._startTime === null) {
          this._startTime = now;
        }
        const elapsed = now - this._startTime;
        const t2 = Math.min(1, elapsed / this._duration);
        const easedT = this._easing(t2);
        this._currentMs = lerp(this._fromMs, this._toMs, easedT);
        this._currentSpanMs = logLerp(this._fromSpanMs, this._toSpanMs, easedT);
        const timestamp = msToPlainDateTime(this._currentMs);
        this._onFrame({ timestamp, spanMs: this._currentSpanMs, t: easedT });
        if (t2 >= 1) {
          this._rafId = null;
          this._onComplete({ timestamp: this._toState.timestamp, spanMs: this._toState.spanMs });
          return;
        }
        this._rafId = requestAnimationFrame(tick);
      };
      this._rafId = requestAnimationFrame(tick);
    }
    getCurrentState() {
      if (this._currentMs === null || this._currentSpanMs === null) {
        return null;
      }
      return {
        timestamp: msToPlainDateTime(this._currentMs),
        spanMs: this._currentSpanMs
      };
    }
    cancel() {
      if (this._rafId !== null) {
        cancelAnimationFrame(this._rafId);
        this._rafId = null;
      }
    }
    isRunning() {
      return this._rafId !== null;
    }
  };
  function computeLabelCrossfade(formatChanged, t2, currentActive) {
    if (!formatChanged) {
      return {
        activeLayer: currentActive,
        opacities: {
          a: currentActive === "a" ? 1 : 0,
          b: currentActive === "b" ? 1 : 0
        }
      };
    }
    const progress = Math.max(0, Math.min(1, (t2 - 0.2) / 0.6));
    const incoming = currentActive === "a" ? "b" : "a";
    const opacities = {};
    opacities[currentActive] = 1 - progress;
    opacities[incoming] = progress;
    return { activeLayer: progress >= 1 ? incoming : currentActive, opacities };
  }

  // src/slide-data-api.js
  function populatePlaceholders(slideEl, timestamp, spanString) {
    const tsEls = slideEl.querySelectorAll(".tl-timestamp");
    const labelEls = slideEl.querySelectorAll(".tl-label");
    const tsText = timestamp ? formatTimestampForDisplay(timestamp, { bce: "BCE", ce: "CE" }) : "";
    const labelText = spanString || "";
    tsEls.forEach((el) => el.textContent = tsText);
    labelEls.forEach((el) => el.textContent = labelText);
  }
  function formatTimestampForDisplay(pdt, eraSuffix) {
    const hasTime = pdt.hour !== 0 || pdt.minute !== 0 || pdt.second !== 0;
    const year = pdt.year;
    const displayYear = year <= 0 ? `${1 - year} ${eraSuffix.bce}` : `${year}`;
    const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = MONTHS[pdt.month - 1];
    const day = pdt.day;
    if (hasTime) {
      const h2 = pdt.hour;
      const m2 = String(pdt.minute).padStart(2, "0");
      const ampm = h2 >= 12 ? "PM" : "AM";
      const h12 = h2 % 12 || 12;
      return `${month} ${day}, ${displayYear}, ${h12}:${m2} ${ampm}`;
    }
    return `${month} ${day}, ${displayYear}`;
  }
  function dispatchTimelineChange(deckEl, timestamp, spanMs, spanString) {
    const event = new CustomEvent("timeline:change", {
      bubbles: true,
      detail: {
        timestamp: timestamp || null,
        timestampISO: timestamp ? timestamp.toString() : null,
        span: spanMs || null,
        spanString: spanString || null
      }
    });
    deckEl.dispatchEvent(event);
  }
  function clearPlaceholders(slideEl) {
    populatePlaceholders(slideEl, null, null);
  }

  // src/index.js
  var RevealTimeline = {
    id: "timeline",
    init(deck) {
      const userConfig = deck.getConfig && deck.getConfig().timeline || {};
      const config = resolveConfig(userConfig);
      const slides = deck.getSlides();
      const model = buildTimelineModel(slides, config);
      const revealEl = deck.getRevealElement();
      const svgEl2 = injectTicker(revealEl, config);
      let activeLayer = "a";
      let layerOpacity = { a: 1, b: 0 };
      let currentTimestamp = null;
      let currentSpanMs = null;
      let currentIntervalKey = null;
      function getIntervalKey(spanMs) {
        if (spanMs < 12e4)
          return "second-10";
        if (spanMs < 36e5)
          return "minute-5";
        if (spanMs < 432e5)
          return "hour-1";
        if (spanMs < 6048e5)
          return "hour-12";
        if (spanMs < 7776e6)
          return "week-1";
        if (spanMs < 473364e5)
          return "month-1";
        if (spanMs < 31556952e4)
          return "year-1";
        if (spanMs < 31556952e5)
          return "year-10";
        if (spanMs < 31556952e6)
          return "year-100";
        return "year-500";
      }
      function renderFrame(timestamp, spanMs, animT) {
        const newKey = getIntervalKey(spanMs);
        const formatChanged = newKey !== currentIntervalKey;
        const crossfade = computeLabelCrossfade(formatChanged, animT != null ? animT : 1, activeLayer);
        if (crossfade.activeLayer !== activeLayer) {
          activeLayer = crossfade.activeLayer;
          currentIntervalKey = newKey;
        } else if (formatChanged && animT === null) {
          activeLayer = activeLayer === "a" ? "b" : "a";
          currentIntervalKey = newKey;
        }
        layerOpacity = crossfade.opacities;
        const state = {
          centerTimestamp: timestamp,
          spanMs,
          activeLayer,
          layerOpacity
        };
        renderTicker(svgEl2, state, model, config);
      }
      function renderInitial(entry) {
        if (!entry || !entry.temporal)
          return;
        currentTimestamp = entry.timestamp;
        currentSpanMs = entry.spanMs;
        currentIntervalKey = getIntervalKey(currentSpanMs);
        layerOpacity = { a: 1, b: 0 };
        activeLayer = "a";
        renderFrame(currentTimestamp, currentSpanMs, null);
      }
      const initialState = deck.getState();
      const initialIndex = initialState ? initialState.indexh || 0 : 0;
      const initialEntry = model.entries[initialIndex] || model.entries[0];
      if (initialEntry && initialEntry.temporal) {
        initialEntry.visited = true;
        renderInitial(initialEntry);
        populatePlaceholders(initialEntry.slideEl, initialEntry.timestamp, spanToString(initialEntry.parsedSpan));
        dispatchTimelineChange(revealEl, initialEntry.timestamp, initialEntry.spanMs, spanToString(initialEntry.parsedSpan));
      } else {
        handleNonTemporal(revealEl);
      }
      const animController = new AnimationController(
        config,
        // onFrame: called each rAF
        ({ timestamp, spanMs, t: t2 }) => {
          renderFrame(timestamp, spanMs, t2);
        },
        // onComplete: called when animation finishes
        ({ timestamp, spanMs }) => {
          currentTimestamp = timestamp;
          currentSpanMs = spanMs;
          renderFrame(timestamp, spanMs, null);
        }
      );
      function handleNonTemporal(deckEl) {
        if (config.noTimestamp === "hide") {
          svgEl2.style.opacity = "0";
          svgEl2.style.display = "none";
        } else if (config.noTimestamp === "freeze") {
        } else {
          svgEl2.style.transition = `opacity ${config.animation.duration}ms ease`;
          svgEl2.style.opacity = "0";
        }
      }
      function handleTemporal(entry) {
        svgEl2.style.display = "";
        svgEl2.style.transition = `opacity ${config.animation.duration}ms ease`;
        svgEl2.style.opacity = "1";
        const from = currentTimestamp ? { timestamp: currentTimestamp, spanMs: currentSpanMs } : null;
        const to = { timestamp: entry.timestamp, spanMs: entry.spanMs };
        currentTimestamp = entry.timestamp;
        currentSpanMs = entry.spanMs;
        if (!from) {
          renderFrame(to.timestamp, to.spanMs, null);
          return;
        }
        if (Pt.PlainDateTime.compare(from.timestamp, to.timestamp) === 0 && from.spanMs === to.spanMs) {
          renderFrame(to.timestamp, to.spanMs, null);
          return;
        }
        animController.start(from, to);
      }
      deck.on("slidechanged", ({ indexh, indexv }) => {
        const flatSlides = deck.getSlides();
        const idx = flatSlides.indexOf(deck.getCurrentSlide ? deck.getCurrentSlide() : flatSlides[indexh]);
        const entry = model.entries[idx] || model.entries[indexh] || null;
        if (!entry || !entry.temporal) {
          const currentSlideEl = deck.getCurrentSlide ? deck.getCurrentSlide() : null;
          if (currentSlideEl)
            clearPlaceholders(currentSlideEl);
          dispatchTimelineChange(revealEl, null, null, null);
          handleNonTemporal(revealEl);
          return;
        }
        if (!entry.visited) {
          entry.visited = true;
        }
        handleTemporal(entry);
        populatePlaceholders(entry.slideEl, entry.timestamp, spanToString(entry.parsedSpan));
        dispatchTimelineChange(revealEl, entry.timestamp, entry.spanMs, spanToString(entry.parsedSpan));
      });
      deck.on("resize", () => {
        if (currentTimestamp && currentSpanMs) {
          renderFrame(currentTimestamp, currentSpanMs, null);
        }
      });
    }
  };
  var src_default = RevealTimeline;
  return __toCommonJS(src_exports);
})();
RevealTimeline=RevealTimeline.default
