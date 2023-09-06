import html2canvas from "html2canvas";
import jspdf from "jspdf";
import CV from "./CV";

export default function Html() {
  return (
    <>
      <CV />
      <button
        onClick={() => {
          const check = document.getElementById("jspdf");
          html2canvas(check, {}).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const height = (canvas.height * 210) / canvas.width;

            const pdf = new jspdf("p", "mm", "a4");
            pdf.setFont("courier", "normal");
            pdf.text("This is the default font.", 20, 20);

            pdf.addImage(imgData, "PNG", 0, 0, 210, height);
            pdf.save("export.pdf");
          });
        }}
      >
        Download
      </button>
    </>
  );
}
