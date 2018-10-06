console.log("hello react")

var app = {
  title: 'Indecision App',
  subtitle: 'Here it is'

}
var template = (
  <div>
  <h1>{app.title}</h1>
  <p>{app.subtitle}</p>
  <ol>
    <li>Item one</li>
    <li>Item two</li>
    <li>Item three</li>
  </ol>
  </div>
)

var user = {
  name: 'Dan',
  age: 20,
  location: 'Boston'
}

var userName = 'Mike'
var userAge = 30
var userLocation = "Boston"

var templateTwo = (
  <div>
  <h1>{user.name}</h1>
  <p>Age: {user.age}</p>
  <p>Locaton: {userLocation}</p>
  </div>
)

//create template
//render template
//template 2 variable root div h1 tag Name ptag age: age ptag location
//render template 2 instead template 1
var appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot)
