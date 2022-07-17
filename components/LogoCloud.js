function LogoCloud() {
  const LogoCloud = document.getElementById("LogoCloud1");
  const Container = document.createElement("div");
  Container.classList.add("container", "border-top", "border-bottom", "py-4");
  Container.innerHTML = `
  <div
          class="row row-cols-2 row-cols-md-4 row-cols-lg-6 gy-5 justify-content-center"
        >
          <div class="col d-flex justify-content-center ClientLogo">
            <img src="./Images/Client-logo-01.svg" alt="ClientLogo" srcset="" />
          </div>
          <div class="col d-flex justify-content-center ClientLogo">
            <img src="./Images/Client-logo-02.svg" alt="ClientLogo" srcset="" />
          </div>
          <div class="col d-flex justify-content-center ClientLogo">
            <img src="./Images/Client-logo-03.svg" alt="ClientLogo" srcset="" />
          </div>
          <div class="col d-flex justify-content-center ClientLogo">
            <img src="./Images/Client-logo-04.svg" alt="ClientLogo" srcset="" />
          </div>
          <div class="col d-flex justify-content-center ClientLogo">
            <img src="./Images/Client-logo-05.svg" alt="ClientLogo" srcset="" />
          </div>
          <div class="col d-flex justify-content-center ClientLogo">
            <img src="./Images/Client-logo-06.svg" alt="ClientLogo" srcset="" />
          </div>
        </div>
  `;
  LogoCloud.appendChild(Container);
}
LogoCloud();
