import React from "react";

const RegisterAddress = ({
  setRoute,
}: {
  setRoute: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div>
      <button onClick={() => setRoute("searchAddress")}>검색페이지</button>
      RegisterAddress
    </div>
  );
};

export default RegisterAddress;
