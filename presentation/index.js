import React from "react";

import { Spectacle, Deck, Code, CodePane, Slide, Quote, BlockQuote, Cite, Heading, Text, S, Appear, Image, List, ListItem, Layout, Fill } from "spectacle";

import DelayedPop from "./util/delayed-pop";

import preloader from "spectacle/lib/utils/preloader";

import "normalize.css";
import "spectacle/lib/themes/default/index.css";

import createTheme from "spectacle/lib/themes/default";

const theme = createTheme({
}, {
});

const images = {
  confused: "http://i.giphy.com/xI5dVJKpKLzK8.gif",
  chaos: "http://i.giphy.com/l0HlIBEZ0keLzkt5C.gif",
  question: "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fimg.youtube.com%2Fvi%2F_UzGgIz52YU%2F0.jpg&f=1"
};
preloader(images);

const Presentation = () =>
  <Spectacle theme={theme}>
    <Deck transition={["slide"]}>
      <Slide notes="som utviklere jobber vi med data hver eneste dag, men får dataen egentlig den oppmerksomheten den fortjener?">
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
        <Heading size={2}>Reaktiv Programmering 101</Heading>
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
      <Slide bgColor="black" notes="Kan føles tungt i begynnelsen, unødvendig mas?">
        <BlockQuote>
          <Quote>Man må tørre å være streng!</Quote>
          <Cite>Jonas Strømsodd</Cite>
        </BlockQuote>
      </Slide>
      <Slide align="flex-start">
        <Heading margin="2rem" italic size={2}>Pure functional programming</Heading>
        <Text>Rene funksjoner</Text>
        <Text>Immuterbarhet</Text>
        <Text>Separering av <S type="italic">side effects</S></Text>
      </Slide>
      <Slide>
        <CodePane source={require('!raw!./examples/pure-functional-programming.js')} lang="js" />
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
      <Slide transition={["zoom"]} bgColor="black">
        <BlockQuote>
          <Quote>Immuterbarhet er Guds gave til utvikleren</Quote>
          <Cite>Jonas Strømsodd</Cite>
        </BlockQuote>
      </Slide>
      <Slide>
        <Layout>
        <Fill>
          <Heading size={4} textColor="darkGreen">Sånn:</Heading>
          <Code>(state, action) => newState</Code>
        </Fill>
        <Fill>
          <Appear>
            <div>
              <Heading size={4} textColor="darkRed">Ikke sånn:</Heading>
              <Code>(state, action) => state.someProperty = action.value;</Code>
            </div>
          </Appear>
        </Fill>
        </Layout>
      </Slide>
      <Slide>
        <Heading size={2}>Hvilke muligheter finnes?</Heading>
        <List>
          <ListItem textSize="2rem">Redux</ListItem>
          <ListItem textSize="2rem">Immutable.js</ListItem>
          <ListItem textSize="2rem">Object.assign</ListItem>
          <ListItem>Spreads</ListItem>
          <ListItem>Computed property names</ListItem>
          <ListItem>MobX</ListItem>
          <ListItem>RxJS</ListItem>
          <ListItem>Elm</ListItem>
        </List>
      </Slide>
      <Slide>
        <Text textSize="4rem" italic>Men applikasjonen min har bare èn komponent, eller jeg vil bare raske sammen noe!</Text>
      </Slide>

      <Slide>
        <Text>Det kan fort lønne seg å tvinge seg gjennom en "verbos" tilnærming til å begynne med</Text>
      </Slide>
      <Slide>
        <Heading size={2}>Fordeler med RP</Heading>
        <List>
          <ListItem>Enklere å forstå rollen til data i en applikasjon</ListItem>
          <ListItem>Enklere å debuggge som følge av immuterbarhet</ListItem>
          <ListItem>Man kan mye enklere skille vsiningslogikk</ListItem>
          <ListItem>Testbarhet.</ListItem>
          <ListItem>Luker ut en del "bugs": Tilstand på avveie</ListItem>
        </List>
      </Slide>
      <Slide>
        <Heading size={2}>"Ulemper"</Heading>
        <List>
          <ListItem>Kan føles "kvelende"</ListItem>
          <ListItem>Medfører litt ekstra "boilerplate"</ListItem>
          <ListItem>Vanskelig å avstå fra "snarveier"</ListItem>
        </List>
      </Slide>

      {/* Konklusjon */}
      <Slide>
        <Heading size={2}>Konklusjon</Heading>
          <List>
            <ListItem>Sett data i sentrum av applikasjonen</ListItem>
            <ListItem>Mutèr med måte, altså IKKE MUTÈR!</ListItem>
            <ListItem>Samle tilstand på "ett" sted</ListItem>
        </List>
      </Slide>
      <Slide>
        <Heading>Spørsmål?</Heading>
        <Image src={images.question} />
      </Slide>
    </Deck>
  </Spectacle>;

export default Presentation;
