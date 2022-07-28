function Herosection() {
  const Herosection = document.getElementById("Herosection");
  const Container = document.createElement("div");
  const BG = document.createElement("div");
  Container.classList.add("container");
  BG.classList.add("hero-bg");
  Container.innerHTML = `
  <div class="row row-cols-2 gx-5 gy-5">
          <div class="text-wrapper col-12 col-lg-7">
            <div class="text-body">
              <h1 class=" fw-bold">
                The easiest way to manage projects
              </h1>
              <p class="mt-3">
                From the small stuff to the big picture, organizes the work so
                teams know what to do, why it matters, and how to get it done.
              </p>
            </div>
            <div class="btns-group mt-3">
              <a class="button btn-theme-default" href="#">Get Started</a>
              <a class="button btn-theme-2" href="#"
                ><i class="bi bi-play-circle me-2"></i> Watch Video</a
              >
            </div>
          </div>
          <div
            class="mockup-img col-12 col-lg-5 overflow-hidden d-flex justify-content-center"
          >
            <img class="" src="./Images/mockup-mobile1.png" alt="" id="" />
          </div>
        </div>
        
  `;
  BG.innerHTML = `
        <img class="band left-band1" src="./Images/Left Band 1.svg"></img>
        <img class="band left-band2" src="./Images/Left Band 2.svg"></img>
        <img class="band right-band1" src="./Images/Right Band 1.svg"></img>
        <img class="band right-band2" src="./Images/Right Band 2.svg"></img>
        <img class="band right-band3" src="./Images/Right Band 3.svg"></img>
        <img class="bg" src="./Images/hero-bg.svg" alt="" srcset="" />
        <img class="purple-circle" src="./Images/Purple Circle.svg"></img>
  `;
  Herosection.appendChild(Container);
  Herosection.appendChild(BG);
}
Herosection();
