export const getAssetImageSource = (image) => {
  if (image) {
    if (image.includes("ipfs/")) {
      image = "ipfs://" + image.split("ipfs/")[1];
    }
    return linkToSrc(convertMetadataPropToString(image));
  }
};

const linkToSrc = (link, base64 = false) => {
  let root = "https://cf-ipfs.com/ipfs";

  const base64regex =
    /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
  if (link.startsWith("https://")) return link;
  else if (link.startsWith("ipfs://"))
    return root + "/" + link.split("ipfs://")[1].split("ipfs/").slice(-1)[0];
  else if (
    (link.startsWith("Qm") && link.length === 46) ||
    (link.startsWith("baf") && link.length === 59)
  ) {
    return root + "/" + link;
  } else if (base64 && base64regex.test(link))
    return "data:image/png;base64," + link;
  else if (link.startsWith("data:image")) return link;
  return null;
};

const convertMetadataPropToString = (src) => {
  if (typeof src === "string") return src;
  else if (Array.isArray(src)) return src.join("");
  return null;
};
