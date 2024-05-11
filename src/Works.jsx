import React from 'react'
import {useNavigate} from 'react-router-dom'
export default function Works() {
    const navigate = useNavigate();
  return (
    <> <div>Works</div>
    <button
          type="button"
          onClick={() => {
            navigate(-1);
          }}
        >
          back
        </button></>
   
  )
}
