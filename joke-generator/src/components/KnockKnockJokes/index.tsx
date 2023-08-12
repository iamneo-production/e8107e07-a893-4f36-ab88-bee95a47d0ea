import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useHttpClient from "../../httpClient";
import { jokeMap } from "../../utils";

const StyledDiv = styled.div``;

export const KnockJoke = () => {
  const [knockJoke, setknockJoke] = useState("");
  const { getJoke } = useHttpClient();

  useEffect(() => {
    getJoke(jokeMap.KNOCK)
      .then((res) => {
        setknockJoke(res?.data?.joke);
      })
      .catch((err) => {
        console.log("Error in fetching KnockKnock Joke!!");
      });
  }, []);

  return <StyledDiv>{knockJoke}</StyledDiv>;
};
