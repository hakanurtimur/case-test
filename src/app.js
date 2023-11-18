import './scss/main.scss';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Products from './components/Products';
import { fetchProducts } from './product-fetch';
import { searchEvent } from './event-listeners';
import { largeProduct, smallProduct } from './components/FetchedProducts';

let pData = [];

const app = async () => {
  document.getElementById('container').innerHTML = `
    <header id="header" class="fixed-top bg-white">
        ${Header()}
        ${Navbar()}
    </header>
    <main class ="page-content">
        ${Slider()}
        ${Products()}
    </main>
  `;

  const smallImageContainers = document.querySelectorAll('.sm-inner-div');
  const bigImageContainer = document.querySelector('.big-img-container');

  pData = await fetchProducts(pData);
  // eslint-disable-next-line no-return-assign, no-param-reassign
  smallImageContainers.forEach((smallImageContainer, index) => (smallImageContainer.innerHTML = `${smallProduct(pData, index)}`));

  bigImageContainer.innerHTML = `${largeProduct(pData)}`;
  searchEvent(pData);
};

app();
