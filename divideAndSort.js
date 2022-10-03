const divideAndSort = (num) => {
  if (typeof num !== "number") return "Input Invalid";
  if (num === 0) return "";

  return parseInt(
    num
      .toString()
      .split("0")
      .map((e) => e.split("").sort().join(""))
      .join("")
  );
};

// console.log(divideAndSort(12302310123));


const str = "jakarta"
console.log(str.split("").map(e =>{
    if(e === "a") e = "o"
}).join(""));