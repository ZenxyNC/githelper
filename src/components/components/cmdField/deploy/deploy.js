import List from '../list/list';
import { useEffect, useState } from 'react';

const generateCommands = (conf_Deploy) => [
  {
    number: 1,
    status: 'needtodo',
    command: 'Create the repository in <a href="https://github.com/new" target="_blank">GitHub Repository</a> .',
    clickToCopy: false
  },
  {
    number: 2,
    status: 'default',
    command: 'Enter the following commands : ',
    clickToCopy: false
  },
  {
    number: 2.1,
    status: 'needtodo',
    command: 'git add .',
    clickToCopy: true
  },
  {
    number: 2.2,
    status: conf_Deploy.message ? 'needtodo' : 'incomplete',
    command: `git commit -m "${conf_Deploy.message ? conf_Deploy.message : 'Add deploy message'}"`,
    clickToCopy: true
  },
  {
    number: 2.3,
    status: 'needtodo',
    command: 'git branch -M main',
    clickToCopy: true
  },
  {
    number: 2.4,
    status: conf_Deploy.username && conf_Deploy.repository ? 'needtodo' : 'incomplete',
    command: `git remote add origin https://github.com/${conf_Deploy.username ? conf_Deploy.username : 'your-username'}/${conf_Deploy.repository ? conf_Deploy.repository : 'your-repo'}.git`,
    clickToCopy: true
  },
  {
    number: 2.5,
    status: 'needtodo',
    command: 'git push -u origin main',
    clickToCopy: true
  },
  {
    number: 2.6,
    status: 'needtodo',
    command: 'npm install gh-pages --save-dev',
    clickToCopy: true
  },
  {
    number: 3,
    status: 'default',
    command: 'In package.json (above "name"), add:',
    clickToCopy: false
  },
  {
    number: 3.1,
    status: conf_Deploy.username && conf_Deploy.repository ? 'needtodo' : 'incomplete',
    command: `"homepage": "https://${conf_Deploy.username ? conf_Deploy.username : 'your-username'}.github.io/${conf_Deploy.repository ? conf_Deploy.repository : 'your-repo'}/",`,
    clickToCopy: true
  },
  {
    number: 4,
    status: 'needtodo',
    command: 'In package.json at "scripts", add:',
    clickToCopy: false
  },
  {
    number: 4.1,
    status: 'needtodo',
    command: '"predeploy": "npm run build",',
    clickToCopy: true
  },
  {
    number: 4.2,
    status: 'needtodo',
    command: '"deploy": "gh-pages -d build",',
    clickToCopy: true
  },
  {
    number: 5,
    status: 'default',
    command: 'Enter the following commands :',
    clickToCopy: false
  },
  {
    number: 5.1,
    status: 'needtodo',
    command: 'git add .',
    clickToCopy: true
  },
  {
    number: 5.2,
    status: conf_Deploy.message ? 'needtodo' : 'incomplete',
    command: `git commit -m "${conf_Deploy.message ? conf_Deploy.message : 'Deploy'}"`,
    clickToCopy: true
  },
  {
    number: 5.3,
    status: 'needtodo',
    command: 'git push',
    clickToCopy: true
  },
  {
    number: 5.4,
    status: 'needtodo',
    command: 'npm run deploy',
    clickToCopy: true
  }
];

export default function Deploy({
  conf_Deploy,
  setSnackbar
}) {
  const [commands, setCommands] = useState(() => generateCommands(conf_Deploy));

  useEffect(() => {
    setCommands(prevCommands => {
      const newCommands = generateCommands(conf_Deploy);
      return newCommands.map((cmd, index) => {
        if (prevCommands[index] && prevCommands[index].status === 'done') {
          return { ...cmd, status: 'done' };
        }
        return cmd;
      });
    });
  }, [conf_Deploy]);

  const handleCommandClick = (index) => {
    const newCommands = [...commands];
    if (newCommands[index].status === 'default' || newCommands[index].status === 'done') {
      return
    }
    if(newCommands[index].status === 'incomplete') {
      setSnackbar({
        isOpened: true,
        message: 'Please fill all requirements.',
        duration: 3000
      })
      return
    }

    newCommands[index] = { ...newCommands[index], status: 'done' };
    setCommands(newCommands);
  };
  return (
    <>
      {commands.map((item, index) => (
        <List
          key={index}
          number={item.number}
          status={item.status}
          command={item.command}
          clickToCopy={item.clickToCopy}
          onClick={() => handleCommandClick(index)}
          setSnackbar={setSnackbar}
        />
      ))}
    </>
  );
}