import stockrecomendados from "../../../src/components/pages/home/StockRecomendados/stockrecomendados";

import categories from "../Categories/categories";

const getCategories = async () => {
  return new Promise((resolve, reject) => resolve(categories.find));
};

const getCategory = async (id) => {
  return new Promise((resolve, reject) => {
    resolve(categories.find((category) => category.id === id));
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
