// CSS
import './list.css'

export default function List({
  number,
  status,
  command,
  clickToCopy = false,
  onClick,
  setSnackbar
}) {

  function handleCommandClick() {
    if (clickToCopy && status !== 'incomplete') {
      navigator.clipboard.writeText(command);
      setSnackbar({
        isOpened: true,
        message: 'Copied to clipboard',
        duration: 3000
      })
    }
    onClick();
  }
  return (
    <>
      <div id="list-maidiv">
        <div id='list-number'>{number}</div>
        <div id='list-indicator' className={`indicator-${status}`}></div>
        <div 
          id='list-command'
          className={clickToCopy ? 'isCommand' : ''}
          onClick={handleCommandClick}
          dangerouslySetInnerHTML={{ __html: command }}
        />
      </div>
    </>
  );
}