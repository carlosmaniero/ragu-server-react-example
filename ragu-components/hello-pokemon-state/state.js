const axios = require('axios');


export default (props) => axios.get(`https://pokeapi.co/api/v2/pokemon/${props.id}`)
    .then(response => ({
        name: response.data.name
    }));