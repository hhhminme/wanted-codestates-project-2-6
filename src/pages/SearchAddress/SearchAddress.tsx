import React from "react";
type CompleteProps = {
  setRoute: React.Dispatch<React.SetStateAction<string>>;
};

const SearchAddress = ({ setRoute }: CompleteProps) => {
  return (
    <div>
      <div>주소검색</div>
    </div>
  );
};

export default SearchAddress;
