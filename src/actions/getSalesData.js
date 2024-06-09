"use server";
import { resenditial } from "../api/routes";
// import { houseType } from "@/constant";

export const getSalesData = async (offset, limit, city, listingType) => {
  try {
    // let selectQuery = `ListBrokerage=CONDOWONG REAL ESTATE INC.,${
    //   city && `Municipality=${city || ""},`
    // }SaleLease='Sale'`;
    let selectQuery = `ListBrokerage=CONDOWONG REAL ESTATE INC.`;
    const url = resenditial.properties.replace(
      "$query",
      `?$select=${selectQuery}&$skip=${offset}&$limit=${limit}`
    );
    const options = {
      method: "GET",
      cache: "no-store",
    };

    // if (listingType) {
    //   selectQuery += `,TypeOwnSrch=${listingType}`;
    // }
    console.log(url);
    const res = await fetch(url, options);
    const data = await res.json();
    return data.results;
  } catch (error) {
    throw new Error(`An error happened: ${error}`);
  }
};

export const getFilteredRetsData = async (queryParams) => {
  try {
    //all the necessary queries possible
    let selectQuery = `
    ${`ListBrokerage=CONDOWONG REAL ESTATE INC.`},
    ${queryParams.city ? `Municipality=${queryParams.city}` : ""}${
      queryParams.saleLease
        ? `${queryParams.city ? "," : ""}SaleLease=${queryParams.saleLease}`
        : ""
    }${
      queryParams.bed
        ? `${queryParams.bed ? "," : ""}Bedrooms=${queryParams.bed}`
        : ""
    }`;
    const skipQuery = `${queryParams.offset}`;
    const limitQuery = `${queryParams.limit}`;
    let rangeQuery = `minListPrice=${
      queryParams.minListPrice || 0
    },minWashrooms=${queryParams.washroom || 0}`;
    let selectOrQuery = "";

    if (queryParams.houseType) {
      const houseTypeQuery = `,TypeOwnSrch='value'`;
      queryParams.houseType.forEach((param, index) => {
        if (param === houseType.condo.value) {
          selectQuery += `,PropertyType='${param}'`;
        } else selectQuery += houseTypeQuery.replace("value", param);

        if (index !== queryParams.houseType.length - 1) {
          selectQuery += ",";
        }
      });
    }

    if (queryParams.hasBasement) {
      selectQuery += `,Basement1=Apartment`;
    }

    if (queryParams.sepEntrance) {
      selectQuery += `,Basement2=Sep Entrance`;
    }
    console.log(queryParams.maxListPrice);
    if (
      queryParams.maxListPrice &&
      queryParams.minListPrice &&
      queryParams.maxListPrice > queryParams.minListPrice
    ) {
      rangeQuery += `,maxListPrice=${queryParams.maxListPrice}`;
    }

    if (queryParams.priceDecreased) {
      selectQuery += `,PriceDecreased=true`;
    }
    const url = resenditial.properties.replace(
      "$query",
      `?$select=${selectQuery}&$skip=${skipQuery}&$limit=${limitQuery}&$range=${rangeQuery}&$selectOr=${selectOrQuery}`
    );

    // console.log(url);
    const options = {
      method: "GET",
      cache: "no-store",
    };
    console.log(url);
    const res = await fetch(url, options);
    const data = await res.json();
    return data.results;
  } catch (error) {
    throw new Error(`An error happened: ${error}`);
  }
};

// export const fetchDataFromMLS = async (listingID) => {
//   const options = {
//     method: "GET",
//   };
//   const urlToFetchMLSDetail = resenditial.properties.replace(
//     "$query",
//     `?$select=MLS='${listingID}'`
//   );
//   const resMLSDetail = await fetch(urlToFetchMLSDetail, options);
//   const data = await resMLSDetail.json();

//   return data.results[0];
// };
