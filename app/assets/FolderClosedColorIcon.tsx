export default function FolderClosedColorIcon({
  size,
  color,
}: {
  size: string;
  color: string;
}) {
  return (
    <svg
      fill={color}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      id="folder"
      data-name="Flat Color"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="primary"
        d="M20,6H13.41L11,3.59A2,2,0,0,0,9.59,3H4A2,2,0,0,0,2,5V19a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V8A2,2,0,0,0,20,6Z"
      />
    </svg>
  );
}
