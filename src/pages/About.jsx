
function About() {
  return (
    <main className="about-page">
      <section className="about-section">
        <h2>Take Control of Your Daily Routine</h2>

        <p>
          Building good habits takes consistency. Habit Tracker makes it easier to
          organize your daily habits and keep track of your progress. Whether you
          want to exercise regularly, read more, drink enough water, study or
          simply become more productive, Habit Tracker helps you stay accountable.
          Add your habits, mark them as completed each day and monitor your
          progress as you work towards becoming a better version of yourself.
        </p>
      </section>

      <section className="how-it-works">
        <h2>How Habit Tracker Works</h2>

        <div className="steps-container">
          <div className="step-card">
            <h3>Create a Habit</h3>
            <p>
              Add a habit you want to develop and set it as part of your daily
              routine.
            </p>
          </div>

          <div className="step-card">
            <h3>Stay Consistent</h3>
            <p>
              Mark your habits as complete each day and keep yourself
              accountable.
            </p>
          </div>

          <div className="step-card">
            <h3>Track Your Progress</h3>
            <p>
              Monitor your completed habits and see how consistently you are
              following your routine.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
