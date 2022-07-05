import React from 'react'
import "./login.css"
function loginPage() {
  return (
    <div>
      
<div class="container">
  <div class="brand-logo"></div>
  <div class="brand-title">TWITTER</div>
  <div class="inputs">
    <label>EMAIL</label>
    <input type="email" placeholder="example@test.com" />
    <label>PASSWORD</label>
    <input type="password" placeholder="Min 6 charaters long" />
    <button type="submit">LOGIN</button>
  </div>
  <a href="https://twitter.com/prathkum">MADE BY PRATHAM</a>
</div>
    </div>
  )
}

export default loginPage
