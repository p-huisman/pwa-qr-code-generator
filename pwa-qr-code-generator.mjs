function Lt(E) {
  return E && E.__esModule && Object.prototype.hasOwnProperty.call(E, "default") ? E.default : E;
}
var Bt = { exports: {} };
(function(E, B) {
  (function(T, I) {
    E.exports = I();
  })(self, function() {
    return (() => {
      var T = { 192: (C, P) => {
        var $, it, V = function() {
          var H = function(w, m) {
            var v = w, f = ut[m], c = null, b = 0, M = null, _ = [], S = {}, W = function(o, a) {
              c = function(n) {
                for (var l = new Array(n), h = 0; h < n; h += 1) {
                  l[h] = new Array(n);
                  for (var y = 0; y < n; y += 1)
                    l[h][y] = null;
                }
                return l;
              }(b = 4 * v + 17), d(0, 0), d(b - 7, 0), d(0, b - 7), r(), t(), i(o, a), v >= 7 && e(o), M == null && (M = s(v, f, _)), u(M, a);
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
              for (var n = f << 3 | a, l = et.getBCHTypeInfo(n), h = 0; h < 15; h += 1) {
                var y = !o && (l >> h & 1) == 1;
                h < 6 ? c[h][8] = y : h < 8 ? c[h + 1][8] = y : c[b - 15 + h][8] = y;
              }
              for (h = 0; h < 15; h += 1)
                y = !o && (l >> h & 1) == 1, h < 8 ? c[8][b - h - 1] = y : h < 9 ? c[8][15 - h - 1 + 1] = y : c[8][15 - h - 1] = y;
              c[b - 8][8] = !o;
            }, u = function(o, a) {
              for (var n = -1, l = b - 1, h = 7, y = 0, x = et.getMaskFunction(a), g = b - 1; g > 0; g -= 2)
                for (g == 6 && (g -= 1); ; ) {
                  for (var k = 0; k < 2; k += 1)
                    if (c[l][g - k] == null) {
                      var O = !1;
                      y < o.length && (O = (o[y] >>> h & 1) == 1), x(l, g - k) && (O = !O), c[l][g - k] = O, (h -= 1) == -1 && (y += 1, h = 7);
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
              var g = 0;
              for (y = 0; y < l.length; y += 1)
                g += l[y].dataCount;
              if (h.getLengthInBits() > 8 * g)
                throw "code length overflow. (" + h.getLengthInBits() + ">" + 8 * g + ")";
              for (h.getLengthInBits() + 4 <= 8 * g && h.put(0, 4); h.getLengthInBits() % 8 != 0; )
                h.putBit(!1);
              for (; !(h.getLengthInBits() >= 8 * g || (h.put(236, 8), h.getLengthInBits() >= 8 * g)); )
                h.put(17, 8);
              return function(k, O) {
                for (var z = 0, j = 0, D = 0, R = new Array(O.length), q = new Array(O.length), L = 0; L < O.length; L += 1) {
                  var ot = O[L].dataCount, G = O[L].totalCount - ot;
                  j = Math.max(j, ot), D = Math.max(D, G), R[L] = new Array(ot);
                  for (var N = 0; N < R[L].length; N += 1)
                    R[L][N] = 255 & k.getBuffer()[N + z];
                  z += ot;
                  var X = et.getErrorCorrectPolynomial(G), F = at(R[L], X.getLength() - 1).mod(X);
                  for (q[L] = new Array(X.getLength() - 1), N = 0; N < q[L].length; N += 1) {
                    var Y = N + F.getLength() - q[L].length;
                    q[L][N] = Y >= 0 ? F.getAt(Y) : 0;
                  }
                }
                var J = 0;
                for (N = 0; N < O.length; N += 1)
                  J += O[N].totalCount;
                var K = new Array(J), rt = 0;
                for (N = 0; N < j; N += 1)
                  for (L = 0; L < O.length; L += 1)
                    N < R[L].length && (K[rt] = R[L][N], rt += 1);
                for (N = 0; N < D; N += 1)
                  for (L = 0; L < O.length; L += 1)
                    N < q[L].length && (K[rt] = q[L][N], rt += 1);
                return K;
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
              _.push(n), M = null;
            }, S.isDark = function(o, a) {
              if (o < 0 || b <= o || a < 0 || b <= a)
                throw o + "," + a;
              return c[o][a];
            }, S.getModuleCount = function() {
              return b;
            }, S.make = function() {
              if (v < 1) {
                for (var o = 1; o < 40; o++) {
                  for (var a = bt.getRSBlocks(o, f), n = dt(), l = 0; l < _.length; l++) {
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
              W(!1, function() {
                for (var x = 0, g = 0, k = 0; k < 8; k += 1) {
                  W(!0, k);
                  var O = et.getLostPoint(S);
                  (k == 0 || x > O) && (x = O, g = k);
                }
                return g;
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
              var y, x, g, k, O = S.getModuleCount() * o + 2 * a, z = "";
              for (k = "l" + o + ",0 0," + o + " -" + o + ",0 0,-" + o + "z ", z += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"', z += h.scalable ? "" : ' width="' + O + 'px" height="' + O + 'px"', z += ' viewBox="0 0 ' + O + " " + O + '" ', z += ' preserveAspectRatio="xMinYMin meet"', z += l.text || n.text ? ' role="img" aria-labelledby="' + p([l.id, n.id].join(" ").trim()) + '"' : "", z += ">", z += l.text ? '<title id="' + p(l.id) + '">' + p(l.text) + "</title>" : "", z += n.text ? '<description id="' + p(n.id) + '">' + p(n.text) + "</description>" : "", z += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>', z += '<path d="', x = 0; x < S.getModuleCount(); x += 1)
                for (g = x * o + a, y = 0; y < S.getModuleCount(); y += 1)
                  S.isDark(x, y) && (z += "M" + (y * o + a) + "," + g + k);
              return (z += '" stroke="transparent" fill="black"/>') + "</svg>";
            }, S.createDataURL = function(o, a) {
              o = o || 2, a = a === void 0 ? 4 * o : a;
              var n = S.getModuleCount() * o + 2 * a, l = a, h = n - a;
              return Ct(n, n, function(y, x) {
                if (l <= y && y < h && l <= x && x < h) {
                  var g = Math.floor((y - l) / o), k = Math.floor((x - l) / o);
                  return S.isDark(k, g) ? 0 : 1;
                }
                return 1;
              });
            }, S.createImgTag = function(o, a, n) {
              o = o || 2, a = a === void 0 ? 4 * o : a;
              var l = S.getModuleCount() * o + 2 * a, h = "";
              return h += "<img", h += ' src="', h += S.createDataURL(o, a), h += '"', h += ' width="', h += l, h += '"', h += ' height="', h += l, h += '"', n && (h += ' alt="', h += p(n), h += '"'), h + "/>";
            };
            var p = function(o) {
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
                return function(R) {
                  R = R === void 0 ? 2 : R;
                  var q, L, ot, G, N, X = 1 * S.getModuleCount() + 2 * R, F = R, Y = X - R, J = { "██": "█", "█ ": "▀", " █": "▄", "  ": " " }, K = { "██": "▀", "█ ": "▀", " █": " ", "  ": " " }, rt = "";
                  for (q = 0; q < X; q += 2) {
                    for (ot = Math.floor((q - F) / 1), G = Math.floor((q + 1 - F) / 1), L = 0; L < X; L += 1)
                      N = "█", F <= L && L < Y && F <= q && q < Y && S.isDark(ot, Math.floor((L - F) / 1)) && (N = " "), F <= L && L < Y && F <= q + 1 && q + 1 < Y && S.isDark(G, Math.floor((L - F) / 1)) ? N += " " : N += "█", rt += R < 1 && q + 1 >= Y ? K[N] : J[N];
                    rt += `
`;
                  }
                  return X % 2 && R > 0 ? rt.substring(0, rt.length - X - 1) + Array(X + 1).join("▀") : rt.substring(0, rt.length - 1);
                }(a);
              o -= 1, a = a === void 0 ? 2 * o : a;
              var n, l, h, y, x = S.getModuleCount() * o + 2 * a, g = a, k = x - a, O = Array(o + 1).join("██"), z = Array(o + 1).join("  "), j = "", D = "";
              for (n = 0; n < x; n += 1) {
                for (h = Math.floor((n - g) / o), D = "", l = 0; l < x; l += 1)
                  y = 1, g <= l && l < k && g <= n && n < k && S.isDark(h, Math.floor((l - g) / o)) && (y = 0), D += y ? O : z;
                for (h = 0; h < o; h += 1)
                  j += D + `
`;
              }
              return j.substring(0, j.length - 1);
            }, S.renderTo2dContext = function(o, a) {
              a = a || 2;
              for (var n = S.getModuleCount(), l = 0; l < n; l++)
                for (var h = 0; h < n; h++)
                  o.fillStyle = S.isDark(l, h) ? "black" : "white", o.fillRect(l * a, h * a, a, a);
            }, S;
          };
          H.stringToBytes = (H.stringToBytesFuncs = { default: function(w) {
            for (var m = [], v = 0; v < w.length; v += 1) {
              var f = w.charCodeAt(v);
              m.push(255 & f);
            }
            return m;
          } }).default, H.createStringToBytes = function(w, m) {
            var v = function() {
              for (var c = wt(w), b = function() {
                var t = c.read();
                if (t == -1)
                  throw "eof";
                return t;
              }, M = 0, _ = {}; ; ) {
                var S = c.read();
                if (S == -1)
                  break;
                var W = b(), d = b() << 8 | b();
                _[String.fromCharCode(S << 8 | W)] = d, M += 1;
              }
              if (M != m)
                throw M + " != " + m;
              return _;
            }(), f = "?".charCodeAt(0);
            return function(c) {
              for (var b = [], M = 0; M < c.length; M += 1) {
                var _ = c.charCodeAt(M);
                if (_ < 128)
                  b.push(_);
                else {
                  var S = v[c.charAt(M)];
                  typeof S == "number" ? (255 & S) == S ? b.push(S) : (b.push(S >>> 8), b.push(255 & S)) : b.push(f);
                }
              }
              return b;
            };
          };
          var Z, tt, nt, Q, U, ut = { L: 1, M: 0, Q: 3, H: 2 }, et = (Z = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]], tt = 1335, nt = 7973, U = function(w) {
            for (var m = 0; w != 0; )
              m += 1, w >>>= 1;
            return m;
          }, (Q = {}).getBCHTypeInfo = function(w) {
            for (var m = w << 10; U(m) - U(tt) >= 0; )
              m ^= tt << U(m) - U(tt);
            return 21522 ^ (w << 10 | m);
          }, Q.getBCHTypeNumber = function(w) {
            for (var m = w << 12; U(m) - U(nt) >= 0; )
              m ^= nt << U(m) - U(nt);
            return w << 12 | m;
          }, Q.getPatternPosition = function(w) {
            return Z[w - 1];
          }, Q.getMaskFunction = function(w) {
            switch (w) {
              case 0:
                return function(m, v) {
                  return (m + v) % 2 == 0;
                };
              case 1:
                return function(m, v) {
                  return m % 2 == 0;
                };
              case 2:
                return function(m, v) {
                  return v % 3 == 0;
                };
              case 3:
                return function(m, v) {
                  return (m + v) % 3 == 0;
                };
              case 4:
                return function(m, v) {
                  return (Math.floor(m / 2) + Math.floor(v / 3)) % 2 == 0;
                };
              case 5:
                return function(m, v) {
                  return m * v % 2 + m * v % 3 == 0;
                };
              case 6:
                return function(m, v) {
                  return (m * v % 2 + m * v % 3) % 2 == 0;
                };
              case 7:
                return function(m, v) {
                  return (m * v % 3 + (m + v) % 2) % 2 == 0;
                };
              default:
                throw "bad maskPattern:" + w;
            }
          }, Q.getErrorCorrectPolynomial = function(w) {
            for (var m = at([1], 0), v = 0; v < w; v += 1)
              m = m.multiply(at([1, st.gexp(v)], 0));
            return m;
          }, Q.getLengthInBits = function(w, m) {
            if (1 <= m && m < 10)
              switch (w) {
                case 1:
                  return 10;
                case 2:
                  return 9;
                case 4:
                case 8:
                  return 8;
                default:
                  throw "mode:" + w;
              }
            else if (m < 27)
              switch (w) {
                case 1:
                  return 12;
                case 2:
                  return 11;
                case 4:
                  return 16;
                case 8:
                  return 10;
                default:
                  throw "mode:" + w;
              }
            else {
              if (!(m < 41))
                throw "type:" + m;
              switch (w) {
                case 1:
                  return 14;
                case 2:
                  return 13;
                case 4:
                  return 16;
                case 8:
                  return 12;
                default:
                  throw "mode:" + w;
              }
            }
          }, Q.getLostPoint = function(w) {
            for (var m = w.getModuleCount(), v = 0, f = 0; f < m; f += 1)
              for (var c = 0; c < m; c += 1) {
                for (var b = 0, M = w.isDark(f, c), _ = -1; _ <= 1; _ += 1)
                  if (!(f + _ < 0 || m <= f + _))
                    for (var S = -1; S <= 1; S += 1)
                      c + S < 0 || m <= c + S || _ == 0 && S == 0 || M == w.isDark(f + _, c + S) && (b += 1);
                b > 5 && (v += 3 + b - 5);
              }
            for (f = 0; f < m - 1; f += 1)
              for (c = 0; c < m - 1; c += 1) {
                var W = 0;
                w.isDark(f, c) && (W += 1), w.isDark(f + 1, c) && (W += 1), w.isDark(f, c + 1) && (W += 1), w.isDark(f + 1, c + 1) && (W += 1), W != 0 && W != 4 || (v += 3);
              }
            for (f = 0; f < m; f += 1)
              for (c = 0; c < m - 6; c += 1)
                w.isDark(f, c) && !w.isDark(f, c + 1) && w.isDark(f, c + 2) && w.isDark(f, c + 3) && w.isDark(f, c + 4) && !w.isDark(f, c + 5) && w.isDark(f, c + 6) && (v += 40);
            for (c = 0; c < m; c += 1)
              for (f = 0; f < m - 6; f += 1)
                w.isDark(f, c) && !w.isDark(f + 1, c) && w.isDark(f + 2, c) && w.isDark(f + 3, c) && w.isDark(f + 4, c) && !w.isDark(f + 5, c) && w.isDark(f + 6, c) && (v += 40);
            var d = 0;
            for (c = 0; c < m; c += 1)
              for (f = 0; f < m; f += 1)
                w.isDark(f, c) && (d += 1);
            return v + Math.abs(100 * d / m / m - 50) / 5 * 10;
          }, Q), st = function() {
            for (var w = new Array(256), m = new Array(256), v = 0; v < 8; v += 1)
              w[v] = 1 << v;
            for (v = 8; v < 256; v += 1)
              w[v] = w[v - 4] ^ w[v - 5] ^ w[v - 6] ^ w[v - 8];
            for (v = 0; v < 255; v += 1)
              m[w[v]] = v;
            return { glog: function(f) {
              if (f < 1)
                throw "glog(" + f + ")";
              return m[f];
            }, gexp: function(f) {
              for (; f < 0; )
                f += 255;
              for (; f >= 256; )
                f -= 255;
              return w[f];
            } };
          }();
          function at(w, m) {
            if (w.length === void 0)
              throw w.length + "/" + m;
            var v = function() {
              for (var c = 0; c < w.length && w[c] == 0; )
                c += 1;
              for (var b = new Array(w.length - c + m), M = 0; M < w.length - c; M += 1)
                b[M] = w[M + c];
              return b;
            }(), f = { getAt: function(c) {
              return v[c];
            }, getLength: function() {
              return v.length;
            }, multiply: function(c) {
              for (var b = new Array(f.getLength() + c.getLength() - 1), M = 0; M < f.getLength(); M += 1)
                for (var _ = 0; _ < c.getLength(); _ += 1)
                  b[M + _] ^= st.gexp(st.glog(f.getAt(M)) + st.glog(c.getAt(_)));
              return at(b, 0);
            }, mod: function(c) {
              if (f.getLength() - c.getLength() < 0)
                return f;
              for (var b = st.glog(f.getAt(0)) - st.glog(c.getAt(0)), M = new Array(f.getLength()), _ = 0; _ < f.getLength(); _ += 1)
                M[_] = f.getAt(_);
              for (_ = 0; _ < c.getLength(); _ += 1)
                M[_] ^= st.gexp(st.glog(c.getAt(_)) + b);
              return at(M, 0).mod(c);
            } };
            return f;
          }
          var bt = function() {
            var w = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12, 7, 37, 13], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]], m = function(f, c) {
              var b = {};
              return b.totalCount = f, b.dataCount = c, b;
            }, v = { getRSBlocks: function(f, c) {
              var b = function(e, i) {
                switch (i) {
                  case ut.L:
                    return w[4 * (e - 1) + 0];
                  case ut.M:
                    return w[4 * (e - 1) + 1];
                  case ut.Q:
                    return w[4 * (e - 1) + 2];
                  case ut.H:
                    return w[4 * (e - 1) + 3];
                  default:
                    return;
                }
              }(f, c);
              if (b === void 0)
                throw "bad rs block @ typeNumber:" + f + "/errorCorrectionLevel:" + c;
              for (var M = b.length / 3, _ = [], S = 0; S < M; S += 1)
                for (var W = b[3 * S + 0], d = b[3 * S + 1], t = b[3 * S + 2], r = 0; r < W; r += 1)
                  _.push(m(d, t));
              return _;
            } };
            return v;
          }(), dt = function() {
            var w = [], m = 0, v = { getBuffer: function() {
              return w;
            }, getAt: function(f) {
              var c = Math.floor(f / 8);
              return (w[c] >>> 7 - f % 8 & 1) == 1;
            }, put: function(f, c) {
              for (var b = 0; b < c; b += 1)
                v.putBit((f >>> c - b - 1 & 1) == 1);
            }, getLengthInBits: function() {
              return m;
            }, putBit: function(f) {
              var c = Math.floor(m / 8);
              w.length <= c && w.push(0), f && (w[c] |= 128 >>> m % 8), m += 1;
            } };
            return v;
          }, yt = function(w) {
            var m = w, v = { getMode: function() {
              return 1;
            }, getLength: function(b) {
              return m.length;
            }, write: function(b) {
              for (var M = m, _ = 0; _ + 2 < M.length; )
                b.put(f(M.substring(_, _ + 3)), 10), _ += 3;
              _ < M.length && (M.length - _ == 1 ? b.put(f(M.substring(_, _ + 1)), 4) : M.length - _ == 2 && b.put(f(M.substring(_, _ + 2)), 7));
            } }, f = function(b) {
              for (var M = 0, _ = 0; _ < b.length; _ += 1)
                M = 10 * M + c(b.charAt(_));
              return M;
            }, c = function(b) {
              if ("0" <= b && b <= "9")
                return b.charCodeAt(0) - "0".charCodeAt(0);
              throw "illegal char :" + b;
            };
            return v;
          }, _t = function(w) {
            var m = w, v = { getMode: function() {
              return 2;
            }, getLength: function(c) {
              return m.length;
            }, write: function(c) {
              for (var b = m, M = 0; M + 1 < b.length; )
                c.put(45 * f(b.charAt(M)) + f(b.charAt(M + 1)), 11), M += 2;
              M < b.length && c.put(f(b.charAt(M)), 6);
            } }, f = function(c) {
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
          }, lt = function(w) {
            var m = H.stringToBytes(w);
            return { getMode: function() {
              return 4;
            }, getLength: function(v) {
              return m.length;
            }, write: function(v) {
              for (var f = 0; f < m.length; f += 1)
                v.put(m[f], 8);
            } };
          }, ct = function(w) {
            var m = H.stringToBytesFuncs.SJIS;
            if (!m)
              throw "sjis not supported.";
            (function(f, c) {
              var b = m("友");
              if (b.length != 2 || (b[0] << 8 | b[1]) != 38726)
                throw "sjis not supported.";
            })();
            var v = m(w);
            return { getMode: function() {
              return 8;
            }, getLength: function(f) {
              return ~~(v.length / 2);
            }, write: function(f) {
              for (var c = v, b = 0; b + 1 < c.length; ) {
                var M = (255 & c[b]) << 8 | 255 & c[b + 1];
                if (33088 <= M && M <= 40956)
                  M -= 33088;
                else {
                  if (!(57408 <= M && M <= 60351))
                    throw "illegal char at " + (b + 1) + "/" + M;
                  M -= 49472;
                }
                M = 192 * (M >>> 8 & 255) + (255 & M), f.put(M, 13), b += 2;
              }
              if (b < c.length)
                throw "illegal char at " + (b + 1);
            } };
          }, xt = function() {
            var w = [], m = { writeByte: function(v) {
              w.push(255 & v);
            }, writeShort: function(v) {
              m.writeByte(v), m.writeByte(v >>> 8);
            }, writeBytes: function(v, f, c) {
              f = f || 0, c = c || v.length;
              for (var b = 0; b < c; b += 1)
                m.writeByte(v[b + f]);
            }, writeString: function(v) {
              for (var f = 0; f < v.length; f += 1)
                m.writeByte(v.charCodeAt(f));
            }, toByteArray: function() {
              return w;
            }, toString: function() {
              var v = "";
              v += "[";
              for (var f = 0; f < w.length; f += 1)
                f > 0 && (v += ","), v += w[f];
              return v + "]";
            } };
            return m;
          }, wt = function(w) {
            var m = w, v = 0, f = 0, c = 0, b = { read: function() {
              for (; c < 8; ) {
                if (v >= m.length) {
                  if (c == 0)
                    return -1;
                  throw "unexpected end of file./" + c;
                }
                var _ = m.charAt(v);
                if (v += 1, _ == "=")
                  return c = 0, -1;
                _.match(/^\s$/) || (f = f << 6 | M(_.charCodeAt(0)), c += 6);
              }
              var S = f >>> c - 8 & 255;
              return c -= 8, S;
            } }, M = function(_) {
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
          }, Ct = function(w, m, v) {
            for (var f = function(d, t) {
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
                for (var a = 1 << o, n = 1 + (1 << o), l = o + 1, h = p(), y = 0; y < a; y += 1)
                  h.add(String.fromCharCode(y));
                h.add(String.fromCharCode(a)), h.add(String.fromCharCode(n));
                var x, g, k, O = xt(), z = (x = O, g = 0, k = 0, { write: function(q, L) {
                  if (q >>> L)
                    throw "length over";
                  for (; g + L >= 8; )
                    x.writeByte(255 & (q << g | k)), L -= 8 - g, q >>>= 8 - g, k = 0, g = 0;
                  k |= q << g, g += L;
                }, flush: function() {
                  g > 0 && x.writeByte(k);
                } });
                z.write(a, l);
                var j = 0, D = String.fromCharCode(i[j]);
                for (j += 1; j < i.length; ) {
                  var R = String.fromCharCode(i[j]);
                  j += 1, h.contains(D + R) ? D += R : (z.write(h.indexOf(D), l), h.size() < 4095 && (h.size() == 1 << l && (l += 1), h.add(D + R)), D = R);
                }
                return z.write(h.indexOf(D), l), z.write(n, l), z.flush(), O.toByteArray();
              }, p = function() {
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
            }(w, m), c = 0; c < m; c += 1)
              for (var b = 0; b < w; b += 1)
                f.setPixel(b, c, v(b, c));
            var M = xt();
            f.write(M);
            for (var _ = function() {
              var d = 0, t = 0, r = 0, e = "", i = {}, u = function(p) {
                e += String.fromCharCode(s(63 & p));
              }, s = function(p) {
                if (!(p < 0)) {
                  if (p < 26)
                    return 65 + p;
                  if (p < 52)
                    return p - 26 + 97;
                  if (p < 62)
                    return p - 52 + 48;
                  if (p == 62)
                    return 43;
                  if (p == 63)
                    return 47;
                }
                throw "n:" + p;
              };
              return i.writeByte = function(p) {
                for (d = d << 8 | 255 & p, t += 8, r += 1; t >= 6; )
                  u(d >>> t - 6), t -= 6;
              }, i.flush = function() {
                if (t > 0 && (u(d << 6 - t), d = 0, t = 0), r % 3 != 0)
                  for (var p = 3 - r % 3, o = 0; o < p; o += 1)
                    e += "=";
              }, i.toString = function() {
                return e;
              }, i;
            }(), S = M.toByteArray(), W = 0; W < S.length; W += 1)
              _.writeByte(S[W]);
            return _.flush(), "data:image/gif;base64," + _;
          };
          return H;
        }();
        V.stringToBytesFuncs["UTF-8"] = function(H) {
          return function(Z) {
            for (var tt = [], nt = 0; nt < Z.length; nt++) {
              var Q = Z.charCodeAt(nt);
              Q < 128 ? tt.push(Q) : Q < 2048 ? tt.push(192 | Q >> 6, 128 | 63 & Q) : Q < 55296 || Q >= 57344 ? tt.push(224 | Q >> 12, 128 | Q >> 6 & 63, 128 | 63 & Q) : (nt++, Q = 65536 + ((1023 & Q) << 10 | 1023 & Z.charCodeAt(nt)), tt.push(240 | Q >> 18, 128 | Q >> 12 & 63, 128 | Q >> 6 & 63, 128 | 63 & Q));
            }
            return tt;
          }(H);
        }, (it = typeof ($ = function() {
          return V;
        }) == "function" ? $.apply(P, []) : $) === void 0 || (C.exports = it);
      }, 676: (C, P, $) => {
        $.d(P, { default: () => W });
        var it = function() {
          return (it = Object.assign || function(d) {
            for (var t, r = 1, e = arguments.length; r < e; r++)
              for (var i in t = arguments[r])
                Object.prototype.hasOwnProperty.call(t, i) && (d[i] = t[i]);
            return d;
          }).apply(this, arguments);
        }, V = function() {
          for (var d = 0, t = 0, r = arguments.length; t < r; t++)
            d += arguments[t].length;
          var e = Array(d), i = 0;
          for (t = 0; t < r; t++)
            for (var u = arguments[t], s = 0, p = u.length; s < p; s++, i++)
              e[i] = u[s];
          return e;
        }, H = function(d) {
          return !!d && typeof d == "object" && !Array.isArray(d);
        };
        function Z(d) {
          for (var t = [], r = 1; r < arguments.length; r++)
            t[r - 1] = arguments[r];
          if (!t.length)
            return d;
          var e = t.shift();
          return e !== void 0 && H(d) && H(e) ? (d = it({}, d), Object.keys(e).forEach(function(i) {
            var u = d[i], s = e[i];
            Array.isArray(u) && Array.isArray(s) ? d[i] = s : H(u) && H(s) ? d[i] = Z(Object.assign({}, u), s) : d[i] = s;
          }), Z.apply(void 0, V([d], t))) : d;
        }
        function tt(d, t) {
          var r = document.createElement("a");
          r.download = t, r.href = d, document.body.appendChild(r), r.click(), document.body.removeChild(r);
        }
        function nt(d) {
          return t = this, r = void 0, i = function() {
            return function(u, s) {
              var p, o, a, n, l = { label: 0, sent: function() {
                if (1 & a[0])
                  throw a[1];
                return a[1];
              }, trys: [], ops: [] };
              return n = { next: h(0), throw: h(1), return: h(2) }, typeof Symbol == "function" && (n[Symbol.iterator] = function() {
                return this;
              }), n;
              function h(y) {
                return function(x) {
                  return function(g) {
                    if (p)
                      throw new TypeError("Generator is already executing.");
                    for (; l; )
                      try {
                        if (p = 1, o && (a = 2 & g[0] ? o.return : g[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, g[1])).done)
                          return a;
                        switch (o = 0, a && (g = [2 & g[0], a.value]), g[0]) {
                          case 0:
                          case 1:
                            a = g;
                            break;
                          case 4:
                            return l.label++, { value: g[1], done: !1 };
                          case 5:
                            l.label++, o = g[1], g = [0];
                            continue;
                          case 7:
                            g = l.ops.pop(), l.trys.pop();
                            continue;
                          default:
                            if (!((a = (a = l.trys).length > 0 && a[a.length - 1]) || g[0] !== 6 && g[0] !== 2)) {
                              l = 0;
                              continue;
                            }
                            if (g[0] === 3 && (!a || g[1] > a[0] && g[1] < a[3])) {
                              l.label = g[1];
                              break;
                            }
                            if (g[0] === 6 && l.label < a[1]) {
                              l.label = a[1], a = g;
                              break;
                            }
                            if (a && l.label < a[2]) {
                              l.label = a[2], l.ops.push(g);
                              break;
                            }
                            a[2] && l.ops.pop(), l.trys.pop();
                            continue;
                        }
                        g = s.call(u, l);
                      } catch (k) {
                        g = [6, k], o = 0;
                      } finally {
                        p = a = 0;
                      }
                    if (5 & g[0])
                      throw g[1];
                    return { value: g[0] ? g[1] : void 0, done: !0 };
                  }([y, x]);
                };
              }
            }(this, function(u) {
              return [2, new Promise(function(s) {
                var p = new XMLHttpRequest();
                p.onload = function() {
                  var o = new FileReader();
                  o.onloadend = function() {
                    s(o.result);
                  }, o.readAsDataURL(p.response);
                }, p.open("GET", d), p.responseType = "blob", p.send();
              })];
            });
          }, new ((e = void 0) || (e = Promise))(function(u, s) {
            function p(n) {
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
              })).then(p, o);
            }
            a((i = i.apply(t, r || [])).next());
          });
          var t, r, e, i;
        }
        const Q = { L: 0.07, M: 0.15, Q: 0.25, H: 0.3 };
        var U = function() {
          return (U = Object.assign || function(d) {
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
            var r, e = t.x, i = t.y, u = t.size, s = t.rotation, p = s === void 0 ? 0 : s, o = e + u / 2, a = i + u / 2;
            (0, t.draw)(), (r = this._element) === null || r === void 0 || r.setAttribute("transform", "rotate(" + 180 * p / Math.PI + "," + o + "," + a + ")");
          }, d.prototype._basicDot = function(t) {
            var r = this, e = t.size, i = t.x, u = t.y;
            this._rotateFigure(U(U({}, t), { draw: function() {
              r._element = document.createElementNS("http://www.w3.org/2000/svg", "circle"), r._element.setAttribute("cx", String(i + e / 2)), r._element.setAttribute("cy", String(u + e / 2)), r._element.setAttribute("r", String(e / 2));
            } }));
          }, d.prototype._basicSquare = function(t) {
            var r = this, e = t.size, i = t.x, u = t.y;
            this._rotateFigure(U(U({}, t), { draw: function() {
              r._element = document.createElementNS("http://www.w3.org/2000/svg", "rect"), r._element.setAttribute("x", String(i)), r._element.setAttribute("y", String(u)), r._element.setAttribute("width", String(e)), r._element.setAttribute("height", String(e));
            } }));
          }, d.prototype._basicSideRounded = function(t) {
            var r = this, e = t.size, i = t.x, u = t.y;
            this._rotateFigure(U(U({}, t), { draw: function() {
              r._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), r._element.setAttribute("d", "M " + i + " " + u + "v " + e + "h " + e / 2 + "a " + e / 2 + " " + e / 2 + ", 0, 0, 0, 0 " + -e);
            } }));
          }, d.prototype._basicCornerRounded = function(t) {
            var r = this, e = t.size, i = t.x, u = t.y;
            this._rotateFigure(U(U({}, t), { draw: function() {
              r._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), r._element.setAttribute("d", "M " + i + " " + u + "v " + e + "h " + e + "v " + -e / 2 + "a " + e / 2 + " " + e / 2 + ", 0, 0, 0, " + -e / 2 + " " + -e / 2);
            } }));
          }, d.prototype._basicCornerExtraRounded = function(t) {
            var r = this, e = t.size, i = t.x, u = t.y;
            this._rotateFigure(U(U({}, t), { draw: function() {
              r._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), r._element.setAttribute("d", "M " + i + " " + u + "v " + e + "h " + e + "a " + e + " " + e + ", 0, 0, 0, " + -e + " " + -e);
            } }));
          }, d.prototype._basicCornersRounded = function(t) {
            var r = this, e = t.size, i = t.x, u = t.y;
            this._rotateFigure(U(U({}, t), { draw: function() {
              r._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), r._element.setAttribute("d", "M " + i + " " + u + "v " + e / 2 + "a " + e / 2 + " " + e / 2 + ", 0, 0, 0, " + e / 2 + " " + e / 2 + "h " + e / 2 + "v " + -e / 2 + "a " + e / 2 + " " + e / 2 + ", 0, 0, 0, " + -e / 2 + " " + -e / 2);
            } }));
          }, d.prototype._drawDot = function(t) {
            var r = t.x, e = t.y, i = t.size;
            this._basicDot({ x: r, y: e, size: i, rotation: 0 });
          }, d.prototype._drawSquare = function(t) {
            var r = t.x, e = t.y, i = t.size;
            this._basicSquare({ x: r, y: e, size: i, rotation: 0 });
          }, d.prototype._drawRounded = function(t) {
            var r = t.x, e = t.y, i = t.size, u = t.getNeighbor, s = u ? +u(-1, 0) : 0, p = u ? +u(1, 0) : 0, o = u ? +u(0, -1) : 0, a = u ? +u(0, 1) : 0, n = s + p + o + a;
            if (n !== 0)
              if (n > 2 || s && p || o && a)
                this._basicSquare({ x: r, y: e, size: i, rotation: 0 });
              else {
                if (n === 2) {
                  var l = 0;
                  return s && o ? l = Math.PI / 2 : o && p ? l = Math.PI : p && a && (l = -Math.PI / 2), void this._basicCornerRounded({ x: r, y: e, size: i, rotation: l });
                }
                if (n === 1)
                  return l = 0, o ? l = Math.PI / 2 : p ? l = Math.PI : a && (l = -Math.PI / 2), void this._basicSideRounded({ x: r, y: e, size: i, rotation: l });
              }
            else
              this._basicDot({ x: r, y: e, size: i, rotation: 0 });
          }, d.prototype._drawExtraRounded = function(t) {
            var r = t.x, e = t.y, i = t.size, u = t.getNeighbor, s = u ? +u(-1, 0) : 0, p = u ? +u(1, 0) : 0, o = u ? +u(0, -1) : 0, a = u ? +u(0, 1) : 0, n = s + p + o + a;
            if (n !== 0)
              if (n > 2 || s && p || o && a)
                this._basicSquare({ x: r, y: e, size: i, rotation: 0 });
              else {
                if (n === 2) {
                  var l = 0;
                  return s && o ? l = Math.PI / 2 : o && p ? l = Math.PI : p && a && (l = -Math.PI / 2), void this._basicCornerExtraRounded({ x: r, y: e, size: i, rotation: l });
                }
                if (n === 1)
                  return l = 0, o ? l = Math.PI / 2 : p ? l = Math.PI : a && (l = -Math.PI / 2), void this._basicSideRounded({ x: r, y: e, size: i, rotation: l });
              }
            else
              this._basicDot({ x: r, y: e, size: i, rotation: 0 });
          }, d.prototype._drawClassy = function(t) {
            var r = t.x, e = t.y, i = t.size, u = t.getNeighbor, s = u ? +u(-1, 0) : 0, p = u ? +u(1, 0) : 0, o = u ? +u(0, -1) : 0, a = u ? +u(0, 1) : 0;
            s + p + o + a !== 0 ? s || o ? p || a ? this._basicSquare({ x: r, y: e, size: i, rotation: 0 }) : this._basicCornerRounded({ x: r, y: e, size: i, rotation: Math.PI / 2 }) : this._basicCornerRounded({ x: r, y: e, size: i, rotation: -Math.PI / 2 }) : this._basicCornersRounded({ x: r, y: e, size: i, rotation: Math.PI / 2 });
          }, d.prototype._drawClassyRounded = function(t) {
            var r = t.x, e = t.y, i = t.size, u = t.getNeighbor, s = u ? +u(-1, 0) : 0, p = u ? +u(1, 0) : 0, o = u ? +u(0, -1) : 0, a = u ? +u(0, 1) : 0;
            s + p + o + a !== 0 ? s || o ? p || a ? this._basicSquare({ x: r, y: e, size: i, rotation: 0 }) : this._basicCornerExtraRounded({ x: r, y: e, size: i, rotation: Math.PI / 2 }) : this._basicCornerExtraRounded({ x: r, y: e, size: i, rotation: -Math.PI / 2 }) : this._basicCornersRounded({ x: r, y: e, size: i, rotation: Math.PI / 2 });
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
            var r, e = t.x, i = t.y, u = t.size, s = t.rotation, p = s === void 0 ? 0 : s, o = e + u / 2, a = i + u / 2;
            (0, t.draw)(), (r = this._element) === null || r === void 0 || r.setAttribute("transform", "rotate(" + 180 * p / Math.PI + "," + o + "," + a + ")");
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
            var r, e = t.x, i = t.y, u = t.size, s = t.rotation, p = s === void 0 ? 0 : s, o = e + u / 2, a = i + u / 2;
            (0, t.draw)(), (r = this._element) === null || r === void 0 || r.setAttribute("transform", "rotate(" + 180 * p / Math.PI + "," + o + "," + a + ")");
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
            function p(a) {
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
              })).then(s, p);
            }
            o((e = e.apply(d, t || [])).next());
          });
        }, _t = function(d, t) {
          var r, e, i, u, s = { label: 0, sent: function() {
            if (1 & i[0])
              throw i[1];
            return i[1];
          }, trys: [], ops: [] };
          return u = { next: p(0), throw: p(1), return: p(2) }, typeof Symbol == "function" && (u[Symbol.iterator] = function() {
            return this;
          }), u;
          function p(o) {
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
              var r, e, i, u, s, p, o, a, n, l, h = this;
              return _t(this, function(y) {
                switch (y.label) {
                  case 0:
                    return r = t.getModuleCount(), e = Math.min(this._options.width, this._options.height) - 2 * this._options.margin, i = this._options.shape === dt ? e / Math.sqrt(2) : e, u = Math.floor(i / r), s = { hideXDots: 0, hideYDots: 0, width: 0, height: 0 }, this._qr = t, this._options.image ? [4, this.loadImage()] : [3, 2];
                  case 1:
                    if (y.sent(), !this._image)
                      return [2];
                    p = this._options, o = p.imageOptions, a = p.qrOptions, n = o.imageSize * Q[a.errorCorrectionLevel], l = Math.floor(n * r * r), s = function(x) {
                      var g = x.originalHeight, k = x.originalWidth, O = x.maxHiddenDots, z = x.maxHiddenAxisDots, j = x.dotSize, D = { x: 0, y: 0 }, R = { x: 0, y: 0 };
                      if (g <= 0 || k <= 0 || O <= 0 || j <= 0)
                        return { height: 0, width: 0, hideYDots: 0, hideXDots: 0 };
                      var q = g / k;
                      return D.x = Math.floor(Math.sqrt(O / q)), D.x <= 0 && (D.x = 1), z && z < D.x && (D.x = z), D.x % 2 == 0 && D.x--, R.x = D.x * j, D.y = 1 + 2 * Math.ceil((D.x * q - 1) / 2), R.y = Math.round(R.x * q), (D.y * D.x > O || z && z < D.y) && (z && z < D.y ? (D.y = z, D.y % 2 == 0 && D.x--) : D.y -= 2, R.y = D.y * j, D.x = 1 + 2 * Math.ceil((D.y / q - 1) / 2), R.x = Math.round(R.y / q)), { height: R.y, width: R.x, hideYDots: D.y, hideXDots: D.x };
                    }({ originalWidth: this._image.width, originalHeight: this._image.height, maxHiddenDots: l, maxHiddenAxisDots: r - 14, dotSize: u }), y.label = 2;
                  case 2:
                    return this.drawBackground(), this.drawDots(function(x, g) {
                      var k, O, z, j, D, R;
                      return !(h._options.imageOptions.hideBackgroundDots && x >= (r - s.hideXDots) / 2 && x < (r + s.hideXDots) / 2 && g >= (r - s.hideYDots) / 2 && g < (r + s.hideYDots) / 2 || !((k = lt[x]) === null || k === void 0) && k[g] || !((O = lt[x - r + 7]) === null || O === void 0) && O[g] || !((z = lt[x]) === null || z === void 0) && z[g - r + 7] || !((j = ct[x]) === null || j === void 0) && j[g] || !((D = ct[x - r + 7]) === null || D === void 0) && D[g] || !((R = ct[x]) === null || R === void 0) && R[g - r + 7]);
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
              var s = (t = u.backgroundOptions) === null || t === void 0 ? void 0 : t.gradient, p = (r = u.backgroundOptions) === null || r === void 0 ? void 0 : r.color;
              if ((s || p) && this._createColor({ options: s, color: p, additionalRotation: 0, x: 0, y: 0, height: u.height, width: u.width, name: "background-color" }), (e = u.backgroundOptions) === null || e === void 0 ? void 0 : e.round) {
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
            var p = Math.min(u.width, u.height) - 2 * u.margin, o = u.shape === dt ? p / Math.sqrt(2) : p, a = Math.floor(o / s), n = Math.floor((u.width - s * a) / 2), l = Math.floor((u.height - s * a) / 2), h = new ut({ svg: this._element, type: u.dotsOptions.type });
            this._dotsClipPath = document.createElementNS("http://www.w3.org/2000/svg", "clipPath"), this._dotsClipPath.setAttribute("id", "clip-path-dot-color"), this._defs.appendChild(this._dotsClipPath), this._createColor({ options: (r = u.dotsOptions) === null || r === void 0 ? void 0 : r.gradient, color: u.dotsOptions.color, additionalRotation: 0, x: 0, y: 0, height: u.height, width: u.width, name: "dot-color" });
            for (var y = function(G) {
              for (var N = function(F) {
                return t && !t(G, F) ? "continue" : !((e = x._qr) === null || e === void 0) && e.isDark(G, F) ? (h.draw(n + G * a, l + F * a, a, function(Y, J) {
                  return !(G + Y < 0 || F + J < 0 || G + Y >= s || F + J >= s) && !(t && !t(G + Y, F + J)) && !!i._qr && i._qr.isDark(G + Y, F + J);
                }), void (h._element && x._dotsClipPath && x._dotsClipPath.appendChild(h._element))) : "continue";
              }, X = 0; X < s; X++)
                N(X);
            }, x = this, g = 0; g < s; g++)
              y(g);
            if (u.shape === dt) {
              var k = Math.floor((p / a - s) / 2), O = s + 2 * k, z = n - k * a, j = l - k * a, D = [], R = Math.floor(O / 2);
              for (g = 0; g < O; g++) {
                D[g] = [];
                for (var q = 0; q < O; q++)
                  g >= k - 1 && g <= O - k && q >= k - 1 && q <= O - k || Math.sqrt((g - R) * (g - R) + (q - R) * (q - R)) > R ? D[g][q] = 0 : D[g][q] = this._qr.isDark(q - 2 * k < 0 ? q : q >= s ? q - 2 * k : q - k, g - 2 * k < 0 ? g : g >= s ? g - 2 * k : g - k) ? 1 : 0;
              }
              var L = function(G) {
                for (var N = function(F) {
                  if (!D[G][F])
                    return "continue";
                  h.draw(z + G * a, j + F * a, a, function(Y, J) {
                    var K;
                    return !!(!((K = D[G + Y]) === null || K === void 0) && K[F + J]);
                  }), h._element && ot._dotsClipPath && ot._dotsClipPath.appendChild(h._element);
                }, X = 0; X < O; X++)
                  N(X);
              }, ot = this;
              for (g = 0; g < O; g++)
                L(g);
            }
          }, d.prototype.drawCorners = function() {
            var t = this;
            if (!this._qr)
              throw "QR code is not defined";
            var r = this._element, e = this._options;
            if (!r)
              throw "Element code is not defined";
            var i = this._qr.getModuleCount(), u = Math.min(e.width, e.height) - 2 * e.margin, s = e.shape === dt ? u / Math.sqrt(2) : u, p = Math.floor(s / i), o = 7 * p, a = 3 * p, n = Math.floor((e.width - i * p) / 2), l = Math.floor((e.height - i * p) / 2);
            [[0, 0, 0], [1, 0, Math.PI / 2], [0, 1, -Math.PI / 2]].forEach(function(h) {
              var y, x, g, k, O, z, j, D, R, q, L, ot, G = h[0], N = h[1], X = h[2], F = n + G * p * (i - 7), Y = l + N * p * (i - 7), J = t._dotsClipPath, K = t._dotsClipPath;
              if ((!((y = e.cornersSquareOptions) === null || y === void 0) && y.gradient || !((x = e.cornersSquareOptions) === null || x === void 0) && x.color) && ((J = document.createElementNS("http://www.w3.org/2000/svg", "clipPath")).setAttribute("id", "clip-path-corners-square-color-" + G + "-" + N), t._defs.appendChild(J), t._cornersSquareClipPath = t._cornersDotClipPath = K = J, t._createColor({ options: (g = e.cornersSquareOptions) === null || g === void 0 ? void 0 : g.gradient, color: (k = e.cornersSquareOptions) === null || k === void 0 ? void 0 : k.color, additionalRotation: X, x: F, y: Y, height: o, width: o, name: "corners-square-color-" + G + "-" + N })), (O = e.cornersSquareOptions) === null || O === void 0 ? void 0 : O.type) {
                var rt = new st({ svg: t._element, type: e.cornersSquareOptions.type });
                rt.draw(F, Y, o, X), rt._element && J && J.appendChild(rt._element);
              } else
                for (var pt = new ut({ svg: t._element, type: e.dotsOptions.type }), It = function(ht) {
                  for (var At = function(vt) {
                    if (!(!((z = lt[ht]) === null || z === void 0) && z[vt]))
                      return "continue";
                    pt.draw(F + ht * p, Y + vt * p, p, function(Pt, Dt) {
                      var mt;
                      return !!(!((mt = lt[ht + Pt]) === null || mt === void 0) && mt[vt + Dt]);
                    }), pt._element && J && J.appendChild(pt._element);
                  }, gt = 0; gt < lt[ht].length; gt++)
                    At(gt);
                }, ft = 0; ft < lt.length; ft++)
                  It(ft);
              if ((!((j = e.cornersDotOptions) === null || j === void 0) && j.gradient || !((D = e.cornersDotOptions) === null || D === void 0) && D.color) && ((K = document.createElementNS("http://www.w3.org/2000/svg", "clipPath")).setAttribute("id", "clip-path-corners-dot-color-" + G + "-" + N), t._defs.appendChild(K), t._cornersDotClipPath = K, t._createColor({ options: (R = e.cornersDotOptions) === null || R === void 0 ? void 0 : R.gradient, color: (q = e.cornersDotOptions) === null || q === void 0 ? void 0 : q.color, additionalRotation: X, x: F + 2 * p, y: Y + 2 * p, height: a, width: a, name: "corners-dot-color-" + G + "-" + N })), (L = e.cornersDotOptions) === null || L === void 0 ? void 0 : L.type) {
                var kt = new bt({ svg: t._element, type: e.cornersDotOptions.type });
                kt.draw(F + 2 * p, Y + 2 * p, a, X), kt._element && K && K.appendChild(kt._element);
              } else {
                pt = new ut({ svg: t._element, type: e.dotsOptions.type });
                var Rt = function(ht) {
                  for (var At = function(vt) {
                    if (!(!((ot = ct[ht]) === null || ot === void 0) && ot[vt]))
                      return "continue";
                    pt.draw(F + ht * p, Y + vt * p, p, function(Pt, Dt) {
                      var mt;
                      return !!(!((mt = ct[ht + Pt]) === null || mt === void 0) && mt[vt + Dt]);
                    }), pt._element && K && K.appendChild(pt._element);
                  }, gt = 0; gt < ct[ht].length; gt++)
                    At(gt);
                };
                for (ft = 0; ft < ct.length; ft++)
                  Rt(ft);
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
              var s, p, o, a, n, l, h, y, x;
              return _t(this, function(g) {
                switch (g.label) {
                  case 0:
                    return s = this._options, p = Math.floor((s.width - i * u) / 2), o = Math.floor((s.height - i * u) / 2), a = p + s.imageOptions.margin + (i * u - r) / 2, n = o + s.imageOptions.margin + (i * u - e) / 2, l = r - 2 * s.imageOptions.margin, h = e - 2 * s.imageOptions.margin, (y = document.createElementNS("http://www.w3.org/2000/svg", "image")).setAttribute("x", String(a)), y.setAttribute("y", String(n)), y.setAttribute("width", l + "px"), y.setAttribute("height", h + "px"), [4, nt(s.image || "")];
                  case 1:
                    return x = g.sent(), y.setAttribute("href", x || ""), this._element.appendChild(y), [2];
                }
              });
            });
          }, d.prototype._createColor = function(t) {
            var r = t.options, e = t.color, i = t.additionalRotation, u = t.x, s = t.y, p = t.height, o = t.width, a = t.name, n = o > p ? o : p, l = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            if (l.setAttribute("x", String(u)), l.setAttribute("y", String(s)), l.setAttribute("height", String(p)), l.setAttribute("width", String(o)), l.setAttribute("clip-path", "url('#clip-path-" + a + "')"), r) {
              var h;
              if (r.type === "radial")
                (h = document.createElementNS("http://www.w3.org/2000/svg", "radialGradient")).setAttribute("id", a), h.setAttribute("gradientUnits", "userSpaceOnUse"), h.setAttribute("fx", String(u + o / 2)), h.setAttribute("fy", String(s + p / 2)), h.setAttribute("cx", String(u + o / 2)), h.setAttribute("cy", String(s + p / 2)), h.setAttribute("r", String(n / 2));
              else {
                var y = ((r.rotation || 0) + i) % (2 * Math.PI), x = (y + 2 * Math.PI) % (2 * Math.PI), g = u + o / 2, k = s + p / 2, O = u + o / 2, z = s + p / 2;
                x >= 0 && x <= 0.25 * Math.PI || x > 1.75 * Math.PI && x <= 2 * Math.PI ? (g -= o / 2, k -= p / 2 * Math.tan(y), O += o / 2, z += p / 2 * Math.tan(y)) : x > 0.25 * Math.PI && x <= 0.75 * Math.PI ? (k -= p / 2, g -= o / 2 / Math.tan(y), z += p / 2, O += o / 2 / Math.tan(y)) : x > 0.75 * Math.PI && x <= 1.25 * Math.PI ? (g += o / 2, k += p / 2 * Math.tan(y), O -= o / 2, z -= p / 2 * Math.tan(y)) : x > 1.25 * Math.PI && x <= 1.75 * Math.PI && (k += p / 2, g += o / 2 / Math.tan(y), z -= p / 2, O -= o / 2 / Math.tan(y)), (h = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient")).setAttribute("id", a), h.setAttribute("gradientUnits", "userSpaceOnUse"), h.setAttribute("x1", String(Math.round(g))), h.setAttribute("y1", String(Math.round(k))), h.setAttribute("x2", String(Math.round(O))), h.setAttribute("y2", String(Math.round(z)));
              }
              r.colorStops.forEach(function(j) {
                var D = j.offset, R = j.color, q = document.createElementNS("http://www.w3.org/2000/svg", "stop");
                q.setAttribute("offset", 100 * D + "%"), q.setAttribute("stop-color", R), h.appendChild(q);
              }), l.setAttribute("fill", "url('#" + a + "')"), this._defs.appendChild(h);
            } else
              e && l.setAttribute("fill", e);
            this._element.appendChild(l);
          }, d;
        }(), wt = "canvas";
        for (var Ct = {}, w = 0; w <= 40; w++)
          Ct[w] = w;
        const m = { type: wt, shape: "square", width: 300, height: 300, data: "", margin: 0, qrOptions: { typeNumber: Ct[0], mode: void 0, errorCorrectionLevel: "Q" }, imageOptions: { hideBackgroundDots: !0, imageSize: 0.4, crossOrigin: void 0, margin: 0 }, dotsOptions: { type: "square", color: "#000" }, backgroundOptions: { round: 0, color: "#fff" } };
        var v = function() {
          return (v = Object.assign || function(d) {
            for (var t, r = 1, e = arguments.length; r < e; r++)
              for (var i in t = arguments[r])
                Object.prototype.hasOwnProperty.call(t, i) && (d[i] = t[i]);
            return d;
          }).apply(this, arguments);
        };
        function f(d) {
          var t = v({}, d);
          if (!t.colorStops || !t.colorStops.length)
            throw "Field 'colorStops' is required in gradient";
          return t.rotation ? t.rotation = Number(t.rotation) : t.rotation = 0, t.colorStops = t.colorStops.map(function(r) {
            return v(v({}, r), { offset: Number(r.offset) });
          }), t;
        }
        function c(d) {
          var t = v({}, d);
          return t.width = Number(t.width), t.height = Number(t.height), t.margin = Number(t.margin), t.imageOptions = v(v({}, t.imageOptions), { hideBackgroundDots: !!t.imageOptions.hideBackgroundDots, imageSize: Number(t.imageOptions.imageSize), margin: Number(t.imageOptions.margin) }), t.margin > Math.min(t.width, t.height) && (t.margin = Math.min(t.width, t.height)), t.dotsOptions = v({}, t.dotsOptions), t.dotsOptions.gradient && (t.dotsOptions.gradient = f(t.dotsOptions.gradient)), t.cornersSquareOptions && (t.cornersSquareOptions = v({}, t.cornersSquareOptions), t.cornersSquareOptions.gradient && (t.cornersSquareOptions.gradient = f(t.cornersSquareOptions.gradient))), t.cornersDotOptions && (t.cornersDotOptions = v({}, t.cornersDotOptions), t.cornersDotOptions.gradient && (t.cornersDotOptions.gradient = f(t.cornersDotOptions.gradient))), t.backgroundOptions && (t.backgroundOptions = v({}, t.backgroundOptions), t.backgroundOptions.gradient && (t.backgroundOptions.gradient = f(t.backgroundOptions.gradient))), t;
        }
        var b = $(192), M = $.n(b), _ = function(d, t, r, e) {
          return new (r || (r = Promise))(function(i, u) {
            function s(a) {
              try {
                o(e.next(a));
              } catch (n) {
                u(n);
              }
            }
            function p(a) {
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
              })).then(s, p);
            }
            o((e = e.apply(d, t || [])).next());
          });
        }, S = function(d, t) {
          var r, e, i, u, s = { label: 0, sent: function() {
            if (1 & i[0])
              throw i[1];
            return i[1];
          }, trys: [], ops: [] };
          return u = { next: p(0), throw: p(1), return: p(2) }, typeof Symbol == "function" && (u[Symbol.iterator] = function() {
            return this;
          }), u;
          function p(o) {
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
        const W = function() {
          function d(t) {
            this._options = t ? c(Z(m, t)) : m, this.update();
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
                return new Promise(function(p) {
                  s.onload = function() {
                    var o, a;
                    (a = (o = r._canvas) === null || o === void 0 ? void 0 : o.getContext("2d")) === null || a === void 0 || a.drawImage(s, 0, 0), p();
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
            d._clearContainer(this._container), this._options = t ? c(Z(this._options, t)) : this._options, this._options.data && (this._qr = M()(this._options.qrOptions.typeNumber, this._options.qrOptions.errorCorrectionLevel), this._qr.addData(this._options.data, this._options.qrOptions.mode || function(r) {
              switch (!0) {
                case /^[0-9]*$/.test(r):
                  return "Numeric";
                case /^[0-9A-Z $%*+\-./:]*$/.test(r):
                  return "Alphanumeric";
                default:
                  return "Byte";
              }
            }(this._options.data)), this._qr.make(), this._options.type === wt ? this._setupCanvas() : this._setupSvg(), this.append(this._container));
          }, d.prototype.append = function(t) {
            if (t) {
              if (typeof t.appendChild != "function")
                throw "Container should be a single DOM node";
              this._options.type === wt ? this._canvas && t.appendChild(this._canvas) : this._svg && t.appendChild(this._svg), this._container = t;
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
              return S(this, function(p) {
                switch (p.label) {
                  case 0:
                    if (!this._qr)
                      throw "QR code is empty";
                    return r = "png", e = "qr", typeof t == "string" ? (r = t, console.warn("Extension is deprecated as argument for 'download' method, please pass object { name: '...', extension: '...' } as argument")) : typeof t == "object" && t !== null && (t.name && (e = t.name), t.extension && (r = t.extension)), [4, this._getElement(r)];
                  case 1:
                    return (i = p.sent()) ? (r.toLowerCase() === "svg" ? (u = new XMLSerializer(), s = `<?xml version="1.0" standalone="no"?>\r
` + (s = u.serializeToString(i)), tt("data:image/svg+xml;charset=utf-8," + encodeURIComponent(s), e + ".svg")) : tt(i.toDataURL("image/" + r), e + "." + r), [2]) : [2];
                }
              });
            });
          }, d;
        }();
      } }, I = {};
      function A(C) {
        if (I[C])
          return I[C].exports;
        var P = I[C] = { exports: {} };
        return T[C](P, P.exports, A), P.exports;
      }
      return A.n = (C) => {
        var P = C && C.__esModule ? () => C.default : () => C;
        return A.d(P, { a: P }), P;
      }, A.d = (C, P) => {
        for (var $ in P)
          A.o(P, $) && !A.o(C, $) && Object.defineProperty(C, $, { enumerable: !0, get: P[$] });
      }, A.o = (C, P) => Object.prototype.hasOwnProperty.call(C, P), A(676);
    })().default;
  });
})(Bt);
var Nt = Bt.exports;
const Tt = /* @__PURE__ */ Lt(Nt), jt = `.root>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin:auto;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100vh;width:100vw}.root>div>div{margin:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center;width:calc(100% - 2em);max-width:calc(350px + 1em);-webkit-box-flex:1;-ms-flex:1;flex:1}label{position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden}button,input[type=url]{padding:5px;margin-bottom:2em;width:calc(100% - 1em);white-space:nowrap}button{margin-top:2em}#QRContainer canvas{width:300px;margin-bottom:2em}#ThemePopover{position:fixed;margin:0;width:120px;top:40px}p-top-nav{position:fixed}p-top-nav-item button{border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;font:inherit;margin:0}
`;
class Ft {
  async getThemes() {
    const I = (await (await fetch(
      "https://api.github.com/repos/p-huisman/pwa-qr-code-generator/contents?ref=themes"
    )).json().catch((C) => C)).map((C) => C.name).filter((C) => !C.startsWith(".")).map(
      (C) => fetch(
        `https://raw.githubusercontent.com/p-huisman/pwa-qr-code-generator/themes/${C}/theme.json`
      )
    ), A = (await Promise.all(I)).map(
      (C) => C.json().catch((P) => P)
    );
    return await Promise.all(A).catch((C) => C);
  }
}
var $t = Object.defineProperty, Qt = Object.getOwnPropertyDescriptor, zt = (E, B, T, I) => {
  for (var A = I > 1 ? void 0 : I ? Qt(B, T) : B, C = E.length - 1, P; C >= 0; C--)
    (P = E[C]) && (A = (I ? P(B, T, A) : P(A)) || A);
  return I && A && $t(B, T, A), A;
};
let Ot = class extends CustomElement {
  constructor(E) {
    var I, A;
    super(), this.qrCode = E, this.defaultStyling = {
      width: 1200,
      height: 1200,
      data: "about:blank",
      qrOptions: {
        mode: "Byte",
        errorCorrectionLevel: "H"
      }
    }, this.themes = [], this.themeService = new Ft(), this.url = "about:blank", this.render = () => /* @__PURE__ */ Maquette.h("div", null, /* @__PURE__ */ Maquette.h("p-top-nav", null, /* @__PURE__ */ Maquette.h("p-top-nav-item", { id: "ThemeMenuItem", onclick: this.onMenuItemClick }, "Stijl", /* @__PURE__ */ Maquette.h("div", { id: "ThemePopover", popover: "auto" }, this.themes.map((C) => /* @__PURE__ */ Maquette.h(
      "button",
      {
        onclick: this.onSelectTheme,
        key: `ThemeId${C.name}`,
        "data-name": C.name
      },
      C.name
    )))), /* @__PURE__ */ Maquette.h("p-top-nav-item", { id: "AboutMenuItem", onclick: this.onMenuItemClick }, "Over")), /* @__PURE__ */ Maquette.h("div", null, /* @__PURE__ */ Maquette.h("label", { for: "UrlInput" }, "URL"), /* @__PURE__ */ Maquette.h(
      "input",
      {
        id: "UrlInput",
        type: "url",
        value: this.url,
        oninput: this.onDataChange
      }
    ), /* @__PURE__ */ Maquette.h("div", { id: "QRContainer", afterCreate: this.onCreateQRElement }), /* @__PURE__ */ Maquette.h("button", { onclick: this.onDownloadButtonClick }, "Download QR code"))), this.onMenuItemClick = async ({ target: C }) => {
      var P;
      switch (C.id) {
        case "ThemeMenuItem":
          (P = this.themePopover) == null || P.togglePopover();
          break;
        case "AboutMenuItem":
          this.openAboutDialog();
          break;
      }
    }, this.onSelectTheme = async ({ target: C }) => {
      var P;
      this.theme = C.dataset.name, (P = this.themePopover) == null || P.togglePopover();
    }, this.openAboutDialog = async () => {
      await customElements.whenDefined("p-dialog"), await (await customElements.get(
        "p-dialog"
      )).prompt(
        "Over QR Code generator",
        /* @__PURE__ */ Maquette.h("div", null, /* @__PURE__ */ Maquette.h("p", null, "Generate qr code with style."), /* @__PURE__ */ Maquette.h("p", null, "Copyright ", (/* @__PURE__ */ new Date()).getFullYear(), " P.A. Huisman, alle rechten voorbehouden")),
        ["OK"]
      );
    }, this.onCreateQRElement = (C) => {
      var P;
      (P = this.qrCode) == null || P.append(C);
    }, this.onDataChange = (C) => {
      var $;
      const P = C.target;
      this.url = P.value, this.defaultStyling = { ...this.defaultStyling, data: this.url }, ($ = this.qrCode) == null || $.update(this.defaultStyling);
    }, this.onDownloadButtonClick = async () => {
      var $, it;
      const C = this.url.split("//")[1].replaceAll("/", "-").replaceAll("?", "-").replaceAll(".", "-").replaceAll("/", "-"), P = (it = ($ = this.qrCode) == null ? void 0 : $._svg) == null ? void 0 : it.outerHTML;
      if (P) {
        const V = P.replace(
          "<svg ",
          '<svg xmlns="http://www.w3.org/2000/svg" '
        ), H = {
          suggestedName: C,
          types: [
            {
              description: "SVG Files",
              accept: { "application/svg+xml": [".svg"] }
            }
          ]
        }, Z = await window.showSaveFilePicker(H).catch((nt) => nt);
        if (Z instanceof Error)
          return;
        const tt = await Z.createWritable();
        await tt.write(V), await tt.close();
      }
    };
    const B = this.templateFromString(
      `<style>${jt}</style><div class="root"></div>`
    );
    this.qrCode = new Tt(this.defaultStyling), (I = this.shadowRoot) == null || I.appendChild(B);
    const T = (A = this.shadowRoot) == null ? void 0 : A.querySelector(".root");
    T && this.createProjector(T, this.render), this.initThemes();
  }
  async initThemes() {
    this.themes = await this.themeService.getThemes();
  }
  get themePopover() {
    var E;
    return this.shadowRoot ? (E = this.shadowRoot) == null ? void 0 : E.querySelector("#ThemePopover") : null;
  }
  set theme(E) {
    if (!this.themes.find((T) => T.name === E))
      return;
    const B = this.themes.find((T) => T.name === E);
    this.url = B.url, this.qrCode && (this.qrCode.update(B.options), this.qrCode.update({ data: this.url }));
  }
};
zt([
  RenderOnSet
], Ot.prototype, "themes", 2);
Ot = zt([
  CustomElementConfig({
    tagName: "p-qr-code-generator"
  })
], Ot);
const Ht = `dialog::-ms-backdrop{background:rgba(0,0,0,.5);background:var(--backdrop-color, rgba(0, 0, 0, .5));-webkit-backdrop-filter:blur(1px);backdrop-filter:blur(1px);-webkit-backdrop-filter:var(--backdrop-filter, blur(1px));backdrop-filter:var(--backdrop-filter, blur(1px))}dialog::backdrop{background:rgba(0,0,0,.5);background:var(--backdrop-color, rgba(0, 0, 0, .5));-webkit-backdrop-filter:blur(1px);backdrop-filter:blur(1px);-webkit-backdrop-filter:var(--backdrop-filter, blur(1px));backdrop-filter:var(--backdrop-filter, blur(1px))}dialog[open]{background:Canvas;background:var(--dialog-background, Canvas);color:CanvasText;color:var(--dialog-color, CanvasText);border:1px solid ButtonBorder;border:1px solid var(--dialog-border-color, ButtonBorder);border-radius:0;border-radius:var(--dialog-border-radius, 0);-webkit-box-shadow:2px 2px 5px hsla(220,3%,23%,.3);box-shadow:2px 2px 5px #393a3c4d;-webkit-box-shadow:var(--dialog-box-shadow, 2px 2px 5px hsla(220, 3%, 23%, .3));box-shadow:var(--dialog-box-shadow, 2px 2px 5px hsla(220, 3%, 23%, .3));width:480px;max-width:calc(100vw - 40px);outline:none}.dialog-content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:var(--gap-sm);margin:var(--gap-xs)}.dialog-header-container ::slotted(*){font:var(--dialog-header-font);margin:0}.dialog-body-container ::slotted(*){font:var(--dialog-body-font);margin:0}.dialog-footer-container ::slotted(*){font:var(--dialog-footer-font);margin:0}.dialog-footer-container slot{display:-webkit-box;display:-ms-flexbox;display:flex;gap:var(--gap-sm)}.dialog-title{font:var(--dialog-header-font);margin:0}
`;
async function Ut(E, B) {
  return B || (B = document), new Promise((T, I) => {
    const A = setInterval(() => {
      const C = B == null ? void 0 : B.querySelector(E);
      C && (clearInterval(A), T(C));
    }, 100);
    setTimeout(() => {
      clearInterval(A), I(new Error(`Element ${E} not found`));
    }, 1e4);
  });
}
var Gt = Object.defineProperty, Xt = Object.getOwnPropertyDescriptor, Yt = (E, B, T, I) => {
  for (var A = I > 1 ? void 0 : I ? Xt(B, T) : B, C = E.length - 1, P; C >= 0; C--)
    (P = E[C]) && (A = (I ? P(B, T, A) : P(A)) || A);
  return I && A && Gt(B, T, A), A;
};
let St = class extends CustomElement {
  constructor() {
    var T, I;
    super(), this.render = () => /* @__PURE__ */ Maquette.h("dialog", null, /* @__PURE__ */ Maquette.h("div", { class: "dialog-content" }, /* @__PURE__ */ Maquette.h("div", { class: "dialog-header-container" }, /* @__PURE__ */ Maquette.h("slot", { name: "header" })), /* @__PURE__ */ Maquette.h("div", { class: "dialog-body-container" }, /* @__PURE__ */ Maquette.h("slot", null)), /* @__PURE__ */ Maquette.h("div", { class: "dialog-footer-container" }, /* @__PURE__ */ Maquette.h("slot", { name: "footer" }))));
    const E = this.templateFromString(
      `<style>${Ht}</style><div></div>`,
      !0
    );
    (T = this.shadowRoot) == null || T.appendChild(E);
    const B = (I = this.shadowRoot) == null ? void 0 : I.querySelector("div");
    B && this.createProjector(B, this.render);
  }
  static get observedAttributes() {
    return ["caption"];
  }
  get dialogElement() {
    return Ut("dialog", this.shadowRoot ? this.shadowRoot : this);
  }
  close() {
    this.dialogElement.then((E) => E.close());
  }
  static createPromptDialog(E, B, T) {
    const I = document.createElement("p-dialog"), A = Maquette.createProjector(), C = document.createElement("header"), P = document.createElement("main");
    return C.textContent = E, C.slot = "header", A.merge(P, () => B), T.forEach(($) => I.appendChild($)), I.appendChild(C), I.appendChild(P), I;
  }
  static stringsToButtons(E, B) {
    return E.map((T, I) => {
      const A = document.createElement("button");
      return A.textContent = T, A.slot = "footer", A.classList.add("button"), A.classList.add(I === 0 ? "primary-button" : "secondary-button"), A.addEventListener("click", B), A;
    });
  }
  static async prompt(E, B, T = ["OK"]) {
    let I;
    const A = new Promise((V) => {
      I = V;
    }), C = (V) => {
      var Z;
      const H = V.target;
      I(H != null && H.textContent ? H.textContent : ""), (Z = H == null ? void 0 : H.closest("p-dialog")) == null || Z.close(), V.preventDefault();
    }, P = St.stringsToButtons(
      T,
      C
    ), $ = St.createPromptDialog(
      E,
      B,
      P
    );
    document.body.appendChild($);
    const it = await $.dialogElement;
    return it.addEventListener("cancel", (V) => V.preventDefault()), it.addEventListener(
      "close",
      () => {
        var V;
        return (V = $ == null ? void 0 : $.parentElement) == null ? void 0 : V.removeChild($);
      }
    ), it.showModal(), A;
  }
};
St = Yt([
  CustomElementConfig({
    tagName: "p-dialog"
  })
], St);
const Wt = `:host{display:block;width:100%}:host #List{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;gap:1em}:host #List ::slotted(:not([slot])){vertical-align:top}
`;
var Jt = Object.defineProperty, Kt = Object.getOwnPropertyDescriptor, Zt = (E, B, T, I) => {
  for (var A = I > 1 ? void 0 : I ? Kt(B, T) : B, C = E.length - 1, P; C >= 0; C--)
    (P = E[C]) && (A = (I ? P(B, T, A) : P(A)) || A);
  return I && A && Jt(B, T, A), A;
};
let qt = class extends CustomElement {
  constructor() {
    var B;
    super();
    const E = this.templateFromString(
      `<style>${Wt}</style>
      <div id="List"><slot></slot></div>`,
      !0
    );
    (B = this.shadowRoot) == null || B.appendChild(E);
  }
};
qt = Zt([
  CustomElementConfig({
    tagName: "p-top-nav"
  })
], qt);
const Vt = `:host{font-weight:400}
`;
var te = Object.defineProperty, ee = Object.getOwnPropertyDescriptor, re = (E, B, T, I) => {
  for (var A = I > 1 ? void 0 : I ? ee(B, T) : B, C = E.length - 1, P; C >= 0; C--)
    (P = E[C]) && (A = (I ? P(B, T, A) : P(A)) || A);
  return I && A && te(B, T, A), A;
};
let Et = class extends CustomElement {
  constructor() {
    var B;
    super();
    const E = this.templateFromString(
      `<style>${Vt}</style>
      <div><slot></slot></div>`,
      !0
    );
    (B = this.shadowRoot) == null || B.appendChild(E);
  }
};
Et = re([
  CustomElementConfig({
    tagName: "p-top-nav-item"
  })
], Et);
let Mt;
window.addEventListener("beforeinstallprompt", (E) => {
  E.preventDefault(), Mt = E, ne();
});
async function ne() {
  if (await customElements.whenDefined("p-dialog"), await (await customElements.get(
    "p-dialog"
  )).prompt(
    "Installeren?",
    /* @__PURE__ */ Maquette.h("p", null, "QR Code generator installeren?"),
    ["Ja", "Nee, nu niet"]
  ) === "Ja") {
    Mt.prompt();
    const { outcome: T } = await Mt.userChoice;
    console.log(`User response to the install prompt: ${T}`), Mt = null;
  }
}