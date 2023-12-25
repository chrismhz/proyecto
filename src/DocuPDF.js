import React from "react";
import { Document, Page, Text, View, Image, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFF",
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    textAlign: "center",
    flexDirection: "column", // Añade flexDirection: "column"
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#3388af", // Color azul
  },
  subtitle: {
    fontSize: "18px",
    marginBottom: "10px",
    color: "#3388af", // Color azul
  },
  image: {
    maxWidth: "100%",
    maxHeight: "200px",
    marginBottom: "10px",
  },
  text: {
    fontSize: "12px",
    marginBottom: "5px",
    textAlign: "left",
  },
});

const DocuPDF = ({ datosPaciente }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>HISTORIAL MÉDICO</Text>
          <Text style={styles.text}>Fecha: {new Date().toLocaleDateString()}</Text>
          <Image
            src={datosPaciente ? datosPaciente.fotoUrl : "https://picsum.photos/600/400"}
            alt="foto del paciente"
            style={styles.image}
          />
          <Text style={styles.title}>{datosPaciente ? datosPaciente.nombre : ""}</Text>
          <Text style={styles.subtitle}>Información del Paciente</Text>
          <Text style={styles.text}>Nombre: {datosPaciente ? datosPaciente.nombre : "N/A"}</Text>
          <Text style={styles.text}>Edad: {datosPaciente ? datosPaciente.edad : "N/A"}</Text>
          <Text style={styles.text}>Peso: {datosPaciente ? datosPaciente.peso : "N/A"}</Text>
          <Text style={styles.text}>Tipo de Sangre: {datosPaciente ? datosPaciente.tipoSangre : "N/A"}</Text>
          <Text style={styles.text}>Altura: {datosPaciente ? datosPaciente.altura : "N/A"}</Text>
          <Text style={styles.text}>Número de Celular: {datosPaciente ? datosPaciente.numeroCelular : "N/A"}</Text>
          <Text style={styles.text}>Correo Electrónico: {datosPaciente ? datosPaciente.correoElectronico : "N/A"}</Text>
          <Text style={styles.subtitle}>Detalles del Examen Visual</Text>
          <Text style={styles.text}>Enfermedad Ocular: {datosPaciente ? datosPaciente.enfermedad : "N/A"}</Text>
          <Text style={styles.text}>Diagnóstico: {datosPaciente ? datosPaciente.diagnostico : "N/A"}</Text>
          <Text style={styles.text}>Prescripción Óptica: {datosPaciente ? datosPaciente.prescripcion : "N/A"}</Text>
          <Text style={styles.text}>Observaciones: {datosPaciente ? datosPaciente.observaciones : "N/A"}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default DocuPDF;
