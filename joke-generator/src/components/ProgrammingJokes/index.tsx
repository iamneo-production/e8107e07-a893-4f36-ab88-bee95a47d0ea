import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useHttpClient from "../../httpClient";

const StyledDiv = styled.div``;

export const ProgrammingJoke = () => {
  const [programmingJoke, setprogrammingJoke] = useState("");
  const { getProgrammingJoke } = useHttpClient();

  useEffect(() => {
    getProgrammingJoke()
      .then((res) => {
        setprogrammingJoke(res?.data?.joke);
      })
      .catch((err) => {
        console.log("Error in fetching KnockKnock Joke!!");
      });
  }, []);

  return <StyledDiv>{programmingJoke}</StyledDiv>;
};
