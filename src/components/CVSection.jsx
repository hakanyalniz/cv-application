import "../styles/CVSection.css";
import Html from "./Html";
// import { PDFViewer } from "@react-pdf/renderer";
// import { MyDocument } from "./MyDocument";

function CVSection({ firstName }) {
  return (
    <div className="CV-section">
      <div className="CV-wrapper">
        <Html firstName={firstName} />

        {/* <PDFViewer
          // style={{ width: 650, height: 842 }}
          showToolbar={false}
          id="PDFViewer"
        >
          <MyDocument />
        </PDFViewer> */}
      </div>
    </div>
  );
}

export default CVSection;
