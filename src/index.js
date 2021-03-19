import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

/* App Challenges 

1. Need to get a search term from the User
2. Need to use that search term to request to an outside API and fetch data.
3. Need to take the fetched images and show them on the screen in a list.

*/

/*

1. We make a search bar component.
2. an image list component that will take image and render them on screen.
                App
                 |
           |            |
      SearchBar     ImageList
*/

ReactDOM.render(<App />, document.querySelector('#root'));


