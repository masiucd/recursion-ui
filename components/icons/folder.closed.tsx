interface Props {
  width?: number
  height?: number
}
const FolderClosed = ({width = 50, height = 50}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="#000000"
    viewBox="0 0 256 256"
  >
    <rect width="256" height="256" fill="none"></rect>
    <path
      d="M216.88889,208H39.38462A7.40633,7.40633,0,0,1,32,200.61538V80H216a8,8,0,0,1,8,8V200.88889A7.11111,7.11111,0,0,1,216.88889,208Z"
      fill="none"
      stroke="#000000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    ></path>
    <path
      d="M32,80V56a8,8,0,0,1,8-8H92.68629a8,8,0,0,1,5.65686,2.34315L128,80"
      fill="none"
      stroke="#000000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    ></path>
  </svg>
)

export default FolderClosed
