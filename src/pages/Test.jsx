import React, { useEffect, useState } from 'react'

function Test() {
  const [isHeathly, setIsHealthy] = useState(false)
  const BASE_API_URL = import.meta.env.VITE_API_URL || 'https://deploy-backend-demo.onrender.com'

  useEffect(() => {
    fetch(BASE_API_URL + '/health')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.ok) {
          setIsHealthy(!isHeathly)
        }
      })
  }, [])

  return (
    <div>
      <h1>Test page</h1>
      {
        isHeathly
        ? <p>Page route and server is <b>healthy!</b></p>
        : <p>Page route and server is <b>unhealthy!</b></p>
      }
    </div>
  )
}

export default Test