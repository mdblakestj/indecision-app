const appRoot = document.getElementById('app')


const options = {
  message: "Show details",
  messageTwo: "Hide details",
  details: ""
}


let counter = true;
// const toggle = () => {
//   if (counter){
//     return <button onClick={toggle}> Hide Details </button>
//     <p>Here are the details</p>
//   } else {
//     return <button onClick={toggle}>Show Details</button>
//   }
// }

let toggle = () => {
  if (counter) {
    options.message = "Hide Details"
    options.details = "Here are the deets"
    counter = false;
    renderIt();
  } else {
    options.message = "Show details"
    counter = true;
    options.details = ""
    renderIt();
  }
}

const renderIt = () => {
  const template = (
    <div>
    <h1>Visibility Toggle</h1>
    <button onClick={toggle}>{options.message}</button>
    <h1>{options.details}</h1>
    </div>
  )
  ReactDOM.render(template, appRoot);
}

renderIt()


//show details
//hide details
