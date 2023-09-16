document.dispatchEvent(
    new KeyboardEvent("keydown", {
      key: "m", // it's the letter "l" and not the number "1"
      code: "KeyM",
      which: 77,
      keyCode: 77,
    })
  );
  