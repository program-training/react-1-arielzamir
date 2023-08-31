import "./Card.css";
export default function Card(): JSX.Element {
  const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const card = document.getElementById("card");
    if (card) {
      card.style.backgroundColor = event.target.value;
    }
  };

  return (
    <div id="card">
      <h2>Card Title</h2>
      <img src="https://did.li/ue0fT" alt="sea" />
      <p>This is the card's content.</p>
      <select onChange={handleColorChange}>
        <option value="white">White</option>
        <option value="lightblue">Light Blue</option>
        <option value="lightgreen">Light Green</option>
        <option value="lightpink">Light Pink</option>
      </select>
    </div>
  );
}
