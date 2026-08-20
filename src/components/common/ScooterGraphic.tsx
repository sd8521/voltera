import React from 'react';

interface ScooterGraphicProps {
  colorHex?: string;
  modelName?: string;
  badge?: string;
  className?: string;
  isDetailed?: boolean;
  showGlow?: boolean;
}

export const ScooterGraphic: React.FC<ScooterGraphicProps> = ({
  colorHex = '#58C91A',
  modelName = 'VoltEra PRIME 120',
  badge,
  className = 'w-full h-auto',
  showGlow = true
}) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Background Radial Glow */}
      {showGlow && (
        <div 
          className="absolute inset-0 rounded-full blur-3xl opacity-30 pointer-events-none transition-all duration-700"
          style={{ backgroundColor: colorHex }}
        />
      )}

      {/* High-Grade EV Scooter SVG */}
      <svg
        viewBox="0 0 800 500"
        className="w-full h-auto max-h-[460px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] filter transition-all duration-500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colorHex} stopOpacity="1" />
            <stop offset="60%" stopColor={colorHex} stopOpacity="0.85" />
            <stop offset="100%" stopColor="#0a0f0a" stopOpacity="0.95" />
          </linearGradient>

          <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8E9EAB" />
            <stop offset="50%" stopColor="#EEF2F3" />
            <stop offset="100%" stopColor="#374151" />
          </linearGradient>

          <linearGradient id="tyreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#222527" />
            <stop offset="50%" stopColor="#111315" />
            <stop offset="100%" stopColor="#090A0B" />
          </linearGradient>

          <linearGradient id="neonGreenGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#58C91A" />
            <stop offset="100%" stopColor="#99FF44" />
          </linearGradient>

          <filter id="electricGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="headlightBeam" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Floor Shadow */}
        <ellipse cx="400" cy="460" rx="340" ry="25" fill="#000000" fillOpacity="0.65" filter="blur(8px)" />
        <ellipse cx="400" cy="455" rx="260" ry="14" fill="#000000" fillOpacity="0.85" />

        {/* REAR WHEEL */}
        <g id="rear-wheel">
          {/* Tyre */}
          <circle cx="210" cy="380" r="76" fill="url(#tyreGrad)" stroke="#1F2937" strokeWidth="6" />
          <circle cx="210" cy="380" r="62" stroke="#374151" strokeWidth="3" strokeDasharray="6 4" />
          {/* Rim */}
          <circle cx="210" cy="380" r="48" fill="#18181B" stroke="url(#metalGrad)" strokeWidth="4" />
          {/* Disc Brake & Spokes */}
          <circle cx="210" cy="380" r="32" fill="#27272A" stroke="#71717A" strokeWidth="2" strokeDasharray="4 2" />
          <line x1="210" y1="332" x2="210" y2="428" stroke="url(#metalGrad)" strokeWidth="5" />
          <line x1="162" y1="380" x2="258" y2="380" stroke="url(#metalGrad)" strokeWidth="5" />
          <line x1="176" y1="346" x2="244" y2="414" stroke="url(#metalGrad)" strokeWidth="4" />
          <line x1="244" y1="346" x2="176" y2="414" stroke="url(#metalGrad)" strokeWidth="4" />
          {/* Center Hub */}
          <circle cx="210" cy="380" r="18" fill="#58C91A" stroke="#FFFFFF" strokeWidth="2" />
          <circle cx="210" cy="380" r="6" fill="#111111" />
        </g>

        {/* FRONT WHEEL */}
        <g id="front-wheel">
          {/* Tyre */}
          <circle cx="600" cy="380" r="76" fill="url(#tyreGrad)" stroke="#1F2937" strokeWidth="6" />
          <circle cx="600" cy="380" r="62" stroke="#374151" strokeWidth="3" strokeDasharray="6 4" />
          {/* Rim */}
          <circle cx="600" cy="380" r="48" fill="#18181B" stroke="url(#metalGrad)" strokeWidth="4" />
          {/* Front Disc Brake Rotor & Caliper */}
          <circle cx="600" cy="380" r="36" fill="#27272A" stroke="#E00000" strokeWidth="3" strokeDasharray="6 2" />
          <line x1="600" y1="332" x2="600" y2="428" stroke="url(#metalGrad)" strokeWidth="5" />
          <line x1="552" y1="380" x2="648" y2="380" stroke="url(#metalGrad)" strokeWidth="5" />
          <line x1="566" y1="346" x2="634" y2="414" stroke="url(#metalGrad)" strokeWidth="4" />
          <line x1="634" y1="346" x2="566" y2="414" stroke="url(#metalGrad)" strokeWidth="4" />
          {/* Disc Caliper Accent */}
          <path d="M625 350 L640 365 L632 378 L618 362 Z" fill="#E00000" stroke="#FF5555" strokeWidth="1" />
          {/* Center Hub */}
          <circle cx="600" cy="380" r="18" fill="#58C91A" stroke="#FFFFFF" strokeWidth="2" />
          <circle cx="600" cy="380" r="6" fill="#111111" />
        </g>

        {/* REAR MUDGUARD & SWINGARM */}
        <path d="M150 355 Q180 300 240 310 L270 360 L230 395 Z" fill="#111827" stroke="#1F2937" strokeWidth="2" />
        <path d="M210 380 L310 375 L330 355" stroke="#4B5563" strokeWidth="10" strokeLinecap="round" />
        {/* Dual Rear Shock Absorber with Spring */}
        <line x1="240" y1="365" x2="270" y2="280" stroke="#E00000" strokeWidth="8" strokeLinecap="round" />
        <path d="M245 355 L265 290" stroke="#FFFFFF" strokeWidth="4" strokeDasharray="4 4" />

        {/* UNDERBODY & BATTERY COMPARTMENT */}
        <path
          d="M260 380 L490 380 L520 340 L340 340 Z"
          fill="#111315"
          stroke="#1F2937"
          strokeWidth="3"
        />
        {/* Floorboard Base */}
        <path d="M350 345 L485 345 L500 325 L340 325 Z" fill="#1E2226" stroke="#58C91A" strokeWidth="1.5" />
        <line x1="365" y1="335" x2="475" y2="335" stroke="#374151" strokeWidth="3" strokeDasharray="6 4" />

        {/* MAIN BODY FAIRINGS & CHASSIS (DYNAMIC COLORED) */}
        <g id="main-chassis-body">
          {/* Main Rear Body Cowl */}
          <path
            d="M170 270 C190 220 270 210 360 220 L375 295 L310 350 L220 330 Z"
            fill="url(#bodyGrad)"
            stroke="#000000"
            strokeWidth="3"
          />

          {/* Under-Seat Accent Cover */}
          <path d="M220 270 L345 270 L360 310 L250 315 Z" fill="#111111" stroke="#333333" strokeWidth="1.5" />

          {/* Premium VoltEra Chrome Script on Side Cowl */}
          <text
            x="245"
            y="295"
            fill="#FFFFFF"
            fontSize="14"
            fontWeight="800"
            letterSpacing="2"
            fontFamily="Montserrat, sans-serif"
            className="drop-shadow-md"
          >
            VOLTERA
          </text>

          {/* Electric Green Accent Stripe */}
          <path d="M190 260 Q260 240 350 250" stroke="#58C91A" strokeWidth="4" strokeLinecap="round" filter="url(#electricGlow)" />
        </g>

        {/* ERGONOMIC PLUSH SADDLE / SEAT */}
        <g id="seat">
          {/* Rear Pillion Grab Rail */}
          <path d="M150 240 L185 220 L210 225" stroke="url(#metalGrad)" strokeWidth="6" strokeLinecap="round" />
          {/* Dual Density Long Saddle */}
          <path
            d="M175 235 C200 205 270 205 320 215 C345 220 380 225 395 245 C380 255 310 250 185 250 Z"
            fill="#18181B"
            stroke="#27272A"
            strokeWidth="3"
          />
          {/* Sport Stitching line */}
          <path d="M195 238 C250 225 330 230 375 242" stroke="#E00000" strokeWidth="1.5" strokeDasharray="3 3" />
        </g>

        {/* FRONT FORK & STEERING COLUMN */}
        <g id="front-fork">
          {/* Dual Telescopic Hydraulic Suspension Tube */}
          <line x1="600" y1="380" x2="540" y2="160" stroke="url(#metalGrad)" strokeWidth="10" strokeLinecap="round" />
          <line x1="595" y1="375" x2="545" y2="190" stroke="#111827" strokeWidth="14" strokeLinecap="round" />
          {/* Front Fender / Mudguard (Dynamic Body Colored) */}
          <path
            d="M550 330 C565 290 625 290 645 335 L625 345 C605 315 570 315 555 345 Z"
            fill="url(#bodyGrad)"
            stroke="#111111"
            strokeWidth="2"
          />
        </g>

        {/* FRONT APRON / NOSE COWL (DYNAMIC BODY COLORED) */}
        <g id="front-apron">
          <path
            d="M510 320 L555 160 L520 145 L480 260 L495 320 Z"
            fill="url(#bodyGrad)"
            stroke="#070907"
            strokeWidth="3"
          />
          {/* Sculpted Front Nose Shield */}
          <path
            d="M535 150 L585 195 L565 285 L525 295 L530 160 Z"
            fill="url(#bodyGrad)"
            stroke="#151715"
            strokeWidth="2"
          />

          {/* Front Center V-Shaped Electric DRL & Headlight Assembly */}
          <path
            d="M560 205 L580 235 L555 245 Z"
            fill="#FFFFFF"
            stroke="#58C91A"
            strokeWidth="2"
            filter="url(#headlightBeam)"
          />
          <polygon points="562,210 576,232 558,239" fill="#E8FFF0" />

          {/* LED Projector Lens inside Headlamp */}
          <circle cx="566" cy="225" r="5" fill="#58C91A" filter="url(#electricGlow)" />
          <circle cx="566" cy="225" r="2" fill="#FFFFFF" />

          {/* DRL Wing Lightbar */}
          <path d="M542 185 Q565 200 575 220" stroke="#58C91A" strokeWidth="3" strokeLinecap="round" filter="url(#electricGlow)" />
        </g>

        {/* HANDLEBAR & DIGITAL COCKPIT */}
        <g id="handlebar">
          {/* Stem & Cowl */}
          <path d="M530 150 L545 110 L520 105 L510 145 Z" fill="#18181B" stroke="#27272A" strokeWidth="2" />
          {/* Handlebar Grips */}
          <path d="M495 115 L555 105 L545 95 L485 105 Z" fill="#222527" stroke="#111111" strokeWidth="2" />
          {/* Rubber Grips */}
          <rect x="480" y="102" width="22" height="12" rx="3" fill="#111111" stroke="#374151" strokeWidth="1" />
          <rect x="548" y="93" width="22" height="12" rx="3" fill="#111111" stroke="#374151" strokeWidth="1" />
          {/* Brake Levers */}
          <line x1="475" y1="108" x2="495" y2="108" stroke="url(#metalGrad)" strokeWidth="3" strokeLinecap="round" />
          <line x1="565" y1="98" x2="585" y2="98" stroke="url(#metalGrad)" strokeWidth="3" strokeLinecap="round" />
          {/* Aerodynamic Wind Deflector Visor */}
          <path d="M515 105 L545 75 L560 90 L530 115 Z" fill="#111827" stroke="#58C91A" strokeWidth="1.5" fillOpacity="0.9" />
          {/* Glowing Digital Dashboard Screen */}
          <polygon points="526,98 544,82 548,92 530,105" fill="#051505" stroke="#58C91A" strokeWidth="1" />
          <circle cx="538" cy="92" r="3" fill="#58C91A" filter="url(#electricGlow)" />
          {/* Rearview Mirrors */}
          <line x1="510" y1="105" x2="490" y2="60" stroke="#374151" strokeWidth="3" strokeLinecap="round" />
          <ellipse cx="485" cy="55" rx="14" ry="9" fill="#1F2937" stroke="#9CA3AF" strokeWidth="1.5" transform="rotate(-15 485 55)" />
        </g>

        {/* HEADLIGHT BEAM PROJECTION (FUTURISTIC NIGHT EFFECT) */}
        <g id="headlight-beam" opacity="0.65">
          <polygon
            points="580,230 790,200 790,320 565,250"
            fill="url(#neonGreenGlow)"
            fillOpacity="0.08"
          />
          <polygon
            points="575,225 760,220 760,280 570,240"
            fill="#FFFFFF"
            fillOpacity="0.12"
          />
        </g>

        {/* MODEL BADGE OVERLAY ON SVG */}
        <g id="badge-pill">
          <rect x="50" y="40" width="220" height="42" rx="21" fill="#111827" stroke="#58C91A" strokeWidth="1.5" fillOpacity="0.9" />
          <circle cx="72" cy="61" r="10" fill="#126B20" />
          <path d="M68 61 L71 64 L77 57" stroke="#58C91A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <text x="92" y="66" fill="#F4F6F5" fontSize="13" fontWeight="700" fontFamily="Montserrat, sans-serif">
            {modelName}
          </text>
        </g>
      </svg>

      {/* Range Float Badge on the graphic */}
      {badge && (
        <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md border border-[#58C91A]/60 text-[#58C91A] font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#58C91A] animate-pulse"></span>
          {badge}
        </div>
      )}
    </div>
  );
};
