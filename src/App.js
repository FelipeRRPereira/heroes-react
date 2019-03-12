<<<<<<< HEAD
import React, { Component } from 'react';
import { Header, FormHeroes, ListHeroes } from './components/imports';
=======
import React, { Component, Fragment  } from 'react';
import { Header } from './components/Header';
import { FormHeroes } from './components/FormHeroes';
import { ListHeroes } from './components/ListHeroes';
>>>>>>> a8882cbfc9684978f411b1035e096e2f69e6feac
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
      <Fragment>
        <Header />
        <FormHeroes onAddHero={this.addHero}/>
<<<<<<< HEAD
        <ListHeroes heroes={this.state.heroes} />
      </div>
=======
        <ListHeroes heroes={heroes} />
      </Fragment>
>>>>>>> a8882cbfc9684978f411b1035e096e2f69e6feac
    );
  }
}

export default App;
