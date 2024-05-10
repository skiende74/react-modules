export type CardBrand = "visa" | "mastercard" | "diners" | "amex" | "union";

const matchers: Record<CardBrand, (value: string) => boolean> = {
  visa: (value) => /^4\d*$/.test(value) && value.length <= 16,
  mastercard: (value) => /^5[1-5]\d*$/.test(value) && value.length <= 16,
  diners: (value) => /^36\d*$/.test(value) && value.length <= 14,
  amex: (value) => /^3[47]\d*$/.test(value) && value.length <= 15,
  union: (value) =>
    (/^62[456]\d*$/.test(value) ||
      /^628[2-8]\d*$/.test(value) ||
      (Number(value.slice(0, 6)) >= 622126 && Number(value.slice(0, 6)) <= 622925)) &&
    value.length <= 16,
};

const getCardBrand = (value: string) => {
  const matched = Object.entries(matchers).find(([, validate]) => validate(value));
  if (matched) {
    return matched[0] as CardBrand;
  }
  return "none";
};

export default getCardBrand;
