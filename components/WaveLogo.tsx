type Props = {
  className?: string;
  color?: string;
};

export default function WaveLogo({ className, color = "#2d4a3e" }: Props) {
  return (
    <svg
      width="30"
      height="18"
      viewBox="-1 -1 32 20"
      fill="none"
      stroke={color}
      strokeWidth={1.5}
      className={className}
      role="img"
      aria-label="Wavelength"
    >
      <circle cx="9" cy="9" r="9" />
      <circle cx="21" cy="9" r="9" />
    </svg>
  );
}
