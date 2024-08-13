import { useEffect, useState } from 'react';
import axios from 'axios';
import Result from './Result';
import styles from './SearchBar.module.css';

const Search = () => {
  const [value, setValue] = useState(''); 
  const [suggestions, setSuggestions] = useState([]); 
  const [hideSuggestions, setHideSuggestions] = useState(true);
  const [result, setResult] = useState(null);

  const findResult = (title) => {
    setResult(suggestions.find((suggestion) => suggestion.title === title));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://dummyjson.com/products/search?q=${value}`
        );

        setSuggestions(data.products);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [value]);

  return (
    <>
      <div className={styles.container}>
        <input
          onFocus={() => setHideSuggestions(false)}
          onBlur={async () => {
            setTimeout(() => {
              setHideSuggestions(true);
            }, 200);
          }}
          type="text"
          className={styles.textbox}
          placeholder="Search data..."
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <div
          className={`${styles.suggestions} ${
            hideSuggestions && styles.hidden
          }`}
        >
          {suggestions.map((suggestion) => (
            <div
              className={styles.suggestion}
              onClick={() => findResult(suggestion.title)}
            >
              {suggestion.title}
            </div>
          ))}
        </div>
      </div>
      {result && <Result {...result} />}
    </>
  );
};

export default Search;