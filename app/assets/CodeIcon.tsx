import { COLOR } from "~/constants/color";

export default function CodeIcon({
  size = "1rem",
  color = COLOR.TEXT.STANDARD,
}: {
  size?: string;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M39.6667 18.269L43.6252 21.8316C47.2243 25.071 49.024 26.6908 49.024 28.7691C49.024 30.8474 47.2243 32.4672 43.6252 35.7065L39.6667 39.2691"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M32.6359 11.6667L23.3641 46.2694"
        stroke={color}
        strokeOpacity="0.6"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M16.3334 18.269L12.375 21.8316C8.77571 25.071 6.97608 26.6908 6.97608 28.7691C6.97608 30.8474 8.77571 32.4672 12.375 35.7065L16.3334 39.2691"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
