export const createAltText = (text:string, reg:RegExp) => {
  let newText;
  const matchText = text.match(reg);

  if (matchText) {
    newText = matchText[0].replaceAll('-', ' ');
  }

  return newText;
};
