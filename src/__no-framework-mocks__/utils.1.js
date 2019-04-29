const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. ";
var t = s.split('');
t = Array.from(s);
console.log(t);

var voyelles = "aeiouy";
var filtre = voyelles;
var f = function (e) {
  if (filtre.includes(e))
    return true;
  else
    return false;
}
v = t.filter(f);
console.log(v);

tav = new Map();
Array.from(voyelles).forEach(e => { filtre = e; tav.set(e, t.filter(f).length) });
console.log(tav);

var o = 0;
var mfv;
var myMax = function (val, key, map) { if (val > o) { o = val; mfv = key; } }
maxv = tav.forEach(myMax);
console.log(mfv);