import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HomePage.css";

const HomePage = () => {
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const itemsPerPage = 20;

  // API'den veriyi çek
  async function fetchCars() {
    try {
      setIsLoading(true);
      const response = await axios.get("/api/arabalar");
      if (Array.isArray(response.data)) {
        setCars(response.data);
      } else {
        console.error("API yanıtı beklenen formatta değil.", response.data);
        setError("Beklenmeyen veri formatı.");
      }
    } catch (err) {
      console.error("Veri çekme hatası:", err);
      setError("Veri çekilirken bir hata oluştu.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchCars();
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

  const filteredCars = Array.isArray(cars)
    ? cars
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
        })
    : [];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCars.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  if (isLoading) {
    return <div>Veriler yükleniyor...</div>;
  }

  if (error) {
    return <div>Hata: {error}</div>;
  }

  return (
    <div className="home-page">
      <div className="table-header">
        <input
          type="text"
          placeholder="Marka veya Model ara..."
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

      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
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