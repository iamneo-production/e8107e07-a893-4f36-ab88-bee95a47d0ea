import React, {useState, UseEffect} from "react";
import JokeDisplay from './JokeDisplay';
import JokeButton from './JokeButton';
 const App  =() =>{
    const [Joke,setJoke] = useState('');
 
    const fetchJoke=async() =>{
        try{
            const response = await fetch('https://api.example.com/jokes/random');
            const data = await response.json();
            setJoke(data.Joke);
        } catch (error){
            console.error('Error fetching Joke:', error);
                }
    };
    UseEffect(() => {
        fetchJoke();
    },[]);
 
    return(
        <div className="app">
            <h1>Joke Generator</h1>
            <JokeDisplay joke={joke}/>
        </div>
    );
 };
 export default App;