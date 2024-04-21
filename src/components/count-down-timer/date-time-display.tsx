'use client'

import React from "react";

type PropTypes = {
  value: number;
  type: string;
  isDanger: boolean;
};

const DateTimeDisplay = ({ value, type, isDanger }: PropTypes) => {
  return (
    <div
      className={`${
        isDanger ? "countdown danger" : "countdown"
      } flex flex-col justify-center items-center`}
    >
      <p className="text-[rgb(2,_7,_62)] font-[Archivo] text-[36px] font-semibold leading-[39px] tracking-[-1px] text-center">
        {value < 10 ? `0${value}` : value}
      </p>
      <span className="text-[rgb(2,_7,_62)] font-[DM_Sans] text-[15px] font-normal leading-[20px] tracking-[0px] text-center">
        {type}
      </span>
    </div>
  );
};

export default DateTimeDisplay;
