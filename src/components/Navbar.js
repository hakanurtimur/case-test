const Navbar = () => {
    const template = `
    <nav class="navbar navbar-expand-lg bg-white px-4 border-top border-2 border-sub-border-color">
    <div class="container-fluid">
      <button
        class="navbar-toggler my-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul
          class="navbar-nav w-100 d-flex justify-content-between lg-align-items-center"
        >
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle bg-body-tertiary lg-d-flex lg-justify-content-between lg-align-items-center lg-gap-2 lg-rounded-1 lg-border lg-border-dark-subtle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="bi bi-list d-none d-lg-inline"></i>
              <span class="pe-3">All Categories</span>
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#slider">Iphone</a></li>
              <li><a class="dropdown-item" href="#products">Sneakers</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">New Arrivals</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Trending</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Deals For You</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Discounts</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Weakly Offers</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Become A Vendor</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>`;
    return template;
}

export default Navbar;