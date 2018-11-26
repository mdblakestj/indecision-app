import React from 'react'
import Addoptions from './AddOption.js'
import Option from './Option.js'
import Header from './Header.js'
import Action from './Action.js'
import Options from './Options.js'



class IndecisionApp extends React.Component {
  constructor (props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
    this.addOption = this.addOption.bind(this)
    this.handlePick =this.handlePick.bind(this)
    this.state = {
      options: props.options
    }
  }
  componentDidMount(){
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({options}))
      }

    } catch(e) {

    }
  };
  componentDidUpdate(prevProps, prevState){
    if(prevState.options.length !== this.state.options.length) {
      const jsonOptions = JSON.stringify(this.state.options)
      localStorage.setItem('options', jsonOptions);

    }

      console.log("Component Did Update")};
  componentWillUnmount(){console.log("Component unmounted")}
  addOption(option) {
    if (!option) {
      return 'Please enter a valid value';
    } else if (this.state.options.indexOf(option) > -1){
      return 'This option already exists';
    } else {
      this.setState((prevState) => ({options: prevState.options.concat(option)}))
    }
  }
  handlePick() {
    const rnum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[rnum];
    alert(option);
  }
  handleDelete() {
    this.setState(() => ({ options: []}))
  }
  handleDeleteOption(option) {
    console.log("hdo", option);
    const index = this.state.options.indexOf(option);
    this.setState((prevState) => ({options: prevState.options.filter(opt => opt != option )}))
    console.log(this.state.options)
  }
  render () {

    return (
      <div>
        <Header />
        <Action hasOptions={this.state.options.length > 0}
        handlePick={this.handlePick}/>
        <Options options={this.state.options}
        handleDelete={this.handleDelete} handleDeleteOption={this.handleDeleteOption}/>
        <Addoptions addOption={this.addOption} />
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: []
}

export default IndecisionApp;
