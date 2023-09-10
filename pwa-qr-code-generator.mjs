function Lt(E) {
  return E && E.__esModule && Object.prototype.hasOwnProperty.call(E, "default") ? E.default : E;
}
var zt = { exports: {} };
(function(E, z) {
  (function(j, I) {
    E.exports = I();
  })(self, function() {
    return (() => {
      var j = { 192: (C, P) => {
        var Q, it, Z = function() {
          var U = function(w, m) {
            var v = w, f = ut[m], c = null, b = 0, k = null, x = [], M = {}, W = function(n, a) {
              c = function(o) {
                for (var l = new Array(o), h = 0; h < o; h += 1) {
                  l[h] = new Array(o);
                  for (var y = 0; y < o; y += 1)
                    l[h][y] = null;
                }
                return l;
              }(b = 4 * v + 17), d(0, 0), d(b - 7, 0), d(0, b - 7), r(), t(), i(n, a), v >= 7 && e(n), k == null && (k = s(v, f, x)), u(k, a);
            }, d = function(n, a) {
              for (var o = -1; o <= 7; o += 1)
                if (!(n + o <= -1 || b <= n + o))
                  for (var l = -1; l <= 7; l += 1)
                    a + l <= -1 || b <= a + l || (c[n + o][a + l] = 0 <= o && o <= 6 && (l == 0 || l == 6) || 0 <= l && l <= 6 && (o == 0 || o == 6) || 2 <= o && o <= 4 && 2 <= l && l <= 4);
            }, t = function() {
              for (var n = 8; n < b - 8; n += 1)
                c[n][6] == null && (c[n][6] = n % 2 == 0);
              for (var a = 8; a < b - 8; a += 1)
                c[6][a] == null && (c[6][a] = a % 2 == 0);
            }, r = function() {
              for (var n = rt.getPatternPosition(v), a = 0; a < n.length; a += 1)
                for (var o = 0; o < n.length; o += 1) {
                  var l = n[a], h = n[o];
                  if (c[l][h] == null)
                    for (var y = -2; y <= 2; y += 1)
                      for (var _ = -2; _ <= 2; _ += 1)
                        c[l + y][h + _] = y == -2 || y == 2 || _ == -2 || _ == 2 || y == 0 && _ == 0;
                }
            }, e = function(n) {
              for (var a = rt.getBCHTypeNumber(v), o = 0; o < 18; o += 1) {
                var l = !n && (a >> o & 1) == 1;
                c[Math.floor(o / 3)][o % 3 + b - 8 - 3] = l;
              }
              for (o = 0; o < 18; o += 1)
                l = !n && (a >> o & 1) == 1, c[o % 3 + b - 8 - 3][Math.floor(o / 3)] = l;
            }, i = function(n, a) {
              for (var o = f << 3 | a, l = rt.getBCHTypeInfo(o), h = 0; h < 15; h += 1) {
                var y = !n && (l >> h & 1) == 1;
                h < 6 ? c[h][8] = y : h < 8 ? c[h + 1][8] = y : c[b - 15 + h][8] = y;
              }
              for (h = 0; h < 15; h += 1)
                y = !n && (l >> h & 1) == 1, h < 8 ? c[8][b - h - 1] = y : h < 9 ? c[8][15 - h - 1 + 1] = y : c[8][15 - h - 1] = y;
              c[b - 8][8] = !n;
            }, u = function(n, a) {
              for (var o = -1, l = b - 1, h = 7, y = 0, _ = rt.getMaskFunction(a), g = b - 1; g > 0; g -= 2)
                for (g == 6 && (g -= 1); ; ) {
                  for (var S = 0; S < 2; S += 1)
                    if (c[l][g - S] == null) {
                      var D = !1;
                      y < n.length && (D = (n[y] >>> h & 1) == 1), _(l, g - S) && (D = !D), c[l][g - S] = D, (h -= 1) == -1 && (y += 1, h = 7);
                    }
                  if ((l += o) < 0 || b <= l) {
                    l -= o, o = -o;
                    break;
                  }
                }
            }, s = function(n, a, o) {
              for (var l = bt.getRSBlocks(n, a), h = dt(), y = 0; y < o.length; y += 1) {
                var _ = o[y];
                h.put(_.getMode(), 4), h.put(_.getLength(), rt.getLengthInBits(_.getMode(), n)), _.write(h);
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
              return function(S, D) {
                for (var B = 0, T = 0, O = 0, R = new Array(D.length), q = new Array(D.length), L = 0; L < D.length; L += 1) {
                  var nt = D[L].dataCount, G = D[L].totalCount - nt;
                  T = Math.max(T, nt), O = Math.max(O, G), R[L] = new Array(nt);
                  for (var N = 0; N < R[L].length; N += 1)
                    R[L][N] = 255 & S.getBuffer()[N + B];
                  B += nt;
                  var X = rt.getErrorCorrectPolynomial(G), F = at(R[L], X.getLength() - 1).mod(X);
                  for (q[L] = new Array(X.getLength() - 1), N = 0; N < q[L].length; N += 1) {
                    var Y = N + F.getLength() - q[L].length;
                    q[L][N] = Y >= 0 ? F.getAt(Y) : 0;
                  }
                }
                var J = 0;
                for (N = 0; N < D.length; N += 1)
                  J += D[N].totalCount;
                var K = new Array(J), ot = 0;
                for (N = 0; N < T; N += 1)
                  for (L = 0; L < D.length; L += 1)
                    N < R[L].length && (K[ot] = R[L][N], ot += 1);
                for (N = 0; N < O; N += 1)
                  for (L = 0; L < D.length; L += 1)
                    N < q[L].length && (K[ot] = q[L][N], ot += 1);
                return K;
              }(h, l);
            };
            M.addData = function(n, a) {
              var o = null;
              switch (a = a || "Byte") {
                case "Numeric":
                  o = yt(n);
                  break;
                case "Alphanumeric":
                  o = xt(n);
                  break;
                case "Byte":
                  o = lt(n);
                  break;
                case "Kanji":
                  o = ct(n);
                  break;
                default:
                  throw "mode:" + a;
              }
              x.push(o), k = null;
            }, M.isDark = function(n, a) {
              if (n < 0 || b <= n || a < 0 || b <= a)
                throw n + "," + a;
              return c[n][a];
            }, M.getModuleCount = function() {
              return b;
            }, M.make = function() {
              if (v < 1) {
                for (var n = 1; n < 40; n++) {
                  for (var a = bt.getRSBlocks(n, f), o = dt(), l = 0; l < x.length; l++) {
                    var h = x[l];
                    o.put(h.getMode(), 4), o.put(h.getLength(), rt.getLengthInBits(h.getMode(), n)), h.write(o);
                  }
                  var y = 0;
                  for (l = 0; l < a.length; l++)
                    y += a[l].dataCount;
                  if (o.getLengthInBits() <= 8 * y)
                    break;
                }
                v = n;
              }
              W(!1, function() {
                for (var _ = 0, g = 0, S = 0; S < 8; S += 1) {
                  W(!0, S);
                  var D = rt.getLostPoint(M);
                  (S == 0 || _ > D) && (_ = D, g = S);
                }
                return g;
              }());
            }, M.createTableTag = function(n, a) {
              n = n || 2;
              var o = "";
              o += '<table style="', o += " border-width: 0px; border-style: none;", o += " border-collapse: collapse;", o += " padding: 0px; margin: " + (a = a === void 0 ? 4 * n : a) + "px;", o += '">', o += "<tbody>";
              for (var l = 0; l < M.getModuleCount(); l += 1) {
                o += "<tr>";
                for (var h = 0; h < M.getModuleCount(); h += 1)
                  o += '<td style="', o += " border-width: 0px; border-style: none;", o += " border-collapse: collapse;", o += " padding: 0px; margin: 0px;", o += " width: " + n + "px;", o += " height: " + n + "px;", o += " background-color: ", o += M.isDark(l, h) ? "#000000" : "#ffffff", o += ";", o += '"/>';
                o += "</tr>";
              }
              return (o += "</tbody>") + "</table>";
            }, M.createSvgTag = function(n, a, o, l) {
              var h = {};
              typeof arguments[0] == "object" && (n = (h = arguments[0]).cellSize, a = h.margin, o = h.alt, l = h.title), n = n || 2, a = a === void 0 ? 4 * n : a, (o = typeof o == "string" ? { text: o } : o || {}).text = o.text || null, o.id = o.text ? o.id || "qrcode-description" : null, (l = typeof l == "string" ? { text: l } : l || {}).text = l.text || null, l.id = l.text ? l.id || "qrcode-title" : null;
              var y, _, g, S, D = M.getModuleCount() * n + 2 * a, B = "";
              for (S = "l" + n + ",0 0," + n + " -" + n + ",0 0,-" + n + "z ", B += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"', B += h.scalable ? "" : ' width="' + D + 'px" height="' + D + 'px"', B += ' viewBox="0 0 ' + D + " " + D + '" ', B += ' preserveAspectRatio="xMinYMin meet"', B += l.text || o.text ? ' role="img" aria-labelledby="' + p([l.id, o.id].join(" ").trim()) + '"' : "", B += ">", B += l.text ? '<title id="' + p(l.id) + '">' + p(l.text) + "</title>" : "", B += o.text ? '<description id="' + p(o.id) + '">' + p(o.text) + "</description>" : "", B += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>', B += '<path d="', _ = 0; _ < M.getModuleCount(); _ += 1)
                for (g = _ * n + a, y = 0; y < M.getModuleCount(); y += 1)
                  M.isDark(_, y) && (B += "M" + (y * n + a) + "," + g + S);
              return (B += '" stroke="transparent" fill="black"/>') + "</svg>";
            }, M.createDataURL = function(n, a) {
              n = n || 2, a = a === void 0 ? 4 * n : a;
              var o = M.getModuleCount() * n + 2 * a, l = a, h = o - a;
              return Ct(o, o, function(y, _) {
                if (l <= y && y < h && l <= _ && _ < h) {
                  var g = Math.floor((y - l) / n), S = Math.floor((_ - l) / n);
                  return M.isDark(S, g) ? 0 : 1;
                }
                return 1;
              });
            }, M.createImgTag = function(n, a, o) {
              n = n || 2, a = a === void 0 ? 4 * n : a;
              var l = M.getModuleCount() * n + 2 * a, h = "";
              return h += "<img", h += ' src="', h += M.createDataURL(n, a), h += '"', h += ' width="', h += l, h += '"', h += ' height="', h += l, h += '"', o && (h += ' alt="', h += p(o), h += '"'), h + "/>";
            };
            var p = function(n) {
              for (var a = "", o = 0; o < n.length; o += 1) {
                var l = n.charAt(o);
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
            return M.createASCII = function(n, a) {
              if ((n = n || 1) < 2)
                return function(R) {
                  R = R === void 0 ? 2 : R;
                  var q, L, nt, G, N, X = 1 * M.getModuleCount() + 2 * R, F = R, Y = X - R, J = { "██": "█", "█ ": "▀", " █": "▄", "  ": " " }, K = { "██": "▀", "█ ": "▀", " █": " ", "  ": " " }, ot = "";
                  for (q = 0; q < X; q += 2) {
                    for (nt = Math.floor((q - F) / 1), G = Math.floor((q + 1 - F) / 1), L = 0; L < X; L += 1)
                      N = "█", F <= L && L < Y && F <= q && q < Y && M.isDark(nt, Math.floor((L - F) / 1)) && (N = " "), F <= L && L < Y && F <= q + 1 && q + 1 < Y && M.isDark(G, Math.floor((L - F) / 1)) ? N += " " : N += "█", ot += R < 1 && q + 1 >= Y ? K[N] : J[N];
                    ot += `
`;
                  }
                  return X % 2 && R > 0 ? ot.substring(0, ot.length - X - 1) + Array(X + 1).join("▀") : ot.substring(0, ot.length - 1);
                }(a);
              n -= 1, a = a === void 0 ? 2 * n : a;
              var o, l, h, y, _ = M.getModuleCount() * n + 2 * a, g = a, S = _ - a, D = Array(n + 1).join("██"), B = Array(n + 1).join("  "), T = "", O = "";
              for (o = 0; o < _; o += 1) {
                for (h = Math.floor((o - g) / n), O = "", l = 0; l < _; l += 1)
                  y = 1, g <= l && l < S && g <= o && o < S && M.isDark(h, Math.floor((l - g) / n)) && (y = 0), O += y ? D : B;
                for (h = 0; h < n; h += 1)
                  T += O + `
`;
              }
              return T.substring(0, T.length - 1);
            }, M.renderTo2dContext = function(n, a) {
              a = a || 2;
              for (var o = M.getModuleCount(), l = 0; l < o; l++)
                for (var h = 0; h < o; h++)
                  n.fillStyle = M.isDark(l, h) ? "black" : "white", n.fillRect(l * a, h * a, a, a);
            }, M;
          };
          U.stringToBytes = (U.stringToBytesFuncs = { default: function(w) {
            for (var m = [], v = 0; v < w.length; v += 1) {
              var f = w.charCodeAt(v);
              m.push(255 & f);
            }
            return m;
          } }).default, U.createStringToBytes = function(w, m) {
            var v = function() {
              for (var c = wt(w), b = function() {
                var t = c.read();
                if (t == -1)
                  throw "eof";
                return t;
              }, k = 0, x = {}; ; ) {
                var M = c.read();
                if (M == -1)
                  break;
                var W = b(), d = b() << 8 | b();
                x[String.fromCharCode(M << 8 | W)] = d, k += 1;
              }
              if (k != m)
                throw k + " != " + m;
              return x;
            }(), f = "?".charCodeAt(0);
            return function(c) {
              for (var b = [], k = 0; k < c.length; k += 1) {
                var x = c.charCodeAt(k);
                if (x < 128)
                  b.push(x);
                else {
                  var M = v[c.charAt(k)];
                  typeof M == "number" ? (255 & M) == M ? b.push(M) : (b.push(M >>> 8), b.push(255 & M)) : b.push(f);
                }
              }
              return b;
            };
          };
          var V, tt, et, $, H, ut = { L: 1, M: 0, Q: 3, H: 2 }, rt = (V = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]], tt = 1335, et = 7973, H = function(w) {
            for (var m = 0; w != 0; )
              m += 1, w >>>= 1;
            return m;
          }, ($ = {}).getBCHTypeInfo = function(w) {
            for (var m = w << 10; H(m) - H(tt) >= 0; )
              m ^= tt << H(m) - H(tt);
            return 21522 ^ (w << 10 | m);
          }, $.getBCHTypeNumber = function(w) {
            for (var m = w << 12; H(m) - H(et) >= 0; )
              m ^= et << H(m) - H(et);
            return w << 12 | m;
          }, $.getPatternPosition = function(w) {
            return V[w - 1];
          }, $.getMaskFunction = function(w) {
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
          }, $.getErrorCorrectPolynomial = function(w) {
            for (var m = at([1], 0), v = 0; v < w; v += 1)
              m = m.multiply(at([1, st.gexp(v)], 0));
            return m;
          }, $.getLengthInBits = function(w, m) {
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
          }, $.getLostPoint = function(w) {
            for (var m = w.getModuleCount(), v = 0, f = 0; f < m; f += 1)
              for (var c = 0; c < m; c += 1) {
                for (var b = 0, k = w.isDark(f, c), x = -1; x <= 1; x += 1)
                  if (!(f + x < 0 || m <= f + x))
                    for (var M = -1; M <= 1; M += 1)
                      c + M < 0 || m <= c + M || x == 0 && M == 0 || k == w.isDark(f + x, c + M) && (b += 1);
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
          }, $), st = function() {
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
              for (var b = new Array(w.length - c + m), k = 0; k < w.length - c; k += 1)
                b[k] = w[k + c];
              return b;
            }(), f = { getAt: function(c) {
              return v[c];
            }, getLength: function() {
              return v.length;
            }, multiply: function(c) {
              for (var b = new Array(f.getLength() + c.getLength() - 1), k = 0; k < f.getLength(); k += 1)
                for (var x = 0; x < c.getLength(); x += 1)
                  b[k + x] ^= st.gexp(st.glog(f.getAt(k)) + st.glog(c.getAt(x)));
              return at(b, 0);
            }, mod: function(c) {
              if (f.getLength() - c.getLength() < 0)
                return f;
              for (var b = st.glog(f.getAt(0)) - st.glog(c.getAt(0)), k = new Array(f.getLength()), x = 0; x < f.getLength(); x += 1)
                k[x] = f.getAt(x);
              for (x = 0; x < c.getLength(); x += 1)
                k[x] ^= st.gexp(st.glog(c.getAt(x)) + b);
              return at(k, 0).mod(c);
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
              for (var k = b.length / 3, x = [], M = 0; M < k; M += 1)
                for (var W = b[3 * M + 0], d = b[3 * M + 1], t = b[3 * M + 2], r = 0; r < W; r += 1)
                  x.push(m(d, t));
              return x;
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
              for (var k = m, x = 0; x + 2 < k.length; )
                b.put(f(k.substring(x, x + 3)), 10), x += 3;
              x < k.length && (k.length - x == 1 ? b.put(f(k.substring(x, x + 1)), 4) : k.length - x == 2 && b.put(f(k.substring(x, x + 2)), 7));
            } }, f = function(b) {
              for (var k = 0, x = 0; x < b.length; x += 1)
                k = 10 * k + c(b.charAt(x));
              return k;
            }, c = function(b) {
              if ("0" <= b && b <= "9")
                return b.charCodeAt(0) - "0".charCodeAt(0);
              throw "illegal char :" + b;
            };
            return v;
          }, xt = function(w) {
            var m = w, v = { getMode: function() {
              return 2;
            }, getLength: function(c) {
              return m.length;
            }, write: function(c) {
              for (var b = m, k = 0; k + 1 < b.length; )
                c.put(45 * f(b.charAt(k)) + f(b.charAt(k + 1)), 11), k += 2;
              k < b.length && c.put(f(b.charAt(k)), 6);
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
            var m = U.stringToBytes(w);
            return { getMode: function() {
              return 4;
            }, getLength: function(v) {
              return m.length;
            }, write: function(v) {
              for (var f = 0; f < m.length; f += 1)
                v.put(m[f], 8);
            } };
          }, ct = function(w) {
            var m = U.stringToBytesFuncs.SJIS;
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
                var k = (255 & c[b]) << 8 | 255 & c[b + 1];
                if (33088 <= k && k <= 40956)
                  k -= 33088;
                else {
                  if (!(57408 <= k && k <= 60351))
                    throw "illegal char at " + (b + 1) + "/" + k;
                  k -= 49472;
                }
                k = 192 * (k >>> 8 & 255) + (255 & k), f.put(k, 13), b += 2;
              }
              if (b < c.length)
                throw "illegal char at " + (b + 1);
            } };
          }, _t = function() {
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
                var x = m.charAt(v);
                if (v += 1, x == "=")
                  return c = 0, -1;
                x.match(/^\s$/) || (f = f << 6 | k(x.charCodeAt(0)), c += 6);
              }
              var M = f >>> c - 8 & 255;
              return c -= 8, M;
            } }, k = function(x) {
              if (65 <= x && x <= 90)
                return x - 65;
              if (97 <= x && x <= 122)
                return x - 97 + 26;
              if (48 <= x && x <= 57)
                return x - 48 + 52;
              if (x == 43)
                return 62;
              if (x == 47)
                return 63;
              throw "c:" + x;
            };
            return b;
          }, Ct = function(w, m, v) {
            for (var f = function(d, t) {
              var r = d, e = t, i = new Array(d * t), u = { setPixel: function(n, a, o) {
                i[a * r + n] = o;
              }, write: function(n) {
                n.writeString("GIF87a"), n.writeShort(r), n.writeShort(e), n.writeByte(128), n.writeByte(0), n.writeByte(0), n.writeByte(0), n.writeByte(0), n.writeByte(0), n.writeByte(255), n.writeByte(255), n.writeByte(255), n.writeString(","), n.writeShort(0), n.writeShort(0), n.writeShort(r), n.writeShort(e), n.writeByte(0);
                var a = s(2);
                n.writeByte(2);
                for (var o = 0; a.length - o > 255; )
                  n.writeByte(255), n.writeBytes(a, o, 255), o += 255;
                n.writeByte(a.length - o), n.writeBytes(a, o, a.length - o), n.writeByte(0), n.writeString(";");
              } }, s = function(n) {
                for (var a = 1 << n, o = 1 + (1 << n), l = n + 1, h = p(), y = 0; y < a; y += 1)
                  h.add(String.fromCharCode(y));
                h.add(String.fromCharCode(a)), h.add(String.fromCharCode(o));
                var _, g, S, D = _t(), B = (_ = D, g = 0, S = 0, { write: function(q, L) {
                  if (q >>> L)
                    throw "length over";
                  for (; g + L >= 8; )
                    _.writeByte(255 & (q << g | S)), L -= 8 - g, q >>>= 8 - g, S = 0, g = 0;
                  S |= q << g, g += L;
                }, flush: function() {
                  g > 0 && _.writeByte(S);
                } });
                B.write(a, l);
                var T = 0, O = String.fromCharCode(i[T]);
                for (T += 1; T < i.length; ) {
                  var R = String.fromCharCode(i[T]);
                  T += 1, h.contains(O + R) ? O += R : (B.write(h.indexOf(O), l), h.size() < 4095 && (h.size() == 1 << l && (l += 1), h.add(O + R)), O = R);
                }
                return B.write(h.indexOf(O), l), B.write(o, l), B.flush(), D.toByteArray();
              }, p = function() {
                var n = {}, a = 0, o = { add: function(l) {
                  if (o.contains(l))
                    throw "dup key:" + l;
                  n[l] = a, a += 1;
                }, size: function() {
                  return a;
                }, indexOf: function(l) {
                  return n[l];
                }, contains: function(l) {
                  return n[l] !== void 0;
                } };
                return o;
              };
              return u;
            }(w, m), c = 0; c < m; c += 1)
              for (var b = 0; b < w; b += 1)
                f.setPixel(b, c, v(b, c));
            var k = _t();
            f.write(k);
            for (var x = function() {
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
                  for (var p = 3 - r % 3, n = 0; n < p; n += 1)
                    e += "=";
              }, i.toString = function() {
                return e;
              }, i;
            }(), M = k.toByteArray(), W = 0; W < M.length; W += 1)
              x.writeByte(M[W]);
            return x.flush(), "data:image/gif;base64," + x;
          };
          return U;
        }();
        Z.stringToBytesFuncs["UTF-8"] = function(U) {
          return function(V) {
            for (var tt = [], et = 0; et < V.length; et++) {
              var $ = V.charCodeAt(et);
              $ < 128 ? tt.push($) : $ < 2048 ? tt.push(192 | $ >> 6, 128 | 63 & $) : $ < 55296 || $ >= 57344 ? tt.push(224 | $ >> 12, 128 | $ >> 6 & 63, 128 | 63 & $) : (et++, $ = 65536 + ((1023 & $) << 10 | 1023 & V.charCodeAt(et)), tt.push(240 | $ >> 18, 128 | $ >> 12 & 63, 128 | $ >> 6 & 63, 128 | 63 & $));
            }
            return tt;
          }(U);
        }, (it = typeof (Q = function() {
          return Z;
        }) == "function" ? Q.apply(P, []) : Q) === void 0 || (C.exports = it);
      }, 676: (C, P, Q) => {
        Q.d(P, { default: () => W });
        var it = function() {
          return (it = Object.assign || function(d) {
            for (var t, r = 1, e = arguments.length; r < e; r++)
              for (var i in t = arguments[r])
                Object.prototype.hasOwnProperty.call(t, i) && (d[i] = t[i]);
            return d;
          }).apply(this, arguments);
        }, Z = function() {
          for (var d = 0, t = 0, r = arguments.length; t < r; t++)
            d += arguments[t].length;
          var e = Array(d), i = 0;
          for (t = 0; t < r; t++)
            for (var u = arguments[t], s = 0, p = u.length; s < p; s++, i++)
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
          return e !== void 0 && U(d) && U(e) ? (d = it({}, d), Object.keys(e).forEach(function(i) {
            var u = d[i], s = e[i];
            Array.isArray(u) && Array.isArray(s) ? d[i] = s : U(u) && U(s) ? d[i] = V(Object.assign({}, u), s) : d[i] = s;
          }), V.apply(void 0, Z([d], t))) : d;
        }
        function tt(d, t) {
          var r = document.createElement("a");
          r.download = t, r.href = d, document.body.appendChild(r), r.click(), document.body.removeChild(r);
        }
        function et(d) {
          return t = this, r = void 0, i = function() {
            return function(u, s) {
              var p, n, a, o, l = { label: 0, sent: function() {
                if (1 & a[0])
                  throw a[1];
                return a[1];
              }, trys: [], ops: [] };
              return o = { next: h(0), throw: h(1), return: h(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
                return this;
              }), o;
              function h(y) {
                return function(_) {
                  return function(g) {
                    if (p)
                      throw new TypeError("Generator is already executing.");
                    for (; l; )
                      try {
                        if (p = 1, n && (a = 2 & g[0] ? n.return : g[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, g[1])).done)
                          return a;
                        switch (n = 0, a && (g = [2 & g[0], a.value]), g[0]) {
                          case 0:
                          case 1:
                            a = g;
                            break;
                          case 4:
                            return l.label++, { value: g[1], done: !1 };
                          case 5:
                            l.label++, n = g[1], g = [0];
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
                      } catch (S) {
                        g = [6, S], n = 0;
                      } finally {
                        p = a = 0;
                      }
                    if (5 & g[0])
                      throw g[1];
                    return { value: g[0] ? g[1] : void 0, done: !0 };
                  }([y, _]);
                };
              }
            }(this, function(u) {
              return [2, new Promise(function(s) {
                var p = new XMLHttpRequest();
                p.onload = function() {
                  var n = new FileReader();
                  n.onloadend = function() {
                    s(n.result);
                  }, n.readAsDataURL(p.response);
                }, p.open("GET", d), p.responseType = "blob", p.send();
              })];
            });
          }, new ((e = void 0) || (e = Promise))(function(u, s) {
            function p(o) {
              try {
                a(i.next(o));
              } catch (l) {
                s(l);
              }
            }
            function n(o) {
              try {
                a(i.throw(o));
              } catch (l) {
                s(l);
              }
            }
            function a(o) {
              var l;
              o.done ? u(o.value) : (l = o.value, l instanceof e ? l : new e(function(h) {
                h(l);
              })).then(p, n);
            }
            a((i = i.apply(t, r || [])).next());
          });
          var t, r, e, i;
        }
        const $ = { L: 0.07, M: 0.15, Q: 0.25, H: 0.3 };
        var H = function() {
          return (H = Object.assign || function(d) {
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
            var r, e = t.x, i = t.y, u = t.size, s = t.rotation, p = s === void 0 ? 0 : s, n = e + u / 2, a = i + u / 2;
            (0, t.draw)(), (r = this._element) === null || r === void 0 || r.setAttribute("transform", "rotate(" + 180 * p / Math.PI + "," + n + "," + a + ")");
          }, d.prototype._basicDot = function(t) {
            var r = this, e = t.size, i = t.x, u = t.y;
            this._rotateFigure(H(H({}, t), { draw: function() {
              r._element = document.createElementNS("http://www.w3.org/2000/svg", "circle"), r._element.setAttribute("cx", String(i + e / 2)), r._element.setAttribute("cy", String(u + e / 2)), r._element.setAttribute("r", String(e / 2));
            } }));
          }, d.prototype._basicSquare = function(t) {
            var r = this, e = t.size, i = t.x, u = t.y;
            this._rotateFigure(H(H({}, t), { draw: function() {
              r._element = document.createElementNS("http://www.w3.org/2000/svg", "rect"), r._element.setAttribute("x", String(i)), r._element.setAttribute("y", String(u)), r._element.setAttribute("width", String(e)), r._element.setAttribute("height", String(e));
            } }));
          }, d.prototype._basicSideRounded = function(t) {
            var r = this, e = t.size, i = t.x, u = t.y;
            this._rotateFigure(H(H({}, t), { draw: function() {
              r._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), r._element.setAttribute("d", "M " + i + " " + u + "v " + e + "h " + e / 2 + "a " + e / 2 + " " + e / 2 + ", 0, 0, 0, 0 " + -e);
            } }));
          }, d.prototype._basicCornerRounded = function(t) {
            var r = this, e = t.size, i = t.x, u = t.y;
            this._rotateFigure(H(H({}, t), { draw: function() {
              r._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), r._element.setAttribute("d", "M " + i + " " + u + "v " + e + "h " + e + "v " + -e / 2 + "a " + e / 2 + " " + e / 2 + ", 0, 0, 0, " + -e / 2 + " " + -e / 2);
            } }));
          }, d.prototype._basicCornerExtraRounded = function(t) {
            var r = this, e = t.size, i = t.x, u = t.y;
            this._rotateFigure(H(H({}, t), { draw: function() {
              r._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), r._element.setAttribute("d", "M " + i + " " + u + "v " + e + "h " + e + "a " + e + " " + e + ", 0, 0, 0, " + -e + " " + -e);
            } }));
          }, d.prototype._basicCornersRounded = function(t) {
            var r = this, e = t.size, i = t.x, u = t.y;
            this._rotateFigure(H(H({}, t), { draw: function() {
              r._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), r._element.setAttribute("d", "M " + i + " " + u + "v " + e / 2 + "a " + e / 2 + " " + e / 2 + ", 0, 0, 0, " + e / 2 + " " + e / 2 + "h " + e / 2 + "v " + -e / 2 + "a " + e / 2 + " " + e / 2 + ", 0, 0, 0, " + -e / 2 + " " + -e / 2);
            } }));
          }, d.prototype._drawDot = function(t) {
            var r = t.x, e = t.y, i = t.size;
            this._basicDot({ x: r, y: e, size: i, rotation: 0 });
          }, d.prototype._drawSquare = function(t) {
            var r = t.x, e = t.y, i = t.size;
            this._basicSquare({ x: r, y: e, size: i, rotation: 0 });
          }, d.prototype._drawRounded = function(t) {
            var r = t.x, e = t.y, i = t.size, u = t.getNeighbor, s = u ? +u(-1, 0) : 0, p = u ? +u(1, 0) : 0, n = u ? +u(0, -1) : 0, a = u ? +u(0, 1) : 0, o = s + p + n + a;
            if (o !== 0)
              if (o > 2 || s && p || n && a)
                this._basicSquare({ x: r, y: e, size: i, rotation: 0 });
              else {
                if (o === 2) {
                  var l = 0;
                  return s && n ? l = Math.PI / 2 : n && p ? l = Math.PI : p && a && (l = -Math.PI / 2), void this._basicCornerRounded({ x: r, y: e, size: i, rotation: l });
                }
                if (o === 1)
                  return l = 0, n ? l = Math.PI / 2 : p ? l = Math.PI : a && (l = -Math.PI / 2), void this._basicSideRounded({ x: r, y: e, size: i, rotation: l });
              }
            else
              this._basicDot({ x: r, y: e, size: i, rotation: 0 });
          }, d.prototype._drawExtraRounded = function(t) {
            var r = t.x, e = t.y, i = t.size, u = t.getNeighbor, s = u ? +u(-1, 0) : 0, p = u ? +u(1, 0) : 0, n = u ? +u(0, -1) : 0, a = u ? +u(0, 1) : 0, o = s + p + n + a;
            if (o !== 0)
              if (o > 2 || s && p || n && a)
                this._basicSquare({ x: r, y: e, size: i, rotation: 0 });
              else {
                if (o === 2) {
                  var l = 0;
                  return s && n ? l = Math.PI / 2 : n && p ? l = Math.PI : p && a && (l = -Math.PI / 2), void this._basicCornerExtraRounded({ x: r, y: e, size: i, rotation: l });
                }
                if (o === 1)
                  return l = 0, n ? l = Math.PI / 2 : p ? l = Math.PI : a && (l = -Math.PI / 2), void this._basicSideRounded({ x: r, y: e, size: i, rotation: l });
              }
            else
              this._basicDot({ x: r, y: e, size: i, rotation: 0 });
          }, d.prototype._drawClassy = function(t) {
            var r = t.x, e = t.y, i = t.size, u = t.getNeighbor, s = u ? +u(-1, 0) : 0, p = u ? +u(1, 0) : 0, n = u ? +u(0, -1) : 0, a = u ? +u(0, 1) : 0;
            s + p + n + a !== 0 ? s || n ? p || a ? this._basicSquare({ x: r, y: e, size: i, rotation: 0 }) : this._basicCornerRounded({ x: r, y: e, size: i, rotation: Math.PI / 2 }) : this._basicCornerRounded({ x: r, y: e, size: i, rotation: -Math.PI / 2 }) : this._basicCornersRounded({ x: r, y: e, size: i, rotation: Math.PI / 2 });
          }, d.prototype._drawClassyRounded = function(t) {
            var r = t.x, e = t.y, i = t.size, u = t.getNeighbor, s = u ? +u(-1, 0) : 0, p = u ? +u(1, 0) : 0, n = u ? +u(0, -1) : 0, a = u ? +u(0, 1) : 0;
            s + p + n + a !== 0 ? s || n ? p || a ? this._basicSquare({ x: r, y: e, size: i, rotation: 0 }) : this._basicCornerExtraRounded({ x: r, y: e, size: i, rotation: Math.PI / 2 }) : this._basicCornerExtraRounded({ x: r, y: e, size: i, rotation: -Math.PI / 2 }) : this._basicCornersRounded({ x: r, y: e, size: i, rotation: Math.PI / 2 });
          }, d;
        }();
        var rt = function() {
          return (rt = Object.assign || function(d) {
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
            var r, e = t.x, i = t.y, u = t.size, s = t.rotation, p = s === void 0 ? 0 : s, n = e + u / 2, a = i + u / 2;
            (0, t.draw)(), (r = this._element) === null || r === void 0 || r.setAttribute("transform", "rotate(" + 180 * p / Math.PI + "," + n + "," + a + ")");
          }, d.prototype._basicDot = function(t) {
            var r = this, e = t.size, i = t.x, u = t.y, s = e / 7;
            this._rotateFigure(rt(rt({}, t), { draw: function() {
              r._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), r._element.setAttribute("clip-rule", "evenodd"), r._element.setAttribute("d", "M " + (i + e / 2) + " " + u + "a " + e / 2 + " " + e / 2 + " 0 1 0 0.1 0zm 0 " + s + "a " + (e / 2 - s) + " " + (e / 2 - s) + " 0 1 1 -0.1 0Z");
            } }));
          }, d.prototype._basicSquare = function(t) {
            var r = this, e = t.size, i = t.x, u = t.y, s = e / 7;
            this._rotateFigure(rt(rt({}, t), { draw: function() {
              r._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), r._element.setAttribute("clip-rule", "evenodd"), r._element.setAttribute("d", "M " + i + " " + u + "v " + e + "h " + e + "v " + -e + "zM " + (i + s) + " " + (u + s) + "h " + (e - 2 * s) + "v " + (e - 2 * s) + "h " + (2 * s - e) + "z");
            } }));
          }, d.prototype._basicExtraRounded = function(t) {
            var r = this, e = t.size, i = t.x, u = t.y, s = e / 7;
            this._rotateFigure(rt(rt({}, t), { draw: function() {
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
            var r, e = t.x, i = t.y, u = t.size, s = t.rotation, p = s === void 0 ? 0 : s, n = e + u / 2, a = i + u / 2;
            (0, t.draw)(), (r = this._element) === null || r === void 0 || r.setAttribute("transform", "rotate(" + 180 * p / Math.PI + "," + n + "," + a + ")");
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
                n(e.next(a));
              } catch (o) {
                u(o);
              }
            }
            function p(a) {
              try {
                n(e.throw(a));
              } catch (o) {
                u(o);
              }
            }
            function n(a) {
              var o;
              a.done ? i(a.value) : (o = a.value, o instanceof r ? o : new r(function(l) {
                l(o);
              })).then(s, p);
            }
            n((e = e.apply(d, t || [])).next());
          });
        }, xt = function(d, t) {
          var r, e, i, u, s = { label: 0, sent: function() {
            if (1 & i[0])
              throw i[1];
            return i[1];
          }, trys: [], ops: [] };
          return u = { next: p(0), throw: p(1), return: p(2) }, typeof Symbol == "function" && (u[Symbol.iterator] = function() {
            return this;
          }), u;
          function p(n) {
            return function(a) {
              return function(o) {
                if (r)
                  throw new TypeError("Generator is already executing.");
                for (; s; )
                  try {
                    if (r = 1, e && (i = 2 & o[0] ? e.return : o[0] ? e.throw || ((i = e.return) && i.call(e), 0) : e.next) && !(i = i.call(e, o[1])).done)
                      return i;
                    switch (e = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return s.label++, { value: o[1], done: !1 };
                      case 5:
                        s.label++, e = o[1], o = [0];
                        continue;
                      case 7:
                        o = s.ops.pop(), s.trys.pop();
                        continue;
                      default:
                        if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || o[0] !== 6 && o[0] !== 2)) {
                          s = 0;
                          continue;
                        }
                        if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) {
                          s.label = o[1];
                          break;
                        }
                        if (o[0] === 6 && s.label < i[1]) {
                          s.label = i[1], i = o;
                          break;
                        }
                        if (i && s.label < i[2]) {
                          s.label = i[2], s.ops.push(o);
                          break;
                        }
                        i[2] && s.ops.pop(), s.trys.pop();
                        continue;
                    }
                    o = t.call(d, s);
                  } catch (l) {
                    o = [6, l], e = 0;
                  } finally {
                    r = i = 0;
                  }
                if (5 & o[0])
                  throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              }([n, a]);
            };
          }
        }, lt = [[1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1]], ct = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]];
        const _t = function() {
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
              var r, e, i, u, s, p, n, a, o, l, h = this;
              return xt(this, function(y) {
                switch (y.label) {
                  case 0:
                    return r = t.getModuleCount(), e = Math.min(this._options.width, this._options.height) - 2 * this._options.margin, i = this._options.shape === dt ? e / Math.sqrt(2) : e, u = Math.floor(i / r), s = { hideXDots: 0, hideYDots: 0, width: 0, height: 0 }, this._qr = t, this._options.image ? [4, this.loadImage()] : [3, 2];
                  case 1:
                    if (y.sent(), !this._image)
                      return [2];
                    p = this._options, n = p.imageOptions, a = p.qrOptions, o = n.imageSize * $[a.errorCorrectionLevel], l = Math.floor(o * r * r), s = function(_) {
                      var g = _.originalHeight, S = _.originalWidth, D = _.maxHiddenDots, B = _.maxHiddenAxisDots, T = _.dotSize, O = { x: 0, y: 0 }, R = { x: 0, y: 0 };
                      if (g <= 0 || S <= 0 || D <= 0 || T <= 0)
                        return { height: 0, width: 0, hideYDots: 0, hideXDots: 0 };
                      var q = g / S;
                      return O.x = Math.floor(Math.sqrt(D / q)), O.x <= 0 && (O.x = 1), B && B < O.x && (O.x = B), O.x % 2 == 0 && O.x--, R.x = O.x * T, O.y = 1 + 2 * Math.ceil((O.x * q - 1) / 2), R.y = Math.round(R.x * q), (O.y * O.x > D || B && B < O.y) && (B && B < O.y ? (O.y = B, O.y % 2 == 0 && O.x--) : O.y -= 2, R.y = O.y * T, O.x = 1 + 2 * Math.ceil((O.y / q - 1) / 2), R.x = Math.round(R.y / q)), { height: R.y, width: R.x, hideYDots: O.y, hideXDots: O.x };
                    }({ originalWidth: this._image.width, originalHeight: this._image.height, maxHiddenDots: l, maxHiddenAxisDots: r - 14, dotSize: u }), y.label = 2;
                  case 2:
                    return this.drawBackground(), this.drawDots(function(_, g) {
                      var S, D, B, T, O, R;
                      return !(h._options.imageOptions.hideBackgroundDots && _ >= (r - s.hideXDots) / 2 && _ < (r + s.hideXDots) / 2 && g >= (r - s.hideYDots) / 2 && g < (r + s.hideYDots) / 2 || !((S = lt[_]) === null || S === void 0) && S[g] || !((D = lt[_ - r + 7]) === null || D === void 0) && D[g] || !((B = lt[_]) === null || B === void 0) && B[g - r + 7] || !((T = ct[_]) === null || T === void 0) && T[g] || !((O = ct[_ - r + 7]) === null || O === void 0) && O[g] || !((R = ct[_]) === null || R === void 0) && R[g - r + 7]);
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
                var n = Math.min(u.width, u.height), a = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                this._backgroundClipPath = document.createElementNS("http://www.w3.org/2000/svg", "clipPath"), this._backgroundClipPath.setAttribute("id", "clip-path-background-color"), this._defs.appendChild(this._backgroundClipPath), a.setAttribute("x", String((u.width - n) / 2)), a.setAttribute("y", String((u.height - n) / 2)), a.setAttribute("width", String(n)), a.setAttribute("height", String(n)), a.setAttribute("rx", String(n / 2 * u.backgroundOptions.round)), this._backgroundClipPath.appendChild(a);
              }
            }
          }, d.prototype.drawDots = function(t) {
            var r, e, i = this;
            if (!this._qr)
              throw "QR code is not defined";
            var u = this._options, s = this._qr.getModuleCount();
            if (s > u.width || s > u.height)
              throw "The canvas is too small.";
            var p = Math.min(u.width, u.height) - 2 * u.margin, n = u.shape === dt ? p / Math.sqrt(2) : p, a = Math.floor(n / s), o = Math.floor((u.width - s * a) / 2), l = Math.floor((u.height - s * a) / 2), h = new ut({ svg: this._element, type: u.dotsOptions.type });
            this._dotsClipPath = document.createElementNS("http://www.w3.org/2000/svg", "clipPath"), this._dotsClipPath.setAttribute("id", "clip-path-dot-color"), this._defs.appendChild(this._dotsClipPath), this._createColor({ options: (r = u.dotsOptions) === null || r === void 0 ? void 0 : r.gradient, color: u.dotsOptions.color, additionalRotation: 0, x: 0, y: 0, height: u.height, width: u.width, name: "dot-color" });
            for (var y = function(G) {
              for (var N = function(F) {
                return t && !t(G, F) ? "continue" : !((e = _._qr) === null || e === void 0) && e.isDark(G, F) ? (h.draw(o + G * a, l + F * a, a, function(Y, J) {
                  return !(G + Y < 0 || F + J < 0 || G + Y >= s || F + J >= s) && !(t && !t(G + Y, F + J)) && !!i._qr && i._qr.isDark(G + Y, F + J);
                }), void (h._element && _._dotsClipPath && _._dotsClipPath.appendChild(h._element))) : "continue";
              }, X = 0; X < s; X++)
                N(X);
            }, _ = this, g = 0; g < s; g++)
              y(g);
            if (u.shape === dt) {
              var S = Math.floor((p / a - s) / 2), D = s + 2 * S, B = o - S * a, T = l - S * a, O = [], R = Math.floor(D / 2);
              for (g = 0; g < D; g++) {
                O[g] = [];
                for (var q = 0; q < D; q++)
                  g >= S - 1 && g <= D - S && q >= S - 1 && q <= D - S || Math.sqrt((g - R) * (g - R) + (q - R) * (q - R)) > R ? O[g][q] = 0 : O[g][q] = this._qr.isDark(q - 2 * S < 0 ? q : q >= s ? q - 2 * S : q - S, g - 2 * S < 0 ? g : g >= s ? g - 2 * S : g - S) ? 1 : 0;
              }
              var L = function(G) {
                for (var N = function(F) {
                  if (!O[G][F])
                    return "continue";
                  h.draw(B + G * a, T + F * a, a, function(Y, J) {
                    var K;
                    return !!(!((K = O[G + Y]) === null || K === void 0) && K[F + J]);
                  }), h._element && nt._dotsClipPath && nt._dotsClipPath.appendChild(h._element);
                }, X = 0; X < D; X++)
                  N(X);
              }, nt = this;
              for (g = 0; g < D; g++)
                L(g);
            }
          }, d.prototype.drawCorners = function() {
            var t = this;
            if (!this._qr)
              throw "QR code is not defined";
            var r = this._element, e = this._options;
            if (!r)
              throw "Element code is not defined";
            var i = this._qr.getModuleCount(), u = Math.min(e.width, e.height) - 2 * e.margin, s = e.shape === dt ? u / Math.sqrt(2) : u, p = Math.floor(s / i), n = 7 * p, a = 3 * p, o = Math.floor((e.width - i * p) / 2), l = Math.floor((e.height - i * p) / 2);
            [[0, 0, 0], [1, 0, Math.PI / 2], [0, 1, -Math.PI / 2]].forEach(function(h) {
              var y, _, g, S, D, B, T, O, R, q, L, nt, G = h[0], N = h[1], X = h[2], F = o + G * p * (i - 7), Y = l + N * p * (i - 7), J = t._dotsClipPath, K = t._dotsClipPath;
              if ((!((y = e.cornersSquareOptions) === null || y === void 0) && y.gradient || !((_ = e.cornersSquareOptions) === null || _ === void 0) && _.color) && ((J = document.createElementNS("http://www.w3.org/2000/svg", "clipPath")).setAttribute("id", "clip-path-corners-square-color-" + G + "-" + N), t._defs.appendChild(J), t._cornersSquareClipPath = t._cornersDotClipPath = K = J, t._createColor({ options: (g = e.cornersSquareOptions) === null || g === void 0 ? void 0 : g.gradient, color: (S = e.cornersSquareOptions) === null || S === void 0 ? void 0 : S.color, additionalRotation: X, x: F, y: Y, height: n, width: n, name: "corners-square-color-" + G + "-" + N })), (D = e.cornersSquareOptions) === null || D === void 0 ? void 0 : D.type) {
                var ot = new st({ svg: t._element, type: e.cornersSquareOptions.type });
                ot.draw(F, Y, n, X), ot._element && J && J.appendChild(ot._element);
              } else
                for (var pt = new ut({ svg: t._element, type: e.dotsOptions.type }), It = function(ht) {
                  for (var At = function(vt) {
                    if (!(!((B = lt[ht]) === null || B === void 0) && B[vt]))
                      return "continue";
                    pt.draw(F + ht * p, Y + vt * p, p, function(Pt, Ot) {
                      var mt;
                      return !!(!((mt = lt[ht + Pt]) === null || mt === void 0) && mt[vt + Ot]);
                    }), pt._element && J && J.appendChild(pt._element);
                  }, gt = 0; gt < lt[ht].length; gt++)
                    At(gt);
                }, ft = 0; ft < lt.length; ft++)
                  It(ft);
              if ((!((T = e.cornersDotOptions) === null || T === void 0) && T.gradient || !((O = e.cornersDotOptions) === null || O === void 0) && O.color) && ((K = document.createElementNS("http://www.w3.org/2000/svg", "clipPath")).setAttribute("id", "clip-path-corners-dot-color-" + G + "-" + N), t._defs.appendChild(K), t._cornersDotClipPath = K, t._createColor({ options: (R = e.cornersDotOptions) === null || R === void 0 ? void 0 : R.gradient, color: (q = e.cornersDotOptions) === null || q === void 0 ? void 0 : q.color, additionalRotation: X, x: F + 2 * p, y: Y + 2 * p, height: a, width: a, name: "corners-dot-color-" + G + "-" + N })), (L = e.cornersDotOptions) === null || L === void 0 ? void 0 : L.type) {
                var St = new bt({ svg: t._element, type: e.cornersDotOptions.type });
                St.draw(F + 2 * p, Y + 2 * p, a, X), St._element && K && K.appendChild(St._element);
              } else {
                pt = new ut({ svg: t._element, type: e.dotsOptions.type });
                var Rt = function(ht) {
                  for (var At = function(vt) {
                    if (!(!((nt = ct[ht]) === null || nt === void 0) && nt[vt]))
                      return "continue";
                    pt.draw(F + ht * p, Y + vt * p, p, function(Pt, Ot) {
                      var mt;
                      return !!(!((mt = ct[ht + Pt]) === null || mt === void 0) && mt[vt + Ot]);
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
              var s, p, n, a, o, l, h, y, _;
              return xt(this, function(g) {
                switch (g.label) {
                  case 0:
                    return s = this._options, p = Math.floor((s.width - i * u) / 2), n = Math.floor((s.height - i * u) / 2), a = p + s.imageOptions.margin + (i * u - r) / 2, o = n + s.imageOptions.margin + (i * u - e) / 2, l = r - 2 * s.imageOptions.margin, h = e - 2 * s.imageOptions.margin, (y = document.createElementNS("http://www.w3.org/2000/svg", "image")).setAttribute("x", String(a)), y.setAttribute("y", String(o)), y.setAttribute("width", l + "px"), y.setAttribute("height", h + "px"), [4, et(s.image || "")];
                  case 1:
                    return _ = g.sent(), y.setAttribute("href", _ || ""), this._element.appendChild(y), [2];
                }
              });
            });
          }, d.prototype._createColor = function(t) {
            var r = t.options, e = t.color, i = t.additionalRotation, u = t.x, s = t.y, p = t.height, n = t.width, a = t.name, o = n > p ? n : p, l = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            if (l.setAttribute("x", String(u)), l.setAttribute("y", String(s)), l.setAttribute("height", String(p)), l.setAttribute("width", String(n)), l.setAttribute("clip-path", "url('#clip-path-" + a + "')"), r) {
              var h;
              if (r.type === "radial")
                (h = document.createElementNS("http://www.w3.org/2000/svg", "radialGradient")).setAttribute("id", a), h.setAttribute("gradientUnits", "userSpaceOnUse"), h.setAttribute("fx", String(u + n / 2)), h.setAttribute("fy", String(s + p / 2)), h.setAttribute("cx", String(u + n / 2)), h.setAttribute("cy", String(s + p / 2)), h.setAttribute("r", String(o / 2));
              else {
                var y = ((r.rotation || 0) + i) % (2 * Math.PI), _ = (y + 2 * Math.PI) % (2 * Math.PI), g = u + n / 2, S = s + p / 2, D = u + n / 2, B = s + p / 2;
                _ >= 0 && _ <= 0.25 * Math.PI || _ > 1.75 * Math.PI && _ <= 2 * Math.PI ? (g -= n / 2, S -= p / 2 * Math.tan(y), D += n / 2, B += p / 2 * Math.tan(y)) : _ > 0.25 * Math.PI && _ <= 0.75 * Math.PI ? (S -= p / 2, g -= n / 2 / Math.tan(y), B += p / 2, D += n / 2 / Math.tan(y)) : _ > 0.75 * Math.PI && _ <= 1.25 * Math.PI ? (g += n / 2, S += p / 2 * Math.tan(y), D -= n / 2, B -= p / 2 * Math.tan(y)) : _ > 1.25 * Math.PI && _ <= 1.75 * Math.PI && (S += p / 2, g += n / 2 / Math.tan(y), B -= p / 2, D -= n / 2 / Math.tan(y)), (h = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient")).setAttribute("id", a), h.setAttribute("gradientUnits", "userSpaceOnUse"), h.setAttribute("x1", String(Math.round(g))), h.setAttribute("y1", String(Math.round(S))), h.setAttribute("x2", String(Math.round(D))), h.setAttribute("y2", String(Math.round(B)));
              }
              r.colorStops.forEach(function(T) {
                var O = T.offset, R = T.color, q = document.createElementNS("http://www.w3.org/2000/svg", "stop");
                q.setAttribute("offset", 100 * O + "%"), q.setAttribute("stop-color", R), h.appendChild(q);
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
        var b = Q(192), k = Q.n(b), x = function(d, t, r, e) {
          return new (r || (r = Promise))(function(i, u) {
            function s(a) {
              try {
                n(e.next(a));
              } catch (o) {
                u(o);
              }
            }
            function p(a) {
              try {
                n(e.throw(a));
              } catch (o) {
                u(o);
              }
            }
            function n(a) {
              var o;
              a.done ? i(a.value) : (o = a.value, o instanceof r ? o : new r(function(l) {
                l(o);
              })).then(s, p);
            }
            n((e = e.apply(d, t || [])).next());
          });
        }, M = function(d, t) {
          var r, e, i, u, s = { label: 0, sent: function() {
            if (1 & i[0])
              throw i[1];
            return i[1];
          }, trys: [], ops: [] };
          return u = { next: p(0), throw: p(1), return: p(2) }, typeof Symbol == "function" && (u[Symbol.iterator] = function() {
            return this;
          }), u;
          function p(n) {
            return function(a) {
              return function(o) {
                if (r)
                  throw new TypeError("Generator is already executing.");
                for (; s; )
                  try {
                    if (r = 1, e && (i = 2 & o[0] ? e.return : o[0] ? e.throw || ((i = e.return) && i.call(e), 0) : e.next) && !(i = i.call(e, o[1])).done)
                      return i;
                    switch (e = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return s.label++, { value: o[1], done: !1 };
                      case 5:
                        s.label++, e = o[1], o = [0];
                        continue;
                      case 7:
                        o = s.ops.pop(), s.trys.pop();
                        continue;
                      default:
                        if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || o[0] !== 6 && o[0] !== 2)) {
                          s = 0;
                          continue;
                        }
                        if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) {
                          s.label = o[1];
                          break;
                        }
                        if (o[0] === 6 && s.label < i[1]) {
                          s.label = i[1], i = o;
                          break;
                        }
                        if (i && s.label < i[2]) {
                          s.label = i[2], s.ops.push(o);
                          break;
                        }
                        i[2] && s.ops.pop(), s.trys.pop();
                        continue;
                    }
                    o = t.call(d, s);
                  } catch (l) {
                    o = [6, l], e = 0;
                  } finally {
                    r = i = 0;
                  }
                if (5 & o[0])
                  throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              }([n, a]);
            };
          }
        };
        const W = function() {
          function d(t) {
            this._options = t ? c(V(m, t)) : m, this.update();
          }
          return d._clearContainer = function(t) {
            t && (t.innerHTML = "");
          }, d.prototype._setupSvg = function() {
            var t = this;
            if (this._qr) {
              var r = new _t(this._options);
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
                    var n, a;
                    (a = (n = r._canvas) === null || n === void 0 ? void 0 : n.getContext("2d")) === null || a === void 0 || a.drawImage(s, 0, 0), p();
                  }, s.src = u;
                });
              }
            }));
          }, d.prototype._getElement = function(t) {
            return t === void 0 && (t = "png"), x(this, void 0, void 0, function() {
              return M(this, function(r) {
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
            d._clearContainer(this._container), this._options = t ? c(V(this._options, t)) : this._options, this._options.data && (this._qr = k()(this._options.qrOptions.typeNumber, this._options.qrOptions.errorCorrectionLevel), this._qr.addData(this._options.data, this._options.qrOptions.mode || function(r) {
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
            return t === void 0 && (t = "png"), x(this, void 0, void 0, function() {
              var r, e, i;
              return M(this, function(u) {
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
            return x(this, void 0, void 0, function() {
              var r, e, i, u, s;
              return M(this, function(p) {
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
        return j[C](P, P.exports, A), P.exports;
      }
      return A.n = (C) => {
        var P = C && C.__esModule ? () => C.default : () => C;
        return A.d(P, { a: P }), P;
      }, A.d = (C, P) => {
        for (var Q in P)
          A.o(P, Q) && !A.o(C, Q) && Object.defineProperty(C, Q, { enumerable: !0, get: P[Q] });
      }, A.o = (C, P) => Object.prototype.hasOwnProperty.call(C, P), A(676);
    })().default;
  });
})(zt);
var Nt = zt.exports;
const jt = /* @__PURE__ */ Lt(Nt), Tt = `[popover]{position:fixed;z-index:2147483647;top:0;right:0;bottom:0;left:0;padding:.25em;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;border-width:medium;border-width:initial;border-color:currentColor;border-color:initial;-o-border-image:none;border-image:none;-o-border-image:initial;border-image:initial;border-style:solid;background-color:canvas;color:canvastext;overflow:auto;margin:auto}[popover]:not(.\\:popover-open){display:none}dialog[popover][open]{display:revert}[anchor].\\:popover-open{top:auto;right:auto;bottom:auto;left:auto}@supports selector([popover]:open){[popover]:not(.\\:popover-open):not(dialog[open]){display:revert}[anchor]:open{top:auto;right:auto;bottom:auto;left:auto}}@supports selector([popover]:popover-open){[popover]:not(.\\:popover-open):not(dialog[open]){display:revert}[anchor]:popover-open{top:auto;right:auto;bottom:auto;left:auto}}@supports not (background-color: canvas){[popover]{background-color:#fff;color:#000}}@supports (width: -moz-fit-content){[popover]{width:-moz-fit-content;height:-moz-fit-content}}@supports not (inset: 0){[popover]{top:0;left:0;right:0;bottom:0}}.root>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin:auto;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100vh;width:100vw}.root>div>div{margin:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center;width:calc(100% - 2em);max-width:calc(350px + 1em);-webkit-box-flex:1;-ms-flex:1;flex:1}label{position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden}button,input[type=url]{padding:5px;margin-bottom:2em;width:calc(100% - 1em);white-space:nowrap}button{margin-top:2em}#QRContainer canvas{width:300px;margin-bottom:2em}#ThemePopover{position:fixed;background-color:#fff;margin:0;width:120px;top:40px;border:0;border-radius:0;border-radius:var(--dialog-border-radius, 0);-webkit-box-shadow:2px 2px 5px hsla(220,3%,23%,.3);box-shadow:2px 2px 5px #393a3c4d;-webkit-box-shadow:var(--dialog-box-shadow, 2px 2px 5px hsla(220, 3%, 23%, .3));box-shadow:var(--dialog-box-shadow, 2px 2px 5px hsla(220, 3%, 23%, .3))}p-top-nav{position:fixed}p-top-nav-item button{border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;font:inherit;margin:0;outline:none;cursor:pointer}input[type=submit],a[role=button],button{background-color:var(--color-munsell-green);border:1px solid transparent;border-radius:var(--border-radius-button);color:var(--color-white);cursor:pointer;display:inline-block;font-family:var(--ff-default);font-size:var(--font-size-button);font-weight:var(--fw-semibold);letter-spacing:normal;line-height:var(--line-height-input-and-buttons);padding:.8rem 3.2rem;-webkit-text-decoration:none;text-decoration:none;text-indent:0px;text-shadow:none;text-transform:none;-webkit-transition:color .2s ease-in-out,border .2s ease-in-out,background .3s ease-in-out;transition:color .2s ease-in-out,border .2s ease-in-out,background .3s ease-in-out;word-spacing:normal;-webkit-appearance:button;-moz-appearance:button;appearance:button}input[type=submit]:hover,input[type=submit]:focus,a[role=button]:hover,a[role=button]:focus,button:hover,button:focus{background-color:var(--color-munsell-green-darker)}input[type=submit]:not(.primary-button),a[role=button]:not(.primary-button),button:not(.primary-button){background-color:var(--color-white);color:var(--color-munsell-green)}input[type=submit]:not(.primary-button):hover,input[type=submit]:not(.primary-button):focus,a[role=button]:not(.primary-button):hover,a[role=button]:not(.primary-button):focus,button:not(.primary-button):hover,button:not(.primary-button):focus{background-color:var(--color-white);color:var(--color-munsell-green-darker)}#UrlInput{border:1px solid var(--color-manatee-lighter);border-radius:.4rem;border-radius:var(--border-radius-xs);padding:.8em 1.6em;width:calc(100% - 3.8em)}
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
var $t = Object.defineProperty, Qt = Object.getOwnPropertyDescriptor, Bt = (E, z, j, I) => {
  for (var A = I > 1 ? void 0 : I ? Qt(z, j) : z, C = E.length - 1, P; C >= 0; C--)
    (P = E[C]) && (A = (I ? P(z, j, A) : P(A)) || A);
  return I && A && $t(z, j, A), A;
};
let Dt = class extends CustomElement {
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
    ), /* @__PURE__ */ Maquette.h("div", { id: "QRContainer", afterCreate: this.onCreateQRElement }), /* @__PURE__ */ Maquette.h("button", { class: "primary-button", onclick: this.onDownloadButtonClick }, "Download QR code"))), this.onMenuItemClick = async ({ target: C }) => {
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
      var Q;
      const P = C.target;
      this.url = P.value, this.defaultStyling = { ...this.defaultStyling, data: this.url }, (Q = this.qrCode) == null || Q.update(this.defaultStyling);
    }, this.onDownloadButtonClick = async () => {
      var Q, it;
      let C = this.url;
      this.url.indexOf("//") > 0 && (C = this.url.split("//")[1]), C = this.url.split("//")[1].replaceAll(":", "-").replaceAll("/", "-").replaceAll("?", "-").replaceAll(".", "-").replaceAll("/", "-");
      const P = (it = (Q = this.qrCode) == null ? void 0 : Q._svg) == null ? void 0 : it.outerHTML;
      if (P) {
        const Z = P.replace(
          "<svg ",
          '<svg xmlns="http://www.w3.org/2000/svg" '
        );
        if (!window.showSaveFilePicker) {
          const et = new Blob([Z], { type: "image/svg+xml" }), $ = URL.createObjectURL(et), H = document.createElement("a");
          H.href = $, H.download = C, H.click();
          return;
        }
        const U = {
          suggestedName: C,
          types: [
            {
              description: "SVG Files",
              accept: { "application/svg+xml": [".svg"] }
            }
          ]
        }, V = await window.showSaveFilePicker(U).catch((et) => et);
        if (V instanceof Error)
          return;
        const tt = await V.createWritable();
        await tt.write(Z), await tt.close();
      }
    };
    const z = this.templateFromString(
      `<style>${Tt}</style><div class="root"></div>`
    );
    this.qrCode = new jt(this.defaultStyling), (I = this.shadowRoot) == null || I.appendChild(z);
    const j = (A = this.shadowRoot) == null ? void 0 : A.querySelector(".root");
    j && this.createProjector(j, this.render), this.initThemes();
  }
  async initThemes() {
    this.themes = await this.themeService.getThemes();
  }
  get themePopover() {
    var E;
    return this.shadowRoot ? (E = this.shadowRoot) == null ? void 0 : E.querySelector("#ThemePopover") : null;
  }
  set theme(E) {
    if (!this.themes.find((j) => j.name === E))
      return;
    const z = this.themes.find((j) => j.name === E);
    this.url = z.url, this.qrCode && (this.qrCode.update(z.options), this.qrCode.update({ data: this.url }));
  }
};
Bt([
  RenderOnSet
], Dt.prototype, "themes", 2);
Dt = Bt([
  CustomElementConfig({
    tagName: "p-qr-code-generator"
  })
], Dt);
const Ht = `dialog::-ms-backdrop{background:rgba(0,0,0,.5);background:var(--backdrop-color, rgba(0, 0, 0, .5));-webkit-backdrop-filter:blur(1px);backdrop-filter:blur(1px);-webkit-backdrop-filter:var(--backdrop-filter, blur(1px));backdrop-filter:var(--backdrop-filter, blur(1px))}dialog::backdrop{background:rgba(0,0,0,.5);background:var(--backdrop-color, rgba(0, 0, 0, .5));-webkit-backdrop-filter:blur(1px);backdrop-filter:blur(1px);-webkit-backdrop-filter:var(--backdrop-filter, blur(1px));backdrop-filter:var(--backdrop-filter, blur(1px))}dialog[open]{background:Canvas;background:var(--dialog-background, Canvas);color:CanvasText;color:var(--dialog-color, CanvasText);border:1px solid ButtonBorder;border:1px solid var(--dialog-border-color, ButtonBorder);border-radius:0;border-radius:var(--dialog-border-radius, 0);-webkit-box-shadow:2px 2px 5px hsla(220,3%,23%,.3);box-shadow:2px 2px 5px #393a3c4d;-webkit-box-shadow:var(--dialog-box-shadow, 2px 2px 5px hsla(220, 3%, 23%, .3));box-shadow:var(--dialog-box-shadow, 2px 2px 5px hsla(220, 3%, 23%, .3));width:480px;max-width:calc(100vw - 40px);outline:none}.dialog-content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:var(--gap-sm);margin:var(--gap-xs)}.dialog-header-container ::slotted(*){font:var(--dialog-header-font);margin:0}.dialog-body-container ::slotted(*){font:var(--dialog-body-font);margin:0}.dialog-footer-container ::slotted(*){font:var(--dialog-footer-font);margin:0}.dialog-footer-container slot{display:-webkit-box;display:-ms-flexbox;display:flex;gap:var(--gap-sm)}.dialog-title{font:var(--dialog-header-font);margin:0}
`;
async function Ut(E, z) {
  return z || (z = document), new Promise((j, I) => {
    const A = setInterval(() => {
      const C = z == null ? void 0 : z.querySelector(E);
      C && (clearInterval(A), j(C));
    }, 100);
    setTimeout(() => {
      clearInterval(A), I(new Error(`Element ${E} not found`));
    }, 1e4);
  });
}
var Gt = Object.defineProperty, Xt = Object.getOwnPropertyDescriptor, Yt = (E, z, j, I) => {
  for (var A = I > 1 ? void 0 : I ? Xt(z, j) : z, C = E.length - 1, P; C >= 0; C--)
    (P = E[C]) && (A = (I ? P(z, j, A) : P(A)) || A);
  return I && A && Gt(z, j, A), A;
};
let Mt = class extends CustomElement {
  constructor() {
    var j, I;
    super(), this.render = () => /* @__PURE__ */ Maquette.h("dialog", null, /* @__PURE__ */ Maquette.h("div", { class: "dialog-content" }, /* @__PURE__ */ Maquette.h("div", { class: "dialog-header-container" }, /* @__PURE__ */ Maquette.h("slot", { name: "header" })), /* @__PURE__ */ Maquette.h("div", { class: "dialog-body-container" }, /* @__PURE__ */ Maquette.h("slot", null)), /* @__PURE__ */ Maquette.h("div", { class: "dialog-footer-container" }, /* @__PURE__ */ Maquette.h("slot", { name: "footer" }))));
    const E = this.templateFromString(
      `<style>${Ht}</style><div></div>`,
      !0
    );
    (j = this.shadowRoot) == null || j.appendChild(E);
    const z = (I = this.shadowRoot) == null ? void 0 : I.querySelector("div");
    z && this.createProjector(z, this.render);
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
  static createPromptDialog(E, z, j) {
    const I = document.createElement("p-dialog"), A = Maquette.createProjector(), C = document.createElement("header"), P = document.createElement("main");
    return C.textContent = E, C.slot = "header", A.merge(P, () => z), j.forEach((Q) => I.appendChild(Q)), I.appendChild(C), I.appendChild(P), I;
  }
  static stringsToButtons(E, z) {
    return E.map((j, I) => {
      const A = document.createElement("button");
      return A.textContent = j, A.slot = "footer", A.classList.add("button"), A.classList.add(I === 0 ? "primary-button" : "secondary-button"), A.addEventListener("click", z), A;
    });
  }
  static async prompt(E, z, j = ["OK"]) {
    let I;
    const A = new Promise((Z) => {
      I = Z;
    }), C = (Z) => {
      var V;
      const U = Z.target;
      I(U != null && U.textContent ? U.textContent : ""), (V = U == null ? void 0 : U.closest("p-dialog")) == null || V.close(), Z.preventDefault();
    }, P = Mt.stringsToButtons(
      j,
      C
    ), Q = Mt.createPromptDialog(
      E,
      z,
      P
    );
    document.body.appendChild(Q);
    const it = await Q.dialogElement;
    return it.addEventListener("cancel", (Z) => Z.preventDefault()), it.addEventListener(
      "close",
      () => {
        var Z;
        return (Z = Q == null ? void 0 : Q.parentElement) == null ? void 0 : Z.removeChild(Q);
      }
    ), it.showModal(), A;
  }
};
Mt = Yt([
  CustomElementConfig({
    tagName: "p-dialog"
  })
], Mt);
const Wt = `:host{display:block;width:100%}:host #List{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;gap:1em}:host #List ::slotted(:not([slot])){vertical-align:top}
`;
var Jt = Object.defineProperty, Kt = Object.getOwnPropertyDescriptor, Zt = (E, z, j, I) => {
  for (var A = I > 1 ? void 0 : I ? Kt(z, j) : z, C = E.length - 1, P; C >= 0; C--)
    (P = E[C]) && (A = (I ? P(z, j, A) : P(A)) || A);
  return I && A && Jt(z, j, A), A;
};
let qt = class extends CustomElement {
  constructor() {
    var z;
    super();
    const E = this.templateFromString(
      `<style>${Wt}</style>
      <div id="List"><slot></slot></div>`,
      !0
    );
    (z = this.shadowRoot) == null || z.appendChild(E);
  }
};
qt = Zt([
  CustomElementConfig({
    tagName: "p-top-nav"
  })
], qt);
const Vt = `:host{font-weight:400;cursor:pointer}
`;
var te = Object.defineProperty, ee = Object.getOwnPropertyDescriptor, re = (E, z, j, I) => {
  for (var A = I > 1 ? void 0 : I ? ee(z, j) : z, C = E.length - 1, P; C >= 0; C--)
    (P = E[C]) && (A = (I ? P(z, j, A) : P(A)) || A);
  return I && A && te(z, j, A), A;
};
let Et = class extends CustomElement {
  constructor() {
    var z;
    super();
    const E = this.templateFromString(
      `<style>${Vt}</style>
      <div><slot></slot></div>`,
      !0
    );
    (z = this.shadowRoot) == null || z.appendChild(E);
  }
};
Et = re([
  CustomElementConfig({
    tagName: "p-top-nav-item"
  })
], Et);
let kt;
window.addEventListener("beforeinstallprompt", (E) => {
  E.preventDefault(), kt = E, oe();
});
async function oe() {
  if (await customElements.whenDefined("p-dialog"), await (await customElements.get(
    "p-dialog"
  )).prompt(
    "Installeren?",
    /* @__PURE__ */ Maquette.h("p", null, "QR Code generator installeren?"),
    ["Ja", "Nee, nu niet"]
  ) === "Ja") {
    kt.prompt();
    const { outcome: j } = await kt.userChoice;
    console.log(`User response to the install prompt: ${j}`), kt = null;
  }
}
