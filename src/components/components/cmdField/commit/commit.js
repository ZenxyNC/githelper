import { useEffect, useState } from 'react';
import List from '../list/list';

// Generate commands
const generateCommands = (conf_Commit) => [
  {
    number: 1,
    status: 'default',
    command: 'Enter the following commands :',
    clickToCopy: false
  },
  {
    number: 1.1,
    status: 'needtodo',
    command: 'git add .',
    clickToCopy: true
  },
  {
    number: 1.2,
    status: conf_Commit.message ? 'needtodo' : 'incomplete',
    command: `git commit -m "${conf_Commit.message ? conf_Commit.message : 'Add commit message'}"`,
    clickToCopy: true
  },
  {
    number: 1.3,
    status: 'needtodo',
    command: 'git push origin main',
    clickToCopy: true
  },
  {
    number: 1.4,
    status: 'needtodo',
    command: 'npm run deploy',
    clickToCopy: true
  }
];

export default function Commit({
  conf_Commit,
  setSnackbar
}) {
  const [commands, setCommands] = useState(() => generateCommands(conf_Commit));

  useEffect(() => {
    setCommands(prevCommands => {
      const newCommands = generateCommands(conf_Commit);
      return newCommands.map((cmd, index) => {
        if (prevCommands[index] && prevCommands[index].status === 'done') {
          return { ...cmd, status: 'done' };
        }
        return cmd;
      });
    });
  }, [conf_Commit]);

  const handleCommandClick = (index) => {
    const newCommands = [...commands];
    if (newCommands[index].status === 'default' || newCommands[index].status === 'done') {
      return
    }
    if(newCommands[index].status === 'incomplete') {
      setSnackbar({
        isOpened: true,
        message: 'Please fill in the commit message',
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