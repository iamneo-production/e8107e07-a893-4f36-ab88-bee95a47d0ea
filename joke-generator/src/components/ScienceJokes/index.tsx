import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useHttpClient from "../../httpClient";

const StyledDiv = styled.div``;

export const knockKnock = () => {
  const [scienceJoke, setScienceJoke] = useState("");
  const { getScienceJoke } = useHttpClient();

  useEffect(() => {
    getScienceJoke()
      .then((res) => {
        setScienceJoke(res?.data?.joke);
      })
      .catch((err) => {
        console.log("Error in fetching KnockKnock Joke!!");
      });
  }, []);

  return <StyledDiv>{scienceJoke}</StyledDiv>;
};
