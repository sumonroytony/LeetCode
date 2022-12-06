function cond1(s) {
  for (var i = 0; i < s.length - 2; i++) {
    if (s[i] == s[i + 1] && s[i + 1] == s[i + 2]) return true;
  }
  return false;
}

// Returns true if s has three increasing or
// decreasing digits.

// Checks if a single digit occurs 4 times.
function cond3(s) {
  var a = new Array(10);
  a.fill(0);

  for (var i = 0; i < s.length; i++) a[s[i] - '0']++;

  for (var i = 0; i < 10; i++) if (a[i] >= 4) return true;

  return false;
}

function isFancy(s) {
  if (cond1(s) || cond3(s)) return true;
  else return false;
}

var n = '9088897541';
// var n = '9087837541';

// var s = to_string(n);
if (isFancy(n)) console.log('Yes');
else console.log('No');

// This code is contributed by SoumikMondal
