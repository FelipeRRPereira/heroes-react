import React, { Component, Fragment  } from 'react';
import { Header } from './components/Header';
import { FormHeroes } from './components/FormHeroes';
import { ListHeroes } from './components/ListHeroes';
import heroes from './heroes.json';

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
    const heroes = [...this.state.heroes, hero]
    this.setState({ heroes })
  }
  render() {
    return (
      <Fragment>
        <Header />
        <FormHeroes onAddHero={this.addHero}/>
        <ListHeroes heroes={heroes} />
      </Fragment>
    );
  }
}

export default App;
