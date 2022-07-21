function Testimonial() {
  const Testimonial = document.getElementById("Testimonial");
  const Container = document.createElement("div");
  Container.classList.add("container", "position-relative");
  Container.innerHTML = `
  <div
          class="testimonial-items row row-cols-1 row-cols-lg-2 gx-5 align-items-center position-relative"
        >
          <div class="container-header position-absolute">
            <div class="quote-mark position-absolute">
              <img src="./Images/Quote mark.png" alt="" srcset="" />
            </div>
            <h1 class="title fw-bold">Real Stories from Real Customers</h1>
            <p>Get inspired by these stories.</p>
          </div>
          <div class="col">
            <div class="testimonial-item bg-white rounded item-1">
              <div class="client-logo">
                <img src="./Images/Client-logo-01.svg" alt="" srcset="" />
              </div>
              <div class="content mt-3">
                <div class="feed-personalDetails">
                  <p class="feed">
                    To quickly start my startup landing page design, I was
                    looking for a landing page UI Kit. Landify is one of the
                    best landing page UI kit I have come across. It’s so
                    flexible, well organised and easily editable.
                  </p>
                  <div class="personal-detail d-flex flex-column mt-3">
                    <span class="per-name fw-bold"> Floyd Miles </span>
                    <span class="per-role"> Vice President, GoPro </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col mt-4">
            <div class="testimonial-item bg-white rounded">
              <div class="client-logo">
                <img src="./Images/Client-logo-02.svg" alt="" srcset="" />
              </div>
              <div class="content mt-3">
                <div class="feed-personalDetails">
                  <p class="feed">
                    I used landify and created a landing page for my startup
                    within a week. The Landify UI Kit is simple and highly
                    intuitive, so anyone can use it.
                  </p>
                  <div class="personal-detail d-flex flex-column mt-3">
                    <span class="per-name fw-bold">Jane Cooper</span>
                    <span class="per-role">CEO, Airbnb</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="testimonial-item bg-white rounded mt-4">
              <div class="client-logo">
                <img src="./Images/Client-logo-03.svg" alt="" srcset="" />
              </div>
              <div class="content mt-3">
                <div class="feed-personalDetails">
                  <p class="feed">
                    Landify saved our time in designing my company page.
                  </p>
                  <div class="personal-detail d-flex flex-column mt-3">
                    <span class="per-name fw-bold">Kristin Watson</span>
                    <span class="per-role">Co-Founder, Strapi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  `;
  Testimonial.appendChild(Container);
}
Testimonial();
