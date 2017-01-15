import React, { Component } from 'react';
import axios from 'axios';
import AnalogyBox from '../container/AnalogyBox';
import Analogy from './Analogy';

export default class AnalogyForm extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: '', 
  //     content: ''
  //   }
  //   this.handleNameChange = this.handleNameChange.bind(this),
  //   this.handleContentChange = this.handleContentChange.bind(this),
  // }

  // handleNameChange (e) {
  //   this.setState({
  //     name: e.name.value 
  //   });
  // }

  // handleContentChange (e) {
  //   this.setState({
  //     content: e.content.value
  //   });
  // }
  _handleSubmit(e) {
    e.preventDefault();
    console.log('inside handle submit')
    let name = this._name;
    let content = this._content;
    this.props.addAnalogy(name.value, content.value);
  }

  render() {
    return (
    
      <form className="analogy-form" onSubmit={this._handleSubmit.bind(this)}>
        <input
          type="text"
          placeholder="this thing..."
          ref={(input) => this._name = input}
          
        />
        <textarea
          type="text"
          placeholder="...is like this thing"
          ref={(textarea) => this._content = textarea}
          > 
        </textarea>
       <input type="submit" value="submit"/>

      </form>

    );
  }
}



