import { useState } from 'react';
import List from '../list/list';

export default function Fix404({ setSnackbar }) {
  const [commands, setCommands] = useState([
    {
      number: 1,
      status: 'needtodo',
      command: 'Copy entire content of 404.html in <a href="https://github.com/rafgraph/spa-github-pages/blob/gh-pages/404.html" target="_blank">spa-github-pages</a>.'
    },
    {
      number: 2,
      status: 'needtodo',
      command: 'Create 404.html file in /public/ in your project folder, then paste.'
    },
    {
      number: 3,
      status: 'needtodo',
      command: 'In the 404.html, change the value of pathSegmentsToKeep to 1.'
    },
    {
      number: 4,
      status: 'needtodo',
      command: 'Copy SCRIPT of index.html in <a href="https://github.com/rafgraph/spa-github-pages/blob/gh-pages/index.html" target="_blank">spa-github-pages</a>.'
    },
    {
      number: 5,
      status: 'needtodo',
      command: 'Paste the script to /public/index.html in your project.'
    },
    {
      number: 6,
      status: 'needtodo',
      command: 'In App.js, add basename="/project_name" in Router tag.'
    }
  ]);

  const handleCommandClick = (index) => {
    const newCommands = [...commands];
    newCommands[index] = { ...newCommands[index], status: 'done' };
    setCommands(newCommands);
  };

  return (
    <>
      {commands.map((command, index) => (
        <List
          key={command.number}
          number={command.number}
          status={command.status}
          command={command.command}
          clickToCopy={false}
          onClick={() => handleCommandClick(index)}
          setSnackbar={setSnackbar}
        />
      ))}
    </>
  );
}
