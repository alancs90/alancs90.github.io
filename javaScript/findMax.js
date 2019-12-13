
var numbers = [1, 2, 3, 4];

var max = 0;

for (var i = 0; i < numbers.length; i++) {
 if(numbers[i] > max) {
max = numbers[i];
}
return max;
}
