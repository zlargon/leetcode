module.exports = function Bits(string) {
  for (var i = 0; i < string.length; i++) {
    var c = string.charAt(i);
    if (c !== '0' && c !== '1') {
      return NaN;
    }
  }

  return Number.parseInt(string, 2);
}
