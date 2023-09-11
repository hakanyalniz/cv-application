import "../styles/CVSection.css";
import Html from "./Html";
// import { PDFViewer } from "@react-pdf/renderer";
// import { MyDocument } from "./MyDocument";

function CVSection({ formState, dynamicForm }) {
  return (
    <div className="CV-section">
      <div className="CV-wrapper">
        <Html formState={formState} dynamicForm={dynamicForm} />

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
