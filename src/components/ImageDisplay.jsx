import Image from "next/image";
import styles from "./ImageDisplay.module.css";
import { useState } from "react";

const ImageDisplay = ({ alt, src,id,addCardCallback }) => {
  const [hover, setHover] = useState(false);
  function handleAdd() {
    addCardCallback(id)
  }
  return (
    <div className={styles.product}>
      <h4 className={styles.title}>{alt}</h4>
      <Image
        src={src.medium}
        alt={alt}
        width={100}
        height={100}
        onMouseEnter={() => setHover(true)}
      />
      {hover && <button onClick={handleAdd}>Add to Cart</button>}
    </div>
  );
};
export default ImageDisplay;
