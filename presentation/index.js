// Import React
import React from 'react'

// Import Spectacle Core tags
import {
  BlockQuote,
  Code,
  CodePane,
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
} from 'spectacle'

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

// Require CSS
require('normalize.css')
require('spectacle/lib/themes/default/index.css')


const images = {
  twitter: require('../assets/twitter.svg'),
  linkedin: require('../assets/linkedin.svg'),
  github: require('../assets/github.svg'),
}

preloader(images)

const theme = createTheme({
  primary: '#009ed9',
  secondary: '#011627',
  tertiary: '#FF3366',
  light: '#f6f7f8',
}, {
  primary: 'Roboto',
  secondary: 'Roboto',
})

export default () => (
  <Deck transition={['zoom', 'fade']} transitionDuration={500} theme={theme}>
    <Slide bgColor='light'>
      <Heading size={1} fit caps lineHeight={1} textColor='primary'>
        10 Things you Wouldn't Believe About...
      </Heading>
      <Heading size={1} fit caps lineHeight={1} textColor='primary'>
        the Virtual DOM!
      </Heading>
      <Text margin='10px 0 0' textColor='secondary' size={4} bold caps fit>
        AKA... what is react reconciliation all about?
      </Text>
      <Text margin='80px 0 0' textColor='secondary' size={6} bold>
        February 8th, 2017
      </Text>
    </Slide>

    <Slide bgColor='light'>
      <Heading size={4} textColor='primary' caps>Who am I</Heading>
      <List>
        <ListItem>Co-Founder, ObjectiveIQ</ListItem>
        <ListItem>Denizen of TorontoJS (🤘)</ListItem>
        <ListItem>Usually @ DevHub - 46 Spadina, 4th fl. (🍻)</ListItem>
      </List>

      <List>
        <ListItem>🐦 @rohan10</ListItem>
        <ListItem>🐙 rohannair</ListItem>
        <ListItem>👔 rohannair10</ListItem>
      </List>
    </Slide>

    <Slide>
      <Heading size={1} textColor='light'>So why are we here?</Heading>
    </Slide>

    <Slide bgColor='light'>
      <Heading size={4} textColor='primary' caps>Over the next 30 minutes you will* understand...</Heading>
      <List>
        <ListItem>the difference between an element, component and instance</ListItem>
        <ListItem>what reconciliation is</ListItem>
        <ListItem>what scheduling is</ListItem>
        <ListItem>what Fiber is</ListItem>
        <ListItem>why all of this is important</ListItem>
      </List>

      <Text textSize={16}>*hopefully...</Text>
    </Slide>

    <Slide bgColor='light'>
      <Heading size={4} textColor='primary' caps>The Component</Heading>
      <Text margin='20px 0'>The declaration itself, as a class or a function</Text>
      <CodePane
        margin='20px 0 0'
        textSize={24}
        lang='javascript'
        source={require('raw-loader!./snippets/component.example')}
      />
    </Slide>

    <Slide bgColor='light'>
      <Heading size={4} textColor='primary' caps>The Element</Heading>
      <Text margin='20px 0'>Elements build the description of the tree itself, within the Virtual DOM</Text>
      <CodePane
        margin='20px 0 0'
        textSize={24}
        lang='javascript'
        source={require('raw-loader!./snippets/element.example')}
      />
    </Slide>

    <Slide bgColor='light'>
      <Heading size={4} textColor='primary' caps>The Element</Heading>
      <Text margin='20px 0'>Elements can be nested:</Text>
      <CodePane
        margin='20px 0 0'
        textSize={24}
        lang='javascript'
        source={require('raw-loader!./snippets/element2.example')}
      />
    </Slide>

    <Slide bgColor='light'>
      <Heading size={4} textColor='primary' caps>The Component Element</Heading>
      <Text margin='20px 0'>The type is a Class or a Function</Text>
      <CodePane
        margin='20px 0 0'
        textSize={24}
        lang='javascript'
        source={require('raw-loader!./snippets/componentelement.example')}
      />
    </Slide>

    <Slide bgColor='light'>
      <Heading size={4} textColor='primary' caps>Element Trees</Heading>
      <CodePane
        margin='20px 0 0'
        textSize={16}
        lang='javascript'
        source={require('raw-loader!./snippets/elementtree.example')}
      />
    </Slide>

    <Slide bgColor='light'>
      <Heading size={4} textColor='primary' caps>But we can use JSX</Heading>
      <CodePane
        margin='20px 0 0'
        textSize={24}
        lang='javascript'
        source={require('raw-loader!./snippets/elementtreeJSX.example')}
      />
    </Slide>

    <Slide bgColor='light'>
      <Heading size={4} textColor='primary' caps>Reconciliation</Heading>
      <Text margin='20px 0'>When the engine hits a node that is a Component Element:</Text>
      <CodePane
        margin='20px 0 0'
        textSize={24}
        lang='javascript'
        source={require('raw-loader!./snippets/reconciliationtree.example')}
      />
      <Text margin='20px 0'>It knows to look for the React class/function Button...</Text>
    </Slide>

    <Slide bgColor='light'>
      <Text margin='20px 0'>...and Button looks like this:</Text>
      <CodePane
        margin='20px 0 0'
        textSize={20}
        lang='javascript'
        source={require('raw-loader!./snippets/buttonreconciliation.example')}
      />
    </Slide>

    <Slide bgColor='light'>
      <Text margin='20px 0'>Let's change this up a bit</Text>
      <CodePane
        margin='20px 0 0'
        textSize={16}
        lang='javascript'
        source={require('raw-loader!./snippets/betterreconciliation.example')}
      />
    </Slide>

    <Slide>
      <Heading textColor='light'>So what does this mean?</Heading>
    </Slide>

    <Slide bgColor='light'>
      <List>
        <ListItem>A component describes how an element is rendered</ListItem>
        <ListItem>Changing a parent element causes reconciliation of all of its props</ListItem>
        <ListItem>We can optimize -- did the child change? Does it need to be re-rendered?</ListItem>
      </List>
    </Slide>

    <Slide bgColor='light'>
      <Heading size={4} textColor='primary' caps>The diffing algorithm</Heading>
      <List>
        <ListItem>Elements of different types?</ListItem>
        <ListItem>DOM elements of the same type?</ListItem>
        <ListItem>Component elements of the same type?</ListItem>
        <ListItem>Recursing through children?</ListItem>
        <ListItem>Recursing through children with keys?</ListItem>
      </List>
    </Slide>

    <Slide bgColor='light'>
      <Heading size={4} textColor='primary' caps>Scheduling</Heading>
      <List>
        <ListItem>How and when to do the work</ListItem>
        <ListItem>Different types of updates</ListItem>
        <ListItem>The algorithm is the key to React</ListItem>
      </List>
    </Slide>

    <Slide bgColor='light'>
      <Heading size={4} textColor='primary' caps>How do we schedule things with different priorities?</Heading>

      <Heading margin='20px 0' size={4} caps bold textColor='tertiary' >The future of React: problems you didn't even know you had!</Heading>
    </Slide>

    <Slide bgColor='tertiary'>
      <Heading size={1} textColor='light' caps>Enter Fiber</Heading>
    </Slide>

    <Slide bgColor='light'>
      <Heading size={4} textColor='tertiary' caps>Fiber is...</Heading>
      <Text margin='20px 0' size={4} textColor='secondary' >a ground up rewrite of the React core algorithm that Facebook has been working on. It's also not finished.</Text>
    </Slide>

    <Slide bgColor='light'>
      <Heading size={4} textColor='tertiary' caps>Fiber lets React...</Heading>
      <List margin='20px 0'>
        <ListItem>group work into chunks</ListItem>
        <ListItem>assign priority to different types of work</ListItem>
        <ListItem>pause work and come back to it later</ListItem>
        <ListItem>abort work if it's no longer needed</ListItem>
      </List>
    </Slide>

    <Slide bgColor='light'>
      <Heading size={4} textColor='tertiary' caps>What is a Fiber?</Heading>
      <List margin='20px 0'>
        <ListItem>virtual stack frames, persistent in memory</ListItem>
        <ListItem>allows manipulation like data structures</ListItem>
      </List>
    </Slide>

    <Slide bgColor='light'>
      <Heading size={4} textColor='tertiary' caps>How is this done?</Heading>
      <List margin='20px 0' lineHeight={2}>
        <ListItem><Code>requestAnimationFrame(cb)</Code> - for high priority work</ListItem>
        <br />
        <ListItem><Code>requestIdleCallback(cb)</Code> - for when browser is idle</ListItem>
        <ListItem>Implements a cb for end of idle time</ListItem>
      </List>
    </Slide>

    <Slide bgColor='light'>
      <Heading size={4} textColor='tertiary' caps>Put it all together...</Heading>
      <Text margin='20px 0'>Group work into chunks. Prioritize chunks. Use <Code>rAF</Code> for high priority tasks, but otherwise use <Code>rIC</Code>.</Text>

      <Text margin='20px 0'>Get us batched reconciliation, that is scheduled by React.</Text>
    </Slide>

    <Slide bgColor='tertiary'>
      <Heading size={1} textColor='light' caps>60 FPS apps!</Heading>
    </Slide>

    <Slide bgColor='secondary'>
      <Heading size={4} textColor='light' caps>Resources</Heading>
      <List margin='20px 0' textColor='light' textSize={18}>
        <ListItem>
          <a href="https://github.com/acdlite/react-fiber-architecture">React Fiber Architecture</a>
        </ListItem>
        <ListItem>
          <a href="https://facebook.github.io/react/docs/reconciliation.html">React Docs: Reconciliation</a>
        </ListItem>
        <ListItem>
          <a href="https://github.com/reactjs/react-basic">React - Basic Theoretical Concepts</a>
        </ListItem>
        <ListItem>
          <a href="https://facebook.github.io/react/contributing/design-principles.html">React Docs: Design Principles</a>
        </ListItem>
        <ListItem>
          <a href="https://www.youtube.com/watch?v=aV1271hd9ew">What's Next for React</a>
        </ListItem>
      </List>
    </Slide>

  </Deck>
)
