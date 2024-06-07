import { saleLease } from "@/constant";

export const generateURL = ({
  cityVal = null,
  houseTypeVal = null,
  saleLeaseVal = null,
  listingIDVal = null,
} = {}) => {
  const city = cityVal?.toLowerCase() || null;
  const houseType = houseTypeVal || null;
  const saleLeaseType =
    Object.keys(saleLease).find((key) => key == saleLeaseVal) ||
    Object.keys(saleLease)
      .find((key) => saleLease[key].value == saleLeaseVal)
      ?.toLowerCase() ||
    null;
  if (listingIDVal) return `/resale/${listingIDVal}`;

  return `/`;
};
