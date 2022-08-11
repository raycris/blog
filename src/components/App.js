import React from "react";
import styled from "styled-components";
import HeroPhoto from "../assets/img/code.jpg";
import { colors } from "../utils/colors";
import { fontSize, fontFamily } from "../utils/fonts";
import Points from "./Points";
import "../index.css";

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
  return (
    <Container>
      <PintureContainer>
        <HeroPiture src={HeroPhoto} alt="Hero image" />
      </PintureContainer>
      <InforContainer>
        <LabelContainer>
          <Label>Hello word, I'm Raycris Maldonado. Front-end developer</Label>
        </LabelContainer>
        <ConsoleContainer>
          <ConsoleBorder>
            <Points />
            <></>
            <></>
          </ConsoleBorder>
          {infor.map((item) => (
            <TextContainer>
              <ConsoleDescription>C:\Users\Raycris\oring </ConsoleDescription>
              <Subtitle>{item.orgin} 📌</Subtitle>
              <ConsoleDescription>
                C:\Users\Raycris\education
              </ConsoleDescription>
              <Subtitle>{item.education} 🐝📕</Subtitle>
              <ConsoleDescription>C:\Users\Raycris\degree</ConsoleDescription>
              <Subtitle>{item.degree} 👨🏾‍💻</Subtitle>
              <ConsoleDescription>C:\Users\Raycris\github</ConsoleDescription>
              <Subtitle>
                <a
                  href="https://github.com/raycris"
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.github} ☁️
                </a>
              </Subtitle>
              <ConsoleDescription>C:\Users\Raycris\email</ConsoleDescription>
              <Subtitle>{item.email} 📧</Subtitle>
              <ConsoleDescription>C:\Users\Raycris\skills</ConsoleDescription>
              <Subtitle>
                ["Reactjs", "React native", "Front-end", "JavaScript", "Git &
                GitHub", "HTML", "CSS", "Sass", "PostgresSQL", "Angular", "BEM"]
                🤹🏾
              </Subtitle>
            </TextContainer>
          ))}
        </ConsoleContainer>
      </InforContainer>

      <FooterContainer>
        <FooterLabel>By: Raycris</FooterLabel>
      </FooterContainer>
    </Container>
  );
};

export default App;

const Container = styled.div`
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
  background-color: ${colors.softRed};
`;

const LabelContainer = styled.div`
  padding: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Label = styled.h2`
  font-family: ${fontFamily.secundary};
`;

const ConsoleContainer = styled.section`
  width: 38%;
  height: 620px;
  background: ${colors.darkGray};
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;
const ConsoleBorder = styled.div`
  height: 20px;
  display: flex;
  background: ${colors.lightGray};
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;

const ConsoleDescription = styled.p`
  color: ${colors.consoleGreen};
  font-size: ${fontSize.small};
  line-height: 20px;
  font-weight: bold;
  font-family: ${fontFamily.primary};
`;

const Subtitle = styled.h4`
  color: ${colors.lightGray};
  flex-wrap: nowrap;
  font-size: ${fontSize.small};
  line-height: 20px;
  font-family: ${fontFamily.primary};
`;

const TextContainer = styled.section`
  max-width: fit-content;
  margin-left: 36px;
`;

const FooterContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: end;
`;

const FooterLabel = styled.p`
  font-size: ${fontSize.small};
  font-family: ${fontFamily.secundary};
`;
