import { useMemo, useState } from "react";
import "./App.css";
import useDebounce from "./hooks/useDebounce";

const items = Array.from(
  { length: 20000 },
  (_, i) => `Year ${i} - Temp: ${Math.random()}°C`,
);

function App() {
  const [query, setQuery] = useState<string>("");

  const debouncedSearch = useDebounce(query, 5000);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const filteredItems = useMemo(
    () => items.filter((i) => i.includes(debouncedSearch)),
    [debouncedSearch],
  );

  return (
    <div>
      <input
        type="text"
        value={query}
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
