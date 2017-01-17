import React, { Component } from 'react';
import axios from 'axios';
import Analogy from '../components/Analogy';
import AnalogyForm from '../components/AnalogyForm';


export default class AnalogyBox extends Component {
   constructor(props) {
    super(props);
    this.state = {
      showAnalogies: false,
      analogies: [],
      selectedAnalogy: {}
    }
  }
  componentWillMount() {
    this._fetchAnalogies()
  
  }
  componentDidMount() {
    this._timer = setInterval(
      () => this._fetchAnalogies(), 
      2000
      );
  }


  componentWillUnmount() {
    clearInterval(this._timer);
    
  }

 _deleteAnalogy(analogy) {
   axios.delete(`analogies/${analogy.id}`)
   .catch(error => {
     console.log(error);
   });
  
   const analogies = [...this.state.analogies];
   const analogyIndex = analogies.indexOf(analogy);
   analogies.splice(analogyIndex, 1);

   this.setState({
     analogies: analogies
   });
 }

  _fetchAnalogies() {
    axios.get('/analogies') 
    .then(res => {
      const analogies = res.data;
      this.setState({
        analogies: analogies
      });
    })
    .catch(error => {
      console.log(error);
    });
  }


  _selectAnalogy (analogyId) {
    axios.get(`/analogies/${analogyId}`)
      .then(res => res.data)
      .then(analogy => this.setState({
        selectedAnalogy: analogy
      }));
  }
  _getAnalogies() {
    return this.state.analogies.map((analogy) => {
      return (
        <Analogy
          name={analogy.name} 
          content={analogy.content} 
          key={analogy.id} //analogy.id          
          onDelete={this._deleteAnalogy.bind(this)}
          // onClick={() => this._selectAlbum(analogy.id).bind(this)}
          />
      );
    });
  }
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
   const analogy = { 
      //id?
     name, 
     content
   };
   axios.post('/analogies', { //'analogies'
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
      analogyNodes = <div className="analogy">{analogies}></div>
    }
    return (
        <div className="analogy-box">
        <h1>Analogy Alley</h1>
        <h4 className="analogy-count">{this._getAnalogiesTitle(analogies.length)}</h4>
        <AnalogyForm addAnalogy={this._addAnalogy.bind(this)} />
        <button onClick={this._handleClick.bind(this)}>{buttonText}</button>
        <div className="analogy">
          {analogyNodes}
       </div>
      
      </div>
    );
  }
}





