import React from "react";

import { Spectacle, Deck, CodePane, Fill, Slide, Heading, Text, S, Appear, Image, List, ListItem } from "spectacle";

import DelayedPop from "./util/delayed-pop";

import preloader from "spectacle/lib/utils/preloader";

import "normalize.css";
import "emojione/assets/css/emojione.css";
import "emojione/assets/css/emojione-awesome.css";
import "spectacle/lib/themes/default/index.css";

import createTheme from "spectacle/lib/themes/default";

const theme = createTheme({
}, {
});

const images = {
  confused: "http://i.giphy.com/xI5dVJKpKLzK8.gif",
  chaos: "http://i.giphy.com/l0HlIBEZ0keLzkt5C.gif"
};

preloader(images);


const Presentation = () =>
  <Spectacle theme={theme}>
    <Deck transition={["slide"]}>
      <Slide>
        <Heading fit lineHeight={2}>Reaktiv Programmering</Heading>
        <Text italic>En historie om at det lønner seg å være streng</Text>
      </Slide>

      <Slide>
        <Image src={images.confused} width="80%" height="80%" />
      </Slide>

      <Slide>
        <Heading size={2}>Hvordan går vi så frem i dag?</Heading>
        <List ordered>
          <Appear>
            <ListItem>Mimring</ListItem>
          </Appear>
          <Appear>
            <ListItem><S type="italic">Pure Functional Programming</S></ListItem>
          </Appear>
          <Appear>
            <ListItem>"Data i fokus"</ListItem>
          </Appear>
          <Appear>
            <ListItem>Kodeeksempler - påpeke og drøfte ulikheter</ListItem>
          </Appear>
        </List>
      </Slide>
      <Slide notes="mange ting som skjer, imperativ koding, man vet ikke hvordan grensesnittet blir seende ut">
        <CodePane textSize="1.4rem" source={require("!raw!./examples/jquery-old-example.html")} lang="html"/>
      </Slide>
      <Slide notes="deklarativt, kun fokus på visningslogikk">
        <CodePane textSize="1.5rem" source={require("!raw!./examples/react-simple-declarative.js")} lang="jsx"/>
      </Slide>
      <Slide>
        <Heading size={2}>Reaktiv programming 101</Heading>
        <List>
          <ListItem>Deklarativt</ListItem>
          <ListItem>Immuterbarhet</ListItem>
          <ListItem>Forhåndsdefinerte tilstandsoveranger</ListItem>
        </List>
      </Slide>
      <Slide>
        <Text textSize="4rem">Hva er det vanskeligste vi gjør når vi programmerer?</Text>
      </Slide>

      <Slide transition={["zoom"]}>
        <Text textSize="4rem">Å holde styr på tilstand!</Text>
      </Slide>

      <Slide>
        <List>
          <ListItem>Tilstand overalt i programmet</ListItem>
          <ListItem>Oppdatering på vilkårlige steder</ListItem>
          <ListItem>Vanskelig å "raskt" få innblikk i "hva som styrer at hva vises"</ListItem>
          <DelayedPop>
            <ListItem>Side effects, aka asynkrone greier</ListItem>
          </DelayedPop>
        </List>
      </Slide>
      <Slide align="flex-start">
        <Heading margin="2rem" italic size={2}>Pure functional programming</Heading>
        <Text>Rene funksjoner</Text>
        <Text>Immuterbarhet</Text>
        <Text>Separering av <S type="italic">side effects</S></Text>
      </Slide>
      <Slide>
        <Image src={images.chaos} width="80%" height="80%" />
      </Slide>
      <Slide>
        <List>
          <ListItem>Visningslogikk === avledet forretningslogikk </ListItem>
          <ListItem>Lagre minimal tilstand ."Avled" resten</ListItem>
          <ListItem>Tenk på mutasjoner som uttak av sparekontoen (!)</ListItem>
        </List>
      </Slide>
    </Deck>
  </Spectacle>;

export default Presentation;
