function ProgressBar({ progress }) {
  return (
    <div>
      <p>{progress}% complete</p>

      <div>
        <div style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}

export default ProgressBar;
