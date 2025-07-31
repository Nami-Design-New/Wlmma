export default function Download() {
  return (
    <section className="py-5 download_section" id="download-app">
      <div className="container py-5">
        <div className="d-flex flex-column gap-2">
          <h2 className="display-5 text-center fw-bold" data-aos="fade-up">
            Have Question In Mind?
          </h2>
          <div className="position-relative">
            <h3 className="text-center display-5 m-auto fw-bold download-desc" data-aos="fade-up">
              Download App Now and Let Us Help You
            </h3>
            <div className="download-img m-auto" data-aos="fade-up">
              <img src="/images/Vector.png" alt="download app" />
            </div>
          </div>
          <div class="download-app-img m-auto mt-3" data-aos="fade-up">
            <a href="#!" target="_blank" rel="noopener noreferrer">
              <img src="/images/Google_Play.svg" alt="download app" />
            </a>
            <a href="#!" target="_blank" rel="noopener noreferrer">
              <img src="/images/App_Store.svg" alt="download app" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
