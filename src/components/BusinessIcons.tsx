"use client";

import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
  color?: string;
  accentColor?: string;
}

/**
 * 01 ケータリング (Catering)
 * 洗練された銀器のクローシュ（フードドーム）とエレガントなディッシュプレート、
 * 立ち上る温かなアロマ・湯気の繊細なラインアート。
 */
export const CateringIcon: React.FC<IconProps> = ({
  className = '',
  size = 96,
  color = '#1A1A1C',
  accentColor = '#EFA00B',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block transition-transform duration-300 ${className}`}
      style={{ shapeRendering: 'geometricPrecision' }}
    >
      <defs>
        <linearGradient id="goldGradCatering" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F5B738" />
          <stop offset="100%" stopColor="#D98A00" />
        </linearGradient>
      </defs>

      {/* Top Handle Knob - Precision Gold Finish */}
      <circle
        cx="60"
        cy="34"
        r="6.5"
        fill="url(#goldGradCatering)"
        stroke={color}
        strokeWidth="2"
      />
      <circle cx="60" cy="34" r="2.5" fill="#FAF9F5" />
      <path
        d="M60 40.5V45"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Knob Base Collar */}
      <path
        d="M55 45H65"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Main Cloche Dome - Smooth Editorial Contour */}
      <path
        d="M26 78C26 53 41 45 60 45C79 45 94 53 94 78"
        stroke={color}
        strokeWidth="2.8"
        strokeLinecap="round"
      />

      {/* Dome Highlight Arch (Delicate Double Line for Premium Depth) */}
      <path
        d="M33 74C35 57 46 50 60 50"
        stroke={accentColor}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeDasharray="1 3"
        opacity="0.8"
      />

      {/* Cloche Rim / Lower Accent Line */}
      <path
        d="M22 78H98"
        stroke={color}
        strokeWidth="2.8"
        strokeLinecap="round"
      />

      {/* Serving Platter / Tray with Double Rim */}
      <path
        d="M16 84C20 84 25 84 32 84H88C95 84 100 84 104 84"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Tray Pedestal Base */}
      <path
        d="M34 85L38 90H82L86 85"
        stroke={color}
        strokeWidth="2.2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* Floating Warm Aroma / Steam Curves */}
      <path
        d="M48 27C46 22 50 17 48 12"
        stroke={accentColor}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M60 25C58 19 63 15 61 9"
        stroke={accentColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M72 27C74 22 70 17 72 12"
        stroke={accentColor}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.9"
      />

      {/* Subtle Culinary Sparkle Accents */}
      <circle cx="36" cy="38" r="1.5" fill={accentColor} />
      <circle cx="84" cy="38" r="1.5" fill={accentColor} />
    </svg>
  );
};

/**
 * 02 商品開発・製造 (Product Development)
 * 洗練されたパティスリー/キッチンのミキシングボウルと繊細なホイッパー（泡立て器）、
 * レシピと素材が生み出す創造のスパーク。
 */
export const ProductDevIcon: React.FC<IconProps> = ({
  className = '',
  size = 96,
  color = '#1A1A1C',
  accentColor = '#EFA00B',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block transition-transform duration-300 ${className}`}
      style={{ shapeRendering: 'geometricPrecision' }}
    >
      <defs>
        <linearGradient id="goldGradProduct" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F5B738" />
          <stop offset="100%" stopColor="#D98A00" />
        </linearGradient>
      </defs>

      {/* Mixing Bowl Body */}
      <path
        d="M28 58C28 82 42 92 60 92C78 92 92 82 92 58H28Z"
        stroke={color}
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Bowl Rim Flange */}
      <path
        d="M22 58H98"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Bowl Interior Contour / Volume Accent Line */}
      <path
        d="M34 66C38 80 48 85 60 85"
        stroke={accentColor}
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.8"
      />

      {/* Bowl Ring Stand Base */}
      <path
        d="M45 92C45 94.5 51.5 96 60 96C68.5 96 75 94.5 75 92"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* Whisk Handle in Crafted Gold Gradient */}
      <path
        d="M66 48L90 22"
        stroke="url(#goldGradProduct)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="92" cy="20" r="3.5" fill="url(#goldGradProduct)" stroke={color} strokeWidth="1.8" />
      <path
        d="M63 51L69 45"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Whisk Loops (Fine Culinary Balloon Wire Details) */}
      <path
        d="M51 68C53 56 62 48 70 44C66 53 62 65 55 72"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M56 70C60 60 67 52 74 50C71 58 66 68 60 74"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M47 64C48 57 54 50 61 47"
        stroke={accentColor}
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Creation & Ingredient Essence Sparks in Gold */}
      <path
        d="M32 38L34 31L41 33L35 37L38 43L33 39L27 42L30 36L25 32L32 32L32 38Z"
        fill="none"
      />
      {/* 4-point Diamond Sparks */}
      <g transform="translate(32, 28) scale(0.9)">
        <path d="M0 -8L2 -2L8 0L2 2L0 8L-2 2L-8 0L-2 -2Z" fill={accentColor} />
      </g>
      <g transform="translate(96, 42) scale(0.65)">
        <path d="M0 -8L2 -2L8 0L2 2L0 8L-2 2L-8 0L-2 -2Z" fill={accentColor} />
      </g>
      <circle cx="24" cy="46" r="2" fill={accentColor} />
      <circle cx="44" cy="22" r="1.5" fill={accentColor} />
    </svg>
  );
};

