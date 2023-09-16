function getThumbnailKey(youtubeObject) {
  let temp = ""; // empty String
  let found = false; // searching for "?v" in the youtube url since after that we have the key
  for (let i = 0; i < youtubeObject.url.length - 1; i++) {
    if (youtubeObject.url[i] === "?" && youtubeObject.url[i + 1] === "v") {
      found = true;
      i = i + 3;
    }
    if (found) {
      if (youtubeObject.url[i] === "&") break;
      temp += youtubeObject.url[i];
    }
  }
  return temp;
}

function getThumbnailKeyShorts(youtubeObject) {
  let temp = ""; // empty String
  let found = false; // searching for "s/" in the youtube shorts url since after that we have the key
  for (let i = 0; i < youtubeObject.url.length; i++) {
    if (youtubeObject.url[i] === "s" && youtubeObject.url[i + 1] === "/") {
      found = true;
      i = i + 2;
    }
    if (found) {
      console.log(i, temp);
      temp += youtubeObject.url[i];
    }
  }
  return temp;
}

export { getThumbnailKey, getThumbnailKeyShorts };
