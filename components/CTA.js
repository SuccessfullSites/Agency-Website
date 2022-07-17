function CTA() {
  const CTA = document.getElementById("CTA");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div class="row row-cols-1 row-cols-lg-2 gx-5">
  <div class="container-header col py-5">
    <div class="title fw-bold">
      Manage all projects from your mobile
    </div>
    <p>
      Download the app to manage your projects, keep track of the
      progress and complete tasks without procastinating. Stay on track
      and complete on time!
    </p>
    <div class="badges mt-5">
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
  <div class="col container-body overflow-hidden">
    <img class="img-fluid" src="./Images/mockup-mobiles.png" alt="" />
  </div>
</div>
  `;
  CTA.appendChild(Container);
}
CTA();
