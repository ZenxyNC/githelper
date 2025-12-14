// Components
import Customizer from "./components/customizer/customizer";
import CmdField from "./components/cmdField/cmdfield";
import Snackbar from "./components/zenengine/snackbar";

// CSS
import './main.css'
import { useState } from "react";

export default function Main() {
  const [guide, setGuide] = useState('fix404');
  const [conf_Deploy, setDeploy] = useState({
    username: "",
    repository: "",
    message: ""
  });
  const [conf_Commit, setCommit] = useState({
    message: ""
  })

  const [snackbar, setSnackbar] = useState({
    isOpened: false,
    message: "",
    duration: 3000
  })

  return (
    <>
      <div id="main-maidiv">
        <Customizer
          guide={guide}
          setGuide={setGuide}
          conf_Deploy={conf_Deploy}
          conf_Commit={conf_Commit}
          setDeploy={setDeploy}
          setCommit={setCommit}
        />
        <CmdField
          guide={guide}
          conf_Deploy={conf_Deploy}
          conf_Commit={conf_Commit}
          setSnackbar={setSnackbar}
        />
      </div>
    {snackbar.isOpened && 
      <Snackbar
        message={snackbar.message} 
        duration={snackbar.duration} 
        onClose={() => setSnackbar({ 
          isOpened: false, 
          message: '', 
          duration: 3000 
        })}
      />
  }
    </>
  );
}