import html2canvas from "html2canvas";
import jspdf from "jspdf";

export default function Html() {
  return (
    <>
      <div id="jspdf" className="CVPage">
        Test
      </div>
      <button
        onClick={() => {
          const check = document.getElementById("jspdf");
          html2canvas(check, {}).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const height = (canvas.height * 210) / canvas.width;

            const pdf = new jspdf("p", "mm", "a4");
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
