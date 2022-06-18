import React, { useState } from "react";
import styled from "styled-components";

import HeroPhoto from "../assets/img/code.jpg";

const App = () => {
  const [users, setUsers] = useState([
    {
      name: "Raycris",
      email: "Raycris97@gmail.com",
      link: "https://gitdub.com/raycris",
    },
    {
      name: "Juan",
      email: "JuancitoPricolito@gmail.com",
      link: "Pricolito.com",
    },
  ]);
  return (
    <Margen>
      <PintureContainer>
        <HeroPiture src={HeroPhoto} alt="Hero image" />
      </PintureContainer>
      <InforContainer>
        <LabelContainer>
          <Label>Hello word, I'm Raycris Maldonado. Front-end developer</Label>
        </LabelContainer>
        <ConsoleContainer>
          <CosoleBorder />
        </ConsoleContainer>
      </InforContainer>

      <Tabla>
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>link</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.email}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.link}</td>
            </tr>
          ))}
        </tbody>
      </Tabla>
    </Margen>
  );
};

export default App;

const Tabla = styled.table`
  width: 100%;
  text-align: left;
  td {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

const Margen = styled.div`
  width: 100%;
  height: 100%;
`;

const PintureContainer = styled.div`
  width: 100%;
  height: 400px;
`;

const HeroPiture = styled.img`
  width: 100%;
  height: 400px;
  flex-wrap: nowrap;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const InforContainer = styled.div`
  height: 900px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  background-color: #c26868;
`;

const LabelContainer = styled.div`
  padding: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Label = styled.h2``;

const ConsoleContainer = styled.section`
  width: 670px;
  height: 620px;
  background: #383737;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;
const CosoleBorder = styled.div`
  height: 20px;
  background: #ccc;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;
