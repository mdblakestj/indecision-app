class IndecisionApp extends React.Component {
  constructor (props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this)
    this.addOption = this.addOption.bind(this)
    this.handlePick =this.handlePick.bind(this)
    this.state = {
      options: []
    }
  }
  addOption(option) {
    if (!option) {
      return 'Please enter a valid value';
    } else if (this.state.options.indexOf(option) > -1){
      return 'This option already exists';
    } else {
      this.setState((prevState) => {
        return{
          options: prevState.options.concat(option)
        }
      })
    }
  }
  handlePick() {
    const rnum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[rnum];
    alert(option);
  }
  handleDelete() {
    this.setState(() =>{
      return {
        options: []
      }

  })
  }
  render () {
    const title = 'Indecision App'
    const subtitle = 'Put your life in the hands of a computer'
    return (
      <div>
        <Header subtitle={subtitle}/>
        <Action hasOptions={this.state.options.length > 0}
        handlePick={this.handlePick}/>
        <Options options={this.state.options}
        handleDelete={this.handleDelete}/>
        <Addoptions addOption={this.addOption} />
      </div>
    )
  }
}
// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }

Header.defaultProps = {
  title: 'some default'
};
const Header = (props) => {
  return (
      <div>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
      </div>
    );
  }

const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick}
       disabled = {!props.hasOptions}
      >What Should I do?</button>
    </div>
  )
}

// class Action extends React.Component {
//   render() {
//     return (
//       <div>
//         <button onClick={this.props.handlePick}
//          disabled = {!this.props.hasOptions}
//         >What Should I do?</button>
//       </div>
//     )
//   }
// }

const Options = (props) => {
  return (
    <div>
      <Option/>
      {props.options.map((option) => { return <p key={option}>{option}</p>})}
      <button onClick={props.handleDelete}>Remove All</button>
    </div>
  )
}


// class Options extends React.Component {
//
//   render() {
//     return (
//       <div>
//         <Option/>
//         {this.props.options.map((option) => { return <p key={option}>{option}</p>})}
//         <button onClick={this.props.handleDelete}>Remove All</button>
//       </div>
//     )
//   }
// }
//option add static text

const Option = () => {

    return (
      <div>
        <p>Options:</p>
      </div>
    )

}


// class Option extends Options {
//   render() {
//     return (
//       <div>
//         <p>Options:</p>
//       </div>
//     )
//   }
// }

class Addoptions extends React.Component {
  constructor(props){
    super(props)
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      error: undefined
    }
  }
  onFormSubmit(e){
    e.preventDefault();
    const option = e.target.elements.option.value;
    const error = this.props.addOption(option);
    this.setState(() => {
      return {
        error: error
      }
    })

  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
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

// const User = (props) => {
//   return (
//     <div>
//       <p>Test</p>
//       <p>{props.test}</p>
//     </div>
//   )
// }



ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
