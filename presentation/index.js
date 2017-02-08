// Import React
import React from 'react'

// Import Spectacle Core tags
import {
  BlockQuote,
  Quote,
  Cite,
  Code,
  CodePane,
  Deck,
  Heading,
  Image,
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
  danTweet: require('../assets/dantweet.png'),
  jordTweet: require('../assets/jordwalke.png'),
  isfiberready: require('../assets/isfiberready.jpg'),
  debuggerhalt: require('../assets/debuggerhalt.png'),
  debuggerplayed: require('../assets/debuggerplayed.png'),
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
    <Slide bgColor='light' notes={`
        <ul>
          <li>not actually clickbait</li>
          <li>advanced React topics</li>
          <li>point is to give everyone better understanding of react</li>
        </ul>
    `}>
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

    <Slide bgColor='light' notes={`
      <ul>
        <li>Co-Founder OIQ, UI heavy</li>
        <li>SO to TorontoJS</li>
        <li>Down at Devhub (Bring beer)</li>
        <li>doing React dev for almost 3 years now</li>
        <li>declarative way of doing react is best part</li>
        <li>not very patient with react CDU optimizations</li>
      </ul>
    `}
    >
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

    <Slide notes={`
      <ul>
        <li>only have 30 mins</li>
        <li>deeper understanding of react as a view engine</li>
        <li>understand why react was such a revolution for UI engines</li>
      </ul>
    `}>
      <Heading size={1} textColor='light'>So why are we here?</Heading>
    </Slide>

    <Slide bgColor='light' notes={`
      <ul>
        <li>high level understanding of the core of react</li>
        <li>what a component and VDOM actually are</li>
        <li>understand how react updates the dom</li>
        <li>understand how we can evolve react</li>
      </ul>
    `}>
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

    <Slide bgColor='light' notes={`
      <ul>
        <li>we all write components</li>
        <li>it's got a specific meaning in react</li>
        <li>let's take a step back..</li>
      </ul>
    `}>
      <Heading size={4} textColor='primary' caps>The Component</Heading>
      <Text margin='20px 0'>The declaration itself, as a class or a function</Text>
      <CodePane
        margin='20px 0 0'
        textSize={24}
        lang='javascript'
        source={require('raw-loader!./snippets/component.example')}
      />
    </Slide>

    <Slide bgColor='light' notes={`
      <ul>
        <li>react renders elements in a tree</li>
        <li>here's a DOM element (div) represented in react</li>
        <li>note props</li>
      </ul>
    `}>
      <Heading size={4} textColor='primary' caps>The Element</Heading>
      <Text margin='20px 0'>Elements build the description of the tree itself, within the Virtual DOM</Text>
      <CodePane
        margin='20px 0 0'
        textSize={24}
        lang='javascript'
        source={require('raw-loader!./snippets/element.example')}
      />
    </Slide>

    <Slide bgColor='light' notes={`
      <ul>
        <li>let's make the heading strong</li>
        <li>we can nest nodes</li>
        <li>THIS is the primitive of the vDOM, JS representation of DOM</li>
      </ul>
    `}>
      <Heading size={4} textColor='primary' caps>The Element</Heading>
      <Text margin='20px 0'>Elements can be nested:</Text>
      <CodePane
        margin='20px 0 0'
        textSize={24}
        lang='javascript'
        source={require('raw-loader!./snippets/element2.example')}
      />
    </Slide>

    <Slide bgColor='light' notes={`
      <ul>
        <li>here's a Component Element</li>
        <li>a heading tag (note capital H)</li>
        <li>naming matters in react</li>
      </ul>
    `}>
      <Heading size={4} textColor='primary' caps>The Component Element</Heading>
      <Text margin='20px 0'>The type is a Class or a Function</Text>
      <CodePane
        margin='20px 0 0'
        textSize={24}
        lang='javascript'
        source={require('raw-loader!./snippets/componentelement.example')}
      />
    </Slide>

    <Slide bgColor='light' notes={`
      <ul>
        <li>if you've done react, you know that you can build out big documents</li>
        <li>here's a better example of what a react app's vdom looks like</li>
      </ul>
    `}>
      <Heading size={4} textColor='primary' caps>Element Trees</Heading>
      <CodePane
        margin='20px 0 0'
        textSize={16}
        lang='javascript'
        source={require('raw-loader!./snippets/elementtree.example')}
      />
    </Slide>

    <Slide bgColor='light' notes={`
      <ul>
        <li>more used to jsx</li>
        <li>thing is, we know that Heading or Body here have internals</li>
        <li>allow react to determine how to render those.. this is deterministic nature of react in action</li>
      </ul>
    `}>
      <Heading size={4} textColor='primary' caps>But we can use JSX</Heading>
      <CodePane
        margin='20px 0 0'
        textSize={24}
        lang='javascript'
        source={require('raw-loader!./snippets/elementtreeJSX.example')}
      />
    </Slide>

    <Slide bgColor='light' notes={`
      <ul>
        <li>rec. - how to render and update the DOM</li>
        <li>let's focus on render right now</li>
        <li>this is how react works at its core</li>
        <li>traverses tree, and when it gets to a Comp. element, React calls it</li>
      </ul>
    `}>
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

    <Slide bgColor='light' notes={`
      <ul>
        <li>goes back to button component, which looks like this</li>
        <li>its in jsx</li>
        <li>and it's probably got more dynamic content</li>
        <li>classes would have internal state etc.</li>
      </ul>
    `}>
      <Text margin='20px 0'>...and Button looks like this:</Text>
      <CodePane
        margin='20px 0 0'
        textSize={20}
        lang='javascript'
        source={require('raw-loader!./snippets/buttonreconciliation.example')}
      />
    </Slide>

    <Slide bgColor='light' notes={`
      <ul>
        <li>lets us render dynamically</li>
        <li>this is basically all we're doing, but we have nice helpers to make it easier to reason with</li>
      </ul>
    `}>
      <Text margin='20px 0'>Let's change this up a bit</Text>
      <CodePane
        margin='20px 0 0'
        textSize={16}
        lang='javascript'
        source={require('raw-loader!./snippets/betterreconciliation.example')}
      />
    </Slide>

    <Slide bgColor='light' notes={`
      <ul>
        <li>A component - what we implement in code using class or function</li>
        <li>An element - DOM or Component, a branch on the vDOM tree</li>
        <li>An instance - One particular place where a component is rendered</li>
        <li>An instance - One particular place where a component is rendered</li>
        <li>Rendering done from outermost node (parent) down the branches</li>
        <li>But that's just rendering.. let's talk updates</li>
      </ul>
    `}>
      <Heading size={4} textColor='primary' caps>So what does this mean?</Heading>
      <List>
        <ListItem>A component describes how an element is rendered</ListItem>
        <ListItem>Changing a parent element causes reconciliation of all of its props</ListItem>
        <ListItem>We can optimize -- did the child change? Does it need to be re-rendered?</ListItem>
      </List>
    </Slide>

    <Slide bgColor='light' notes={`
      <ul>
        <li>Conventionally thought of as diffing DOM and VDom</li>
        <li>Recurse through tree until a change is made, and this is our root</li>
        <li>Different types - tear down</li>
        <li>Same type DOM - update attr, Component - update props</li>
        <li>Children? update list, but with keys, update particular children</li>
      </ul>
    `}>
      <Heading size={4} textColor='primary' caps>The diffing algorithm</Heading>
      <List>
        <ListItem>Elements of different types?</ListItem>
        <ListItem>DOM elements of the same type?</ListItem>
        <ListItem>Component elements of the same type?</ListItem>
        <ListItem>Recursing through children?</ListItem>
        <ListItem>Recursing through children with keys?</ListItem>
      </List>
    </Slide>

    <Slide bgColor='light' notes={`
      <ul>
        <li>React is deterministic, not imperative</li>
        <li>We let the engine figure out how to do updates, we just tell it what the updates are</li>
        <li>Different types - animations, user inputs, external data sources</li>
        <li>All have same priority</li>
        <li>Updating is the core of react now</li>
      </ul>
    `}>
      <Heading size={4} textColor='primary' caps>Scheduling</Heading>
      <List>
        <ListItem>How and when to do the work</ListItem>
        <ListItem>Different types of updates</ListItem>
        <ListItem>The algorithm is the key to React</ListItem>
      </List>
    </Slide>

    <Slide bgColor='light' notes={`
      <ul>
        <li></li>
      </ul>
    `}>
      <Heading size={4} textColor='primary' caps>How do we schedule things with different priorities?</Heading>

      <Heading margin='20px 0' size={4} caps bold textColor='tertiary' >The future of React: problems you didn't even know you had!</Heading>
    </Slide>

    <Slide bgColor='light' notes={`
      <ul>
        <li>Jordan Walke, react creator</li>
        <li>2 years ago, playing with stuff</li>
        <li>A lot of things about concurrency and how to handle async</li>
      </ul>
    `}>
      <Image src={images.jordTweet} />
    </Slide>

    <Slide bgColor='tertiary' notes={`
      <ul>
        <li>fast forward 2.something years</li>
        <li>Fiber!!!</li>
      </ul>
    `}>
      <Heading size={1} textColor='light' caps>Enter Fiber</Heading>
    </Slide>

    <Slide bgColor='light' notes={`
      <ul>
        <li>experimental, but not as dire straights as it used to be</li>
        <li>focus is on concurrency and updates</li>
        <li>can react be done in a way where it doesn't block the browser</li>
      </ul>
    `}>
    <BlockQuote >
      <Quote size={6} color='secondary'>Fiber is reimplementation of the stack, specialized for React components.<br />
        You can think of a single fiber as a virtual stack frame.
      </Quote>
      <Cite>- Andrew Clark (@acdlite)</Cite>
    </BlockQuote>
    </Slide>

    <Slide bgColor='light' notes={`
      <ul>
        <li>reimplement the call stack in js</li>
        <li>Fibers, ie JS objects that are like virtual stack frames</li>
        <li>stack frame always has location of it's parent</li>
        <li>fiber always has location of it's parent</li>
      </ul>
    `}>
      <Heading size={4} textColor='tertiary' caps>What is a Fiber?</Heading>
      <List margin='20px 0'>
        <ListItem>virtual stack frames, persistent in memory</ListItem>
        <ListItem>allows manipulation like data structures</ListItem>
        <ListItem>much shallower stacks</ListItem>
      </List>
    </Slide>

    <Slide bgColor='light' notes={`
      <ul>
        <li>chunk tasks together based on the type of work/fiber</li>
        <li>if a fiber is a data structure, we can use the memory heap to store stuff</li>
        <li>how do you interrupt a call?</li>
      </ul>
    `}>
      <Heading size={4} textColor='tertiary' caps>Fiber lets React...</Heading>
      <List margin='20px 0'>
        <ListItem>group work into chunks</ListItem>
        <ListItem>assign priority to different types of work</ListItem>
        <ListItem>pause work and come back to it later</ListItem>
        <ListItem>abort work if it's no longer needed</ListItem>
      </List>
    </Slide>

    <Slide bgColor='light' notes={`
      <ul>
        <li>debugger, stashes the call to the side in-browser, letting us look around</li>
      </ul>
    `}>
      <Heading size={4} textColor='tertiary' caps>Halt execution?</Heading>
      <Image src={images.debuggerhalt} />
    </Slide>

    <Slide bgColor='light' notes={`
      <ul>
        <li>when we press play, we get right back into the place it was left off.</li>
        <li>generators are not like this, you can't stash something. you just step out temporarily</li>
        <li>interrupt current rendering stack -> "stash" the call to the side -> Perform high priority work which has its own stack -> "unstash" and resume previous call</li>
      </ul>
    `}>
      <Heading size={4} textColor='tertiary' caps>Halt execution?</Heading>
      <Image src={images.debuggerplayed} />
    </Slide>


    <Slide bgColor='light' notes={`
        <ul>
          <li>requestAnimationFrame, called every frame - 60fps</li>
          <li>requestIdleCallback, schedules a callback to run during a browser's idle time</li>
          <li>rIC - has a callback to let developers know when the idle period is about to end</li>
          <li>can fake this for some backwards compatibility, but not as good</li>
          <li>allow splitting work into chunks by using fibers and the heap</li>
        </ul>
      `}>
      <Heading size={4} textColor='tertiary' caps>How is this done?</Heading>
      <List margin='20px 0' lineHeight={2}>
        <ListItem><Code>requestAnimationFrame(cb)</Code> - for high priority work</ListItem>
        <br />
        <ListItem><Code>requestIdleCallback(cb)</Code> - for when browser is idle</ListItem>
        <ListItem>Implements a cb for end of idle time</ListItem>
      </List>
    </Slide>

    <Slide bgColor='light' notes={`
        <ul>
          <li>batch stuff into high and low priority</li>
          <li>browser idle, do low priority</li>
          <li>browser needs thread > store the fiber in memory</li>
          <li>If we have high priority work, use rAF</li>
          <li>come back to lower priority work</li>
        </ul>
      `}>
      <Heading size={4} textColor='tertiary' caps>Put it all together...</Heading>
      <Text margin='20px 0'>Group work into chunks. Prioritize chunks. Use <Code>rAF</Code> for high priority tasks, but otherwise use <Code>rIC</Code>.</Text>

      <Text margin='20px 0'>Get us batched reconciliation, that is scheduled by React.</Text>
    </Slide>

    <Slide bgColor='light' notes={`
        <ul>
          <li>Video done by dan abramov</li>
          <li>Pay attention to hover events</li>
          <li>in "stack" - current, delayed</li>
          <li>in "fiber" - future, prioritized, and animations prioritized</li>
        </ul>
      `}>
      <iframe width="1000" height="565" src="https://www.youtube.com/embed/Qu_6ItnlDQg" frameborder="0" allowfullscreen showinfo="0" rel="0"></iframe>
    </Slide>

    <Slide bgColor='light' notes={`
      <ul>
        <li>Makes react way more efficent, and way less memory intensive</li>
        <li>Shallower stacks</li>
        <li>makes it a lot easier to catch errors</li>
      </ul>
    `}>
      <Image src={images.danTweet} />
    </Slide>

    <Slide bgColor='tertiary' notes='And the point is, 60FPS apps.'>
      <Heading size={1} textColor='light' caps>60 FPS apps!</Heading>
    </Slide>

    <Slide bgColor='light' notes='So when is it out? Nobody quite knows, but there is a site for it'>
      <Image src={images.isfiberready} />
    </Slide>

    <Slide bgColor='secondary' notes=''>
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
        <ListItem>
          <a href="https://gist.github.com/duivvv/2ba00d413b8ff7bc1fa5a2e51c61ba43">What is React Fiber? And how can I try it out today?</a>
        </ListItem>
        <ListItem>
          <a href="http://isfiberreadyyet.com/">Is Fiber Ready?</a>
        </ListItem>
      </List>
    </Slide>

  </Deck>
)
