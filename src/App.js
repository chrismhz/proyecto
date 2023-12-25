import React, { useState } from "react";
import { Button } from "react-bootstrap";
import VistaWeb from "./VistaWeb";
import DocuPDF from "./DocuPDF";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";

function App() {
  const [verWeb, setVerWeb] = useState(false);
  const [verPdf, setVerPdf] = useState(false);

  const [datosPaciente, setDatosPaciente] = useState({
    nombre: "Leanne",
    enfermedad: "Enfermedad Detectada",
    diagnostico: "Descripción del Diagnóstico",
    edad: "21",
    peso: "60 kg",
    tipoSangre: "a+",
    altura: "170 cm",
    numeroCelular:"+52-5528517627",
    correoElectronico:"leane2425mh@hotmail.com",
    fotoUrl: "https://picsum.photos/600/400", // URL de la foto del paciente
  });

  const BarraSuperior = () => {
    return (
      <div
        style={{
          backgroundColor: "#4D82BC",
          color: "white",
          padding: "30px",
          textAlign: "center",
          fontSize: "30px",
          fontWeight: "bold"
        }}
      >
        <header>
          <img src="/logotipo.png" width="200px" alt="IAOpti-x"></img>
        </header>
      </div>
    );
  };

  const Menu = () => {
    return (
      <nav
        style={{
          display: "flex",
          borderBottom: "2px solid #4D82BC",
          paddingBottom: "30px",
          justifyContent: "space-around",
          backgroundColor: "#4D82BC"
        }}>

          <Button style={{ backgroundColor: "#FFFFFF", color: "white", padding: "10px", borderRadius: "45%", cursor: "pointer", float: "left" ,marginRight: "200px" }}
          variant="secondary"
          onClick={() => {
            setVerWeb(false);
            setVerPdf(false);
          }}>
          <img src="/inicio.png" width="30px" alt="IAOpti-X"></img>
        </Button>

        <Button style={{marginRight:"200px"}}
          variant="info"
          onClick={() => {
            setVerWeb(!verWeb);
            setVerPdf(false);
          }}>
          {verWeb ? "Ocultar Resultados" : "Ver Resultados"}
        </Button>

        <Button style={{marginLeft:"50px"}}
          variant="info"
          onClick={() => {
            setVerWeb(false);
            setVerPdf(!verPdf);
          }}>
          {verPdf ? "Imprimir PDF" : "Imprimir PDF"}
        </Button>

        <PDFDownloadLink style={{marginLeft:"200px"}}
          document={<DocuPDF datosPaciente={datosPaciente} />}
          fileName="ResultadosVista.pdf">
            <Button variant="danger">Descargar PDF</Button>
        </PDFDownloadLink>

        
      </nav>
    );
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <BarraSuperior />
      <Menu />
      {verWeb ? <VistaWeb datosPaciente={datosPaciente} /> : null}
      {verPdf ? (
        <PDFViewer style={{ width: "100%", height: "90vh" }}>
          <DocuPDF datosPaciente={datosPaciente} />
        </PDFViewer>
      ) : null}
    </div>
  );
}

export default App;
