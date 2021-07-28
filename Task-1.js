function stringLength(string) {
  const len = string.length;
  if (len > 0 && len <= 10) {
    return string.length;
  }else{
    throw new Error("You suck")
}
}

module.exports = stringLength;
