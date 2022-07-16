function Features() {
  const Features = document.getElementById("Features");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
    <div class="container-header">
          <h1>Tailor-made features</h1>
          <p>
            Lorem ipsum is common placeholder text used to demonstrate the
            graphic elements of a document or visual presentation.
          </p>
        </div>
        <div class="container-body row row-cols-3 gy-5">
          <div class="col">
            <div class="icon">
              <img src="" alt="" srcset="" />
            </div>
            <div class="text">
              <div class="title">Robust workflow</div>
              <div class="description">
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
