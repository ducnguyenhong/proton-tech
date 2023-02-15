const getSize = (w: any) => {
  if (typeof w === 'undefined') {
    return undefined;
  }
  if (typeof w === 'number') {
    return `${w}rem`;
  }
  if (w === '100%') {
    return '100vw'; // default Next/Image
  }
  if (w.includes('px')) {
    return w;
  }
  return `${w}rem`;
};

export const getImageSizes = (w: any) => {
  if (typeof w !== 'object') {
    return getSize(w);
  }
  // responsive
  const { xs, sm, md, lg, xl } = w;
  const sizeXS = getSize(xs);
  const sizeSM = getSize(sm);
  const sizeMD = getSize(md);
  const sizeLG = getSize(lg);
  const sizeXL = getSize(xl);
  const size2XL = getSize(w['2xl']);

  const sizesSM = sizeSM || sizeXS;
  const sizesMD = sizeMD || sizeSM || sizeXS;
  const sizesLG = sizeLG || sizeMD || sizeSM || sizeXS;
  const sizesXL = sizeXL || sizeLG || sizeMD || sizeSM || sizeXS;
  const sizes2XL = size2XL || sizeXL || sizeLG || sizeMD || sizeSM || sizeXS;
  return `(max-width: 320px) ${sizeXS}, (max-width: 480px) ${sizesSM}, (max-width: 768px) ${sizesMD}, (max-width: 992px) ${sizesLG}, (max-width: 1280px) ${sizesXL}, (max-width: 1600px) ${sizes2XL}, 100vw`;
};

export const getBlurDataURL = (r = 233, g = 233, b = 233) => {
  const keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

  const triplet = (e1: number, e2: number, e3: number) =>
    keyStr.charAt(e1 >> 2) +
    keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
    keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
    keyStr.charAt(e3 & 63);

  return `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;
};
