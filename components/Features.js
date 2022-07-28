function Features() {
  const Features = document.getElementById("Features");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div
  class="text-body text-center d-flex flex-column align-items-center"
>
  <h2 class="title fw-bold">Tailor-made features</h2>
  <p class="">
    Lorem ipsum is common placeholder text used to demonstrate the
    graphic elements of a document or visual presentation.
  </p>
</div>
<div
  class="container-body row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4"
>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <img src="./Images/Base-feature-icon-1.svg" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">Robust workflow</div>
      <div class="description text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        erat nibh tristique ipsum.
      </div>
    </div>
  </div>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <img src="./Images/Base-feature-icon-3.svg" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">Flexibility</div>
      <div class="description text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        erat nibh tristique ipsum.
      </div>
    </div>
  </div>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <img src="./Images/Base-feature-icon-5.svg" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">User friendly</div>
      <div class="description text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        erat nibh tristique ipsum.
      </div>
    </div>
  </div>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <img src="./Images/Base-feature-icon-7.svg" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">Multiple layouts</div>
      <div class="description text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        erat nibh tristique ipsum.
      </div>
    </div>
  </div>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <img src="./Images/Base-feature-icon-2.svg" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">Better components</div>
      <div class="description text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        erat nibh tristique ipsum.
      </div>
    </div>
  </div>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <img src="./Images/Base-feature-icon-8.svg" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">Well organised</div>
      <div class="description text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        erat nibh tristique ipsum.
      </div>
    </div>
  </div>
</div>
    `;
  Features.appendChild(Container);
}
Features();
