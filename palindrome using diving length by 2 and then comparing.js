let str = "A man, a plan, a canal. Panama";
function palindromeOrNot(data) {
  let res = /[^A-Za-z0-9]/g;
  data = data.toLowerCase().replace(res, "");
  let result = data.length;
  for (let i = 0; i < result / 2; i++) {
    if (data[i] !== data[result - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(palindromeOrNot(str));
