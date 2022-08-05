import styles from './SizeButton.module.css';

export default function SizeButton({ label, selectedSize, setSelectedSize }) {
  return (
    <button
      className={`${styles.sizeButton} ${selectedSize && styles.sizeSelected}`}
      onClick={setSelectedSize}
    >
      {label}
    </button>
  );
}
