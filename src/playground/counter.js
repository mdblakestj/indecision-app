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

let count = 0;

const addOne = () => {
  count++;
  renderCounterApp();
}

const reset = () => {
  count = 0;
  renderCounterApp();
}

const minusOne = () => {
  count--;
  renderCounterApp();
}

// const templateTwo = (
//    <div>
//     <h1>Count: {count}</h1>
//     <button onClick={addOne}>+1</button>
//     <button onClick={minusOne}>-1</button>
//     <button onClick={reset}>Reset</button>
//    </div>
// );

//Make a button with the text minus one
//Make a button that resets log reset

// console.log(templateTwo);
const appRoot = document.getElementById('app')
// ReactDOM.render(templateTwo, appRoot)

const renderCounterApp = () => {
  const templateTwo = (
     <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>Reset</button>
     </div>
  );
  ReactDOM.render(templateTwo, appRoot);

}
renderCounterApp();
