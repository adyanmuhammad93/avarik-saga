import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function SearchResult() {
  const { query }= useParams();
  const [ queryList, setQueryList ] = useState([]);
  useEffect(() => {
    fetch(`https://api.github.com/search/users?q=${query}`)
      .then((resp) => resp.json())
      .then((data) => {
        setQueryList(data.items)
        console.log(data.items)
      })
  }, [query])
  
  return (
    <>
      <div className="content__body content__body--with-result">
        <div className="card card--blank">Max result is 30, Current list is {queryList.length}</div>
        {queryList.map((data, index) => {
          return (
            <>
              <Link to={`/user/${data.login}`}>
                <div className="card" key={index}>{data.login}</div>
              </Link>
            </>
          )
        })}
      </div>
    </>
  )
}

export default SearchResult