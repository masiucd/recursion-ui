interface Props {
  width?: number
  height?: number
}
const FolderOpen = ({width = 30, height = 30}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="#000000"
    viewBox="0 0 256 256"
  >
    <rect width="256" height="256" fill="none"></rect>
    <path
      d="M32,208V64a8,8,0,0,1,8-8H93.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H200a8,8,0,0,1,8,8v24"
      fill="none"
      stroke="#000000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    ></path>
    <path
      d="M32,208l30.17661-90.52982A8,8,0,0,1,69.76607,112H228.90059a8,8,0,0,1,7.58947,10.52982L208,208Z"
      fill="none"
      stroke="#000000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    ></path>
  </svg>
)

export default FolderOpen
