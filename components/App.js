import React from "react";
import styled from "styled-components";
import HeroPhoto from "../assets/img/code.jpg";
import { colors } from "../utils/colors";
import { fontSize, fontFamily } from "../utils/fonts";
import Points from "./Points";
import "../index.css";

const infor = [
  {
    id: 1,
    directory: "Santo Domingo, Dominican Replic",
    route: "C:/Users/Raycris/oring",
  },
  {
    id: 2,
    directory: "Instituto Tecnológico de Santo Domingo",
    route: "C:/Users/Raycris/education",
  },
  { id: 3, directory: "Software Enginieer", route: "C:/Users/Raycris/degree" },
  { id: 4, directory: "raycris97@gmail.com", route: "C:/Users/Raycris/email" },
  {
    id: 5,
    directory: "https://github.com/raycris",
    route: "C:/Users/Raycris/github",
  },
  {
    id: 6,
    directory:
      "[ Reactjs, React native, Front-end, JavaScript, Git&GitHub, HTML, CSS, Sass, PostgresSQL, Angular, BEM ]",
    route: "C:/Users/Raycris/skills",
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
            <TextContainer key={item.id}>
              <ConsoleDescription>{item.route}:</ConsoleDescription>
              {item.id !== 4 && item.id !== 5 ? (
                <Subtitle> {item.directory}</Subtitle>
              ) : (
                <>
                  {item.id === 4 ? (
                    <SpecialSubtitle
                      href="mailto:raycris97@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.directory}
                    </SpecialSubtitle>
                  ) : (
                    <SpecialSubtitle
                      href="https://github.com/raycris"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.directory}
                    </SpecialSubtitle>
                  )}
                </>
              )}
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
  height: 100vh;
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
  background: ${colors.lightWhite};
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;

const ConsoleDescription = styled.p`
  color: ${colors.consoleGreen};
  font-size: ${fontSize.small};
  flex-wrap: nowrap;
  line-height: 20px;
  font-weight: bold;
  font-family: ${fontFamily.primary};
`;

const Subtitle = styled.h4`
  color: ${colors.lightWhite};
  flex-wrap: nowrap;
  font-size: ${fontSize.small};
  line-height: 20px;
  margin-left: 8px;
  font-family: ${fontFamily.primary};
`;

const SpecialSubtitle = styled.a`
  color: ${colors.lightWhite};
  flex-wrap: nowrap;
  font-size: ${fontSize.small};
  line-height: 20px;
  margin-left: 8px;
  font-family: ${fontFamily.primary};
  text-decoration: none;
`;

const TextContainer = styled.section`
  max-width: fit-content;
  margin-left: 10px;
`;

const FooterContainer = styled.section`
  display: flex;
  background: ${colors.lightWhite};
  align-items: center;
  padding-right: 10px;
  justify-content: end;
`;

const FooterLabel = styled.p`
  font-size: ${fontSize.small};
  font-family: ${fontFamily.secundary};
`;
