

export default function Commit({
  conf_Commit,
  setCommit
}) {
  return (
    <>
      <div id="commit-maidiv">
        <textarea 
          placeholder="Commit message"
          className="textarea-input"
          onInput={(e) => setCommit({
            ...conf_Commit, 
            message: e.target.value 
          })}
        />
      </div>
    </>
  );
}