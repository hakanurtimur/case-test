export async function fetchProducts() {
  const smallImageContainers = document.querySelectorAll('.sm-inner-div');
  const bigImageContainer = document.querySelector('.big-img-container');
  try {
    const response = await fetch(
      ' https://case-test-8cd5d-default-rtdb.firebaseio.com/products.json',
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Hata:', error);
    error = true;
  }
}
