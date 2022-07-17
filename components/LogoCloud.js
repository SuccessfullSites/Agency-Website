function LogoCloud() {
  const LogoCloud1 = document.getElementById("LogoCloud1");
  const LogoCloud2 = document.getElementById("LogoCloud2");
  const Container1 = document.createElement("div");
  const Container2 = document.createElement("div");
  Container1.classList.add("container", "border-top", "border-bottom", "py-4");
  Container2.classList.add("container");
  Container1.innerHTML = `
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
  Container2.innerHTML = `
  <div class="row row-cols-1 row-cols-md-2 gy-5 gx-5">
          <div class="container-header col">
            <div class="title fw-bold">Easy integrations with 170+ tools</div>
            <p class="Description mt-2">
              Connect Landify with your favourite tools that you use daily and
              keep things on track.
            </p>
          </div>
          <div class="content col">
            <img class='img-fluid' src="./Images/mockup-metric06.png" alt="" srcset="" />
          </div>
        </div>
  `;
  LogoCloud1.appendChild(Container1);
  LogoCloud2.appendChild(Container2);
}
LogoCloud();
