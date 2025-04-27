import { useState } from "react";
import useFetchPhotos from "./useFetchPhotos";
import ImageDisplay from "./ImageDisplay";
import styles from "./FetchImages.module.css";

const FetchImages = ({ query }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const { loading, imageData, error = "" } = useFetchPhotos(query, pageNumber);
  function handleNext() {
    setPageNumber(pageNumber + 1);
  }
  function handlePrev() {
    setPageNumber(pageNumber - 1);
  }
  function updateCart(){
    
  }
  return (
    <div className={styles.gallery}>
      {loading && <div>Loading ...</div>}
      {!loading &&
        imageData.map((image, index) => (
          <ImageDisplay {...image} key={index} addCardCallback={updateCart}/>
        ))}
      <div className={styles.buttonGroup}>
        {!loading && (
          <>
            <button onClick={handlePrev}>Go Back to Prev Set</button>
            <button onClick={handleNext}>Fetch Next Set</button>
          </>
        )}
      </div>
    </div>
  );
};
export default FetchImages;
