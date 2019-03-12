import React, { Component } from 'react';
import { Header, FormHeroes, ListHeroes } from './components/imports';
import heroes from './heroes.json';
import './styles.css';
import '../node_modules/font-awesome/css/font-awesome.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      heroes: []
    }
  }
  componentDidMount() {
    this.setState({ heroes })
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(prevState)
    console.log(this.state)
  }
  addHero = (hero) => {
    const newHeroes = [...this.state.heroes, hero]
    this.setState({ heroes: newHeroes })
  }
  render() {
    return (
      <div>
        <Header />
        <FormHeroes onAddHero={this.addHero}/>
        <ListHeroes heroes={this.state.heroes} />
      </div>
    );
  }
}

export default App;
