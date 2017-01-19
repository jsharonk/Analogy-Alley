import React, { Component } from 'react';
import axios from 'axios';
import Analogy from '../components/Analogy';
import AnalogyForm from '../components/AnalogyForm';

export default class AnalogyBox extends Component {
   constructor() {
    super();
    this.state = {
      showAnalogies: false,
      analogies: [],
      selectedAnalogy: {}
    }
  }
  componentWillMount() {
    console.log('logging before');
    this._fetchAnalogies();
  
  }
  componentDidMount() {
    console.log('logging after component did mount')
    this._timer = setInterval(
      () => this._fetchAnalogies(), 
      2000
      );
  }

  componentWillUnmount() {
    clearInterval(this._timer);
    
  }

 _deleteAnalogy(analogyId) {
   axios.delete(`api/analogies/${analogyId}`)
   .catch(error => {
     console.log(error);
   });
  
  //  const analogies = [...this.state.analogies];
  //  const analogyIndex = analogies.indexOf(analogy);
  //  analogies.splice(analogyIndex, 1);
   const analogies = this.state.analogies.filter(
     analogy => analogy.id !== analogyId
   );     

   this.setState({
     analogies: analogies
   });
 }

  _fetchAnalogies() {
    axios.get('/api') 
    .then(res => {
      console.log('rose demands you appear!!')
      const analogies = res.data;
      analogies.map(function(analogy) {
        console.log(analogy);
      });
      this.setState({
        analogies: analogies
      });
    })
    .catch(error => {
      console.log('in error')
      console.log(error);
    });
  }


  _fetchAnalogy (analogyId) {
    axios.get(`/${analogyId}`)
      .then(res => res.data)
      .then(analogy => this.setState({
        selectedAnalogy: analogy
      }));
  }
  _getAnalogies() {
    return this.state.analogies.map((analogy) => {
      console.log('inside get analogies now')
      return (
        <Analogy
          name={analogy.name} 
          content={analogy.content} 
          key={analogy.id} //analogy.id          
          onDelete={this._deleteAnalogy.bind(this)}
          />
      );
    });
  }
  //   _handleDelete(event) {
  //   event.preventDefault();
  //   if (confirm('are you sure?')) {
  //     this.props.onDelete(this.props.analogy);
  //   }
  // }
  _getAnalogiesTitle(analogyCount) {
    if(analogyCount === 0) {
      return 'no analogies yet';
    } else if (analogyCount === 1) {
      return '1 analogy';
    } else {
      return `${analogyCount} analogies`;
    }
  }
 
 _handleClick() {
   this.setState({
     showAnalogies: !this.state.showAnalogies
   });
 }

 _addAnalogy(name, content) {
   console.log('moment of truth');
   const analogy = { 
      
     name, 
     content
   };
   axios.post('/api', { //'analogies'
     name: name,
     content: content 
     
   })
   .then(res => res.data)
   .then(newAnalogy => {
     this.setState({ analogies: this.state.analogies.concat([newAnalogy]) });
   })
   .catch(error => {
     console.log(error);
   });
 }


  render() {
    const analogies = this._getAnalogies();
    let buttonText = 'see all';
    let analogyNodes;
    if (this.state.showAnalogies) {
      buttonText = 'hide all';
      analogyNodes = <div className="analogy-list">{analogies}></div>
    }
    return (
        <div className="analogy-box">
        <h1>Analogy Alley</h1>
        <h4 className="analogy-count">{this._getAnalogiesTitle(analogies.length)}</h4>
        <AnalogyForm addAnalogy={this._addAnalogy.bind(this)} />
        <button onClick={this._handleClick.bind(this)}>{buttonText}</button>
        <div className="analogy-list">
          {analogyNodes}
       </div>
      
      </div>
    );
  }
}





