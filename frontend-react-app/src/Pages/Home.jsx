import React from "react"
import "./Home.css"
import "./Example.jsx"
import { Link } from "react-router-dom"
import example from "../Assets/mental-health.jpeg"
import eat from "../Assets/eat.jpeg"
import gro from "../Assets/gro.jpeg"
import gym from "../Assets/gym.jpeg"
import sport from "../Assets/sport.png"
import theraphy from "../Assets/t.jpeg"

const Home = () => {
  return (
    <div className="home">
      <div className="home-grid">
        <Link style={{ textDecoration: "none" }} to="/example">
          <img src={example} alt="" />
        </Link>
        <Link style={{ textDecoration: "none" }} to="/example">
          <p>Free Theraphy session</p>
        </Link>
      </div>
      <div className="home-grid">
        <Link style={{ textDecoration: "none" }} to="/example">
          <img src={eat} alt="" />
        </Link>
        <Link style={{ textDecoration: "none" }} to="/example">
          <p>Eating Healthy</p>
        </Link>
      </div>
      <div className="home-grid">
        <Link style={{ textDecoration: "none" }} to="/example">
          <img src={gro} alt="" />
        </Link>
        <Link style={{ textDecoration: "none" }} to="/example">
          <p>Discounted Groceries for Students</p>
        </Link>
      </div>
      <div className="home-grid">
        <Link style={{ textDecoration: "none" }} to="/example">
          <img src={gym} alt="" />
        </Link>
        <Link style={{ textDecoration: "none" }} to="/example">
          <p>Free Gym Membership</p>
        </Link>
      </div>
      <div className="home-grid">
        <Link style={{ textDecoration: "none" }} to="/example">
          <img src={sport} alt="" />
        </Link>
        <Link style={{ textDecoration: "none" }} to="/example">
          <p>Join Sport Clubs for Free</p>
        </Link>
      </div>
      <div className="home-grid">
        <Link style={{ textDecoration: "none" }} to="/example">
          <img src={theraphy} alt="" />
        </Link>
        <Link style={{ textDecoration: "none" }} to="/example">
          <p>Free Theraphy Session</p>
        </Link>
      </div>
    </div>
  )
}

export default Home
