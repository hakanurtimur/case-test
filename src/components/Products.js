const Products = () => {
  const smallProductsTemplate = `
    <div
    class="col-lg-5 col-12 p-0 row px-0 justify-content-center text-center"
  >
    <div class="row-6 row justify-content-between h-50">
      <div class="col-6 small-img-container text-center">
        <div
          class="sm-inner-div d-flex flex-column position-relative justify-content-between align-items-center"
        >
        <img src="https://www.eclosio.ong/wp-content/uploads/2018/08/default.png" class="w-100 h-100 rounded-3" />
        <div style= "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
        <div class="spinner-border text-black-50 role="status"> </div>
        </div>
        </div>
      </div>
      <div class="col-6 small-img-container text-center">
        <div
          class="sm-inner-div d-flex flex-column position-relative justify-content-between align-items-center"
        >
        <img src="https://www.eclosio.ong/wp-content/uploads/2018/08/default.png" class="w-100 h-100 rounded-3" />
        <div style= "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
        <div class="spinner-border text-black-50 role="status"> </div>
        </div>
        </div>
      </div>
    </div>
    <div class="row-6 row justify-content-between h-50">
      <div class="col-6 small-img-container text-center">
        <div
          class="sm-inner-div d-flex flex-column position-relative justify-content-between align-items-center"
        >
        <img src="https://www.eclosio.ong/wp-content/uploads/2018/08/default.png" class="w-100 h-100 rounded-3" />
        <div style= "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
        <div class="spinner-border text-black-50 role="status"> </div>
        </div>
        </div>
      </div>
      <div class="col-6 small-img-container text-center">
        <div
          class="sm-inner-div d-flex flex-column position-relative justify-content-between align-items-center"
        >
        <img src="https://www.eclosio.ong/wp-content/uploads/2018/08/default.png" class="w-100 h-100 rounded-3" />
        <div style= "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
        <div class="spinner-border text-black-50 role="status"> </div>
        </div>
        </div>
      </div>
    </div>
  </div>
    `;
  const largeProductsTemplate = `
    <div class="col-lg-5 d-flex justify-content-center">
    <div
      class="lg-inner-div d-flex flex-column justify-content-between align-items-center p-3 big-img-container"
    > 
    <div
        class="sm-inner-div d-flex flex-column position-relative justify-content-between align-items-center"
      >
        <img src="https://www.eclosio.ong/wp-content/uploads/2018/08/default.png" class="w-100 h-100 rounded-3" />
        <div style= "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
        <div class="spinner-border text-black-50 role="status"> </div>
        </div>
      </div>
    </div>
  </div>`;
  const template = smallProductsTemplate + largeProductsTemplate;
  return template;
};
export default Products;
