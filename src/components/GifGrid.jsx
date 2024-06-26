import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({category}) => {
  
  const { images, isLoading } = useFetchGifs( category )

  return (
    <>
      <h3>{ category }</h3>

      {
        isLoading ? ( <h1>Cargando...</h1>) : null
      }
    
      <div className="card-grid">
        { images.map( (img) => (
          <GifItem 
            key={img.id}
            title={ img.title }
            url={ img.url }
          />
        ))}
      </div>

    </>
  )
}
