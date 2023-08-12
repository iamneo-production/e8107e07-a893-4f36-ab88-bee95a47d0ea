import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useHttpClient from "../../httpClient";
import { jokeMap } from "../../utils";

const StyledDiv = styled.div``;

export const ScienceJoke = () => {
  const [scienceJoke, setScienceJoke] = useState("");
  const { getJoke } = useHttpClient();

  useEffect(() => {
    getJoke(jokeMap.SCIENCE)
      .then((res) => {
        setScienceJoke(res?.data?.joke);
      })
      .catch((err) => {
        console.log("Error in fetching KnockKnock Joke!!");
      });
  }, []);

  return <StyledDiv>{scienceJoke}</StyledDiv>;
};
