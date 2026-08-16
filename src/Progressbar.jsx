function ProgressBar({ progress }) {
  return (
    <div>
      <p>Today's Progress: {progress}%</p>

      <div className="progress-container">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}

export default ProgressBar;
