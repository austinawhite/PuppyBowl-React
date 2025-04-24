
import {Routes, Route, Link} from 'react-router-dom'

function NewPlayerForm() {

    return (
      <>
      <h1> Register for Puppy Bowl 2025! </h1>
        <form>
          <label> Puppy Name <input name="name" value="name"/> </label>
          <label> Breed <input name="breed" value="breed"/> </label> 
          <label> Image <input name="image" value="image"/> </label>
        </form>
      </>
    )
  }
  
  export default NewPlayerForm
  