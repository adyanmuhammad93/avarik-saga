import React, { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import { FcPrevious } from 'react-icons/fc';

function Profile() {
  const { profile }= useParams();
  const [ user, setUser ] = useState([])
  const [ repoList, setRepoList ] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${profile}`)
      .then((resp) => resp.json())
      .then((data) => {
        setUser(data)
        console.log(data.avatar_url)
      })
  }, [])

  useEffect(() => {
    fetch(`https://api.github.com/users/${profile}/repos`)
      .then((resp) => resp.json())
      .then((data) => {
        setRepoList(data)
        console.log(data)
      })
  }, [profile])

  return (
    <>
      <div className="content__head">
        <Link to="/" className="button">
          <FcPrevious />
        </Link>
      </div>

      <div className="content__body content__body--with-result">
        <div className="profile">
          <img
            src={user.avatar_url}
            alt=""
            className="profile__avatar"
          />
          <div className="profile__meta">
            <h3 className="profile__name">{user.login}</h3>
            <p className="profile__bio">
              {user.bio}
            </p>
          </div>
        </div>

        <div className="card card--blank">List of Repos</div>
        
        {repoList.map((data, index) => (
          <>
          <div className="card card--y" key={index}>
            <strong>{data.name}</strong>
            <p>{data.description}</p>
            <Link to={`/user/${data.full_name}`}>See ReadMe.md File</Link>
          </div>
          </>
        ))}

      </div>
    </>
  )
}

export default Profile