export const IconPlus = ({
  color,
  strokeWidth = 2,
}: {
  color: string;
  strokeWidth?: number;
}) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    stroke={color}
  >
    <path d="M10 4.16666V15.8333" />
    <path d="M4.16675 10H15.8334" />
  </svg>
);
