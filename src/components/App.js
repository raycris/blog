import React, { useState } from "react";
import styled from "styled-components";

import HeroPhoto from "../assets/img/code.jpg";
import GithubSVG from "../assets/icon/github.svg";
import "../index.css";
import Points from "./Points";

const infor = [
  {
    orgin: "Santo Domingo, Dominican Replic",
    education: "Instituto Tecnológico de Santo Domingo",
    degree: "Software Enginieer",
    email: "raycris97@gmail.com",
    github: "https://github.com/raycris",
  },
];

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
          <CosoleBorder>
            <Points />
            <></>
            <></>
          </CosoleBorder>
          {infor.map((item) => (
            <TextContainer>
              <CosoleDescription>Raycris.oring </CosoleDescription>
              <Subtitle>{item.orgin} 📌</Subtitle>
              <CosoleDescription>Raycris.education</CosoleDescription>
              <Subtitle>{item.education} 🐝📕</Subtitle>
              <CosoleDescription>Raycris.degree</CosoleDescription>
              <Subtitle>{item.degree} 👨🏾‍💻</Subtitle>
              <CosoleDescription>Raycris.github</CosoleDescription>
              <Subtitle>
                <a>{item.github} ☁️</a>
              </Subtitle>
              <CosoleDescription>Raycris.email</CosoleDescription>
              <Subtitle>{item.email} 📧</Subtitle>
              <CosoleDescription>Raycris.skills</CosoleDescription>
              <Subtitle>
                ["Reactjs", "React native", "Front-end", "JavaScript", "Git &
                GitHub", "HTML", "CSS", "Sass", "PostgresSQL", "Angular", "BEM"]
                🤹🏾
              </Subtitle>
            </TextContainer>
          ))}
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
const Label = styled.h2`
  font-family: "Press Start 2P", cursive;
`;

const ConsoleContainer = styled.section`
  width: 38%;
  height: 620px;
  background: #383737;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;
const CosoleBorder = styled.div`
  height: 20px;
  background: #ccc;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;

const CosoleDescription = styled.p`
  color: white;
  font-size: 20px;
  line-height: 20px;
  font-family: "Source Code Pro", monospace;
`;

const Subtitle = styled.h4`
  color: #ccc;
  flex-wrap: nowrap;
  font-size: 16px;
  line-height: 20px;
  font-family: "Source Code Pro", monospace;
`;

const TextContainer = styled.section`
  margin-left: 36px;
  max-width: fit-content;
`;
