import React from "react";
import dynamic from "next/dynamic";

import Link from "next/link";
import { ImSpinner } from "react-icons/im";
import Contact from "@/components/Contact";

const FiltersWithSalesList = dynamic(
  () => import("@/components/FiltersWithSalesList"),
  {
    ssr: false,
    loading: () => (
      <div className="d-flex justify-content-center align-item-center">
        <ImSpinner size={24} />
      </div>
    ),
  }
);

const page = async ({ params }) => {
  const INITIAL_LIMIT = 30;
  return (
    <>
      <div className="container-fluid">
        <FiltersWithSalesList
          INITIAL_LIMIT={INITIAL_LIMIT}
          saleLeaseVal={"sale"}
        />
      </div>
    </>
  );
};

export default page;
