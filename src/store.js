import { observable, action } from 'mobx';
import pokeApi from './api'


class PokeStore {
    @observable pokemons = [] ;

    @action 
    getallPokemon(){
        pokeApi.pokemons()
            .then(res =>{
                this.pokemons = res.data.results
            })
    }

}
export default PokeStore;
