import { useState } from "react";
import "./Card.css";
import { dataProps } from "./data";

export default function Card({
  title,
  imageUrl,
  text,
}: dataProps): JSX.Element {
  const [backgroundColor, setBackgroundColor] = useState<string>("white");
  const [customColor, setCustomColor] = useState<string>("");

  const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setBackgroundColor(event.target.value);
  };

  const handleCustomColorChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCustomColor(event.target.value);
  };

  const addColorToCard = () => {
    setBackgroundColor(customColor);
    setCustomColor("");
  };

  return (
    <div className="card" style={{ backgroundColor }}>
      <h2>{title}</h2>
      <img src={imageUrl} className="cardImage" alt={title} />
      <p>{text}</p>

      <select value={backgroundColor} onChange={handleColorChange}>
        <option value="red">Red</option>
        <option value="black">Black</option>
        <option value="yellow">Yellow</option>
        {customColor.trim() !== "" && (
          <option value={customColor}>{customColor}</option>
        )}
      </select>
      <input
        type="text"
        value={customColor}
        onChange={handleCustomColorChange}
        placeholder="Enter custom color"
      />
      <button onClick={addColorToCard}>Add Color</button>
    </div>
  );
}
