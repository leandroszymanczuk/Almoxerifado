import express from "express";

import ferramentaRoutes from "./routes/ferramentaRoutes.js";
import colaboradorRoutes from "./routes/ColaboradorRoutes.js";

const app = express();

app.use(express.json());

app.use("/ferramenta", ferramentaRoutes);
app.use("/colaborador", colaboradorRoutes);

app.listen(3001, () => {
    console.log("Servidor rodando em http://localhost:3001");
});