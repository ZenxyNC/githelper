//CSS
import './customizer.css'

// Components
import Deploy from './components/deploy/deploy';
import Commit from './components/commit/commit';
import IndicatorGuide from './components/indicatorGuide/indicatorGuide';

export default function Customizer({
  guide,
  setGuide,
  conf_Deploy,
  conf_Commit,
  setDeploy,
  setCommit
}) {

  return (
    <>
      <div id="customizer-maidiv">
        <select
          id='customizer-selectGuide'
          onChange={(e) => setGuide(e.target.value)}
        >
          <option value="fix404">Fix 404</option>
          <option value="deploy">Deployment</option>
          <option value="commit">Commit</option>
        </select>
        <div className="divider"></div>

        {guide === 'fix404' ? (
          <p>Nothing to be inputted.</p>
        ) : (guide === 'deploy' ? (
          <Deploy
            conf_Deploy={conf_Deploy}
            setDeploy={setDeploy}
          />
        ) : (
          <Commit
            conf_Commit={conf_Commit}
            setCommit={setCommit}
          />
        ))}
        <IndicatorGuide />
      </div>
    </>
  );
}