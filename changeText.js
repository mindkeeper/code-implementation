const changeText = (text) => {
  if (!text || typeof text !== "string") return "Input Invalid";
  let result = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== "a") {
      result += text[i];
      continue;
    }
    result += "o";
  }
  return result;
};

console.log(changeText("saya"));
