import axios from "axios";

export default {
    pokemons(){
        return  axios.get('https://pokeapi.co/api/v2/pokemon/')
    }
}
