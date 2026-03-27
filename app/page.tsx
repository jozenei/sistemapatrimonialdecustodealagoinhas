export default function HomePage() {
  const contratos = [
    { numero: "309-2025", secretaria: "SEDUC", valor: 2471024, risco: "Alto" },
    { numero: "013-2026", secretaria: "SEOP", valor: 59985, risco: "Baixo" },
    { numero: "005-2024", secretaria: "SEDUC", valor: 155997, risco: "Alto" },
    { numero: "003-2024", secretaria: "PGM", valor: 15504, risco: "Médio" },
  ];

  const total = contratos.reduce((acc, c) => acc + c.valor, 0);

  return (
    <div style={{ fontFamily: "Arial", padding: "20px", background: "#f5f7fa" }}>
      
      {/* HEADER */}
      <div style={{ background: "#0f172a", color: "white", padding: "20px", borderRadius: "10px" }}>
        <h1>Sistema de Custos - Alagoinhas</h1>
        <p>Controle estratégico de custos públicos</p>
      </div>

      {/* CARDS */}
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        
        <div style={card}>
          <h3>Total de Contratos</h3>
          <h2>{contratos.length}</h2>
        </div>

        <div style={card}>
          <h3>Custo Total</h3>
          <h2>R$ {total.toLocaleString()}</h2>
        </div>

        <div style={card}>
          <h3>Risco Alto</h3>
          <h2>{contratos.filter(c => c.risco === "Alto").length}</h2>
        </div>

      </div>

      {/* TABELA */}
      <div style={{ marginTop: "30px", background: "white", padding: "20px", borderRadius: "10px" }}>
        <h2>Contratos</h2>

        <table width="100%" style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#1e293b", color: "white" }}>
              <th style={th}>Número</th>
              <th style={th}>Secretaria</th>
              <th style={th}>Valor</th>
              <th style={th}>Risco</th>
            </tr>
          </thead>

          <tbody>
            {contratos.map((c, i) => (
              <tr key={i} style={{ background: i % 2 ? "#f1f5f9" : "white" }}>
                <td style={td}>{c.numero}</td>
                <td style={td}>{c.secretaria}</td>
                <td style={td}>R$ {c.valor.toLocaleString()}</td>
                <td style={td}>
                  <span style={{
                    padding: "5px 10px",
                    borderRadius: "5px",
                    color: "white",
                    background:
                      c.risco === "Alto" ? "red" :
                      c.risco === "Médio" ? "orange" : "green"
                  }}>
                    {c.risco}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

const card = {
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  flex: 1,
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
};

const th = {
  padding: "10px",
  textAlign: "left"
};

const td = {
  padding: "10px",
  borderBottom: "1px solid #ddd"
};
