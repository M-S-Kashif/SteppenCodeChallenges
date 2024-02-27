import { useState } from "react"

export const TwoPaneList = ({ data }) => {
  const [movieTitle, setMovieTitle] = useState(null);
  
  return (
    <div className="columns">

      {/* Left Pane - Movie titles */}
      <div className="column is-one-quarter">
          <aside className="menu">
            <h2 className="menu-label has-text-grey-dark">Movie Titles</h2>
            <ul className="menu-list">
                {data.map( (item, index) =>(
                  <li key={index}>
                    <a className={movieTitle === index ? 'is-active': ''}
                    onClick={()=> setMovieTitle(index)}>
                      {item.title}
                    </a>
                  </li>
                ))}
            </ul>
          </aside>
      </div>

      {/* Right Pane - Movie content */}
      <div className="column">
          <div className="box">
            <h2 className="menu-label has-text-grey-dark">Content</h2>
                  {movieTitle !== null ? (
                    <div>
                      {data[movieTitle].content.map( (paragraph,index) => (
                        <ul>
                          <li key={index}><p>{paragraph}</p></li>
                        </ul>
                      ))}
                    </div>
                  ):(
                    <p className="has-text-grey-light"> Select a title to view more about the movie.</p>
                  )}
          </div>
      </div>

    </div>
  );
}
