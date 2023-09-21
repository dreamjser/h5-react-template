import React, { useState } from 'react'

interface IProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function Input({ value, onChange }: IProps) {
  return <input value={value} onChange={onChange} />
}

const View = () => {
  const [value, setValue] = useState('')

  return (
    <div>
      <Input
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}
      />
      <Input
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}
      />
    </div>
  )
}

export default View
