import { useContext, useEffect, useState } from "react";
import { Search } from "../components/SearchContext.jsx"; 

const Searchbarpractice = () => {
  const { searchItem } = useContext(Search);
  const [items, setItems] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const result = await response.json();
        setItems(result);
        setFilteredData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    const trimmed = searchItem.trim().toLowerCase();

    if (trimmed === "") {
      setFilteredData(items);
    } else {
      const filtered = items.filter((item) =>
        item.name.toLowerCase().includes(trimmed)
      );
      setFilteredData(filtered);
    }
  }, [searchItem, items]);

  return (
    <div style={{ padding: "20px" }}>
      <h2 className="">Search Results</h2>
      <ul>
        {filteredData.length > 0 ? (
          filteredData.map((val) => <li key={val.id}>{val.name}</li>)
        ) : (
          <li>No matching users found</li>
        )}
      </ul>
    </div>
  );
};

export default Searchbarpractice;
