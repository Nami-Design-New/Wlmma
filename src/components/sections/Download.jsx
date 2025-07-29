export function Download({ sectionHeader,downloadImg,downloadApp }) {
  return (
    <section id="download" className="py-5">
      <div className="container py-5">
        <div className="d-flex flex-column gap-2">
        <h1 className="h6 text-center text-yellow-color fw-bold">
          {sectionHeader.subTitle}
        </h1>
        <h2 className="display-5 text-center fw-bold">{sectionHeader.title}</h2>
        <div className="position-relative">
            <h3 className="text-center display-5 m-auto fw-bold download-desc">{sectionHeader.desc}</h3>
            <div className="download-img m-auto">
                <img src={downloadImg} alt={sectionHeader.title} />
            </div>
        </div>
        <div class="download-app-img m-auto mt-3">
            <img src={downloadApp} alt="download app" />
        </div>
      </div>
      </div>
    </section>
  );
}
