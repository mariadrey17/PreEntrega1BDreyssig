import stockrecomendados from "../../components/pages/home/StockRecomendados/stockrecomendados";

import Categories from "./Categories/Categories";

const getCategories = async () => {
  return new Promise((resolve, reject) => resolve(Categories.find));
};

const getCategory = async (id) => {
  return new Promise((resolve, reject) => {
    resolve(Categories.find((category) => category.id === id));
  });
};

const getProductFilms = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(stockrecomendados);
    }, 2000);
  });
};

const getProductStock = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(stockrecomendados.find((film) => film.id === id));
    }, 2000);
  });
};

export { getCategories, getCategory, getProductFilms, getProductStock };
