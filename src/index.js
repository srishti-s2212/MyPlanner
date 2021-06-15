import React from 'react';
import ReactDom from 'react-dom';
import App from './Components/App/App.jsx';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
initializeIcons();

ReactDom.render(<App />, document.getElementById("root"));