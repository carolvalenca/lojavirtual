import Link from 'next/link';
import { CgArrowLongLeft } from 'react-icons/cg';

export default function BackButton() {
  return (
    <Link href='/'>
      <a style={{ display: 'flex', alignItems: 'center' }}>
        <CgArrowLongLeft size={30} />
        <span style={{ marginLeft: '1.5rem' }}>Voltar</span>
      </a>
    </Link>
  );
}
