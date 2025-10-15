// src/app/work/page.js
export default function OurWorkPage() {
  const containerStyle = { 
    maxWidth: '1280px', 
    margin: '0 auto', 
    padding: '3rem 1rem', 
    textAlign: 'center', 
    minHeight: '50vh' 
  };
  
  return (
    <div style={containerStyle}>
      <h1 style={{ fontSize: '2.25rem', fontWeight: '700', color: '#4B0082' }}>Our Work</h1>
      <p style={{ marginTop: '1rem', fontSize: '1.25rem', color: '#4a5568' }}>This page is under construction. Check back soon!</p>
    </div>
  );
}