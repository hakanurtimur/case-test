import "./scss/main.scss";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Products from "./components/Products";
import { fetchProducts } from "./product-fetch";
import { searchEvent } from "./event-listeners";
import { largeProduct, smallProduct } from "./components/FetchedProducts";

let pData = [];

const app = async () => {
  document.getElementById("header").innerHTML = `${Header() + Navbar()}`;
  document.getElementById("slider").innerHTML = `${Slider()}`;
  document.getElementById("products-container").innerHTML = Products();
  const smallImageContainers = document.querySelectorAll(".sm-inner-div");
  const bigImageContainer = document.querySelector(".big-img-container");
  const mainSearch = document.getElementById("main-search");
  const searchModal = document.getElementById("search-modal");

  pData = await fetchProducts(pData);
  smallImageContainers.forEach((smallImageContainer, index) => {
    return (smallImageContainer.innerHTML = `${smallProduct(pData, index)}`);
  });

  bigImageContainer.innerHTML = `${largeProduct(pData)}`;
  searchEvent(pData);
};

app();
