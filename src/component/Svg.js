import React from "react";

export const ArrowDown = ({ props, style }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      width={50}
      height={20}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      style={style}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M12 20L18 14M12 20L6 14M12 20L12 9.5M12 4V6.5"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </g>
    </svg>
  );
};
export const ArrowUp = ({ props, style }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={20}
      {...props}
      style={style}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M12 20L12 4M12 4L18 10M12 4L6 10"
          stroke="#FFFFFF"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </g>
    </svg>
  );
};
export const PausePlay = ({ props, style }) => {
  return (
    <svg
    fill="#FFFFFF"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 275.725 275.725"
      width={50}
      height={25}
      {...props}
      style={style}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g>
          <g>
            <path d="M137.862,0C61.726,0,0,61.726,0,137.862c0,76.14,61.726,137.862,137.862,137.862c76.139,0,137.862-61.723,137.862-137.862 C275.725,61.726,214.001,0,137.862,0z M125.639,148.395L75.67,177.051c-8.606,4.93-15.583,0.891-15.583-9.041v-57.115 c0-9.926,6.978-13.973,15.583-9.03l49.969,28.656C134.245,135.455,134.245,143.455,125.639,148.395z M161.371,166.694 c0,9.922-5.442,17.968-12.169,17.968c-6.722,0-12.171-8.046-12.171-17.968V112.21c0-9.921,5.449-17.971,12.171-17.971 c6.727,0,12.169,8.05,12.169,17.971V166.694z M211.878,166.694c0,9.922-5.447,17.968-12.174,17.968 c-6.726,0-12.174-8.046-12.174-17.968V112.21c0-9.921,5.448-17.971,12.174-17.971c6.727,0,12.174,8.05,12.174,17.971V166.694z"></path>
          </g>
        </g>
      </g>
    </svg>
  );
};

export const Reset = ({ props, style }) => {
  return (
    <svg
      fill="#FFFFFF"
      viewBox="0 0 1920 1920"
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={25}
      {...props}
      style={style}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M960 0v213.333c411.627 0 746.667 334.934 746.667 746.667S1371.627 1706.667 960 1706.667 213.333 1371.733 213.333 960c0-197.013 78.4-382.507 213.334-520.747v254.08H640V106.667H53.333V320h191.04C88.64 494.08 0 720.96 0 960c0 529.28 430.613 960 960 960s960-430.72 960-960S1489.387 0 960 0"
          fill-rule="evenodd"
        ></path>
      </g>
    </svg>
  );
};
