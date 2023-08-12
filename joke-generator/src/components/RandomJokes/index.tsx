import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useHttpClient from "../../httpClient";

const StyledDiv = styled.div``;

export const RandomJoke = () => {
  const [randomJoke, setRandomJoke] = useState("");
  const { getRandomJoke } = useHttpClient();

  useEffect(() => {
    getRandomJoke()
      .then((res) => {
        setRandomJoke(res?.data?.joke);
      })
      .catch((err) => {
        console.log("Error in fetching KnockKnock Joke!!");
      });
  }, []);

  return <StyledDiv>{randomJoke}</StyledDiv>;
};
