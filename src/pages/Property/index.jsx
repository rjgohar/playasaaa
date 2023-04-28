import React from "react";

import PropertiesCardMap from "../../components/card/mapCard";
import FilterSec from "../../components/filterSec";

export default function Property() {
  return (
    <div>
      <FilterSec />
      <PropertiesCardMap />
    </div>
  );
}
