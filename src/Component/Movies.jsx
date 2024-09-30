import React, { useState } from 'react'
import { movies } from './data'


const Movies = () => {

  const [movieList, setMovieList] = useState(movies);

  const FilterMovie = (cat)=>
  {
    setMovieList(movies.filter((data)=>data.category==cat))
  }

  return (

    <>
      <div className='nav'>

        <button  onClick={()=>setMovieList(movies)} type="button" class="btn btn-outline-primary">All</button>
        <button  onClick={()=>FilterMovie("Action")} type="button" class="btn btn-outline-secondary">Action</button>
        <button onClick={()=>FilterMovie("Animation")}  type="button" class="btn btn-outline-success">Animation</button>
        <button onClick={()=>FilterMovie("Thriller")}  type="button" class="btn btn-outline-danger">Thriller</button>
        <button onClick={()=>FilterMovie("Horror")}  type="button" class="btn btn-outline-warning">Horror</button>
        <button onClick={()=>FilterMovie("Drama")}  type="button" class="btn btn-outline-info">Drama</button>
        <button onClick={()=>FilterMovie("Sci-Fi")}  type="button" class="btn btn-outline-light">Sci-fi</button>
        
      </div>


      <div className='mainContainer '>
        {movieList.map((data) => <div key={data.id} className='innerContainer'>
          <div className='image-div hover_effect'>
            <img src={data.poster_path} className='poster' />
          </div>
          <h5>{data.title}</h5>
          <p>{data.release_date}</p>

        </div>)}
      </div>
    </>
  )
}

export default Movies