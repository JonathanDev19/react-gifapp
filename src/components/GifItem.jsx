
export const GifItem = ({ url, title }) => {
  return (
    <div className="card">
      
      <img src={url} alt={title} />
      <p>{
        title.trim() === '' ? (<h1>No hay titulo</h1>) : ( <p>{title}</p>)
      }</p>
    </div>
  )
}
