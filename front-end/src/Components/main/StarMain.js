import "./main.css"
export function StarMain() {
  return (
    <main class="main">
      <div class="text-block ">
        <h1>SPREAD YOUR CREATIVITY!</h1>
        <p>Enhance your skills while having the most fun.</p>
        <button>More {">>"}</button>
      </div>

      <div>
        <img src={require("../../assets/star.png")} alt="Start" />
      </div>
    </main>
  );
}
