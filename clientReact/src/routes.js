import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Alunos from "./pages/Alunos";
import NovoAluno from "./pages/NovoAluno";

export default function WebRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/alunos" element={<Alunos />} />
        <Route path="/aluno/novo/:alunoId" element={<NovoAluno />} />
      </Routes>
    </BrowserRouter>
  );
}
