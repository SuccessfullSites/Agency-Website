function Testimonial() {
  const Testimonial = document.getElementById("Testimonial");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div class="container-header">
          <div class="quote-mark">
            <img src="./Images/Quote mark.png" alt="" srcset="" />
          </div>
          <h1 class="title">Real Stories from Real Customers</h1>
          <p>Get inspired by these stories.</p>
        </div>
        <div class="testimonial-items row row-cols-2">
          <div class="testimonial-item bg-white rounded col">
            <div class="client-logo">
              <img src="./Images/Client-logo-01.svg" alt="" srcset="" />
            </div>
            <div class="content">
              <div class="feed-personalDetails">
                <p class="feed">
                  To quickly start my startup landing page design, I was looking
                  for a landing page UI Kit. Landify is one of the best landing
                  page UI kit I have come across. It’s so flexible, well
                  organised and easily editable.
                </p>
                <div class="personal-detail">
                  <span class="per-name fw-bold"> Floyd Miles </span>
                  <span class="per-role"> Vice President, GoPro </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row row-cols-1">
              <div class="testimonial-item bg-white rounded col">
                <div class="client-logo">
                  <img src="./Images/Client-logo-01.svg" alt="" srcset="" />
                </div>
                <div class="content">
                  <div class="feed-personalDetails">
                    <p class="feed">
                      To quickly start my startup landing page design, I was
                      looking for a landing page UI Kit. Landify is one of the
                      best landing page UI kit I have come across. It’s so
                      flexible, well organised and easily editable.
                    </p>
                    <div class="personal-detail">
                      <span class="per-name fw-bold"> Floyd Miles </span>
                      <span class="per-role"> Vice President, GoPro </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="testimonial-item bg-white rounded col">
                <div class="client-logo">
                  <img src="./Images/Client-logo-01.svg" alt="" srcset="" />
                </div>
                <div class="content">
                  <div class="feed-personalDetails">
                    <p class="feed">
                      To quickly start my startup landing page design, I was
                      looking for a landing page UI Kit. Landify is one of the
                      best landing page UI kit I have come across. It’s so
                      flexible, well organised and easily editable.
                    </p>
                    <div class="personal-detail">
                      <span class="per-name fw-bold"> Floyd Miles </span>
                      <span class="per-role"> Vice President, GoPro </span>
                    </div>
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
