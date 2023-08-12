import { useEffect, useState } from "react";
import { IJoke } from "../models/IJoke";

type IJokeDetails = { data?: IJoke, isFetchError?: boolean }
const jokeCategories = ["programming", "science", "knockknock","puns", "unknown"]
const useGetRandomJoke = () => {
    const [jokeDetails, setJokeDetails] = useState<IJokeDetails>({ isFetchError: false });
    const [isFetching, setIsFetching] = useState(false);
    const [isFetchedOnce, setIsFetchedOnce] = useState(false);
    const getCategory = ()=>{
        const category = jokeCategories[Math.floor(Math.random() * jokeCategories.length)]
        return category
    }
    const fetchData = async () => {
        setIsFetching(true)
        setIsFetchedOnce(true)
        const category = getCategory();
        try {
            const res = await fetch(`https://ide-ecaffdfcaafcdebfaeacdaecdcbdacbedad.project.examly.io/proxy/8080/api/jokes/${category}`);
            if (res.ok) {
                const joke = await res.json();
                console.log(joke)
                setJokeDetails({ data: joke, isFetchError: false })
            } else {
                setJokeDetails({ isFetchError: true })
            }
        } catch (err) {
            setJokeDetails({ isFetchError: true })
        } finally {
            setIsFetching(false)
        }

    } 

    return { ...jokeDetails, isFetching, isFetchedOnce, fetchData }
}

export default useGetRandomJoke;