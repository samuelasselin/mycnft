export const toString = (bytes) => String.fromCharCode.apply(String, bytes);
export const fromHex = (hex) => Buffer.from(hex, "hex");
