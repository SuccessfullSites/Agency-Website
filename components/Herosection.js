function Herosection() {
  const Herosection = document.getElementById("Herosection");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div class="row row-cols-2 gx-5 gy-5">
          <div class="text-wrapper col-12 col-lg-7">
            <div class="text-body">
              <h1 class="display-xl fw-bold">
                The easiest way to manage projects
              </h1>
              <p class="body-lg mt-3">
                From the small stuff to the big picture, organizes the work so
                teams know what to do, why it matters, and how to get it done.
              </p>
            </div>
            <div class="btns-group mt-3">
              <a class="btn btn-primary" href="#">Get Started</a>
              <a class="btn" href="#"
                ><i class="bi bi-play-circle"></i> Watch Video</a
              >
            </div>
          </div>
          <div
            class="mockup-img col-12 col-lg-5 overflow-hidden d-flex justify-content-center"
          >
            <img class="" src="./Images/mockup-mobile1.png" alt="" id="" />
          </div>
        </div>
        <div class="Herosection-bg"></div>
  `;
  Herosection.appendChild(Container);
}
Herosection();
