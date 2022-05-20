export const assetName = (metaDataName, assetName, onlyLetters) => {
  if (onlyLetters) {
    return metaDataName
      ? nameToLetters(metaDataName)
      : nameToLetters(readableName(assetName));
  } else {
    return metaDataName ? metaDataName : readableName(assetName);
  }
};

export const readableName = (assetName) => {
  return toString(fromHex(assetName));
};

const nameToLetters = (name) => {
  if (name) {
    return name.split("#")[0];
  }
};

export const toString = (bytes) => String.fromCharCode.apply(String, bytes);
export const fromHex = (hex) => Buffer.from(hex, "hex");

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
