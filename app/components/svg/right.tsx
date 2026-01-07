const Right = ({ color = "#f26327" }: { color?: string }) => {
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
        d="M27.0853 33.896L12 48.9814L8.22934 45.2107L21.4293 32.0107L8.22934 18.8107L12 15.04L27.0853 30.1254C27.5853 30.6254 27.8661 31.3036 27.8661 32.0107C27.8661 32.7178 27.5853 33.396 27.0853 33.896Z"
        fill={color}
      />
    </svg>
  );
};

export default Right;
