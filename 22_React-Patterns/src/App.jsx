import Accordian from "./components/Accordian/Accordian.jsx";
import SearchableList from "./components/SearchableList/SearchableList.jsx";

import savannaImg from "./assets/african-savanna.jpg";
import amazonImg from "./assets/amazon-river.jpg";
import caribbeanImg from "./assets/caribbean-beach.jpg";
import desertImg from "./assets/desert-dunes.jpg";
import forestImg from "./assets/forest-waterfall.jpg";
import Place from "../Place.jsx";

const PLACES = [
  {
    id: "african-savanna",
    image: savannaImg,
    title: "African Savanna",
    description: "Experience the beauty of nature.",
  },
  {
    id: "amazon-river",
    image: amazonImg,
    title: "Amazon River",
    description: "Get to know the largest river in the world.",
  },
  {
    id: "caribbean-beach",
    image: caribbeanImg,
    title: "Caribbean Beach",
    description: "Enjoy the sun and the beach.",
  },
  {
    id: "desert-dunes",
    image: desertImg,
    title: "Desert Dunes",
    description: "Discover the desert life.",
  },
  {
    id: "forest-waterfall",
    image: forestImg,
    title: "Forest Waterfall",
    description: "Listen to the sound of the water.",
  },
];

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordian className="accordion">
          <Accordian.Item className="accordion-item" id="experience">
            <Accordian.Title className="accordion-item-title">
              The Best
            </Accordian.Title>
            <Accordian.Content className="accordion-item-content">
              <article>
                <p>You cant go wrong with us</p>
                <p>Bespoke trips...</p>
              </article>
            </Accordian.Content>
          </Accordian.Item>
          <Accordian.Item className="accordion-item" id="local-guide">
            <Accordian.Title className="accordion-item-title">
              Working with local guides
            </Accordian.Title>
            <Accordian.Content className="accordion-item-content">
              <article>
                <p>Your Tbilisi adventure</p>
                <p>Starts with TUI</p>
              </article>
            </Accordian.Content>
          </Accordian.Item>
        </Accordian>
      </section>
      <section>
        <SearchableList items={PLACES} itemKeyFn={(item) => item.id}>
          {(item) => <Place item={item} />}
        </SearchableList>
        <SearchableList
          items={["items 1", "items 2"]}
          itemKeyFn={(item) => item}
        >
          {(item) => item}
        </SearchableList>
      </section>
    </main>
  );
}

export default App;
