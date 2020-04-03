import React from 'react'

interface IFavoriteNumberProps {
  min?: number
  max?: number
}

export const FavoriteNumber: React.FC<IFavoriteNumberProps> = ({ min = 1, max = 9 }) => {
  const [number, setNumber] = React.useState<number>(0)
  const [numberEntered, setNumberEntered] = React.useState<boolean>(false)

  const isValid = !numberEntered || (min <= number && number <= max)
  return (
    <div>
      <label htmlFor="favorite-number" > Favorite Number</label>
      <input
        id="favorite-number"
        type="number"
        value={number}
        onChange={handleChange}
        />
      {isValid ? null : <div role="alert"> The number is invalid</div >}
    </div>
  )

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNumber(Number(event.target.value))
    setNumberEntered(true)
  }
}
