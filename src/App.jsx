import { useState } from "react";

const FOODS = [
  {
    id: 0,
    name: "Sushi",
    description: "Sushi is a traditional Japanese dish.",
  },
  {
    id: 1,
    name: "Dal",
    description:
      "Dal contains onions, tomatoes and various spices which may be added",
  },
  {
    id: 2,
    name: "Pierogi",
    description:
      "Pierogi involve wrapping dough around a savoury or sweet filling",
  },
  {
    id: 3,
    name: "Kebab",
    description: "Kebab is a popular meal of skewered meat.",
  },
  {
    id: 4,
    name: "Dim sum",
    description:
      "Dim sum is a variety of smaller dishes that can be enjoyed both during lunch or dinner",
  },
];

const HightlightText = ({ text, keyword }) => {
  if (!keyword.trim()) {
    return <span>{text}</span>;
  }

  const regex = new RegExp(`(${keyword})`, "gi");
  const parts = text.split(regex);

  return (
    <span>
      {parts.map((part, index) =>
        regex.test(part) ? (
          <mark key={index}>{part}</mark>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </span>
  );
};

export default function App() {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return (
    <div className="App">
      <input
        type="search"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      />

      <div>
        {FOODS.map((food) => (
          <div
            key={food.id}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <HightlightText text={food.name} keyword={searchInput} />
            <HightlightText text={food.description} keyword={searchInput} />
          </div>
        ))}
      </div>
    </div>
  );
}
