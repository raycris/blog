import React from "react";

import styled from "styled-components";

const Points = () => {
  return (
    <Container>
      <Cicle />
      <Cicle style={{backgroundColor: "#DEB318"}}/>
      <Cicle style={{backgroundColor: "#32E61E"}}/>
    </Container>
  );
};

export default Points;

const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
const Cicle = styled.div`
  width: 10px;
  height: 10px;
  margin: 0 4px;
  border-radius: 50%;
  background-color: red;
`;
