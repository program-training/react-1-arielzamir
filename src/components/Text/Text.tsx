import { useState } from "react";

export default function Text(): JSX.Element {
  const [isTextVisible, setIsTextVisible] = useState<boolean>(true);
  const toggleTextHandler = (): void => {
    setIsTextVisible(!isTextVisible);
  };
  return (
    <div>
      <button onClick={toggleTextHandler}>Toggle Text</button>
      {isTextVisible ? <div> This is a text. </div> : null}
    </div>
  );
}
