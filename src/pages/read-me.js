import React, { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import { FcPrevious } from 'react-icons/fc';
import ReactMarkdown from 'react-markdown';

function ReadMe() {
  const { profile, repo }= useParams();
  const [ readMe, setReadMe ] = useState("");

  useEffect(() => {
    fetch(`https://api.github.com/repos/${profile}/${repo}/readme`)
      .then((resp) => resp.json())
      .then((data) => {
        setReadMe(data.content)
        console.log(data.content)
      })
  }, [profile, repo])

  const read = atob(readMe);

  return (
    <>
      <div className="content__head">
        <Link to="/" className="button">
          <FcPrevious />
        </Link>
      </div>

      <div className="content__body content__body--with-result">
        <div className="card card--y">
          <ReactMarkdown>
            {read}
          </ReactMarkdown>
        </div>
      </div>
    </>
  )
}

export default ReadMe