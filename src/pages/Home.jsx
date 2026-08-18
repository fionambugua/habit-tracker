import heroImage from "../assets/tracker.jpg"

function Home() {
  return (
    <main>
      <section className="hero">
        <div>
          <h2>Build small habits. Grow every day.</h2>

          <p>
            Habit Tracker helps you build and track positive daily habits.
          </p>
        </div>

        <div>
          <img src={heroImage} alt="Habit Tracker" />
        </div>
      </section>
    </main>
  );
}

export default Home;