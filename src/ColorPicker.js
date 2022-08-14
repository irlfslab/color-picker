import { useState } from 'react'
import Color from './Color'

const colors = [{
  hex: '#0000ff',
  name: 'Blue'
},
{
  hex: ' #b3b3ff',
  name: 'Pink'
},
{
  hex: ' #996600',
  name: 'Brown'
},
{
  hex: '#00ff00',
  name: 'Green'
},
{
  hex: '#ff8533',
  name: 'Orange'
}]

export default function ColorPicker () {
  const [backgroundColor, setBackgroundColor] = useState('white')

  return (
    <div className='page' style={{ backgroundColor }}>
      {
        colors.map(color => (
          <Color key={color.hex} hex={color.hex} name={color.name} setBackgroundColor={setBackgroundColor} />
        ))
      }
    </div>
  )
}
