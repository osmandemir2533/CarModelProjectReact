import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HomePage.css";

const HomePage = () => {
  
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const itemsPerPage = 20;

  // JSON verilerini çek
  useEffect(() => {
    axios
      .get("https://project-data-1-ex9g.onrender.com/get")
      .then((response) => setCars(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleSort = (type) => {
    setSortType(type);
  };

  const toggleFilters = () => {
    setShowFilters((prevShowFilters) => !prevShowFilters);
  };

  const filteredCars = cars
    .filter(
      (car) =>
        car.marka.toLowerCase().includes(searchTerm) ||
        car.model.toLowerCase().includes(searchTerm)
    )
    .sort((a, b) => {
      switch (sortType) {
        case "marka":
          return a.marka.localeCompare(b.marka);
        case "fiyat":
          return b.fiyat - a.fiyat;
        case "tork":
          return b.tork - a.tork;
        case "yıl":
          return b.yıl - a.yıl;
        default:
          return 0;
      }
    });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCars.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="home-page">
      <div>
        
      </div>

      {/* Arama ve Filtreleme alanı */}
      <div className="table-header">
        <input
          type="text"
          placeholder="Marka veya Model ??"
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
        <div className="filter-container">
          <button className="filter-button" onClick={toggleFilters}>
            Filtrele
          </button>
          {showFilters && (
            <div className="filter-options">
              <button onClick={() => handleSort("marka")}>Alfabeye Göre Sırala</button>
              <button onClick={() => handleSort("fiyat")}>Fiyata Göre Sırala</button>
              <button onClick={() => handleSort("tork")}>Torka Göre Sırala</button>
              <button onClick={() => handleSort("yıl")}>Yılına Göre Sırala</button>
            </div>
          )}
        </div>
      </div>

      {/* Tablo */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Marka</th>
            <th>Model</th>
            <th>Yıl</th>
            <th>Fiyat</th>
            <th>Tork</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((car) => (
            <tr key={car.id}>
              <td>{car.id}</td>
              <td>{car.marka}</td>
              <td>{car.model}</td>
              <td>{car.yıl}</td>
              <td>{car.fiyat}</td>
              <td>{car.tork}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Sayfa Kontrol Butonları */}
      <div className="pagination">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Geri
        </button>
        <button
          onClick={handleNextPage}
          disabled={indexOfLastItem >= filteredCars.length}
        >
          İleri
        </button>
      </div>
    </div>
  );
};

export default HomePage;
