import Link from 'next/link'
import React from 'react'

const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">Hello</p>
        <h3>Hello</h3>
        <h1>Hello</h1>
        <img src="" alt="headphones" className="hero-banner-image" />

        <div>
          <Link href="">
            <button type="button">Hello</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>Hello</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner