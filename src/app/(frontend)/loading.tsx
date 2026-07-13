export default function Loading() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
      <div className="spinner"></div>
      <p style={{ marginTop: '1rem', color: 'var(--color-primary-dark)', fontSize: '1.2rem' }}>Yükleniyor...</p>
      <style dangerouslySetInnerHTML={{__html: `
        .spinner {
          width: 50px;
          height: 50px;
          border: 4px solid var(--color-primary-100);
          border-top: 4px solid var(--color-primary);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}} />
    </div>
  );
}
