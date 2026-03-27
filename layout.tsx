export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body style={{ fontFamily: "Arial", padding: "20px" }}>
        <h2>Sistema de Custo Patrimonial - Alagoinhas</h2>
        {children}
      </body>
    </html>
  );
}
