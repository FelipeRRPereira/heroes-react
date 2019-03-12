import React, { Component } from 'react';

const Hero = props => (
    <div className="heroes">
        <img className="image-hero" alt={props.name} src={props.image} />
        <h1 className="title-hero">{props.name}</h1>
    </div>
)

export class ListHeroes extends Component {
    renderHeroes = () => {
        return this.props.heroes.map((hero, key) => (
            <Hero key={key} name={hero.name} image={hero.image} />
        ))
    }

    render() {
        if (this.props.heroes.length === 0) {
            return <p>Sem heróis na listagem.</p>
        }
        return (
            <div className="list-heroes">
                <h1 className="title-heroes">Heroes</h1>
                {this.renderHeroes()}
            </div>
        )
    }
}