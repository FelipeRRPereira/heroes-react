import React, { Component } from 'react';
<<<<<<< HEAD
=======
import '../styles.css';
>>>>>>> a8882cbfc9684978f411b1035e096e2f69e6feac

export class FormHeroes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            image: ''
        }
        this.onNameChange = this.onNameChange.bind(this)
        this.onImageChange = this.onImageChange.bind(this)
    }

    onNameChange = (event) => {
        const name = event.target.value
        this.setState({
            name: name
        })
    }

    onImageChange(event) {
        const image = event.target.value
        this.setState({
            image
        })
    }

    handleAddHero = (event) => {
        event.preventDefault()

        const hero = {
            name: this.state.name,
            image: this.state.image
        }
        this.props.onAddHero(hero)
        this.setState({
            name: '',
            image: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleAddHero} className="content">
                <label>Nome</label>
                <input
                    type="text"
                    value={this.state.name}
                    onChange={this.onNameChange}
                />
                <label>Imagem</label>
                <input
                    type="text"
                    value={this.state.image}
                    onChange={this.onImageChange} 
                />
                <button>Enviar</button>
            </form>
        )
    }
}