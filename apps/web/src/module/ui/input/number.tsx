interface Props {
  id?: string
  onChange: (value: number) => void
  value: number
}

export const InputNumber: React.FC<Props> = ({ id, onChange, value }: Props) => {
  return <input 
    id={id} 
    type="number" 
    onChange={event => onChange(Number.parseFloat(event.target.value))}
    value={value}
  />
}