function zt(L) {
  return L && L.__esModule && Object.prototype.hasOwnProperty.call(L, "default") ? L.default : L;
}
var qt = { exports: {} };
(function(L, Q) {
  (function(H, R) {
    L.exports = R();
  })(self, function() {
    return (() => {
      var H = { 192: (z, I) => {
        var T, rt, K = function() {
          var U = function(m, w) {
            var v = m, g = ut[w], c = null, b = 0, C = null, _ = [], S = {}, J = function(o, a) {
              c = function(n) {
                for (var l = new Array(n), h = 0; h < n; h += 1) {
                  l[h] = new Array(n);
                  for (var y = 0; y < n; y += 1)
                    l[h][y] = null;
                }
                return l;
              }(b = 4 * v + 17), d(0, 0), d(b - 7, 0), d(0, b - 7), r(), t(), i(o, a), v >= 7 && e(o), C == null && (C = s(v, g, _)), u(C, a);
            }, d = function(o, a) {
              for (var n = -1; n <= 7; n += 1)
                if (!(o + n <= -1 || b <= o + n))
                  for (var l = -1; l <= 7; l += 1)
                    a + l <= -1 || b <= a + l || (c[o + n][a + l] = 0 <= n && n <= 6 && (l == 0 || l == 6) || 0 <= l && l <= 6 && (n == 0 || n == 6) || 2 <= n && n <= 4 && 2 <= l && l <= 4);
            }, t = function() {
              for (var o = 8; o < b - 8; o += 1)
                c[o][6] == null && (c[o][6] = o % 2 == 0);
              for (var a = 8; a < b - 8; a += 1)
                c[6][a] == null && (c[6][a] = a % 2 == 0);
            }, r = function() {
              for (var o = et.getPatternPosition(v), a = 0; a < o.length; a += 1)
                for (var n = 0; n < o.length; n += 1) {
                  var l = o[a], h = o[n];
                  if (c[l][h] == null)
                    for (var y = -2; y <= 2; y += 1)
                      for (var x = -2; x <= 2; x += 1)
                        c[l + y][h + x] = y == -2 || y == 2 || x == -2 || x == 2 || y == 0 && x == 0;
                }
            }, e = function(o) {
              for (var a = et.getBCHTypeNumber(v), n = 0; n < 18; n += 1) {
                var l = !o && (a >> n & 1) == 1;
                c[Math.floor(n / 3)][n % 3 + b - 8 - 3] = l;
              }
              for (n = 0; n < 18; n += 1)
                l = !o && (a >> n & 1) == 1, c[n % 3 + b - 8 - 3][Math.floor(n / 3)] = l;
            }, i = function(o, a) {
              for (var n = g << 3 | a, l = et.getBCHTypeInfo(n), h = 0; h < 15; h += 1) {
                var y = !o && (l >> h & 1) == 1;
                h < 6 ? c[h][8] = y : h < 8 ? c[h + 1][8] = y : c[b - 15 + h][8] = y;
              }
              for (h = 0; h < 15; h += 1)
                y = !o && (l >> h & 1) == 1, h < 8 ? c[8][b - h - 1] = y : h < 9 ? c[8][15 - h - 1 + 1] = y : c[8][15 - h - 1] = y;
              c[b - 8][8] = !o;
            }, u = function(o, a) {
              for (var n = -1, l = b - 1, h = 7, y = 0, x = et.getMaskFunction(a), p = b - 1; p > 0; p -= 2)
                for (p == 6 && (p -= 1); ; ) {
                  for (var M = 0; M < 2; M += 1)
                    if (c[l][p - M] == null) {
                      var A = !1;
                      y < o.length && (A = (o[y] >>> h & 1) == 1), x(l, p - M) && (A = !A), c[l][p - M] = A, (h -= 1) == -1 && (y += 1, h = 7);
                    }
                  if ((l += n) < 0 || b <= l) {
                    l -= n, n = -n;
                    break;
                  }
                }
            }, s = function(o, a, n) {
              for (var l = bt.getRSBlocks(o, a), h = dt(), y = 0; y < n.length; y += 1) {
                var x = n[y];
                h.put(x.getMode(), 4), h.put(x.getLength(), et.getLengthInBits(x.getMode(), o)), x.write(h);
              }
              var p = 0;
              for (y = 0; y < l.length; y += 1)
                p += l[y].dataCount;
              if (h.getLengthInBits() > 8 * p)
                throw "code length overflow. (" + h.getLengthInBits() + ">" + 8 * p + ")";
              for (h.getLengthInBits() + 4 <= 8 * p && h.put(0, 4); h.getLengthInBits() % 8 != 0; )
                h.putBit(!1);
              for (; !(h.getLengthInBits() >= 8 * p || (h.put(236, 8), h.getLengthInBits() >= 8 * p)); )
                h.put(17, 8);
              return function(M, A) {
                for (var O = 0, N = 0, k = 0, P = new Array(A.length), D = new Array(A.length), q = 0; q < A.length; q += 1) {
                  var it = A[q].dataCount, G = A[q].totalCount - it;
                  N = Math.max(N, it), k = Math.max(k, G), P[q] = new Array(it);
                  for (var B = 0; B < P[q].length; B += 1)
                    P[q][B] = 255 & M.getBuffer()[B + O];
                  O += it;
                  var X = et.getErrorCorrectPolynomial(G), j = at(P[q], X.getLength() - 1).mod(X);
                  for (D[q] = new Array(X.getLength() - 1), B = 0; B < D[q].length; B += 1) {
                    var Y = B + j.getLength() - D[q].length;
                    D[q][B] = Y >= 0 ? j.getAt(Y) : 0;
                  }
                }
                var W = 0;
                for (B = 0; B < A.length; B += 1)
                  W += A[B].totalCount;
                var Z = new Array(W), ot = 0;
                for (B = 0; B < N; B += 1)
                  for (q = 0; q < A.length; q += 1)
                    B < P[q].length && (Z[ot] = P[q][B], ot += 1);
                for (B = 0; B < k; B += 1)
                  for (q = 0; q < A.length; q += 1)
                    B < D[q].length && (Z[ot] = D[q][B], ot += 1);
                return Z;
              }(h, l);
            };
            S.addData = function(o, a) {
              var n = null;
              switch (a = a || "Byte") {
                case "Numeric":
                  n = yt(o);
                  break;
                case "Alphanumeric":
                  n = _t(o);
                  break;
                case "Byte":
                  n = lt(o);
                  break;
                case "Kanji":
                  n = ct(o);
                  break;
                default:
                  throw "mode:" + a;
              }
              _.push(n), C = null;
            }, S.isDark = function(o, a) {
              if (o < 0 || b <= o || a < 0 || b <= a)
                throw o + "," + a;
              return c[o][a];
            }, S.getModuleCount = function() {
              return b;
            }, S.make = function() {
              if (v < 1) {
                for (var o = 1; o < 40; o++) {
                  for (var a = bt.getRSBlocks(o, g), n = dt(), l = 0; l < _.length; l++) {
                    var h = _[l];
                    n.put(h.getMode(), 4), n.put(h.getLength(), et.getLengthInBits(h.getMode(), o)), h.write(n);
                  }
                  var y = 0;
                  for (l = 0; l < a.length; l++)
                    y += a[l].dataCount;
                  if (n.getLengthInBits() <= 8 * y)
                    break;
                }
                v = o;
              }
              J(!1, function() {
                for (var x = 0, p = 0, M = 0; M < 8; M += 1) {
                  J(!0, M);
                  var A = et.getLostPoint(S);
                  (M == 0 || x > A) && (x = A, p = M);
                }
                return p;
              }());
            }, S.createTableTag = function(o, a) {
              o = o || 2;
              var n = "";
              n += '<table style="', n += " border-width: 0px; border-style: none;", n += " border-collapse: collapse;", n += " padding: 0px; margin: " + (a = a === void 0 ? 4 * o : a) + "px;", n += '">', n += "<tbody>";
              for (var l = 0; l < S.getModuleCount(); l += 1) {
                n += "<tr>";
                for (var h = 0; h < S.getModuleCount(); h += 1)
                  n += '<td style="', n += " border-width: 0px; border-style: none;", n += " border-collapse: collapse;", n += " padding: 0px; margin: 0px;", n += " width: " + o + "px;", n += " height: " + o + "px;", n += " background-color: ", n += S.isDark(l, h) ? "#000000" : "#ffffff", n += ";", n += '"/>';
                n += "</tr>";
              }
              return (n += "</tbody>") + "</table>";
            }, S.createSvgTag = function(o, a, n, l) {
              var h = {};
              typeof arguments[0] == "object" && (o = (h = arguments[0]).cellSize, a = h.margin, n = h.alt, l = h.title), o = o || 2, a = a === void 0 ? 4 * o : a, (n = typeof n == "string" ? { text: n } : n || {}).text = n.text || null, n.id = n.text ? n.id || "qrcode-description" : null, (l = typeof l == "string" ? { text: l } : l || {}).text = l.text || null, l.id = l.text ? l.id || "qrcode-title" : null;
              var y, x, p, M, A = S.getModuleCount() * o + 2 * a, O = "";
              for (M = "l" + o + ",0 0," + o + " -" + o + ",0 0,-" + o + "z ", O += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"', O += h.scalable ? "" : ' width="' + A + 'px" height="' + A + 'px"', O += ' viewBox="0 0 ' + A + " " + A + '" ', O += ' preserveAspectRatio="xMinYMin meet"', O += l.text || n.text ? ' role="img" aria-labelledby="' + f([l.id, n.id].join(" ").trim()) + '"' : "", O += ">", O += l.text ? '<title id="' + f(l.id) + '">' + f(l.text) + "</title>" : "", O += n.text ? '<description id="' + f(n.id) + '">' + f(n.text) + "</description>" : "", O += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>', O += '<path d="', x = 0; x < S.getModuleCount(); x += 1)
                for (p = x * o + a, y = 0; y < S.getModuleCount(); y += 1)
                  S.isDark(x, y) && (O += "M" + (y * o + a) + "," + p + M);
              return (O += '" stroke="transparent" fill="black"/>') + "</svg>";
            }, S.createDataURL = function(o, a) {
              o = o || 2, a = a === void 0 ? 4 * o : a;
              var n = S.getModuleCount() * o + 2 * a, l = a, h = n - a;
              return Ct(n, n, function(y, x) {
                if (l <= y && y < h && l <= x && x < h) {
                  var p = Math.floor((y - l) / o), M = Math.floor((x - l) / o);
                  return S.isDark(M, p) ? 0 : 1;
                }
                return 1;
              });
            }, S.createImgTag = function(o, a, n) {
              o = o || 2, a = a === void 0 ? 4 * o : a;
              var l = S.getModuleCount() * o + 2 * a, h = "";
              return h += "<img", h += ' src="', h += S.createDataURL(o, a), h += '"', h += ' width="', h += l, h += '"', h += ' height="', h += l, h += '"', n && (h += ' alt="', h += f(n), h += '"'), h + "/>";
            };
            var f = function(o) {
              for (var a = "", n = 0; n < o.length; n += 1) {
                var l = o.charAt(n);
                switch (l) {
                  case "<":
                    a += "&lt;";
                    break;
                  case ">":
                    a += "&gt;";
                    break;
                  case "&":
                    a += "&amp;";
                    break;
                  case '"':
                    a += "&quot;";
                    break;
                  default:
                    a += l;
                }
              }
              return a;
            };
            return S.createASCII = function(o, a) {
              if ((o = o || 1) < 2)
                return function(P) {
                  P = P === void 0 ? 2 : P;
                  var D, q, it, G, B, X = 1 * S.getModuleCount() + 2 * P, j = P, Y = X - P, W = { "██": "█", "█ ": "▀", " █": "▄", "  ": " " }, Z = { "██": "▀", "█ ": "▀", " █": " ", "  ": " " }, ot = "";
                  for (D = 0; D < X; D += 2) {
                    for (it = Math.floor((D - j) / 1), G = Math.floor((D + 1 - j) / 1), q = 0; q < X; q += 1)
                      B = "█", j <= q && q < Y && j <= D && D < Y && S.isDark(it, Math.floor((q - j) / 1)) && (B = " "), j <= q && q < Y && j <= D + 1 && D + 1 < Y && S.isDark(G, Math.floor((q - j) / 1)) ? B += " " : B += "█", ot += P < 1 && D + 1 >= Y ? Z[B] : W[B];
                    ot += `
`;
                  }
                  return X % 2 && P > 0 ? ot.substring(0, ot.length - X - 1) + Array(X + 1).join("▀") : ot.substring(0, ot.length - 1);
                }(a);
              o -= 1, a = a === void 0 ? 2 * o : a;
              var n, l, h, y, x = S.getModuleCount() * o + 2 * a, p = a, M = x - a, A = Array(o + 1).join("██"), O = Array(o + 1).join("  "), N = "", k = "";
              for (n = 0; n < x; n += 1) {
                for (h = Math.floor((n - p) / o), k = "", l = 0; l < x; l += 1)
                  y = 1, p <= l && l < M && p <= n && n < M && S.isDark(h, Math.floor((l - p) / o)) && (y = 0), k += y ? A : O;
                for (h = 0; h < o; h += 1)
                  N += k + `
`;
              }
              return N.substring(0, N.length - 1);
            }, S.renderTo2dContext = function(o, a) {
              a = a || 2;
              for (var n = S.getModuleCount(), l = 0; l < n; l++)
                for (var h = 0; h < n; h++)
                  o.fillStyle = S.isDark(l, h) ? "black" : "white", o.fillRect(l * a, h * a, a, a);
            }, S;
          };
          U.stringToBytes = (U.stringToBytesFuncs = { default: function(m) {
            for (var w = [], v = 0; v < m.length; v += 1) {
              var g = m.charCodeAt(v);
              w.push(255 & g);
            }
            return w;
          } }).default, U.createStringToBytes = function(m, w) {
            var v = function() {
              for (var c = mt(m), b = function() {
                var t = c.read();
                if (t == -1)
                  throw "eof";
                return t;
              }, C = 0, _ = {}; ; ) {
                var S = c.read();
                if (S == -1)
                  break;
                var J = b(), d = b() << 8 | b();
                _[String.fromCharCode(S << 8 | J)] = d, C += 1;
              }
              if (C != w)
                throw C + " != " + w;
              return _;
            }(), g = "?".charCodeAt(0);
            return function(c) {
              for (var b = [], C = 0; C < c.length; C += 1) {
                var _ = c.charCodeAt(C);
                if (_ < 128)
                  b.push(_);
                else {
                  var S = v[c.charAt(C)];
                  typeof S == "number" ? (255 & S) == S ? b.push(S) : (b.push(S >>> 8), b.push(255 & S)) : b.push(g);
                }
              }
              return b;
            };
          };
          var V, tt, nt, F, $, ut = { L: 1, M: 0, Q: 3, H: 2 }, et = (V = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]], tt = 1335, nt = 7973, $ = function(m) {
            for (var w = 0; m != 0; )
              w += 1, m >>>= 1;
            return w;
          }, (F = {}).getBCHTypeInfo = function(m) {
            for (var w = m << 10; $(w) - $(tt) >= 0; )
              w ^= tt << $(w) - $(tt);
            return 21522 ^ (m << 10 | w);
          }, F.getBCHTypeNumber = function(m) {
            for (var w = m << 12; $(w) - $(nt) >= 0; )
              w ^= nt << $(w) - $(nt);
            return m << 12 | w;
          }, F.getPatternPosition = function(m) {
            return V[m - 1];
          }, F.getMaskFunction = function(m) {
            switch (m) {
              case 0:
                return function(w, v) {
                  return (w + v) % 2 == 0;
                };
              case 1:
                return function(w, v) {
                  return w % 2 == 0;
                };
              case 2:
                return function(w, v) {
                  return v % 3 == 0;
                };
              case 3:
                return function(w, v) {
                  return (w + v) % 3 == 0;
                };
              case 4:
                return function(w, v) {
                  return (Math.floor(w / 2) + Math.floor(v / 3)) % 2 == 0;
                };
              case 5:
                return function(w, v) {
                  return w * v % 2 + w * v % 3 == 0;
                };
              case 6:
                return function(w, v) {
                  return (w * v % 2 + w * v % 3) % 2 == 0;
                };
              case 7:
                return function(w, v) {
                  return (w * v % 3 + (w + v) % 2) % 2 == 0;
                };
              default:
                throw "bad maskPattern:" + m;
            }
          }, F.getErrorCorrectPolynomial = function(m) {
            for (var w = at([1], 0), v = 0; v < m; v += 1)
              w = w.multiply(at([1, st.gexp(v)], 0));
            return w;
          }, F.getLengthInBits = function(m, w) {
            if (1 <= w && w < 10)
              switch (m) {
                case 1:
                  return 10;
                case 2:
                  return 9;
                case 4:
                case 8:
                  return 8;
                default:
                  throw "mode:" + m;
              }
            else if (w < 27)
              switch (m) {
                case 1:
                  return 12;
                case 2:
                  return 11;
                case 4:
                  return 16;
                case 8:
                  return 10;
                default:
                  throw "mode:" + m;
              }
            else {
              if (!(w < 41))
                throw "type:" + w;
              switch (m) {
                case 1:
                  return 14;
                case 2:
                  return 13;
                case 4:
                  return 16;
                case 8:
                  return 12;
                default:
                  throw "mode:" + m;
              }
            }
          }, F.getLostPoint = function(m) {
            for (var w = m.getModuleCount(), v = 0, g = 0; g < w; g += 1)
              for (var c = 0; c < w; c += 1) {
                for (var b = 0, C = m.isDark(g, c), _ = -1; _ <= 1; _ += 1)
                  if (!(g + _ < 0 || w <= g + _))
                    for (var S = -1; S <= 1; S += 1)
                      c + S < 0 || w <= c + S || _ == 0 && S == 0 || C == m.isDark(g + _, c + S) && (b += 1);
                b > 5 && (v += 3 + b - 5);
              }
            for (g = 0; g < w - 1; g += 1)
              for (c = 0; c < w - 1; c += 1) {
                var J = 0;
                m.isDark(g, c) && (J += 1), m.isDark(g + 1, c) && (J += 1), m.isDark(g, c + 1) && (J += 1), m.isDark(g + 1, c + 1) && (J += 1), J != 0 && J != 4 || (v += 3);
              }
            for (g = 0; g < w; g += 1)
              for (c = 0; c < w - 6; c += 1)
                m.isDark(g, c) && !m.isDark(g, c + 1) && m.isDark(g, c + 2) && m.isDark(g, c + 3) && m.isDark(g, c + 4) && !m.isDark(g, c + 5) && m.isDark(g, c + 6) && (v += 40);
            for (c = 0; c < w; c += 1)
              for (g = 0; g < w - 6; g += 1)
                m.isDark(g, c) && !m.isDark(g + 1, c) && m.isDark(g + 2, c) && m.isDark(g + 3, c) && m.isDark(g + 4, c) && !m.isDark(g + 5, c) && m.isDark(g + 6, c) && (v += 40);
            var d = 0;
            for (c = 0; c < w; c += 1)
              for (g = 0; g < w; g += 1)
                m.isDark(g, c) && (d += 1);
            return v + Math.abs(100 * d / w / w - 50) / 5 * 10;
          }, F), st = function() {
            for (var m = new Array(256), w = new Array(256), v = 0; v < 8; v += 1)
              m[v] = 1 << v;
            for (v = 8; v < 256; v += 1)
              m[v] = m[v - 4] ^ m[v - 5] ^ m[v - 6] ^ m[v - 8];
            for (v = 0; v < 255; v += 1)
              w[m[v]] = v;
            return { glog: function(g) {
              if (g < 1)
                throw "glog(" + g + ")";
              return w[g];
            }, gexp: function(g) {
              for (; g < 0; )
                g += 255;
              for (; g >= 256; )
                g -= 255;
              return m[g];
            } };
          }();
          function at(m, w) {
            if (m.length === void 0)
              throw m.length + "/" + w;
            var v = function() {
              for (var c = 0; c < m.length && m[c] == 0; )
                c += 1;
              for (var b = new Array(m.length - c + w), C = 0; C < m.length - c; C += 1)
                b[C] = m[C + c];
              return b;
            }(), g = { getAt: function(c) {
              return v[c];
            }, getLength: function() {
              return v.length;
            }, multiply: function(c) {
              for (var b = new Array(g.getLength() + c.getLength() - 1), C = 0; C < g.getLength(); C += 1)
                for (var _ = 0; _ < c.getLength(); _ += 1)
                  b[C + _] ^= st.gexp(st.glog(g.getAt(C)) + st.glog(c.getAt(_)));
              return at(b, 0);
            }, mod: function(c) {
              if (g.getLength() - c.getLength() < 0)
                return g;
              for (var b = st.glog(g.getAt(0)) - st.glog(c.getAt(0)), C = new Array(g.getLength()), _ = 0; _ < g.getLength(); _ += 1)
                C[_] = g.getAt(_);
              for (_ = 0; _ < c.getLength(); _ += 1)
                C[_] ^= st.gexp(st.glog(c.getAt(_)) + b);
              return at(C, 0).mod(c);
            } };
            return g;
          }
          var bt = function() {
            var m = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12, 7, 37, 13], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]], w = function(g, c) {
              var b = {};
              return b.totalCount = g, b.dataCount = c, b;
            }, v = { getRSBlocks: function(g, c) {
              var b = function(e, i) {
                switch (i) {
                  case ut.L:
                    return m[4 * (e - 1) + 0];
                  case ut.M:
                    return m[4 * (e - 1) + 1];
                  case ut.Q:
                    return m[4 * (e - 1) + 2];
                  case ut.H:
                    return m[4 * (e - 1) + 3];
                  default:
                    return;
                }
              }(g, c);
              if (b === void 0)
                throw "bad rs block @ typeNumber:" + g + "/errorCorrectionLevel:" + c;
              for (var C = b.length / 3, _ = [], S = 0; S < C; S += 1)
                for (var J = b[3 * S + 0], d = b[3 * S + 1], t = b[3 * S + 2], r = 0; r < J; r += 1)
                  _.push(w(d, t));
              return _;
            } };
            return v;
          }(), dt = function() {
            var m = [], w = 0, v = { getBuffer: function() {
              return m;
            }, getAt: function(g) {
              var c = Math.floor(g / 8);
              return (m[c] >>> 7 - g % 8 & 1) == 1;
            }, put: function(g, c) {
              for (var b = 0; b < c; b += 1)
                v.putBit((g >>> c - b - 1 & 1) == 1);
            }, getLengthInBits: function() {
              return w;
            }, putBit: function(g) {
              var c = Math.floor(w / 8);
              m.length <= c && m.push(0), g && (m[c] |= 128 >>> w % 8), w += 1;
            } };
            return v;
          }, yt = function(m) {
            var w = m, v = { getMode: function() {
              return 1;
            }, getLength: function(b) {
              return w.length;
            }, write: function(b) {
              for (var C = w, _ = 0; _ + 2 < C.length; )
                b.put(g(C.substring(_, _ + 3)), 10), _ += 3;
              _ < C.length && (C.length - _ == 1 ? b.put(g(C.substring(_, _ + 1)), 4) : C.length - _ == 2 && b.put(g(C.substring(_, _ + 2)), 7));
            } }, g = function(b) {
              for (var C = 0, _ = 0; _ < b.length; _ += 1)
                C = 10 * C + c(b.charAt(_));
              return C;
            }, c = function(b) {
              if ("0" <= b && b <= "9")
                return b.charCodeAt(0) - "0".charCodeAt(0);
              throw "illegal char :" + b;
            };
            return v;
          }, _t = function(m) {
            var w = m, v = { getMode: function() {
              return 2;
            }, getLength: function(c) {
              return w.length;
            }, write: function(c) {
              for (var b = w, C = 0; C + 1 < b.length; )
                c.put(45 * g(b.charAt(C)) + g(b.charAt(C + 1)), 11), C += 2;
              C < b.length && c.put(g(b.charAt(C)), 6);
            } }, g = function(c) {
              if ("0" <= c && c <= "9")
                return c.charCodeAt(0) - "0".charCodeAt(0);
              if ("A" <= c && c <= "Z")
                return c.charCodeAt(0) - "A".charCodeAt(0) + 10;
              switch (c) {
                case " ":
                  return 36;
                case "$":
                  return 37;
                case "%":
                  return 38;
                case "*":
                  return 39;
                case "+":
                  return 40;
                case "-":
                  return 41;
                case ".":
                  return 42;
                case "/":
                  return 43;
                case ":":
                  return 44;
                default:
                  throw "illegal char :" + c;
              }
            };
            return v;
          }, lt = function(m) {
            var w = U.stringToBytes(m);
            return { getMode: function() {
              return 4;
            }, getLength: function(v) {
              return w.length;
            }, write: function(v) {
              for (var g = 0; g < w.length; g += 1)
                v.put(w[g], 8);
            } };
          }, ct = function(m) {
            var w = U.stringToBytesFuncs.SJIS;
            if (!w)
              throw "sjis not supported.";
            (function(g, c) {
              var b = w("友");
              if (b.length != 2 || (b[0] << 8 | b[1]) != 38726)
                throw "sjis not supported.";
            })();
            var v = w(m);
            return { getMode: function() {
              return 8;
            }, getLength: function(g) {
              return ~~(v.length / 2);
            }, write: function(g) {
              for (var c = v, b = 0; b + 1 < c.length; ) {
                var C = (255 & c[b]) << 8 | 255 & c[b + 1];
                if (33088 <= C && C <= 40956)
                  C -= 33088;
                else {
                  if (!(57408 <= C && C <= 60351))
                    throw "illegal char at " + (b + 1) + "/" + C;
                  C -= 49472;
                }
                C = 192 * (C >>> 8 & 255) + (255 & C), g.put(C, 13), b += 2;
              }
              if (b < c.length)
                throw "illegal char at " + (b + 1);
            } };
          }, xt = function() {
            var m = [], w = { writeByte: function(v) {
              m.push(255 & v);
            }, writeShort: function(v) {
              w.writeByte(v), w.writeByte(v >>> 8);
            }, writeBytes: function(v, g, c) {
              g = g || 0, c = c || v.length;
              for (var b = 0; b < c; b += 1)
                w.writeByte(v[b + g]);
            }, writeString: function(v) {
              for (var g = 0; g < v.length; g += 1)
                w.writeByte(v.charCodeAt(g));
            }, toByteArray: function() {
              return m;
            }, toString: function() {
              var v = "";
              v += "[";
              for (var g = 0; g < m.length; g += 1)
                g > 0 && (v += ","), v += m[g];
              return v + "]";
            } };
            return w;
          }, mt = function(m) {
            var w = m, v = 0, g = 0, c = 0, b = { read: function() {
              for (; c < 8; ) {
                if (v >= w.length) {
                  if (c == 0)
                    return -1;
                  throw "unexpected end of file./" + c;
                }
                var _ = w.charAt(v);
                if (v += 1, _ == "=")
                  return c = 0, -1;
                _.match(/^\s$/) || (g = g << 6 | C(_.charCodeAt(0)), c += 6);
              }
              var S = g >>> c - 8 & 255;
              return c -= 8, S;
            } }, C = function(_) {
              if (65 <= _ && _ <= 90)
                return _ - 65;
              if (97 <= _ && _ <= 122)
                return _ - 97 + 26;
              if (48 <= _ && _ <= 57)
                return _ - 48 + 52;
              if (_ == 43)
                return 62;
              if (_ == 47)
                return 63;
              throw "c:" + _;
            };
            return b;
          }, Ct = function(m, w, v) {
            for (var g = function(d, t) {
              var r = d, e = t, i = new Array(d * t), u = { setPixel: function(o, a, n) {
                i[a * r + o] = n;
              }, write: function(o) {
                o.writeString("GIF87a"), o.writeShort(r), o.writeShort(e), o.writeByte(128), o.writeByte(0), o.writeByte(0), o.writeByte(0), o.writeByte(0), o.writeByte(0), o.writeByte(255), o.writeByte(255), o.writeByte(255), o.writeString(","), o.writeShort(0), o.writeShort(0), o.writeShort(r), o.writeShort(e), o.writeByte(0);
                var a = s(2);
                o.writeByte(2);
                for (var n = 0; a.length - n > 255; )
                  o.writeByte(255), o.writeBytes(a, n, 255), n += 255;
                o.writeByte(a.length - n), o.writeBytes(a, n, a.length - n), o.writeByte(0), o.writeString(";");
              } }, s = function(o) {
                for (var a = 1 << o, n = 1 + (1 << o), l = o + 1, h = f(), y = 0; y < a; y += 1)
                  h.add(String.fromCharCode(y));
                h.add(String.fromCharCode(a)), h.add(String.fromCharCode(n));
                var x, p, M, A = xt(), O = (x = A, p = 0, M = 0, { write: function(D, q) {
                  if (D >>> q)
                    throw "length over";
                  for (; p + q >= 8; )
                    x.writeByte(255 & (D << p | M)), q -= 8 - p, D >>>= 8 - p, M = 0, p = 0;
                  M |= D << p, p += q;
                }, flush: function() {
                  p > 0 && x.writeByte(M);
                } });
                O.write(a, l);
                var N = 0, k = String.fromCharCode(i[N]);
                for (N += 1; N < i.length; ) {
                  var P = String.fromCharCode(i[N]);
                  N += 1, h.contains(k + P) ? k += P : (O.write(h.indexOf(k), l), h.size() < 4095 && (h.size() == 1 << l && (l += 1), h.add(k + P)), k = P);
                }
                return O.write(h.indexOf(k), l), O.write(n, l), O.flush(), A.toByteArray();
              }, f = function() {
                var o = {}, a = 0, n = { add: function(l) {
                  if (n.contains(l))
                    throw "dup key:" + l;
                  o[l] = a, a += 1;
                }, size: function() {
                  return a;
                }, indexOf: function(l) {
                  return o[l];
                }, contains: function(l) {
                  return o[l] !== void 0;
                } };
                return n;
              };
              return u;
            }(m, w), c = 0; c < w; c += 1)
              for (var b = 0; b < m; b += 1)
                g.setPixel(b, c, v(b, c));
            var C = xt();
            g.write(C);
            for (var _ = function() {
              var d = 0, t = 0, r = 0, e = "", i = {}, u = function(f) {
                e += String.fromCharCode(s(63 & f));
              }, s = function(f) {
                if (!(f < 0)) {
                  if (f < 26)
                    return 65 + f;
                  if (f < 52)
                    return f - 26 + 97;
                  if (f < 62)
                    return f - 52 + 48;
                  if (f == 62)
                    return 43;
                  if (f == 63)
                    return 47;
                }
                throw "n:" + f;
              };
              return i.writeByte = function(f) {
                for (d = d << 8 | 255 & f, t += 8, r += 1; t >= 6; )
                  u(d >>> t - 6), t -= 6;
              }, i.flush = function() {
                if (t > 0 && (u(d << 6 - t), d = 0, t = 0), r % 3 != 0)
                  for (var f = 3 - r % 3, o = 0; o < f; o += 1)
                    e += "=";
              }, i.toString = function() {
                return e;
              }, i;
            }(), S = C.toByteArray(), J = 0; J < S.length; J += 1)
              _.writeByte(S[J]);
            return _.flush(), "data:image/gif;base64," + _;
          };
          return U;
        }();
        K.stringToBytesFuncs["UTF-8"] = function(U) {
          return function(V) {
            for (var tt = [], nt = 0; nt < V.length; nt++) {
              var F = V.charCodeAt(nt);
              F < 128 ? tt.push(F) : F < 2048 ? tt.push(192 | F >> 6, 128 | 63 & F) : F < 55296 || F >= 57344 ? tt.push(224 | F >> 12, 128 | F >> 6 & 63, 128 | 63 & F) : (nt++, F = 65536 + ((1023 & F) << 10 | 1023 & V.charCodeAt(nt)), tt.push(240 | F >> 18, 128 | F >> 12 & 63, 128 | F >> 6 & 63, 128 | 63 & F));
            }
            return tt;
          }(U);
        }, (rt = typeof (T = function() {
          return K;
        }) == "function" ? T.apply(I, []) : T) === void 0 || (z.exports = rt);
      }, 676: (z, I, T) => {
        T.d(I, { default: () => J });
        var rt = function() {
          return (rt = Object.assign || function(d) {
            for (var t, r = 1, e = arguments.length; r < e; r++)
              for (var i in t = arguments[r])
                Object.prototype.hasOwnProperty.call(t, i) && (d[i] = t[i]);
            return d;
          }).apply(this, arguments);
        }, K = function() {
          for (var d = 0, t = 0, r = arguments.length; t < r; t++)
            d += arguments[t].length;
          var e = Array(d), i = 0;
          for (t = 0; t < r; t++)
            for (var u = arguments[t], s = 0, f = u.length; s < f; s++, i++)
              e[i] = u[s];
          return e;
        }, U = function(d) {
          return !!d && typeof d == "object" && !Array.isArray(d);
        };
        function V(d) {
          for (var t = [], r = 1; r < arguments.length; r++)
            t[r - 1] = arguments[r];
          if (!t.length)
            return d;
          var e = t.shift();
          return e !== void 0 && U(d) && U(e) ? (d = rt({}, d), Object.keys(e).forEach(function(i) {
            var u = d[i], s = e[i];
            Array.isArray(u) && Array.isArray(s) ? d[i] = s : U(u) && U(s) ? d[i] = V(Object.assign({}, u), s) : d[i] = s;
          }), V.apply(void 0, K([d], t))) : d;
        }
        function tt(d, t) {
          var r = document.createElement("a");
          r.download = t, r.href = d, document.body.appendChild(r), r.click(), document.body.removeChild(r);
        }
        function nt(d) {
          return t = this, r = void 0, i = function() {
            return function(u, s) {
              var f, o, a, n, l = { label: 0, sent: function() {
                if (1 & a[0])
                  throw a[1];
                return a[1];
              }, trys: [], ops: [] };
              return n = { next: h(0), throw: h(1), return: h(2) }, typeof Symbol == "function" && (n[Symbol.iterator] = function() {
                return this;
              }), n;
              function h(y) {
                return function(x) {
                  return function(p) {
                    if (f)
                      throw new TypeError("Generator is already executing.");
                    for (; l; )
                      try {
                        if (f = 1, o && (a = 2 & p[0] ? o.return : p[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, p[1])).done)
                          return a;
                        switch (o = 0, a && (p = [2 & p[0], a.value]), p[0]) {
                          case 0:
                          case 1:
                            a = p;
                            break;
                          case 4:
                            return l.label++, { value: p[1], done: !1 };
                          case 5:
                            l.label++, o = p[1], p = [0];
                            continue;
                          case 7:
                            p = l.ops.pop(), l.trys.pop();
                            continue;
                          default:
                            if (!((a = (a = l.trys).length > 0 && a[a.length - 1]) || p[0] !== 6 && p[0] !== 2)) {
                              l = 0;
                              continue;
                            }
                            if (p[0] === 3 && (!a || p[1] > a[0] && p[1] < a[3])) {
                              l.label = p[1];
                              break;
                            }
                            if (p[0] === 6 && l.label < a[1]) {
                              l.label = a[1], a = p;
                              break;
                            }
                            if (a && l.label < a[2]) {
                              l.label = a[2], l.ops.push(p);
                              break;
                            }
                            a[2] && l.ops.pop(), l.trys.pop();
                            continue;
                        }
                        p = s.call(u, l);
                      } catch (M) {
                        p = [6, M], o = 0;
                      } finally {
                        f = a = 0;
                      }
                    if (5 & p[0])
                      throw p[1];
                    return { value: p[0] ? p[1] : void 0, done: !0 };
                  }([y, x]);
                };
              }
            }(this, function(u) {
              return [2, new Promise(function(s) {
                var f = new XMLHttpRequest();
                f.onload = function() {
                  var o = new FileReader();
                  o.onloadend = function() {
                    s(o.result);
                  }, o.readAsDataURL(f.response);
                }, f.open("GET", d), f.responseType = "blob", f.send();
              })];
            });
          }, new ((e = void 0) || (e = Promise))(function(u, s) {
            function f(n) {
              try {
                a(i.next(n));
              } catch (l) {
                s(l);
              }
            }
            function o(n) {
              try {
                a(i.throw(n));
              } catch (l) {
                s(l);
              }
            }
            function a(n) {
              var l;
              n.done ? u(n.value) : (l = n.value, l instanceof e ? l : new e(function(h) {
                h(l);
              })).then(f, o);
            }
            a((i = i.apply(t, r || [])).next());
          });
          var t, r, e, i;
        }
        const F = { L: 0.07, M: 0.15, Q: 0.25, H: 0.3 };
        var $ = function() {
          return ($ = Object.assign || function(d) {
            for (var t, r = 1, e = arguments.length; r < e; r++)
              for (var i in t = arguments[r])
                Object.prototype.hasOwnProperty.call(t, i) && (d[i] = t[i]);
            return d;
          }).apply(this, arguments);
        };
        const ut = function() {
          function d(t) {
            var r = t.svg, e = t.type;
            this._svg = r, this._type = e;
          }
          return d.prototype.draw = function(t, r, e, i) {
            var u;
            switch (this._type) {
              case "dots":
                u = this._drawDot;
                break;
              case "classy":
                u = this._drawClassy;
                break;
              case "classy-rounded":
                u = this._drawClassyRounded;
                break;
              case "rounded":
                u = this._drawRounded;
                break;
              case "extra-rounded":
                u = this._drawExtraRounded;
                break;
              case "square":
              default:
                u = this._drawSquare;
            }
            u.call(this, { x: t, y: r, size: e, getNeighbor: i });
          }, d.prototype._rotateFigure = function(t) {
            var r, e = t.x, i = t.y, u = t.size, s = t.rotation, f = s === void 0 ? 0 : s, o = e + u / 2, a = i + u / 2;
            (0, t.draw)(), (r = this._element) === null || r === void 0 || r.setAttribute("transform", "rotate(" + 180 * f / Math.PI + "," + o + "," + a + ")");
          }, d.prototype._basicDot = function(t) {
            var r = this, e = t.size, i = t.x, u = t.y;
            this._rotateFigure($($({}, t), { draw: function() {
              r._element = document.createElementNS("http://www.w3.org/2000/svg", "circle"), r._element.setAttribute("cx", String(i + e / 2)), r._element.setAttribute("cy", String(u + e / 2)), r._element.setAttribute("r", String(e / 2));
            } }));
          }, d.prototype._basicSquare = function(t) {
            var r = this, e = t.size, i = t.x, u = t.y;
            this._rotateFigure($($({}, t), { draw: function() {
              r._element = document.createElementNS("http://www.w3.org/2000/svg", "rect"), r._element.setAttribute("x", String(i)), r._element.setAttribute("y", String(u)), r._element.setAttribute("width", String(e)), r._element.setAttribute("height", String(e));
            } }));
          }, d.prototype._basicSideRounded = function(t) {
            var r = this, e = t.size, i = t.x, u = t.y;
            this._rotateFigure($($({}, t), { draw: function() {
              r._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), r._element.setAttribute("d", "M " + i + " " + u + "v " + e + "h " + e / 2 + "a " + e / 2 + " " + e / 2 + ", 0, 0, 0, 0 " + -e);
            } }));
          }, d.prototype._basicCornerRounded = function(t) {
            var r = this, e = t.size, i = t.x, u = t.y;
            this._rotateFigure($($({}, t), { draw: function() {
              r._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), r._element.setAttribute("d", "M " + i + " " + u + "v " + e + "h " + e + "v " + -e / 2 + "a " + e / 2 + " " + e / 2 + ", 0, 0, 0, " + -e / 2 + " " + -e / 2);
            } }));
          }, d.prototype._basicCornerExtraRounded = function(t) {
            var r = this, e = t.size, i = t.x, u = t.y;
            this._rotateFigure($($({}, t), { draw: function() {
              r._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), r._element.setAttribute("d", "M " + i + " " + u + "v " + e + "h " + e + "a " + e + " " + e + ", 0, 0, 0, " + -e + " " + -e);
            } }));
          }, d.prototype._basicCornersRounded = function(t) {
            var r = this, e = t.size, i = t.x, u = t.y;
            this._rotateFigure($($({}, t), { draw: function() {
              r._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), r._element.setAttribute("d", "M " + i + " " + u + "v " + e / 2 + "a " + e / 2 + " " + e / 2 + ", 0, 0, 0, " + e / 2 + " " + e / 2 + "h " + e / 2 + "v " + -e / 2 + "a " + e / 2 + " " + e / 2 + ", 0, 0, 0, " + -e / 2 + " " + -e / 2);
            } }));
          }, d.prototype._drawDot = function(t) {
            var r = t.x, e = t.y, i = t.size;
            this._basicDot({ x: r, y: e, size: i, rotation: 0 });
          }, d.prototype._drawSquare = function(t) {
            var r = t.x, e = t.y, i = t.size;
            this._basicSquare({ x: r, y: e, size: i, rotation: 0 });
          }, d.prototype._drawRounded = function(t) {
            var r = t.x, e = t.y, i = t.size, u = t.getNeighbor, s = u ? +u(-1, 0) : 0, f = u ? +u(1, 0) : 0, o = u ? +u(0, -1) : 0, a = u ? +u(0, 1) : 0, n = s + f + o + a;
            if (n !== 0)
              if (n > 2 || s && f || o && a)
                this._basicSquare({ x: r, y: e, size: i, rotation: 0 });
              else {
                if (n === 2) {
                  var l = 0;
                  return s && o ? l = Math.PI / 2 : o && f ? l = Math.PI : f && a && (l = -Math.PI / 2), void this._basicCornerRounded({ x: r, y: e, size: i, rotation: l });
                }
                if (n === 1)
                  return l = 0, o ? l = Math.PI / 2 : f ? l = Math.PI : a && (l = -Math.PI / 2), void this._basicSideRounded({ x: r, y: e, size: i, rotation: l });
              }
            else
              this._basicDot({ x: r, y: e, size: i, rotation: 0 });
          }, d.prototype._drawExtraRounded = function(t) {
            var r = t.x, e = t.y, i = t.size, u = t.getNeighbor, s = u ? +u(-1, 0) : 0, f = u ? +u(1, 0) : 0, o = u ? +u(0, -1) : 0, a = u ? +u(0, 1) : 0, n = s + f + o + a;
            if (n !== 0)
              if (n > 2 || s && f || o && a)
                this._basicSquare({ x: r, y: e, size: i, rotation: 0 });
              else {
                if (n === 2) {
                  var l = 0;
                  return s && o ? l = Math.PI / 2 : o && f ? l = Math.PI : f && a && (l = -Math.PI / 2), void this._basicCornerExtraRounded({ x: r, y: e, size: i, rotation: l });
                }
                if (n === 1)
                  return l = 0, o ? l = Math.PI / 2 : f ? l = Math.PI : a && (l = -Math.PI / 2), void this._basicSideRounded({ x: r, y: e, size: i, rotation: l });
              }
            else
              this._basicDot({ x: r, y: e, size: i, rotation: 0 });
          }, d.prototype._drawClassy = function(t) {
            var r = t.x, e = t.y, i = t.size, u = t.getNeighbor, s = u ? +u(-1, 0) : 0, f = u ? +u(1, 0) : 0, o = u ? +u(0, -1) : 0, a = u ? +u(0, 1) : 0;
            s + f + o + a !== 0 ? s || o ? f || a ? this._basicSquare({ x: r, y: e, size: i, rotation: 0 }) : this._basicCornerRounded({ x: r, y: e, size: i, rotation: Math.PI / 2 }) : this._basicCornerRounded({ x: r, y: e, size: i, rotation: -Math.PI / 2 }) : this._basicCornersRounded({ x: r, y: e, size: i, rotation: Math.PI / 2 });
          }, d.prototype._drawClassyRounded = function(t) {
            var r = t.x, e = t.y, i = t.size, u = t.getNeighbor, s = u ? +u(-1, 0) : 0, f = u ? +u(1, 0) : 0, o = u ? +u(0, -1) : 0, a = u ? +u(0, 1) : 0;
            s + f + o + a !== 0 ? s || o ? f || a ? this._basicSquare({ x: r, y: e, size: i, rotation: 0 }) : this._basicCornerExtraRounded({ x: r, y: e, size: i, rotation: Math.PI / 2 }) : this._basicCornerExtraRounded({ x: r, y: e, size: i, rotation: -Math.PI / 2 }) : this._basicCornersRounded({ x: r, y: e, size: i, rotation: Math.PI / 2 });
          }, d;
        }();
        var et = function() {
          return (et = Object.assign || function(d) {
            for (var t, r = 1, e = arguments.length; r < e; r++)
              for (var i in t = arguments[r])
                Object.prototype.hasOwnProperty.call(t, i) && (d[i] = t[i]);
            return d;
          }).apply(this, arguments);
        };
        const st = function() {
          function d(t) {
            var r = t.svg, e = t.type;
            this._svg = r, this._type = e;
          }
          return d.prototype.draw = function(t, r, e, i) {
            var u;
            switch (this._type) {
              case "square":
                u = this._drawSquare;
                break;
              case "extra-rounded":
                u = this._drawExtraRounded;
                break;
              case "dot":
              default:
                u = this._drawDot;
            }
            u.call(this, { x: t, y: r, size: e, rotation: i });
          }, d.prototype._rotateFigure = function(t) {
            var r, e = t.x, i = t.y, u = t.size, s = t.rotation, f = s === void 0 ? 0 : s, o = e + u / 2, a = i + u / 2;
            (0, t.draw)(), (r = this._element) === null || r === void 0 || r.setAttribute("transform", "rotate(" + 180 * f / Math.PI + "," + o + "," + a + ")");
          }, d.prototype._basicDot = function(t) {
            var r = this, e = t.size, i = t.x, u = t.y, s = e / 7;
            this._rotateFigure(et(et({}, t), { draw: function() {
              r._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), r._element.setAttribute("clip-rule", "evenodd"), r._element.setAttribute("d", "M " + (i + e / 2) + " " + u + "a " + e / 2 + " " + e / 2 + " 0 1 0 0.1 0zm 0 " + s + "a " + (e / 2 - s) + " " + (e / 2 - s) + " 0 1 1 -0.1 0Z");
            } }));
          }, d.prototype._basicSquare = function(t) {
            var r = this, e = t.size, i = t.x, u = t.y, s = e / 7;
            this._rotateFigure(et(et({}, t), { draw: function() {
              r._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), r._element.setAttribute("clip-rule", "evenodd"), r._element.setAttribute("d", "M " + i + " " + u + "v " + e + "h " + e + "v " + -e + "zM " + (i + s) + " " + (u + s) + "h " + (e - 2 * s) + "v " + (e - 2 * s) + "h " + (2 * s - e) + "z");
            } }));
          }, d.prototype._basicExtraRounded = function(t) {
            var r = this, e = t.size, i = t.x, u = t.y, s = e / 7;
            this._rotateFigure(et(et({}, t), { draw: function() {
              r._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), r._element.setAttribute("clip-rule", "evenodd"), r._element.setAttribute("d", "M " + i + " " + (u + 2.5 * s) + "v " + 2 * s + "a " + 2.5 * s + " " + 2.5 * s + ", 0, 0, 0, " + 2.5 * s + " " + 2.5 * s + "h " + 2 * s + "a " + 2.5 * s + " " + 2.5 * s + ", 0, 0, 0, " + 2.5 * s + " " + 2.5 * -s + "v " + -2 * s + "a " + 2.5 * s + " " + 2.5 * s + ", 0, 0, 0, " + 2.5 * -s + " " + 2.5 * -s + "h " + -2 * s + "a " + 2.5 * s + " " + 2.5 * s + ", 0, 0, 0, " + 2.5 * -s + " " + 2.5 * s + "M " + (i + 2.5 * s) + " " + (u + s) + "h " + 2 * s + "a " + 1.5 * s + " " + 1.5 * s + ", 0, 0, 1, " + 1.5 * s + " " + 1.5 * s + "v " + 2 * s + "a " + 1.5 * s + " " + 1.5 * s + ", 0, 0, 1, " + 1.5 * -s + " " + 1.5 * s + "h " + -2 * s + "a " + 1.5 * s + " " + 1.5 * s + ", 0, 0, 1, " + 1.5 * -s + " " + 1.5 * -s + "v " + -2 * s + "a " + 1.5 * s + " " + 1.5 * s + ", 0, 0, 1, " + 1.5 * s + " " + 1.5 * -s);
            } }));
          }, d.prototype._drawDot = function(t) {
            var r = t.x, e = t.y, i = t.size, u = t.rotation;
            this._basicDot({ x: r, y: e, size: i, rotation: u });
          }, d.prototype._drawSquare = function(t) {
            var r = t.x, e = t.y, i = t.size, u = t.rotation;
            this._basicSquare({ x: r, y: e, size: i, rotation: u });
          }, d.prototype._drawExtraRounded = function(t) {
            var r = t.x, e = t.y, i = t.size, u = t.rotation;
            this._basicExtraRounded({ x: r, y: e, size: i, rotation: u });
          }, d;
        }();
        var at = function() {
          return (at = Object.assign || function(d) {
            for (var t, r = 1, e = arguments.length; r < e; r++)
              for (var i in t = arguments[r])
                Object.prototype.hasOwnProperty.call(t, i) && (d[i] = t[i]);
            return d;
          }).apply(this, arguments);
        };
        const bt = function() {
          function d(t) {
            var r = t.svg, e = t.type;
            this._svg = r, this._type = e;
          }
          return d.prototype.draw = function(t, r, e, i) {
            var u;
            switch (this._type) {
              case "square":
                u = this._drawSquare;
                break;
              case "dot":
              default:
                u = this._drawDot;
            }
            u.call(this, { x: t, y: r, size: e, rotation: i });
          }, d.prototype._rotateFigure = function(t) {
            var r, e = t.x, i = t.y, u = t.size, s = t.rotation, f = s === void 0 ? 0 : s, o = e + u / 2, a = i + u / 2;
            (0, t.draw)(), (r = this._element) === null || r === void 0 || r.setAttribute("transform", "rotate(" + 180 * f / Math.PI + "," + o + "," + a + ")");
          }, d.prototype._basicDot = function(t) {
            var r = this, e = t.size, i = t.x, u = t.y;
            this._rotateFigure(at(at({}, t), { draw: function() {
              r._element = document.createElementNS("http://www.w3.org/2000/svg", "circle"), r._element.setAttribute("cx", String(i + e / 2)), r._element.setAttribute("cy", String(u + e / 2)), r._element.setAttribute("r", String(e / 2));
            } }));
          }, d.prototype._basicSquare = function(t) {
            var r = this, e = t.size, i = t.x, u = t.y;
            this._rotateFigure(at(at({}, t), { draw: function() {
              r._element = document.createElementNS("http://www.w3.org/2000/svg", "rect"), r._element.setAttribute("x", String(i)), r._element.setAttribute("y", String(u)), r._element.setAttribute("width", String(e)), r._element.setAttribute("height", String(e));
            } }));
          }, d.prototype._drawDot = function(t) {
            var r = t.x, e = t.y, i = t.size, u = t.rotation;
            this._basicDot({ x: r, y: e, size: i, rotation: u });
          }, d.prototype._drawSquare = function(t) {
            var r = t.x, e = t.y, i = t.size, u = t.rotation;
            this._basicSquare({ x: r, y: e, size: i, rotation: u });
          }, d;
        }(), dt = "circle";
        var yt = function(d, t, r, e) {
          return new (r || (r = Promise))(function(i, u) {
            function s(a) {
              try {
                o(e.next(a));
              } catch (n) {
                u(n);
              }
            }
            function f(a) {
              try {
                o(e.throw(a));
              } catch (n) {
                u(n);
              }
            }
            function o(a) {
              var n;
              a.done ? i(a.value) : (n = a.value, n instanceof r ? n : new r(function(l) {
                l(n);
              })).then(s, f);
            }
            o((e = e.apply(d, t || [])).next());
          });
        }, _t = function(d, t) {
          var r, e, i, u, s = { label: 0, sent: function() {
            if (1 & i[0])
              throw i[1];
            return i[1];
          }, trys: [], ops: [] };
          return u = { next: f(0), throw: f(1), return: f(2) }, typeof Symbol == "function" && (u[Symbol.iterator] = function() {
            return this;
          }), u;
          function f(o) {
            return function(a) {
              return function(n) {
                if (r)
                  throw new TypeError("Generator is already executing.");
                for (; s; )
                  try {
                    if (r = 1, e && (i = 2 & n[0] ? e.return : n[0] ? e.throw || ((i = e.return) && i.call(e), 0) : e.next) && !(i = i.call(e, n[1])).done)
                      return i;
                    switch (e = 0, i && (n = [2 & n[0], i.value]), n[0]) {
                      case 0:
                      case 1:
                        i = n;
                        break;
                      case 4:
                        return s.label++, { value: n[1], done: !1 };
                      case 5:
                        s.label++, e = n[1], n = [0];
                        continue;
                      case 7:
                        n = s.ops.pop(), s.trys.pop();
                        continue;
                      default:
                        if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || n[0] !== 6 && n[0] !== 2)) {
                          s = 0;
                          continue;
                        }
                        if (n[0] === 3 && (!i || n[1] > i[0] && n[1] < i[3])) {
                          s.label = n[1];
                          break;
                        }
                        if (n[0] === 6 && s.label < i[1]) {
                          s.label = i[1], i = n;
                          break;
                        }
                        if (i && s.label < i[2]) {
                          s.label = i[2], s.ops.push(n);
                          break;
                        }
                        i[2] && s.ops.pop(), s.trys.pop();
                        continue;
                    }
                    n = t.call(d, s);
                  } catch (l) {
                    n = [6, l], e = 0;
                  } finally {
                    r = i = 0;
                  }
                if (5 & n[0])
                  throw n[1];
                return { value: n[0] ? n[1] : void 0, done: !0 };
              }([o, a]);
            };
          }
        }, lt = [[1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1]], ct = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]];
        const xt = function() {
          function d(t) {
            this._element = document.createElementNS("http://www.w3.org/2000/svg", "svg"), this._element.setAttribute("width", String(t.width)), this._element.setAttribute("height", String(t.height)), this._defs = document.createElementNS("http://www.w3.org/2000/svg", "defs"), this._element.appendChild(this._defs), this._options = t;
          }
          return Object.defineProperty(d.prototype, "width", { get: function() {
            return this._options.width;
          }, enumerable: !1, configurable: !0 }), Object.defineProperty(d.prototype, "height", { get: function() {
            return this._options.height;
          }, enumerable: !1, configurable: !0 }), d.prototype.getElement = function() {
            return this._element;
          }, d.prototype.drawQR = function(t) {
            return yt(this, void 0, void 0, function() {
              var r, e, i, u, s, f, o, a, n, l, h = this;
              return _t(this, function(y) {
                switch (y.label) {
                  case 0:
                    return r = t.getModuleCount(), e = Math.min(this._options.width, this._options.height) - 2 * this._options.margin, i = this._options.shape === dt ? e / Math.sqrt(2) : e, u = Math.floor(i / r), s = { hideXDots: 0, hideYDots: 0, width: 0, height: 0 }, this._qr = t, this._options.image ? [4, this.loadImage()] : [3, 2];
                  case 1:
                    if (y.sent(), !this._image)
                      return [2];
                    f = this._options, o = f.imageOptions, a = f.qrOptions, n = o.imageSize * F[a.errorCorrectionLevel], l = Math.floor(n * r * r), s = function(x) {
                      var p = x.originalHeight, M = x.originalWidth, A = x.maxHiddenDots, O = x.maxHiddenAxisDots, N = x.dotSize, k = { x: 0, y: 0 }, P = { x: 0, y: 0 };
                      if (p <= 0 || M <= 0 || A <= 0 || N <= 0)
                        return { height: 0, width: 0, hideYDots: 0, hideXDots: 0 };
                      var D = p / M;
                      return k.x = Math.floor(Math.sqrt(A / D)), k.x <= 0 && (k.x = 1), O && O < k.x && (k.x = O), k.x % 2 == 0 && k.x--, P.x = k.x * N, k.y = 1 + 2 * Math.ceil((k.x * D - 1) / 2), P.y = Math.round(P.x * D), (k.y * k.x > A || O && O < k.y) && (O && O < k.y ? (k.y = O, k.y % 2 == 0 && k.x--) : k.y -= 2, P.y = k.y * N, k.x = 1 + 2 * Math.ceil((k.y / D - 1) / 2), P.x = Math.round(P.y / D)), { height: P.y, width: P.x, hideYDots: k.y, hideXDots: k.x };
                    }({ originalWidth: this._image.width, originalHeight: this._image.height, maxHiddenDots: l, maxHiddenAxisDots: r - 14, dotSize: u }), y.label = 2;
                  case 2:
                    return this.drawBackground(), this.drawDots(function(x, p) {
                      var M, A, O, N, k, P;
                      return !(h._options.imageOptions.hideBackgroundDots && x >= (r - s.hideXDots) / 2 && x < (r + s.hideXDots) / 2 && p >= (r - s.hideYDots) / 2 && p < (r + s.hideYDots) / 2 || !((M = lt[x]) === null || M === void 0) && M[p] || !((A = lt[x - r + 7]) === null || A === void 0) && A[p] || !((O = lt[x]) === null || O === void 0) && O[p - r + 7] || !((N = ct[x]) === null || N === void 0) && N[p] || !((k = ct[x - r + 7]) === null || k === void 0) && k[p] || !((P = ct[x]) === null || P === void 0) && P[p - r + 7]);
                    }), this.drawCorners(), this._options.image ? [4, this.drawImage({ width: s.width, height: s.height, count: r, dotSize: u })] : [3, 4];
                  case 3:
                    y.sent(), y.label = 4;
                  case 4:
                    return [2];
                }
              });
            });
          }, d.prototype.drawBackground = function() {
            var t, r, e, i = this._element, u = this._options;
            if (i) {
              var s = (t = u.backgroundOptions) === null || t === void 0 ? void 0 : t.gradient, f = (r = u.backgroundOptions) === null || r === void 0 ? void 0 : r.color;
              if ((s || f) && this._createColor({ options: s, color: f, additionalRotation: 0, x: 0, y: 0, height: u.height, width: u.width, name: "background-color" }), (e = u.backgroundOptions) === null || e === void 0 ? void 0 : e.round) {
                var o = Math.min(u.width, u.height), a = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                this._backgroundClipPath = document.createElementNS("http://www.w3.org/2000/svg", "clipPath"), this._backgroundClipPath.setAttribute("id", "clip-path-background-color"), this._defs.appendChild(this._backgroundClipPath), a.setAttribute("x", String((u.width - o) / 2)), a.setAttribute("y", String((u.height - o) / 2)), a.setAttribute("width", String(o)), a.setAttribute("height", String(o)), a.setAttribute("rx", String(o / 2 * u.backgroundOptions.round)), this._backgroundClipPath.appendChild(a);
              }
            }
          }, d.prototype.drawDots = function(t) {
            var r, e, i = this;
            if (!this._qr)
              throw "QR code is not defined";
            var u = this._options, s = this._qr.getModuleCount();
            if (s > u.width || s > u.height)
              throw "The canvas is too small.";
            var f = Math.min(u.width, u.height) - 2 * u.margin, o = u.shape === dt ? f / Math.sqrt(2) : f, a = Math.floor(o / s), n = Math.floor((u.width - s * a) / 2), l = Math.floor((u.height - s * a) / 2), h = new ut({ svg: this._element, type: u.dotsOptions.type });
            this._dotsClipPath = document.createElementNS("http://www.w3.org/2000/svg", "clipPath"), this._dotsClipPath.setAttribute("id", "clip-path-dot-color"), this._defs.appendChild(this._dotsClipPath), this._createColor({ options: (r = u.dotsOptions) === null || r === void 0 ? void 0 : r.gradient, color: u.dotsOptions.color, additionalRotation: 0, x: 0, y: 0, height: u.height, width: u.width, name: "dot-color" });
            for (var y = function(G) {
              for (var B = function(j) {
                return t && !t(G, j) ? "continue" : !((e = x._qr) === null || e === void 0) && e.isDark(G, j) ? (h.draw(n + G * a, l + j * a, a, function(Y, W) {
                  return !(G + Y < 0 || j + W < 0 || G + Y >= s || j + W >= s) && !(t && !t(G + Y, j + W)) && !!i._qr && i._qr.isDark(G + Y, j + W);
                }), void (h._element && x._dotsClipPath && x._dotsClipPath.appendChild(h._element))) : "continue";
              }, X = 0; X < s; X++)
                B(X);
            }, x = this, p = 0; p < s; p++)
              y(p);
            if (u.shape === dt) {
              var M = Math.floor((f / a - s) / 2), A = s + 2 * M, O = n - M * a, N = l - M * a, k = [], P = Math.floor(A / 2);
              for (p = 0; p < A; p++) {
                k[p] = [];
                for (var D = 0; D < A; D++)
                  p >= M - 1 && p <= A - M && D >= M - 1 && D <= A - M || Math.sqrt((p - P) * (p - P) + (D - P) * (D - P)) > P ? k[p][D] = 0 : k[p][D] = this._qr.isDark(D - 2 * M < 0 ? D : D >= s ? D - 2 * M : D - M, p - 2 * M < 0 ? p : p >= s ? p - 2 * M : p - M) ? 1 : 0;
              }
              var q = function(G) {
                for (var B = function(j) {
                  if (!k[G][j])
                    return "continue";
                  h.draw(O + G * a, N + j * a, a, function(Y, W) {
                    var Z;
                    return !!(!((Z = k[G + Y]) === null || Z === void 0) && Z[j + W]);
                  }), h._element && it._dotsClipPath && it._dotsClipPath.appendChild(h._element);
                }, X = 0; X < A; X++)
                  B(X);
              }, it = this;
              for (p = 0; p < A; p++)
                q(p);
            }
          }, d.prototype.drawCorners = function() {
            var t = this;
            if (!this._qr)
              throw "QR code is not defined";
            var r = this._element, e = this._options;
            if (!r)
              throw "Element code is not defined";
            var i = this._qr.getModuleCount(), u = Math.min(e.width, e.height) - 2 * e.margin, s = e.shape === dt ? u / Math.sqrt(2) : u, f = Math.floor(s / i), o = 7 * f, a = 3 * f, n = Math.floor((e.width - i * f) / 2), l = Math.floor((e.height - i * f) / 2);
            [[0, 0, 0], [1, 0, Math.PI / 2], [0, 1, -Math.PI / 2]].forEach(function(h) {
              var y, x, p, M, A, O, N, k, P, D, q, it, G = h[0], B = h[1], X = h[2], j = n + G * f * (i - 7), Y = l + B * f * (i - 7), W = t._dotsClipPath, Z = t._dotsClipPath;
              if ((!((y = e.cornersSquareOptions) === null || y === void 0) && y.gradient || !((x = e.cornersSquareOptions) === null || x === void 0) && x.color) && ((W = document.createElementNS("http://www.w3.org/2000/svg", "clipPath")).setAttribute("id", "clip-path-corners-square-color-" + G + "-" + B), t._defs.appendChild(W), t._cornersSquareClipPath = t._cornersDotClipPath = Z = W, t._createColor({ options: (p = e.cornersSquareOptions) === null || p === void 0 ? void 0 : p.gradient, color: (M = e.cornersSquareOptions) === null || M === void 0 ? void 0 : M.color, additionalRotation: X, x: j, y: Y, height: o, width: o, name: "corners-square-color-" + G + "-" + B })), (A = e.cornersSquareOptions) === null || A === void 0 ? void 0 : A.type) {
                var ot = new st({ svg: t._element, type: e.cornersSquareOptions.type });
                ot.draw(j, Y, o, X), ot._element && W && W.appendChild(ot._element);
              } else
                for (var ft = new ut({ svg: t._element, type: e.dotsOptions.type }), Et = function(ht) {
                  for (var At = function(vt) {
                    if (!(!((O = lt[ht]) === null || O === void 0) && O[vt]))
                      return "continue";
                    ft.draw(j + ht * f, Y + vt * f, f, function(Dt, Ot) {
                      var wt;
                      return !!(!((wt = lt[ht + Dt]) === null || wt === void 0) && wt[vt + Ot]);
                    }), ft._element && W && W.appendChild(ft._element);
                  }, pt = 0; pt < lt[ht].length; pt++)
                    At(pt);
                }, gt = 0; gt < lt.length; gt++)
                  Et(gt);
              if ((!((N = e.cornersDotOptions) === null || N === void 0) && N.gradient || !((k = e.cornersDotOptions) === null || k === void 0) && k.color) && ((Z = document.createElementNS("http://www.w3.org/2000/svg", "clipPath")).setAttribute("id", "clip-path-corners-dot-color-" + G + "-" + B), t._defs.appendChild(Z), t._cornersDotClipPath = Z, t._createColor({ options: (P = e.cornersDotOptions) === null || P === void 0 ? void 0 : P.gradient, color: (D = e.cornersDotOptions) === null || D === void 0 ? void 0 : D.color, additionalRotation: X, x: j + 2 * f, y: Y + 2 * f, height: a, width: a, name: "corners-dot-color-" + G + "-" + B })), (q = e.cornersDotOptions) === null || q === void 0 ? void 0 : q.type) {
                var kt = new bt({ svg: t._element, type: e.cornersDotOptions.type });
                kt.draw(j + 2 * f, Y + 2 * f, a, X), kt._element && Z && Z.appendChild(kt._element);
              } else {
                ft = new ut({ svg: t._element, type: e.dotsOptions.type });
                var Bt = function(ht) {
                  for (var At = function(vt) {
                    if (!(!((it = ct[ht]) === null || it === void 0) && it[vt]))
                      return "continue";
                    ft.draw(j + ht * f, Y + vt * f, f, function(Dt, Ot) {
                      var wt;
                      return !!(!((wt = ct[ht + Dt]) === null || wt === void 0) && wt[vt + Ot]);
                    }), ft._element && Z && Z.appendChild(ft._element);
                  }, pt = 0; pt < ct[ht].length; pt++)
                    At(pt);
                };
                for (gt = 0; gt < ct.length; gt++)
                  Bt(gt);
              }
            });
          }, d.prototype.loadImage = function() {
            var t = this;
            return new Promise(function(r, e) {
              var i = t._options, u = new Image();
              if (!i.image)
                return e("Image is not defined");
              typeof i.imageOptions.crossOrigin == "string" && (u.crossOrigin = i.imageOptions.crossOrigin), t._image = u, u.onload = function() {
                r();
              }, u.src = i.image;
            });
          }, d.prototype.drawImage = function(t) {
            var r = t.width, e = t.height, i = t.count, u = t.dotSize;
            return yt(this, void 0, void 0, function() {
              var s, f, o, a, n, l, h, y, x;
              return _t(this, function(p) {
                switch (p.label) {
                  case 0:
                    return s = this._options, f = Math.floor((s.width - i * u) / 2), o = Math.floor((s.height - i * u) / 2), a = f + s.imageOptions.margin + (i * u - r) / 2, n = o + s.imageOptions.margin + (i * u - e) / 2, l = r - 2 * s.imageOptions.margin, h = e - 2 * s.imageOptions.margin, (y = document.createElementNS("http://www.w3.org/2000/svg", "image")).setAttribute("x", String(a)), y.setAttribute("y", String(n)), y.setAttribute("width", l + "px"), y.setAttribute("height", h + "px"), [4, nt(s.image || "")];
                  case 1:
                    return x = p.sent(), y.setAttribute("href", x || ""), this._element.appendChild(y), [2];
                }
              });
            });
          }, d.prototype._createColor = function(t) {
            var r = t.options, e = t.color, i = t.additionalRotation, u = t.x, s = t.y, f = t.height, o = t.width, a = t.name, n = o > f ? o : f, l = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            if (l.setAttribute("x", String(u)), l.setAttribute("y", String(s)), l.setAttribute("height", String(f)), l.setAttribute("width", String(o)), l.setAttribute("clip-path", "url('#clip-path-" + a + "')"), r) {
              var h;
              if (r.type === "radial")
                (h = document.createElementNS("http://www.w3.org/2000/svg", "radialGradient")).setAttribute("id", a), h.setAttribute("gradientUnits", "userSpaceOnUse"), h.setAttribute("fx", String(u + o / 2)), h.setAttribute("fy", String(s + f / 2)), h.setAttribute("cx", String(u + o / 2)), h.setAttribute("cy", String(s + f / 2)), h.setAttribute("r", String(n / 2));
              else {
                var y = ((r.rotation || 0) + i) % (2 * Math.PI), x = (y + 2 * Math.PI) % (2 * Math.PI), p = u + o / 2, M = s + f / 2, A = u + o / 2, O = s + f / 2;
                x >= 0 && x <= 0.25 * Math.PI || x > 1.75 * Math.PI && x <= 2 * Math.PI ? (p -= o / 2, M -= f / 2 * Math.tan(y), A += o / 2, O += f / 2 * Math.tan(y)) : x > 0.25 * Math.PI && x <= 0.75 * Math.PI ? (M -= f / 2, p -= o / 2 / Math.tan(y), O += f / 2, A += o / 2 / Math.tan(y)) : x > 0.75 * Math.PI && x <= 1.25 * Math.PI ? (p += o / 2, M += f / 2 * Math.tan(y), A -= o / 2, O -= f / 2 * Math.tan(y)) : x > 1.25 * Math.PI && x <= 1.75 * Math.PI && (M += f / 2, p += o / 2 / Math.tan(y), O -= f / 2, A -= o / 2 / Math.tan(y)), (h = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient")).setAttribute("id", a), h.setAttribute("gradientUnits", "userSpaceOnUse"), h.setAttribute("x1", String(Math.round(p))), h.setAttribute("y1", String(Math.round(M))), h.setAttribute("x2", String(Math.round(A))), h.setAttribute("y2", String(Math.round(O)));
              }
              r.colorStops.forEach(function(N) {
                var k = N.offset, P = N.color, D = document.createElementNS("http://www.w3.org/2000/svg", "stop");
                D.setAttribute("offset", 100 * k + "%"), D.setAttribute("stop-color", P), h.appendChild(D);
              }), l.setAttribute("fill", "url('#" + a + "')"), this._defs.appendChild(h);
            } else
              e && l.setAttribute("fill", e);
            this._element.appendChild(l);
          }, d;
        }(), mt = "canvas";
        for (var Ct = {}, m = 0; m <= 40; m++)
          Ct[m] = m;
        const w = { type: mt, shape: "square", width: 300, height: 300, data: "", margin: 0, qrOptions: { typeNumber: Ct[0], mode: void 0, errorCorrectionLevel: "Q" }, imageOptions: { hideBackgroundDots: !0, imageSize: 0.4, crossOrigin: void 0, margin: 0 }, dotsOptions: { type: "square", color: "#000" }, backgroundOptions: { round: 0, color: "#fff" } };
        var v = function() {
          return (v = Object.assign || function(d) {
            for (var t, r = 1, e = arguments.length; r < e; r++)
              for (var i in t = arguments[r])
                Object.prototype.hasOwnProperty.call(t, i) && (d[i] = t[i]);
            return d;
          }).apply(this, arguments);
        };
        function g(d) {
          var t = v({}, d);
          if (!t.colorStops || !t.colorStops.length)
            throw "Field 'colorStops' is required in gradient";
          return t.rotation ? t.rotation = Number(t.rotation) : t.rotation = 0, t.colorStops = t.colorStops.map(function(r) {
            return v(v({}, r), { offset: Number(r.offset) });
          }), t;
        }
        function c(d) {
          var t = v({}, d);
          return t.width = Number(t.width), t.height = Number(t.height), t.margin = Number(t.margin), t.imageOptions = v(v({}, t.imageOptions), { hideBackgroundDots: !!t.imageOptions.hideBackgroundDots, imageSize: Number(t.imageOptions.imageSize), margin: Number(t.imageOptions.margin) }), t.margin > Math.min(t.width, t.height) && (t.margin = Math.min(t.width, t.height)), t.dotsOptions = v({}, t.dotsOptions), t.dotsOptions.gradient && (t.dotsOptions.gradient = g(t.dotsOptions.gradient)), t.cornersSquareOptions && (t.cornersSquareOptions = v({}, t.cornersSquareOptions), t.cornersSquareOptions.gradient && (t.cornersSquareOptions.gradient = g(t.cornersSquareOptions.gradient))), t.cornersDotOptions && (t.cornersDotOptions = v({}, t.cornersDotOptions), t.cornersDotOptions.gradient && (t.cornersDotOptions.gradient = g(t.cornersDotOptions.gradient))), t.backgroundOptions && (t.backgroundOptions = v({}, t.backgroundOptions), t.backgroundOptions.gradient && (t.backgroundOptions.gradient = g(t.backgroundOptions.gradient))), t;
        }
        var b = T(192), C = T.n(b), _ = function(d, t, r, e) {
          return new (r || (r = Promise))(function(i, u) {
            function s(a) {
              try {
                o(e.next(a));
              } catch (n) {
                u(n);
              }
            }
            function f(a) {
              try {
                o(e.throw(a));
              } catch (n) {
                u(n);
              }
            }
            function o(a) {
              var n;
              a.done ? i(a.value) : (n = a.value, n instanceof r ? n : new r(function(l) {
                l(n);
              })).then(s, f);
            }
            o((e = e.apply(d, t || [])).next());
          });
        }, S = function(d, t) {
          var r, e, i, u, s = { label: 0, sent: function() {
            if (1 & i[0])
              throw i[1];
            return i[1];
          }, trys: [], ops: [] };
          return u = { next: f(0), throw: f(1), return: f(2) }, typeof Symbol == "function" && (u[Symbol.iterator] = function() {
            return this;
          }), u;
          function f(o) {
            return function(a) {
              return function(n) {
                if (r)
                  throw new TypeError("Generator is already executing.");
                for (; s; )
                  try {
                    if (r = 1, e && (i = 2 & n[0] ? e.return : n[0] ? e.throw || ((i = e.return) && i.call(e), 0) : e.next) && !(i = i.call(e, n[1])).done)
                      return i;
                    switch (e = 0, i && (n = [2 & n[0], i.value]), n[0]) {
                      case 0:
                      case 1:
                        i = n;
                        break;
                      case 4:
                        return s.label++, { value: n[1], done: !1 };
                      case 5:
                        s.label++, e = n[1], n = [0];
                        continue;
                      case 7:
                        n = s.ops.pop(), s.trys.pop();
                        continue;
                      default:
                        if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || n[0] !== 6 && n[0] !== 2)) {
                          s = 0;
                          continue;
                        }
                        if (n[0] === 3 && (!i || n[1] > i[0] && n[1] < i[3])) {
                          s.label = n[1];
                          break;
                        }
                        if (n[0] === 6 && s.label < i[1]) {
                          s.label = i[1], i = n;
                          break;
                        }
                        if (i && s.label < i[2]) {
                          s.label = i[2], s.ops.push(n);
                          break;
                        }
                        i[2] && s.ops.pop(), s.trys.pop();
                        continue;
                    }
                    n = t.call(d, s);
                  } catch (l) {
                    n = [6, l], e = 0;
                  } finally {
                    r = i = 0;
                  }
                if (5 & n[0])
                  throw n[1];
                return { value: n[0] ? n[1] : void 0, done: !0 };
              }([o, a]);
            };
          }
        };
        const J = function() {
          function d(t) {
            this._options = t ? c(V(w, t)) : w, this.update();
          }
          return d._clearContainer = function(t) {
            t && (t.innerHTML = "");
          }, d.prototype._setupSvg = function() {
            var t = this;
            if (this._qr) {
              var r = new xt(this._options);
              this._svg = r.getElement(), this._svgDrawingPromise = r.drawQR(this._qr).then(function() {
                var e;
                t._svg && ((e = t._extension) === null || e === void 0 || e.call(t, r.getElement(), t._options));
              });
            }
          }, d.prototype._setupCanvas = function() {
            var t, r = this;
            this._qr && (this._canvas = document.createElement("canvas"), this._canvas.width = this._options.width, this._canvas.height = this._options.height, this._setupSvg(), this._canvasDrawingPromise = (t = this._svgDrawingPromise) === null || t === void 0 ? void 0 : t.then(function() {
              if (r._svg) {
                var e = r._svg, i = new XMLSerializer().serializeToString(e), u = "data:image/svg+xml;base64," + btoa(i), s = new Image();
                return new Promise(function(f) {
                  s.onload = function() {
                    var o, a;
                    (a = (o = r._canvas) === null || o === void 0 ? void 0 : o.getContext("2d")) === null || a === void 0 || a.drawImage(s, 0, 0), f();
                  }, s.src = u;
                });
              }
            }));
          }, d.prototype._getElement = function(t) {
            return t === void 0 && (t = "png"), _(this, void 0, void 0, function() {
              return S(this, function(r) {
                switch (r.label) {
                  case 0:
                    if (!this._qr)
                      throw "QR code is empty";
                    return t.toLowerCase() !== "svg" ? [3, 2] : (this._svg && this._svgDrawingPromise || this._setupSvg(), [4, this._svgDrawingPromise]);
                  case 1:
                    return r.sent(), [2, this._svg];
                  case 2:
                    return this._canvas && this._canvasDrawingPromise || this._setupCanvas(), [4, this._canvasDrawingPromise];
                  case 3:
                    return r.sent(), [2, this._canvas];
                }
              });
            });
          }, d.prototype.update = function(t) {
            d._clearContainer(this._container), this._options = t ? c(V(this._options, t)) : this._options, this._options.data && (this._qr = C()(this._options.qrOptions.typeNumber, this._options.qrOptions.errorCorrectionLevel), this._qr.addData(this._options.data, this._options.qrOptions.mode || function(r) {
              switch (!0) {
                case /^[0-9]*$/.test(r):
                  return "Numeric";
                case /^[0-9A-Z $%*+\-./:]*$/.test(r):
                  return "Alphanumeric";
                default:
                  return "Byte";
              }
            }(this._options.data)), this._qr.make(), this._options.type === mt ? this._setupCanvas() : this._setupSvg(), this.append(this._container));
          }, d.prototype.append = function(t) {
            if (t) {
              if (typeof t.appendChild != "function")
                throw "Container should be a single DOM node";
              this._options.type === mt ? this._canvas && t.appendChild(this._canvas) : this._svg && t.appendChild(this._svg), this._container = t;
            }
          }, d.prototype.applyExtension = function(t) {
            if (!t)
              throw "Extension function should be defined.";
            this._extension = t, this.update();
          }, d.prototype.deleteExtension = function() {
            this._extension = void 0, this.update();
          }, d.prototype.getRawData = function(t) {
            return t === void 0 && (t = "png"), _(this, void 0, void 0, function() {
              var r, e, i;
              return S(this, function(u) {
                switch (u.label) {
                  case 0:
                    if (!this._qr)
                      throw "QR code is empty";
                    return [4, this._getElement(t)];
                  case 1:
                    return (r = u.sent()) ? t.toLowerCase() === "svg" ? (e = new XMLSerializer(), i = e.serializeToString(r), [2, new Blob([`<?xml version="1.0" standalone="no"?>\r
` + i], { type: "image/svg+xml" })]) : [2, new Promise(function(s) {
                      return r.toBlob(s, "image/" + t, 1);
                    })] : [2, null];
                }
              });
            });
          }, d.prototype.download = function(t) {
            return _(this, void 0, void 0, function() {
              var r, e, i, u, s;
              return S(this, function(f) {
                switch (f.label) {
                  case 0:
                    if (!this._qr)
                      throw "QR code is empty";
                    return r = "png", e = "qr", typeof t == "string" ? (r = t, console.warn("Extension is deprecated as argument for 'download' method, please pass object { name: '...', extension: '...' } as argument")) : typeof t == "object" && t !== null && (t.name && (e = t.name), t.extension && (r = t.extension)), [4, this._getElement(r)];
                  case 1:
                    return (i = f.sent()) ? (r.toLowerCase() === "svg" ? (u = new XMLSerializer(), s = `<?xml version="1.0" standalone="no"?>\r
` + (s = u.serializeToString(i)), tt("data:image/svg+xml;charset=utf-8," + encodeURIComponent(s), e + ".svg")) : tt(i.toDataURL("image/" + r), e + "." + r), [2]) : [2];
                }
              });
            });
          }, d;
        }();
      } }, R = {};
      function E(z) {
        if (R[z])
          return R[z].exports;
        var I = R[z] = { exports: {} };
        return H[z](I, I.exports, E), I.exports;
      }
      return E.n = (z) => {
        var I = z && z.__esModule ? () => z.default : () => z;
        return E.d(I, { a: I }), I;
      }, E.d = (z, I) => {
        for (var T in I)
          E.o(I, T) && !E.o(z, T) && Object.defineProperty(z, T, { enumerable: !0, get: I[T] });
      }, E.o = (z, I) => Object.prototype.hasOwnProperty.call(z, I), E(676);
    })().default;
  });
})(qt);
var It = qt.exports;
const Rt = /* @__PURE__ */ zt(It), Lt = `:host{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;margin:auto;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100vh;width:100vw}.root{margin:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center;width:calc(100% - 2em);max-width:calc(350px + 1em);-webkit-box-flex:1;-ms-flex:1;flex:1}label{position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden}button,input[type=url]{padding:5px;margin-bottom:2em;width:calc(100% - 1em);white-space:nowrap}button{margin-top:2em}#QRContainer canvas{width:300px;margin-bottom:2em}
`;
var Nt = Object.defineProperty, jt = Object.getOwnPropertyDescriptor, Tt = (L, Q, H, R) => {
  for (var E = R > 1 ? void 0 : R ? jt(Q, H) : Q, z = L.length - 1, I; z >= 0; z--)
    (I = L[z]) && (E = (R ? I(Q, H, E) : I(E)) || E);
  return R && E && Nt(Q, H, E), E;
};
let Pt = class extends CustomElement {
  constructor(L, Q) {
    var E, z;
    super(), this.defaultStyling = L, this.qrCode = Q, this.url = "https://pfzw.nl", this.render = () => /* @__PURE__ */ Maquette.h("div", null, /* @__PURE__ */ Maquette.h("label", { for: "UrlInput" }, "URL"), /* @__PURE__ */ Maquette.h(
      "input",
      {
        id: "UrlInput",
        type: "url",
        value: this.url,
        oninput: this.onDataChange
      }
    ), /* @__PURE__ */ Maquette.h("div", { id: "QRContainer", afterCreate: this.onCreateQRElement }), /* @__PURE__ */ Maquette.h("button", { onclick: this.onDownloadButtonClick }, "Download QR code")), this.onCreateQRElement = (I) => {
      var T;
      (T = this.qrCode) == null || T.append(I);
    }, this.onDataChange = (I) => {
      var rt;
      const T = I.target;
      this.url = T.value, this.defaultStyling = { ...this.defaultStyling, data: this.url }, (rt = this.qrCode) == null || rt.update(this.defaultStyling);
    }, this.onDownloadButtonClick = async () => {
      var rt, K;
      const I = this.url.split("//")[1].replaceAll("/", "-").replaceAll("?", "-").replaceAll(".", "-").replaceAll("/", "-"), T = (K = (rt = this.qrCode) == null ? void 0 : rt._svg) == null ? void 0 : K.outerHTML;
      if (T) {
        const U = T.replace(
          "<svg ",
          '<svg xmlns="http://www.w3.org/2000/svg" '
        ), V = {
          suggestedName: I,
          types: [
            {
              description: "SVG Files",
              accept: { "application/svg+xml": [".svg"] }
            }
          ]
        }, tt = await window.showSaveFilePicker(V).catch((F) => F);
        if (tt instanceof Error)
          return;
        const nt = await tt.createWritable();
        await nt.write(U), await nt.close();
      }
    }, this.defaultStyling = {
      width: 1200,
      height: 1200,
      data: this.url,
      qrOptions: {
        mode: "Byte",
        errorCorrectionLevel: "H"
      },
      imageOptions: {
        hideBackgroundDots: !1,
        imageSize: 1,
        margin: 0
      },
      dotsOptions: {
        type: "square",
        color: "#393a3c"
      },
      backgroundOptions: {
        color: "#ffffff"
      },
      cornersSquareOptions: {
        type: "extra-rounded",
        color: "#404b96"
      },
      cornersDotOptions: {
        type: "square"
      }
    };
    const H = this.templateFromString(
      `<style>${Lt}</style><div class="root"></div>`
    );
    this.qrCode = new Rt(this.defaultStyling), (E = this.shadowRoot) == null || E.appendChild(H);
    const R = (z = this.shadowRoot) == null ? void 0 : z.querySelector(".root");
    R && this.createProjector(R, this.render);
  }
};
Pt = Tt([
  CustomElementConfig({
    tagName: "p-qr-code-generator"
  })
], Pt);
const Ft = `dialog::-ms-backdrop{background:rgba(0,0,0,.5);background:var(--backdrop-color, rgba(0, 0, 0, .5));-webkit-backdrop-filter:blur(1px);backdrop-filter:blur(1px);-webkit-backdrop-filter:var(--backdrop-filter, blur(1px));backdrop-filter:var(--backdrop-filter, blur(1px))}dialog::backdrop{background:rgba(0,0,0,.5);background:var(--backdrop-color, rgba(0, 0, 0, .5));-webkit-backdrop-filter:blur(1px);backdrop-filter:blur(1px);-webkit-backdrop-filter:var(--backdrop-filter, blur(1px));backdrop-filter:var(--backdrop-filter, blur(1px))}dialog[open]{background:Canvas;background:var(--dialog-background, Canvas);color:CanvasText;color:var(--dialog-color, CanvasText);border:1px solid ButtonBorder;border:1px solid var(--dialog-border-color, ButtonBorder);border-radius:0;border-radius:var(--dialog-border-radius, 0);-webkit-box-shadow:2px 2px 5px hsla(220,3%,23%,.3);box-shadow:2px 2px 5px #393a3c4d;-webkit-box-shadow:var(--dialog-box-shadow, 2px 2px 5px hsla(220, 3%, 23%, .3));box-shadow:var(--dialog-box-shadow, 2px 2px 5px hsla(220, 3%, 23%, .3));width:480px;max-width:calc(100vw - 40px);outline:none}.dialog-content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:var(--gap-sm);margin:var(--gap-xs)}.dialog-header-container ::slotted(*){font:var(--dialog-header-font);margin:0}.dialog-body-container ::slotted(*){font:var(--dialog-body-font);margin:0}.dialog-footer-container ::slotted(*){font:var(--dialog-footer-font);margin:0}.dialog-footer-container slot{display:-webkit-box;display:-ms-flexbox;display:flex;gap:var(--gap-sm)}.dialog-title{font:var(--dialog-header-font);margin:0}
`;
async function Qt(L, Q) {
  return Q || (Q = document), new Promise((H, R) => {
    const E = setInterval(() => {
      const z = Q == null ? void 0 : Q.querySelector(L);
      z && (clearInterval(E), H(z));
    }, 100);
    setTimeout(() => {
      clearInterval(E), R(new Error(`Element ${L} not found`));
    }, 1e4);
  });
}
var Ht = Object.defineProperty, Ut = Object.getOwnPropertyDescriptor, $t = (L, Q, H, R) => {
  for (var E = R > 1 ? void 0 : R ? Ut(Q, H) : Q, z = L.length - 1, I; z >= 0; z--)
    (I = L[z]) && (E = (R ? I(Q, H, E) : I(E)) || E);
  return R && E && Ht(Q, H, E), E;
};
let Mt = class extends CustomElement {
  constructor() {
    var H, R;
    super(), this.render = () => /* @__PURE__ */ Maquette.h("dialog", null, /* @__PURE__ */ Maquette.h("div", { class: "dialog-content" }, /* @__PURE__ */ Maquette.h("div", { class: "dialog-header-container" }, /* @__PURE__ */ Maquette.h("slot", { name: "header" })), /* @__PURE__ */ Maquette.h("div", { class: "dialog-body-container" }, /* @__PURE__ */ Maquette.h("slot", null)), /* @__PURE__ */ Maquette.h("div", { class: "dialog-footer-container" }, /* @__PURE__ */ Maquette.h("slot", { name: "footer" }))));
    const L = this.templateFromString(
      `<style>${Ft}</style><div></div>`,
      !0
    );
    (H = this.shadowRoot) == null || H.appendChild(L);
    const Q = (R = this.shadowRoot) == null ? void 0 : R.querySelector("div");
    Q && this.createProjector(Q, this.render);
  }
  static get observedAttributes() {
    return ["caption"];
  }
  get dialogElement() {
    return Qt("dialog", this.shadowRoot ? this.shadowRoot : this);
  }
  close() {
    this.dialogElement.then((L) => L.close());
  }
  static createPromptDialog(L, Q, H) {
    const R = document.createElement("p-dialog"), E = Maquette.createProjector(), z = document.createElement("header"), I = document.createElement("main");
    return z.textContent = L, z.slot = "header", E.merge(I, () => Q), H.forEach((T) => R.appendChild(T)), R.appendChild(z), R.appendChild(I), R;
  }
  static stringsToButtons(L, Q) {
    return L.map((H, R) => {
      const E = document.createElement("button");
      return E.textContent = H, E.slot = "footer", E.classList.add("button"), E.classList.add(R === 0 ? "primary-button" : "secondary-button"), E.addEventListener("click", Q), E;
    });
  }
  static async prompt(L, Q, H = ["OK"]) {
    let R;
    const E = new Promise((K) => {
      R = K;
    }), z = (K) => {
      var V;
      const U = K.target;
      R(U != null && U.textContent ? U.textContent : ""), (V = U == null ? void 0 : U.closest("p-dialog")) == null || V.close(), K.preventDefault();
    }, I = Mt.stringsToButtons(
      H,
      z
    ), T = Mt.createPromptDialog(
      L,
      Q,
      I
    );
    document.body.appendChild(T);
    const rt = await T.dialogElement;
    return rt.addEventListener("cancel", (K) => K.preventDefault()), rt.addEventListener(
      "close",
      () => {
        var K;
        return (K = T == null ? void 0 : T.parentElement) == null ? void 0 : K.removeChild(T);
      }
    ), rt.showModal(), E;
  }
};
Mt = $t([
  CustomElementConfig({
    tagName: "p-dialog"
  })
], Mt);
let St;
window.addEventListener("beforeinstallprompt", (L) => {
  L.preventDefault(), St = L, Gt();
});
async function Gt() {
  if (await customElements.whenDefined("p-dialog"), await (await customElements.get(
    "p-dialog"
  )).prompt(
    "Installeren?",
    /* @__PURE__ */ Maquette.h("p", null, "QR Code generator installeren?"),
    ["Ja", "Nee, nu niet"]
  ) === "Ja") {
    St.prompt();
    const { outcome: H } = await St.userChoice;
    console.log(`User response to the install prompt: ${H}`), St = null;
  }
}
