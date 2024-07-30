import { COLOR } from "@constants/color";

export default function HomeIcon({
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
        d="M51.3333 51.3333H4.66666"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M4.66666 25.6668L23.6271 10.4985C26.1837 8.4533 29.8163 8.4533 32.3729 10.4985L51.3333 25.6668"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M36.1667 12.8333V8.16667C36.1667 7.52234 36.6891 7 37.3333 7H43.1667C43.8109 7 44.3333 7.52234 44.3333 8.16667V19.8333"
        stroke={color}
        strokeOpacity="0.6"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M9.33334 51.3334V22.1667"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M46.6667 51.3334V22.1667"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M35 51.3334V39.6667C35 36.3669 35 34.717 33.975 33.6918C32.9497 32.6667 31.2998 32.6667 28 32.6667C24.7002 32.6667 23.0503 32.6667 22.0251 33.6918C21 34.717 21 36.3669 21 39.6667V51.3334"
        stroke={color}
        strokeOpacity="0.6"
        strokeWidth="3"
      />
      <path
        d="M32.6667 22.1667C32.6667 24.7441 30.5774 26.8333 28 26.8333C25.4226 26.8333 23.3333 24.7441 23.3333 22.1667C23.3333 19.5893 25.4226 17.5 28 17.5C30.5774 17.5 32.6667 19.5893 32.6667 22.1667Z"
        stroke={color}
        strokeOpacity="0.6"
        strokeWidth="3"
      />
    </svg>
  );
}