/**
 * 03 事業開発・支援 (Business Development & Co-Creation)
 * 「ひとのわ（人の輪）」を体現する、人と人、企業と食をつなぐ
 * 3つのノードと循環する美しいオービットリングの幾何学アート。
 */
export const BusinessDevIcon: React.FC<IconProps> = ({
  className = '',
  size = 96,
  color = '#1A1A1C',
  accentColor = '#EFA00B',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block transition-transform duration-300 ${className}`}
      style={{ shapeRendering: 'geometricPrecision' }}
    >
      <defs>
        <linearGradient id="goldGradBiz" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F5B738" />
          <stop offset="100%" stopColor="#D98A00" />
        </linearGradient>
      </defs>

      {/* Flowing Organic Orbit Ring connecting all 3 nodes (The Ring of Hitonowa) */}
      <path
        d="M60 30 C80 30, 95 50, 85 75 C75 95, 45 95, 35 75 C25 50, 40 30, 60 30"
        stroke={accentColor}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeDasharray="4 3"
        opacity="0.85"
      />

      {/* Structural Network Connection Lines */}
      <line x1="60" y1="36" x2="38" y2="76" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <line x1="60" y1="36" x2="82" y2="76" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <line x1="38" y1="76" x2="82" y2="76" stroke={color} strokeWidth="2.2" strokeLinecap="round" />

      {/* Center Synergy Ring (Shared Value) */}
      <circle
        cx="60"
        cy="63"
        r="7.5"
        stroke={accentColor}
        strokeWidth="2.2"
        fill="#FAF9F5"
      />
      <circle cx="60" cy="63" r="3" fill="url(#goldGradBiz)" />

      {/* Node 1: Top Person / Business Leader */}
      <circle
        cx="60"
        cy="32"
        r="9"
        fill="#FAF9F5"
        stroke={color}
        strokeWidth="2.8"
      />
      <circle cx="60" cy="32" r="4.5" fill="url(#goldGradBiz)" />

      {/* Node 2: Bottom-Left Partner / Community */}
      <circle
        cx="34"
        cy="78"
        r="9"
        fill="#FAF9F5"
        stroke={color}
        strokeWidth="2.8"
      />
      <circle cx="34" cy="78" r="4.5" fill="url(#goldGradBiz)" />

      {/* Node 3: Bottom-Right Creator / Kitchen & Society */}
      <circle
        cx="86"
        cy="78"
        r="9"
        fill="#FAF9F5"
        stroke={color}
        strokeWidth="2.8"
      />
      <circle cx="86" cy="78" r="4.5" fill="url(#goldGradBiz)" />

      {/* Dynamic Connection Orbits / Subtle Synergy Sparks */}
      <g transform="translate(60, 14) scale(0.7)">
        <path d="M0 -8L2 -2L8 0L2 2L0 8L-2 2L-8 0L-2 -2Z" fill={accentColor} />
      </g>
      <circle cx="22" cy="60" r="1.8" fill={accentColor} opacity="0.8" />
      <circle cx="98" cy="60" r="1.8" fill={accentColor} opacity="0.8" />
    </svg>
  );
};