import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from './Button';

const element= React.createElement("h1",{id: "itsh1", style: {}},"Namasthe React");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
const elementt= React.createElement("h1",{id: "itsh12", style: {}},"Namasthe React");
const roott=ReactDOM.createRoot(document.getElementById("roott"));
roott.render(elementt);

roott.render(<Button />);
