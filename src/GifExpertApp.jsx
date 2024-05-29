import { useState } from "react"
import { AddCategory, GifGrid } from "./components"


export const GifExpertApp = () => {

  // categorias de la aplicacion
  const [categories, setCategories] = useState(['One Punch'])


  const onAddCategory = (category) => {
    if( categories.includes(category) ) return;
    setCategories([category, ...categories])
  }

  return (
    <>
      {/* Titulo De La Aplicacion */}
      <h1>GifExpertApp</h1>

      {/* Agregar Categorias */}
      <AddCategory 
        onNewCategory={ onAddCategory }
      />

      {/* Gifs */}
  
        {/* Barre todas las categorias */}
        {categories.map( category =>( <GifGrid key={category} category={category}/>))}

    
    
    </>
  )
}
