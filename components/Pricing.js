function Pricing() {
  const Pricing = document.getElementById("Pricing");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div class="container-header d-flex flex-column align-items-center">
          <h1 class="text-center fw-bold">Pricing Packages</h1>
          <p class="text-center">
            Connect Landify with your favourite tools that you use daily and
            keep things on track.
          </p>
        </div>
        <div class="row mt-5">
          <!-- Pricing Table -->
          <div class="pricing-table col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box">
              <div class="title">Basic</div>
              <div class="price">
                $199 <span class="duration">/ monthly</span>
              </div>
              <div class="table-content">
                <ul>
                  <li>
                    <span><i class="bi bi-check2"></i>1 job posting</span>
                  </li>
                  <li>
                    <span><i class="bi bi-check2"></i>0 featured job</span>
                  </li>
                  <li>
                    <span
                      ><i class="bi bi-check2"></i>Job displayed for 20
                      days</span
                    >
                  </li>
                  <li>
                    <span
                      ><i class="bi bi-check2"></i>Premium Support 24/7
                    </span>
                  </li>
                </ul>
              </div>
              <div class="table-footer">
                <a href="#" class="theme-btn btn-style-three">View Profile</a>
              </div>
            </div>
          </div>
          <!-- Pricing Table -->
          <div class="pricing-table tagged col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box">
              <span class="tag">Recommended</span>
              <div class="title">Standard</div>
              <div class="price">
                $499 <span class="duration">/ monthly</span>
              </div>
              <div class="table-content">
                <ul>
                  <li>
                    <span><i class="bi bi-check2"></i>1 job posting</span>
                  </li>
                  <li>
                    <span><i class="bi bi-check2"></i>0 featured job</span>
                  </li>
                  <li>
                    <span
                      ><i class="bi bi-check2"></i>Job displayed for 20
                      days</span
                    >
                  </li>
                  <li>
                    <span
                      ><i class="bi bi-check2"></i>Premium Support 24/7
                    </span>
                  </li>
                </ul>
              </div>
              <div class="table-footer">
                <a href="#" class="theme-btn btn-style-three">View Profile</a>
              </div>
            </div>
          </div>
          <!-- Pricing Table -->
          <div class="pricing-table col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box">
              <div class="title">Extended</div>
              <div class="price">
                $799 <span class="duration">/ monthly</span>
              </div>
              <div class="table-content">
                <ul>
                  <li>
                    <span><i class="bi bi-check2"></i>1 job posting</span>
                  </li>
                  <li>
                    <span><i class="bi bi-check2"></i>0 featured job</span>
                  </li>
                  <li>
                    <span
                      ><i class="bi bi-check2"></i>Job displayed for 20
                      days</span
                    >
                  </li>
                  <li>
                    <span
                      ><i class="bi bi-check2"></i>Premium Support 24/7
                    </span>
                  </li>
                </ul>
              </div>
              <div class="table-footer">
                <a href="#" class="theme-btn btn-style-three">View Profile</a>
              </div>
            </div>
          </div>
        </div>
  `;
  Pricing.appendChild(Container);
}
Pricing();
