import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useHttpClient from "../../httpClient";

const StyledDiv = styled.div``;

export const PunJoke = () => {
  const [punJoke, setPunJoke] = useState("");
  const { getPunsJoke } = useHttpClient();

  useEffect(() => {
    getPunsJoke()
      .then((res) => {
        setPunJoke(res?.data?.joke);
      })
      .catch((err) => {
        console.log("Error in fetching KnockKnock Joke!!");
      });
  }, []);

  return <StyledDiv>{punJoke}</StyledDiv>;
};
