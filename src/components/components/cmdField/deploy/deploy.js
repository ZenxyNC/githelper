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
    status: 'needtodo',
    command: 'npm install gh-pages --save-dev',
    clickToCopy: true
  },
  {
    number: 3,
    status: 'default',
    command: 'In vite.config.js, add:',
    clickToCopy: false
  },
  {
    number: 3.1,
    status: conf_Deploy.repository ? 'needtodo' : 'incomplete',
    command: `base: "/${conf_Deploy.repository ? conf_Deploy.repository : 'repo_name'}",`,
    clickToCopy: true
  },
  {
    number: 4,
    status: 'default',
    command: 'In package.json (scripts), add:',
    clickToCopy: false
  },
  {
    number: 4.1,
    status: 'needtodo',
    command: `predeploy: "npm run build",`,
    clickToCopy: true
  },
  {
    number: 4.2,
    status: 'needtodo',
    command: `deploy: "gh-pages -d dist",`,
    clickToCopy: true
  },
  {
    number: 5,
    status: 'needtodo',
    command: 'git init',
    clickToCopy: true
  },
  {
    number: 6,
    status: 'needtodo',
    command: 'git add .',
    clickToCopy: true
  },
  {
    number: 7,
    status: conf_Deploy.message ? 'needtodo' : 'incomplete',
    command: `git commit -m "${conf_Deploy.message ? conf_Deploy.message : 'Commit Message'}"`,
    clickToCopy: true
  },
  {
    number: 8,
    status: conf_Deploy.branch ? 'needtodo' : 'incomplete',
    command: `git branch -M ${conf_Deploy.branch ? conf_Deploy.branch : 'branch_name'}`,
    clickToCopy: true
  },
  {
    number: 9,
    status: conf_Deploy.username && conf_Deploy.repository ? 'needtodo' : 'incomplete',
    command: `git remote add origin https://github.com/${conf_Deploy.username ? conf_Deploy.username : 'username'}/${conf_Deploy.repository ? conf_Deploy.repository : 'repo_name'}.git`,
    clickToCopy: true
  },
  {
    number: 10,
    status: conf_Deploy.branch ? 'needtodo' : 'incomplete',
    command: `git push -u origin ${conf_Deploy.branch ? conf_Deploy.branch : 'branch_name'}`,
    clickToCopy: true
  },
  {
    number: 11,
    status: 'needtodo',
    command: `npm run deploy`,
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