export default function HeartIcon({
  size,
  color,
}: {
  size: string;
  color: string;
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
        d="M28 12.8348C17.5004 1.92609 4.66666 9.97304 4.66666 21.3199C4.66666 32.6667 14.0453 38.7133 20.9107 44.1254C23.3333 46.0353 25.6667 47.8333 28 47.8333"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M28 12.8348C38.4995 1.92609 51.3333 9.97304 51.3333 21.3199C51.3333 32.6667 41.9547 38.7133 35.0894 44.1254C32.6667 46.0353 30.3333 47.8333 28 47.8333"
        stroke={color}
        strokeOpacity="0.6"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
