import html2pdf from "html2pdf.js";

export function exportResumePdf(filename = "Resume.pdf") {
  const element = document.getElementById("resume-preview");

  if (!element) return;

  html2pdf()
    .set({
      margin: 0,
      filename,
      image: { type: "jpeg", quality: 1 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        logging: false,
      },
      jsPDF: {
        unit: "px",
        format: [794, 1123],
        orientation: "portrait",
      },
    })
    .from(element)
    .save();
}
