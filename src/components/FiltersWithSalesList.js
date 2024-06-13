"use client";
import React, { useEffect, useState } from "react";

import SalesList from "@/components/SalesList";
import Filters from "@/components/Filters";

//HELPERS
import { capitalizeFirstLetter } from "@/helpers/capitalizeFIrstLetter";

//CONSTANT
import { bedCount, saleLease, houseType, washroomCount } from "@/constant";
import { getFilteredRetsData } from "@/actions/getSalesData";
import useDeviceView from "@/helpers/useDeviceView";
import { isLocalStorageAvailable } from "@/helpers/checkLocalStorageAvailable";
import { ImSpinner } from "react-icons/im";

const FiltersWithSalesList = ({
  salesListData,
  INITIAL_LIMIT,
  city = undefined,
  requiredType = undefined,
  saleLeaseVal = undefined,
}) => {
  const initialState = {
    saleLease:
      saleLease[
        Object.keys(saleLease).find((val) => val === saleLeaseVal) || "sale"
      ]?.name || saleLease.sale.name,
    bed: bedCount.any.name,
    priceRange: {
      min: 0,
      max: 0,
    },
    type:
      Object.values(houseType).find((val) => val.name === requiredType)?.name ||
      houseType.all.name,
    hasBasement: false,
    sepEntrance: false,
    washroom: washroomCount.any.value,
    priceDecreased: false,
  };

  const [filterState, setFilterState] = useState(null);
  const [salesData, setSalesData] = useState(salesListData);
  const [offset, setOffset] = useState(INITIAL_LIMIT);
  const { isMobileView } = useDeviceView();
  const [loading, setLoading] = useState(false);

  const _getMergedHouseType = (state) => {
    let mergedHouseType = [];
    const selectedHouseType = Object.values(houseType).filter((type) =>
      state.type.includes(type.name)
    );
    for (const type of selectedHouseType) {
      if (type.value === null) {
        mergedHouseType = null;
        break;
      } else {
        mergedHouseType.pop();
        mergedHouseType.push(type.value);
      }
      return mergedHouseType;
    }
  };

  const fetchFilteredData = async (params) => {
    const payload = {
      saleLease: Object.values(saleLease).find(
        (saleLeaseObj) => saleLeaseObj.name === params.saleLease
      )?.value,
      bed: Object.values(bedCount).find((bedObj) => bedObj.name === params.bed)
        ?.value,
      minListPrice: Number(params.priceRange?.min ?? 0),
      maxListPrice: Number(params.priceRange?.max ?? 0),
      houseType: _getMergedHouseType(params),
      hasBasement: params.hasBasement,
      sepEntrance: params.sepEntrance,
      washroom: params.washroom,
      priceDecreased: params.priceDecreased,
    };
    const queryParams = {
      city: capitalizeFirstLetter(city),
      limit: INITIAL_LIMIT,
      offset: 0,
      ...payload,
    };
    setLoading(true);
    // console.log(payload);
    const filteredSalesData = await getFilteredRetsData(queryParams);
    setLoading(false);
    setSalesData(filteredSalesData);
    setOffset(INITIAL_LIMIT);
  };

  useEffect(() => {
    // store data in session storage whenever it changes
    if (isLocalStorageAvailable() && filterState) {
      localStorage.setItem("filterState", JSON.stringify(filterState));
      localStorage.setItem("selectedCity", capitalizeFirstLetter(city));
    }

    if (window !== undefined) {
      window.scrollY = 0;
    }
  }, [filterState]);

  useEffect(() => {
    //component can be loaded in three ways, either it is provided a pre-defined filter, have a stored state or
    const storedState = localStorage.getItem("filterState");
    if (city || saleLeaseVal || requiredType) {
      fetchFilteredData(initialState);
      setFilterState(initialState);
    } else if (storedState) {
      const newFilterState = JSON.parse(storedState);
      setFilterState(newFilterState);
      fetchFilteredData(newFilterState);
    } else {
      setFilterState(initialState);
    }

    // fetchFilteredData(initialState);
  }, []);

  return (
    <>
      {filterState && (
        <div className="mt-8">
          {/* <div className="filter-container flex-wrap w-full z-[999] sticky top-0 ">
            <Filters {...{ filterState, setFilterState, fetchFilteredData }} />
          </div> */}
          <h2
            className={`fs-3 font-bold d-flex text-capitalize ${
              isMobileView ? "pt-3" : "pt-4"
            }`}
          >
            Check out Homes {filterState.saleLease} across GTA
          </h2>
          <p
            className="fw-light mb-5 text-gray-400 mt-2"
            style={isMobileView ? { fontSize: "0.9rem" } : {}}
          >
            Check out Detached, Semi-detached, Townhomes and 1 Bedroom 2
            Bedrooms & 3 Bedrooms+ Condo units for sale across GTA
          </p>

          <div
            className={`${
              isMobileView ? "pt-1" : "pt-3"
            } row row-cols-1 row-cols-md-3 row-cols-xs-1 row-cols-sm-1 row-cols-lg-4 gy-5 sm:gap-y-[40px] px-3`}
          >
            {!loading ? (
              <SalesList
                {...{
                  city,
                  INITIAL_LIMIT,
                  salesData,
                  setSalesData,
                  offset,
                  setOffset,
                  filterState,
                }}
              />
            ) : (
              <ImSpinner size={24} />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default FiltersWithSalesList;
