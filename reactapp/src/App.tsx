import './App.css';
import { Box, Button, Stack } from '@mui/material';
import useGetRandomJoke from './hooks/useGetRandomJoke';
import DisplayJoke from './components/DisplayJoke';
import LoadingIndicator from './components/LoadingIndicator';

function App() {
  const jokeDetails = useGetRandomJoke()
  const { isFetching, isFetchedOnce, data, isFetchError, fetchData } = jokeDetails
  return (
    <div className="App">
      <LoadingIndicator show={isFetching} />
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", height: "100vh",
        justifyContent: "center"
      }}>
        <Button sx={{mb: 2}} variant="contained" size='large' onClick={() => fetchData()}>Get Joke</Button>

        {isFetchedOnce && !isFetching && <DisplayJoke data={data} isError={isFetchError} />}
      </Box>
    </div >
  );
}

export default App;
