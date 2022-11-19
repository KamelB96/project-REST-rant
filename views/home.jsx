const React = require('react')
const Def = require('./default')

function home() {
  return (
    <Def>
      <main>
        <h1>HOME</h1>
        <div>
          <img src="/images/jeswin-thomas-z_PfaGzeN9E-unsplash.jpg" alt="Tacos" height="250 px"></img>
          <div>
            Photo by <a href='https://unsplash.com/@jeswinthomas'>Jeswin Thomas </a> on <a href='https://unsplash.com/photos/z_PfaGzeN9E'>Unsplash</a>
          </div>
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  )
}

module.exports = home