import { getMovies } from "../api"


const Movies=()=>{
const rtaM= getMovies().then ((data)=>{return data;});

return <h1>Movies</h1>




};
export {Movies}