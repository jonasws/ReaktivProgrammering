import React from "react";

import { Spectacle, Deck, Slide, Heading, Text, S, Appear, List, ListItem } from "spectacle";

import "normalize.css";
import "spectacle/lib/themes/default/index.css";

import createTheme from "spectacle/lib/themes/default";

const theme = createTheme({
}, {
});

const Presentation = () =>
  <Spectacle theme={theme}>
    <Deck transition={["slide"]}>
      <Slide>
        <Heading fit lineHeight={2}>Reaktiv Programmering</Heading>
        <Text italic>En historie om at det lønner seg å være streng</Text>
      </Slide>

      <Slide>
        <Heading size={1}>Agenda</Heading>
        <List ordered>
          <Appear>
            <ListItem>Tilbakeblikk</ListItem>
          </Appear>
          <Appear>
            <ListItem><S type="italic">Pure Functional Programming</S></ListItem>
          </Appear>
          <Appear>
            <ListItem>Reaktiv programmering som "paradigme"</ListItem>
          </Appear>
          <Appear>
            <ListItem>Kode-eksempler</ListItem>
          </Appear>
        </List>
      </Slide>
    </Deck>
  </Spectacle>;

export default Presentation;
