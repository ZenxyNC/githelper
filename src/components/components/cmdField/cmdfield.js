// CSS
import './cmdfield.css'

// Components
import Fix404 from './Fix404/Fix404';
import Deploy from './deploy/deploy';
import Commit from './commit/commit';

export default function CmdField({
  guide,
  conf_Deploy,
  conf_Commit,
  setSnackbar
}) {
  return (
    <>
      <div id="cmdfield-maidiv">
        {guide === 'fix404' ? (
          <Fix404
            setSnackbar={setSnackbar}
          />
        ) : ( guide === 'deploy' ? (
          <Deploy
            conf_Deploy={conf_Deploy}
            setSnackbar={setSnackbar}
          />
        ) : (
          <Commit
            conf_Commit={conf_Commit}
            setSnackbar={setSnackbar}
          />
        ) )}
      </div>
    </>
  );
}