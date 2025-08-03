import { Tab, Tabs } from "react-bootstrap";

export default function GeneralSettings() {
  return (
    <section>
      <div className="page_head">
        <h1>General Settings </h1>
        <p>Manage app settings and public content</p>
      </div>


      <Tabs activeKey="app-sliders">

        <Tab eventKey="terms-conditions" t className="tab_item">

        </Tab>

        <Tab eventKey="privacy-policy" className="tab_item">

        </Tab>

        <Tab eventKey="about-us" className="tab_item">

        </Tab>

        <Tab eventKey="app-categories" className="tab_item">

        </Tab>
      </Tabs>
    </section>
  );
}
