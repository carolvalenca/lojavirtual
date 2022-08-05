import Link from 'next/link';

export default function Button({ type, label, path = '/' }) {
  return (
    <Link href={path}>
      <button
        style={{
          backgroundColor: type === 1 ? '#3CBDAF' : 'white',
          border: '2px solid #3CBDAF',
          color: type === 1 ? 'white' : '#3CBDAF',
          padding: '1rem 1rem',
          fontWeight: 'bold',
          marginTop: '1rem',
          borderRadius: '0.2rem',
        }}
      >
        {label}
      </button>
    </Link>
  );
}
