const Left = ({ color = "#f26327" }: { color?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="64"
      viewBox="0 0 32 64"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.91466 30.104L20 15.0186L23.7707 18.7893L10.5707 31.9893L23.7707 45.1893L20 48.96L4.91466 33.8746C4.41474 33.3746 4.1339 32.6964 4.1339 31.9893C4.1339 31.2822 4.41474 30.604 4.91466 30.104Z"
        fill={color}
      />
    </svg>
  );
};

export default Left;
