import {useState} from "react"

const useToggle = (
  initialState = false,
): [boolean, () => void, () => void, () => void] => {
  const [state, setState] = useState(initialState)

  const toggle = (): void => {
    setState((prev) => !prev)
  }
  const setOn = (): void => {
    setState(true)
  }
  const setOff = (): void => {
    setState(false)
  }

  return [state, toggle, setOn, setOff]
}

export default useToggle
