document.dispatchEvent(
  new KeyboardEvent("keydown", {
    key: "l", // it's the letter "l" and not the number "1"
    code: "KeyL",
    which: 76,
    keyCode: 76,
  })
);
