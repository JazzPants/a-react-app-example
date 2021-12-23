import React, { Component } from 'react'; //react dependencies - npm packages
import moment from 'moment'; //moment dependencies - npm packages
import ExampleComponent from './ExampleComponent' //importing a component
import TestComponent from './TestComponent' //importing a component

// Add your code own within the return statement
//{moment().format('MMMM Do YYYY, hh:mm:ss a')}

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          Now
        </header>
        <p className="App-intro">
          In React apps, we write JSX - it looks like HTML, and uses a lot of HTML syntax.
          JSX lets us include JavaScript functions right along with the HTML, and also
          allows us to add in components, which are separate, self-contained chunks of JSX.
        </p>
        <ExampleComponent />
        <ExampleComponent />
        <TestComponent />

      </div>
    );
  }
}

export default App;
