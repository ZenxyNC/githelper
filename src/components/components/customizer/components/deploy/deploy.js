

export default function Deploy({
  conf_Deploy,
  setDeploy
}) {
  return (
    <>
      <div id="deploy-maidiv">
        <input 
          type="text" 
          placeholder="Username"
          className="text-input"
          onInput={(e) => setDeploy({
            ...conf_Deploy, 
            username: e.target.value 
          })}
        />

        <input 
          type="text" 
          placeholder="Repository name"
          className="text-input"
          onInput={(e) => setDeploy({
            ...conf_Deploy, 
            repository: e.target.value 
          })}
        />

        <textarea 
          placeholder="Commit message"
          className="textarea-input"
          onInput={(e) => setDeploy({
            ...conf_Deploy, 
            message: e.target.value 
          })}
        />
      </div>
    </>
  );
}