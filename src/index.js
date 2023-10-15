module.exports = function check(str, bracketsConfig) {

    let stack = [];
    let open = [];
    let close = [];
    let equally = [];

    bracketsConfig.map((el) => {
      if (el[0] === el[1]) {
        equally += el[0];
      } else {
        open += el[0];
        close += el[1];
      }
    });

    for (let i = 0; i < str.length; i++) {
      let closeInd = close.indexOf(str[i]);
      let equallyInd = equally.indexOf(str[i]);
      if (open.includes(str[i])) {
        stack.push(str[i]);
      } else if (close.includes(str[i])) {
        if (stack.length === 0) false;
        if (stack[stack.length - 1] === open[closeInd]) {
          stack.pop();
        } else {
          stack.push(str[i]);
        }
      } else if (equally.includes(str[i])) {
        if (stack[stack.length - 1] === equally[equallyInd]) {
          stack.pop();
        } else {
          stack.push(str[i]);
        }
      }
    }

  return stack.length === 0;
  };