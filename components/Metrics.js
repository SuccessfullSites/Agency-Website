function Metrics() {
  const Metrics = document.getElementById("Metric");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
    <div class="row row-cols-1 row-cols-lg-2 gy-5 gx-5">
          <div class="container-header col">
            <div class="title fw-bold">Our 18 years of achievements</div>
            <p class="Description mt-2">
              With our super powers we have reached this
            </p>
          </div>
          <div class="content col">
            <div class="row row-cols-1 row-cols-md-2 gy-4 gx-4">
              <div class="content-item d-flex align-items-center col">
                <div class="icon">
                  <img src="./Images/Base-feature-icon-1.svg" alt="" />
                </div>
                <div class="text ms-3">
                  <div class="title fw-bold">10,000+</div>
                  <div class="Description">Downloads per day</div>
                </div>
              </div>
              <div class="content-item d-flex align-items-center col">
                <div class="icon">
                  <img src="./Images/Base-feature-icon-7.svg" alt="" />
                </div>
                <div class="text ms-3">
                  <div class="title fw-bold">2 Million</div>
                  <div class="Description">Users</div>
                </div>
              </div>
              <div class="content-item d-flex align-items-center col">
                <div class="icon">
                  <img src="./Images/Base-feature-icon-2.svg" alt="" />
                </div>
                <div class="text ms-3">
                  <div class="title fw-bold">500+</div>
                  <div class="Description">Clients</div>
                </div>
              </div>
              <div class="content-item d-flex align-items-center col">
                <div class="icon">
                  <img src="./Images/Base-feature-icon-6.svg" alt="" />
                </div>
                <div class="text ms-3">
                  <div class="title fw-bold">140</div>
                  <div class="Description">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
    `;
  Metrics.appendChild(Container);
}
Metrics();
