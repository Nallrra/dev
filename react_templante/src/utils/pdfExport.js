// src/utils/pdfExport.js
import jsPDF from 'jspdf';

const exportToPDF = (content) => {
  const doc = new jsPDF();
  doc.text(content, 10, 10);
  doc.save('study-content.pdf');
};

export default exportToPDF;