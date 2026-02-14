import { useState } from "react";
import "./App.css";

const items = Array.from(
  { length: 20000 },
  (_, i) => `Year ${i} - Temp: ${Math.random()}°C`,
);

function App() {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    // CRITICAL ERROR: Updating the input AND the heavy list together
    setQuery(e.target.value);
  };

  const filteredItems = items.filter((i) => i.includes(query));

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Type fast to feel the lag..."
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
