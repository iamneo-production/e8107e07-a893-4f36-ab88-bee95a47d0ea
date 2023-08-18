import React from 'react';
import { connect, useSelector } from 'react-redux';
import {
  fetchRandomJoke,
  fetchProgrammingJoke,
  fetchScienceJoke,
  fetchPunsJoke,
  fetchKnockJoke,
} from '../Action/action';

const JokeGenerator = ({ joke, fetchRandomJoke, fetchProgrammingJoke, fetchScienceJoke , fetchPunsJoke, fetchKnockJoke}) => {
    const jokes = useSelector((state)=> state.joke)
  const categories = ['Random', 'Programming', 'Science', 'Puns' ,'Knock-Knock'];

  const getRandomJokeFromArray = (jokesArray) => {
    if (jokesArray && jokesArray.length > 0) {
      const randomIndex = Math.floor(Math.random() * jokesArray.length);
      return jokesArray[randomIndex];
    }
    return null;
  };

  const handleGetJoke = (category) => {
    console.log(category)
    switch (category) {
      case 'Random':
        fetchRandomJoke();
        console.log(fetchRandomJoke)
        break;
      case 'Programming':
        fetchProgrammingJoke();
        break;
      case 'Science':
        fetchScienceJoke();
        break;
      case 'Puns':
        fetchPunsJoke();
        break;
      case 'Knock-Knock':
        fetchKnockJoke();
        break;
      default:
        break;
    }
  };

  const randomJoke = getRandomJokeFromArray(jokes.data || []);

  return (
    // <div>
    //   <h1>Joke Generator</h1>
    //   <div>
    //     {categories.map((category) => (
    //       <button key={category} onClick={() => handleGetJoke(category)}>
    //         Get {category} Joke
    //       </button>
    //     ))}
    //   </div>
    //   {joke.loading ? (
    //     <p>Loading...</p>
    //   ) : (
    //     <div>
    //       <h2>Joke:</h2>
    //       <p>{randomJoke ? randomJoke.joke : 'No jokes available'}</p>
    //     </div>
    //   )}
    // </div>
    <div className="App">
      <video autoPlay loop muted className="background-video">
        <source src={`${process.env.PUBLIC_URL}/laugh2.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container">
        <h1>Joke Generator</h1>
        {categories.map((category) => (
          <button key={category} onClick={() => handleGetJoke(category)}>
            Get {category} Joke
         </button>
         ))}
        {/* <button onClick={() => fetchJoke('random')}><i className="fas fa-random icon"></i> Get Random Joke</button>
        <button onClick={() => fetchJoke('programming')}><i className="fas fa-code icon"></i> Get Programming Joke</button>
        <button onClick={() => fetchJoke('science')}><i className="fas fa-flask icon"></i> Get Science Joke</button> */}
        {joke.loading? (
            <p>loading....</p>
        ):(
            <div className="joke" id="joke">
          {randomJoke ? randomJoke.joke : 'No jokes available'}
        </div>
        )}
        
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  joke: state.joke,
});

const mapDispatchToProps = {
  fetchRandomJoke,
  fetchProgrammingJoke,
  fetchScienceJoke,
  fetchPunsJoke,
  fetchKnockJoke
};

export default connect(mapStateToProps, mapDispatchToProps)(JokeGenerator);





