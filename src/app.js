class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision App</h1>
        <h2>Put you life in the hands of a computer</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What Should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <p>Options Here</p>
      </div>
    )
  }
}

class Addoptions extends React.Component {
  render() {
    return (
      <div>
        <p>Add Options</p>
      </div>
    )
  }
}
//Class options static text options component here
//Add option componenet add text

const jsx = (
  <div>
    <Header/>
    <Action/>
    <Options/>
    <Addoptions/> 
  </div>
);

ReactDOM.render(jsx, document.getElementById('app'))
