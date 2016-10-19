import React from "react";

import { Spectacle, Deck, CodePane, Slide, Heading, Text, S, Appear, Image, List, ListItem } from "spectacle";

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
  confused: "http://i.giphy.com/xI5dVJKpKLzK8.gif"
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
        <Heading size={2}>Agenda</Heading>
        <List ordered>
          <Appear>
            <ListItem>Mimring</ListItem>
          </Appear>
          <Appear>
            <ListItem><S type="italic">Pure Functional Programming</S></ListItem>
          </Appear>
          <Appear>
            <ListItem>Reaktiv programmering som "paradigme"</ListItem>
          </Appear>
          <Appear>
            <ListItem>Kodeeksempler</ListItem>
          </Appear>
        </List>
      </Slide>
      <Slide notes="mange ting som skjer, imperativ koding, man vet ikke hvordan grensesnittet blir seende ut">
        <CodePane textSize="1.5rem" source={require("!raw!./examples/jquery-old-example.html")} lang="html"/>
      </Slide>
    </Deck>
  </Spectacle>;

export default Presentation;
