import { useState } from "react";
import { dataProps } from "../Card/data";
import "../Card/Card.css";

const CardForm = () => {
  const [cards, setCards] = useState<dataProps[]>([]);
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (title.trim() !== "" && text.trim() !== "") {
      handleAddNewCard();
    }
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleAddNewCard = () => {
    setCards([
      { title: title, imageUrl: "https://loremflickr.com/320/240", text: text },
    ]);
    setText("");
    setTitle("");
    setButtonClicked(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Add title to card"
        />
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          placeholder="Add text to card"
        />
        <button onClick={handleAddNewCard} type="submit">
          Add New Card
        </button>
      </form>
      {buttonClicked &&
        cards.map((card, index) => (
          <div key={index} className="card">
            <h2>{card.title}</h2>
            <img src={card.imageUrl} className="cardImage" alt={card.title} />
            <p>{card.text}</p>
          </div>
        ))}
    </div>
  );
};

export default CardForm;
