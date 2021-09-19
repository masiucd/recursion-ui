import {useEffect, useState} from "react"

export function useExpended(
  id: number,
): [(id: number) => void, (id: number) => boolean] {
  const [state, setState] = useState<Array<number>>([])
  const isExpended = (id: number): boolean => state.includes(id)
  const toggleExpended = (id: number) => {
    setState((prev) => {
      return isExpended(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id]
    })
  }
  useEffect(() => {
    setState([id])
  }, [id])
  return [toggleExpended, isExpended]
}
