function heron(a, b, c) {
const s = (a + b + c)/2;
const area = (s * (s - a) * (s - b) * (s - c)) ** (1/2);
return area;
}