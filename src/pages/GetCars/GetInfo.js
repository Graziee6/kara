import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";

import "./GetInfo.css";

export default function GetInfo() {
  const tableData = useRef(null);
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    fetch("http://localhost:4340/getAllCars", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
          tableData.current = data;
          console.log("tableData.current\n", tableData.current)
      });
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Car's plate number</th>
          <th>Manufacture Company</th>
          <th>Car model</th>
          <th>Car price</th>
          <th>Year</th>
          <th>Owner's phone number</th>
        </tr>
      </thead>
      <tbody>
        {console.log("tableData.current\n", tableData.current)}
        {tableData.current.data.map((tr, i) => (
          <tr key={i}>
            <td style={{ color: "#66023e", fontWeight: 700 }}>{i + 1}</td>
            <td>{tr.plateNum}</td>
            <td>{tr.company}</td>
            <td>{tr.model}</td>
            <td>{tr.price}</td>
            <td>{tr.year}</td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
