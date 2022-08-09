import React, { useEffect, useState } from "react";

const useFormat = (data) => {
  const [formatData, setFormatData] = useState(null);

  useEffect(() => {
    const result = data.split(" ").map((data) => data.charAt(0).toUpperCase() + data.slice(1).toLowerCase());
    setFormatData(result.join(" "));
  }, [data]);

  return formatData;
};

export default useFormat;
