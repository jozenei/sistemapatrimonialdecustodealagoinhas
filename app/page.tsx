export default function HomePage() {
  const contratos = [
    {
      numero: "309-2025",
      secretaria: "SEDUC",
      objeto: "Transporte escolar emergencial",
      categoria: "Serviços",
      nbc: "NBC TSP 34",
      valor: 2471024,
      risco: "Alto",
      status: "Em revisão",
    },
    {
      numero: "013-2026",
      secretaria: "SEOP",
      objeto: "Aquisição de computadores desktop",
      categoria: "Imobilizado",
      nbc: "NBC TSP 07",
      valor: 59985,
      risco: "Baixo",
      status: "Classificado",
    },
    {
      numero: "005-2024",
      secretaria: "SEDUC",
      objeto: "Gêneros alimentícios para merenda escolar",
      categoria: "Estoques",
      nbc: "NBC TSP 04",
      valor: 1559997,
      risco: "Alto",
      status: "Classificado",
    },
    {
      numero: "003-2024",
      secretaria: "PGM",
      objeto: "Licença de uso mensal de sistema judicial",
      categoria: "Tecnologia",
      nbc: "NBC TSP 08",
      valor: 155084,
      risco: "Alto",
      status: "Em revisão",
    },
    {
      numero: "226-2024",
      secretaria: "SESAU",
      objeto: "Licença SaaS para vigilância em saúde",
      categoria: "Tecnologia",
      nbc: "NBC TSP 08",
      valor: 2395000,
      risco: "Alto",
      status: "Em revisão",
    },
    {
      numero: "219-2023",
      secretaria: "SEMAS",
      objeto: "Locação de imóvel para garagem e almoxarifado",
      categoria: "Uso de bens de terceiros",
      nbc: "Estrutura Conceitual",
      valor: 48000,
      risco: "Médio",
      status: "Classificado",
    },
    {
      numero: "333-2022",
      secretaria: "SESAU",
      objeto: "Manutenção predial com fornecimento de materiais",
      categoria: "Serviços",
      nbc: "NBC TSP 34",
      valor: 2980805,
      risco: "Alto",
      status: "Em revisão",
    },
    {
      numero: "342-2022",
      secretaria: "SESAU",
      objeto: "Credenciamento para controle populacional animal",
      categoria: "Serviços",
      nbc: "NBC TSP 34",
      valor: 159109,
      risco: "Alto",
      status: "Em revisão",
    },
    {
      numero: "225-2019",
      secretaria: "SEFAZ",
      objeto: "Licenciamento de software de administração tributária",
      categoria: "Tecnologia",
      nbc: "NBC TSP 08",
      valor: 439900,
      risco: "Alto",
      status: "Em revisão",
    },
    {
      numero: "512-2025",
      secretaria: "SEFAZ",
      objeto: "Arrecadação de tributos via FEBRABAN e PIX",
      categoria: "Serviços financeiros",
      nbc: "NBC TSP 30 a 33",
      valor: 158940,
      risco: "Médio",
      status: "Classificado",
    },
  ];

  const totalContratos = contratos.length;
  const totalValor = contratos.reduce((s, c) => s + c.valor, 0);
  const classificados = contratos.filter((c) => c.status === "Classificado").length;
  const emRevisao = contratos.filter((c) => c.status === "Em revisão").length;
  const altoRisco = contratos.filter((c) => c.risco === "Alto").length;

  const categorias = [
    {
      nome: "Serviços",
      valor: contratos.filter((c) => c.categoria === "Serviços").reduce((s, c) => s + c.valor, 0),
      cor: "#1d4ed8",
    },
    {
      nome: "Imobilizado",
      valor: contratos.filter((c) => c.categoria === "Imobilizado").reduce((s, c) => s + c.valor, 0),
      cor: "#0f766e",
    },
    {
      nome: "Estoques",
      valor: contratos.filter((c) => c.categoria === "Estoques").reduce((s, c) => s + c.valor, 0),
      cor: "#b45309",
    },
    {
      nome: "Tecnologia",
      valor: contratos.filter((c) => c.categoria === "Tecnologia").reduce((s, c) => s + c.valor, 0),
      cor: "#7c3aed",
    },
    {
      nome: "Outros",
      valor: contratos
        .filter(
          (c) =>
            c.categoria !== "Serviços" &&
            c.categoria !== "Imobilizado" &&
            c.categoria !== "Estoques" &&
            c.categoria !== "Tecnologia"
        )
        .reduce((s, c) => s + c.valor, 0),
      cor: "#475569",
    },
  ];

  const secretarias = [
    {
      nome: "SEDUC",
      valor: contratos.filter((c) => c.secretaria === "SEDUC").reduce((s, c) => s + c.valor, 0),
    },
    {
      nome: "SESAU",
      valor: contratos.filter((c) => c.secretaria === "SESAU").reduce((s, c) => s + c.valor, 0),
    },
    {
      nome: "SEFAZ",
      valor: contratos.filter((c) => c.secretaria === "SEFAZ").reduce((s, c) => s + c.valor, 0),
    },
    {
      nome: "SEOP",
      valor: contratos.filter((c) => c.secretaria === "SEOP").reduce((s, c) => s + c.valor, 0),
    },
    {
      nome: "SEMAS",
      valor: contratos.filter((c) => c.secretaria === "SEMAS").reduce((s, c) => s + c.valor, 0),
    },
    {
      nome: "PGM",
      valor: contratos.filter((c) => c.secretaria === "PGM").reduce((s, c) => s + c.valor, 0),
    },
  ];

  function moeda(valor: number) {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0,
    });
  }

  function badgeRisco(risco: string) {
    if (risco === "Alto") return { bg: "#fee2e2", color: "#b91c1c" };
    if (risco === "Médio") return { bg: "#fef3c7", color: "#b45309" };
    return { bg: "#dcfce7", color: "#15803d" };
  }

  function badgeStatus(status: string) {
    if (status === "Classificado") return { bg: "#dcfce7", color: "#15803d" };
    return { bg: "#fef3c7", color: "#b45309" };
  }

  const maiorCategoria = Math.max(...categorias.map((c) => c.valor), 1);
  const maiorSecretaria = Math.max(...secretarias.map((s) => s.valor), 1);

  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        margin: 0,
        background: "#f8fafc",
        color: "#0f172a",
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          background: "#0f172a",
          color: "white",
          padding: "16px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <div>
          <div style={{ fontSize: 14, opacity: 0.85 }}>Prefeitura de Alagoinhas</div>
          <div style={{ fontSize: 30, fontWeight: 700 }}>Sistema de Informação de Custos</div>
          <div style={{ fontSize: 14, opacity: 0.85 }}>
            Base patrimonial • NBC TSP • Visual demonstrativo
          </div>
        </div>

        <nav style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href="#dashboard" style={linkTopo}>Dashboard</a>
          <a href="#contratos" style={linkTopo}>Contratos</a>
          <a href="#graficos" style={linkTopo}>Gráficos</a>
          <a href="#analise" style={linkTopo}>Análise</a>
        </nav>
      </header>

      <section
        style={{
          background: "linear-gradient(135deg, #e0f2fe 0%, #f8fafc 100%)",
          padding: "32px 24px",
          borderBottom: "1px solid #cbd5e1",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h1 style={{ fontSize: 40, margin: "0 0 12px 0" }}>
            Painel de Custo Patrimonial de Alagoinhas
          </h1>
          <p style={{ margin: 0, fontSize: 18, color: "#334155", lineHeight: 1.5 }}>
            Sistema web para leitura e classificação patrimonial de contratos, com foco em
            reconhecimento contábil, apropriação de custos e apoio à transparência.
          </p>
        </div>
      </section>

      <section id="dashboard" style={secao}>
        <div style={gridCards}>
          <CardTitulo titulo="Total de contratos" valor={String(totalContratos)} subtitulo="Base simulada" />
          <CardTitulo titulo="Classificados" valor={String(classificados)} subtitulo="Prontos para uso" />
          <CardTitulo titulo="Em revisão" valor={String(emRevisao)} subtitulo="Dependem de análise" />
          <CardTitulo titulo="Alto risco" valor={String(altoRisco)} subtitulo="Exigem atenção contábil" />
          <CardTitulo titulo="Valor total" valor={moeda(totalValor)} subtitulo="Montante dos contratos" />
        </div>
      </section>

      <section id="graficos" style={secao}>
        <div style={grid2}>
          <div style={cardGrande}>
            <h2 style={tituloBloco}>Valor por categoria patrimonial</h2>
            <div style={{ marginTop: 20 }}>
              {categorias.map((c) => (
                <div key={c.nome} style={{ marginBottom: 18 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <span style={{ fontWeight: 600 }}>{c.nome}</span>
                    <span>{moeda(c.valor)}</span>
                  </div>
                  <div style={{ background: "#e2e8f0", borderRadius: 999, height: 18, overflow: "hidden" }}>
                    <div
                      style={{
                        width: `${(c.valor / maiorCategoria) * 100}%`,
                        background: c.cor,
                        height: "100%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={cardGrande}>
            <h2 style={tituloBloco}>Valor por secretaria</h2>
            <svg viewBox="0 0 500 300" style={{ width: "100%", height: 320, background: "#fff" }}>
              {secretarias.map((s, i) => {
                const h = (s.valor / maiorSecretaria) * 180;
                const x = 40 + i * 75;
                const y = 240 - h;
                return (
                  <g key={s.nome}>
                    <rect x={x} y={y} width="42" height={h} fill="#2563eb" rx="6" />
                    <text x={x + 21} y="265" textAnchor="middle" fontSize="12" fill="#334155">
                      {s.nome}
                    </text>
                    <text x={x + 21} y={y - 8} textAnchor="middle" fontSize="10" fill="#0f172a">
                      {Math.round(s.valor / 1000)}k
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      </section>

      <section id="contratos" style={secao}>
        <div style={cardGrande}>
          <h2 style={tituloBloco}>10 contratos simulados com base real de Alagoinhas</h2>

          <div style={{ overflowX: "auto", marginTop: 16 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 980 }}>
              <thead>
                <tr style={{ background: "#e2e8f0", textAlign: "left" }}>
                  <th style={th}>Contrato</th>
                  <th style={th}>Secretaria</th>
                  <th style={th}>Objeto</th>
                  <th style={th}>Categoria</th>
                  <th style={th}>NBC TSP</th>
                  <th style={th}>Valor</th>
                  <th style={th}>Risco</th>
                  <th style={th}>Status</th>
                </tr>
              </thead>
              <tbody>
                {contratos.map((c, i) => {
                  const risco = badgeRisco(c.risco);
                  const status = badgeStatus(c.status);
                  return (
                    <tr key={c.numero} style={{ background: i % 2 === 0 ? "#ffffff" : "#f8fafc" }}>
                      <td style={td}>{c.numero}</td>
                      <td style={td}>{c.secretaria}</td>
                      <td style={td}>{c.objeto}</td>
                      <td style={td}>{c.categoria}</td>
                      <td style={td}>{c.nbc}</td>
                      <td style={td}>{moeda(c.valor)}</td>
                      <td style={td}>
                        <span style={{ ...badgeBase, background: risco.bg, color: risco.color }}>{c.risco}</span>
                      </td>
                      <td style={td}>
                        <span style={{ ...badgeBase, background: status.bg, color: status.color }}>{c.status}</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="analise" style={secao}>
        <div style={grid2}>
          <div style={cardGrande}>
            <h2 style={tituloBloco}>Exemplo de análise do sistema</h2>
            <div style={{ lineHeight: 1.7 }}>
              <p><strong>Contrato:</strong> 013-2026</p>
              <p><strong>Objeto:</strong> Aquisição de computadores desktop para diretoria de projetos.</p>
              <p><strong>Leitura automática:</strong> detectou “aquisição” + “computadores”.</p>
              <p><strong>Classificação sugerida:</strong> Imobilizado</p>
              <p><strong>NBC TSP:</strong> NBC TSP 07</p>
              <p><strong>Reconhecimento:</strong> Ativo não circulante</p>
              <p><strong>Apropriação:</strong> Depreciação</p>
              <p><strong>Risco:</strong> Baixo</p>
            </div>
          </div>

          <div style={cardGrande}>
            <h2 style={tituloBloco}>Objetivo institucional</h2>
            <p style={texto}>
              Este sistema busca consolidar, em base patrimonial e sob regime de competência, os
              gastos necessários à oferta dos serviços públicos municipais.
            </p>
            <p style={texto}>
              O foco é transformar contratos e despesas em informação útil para:
            </p>
            <ul style={{ lineHeight: 1.8, color: "#334155" }}>
              <li>contabilidade patrimonial</li>
              <li>controladoria</li>
              <li>transparência pública</li>
              <li>comparabilidade por secretaria</li>
              <li>futura apuração de custo público</li>
            </ul>
          </div>
        </div>
      </section>

      <footer
        style={{
          background: "#0f172a",
          color: "white",
          padding: "24px",
          marginTop: 40,
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", lineHeight: 1.8 }}>
          <div style={{ fontWeight: 700 }}>Prefeitura de Alagoinhas • Secretaria da Fazenda</div>
          <div>Contabilidade Geral • Sistema de Informação de Custos</div>
          <div style={{ opacity: 0.8 }}>Protótipo web demonstrativo construído para evolução institucional.</div>
        </div>
      </footer>
    </main>
  );
}

function CardTitulo({
  titulo,
  valor,
  subtitulo,
}: {
  titulo: string;
  valor: string;
  subtitulo: string;
}) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: 16,
        padding: 20,
        boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
        border: "1px solid #e2e8f0",
      }}
    >
      <div style={{ color: "#475569", fontSize: 14 }}>{titulo}</div>
      <div style={{ fontSize: 28, fontWeight: 700, marginTop: 8 }}>{valor}</div>
      <div style={{ color: "#64748b", fontSize: 13, marginTop: 8 }}>{subtitulo}</div>
    </div>
  );
}

const secao = {
  maxWidth: 1200,
  margin: "0 auto",
  padding: "24px",
};

const gridCards = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: 16,
};

const grid2 = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: 20,
};

const cardGrande = {
  background: "white",
  borderRadius: 18,
  padding: 24,
  boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
  border: "1px solid #e2e8f0",
};

const tituloBloco = {
  margin: 0,
  fontSize: 24,
  marginBottom: 10,
};

const texto = {
  color: "#334155",
  lineHeight: 1.8,
};

const th = {
  padding: "12px 10px",
  borderBottom: "1px solid #cbd5e1",
  fontSize: 14,
};

const td = {
  padding: "12px 10px",
  borderBottom: "1px solid #e2e8f0",
  fontSize: 14,
  verticalAlign: "top" as const,
};

const badgeBase = {
  display: "inline-block",
  padding: "6px 10px",
  borderRadius: 999,
  fontSize: 12,
  fontWeight: 700,
};

const linkTopo = {
  color: "white",
  textDecoration: "none",
  fontSize: 14,
  fontWeight: 600,
};
