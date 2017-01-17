import React, { Component } from 'react';
import axios from 'axios';
import AnalogyBox from '../container/AnalogyBox';
import Analogy from './Analogy';

export default class AnalogyForm extends Component {
// const AnalogyForm = (props) => {
 
//  const resetForm = props.resetForm;

  render() {
    return (
    
      <form className="analogy-form" onSubmit={this._handleSubmit.bind(this)}>
        <input
          className="form-control"
          type="text"
          placeholder="this thing..."
          ref={(input) => this._name = input}  
          
        />

        <textarea
          className="form-control"
          type="text"
          placeholder="...is like this thing"
          ref={(textarea) => this._content = textarea}> 
        </textarea>
       
       <div className="form-control">
       <button type="submit">
         submit
       </button>
       
       </div>
      </form>

    );
  }

   _handleSubmit(e) {
    e.preventDefault();
    let name = this._name;
    let content = this._content;
    this.props.addAnalogy(name.value, content.value);
    // this.refs.someForm.getDOMNode().reset();
   document.getElementById("analogy-form").reset();

  }

}



