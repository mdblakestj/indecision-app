class IndecisionApp extends React.Component {
  render () {
    const title = 'Indecision App'
    const subtitle = 'Put you life in the hands of a computer'
    const options = ['Thing one', 'Thing Two', 'Thing Four']
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options}/>
        <Addoptions />
      </div>
    )
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
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

//Set up options prop for options component

//render the length of an array

class Options extends React.Component {
  render() {
    return (
      <div>
        {this.props.options.map((option) => { return <p key={option}>{option}</p>})}
        <Option/>
      </div>
    )
  }
}
//option add static text

class Option extends Options {
  render() {
    console.log(this.props.options)
    return (
      <div>
        <p>Option</p>
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



ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
