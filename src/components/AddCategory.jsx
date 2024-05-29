import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
  
  const [inputValue, setInputValue] = useState('') // valor del input

  // funcion que guarda el valor del input al inputValue del state
  const onInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const onHandleSubmit = (e) => {
    e.preventDefault()
    if( inputValue.trim().length < 2 ) return;
    // setCategories( category => [inputValue, ...category])
    onNewCategory(inputValue)
    setInputValue('')
  }

  return (
    <form onSubmit={onHandleSubmit}>
      <input 
      type="text" 
      placeholder="Busca un GIF"
      value={inputValue}
      onChange={onInputChange}
      />
    </form>  
  )
}
