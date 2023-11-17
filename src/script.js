const smallImageContainers = document.querySelectorAll(".sm-inner-div");
const bigImageContainer = document.querySelector(".big-img-container");
console.log(bigImageContainer);

smallImageContainers.forEach((smallImageContainer) => {
  return (smallImageContainer.innerHTML = `

  <div
  class="sm-inner-div d-flex flex-column position-relative justify-content-between align-items-center"
>
  <img src="https://www.eclosio.ong/wp-content/uploads/2018/08/default.png" class="w-100 h-100 rounded-3" />
  <div style= "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
  <div class="spinner-border text-black-50 role="status"> </div>
  </div>
</div>
            
          `);
});
bigImageContainer.innerHTML = `
<div
        class="sm-inner-div d-flex flex-column position-relative justify-content-between align-items-center"
      >
        <img src="https://www.eclosio.ong/wp-content/uploads/2018/08/default.png" class="w-100 h-100 rounded-3" />
        <div style= "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
        <div class="spinner-border text-black-50 role="status"> </div>
        </div>
      </div>
`;

async function fetchData() {
  try {
    const response = await fetch(
      " https://case-test-8cd5d-default-rtdb.firebaseio.com/products.json"
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    smallImageContainers.forEach((smallImageContainer, index) => {
      return (smallImageContainer.innerHTML = `
  
      <img src=${data[`p${index + 1}`].img} class="small-img" />
      <p
        class="d-flex flex-row justify-content-between px-3 align-items-center fw-bold w-100"
      >
      ${data[`p${index + 1}`].name}<span
          class="py-1 px-3 bg-white text-accent-color rounded-5 fw-normal"
          >$${data[`p${index + 1}`].price}</span
        >
      </p>
 `);
    });
    bigImageContainer.innerHTML = `
      <div class="d-flex flex-row justify-content-between w-100">
                  <span
                    class="py-1 px-3 bg-black text-white rounded-5 fw-normal align-self-end"
                    >SALE %${data["p5"].sale * 100}</span
                  >
                  <span
                    class="py-1 px-3 bg-white text-accent-color rounded-5 fw-normal align-self-end"
                    >$${data[`p5`].price * data[`p5`].sale}</span
                  >
                </div>
                <img src="./assets/images/sneakers-imgs/af-shadow.png" />
                <p class="h3 fw-bold w-100 text-start">
                ${data[`p5`].name}
                </p>
                <p class="text-start w-100 text-black-50">Brand: ${data[`p5`].brand}</p> `;
  } catch (error) {
    console.error("Hata:", error);
    error = true;
  }
}

fetchData();

console.log(smallImageContainers);
