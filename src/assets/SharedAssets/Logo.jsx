import React, { memo } from "react";

const Logo = memo(({width='84',height='96',strokeColor='#63ffdb',className=''}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 84 96"
      fill='none'
      className={`${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_181_25)">
        <path
          d="M38.5 39V52.5V64H45V52.5V39H55.5V33H51.5H48H45H29V39H38.5Z"
          fill={strokeColor}
        />
        <path
          d="M42 3L3 25V70L42 93L81 71V26L42 3Z"
          stroke={strokeColor}
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_181_25">
          <rect width={width} height={height} fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
});

export default Logo;
