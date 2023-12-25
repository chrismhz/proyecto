import React from "react";

const VistaWeb = ({ datosPaciente }) => {
  const lorem = "Resultados Totales del Paciente";
  console.log("Renderizando VistaWeb");
  console.log(datosPaciente);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <br/>
      <h1 style={{ color: "#3388af", fontSize: "40px", textAlign: "center" }}>
        HISTORIAL MÉDICO
      </h1>
      <br/>
      <img
        src={datosPaciente ? datosPaciente.fotoUrl : "https://picsum.photos/600/400"}
        alt="foto del paciente"
        style={{ maxWidth: "300px", maxHeight: "150px" }}
      />

      <p
        style={{
          color: "gray",
          fontStyle: "italic",
          fontSize: "14px",
          textAlign: "center",
          maxWidth: "400px",
          marginTop: "20px",
        }}
      >
        {lorem}
      </p>

      <div style={{ marginTop: "20px", textAlign: "left", maxWidth: "400px" }}>
        <div style={{ borderBottom: "2px solid #3388af", marginBottom: "20px", paddingBottom: "10px" }}>
          <p style={{ fontWeight: "bold",marginBottom: "15px", textAlign: "center", fontSize: "24px", color: "#3388af"}}>Informacion del Paciente</p>
          <p>
            <strong>Nombre:</strong>{" "}
            {datosPaciente ? datosPaciente.nombre : ""}
          </p>
          <p>
            <strong>Edad:</strong>{" "}
            {datosPaciente ? datosPaciente.edad : ""}
          </p>
          <p>
            <strong>Peso:</strong>{" "}
            {datosPaciente ? datosPaciente.peso : ""}
          </p>
          <p>
            <strong>Tipo de Sangre:</strong>{" "}
            {datosPaciente ? datosPaciente.tipoSangre : ""}
          </p>
          <p>
            <strong>Altura:</strong>{" "}
            {datosPaciente ? datosPaciente.altura : ""}
          </p>
          <p>
            <strong>Número de Celular:</strong>{" "}
            {datosPaciente ? datosPaciente.numeroCelular : ""}
          </p>
          <p>
            <strong>Correo Electrónico:</strong>{" "}
            {datosPaciente ? datosPaciente.correoElectronico : ""}
          </p>
        </div>

        <div>
          <p style={{ fontWeight: "bold", marginBottom: "15px", textAlign: "center", fontSize: "24px", color: "#3388af" }}>Detalles del Examen Visual</p>
          <p>
            <strong>Enfermedad Ocular:</strong>{" "}
            {datosPaciente ? datosPaciente.enfermedad : ""}
          </p>
          <p>
            <strong>Diagnóstico:</strong>{" "}
            {datosPaciente ? datosPaciente.diagnostico : ""}
          </p>
          <p>
            <strong>Prescripción Óptica:</strong>{" "}
            {datosPaciente ? datosPaciente.prescripcion : ""}
          </p>
          <p>
            <strong>Observaciones:</strong>{" "}
            {datosPaciente ? datosPaciente.observaciones : ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VistaWeb;
