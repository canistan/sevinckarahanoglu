export default function Home() {
  return (
    <main style={{ 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center", 
      minHeight: "100vh",
      flexDirection: "column",
      gap: "var(--space-4)",
      fontFamily: "var(--font-family)",
    }}>
      <h1 style={{ 
        color: "var(--color-primary)", 
        fontSize: "var(--font-size-4xl)",
        fontWeight: 600,
      }}>
        Dt. Sevinç Karahanoğlu
      </h1>
      <p style={{ 
        color: "var(--color-gray-500)", 
        fontSize: "var(--font-size-lg)",
        textAlign: "center",
      }}>
        Site yapım aşamasındadır.
      </p>
    </main>
  );
}
