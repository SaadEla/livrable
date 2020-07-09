import React, { Component } from 'react';
import Pokeball from './pokeball.png'
import './index.css';
import { observer, inject } from 'mobx-react';


@inject('store')
@observer
class pokeComponent extends Component {
  constructor(props) {
    super(props)
    this.props.store.getallPokemon()

  }
  state = {
    filter:  '',
  }

  handleChange = (e) =>{
    this.setState({
        filter: e.target.value
    })
  }
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <nav className="nav-wrapper">
          <div className="container">
            <input className='serach' placeholder='Search' onChange={this.handleChange}/>
          </div>
        </nav>
        {
          this.props.store.pokemons && this.props.store.pokemons
                .filter(pokemon=>{
                  if(this.state.filter){
                    return(pokemon.name.includes(this.state.filter))
                  }else{
                    return(true)
                  }
                })
                .map((pokemon) => {
                  return (
                    <div className="card" key={pokemon.name}>
                      <img src={Pokeball} alt="A pokeball" />
                      <div className="card-content">
                        <span className="card-title red-text">{pokemon.name}</span>
                        <p><a href={pokemon.url}>Visit me!</a></p>
                      </div>
                    </div>
                  )
              })
        }

      </div>
    );
  }
}

export default pokeComponent;