/// first programm

let str = prompt("введите строу для первой программы");

function doublestr(str) {
  let doublestr = "";
  for (let i = 0; i < str.length; i++) {
    doublestr += (str[i] + str[i]);
  }

  console.log(doublestr);
}

doublestr(str);

//second programm

function padSrt(str, lngth, symbol, left) {
  let difference = lngth - str.length;
  if (difference > 0) {
    symbol = symbol.repeat(difference);
    if (left) {
      str = symbol + str;
    } else {
      str = str + symbol;
    }
    console.log(str);
  }
}

padSrt("Ivan", 10, "+", true);

/// third programm

function toCamelCase(str) {
  return str.split(' ').map(function (str1, position) {
    if (position == 0) {
      return console.log(str1.toLowerCase());

    }
    return str1.charAt(0).toUpperCase() + str1.slice(1).toLowerCase();
  }).join('');
}

console.log(toCamelCase("I will Be Back"));