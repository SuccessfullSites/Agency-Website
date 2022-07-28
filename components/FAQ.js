function FAQ() {
  const FAQ = document.getElementById("FAQ");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div class="text-body">
        <h2 class='title fw-bold'>Frequently Asked Questions</h2>
        <p>These are the questions we hear more often.</p>
      </div>
  <div class="accordion mt-5" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>This is the first item's accordion body.</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu bibendum eget adipiscing blandit tempus, viverra lacus in. Faucibus aliquet aenean ornare eget. Nibh nunc morbi maecenas ipsum at. Ac fames metus, ipsum tortor mauris facilisi lobortis eu. At magnis et quis sem lorem mattis. 
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>This is the second item's accordion body.</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu bibendum eget adipiscing blandit tempus, viverra lacus in. Faucibus aliquet aenean ornare eget. Nibh nunc morbi maecenas ipsum at. Ac fames metus, ipsum tortor mauris facilisi lobortis eu. At magnis et quis sem lorem mattis. 
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu bibendum eget adipiscing blandit tempus, viverra lacus in. Faucibus aliquet aenean ornare eget. Nibh nunc morbi maecenas ipsum at. Ac fames metus, ipsum tortor mauris facilisi lobortis eu. At magnis et quis sem lorem mattis. 
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Accordion Item #4
              </button>
            </h2>
            <div
              id="collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>This is the fourth item's accordion body.</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu bibendum eget adipiscing blandit tempus, viverra lacus in. Faucibus aliquet aenean ornare eget. Nibh nunc morbi maecenas ipsum at. Ac fames metus, ipsum tortor mauris facilisi lobortis eu. At magnis et quis sem lorem mattis. 
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFive">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Accordion Item #5
              </button>
            </h2>
            <div
              id="collapseFive"
              class="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>This is the fifth item's accordion body.</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu bibendum eget adipiscing blandit tempus, viverra lacus in. Faucibus aliquet aenean ornare eget. Nibh nunc morbi maecenas ipsum at. Ac fames metus, ipsum tortor mauris facilisi lobortis eu. At magnis et quis sem lorem mattis. 
              </div>
            </div>
          </div>
        </div>
  `;
  FAQ.appendChild(Container);
}
FAQ();
