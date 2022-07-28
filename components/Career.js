function Career() {
  const Career = document.getElementById("Careers");
  const Container = document.createElement("div");
  Container.classList.add("container", "py-5");
  Container.innerHTML = `
    <div class="row row-cols-1 row-cols-md-2 gy-5 align-items-center">
    <div class="col text-body">
      <h2 class="title fw-bold">Join the Atlassian Talent Community</h2>
      <p class="mt-2">
        Don’t see an exact role match? No problem! Join our Talent
        Community and stay up-to-date on company and careers updates
        relevant to your career.
      </p>
      <a class="button btn-theme-default mt-3" href="#"> Join Now </a>
    </div>
    <div class="col container-body">
      <img
        class="img-fluid"
        src="./Images/career-illustration.png"
        alt=""
      />
    </div>
  </div>
    `;
  Career.appendChild(Container);
}
Career();
