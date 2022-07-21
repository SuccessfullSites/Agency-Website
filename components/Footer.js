function Footer() {
  const Footer = document.getElementById("Footer");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div class="row">
          <div class="col-10 left-section">
            <div class="brand-logo">
              <a class="navbar-brand me-5" href="#">
                <img class="BrandLogo" src="./Images/.svg" alt="" srcset="" />
              </a>
            </div>
            <div class="nav-links d-flex flex-column">
              <ul class="nav justify-content-left row-1">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#"
                    >Download Now</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Licence</a>
                </li>
              </ul>
              <ul class="nav justify-content-left row-2">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#"
                    >About</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Pricing</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Contacts</a>
                </li>
              </ul>
            </div>
            <div class="copyrights ps-3 pt-3">
              © 2021 <a href="#">SuccessfullSite</a> Theme. All rights reserved
            </div>
          </div>
          <div class="col-2 badges">
            <p>Get the App</p>
            <div class="badges-items me-3 d-none d-sm-block">
              <a class="badge-item text-decoration-none" href="#1">
                <img
                  class="item"
                  src="./Images/Store badge.svg"
                  alt=""
                  srcset=""
                />
              </a>
              <a class="badge-item text-decoration-none" href="#2">
                <img
                  class="item"
                  src="./Images/Store badge-1.svg"
                  alt=""
                  srcset=""
                />
              </a>
            </div>
          </div>
        </div>
  `;
  Footer.appendChild(Container);
}
Footer();
