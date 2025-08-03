import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import SubmitButton from "./../ui/forms/SubmitButton";
import AppSlidersTab from "../components/dashboard/general-settings/AppSlidersTab";

export default function GeneralSettings() {
  const [key, setKey] = useState("terms-conditions");

  return (
    <section className="form_ui">
      <div className="page_head">
        <h1>General Settings</h1>
        <p>Manage app settings and public content</p>
      </div>

      <Tabs
        id="general-settings-tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="terms-conditions" title="Terms & Conditions">
          <div className="tab_wrapper">
            <div className="input-field mb-3">
              <h6>Terms & Conditions</h6>
              <CKEditor
                editor={ClassicEditor}
                config={{
                  placeholder: "Enter terms & conditions...",
                }}
              />
            </div>

            <div className="d-flex justify-content-end">
              <SubmitButton text="Save" />
            </div>
          </div>
        </Tab>

        <Tab eventKey="privacy-policy" title="Privacy Policy">
          <div className="tab_wrapper">
            <div className="input-field mb-3">
              <h6>Privacy Policy</h6>
              <CKEditor
                editor={ClassicEditor}
                config={{
                  placeholder: "Enter privacy policy...",
                }}
              />
            </div>

            <div className="d-flex justify-content-end">
              <SubmitButton text="Save" />
            </div>
          </div>
        </Tab>

        <Tab eventKey="about-us" title="About Us">
          <div className="tab_wrapper">
            <div className="input-field mb-3">
              <h6>About Us</h6>
              <CKEditor
                editor={ClassicEditor}
                config={{
                  placeholder: "Enter about us content...",
                }}
              />
            </div>

            <div className="d-flex justify-content-end">
              <SubmitButton text="Save" />
            </div>
          </div>
        </Tab>

        <Tab eventKey="app-sliders" title="App Sliders">
          <AppSlidersTab />
        </Tab>
      </Tabs>
    </section>
  );
}
