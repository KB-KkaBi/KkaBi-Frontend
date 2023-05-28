type IconProps = {
  width?: number;
  height?: number;
  fillColor?: string;
  onClick?: VoidFunction;
};

/**
 * @param width rem 단위로 입력해주세요.
 * @param height rem 단위로 입력해주세요.
 * @param fillColor 아이콘 색상입니다.
 */
export const BackArrowIcon = ({ width = 15, height = 15, fillColor = "#000", onClick = () => {} }: IconProps) => {
  // rem으로 환산
  const calcWidth = width * 10;
  const calcHeight = height * 10;

  return (
    <div onClick={onClick}>
      <svg width={calcWidth} height={calcHeight} viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M75 56.6187V40.625C74.998 39.3899 74.6304 38.1829 73.9436 37.1563C73.2568 36.1298 72.2815 35.3294 71.1406 34.8562C69.9997 34.383 68.7443 34.2581 67.5325 34.4973C66.3207 34.7364 65.2069 35.3288 64.3313 36.2L25 75L64.3313 113.794C64.9103 114.376 65.5988 114.838 66.3572 115.154C67.1155 115.469 67.9287 115.631 68.75 115.631C69.5713 115.631 70.3845 115.469 71.1428 115.154C71.9012 114.838 72.5897 114.376 73.1687 113.794C73.7494 113.214 74.2101 112.525 74.5243 111.767C74.8385 111.008 75.0002 110.196 75 109.375V93.8187C92.1875 94.2437 110.969 97.3562 125 118.75V112.5C125 83.5437 103.125 59.7312 75 56.6187Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
};
