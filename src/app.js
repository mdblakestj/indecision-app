console.log("hello react")

const app = {
  title: 'Indecision App',
  subtitle: 'subtitle',
  options: ['one', 'two']

}
const template = (
  <div>
  <h1>{app.title}</h1>
  {app.subtitle && <p>{app.subtitle}</p>}
  {app.options.length > 0 ? "Here are your options:": "No options"}
  <ol>
    <li>Item one</li>
    <li>Item two</li>
    <li>Item three</li>
  </ol>
  </div>
)

const appRoot = document.getElementById('app')
