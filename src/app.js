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
  handlePick() {
    alert('handlepick');
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What Should I do?</button>
      </div>
    )
  }
}

//add remove all
//alert remove allto screen
//setup onClick

//Set up form
//wire up onSubmit
//handle add option - fetch value if it exists alert itto screen


const obj = {
  name:'Hats'
}

class Options extends React.Component {
  constructor(props){
    super(props);
    this.removeAll = this.removeAll.bind(this);
  }
  removeAll(){
    alert(this.props.options)
  }
  render() {
    return (
      <div>

        {this.props.options.map((option) => { return <p key={option}>{option}</p>})}
        <Option/>
        <button onClick={this.removeAll}>Remove All</button>
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
  onFormSubmit(e){
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
      alert(option);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>

      </div>
    )
  }
}
//Class options static text options component here
//Add option componenet add text



ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
