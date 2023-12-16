// by K. Shima
// module.exports = (function() {
var f=(function() {
  "use strict";

  /*
   * Generated by PEG.js 0.9.0.
   *
   * http://pegjs.org/
   */

  function peg$subclass(child, parent) {
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function peg$SyntaxError(message, expected, found, location) {
    this.message  = message;
    this.expected = expected;
    this.found    = found;
    this.location = location;
    this.name     = "SyntaxError";

    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, peg$SyntaxError);
    }
  }
    
    peg$subclass(peg$SyntaxError, Error);

    function peg$parse(input, startLine){
	var options = arguments.length > 2 ? arguments[2] : {},
            parser  = this,
	    
            peg$FAILED = {},
	    
            peg$startRuleFunctions = { start: peg$parsestart },
            peg$startRuleFunction  = peg$parsestart,
	    
            peg$c0 = function(f) { return f },
            peg$c1 = { type: "other", description: "initial shebang ('#!') line" },
            peg$c2 = "#!",
            peg$c3 = { type: "literal", value: "#!", description: "\"#!\"" },
            peg$c4 = /^[^\n]/,
            peg$c5 = { type: "class", value: "[^\\n]", description: "[^\\n]" },
            peg$c6 = "\n",
            peg$c7 = { type: "literal", value: "\n", description: "\"\\n\"" },
            peg$c8 = { type: "any", description: "any character" },
            peg$c9 = { type: "other", description: "whitespace" },
            peg$c10 = " ",
            peg$c11 = { type: "literal", value: " ", description: "\" \"" },
            peg$c12 = "\t",
            peg$c13 = { type: "literal", value: "\t", description: "\"\\t\"" },
            peg$c14 = "\r",
            peg$c15 = { type: "literal", value: "\r", description: "\"\\r\"" },
            peg$c16 = { type: "other", description: "comment" },
            peg$c17 = ";",
            peg$c18 = { type: "literal", value: ";", description: "\";\"" },
            peg$c19 = function(it) { return it; },
            peg$c20 = function(q, f) { return outputList([ q, f ], location()) },
            peg$c21 = "(",
            peg$c22 = { type: "literal", value: "(", description: "\"(\"" },
            peg$c23 = ")",
            peg$c24 = { type: "literal", value: ")", description: "\")\"" },
            peg$c25 = function(c) { return outputList(c, location()); },
            peg$c26 = { type: "other", description: "list contents" },
            peg$c27 = function(first, rest) { return buildList(first, rest, 1) },
            peg$c28 = "'",
            peg$c29 = { type: "literal", value: "'", description: "\"'\"" },
            peg$c30 = function() { return outputAtom("quote", location()) },
            peg$c31 = "`",
            peg$c32 = { type: "literal", value: "`", description: "\"`\"" },
            peg$c33 = function() { return outputAtom("quasiquote", location()) },
            peg$c34 = ",@",
            peg$c35 = { type: "literal", value: ",@", description: "\",@\"" },
            peg$c36 = function() { return outputAtom("unquote-splicing", location()) },
            peg$c37 = ",",
            peg$c38 = { type: "literal", value: ",", description: "\",\"" },
            peg$c39 = function() { return outputAtom("unquote", location()) },
            peg$c40 = function(c) {
		return outputString(c.join(""), location())
            },
            peg$c41 = "\"",
            peg$c42 = { type: "literal", value: "\"", description: "\"\\\"\"" },
            peg$c43 = "\\",
            peg$c44 = { type: "literal", value: "\\", description: "\"\\\\\"" },
            peg$c45 = function(c) { return c; },
            peg$c46 = /^["\\]/,
            peg$c47 = { type: "class", value: "[\"\\\\]", description: "[\"\\\\]" },
            peg$c48 = /^[^"\\]/,
            peg$c49 = { type: "class", value: "[^\"\\\\]", description: "[^\"\\\\]" },
            peg$c50 = /^[bfnrtv0]/,
            peg$c51 = { type: "class", value: "[bfnrtv0]", description: "[bfnrtv0]" },
            peg$c52 = function(c) {
		switch(c) {
		case "b": return "\b";
		case "f": return "\f";
		case "n": return "\n";
		case "r": return "\r";
		case "t": return "\t";
		case "v": return "\v";
		case "0": return "\0";
		}
            },
            peg$c53 = function(c) {
		return c;
            },
            peg$c54 = function(c) {
		return outputAtom(c.join(""), location());
            },
            peg$c55 = function(s, c) { return c; },
            peg$c56 = /^[;"'`,\\()\n\t\r ]/,
            peg$c57 = { type: "class", value: "[;\"'`,\\\\()\\n\\t\\r ]", description: "[;\"'`,\\\\()\\n\\t\\r ]" },
            peg$c58 = /^[^;"'`,\\()\n\t\r ]/,
            peg$c59 = { type: "class", value: "[^;\"'`,\\\\()\\n\\t\\r ]", description: "[^;\"'`,\\\\()\\n\\t\\r ]" },
	    
            peg$currPos          = 0,
            peg$savedPos         = 0,
	    peg$posDetailsCache  = [{ line: 1, column: 1, seenCR: false }],
            peg$maxFailPos       = 0,
            peg$maxFailExpected  = [],
            peg$silentFails      = 0,
	    
            peg$result;
	// peg$posDetailsCache[0].line=startLine;
	if ("startRule" in options) {
	    if (!(options.startRule in peg$startRuleFunctions)) {
		throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
	    }
	    
	    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
	}
	
    function text() {
      return input.substring(peg$savedPos, peg$currPos);
    }

    function location() {
      return peg$computeLocation(peg$savedPos, peg$currPos);
    }

    function expected(description) {
      throw peg$buildException(
        null,
        [{ type: "other", description: description }],
        input.substring(peg$savedPos, peg$currPos),
        peg$computeLocation(peg$savedPos, peg$currPos)
      );
    }

    function error(message) {
      throw peg$buildException(
        message,
        null,
        input.substring(peg$savedPos, peg$currPos),
        peg$computeLocation(peg$savedPos, peg$currPos)
      );
    }

    function peg$computePosDetails(pos) {
      var details = peg$posDetailsCache[pos],
          p, ch;

      if (details) {
        return details;
      } else {
        p = pos - 1;
        while (!peg$posDetailsCache[p]) {
          p--;
        }

        details = peg$posDetailsCache[p];
        details = {
          line:   details.line,
          column: details.column,
          seenCR: details.seenCR
        };

        while (p < pos) {
          ch = input.charAt(p);
          if (ch === "\n") {
            if (!details.seenCR) { details.line++; }
            details.column = 1;
            details.seenCR = false;
          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
            details.line++;
            details.column = 1;
            details.seenCR = true;
          } else {
            details.column++;
            details.seenCR = false;
          }

          p++;
        }

        peg$posDetailsCache[pos] = details;
        return details;
      }
    }

    function peg$computeLocation(startPos, endPos) {
      var startPosDetails = peg$computePosDetails(startPos),
          endPosDetails   = peg$computePosDetails(endPos);

      return {
        start: {
          offset: startPos,
          line:   startPosDetails.line,
          column: startPosDetails.column
        },
        end: {
          offset: endPos,
          line:   endPosDetails.line,
          column: endPosDetails.column
        }
      };
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) { return; }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildException(message, expected, found, location) {
      function cleanupExpected(expected) {
        var i = 1;

        expected.sort(function(a, b) {
          if (a.description < b.description) {
            return -1;
          } else if (a.description > b.description) {
            return 1;
          } else {
            return 0;
          }
        });

        while (i < expected.length) {
          if (expected[i - 1] === expected[i]) {
            expected.splice(i, 1);
          } else {
            i++;
          }
        }
      }

      function buildMessage(expected, found) {
        function stringEscape(s) {
          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }

          return s
            .replace(/\\/g,   '\\\\')
            .replace(/"/g,    '\\"')
            .replace(/\x08/g, '\\b')
            .replace(/\t/g,   '\\t')
            .replace(/\n/g,   '\\n')
            .replace(/\f/g,   '\\f')
            .replace(/\r/g,   '\\r')
            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
            .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
            .replace(/[\u0100-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
            .replace(/[\u1000-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
        }

        var expectedDescs = new Array(expected.length),
            expectedDesc, foundDesc, i;

        for (i = 0; i < expected.length; i++) {
          expectedDescs[i] = expected[i].description;
        }

        expectedDesc = expected.length > 1
          ? expectedDescs.slice(0, -1).join(", ")
              + " or "
              + expectedDescs[expected.length - 1]
          : expectedDescs[0];

        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";

        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
      }

      if (expected !== null) {
        cleanupExpected(expected);
      }

      return new peg$SyntaxError(
        message !== null ? message : buildMessage(expected, found),
        expected,
        found,
        location
      );
    }

    function peg$parsestart() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$parseshebangLine();
      if (s1 === peg$FAILED) {
        s1 = null;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parseform();
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parseform();
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c0(s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseshebangLine() {
      var s0, s1, s2, s3;

      peg$silentFails++;
      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c2) {
        s1 = peg$c2;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c3); }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        if (peg$c4.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c5); }
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          if (peg$c4.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c5); }
          }
        }
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 10) {
            s3 = peg$c6;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c7); }
          }
          if (s3 === peg$FAILED) {
            s3 = peg$parseEOF();
          }
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c1); }
      }

      return s0;
    }

    function peg$parseEOF() {
      var s0, s1;

      s0 = peg$currPos;
      peg$silentFails++;
      if (input.length > peg$currPos) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c8); }
      }
      peg$silentFails--;
      if (s1 === peg$FAILED) {
        s0 = void 0;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsewhitespace() {
      var s0, s1;

      peg$silentFails++;
      s0 = [];
      if (input.charCodeAt(peg$currPos) === 32) {
        s1 = peg$c10;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c11); }
      }
      if (s1 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 9) {
          s1 = peg$c12;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c13); }
        }
        if (s1 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 10) {
            s1 = peg$c6;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c7); }
          }
          if (s1 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 13) {
              s1 = peg$c14;
              peg$currPos++;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c15); }
            }
          }
        }
      }
      if (s1 !== peg$FAILED) {
        while (s1 !== peg$FAILED) {
          s0.push(s1);
          if (input.charCodeAt(peg$currPos) === 32) {
            s1 = peg$c10;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c11); }
          }
          if (s1 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 9) {
              s1 = peg$c12;
              peg$currPos++;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c13); }
            }
            if (s1 === peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 10) {
                s1 = peg$c6;
                peg$currPos++;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c7); }
              }
              if (s1 === peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 13) {
                  s1 = peg$c14;
                  peg$currPos++;
                } else {
                  s1 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c15); }
                }
              }
            }
          }
        }
      } else {
        s0 = peg$FAILED;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c9); }
      }

      return s0;
    }

    function peg$parseendOfLineComment() {
      var s0, s1, s2, s3;

      peg$silentFails++;
      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 59) {
        s1 = peg$c17;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c18); }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        if (peg$c4.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c5); }
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          if (peg$c4.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c5); }
          }
        }
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 10) {
            s3 = peg$c6;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c7); }
          }
          if (s3 === peg$FAILED) {
            s3 = peg$parseEOF();
          }
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c16); }
      }

      return s0;
    }

    function peg$parse__() {
      var s0;

      s0 = peg$parseendOfLineComment();
      if (s0 === peg$FAILED) {
        s0 = peg$parsewhitespace();
      }

      return s0;
    }

    function peg$parse_() {
      var s0, s1;

      s0 = [];
      s1 = peg$parse__();
      while (s1 !== peg$FAILED) {
        s0.push(s1);
        s1 = peg$parse__();
      }

      return s0;
    }

    function peg$parseform() {
      var s0, s1;

      s0 = peg$currPos;
      s1 = peg$parselist();
      if (s1 === peg$FAILED) {
        s1 = peg$parseatom();
        if (s1 === peg$FAILED) {
          s1 = peg$parsestring();
          if (s1 === peg$FAILED) {
            s1 = peg$parsequotedForm();
          }
        }
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c19(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parsequotedForm() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = peg$parsequote();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseform();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c20(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parselist() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 40) {
          s2 = peg$c21;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c22); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parse_();
          if (s3 !== peg$FAILED) {
            s4 = peg$parselistContents();
            if (s4 !== peg$FAILED) {
              s5 = peg$parse_();
              if (s5 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 41) {
                  s6 = peg$c23;
                  peg$currPos++;
                } else {
                  s6 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c24); }
                }
                if (s6 !== peg$FAILED) {
                  s7 = peg$parse_();
                  if (s7 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c25(s4);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parselistContents() {
      var s0, s1, s2, s3, s4, s5;

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = peg$parseform();
      if (s1 === peg$FAILED) {
        s1 = null;
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parse_();
        if (s4 !== peg$FAILED) {
          s5 = peg$parseform();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseform();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c27(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c26); }
      }

      return s0;
    }

    function peg$parsequote() {
      var s0, s1;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 39) {
        s1 = peg$c28;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c29); }
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c30();
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 96) {
          s1 = peg$c31;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c32); }
        }
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c33();
        }
        s0 = s1;
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          if (input.substr(peg$currPos, 2) === peg$c34) {
            s1 = peg$c34;
            peg$currPos += 2;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c35); }
          }
          if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c36();
          }
          s0 = s1;
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 44) {
              s1 = peg$c37;
              peg$currPos++;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c38); }
            }
            if (s1 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c39();
            }
            s0 = s1;
          }
        }
      }

      return s0;
    }

    function peg$parsestring() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsestringDelimiter();
        if (s2 !== peg$FAILED) {
          s3 = peg$parsestringContents();
          if (s3 !== peg$FAILED) {
            s4 = peg$parsestringDelimiter();
            if (s4 !== peg$FAILED) {
              s5 = peg$parse_();
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c40(s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsestringDelimiter() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 34) {
        s0 = peg$c41;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c42); }
      }

      return s0;
    }

    function peg$parsestringContents() {
      var s0, s1;

      s0 = [];
      s1 = peg$parsestringChar();
      if (s1 === peg$FAILED) {
        s1 = peg$parsestringEscapedChar();
        if (s1 === peg$FAILED) {
          s1 = peg$parsestringEscapedSpecialChar();
        }
      }
      while (s1 !== peg$FAILED) {
        s0.push(s1);
        s1 = peg$parsestringChar();
        if (s1 === peg$FAILED) {
          s1 = peg$parsestringEscapedChar();
          if (s1 === peg$FAILED) {
            s1 = peg$parsestringEscapedSpecialChar();
          }
        }
      }

      return s0;
    }

    function peg$parsestringEscapedChar() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 92) {
        s1 = peg$c43;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c44); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parsestringCharNeedingEscape();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c45(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsestringCharNeedingEscape() {
      var s0;

      if (peg$c46.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c47); }
      }

      return s0;
    }

    function peg$parsestringChar() {
      var s0;

      if (peg$c48.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c49); }
      }

      return s0;
    }

    function peg$parsestringEscapedSpecialCharLetter() {
      var s0;

      if (peg$c50.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c51); }
      }

      return s0;
    }

    function peg$parsestringEscapedSpecialChar() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 92) {
        s1 = peg$c43;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c44); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parsestringEscapedSpecialCharLetter();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c52(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseatom() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseatomContents();
        if (s2 !== peg$FAILED) {
          s3 = peg$parse_();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c53(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseatomContents() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parseatomChar();
      if (s2 === peg$FAILED) {
        s2 = peg$parseatomEscapedChar();
      }
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parseatomChar();
          if (s2 === peg$FAILED) {
            s2 = peg$parseatomEscapedChar();
          }
        }
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c54(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseatomEscapedChar() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 92) {
        s1 = peg$c43;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c44); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseatomCharNeedingEscape();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c55(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseatomCharNeedingEscape() {
      var s0;

      if (peg$c56.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c57); }
      }

      return s0;
    }

    function peg$parseatomChar() {
      var s0;

      if (peg$c58.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c59); }
      }

      return s0;
    }


      function extractList(list, index) {
        var result = [], i;

        for (i = 0; i < list.length; i++) {
          if (list[i][index] !== null) {
            result.push(list[i][index]);
          }
        }

        return result;
      }

      function buildList(first, rest, index) {
        return (first !== null ? [first] : []) .concat(extractList(rest, index));
      }

      function outputString(content, loc) {
        return {
          type : "string",
          content : content,
          location : loc
        };
      }

      function outputAtom(content, loc) {
        return {
          type : "atom",
          content : content,
          location : loc
        };
      }

      function outputList(content, loc) {
        return {
          type : "list",
          content : content,
          location : loc
        };
      }


    peg$result = peg$startRuleFunction();

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail({ type: "end", description: "end of input" });
      }

      throw peg$buildException(
        null,
        peg$maxFailExpected,
        peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
        peg$maxFailPos < input.length
          ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
          : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
      );
    }
  }

    return {
	SyntaxError: peg$SyntaxError,
	parse:       peg$parse
    };
})();

// by K. Shima
if(typeof module === "undefined"){
    if(typeof moduleTable === "undefined"){
	moduleTable = [ ];
	require = function(moduleName){ return moduleTable[moduleName]; };
    }
    moduleTable["sexpr-plus"] = f;
}else module.exports = f;