interface IconProps {
  className?: string;
  size?: number;
  color?: string;
  accentColor?: string;
}

// 01 ケータリング - フードドーム（クローシュ）の線画
export function CateringIcon({
  className = "",
  size = 56,
  color = "#262628",
  accentColor = "#EFA00B",
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block transition-transform duration-300 ${className}`}
      aria-hidden="true"
    >
      <circle cx="32" cy="18" r="4" fill={accentColor} stroke={color} strokeWidth="2" />
      <path d="M32 22V24" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path
        d="M14 42C14 28 22 24 32 24C42 24 50 28 50 42"
        stroke={color}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <rect x="10" y="42" width="44" height="5" rx="2.5" stroke={color} strokeWidth="2.4" fill="none" />
      <path d="M24 33C26 31 28 31 30 33" stroke={accentColor} strokeWidth="1.6" strokeLinecap="round" opacity="0.85" />
      <path d="M34 33C36 31 38 31 40 33" stroke={accentColor} strokeWidth="1.6" strokeLinecap="round" opacity="0.85" />
    </svg>
  );
}

// 02 商品開発・製造 - ボウル + ホイッパーの線画
export function ProductDevIcon({
  className = "",
  size = 56,
  color = "#262628",
  accentColor = "#EFA00B",
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block transition-transform duration-300 ${className}`}
      aria-hidden="true"
    >
      <path
        d="M16 32C16 43 23.16 48 32 48C40.84 48 48 43 48 32H16Z"
        stroke={color}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M14 32H50" stroke={color} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M34 26L48 14" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
      <path d="M26 36C27 30 32 26 36 24C34 28 32 35 28 39" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M29 37C31 32 35 28 38 27C37 31 34 37 31 40" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="51" cy="18" r="1.5" fill={accentColor} />
      <circle cx="47" cy="24" r="1.2" fill={accentColor} />
      <circle cx="21" cy="24" r="1.5" fill={accentColor} />
    </svg>
  );
}

// 03 事業開発・支援 - 3つの円がつながる「人と人」の線画
export function BusinessDevIcon({
  className = "",
  size = 56,
  color = "#262628",
  accentColor = "#EFA00B",
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block transition-transform duration-300 ${className}`}
      aria-hidden="true"
    >
      <path d="M32 23L22 41" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M32 23L42 41" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M25 43C29 45.5 35 45.5 39 43" stroke={accentColor} strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="32" cy="19" r="4.5" stroke={color} strokeWidth="2.4" fill="#FCFCFA" />
      <circle cx="20" cy="43" r="4.5" stroke={color} strokeWidth="2.4" fill="#FCFCFA" />
      <circle cx="44" cy="43" r="4.5" stroke={color} strokeWidth="2.4" fill="#FCFCFA" />
      <circle cx="32" cy="33" r="1.5" fill={accentColor} />
    </svg>
  );
}
