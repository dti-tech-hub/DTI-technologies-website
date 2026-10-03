import dittoImage from '../assets/Ditto.jpeg';

export default function DittoAvatar({ size = 40, className = '' }) {
  return (
    <img
      src={dittoImage}
      width={size}
      height={size}
      alt="Ditto, DTI Technologies AI assistant"
      className={className}
      style={{ borderRadius: '50%', objectFit: 'cover', display: 'block' }}
      draggable={false}
    />
  );
}
