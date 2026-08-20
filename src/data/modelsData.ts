import { EVModel } from '../types';

export const VOLTERA_MODELS: EVModel[] = [
  {
    id: 'voltera-mini-60',
    name: 'VoltEra MINI 60',
    slug: 'voltera-mini-60',
    tagline: 'Compact, Agile & Everyday Efficiency',
    hindiTagline: 'छोटी आकार, बड़ी ताकत — रोज़मर्रा के सफर का सच्चा साथी',
    range: '60–70 KM*',
    badge: 'Popular City Choice',
    bestFor: 'Daily city commuting, students, quick local errands, and budget-conscious riders.',
    description: 'The VoltEra MINI 60 is engineered for urban mobility with a featherlight yet durable frame, seamless maneuverability, and ultra-low running cost.',
    fullOverview: 'Designed specifically for busy town roads and local neighborhood commutes, the VoltEra MINI 60 offers an agile riding experience with zero emissions. It packs responsive acceleration, comfortable seating geometry, and dependable braking in a sleek modern profile.',
    highlights: [
      'Compact Design',
      'Powerful Motor',
      'Long Lasting Battery',
      'Comfortable Seat',
      'Low Running Cost',
    ],
    colors: [
      { name: 'Metallic Crimson Red', hex: '#E00000', borderHex: '#800000' },
      { name: 'Electric Lime Green', hex: '#58C91A', borderHex: '#126B20' },
      { name: 'Shadow Obsidian Black', hex: '#151715', borderHex: '#333333' },
      { name: 'Pearl Polar White', hex: '#F0F4F2', borderHex: '#CCCCCC' }
    ],
    topSpeedNote: 'Optimized for safe and compliant city commuting',
    specs: [
      {
        category: 'Performance & Range',
        items: [
          { label: 'Certified Range', value: '60–70 KM*' },
          { label: 'Riding Modes', value: 'Eco / City / Turbo' },
          { label: 'Gradeability', value: 'Tested for Indian town inclines' },
          { label: 'Reverse Mode', value: 'Standard Assistance' }
        ]
      },
      {
        category: 'Battery & Charging',
        items: [
          { label: 'Battery Type', value: 'Advanced Safe EV Battery Pack' },
          { label: 'Charging Source', value: 'Standard 15A Home Socket Compatible' },
          { label: 'Charging Time', value: 'Contact VoltEra for model-specific specifications' },
          { label: 'Protection', value: 'BMS with Overheat & Short-Circuit Guard' }
        ]
      },
      {
        category: 'Braking & Safety',
        items: [
          { label: 'Braking System', value: 'High Response Front/Rear Drum & Disc System' },
          { label: 'Lighting', value: 'Bright LED Projector Headlamp + DRL' },
          { label: 'Security', value: 'Anti-Theft Remote Alarm & Wheel Lock' }
        ]
      },
      {
        category: 'Dimensions & Comfort',
        items: [
          { label: 'Seat Type', value: 'High-Density Ergonomic Cushion' },
          { label: 'Suspension', value: 'Telescopic Front Hydraulic Suspension' },
          { label: 'Wheels & Tyres', value: 'Tubeless High-Grip Urban Tyres' },
          { label: 'Display Console', value: 'Smart Digital High-Contrast Instrument Cluster' }
        ]
      }
    ],
    keyFeatures: [
      {
        title: 'Ultra Compact & Nimble',
        desc: 'Effortlessly weave through traffic and park in tight spots with ease.',
        icon: 'Zap'
      },
      {
        title: 'Efficient Electric Drive',
        desc: 'Whisper-quiet motor tuned for immediate pickup and smooth throttle response.',
        icon: 'Cpu'
      },
      {
        title: 'Comfort First Ergonomics',
        desc: 'Wide floorboard and plush contoured seat for relaxed everyday rides.',
        icon: 'ShieldCheck'
      },
      {
        title: 'Instant Savings',
        desc: 'Save over ₹30,000 annually compared to traditional petrol scooters.',
        icon: 'TrendingUp'
      }
    ]
  },
  {
    id: 'voltera-ct-80',
    name: 'VoltEra CT 80',
    slug: 'voltera-ct-80',
    tagline: 'Modern Style Meets Dependable Daily Range',
    hindiTagline: 'स्टाइलिश लुक और बेहतरीन रेंज — हर सफर बने यादगार',
    range: '70–80 KM*',
    badge: 'Executive City Commuter',
    bestFor: 'Working professionals, office commutes, and riders seeking enhanced range and disc brake safety.',
    description: 'VoltEra CT 80 blends sharp aerodynamic styling with an extended 70–80 KM range, front disc brakes, and an intuitive smart digital cockpit.',
    fullOverview: 'The VoltEra CT 80 delivers the perfect balance between executive aesthetics and daily dependability. Featuring precision hydraulic front disc braking and high-output LED illumination, it guarantees safety and road presence across day and night.',
    highlights: [
      'Stylish Design',
      'Disc Brake',
      'LED Headlight',
      'Smart Digital Display',
      'Comfortable Ride',
    ],
    colors: [
      { name: 'Glossy Racing Red', hex: '#D80000', borderHex: '#700000' },
      { name: 'Emerald Forest Green', hex: '#126B20', borderHex: '#083B10' },
      { name: 'Midnight Titanium Grey', hex: '#374151', borderHex: '#1F2937' },
      { name: 'Pure Glacier White', hex: '#FFFFFF', borderHex: '#D1D5DB' }
    ],
    topSpeedNote: 'Optimized for smooth city and highway bypass travel',
    specs: [
      {
        category: 'Performance & Range',
        items: [
          { label: 'Certified Range', value: '70–80 KM*' },
          { label: 'Braking Setup', value: 'Front Precision Hydraulic Disc + Rear Drum' },
          { label: 'Drive System', value: 'High Efficiency BLDC Hub Motor' },
          { label: 'Reverse Assist', value: 'Integrated Handlebar Button' }
        ]
      },
      {
        category: 'Battery & Charging',
        items: [
          { label: 'Battery Chemistry', value: 'High Energy Density EV Pack' },
          { label: 'Charging Compatibility', value: 'Home & Office 15A Socket' },
          { label: 'Fast Charge Support', value: 'Contact VoltEra for model-specific specifications' },
          { label: 'Battery Warranty', value: 'Contact VoltEra for model-specific specifications' }
        ]
      },
      {
        category: 'Electronics & Cockpit',
        items: [
          { label: 'Instrument Cluster', value: 'Full-Color Digital Display (Speed, Trip, Battery %)' },
          { label: 'Headlight', value: 'Wide-Beam LED Multi-Reflector' },
          { label: 'Tail Light', value: 'Signature LED Wing Light' },
          { label: 'Security', value: 'Anti-Theft Central Locking System' }
        ]
      },
      {
        category: 'Build & Suspension',
        items: [
          { label: 'Chassis', value: 'Heavy Gauge Tubular Steel Frame' },
          { label: 'Front Suspension', value: 'Dual Telescopic Hydraulic Dampers' },
          { label: 'Rear Suspension', value: 'Dual Spring Assist Hydraulic Shocks' },
          { label: 'Ground Clearance', value: 'High clearance built for Indian road breakers' }
        ]
      }
    ],
    keyFeatures: [
      {
        title: 'Precision Disc Braking',
        desc: 'Surefooted stopping power even in wet road conditions.',
        icon: 'Shield'
      },
      {
        title: 'Smart Digital Display',
        desc: 'Instant readout of speed, battery status, trip meter, and gear modes.',
        icon: 'Activity'
      },
      {
        title: 'Aerodynamic Silhouette',
        desc: 'Sculpted wind-deflecting front fascia with modern dual LED lightbars.',
        icon: 'Sparkles'
      },
      {
        title: 'Plush Dual Seating',
        desc: 'Extra lumbar support for rider and wide grab-rail for pillion.',
        icon: 'CheckCircle'
      }
    ]
  },
  {
    id: 'voltera-smart-100',
    name: 'VoltEra SMART 100',
    slug: 'voltera-smart-100',
    tagline: 'Intelligent Features, Effortless Reverse & Anti-Theft Guard',
    hindiTagline: 'स्मार्ट तकनीक, रिवर्स मोड और संपूर्ण सुरक्षा का भरोसा',
    range: '60–70 KM*',
    badge: 'Smart Technology Leader',
    bestFor: 'Tech enthusiasts, modern families, and riders seeking electronic reverse gear and remote anti-theft security.',
    description: 'VoltEra SMART 100 brings cutting-edge electronic conveniences including push-button reverse mode, keyless security alarm, and vivid digital instrumentation.',
    fullOverview: 'Never struggle with tight parking or uphill backing again. The VoltEra SMART 100 is engineered with dedicated reverse assist mode and active anti-theft electronic wheel immobilizer. Its futuristic LED lighting signature stands out in any crowd.',
    highlights: [
      'Smart Design',
      'LED Headlight',
      'Digital Display',
      'Reverse Mode',
      'Anti-Theft Lock',
    ],
    colors: [
      { name: 'Cyber Electric Blue', hex: '#0084FF', borderHex: '#004A8F' },
      { name: 'Solar Vibrant Orange', hex: '#FF6500', borderHex: '#993D00' },
      { name: 'Stealth Matte Black', hex: '#1A1A1A', borderHex: '#333333' },
      { name: 'Titanium Metallic Grey', hex: '#4B5563', borderHex: '#1F2937' }
    ],
    topSpeedNote: 'Electronic speed governors for optimum safety and power delivery',
    specs: [
      {
        category: 'Performance & Range',
        items: [
          { label: 'Certified Range', value: '60–70 KM*' },
          { label: 'Reverse Mode', value: 'Electronic Controlled Reverse Assist' },
          { label: 'Motor Rating', value: 'Contact VoltEra for model-specific specifications' },
          { label: 'Drive Selector', value: 'Multiple electronic speed curves' }
        ]
      },
      {
        category: 'Smart & Security',
        items: [
          { label: 'Anti-Theft System', value: 'Remote Key Fob with Wheel Auto-Lock & Siren' },
          { label: 'Keyless Ignition', value: 'One-Touch Remote Start' },
          { label: 'Find My Scooter', value: 'Audible Beep Indicator via Remote' },
          { label: 'Display Console', value: 'High Brightness Anti-Glare Digital Console' }
        ]
      },
      {
        category: 'Lighting & Visibility',
        items: [
          { label: 'Headlight', value: 'Optic Matrix LED with Integrated DRLs' },
          { label: 'Indicators', value: 'Dynamic LED Flow Indicators' },
          { label: 'Brakes', value: 'Front Disc & Rear Heavy-Duty Drum' }
        ]
      },
      {
        category: 'Chassis & Comfort',
        items: [
          { label: 'Frame', value: 'Robotic Welded High-Tensile Steel' },
          { label: 'Under-Seat Storage', value: 'Spacious Helmet & Charger Compartment' },
          { label: 'Floorboard', value: 'Flat Wide Board with High Traction Mat' },
          { label: 'USB Port', value: 'Mobile Charging Outlet on Dashboard' }
        ]
      }
    ],
    keyFeatures: [
      {
        title: 'Dedicated Reverse Mode',
        desc: 'Easily back out of slopes and cramped parking spots at the tap of a switch.',
        icon: 'Repeat'
      },
      {
        title: 'Anti-Theft Wheel Lock',
        desc: 'Smart alarm sounds and automatically locks the motor if unauthorized movement occurs.',
        icon: 'Lock'
      },
      {
        title: 'Matrix LED Projector',
        desc: 'Crystal-clear visibility with wide angle beam for dark country roads.',
        icon: 'Sun'
      },
      {
        title: 'On-Board USB Charger',
        desc: 'Keep your smartphone charged on the go with built-in 5V fast port.',
        icon: 'BatteryCharging'
      }
    ]
  },
  {
    id: 'voltera-prime-120',
    name: 'VoltEra PRIME 120',
    slug: 'voltera-prime-120',
    tagline: 'Maximum Range, Flagship Power & Supreme Road Comfort',
    hindiTagline: 'लंबी दूरी, दमदार ताकत और प्रीमियम राइड का अनुभव',
    range: '80–90 KM*',
    badge: 'Long Range Flagship',
    bestFor: 'Long distance daily commuters, cross-town riders, and customers who demand the maximum range on a single charge.',
    description: 'VoltEra PRIME 120 is the pinnacle of the VoltEra line-up, engineered with an impressive 80–90 KM range, heavyweight power delivery, and flagship ride dynamics.',
    fullOverview: 'If range anxiety is your concern, the VoltEra PRIME 120 is your definitive solution. Built with higher capacity energy cells, hydraulic disc brakes, premium metallic finishes, and responsive torque, it takes on highway stretches and district routes with unmatched confidence.',
    highlights: [
      'Premium Design',
      'Powerful Performance',
      'Disc Brake',
      'LED Headlight',
      'Smart Digital Display',
    ],
    colors: [
      { name: 'Royal Onyx Black', hex: '#0B0D0B', borderHex: '#222222' },
      { name: 'Imperial Ruby Red', hex: '#C40000', borderHex: '#660000' },
      { name: 'Aurora Electric Green', hex: '#58C91A', borderHex: '#126B20' },
      { name: 'Platinum Liquid Silver', hex: '#9CA3AF', borderHex: '#4B5563' }
    ],
    topSpeedNote: 'Engineered for smooth long-distance cruising & quick highway merging',
    specs: [
      {
        category: 'Performance & Range',
        items: [
          { label: 'Certified Range', value: '80–90 KM* (Class Leading)' },
          { label: 'Motor Output', value: 'High-Torque Performance Powertrain' },
          { label: 'Hill Climbing', value: 'Superior Gradient Torque Assist' },
          { label: 'Brakes', value: 'Front Disc System with Regenerative Braking Assist' }
        ]
      },
      {
        category: 'Battery & Efficiency',
        items: [
          { label: 'Battery Capacity', value: 'Contact VoltEra for model-specific specifications' },
          { label: 'Battery Protection', value: 'Multi-layer Thermal & IP67 Water/Dust Resistance' },
          { label: 'Running Cost', value: 'Approx. 15–20 paise per km' },
          { label: 'Charging Source', value: 'Standard 15A Home Outlet' }
        ]
      },
      {
        category: 'Premium Hardware',
        items: [
          { label: 'Headlamp', value: 'Triple-Element LED Projector with Dual Halo DRL' },
          { label: 'Cockpit Screen', value: 'Large 5.5-inch Smart Digital Automotive Console' },
          { label: 'Seating', value: 'Dual-Tone Leatherette Ergonomic Long Saddle' },
          { label: 'Security', value: 'Remote Central Lock with Vibration Sensor' }
        ]
      },
      {
        category: 'Suspension & Ride',
        items: [
          { label: 'Front Suspension', value: 'Heavy Duty Oil-Damped Telescopic Forks' },
          { label: 'Rear Suspension', value: 'Adjustable Dual Nitro-Gas Shocks' },
          { label: 'Tyre Specs', value: 'Wide All-Weather Radial Tubeless Tyres' },
          { label: 'Pillion Comfort', value: 'Integrated Foldable Aluminium Footrests' }
        ]
      }
    ],
    keyFeatures: [
      {
        title: 'Class-Leading 80–90 KM Range',
        desc: 'Travel further between charges with confidence on district and highway roads.',
        icon: 'Compass'
      },
      {
        title: 'High-Torque Performance',
        desc: 'Immediate electric torque pulls cleanly even with two riders and luggage.',
        icon: 'Flame'
      },
      {
        title: 'Regenerative Braking',
        desc: 'Recovers kinetic energy during braking to recharge the battery automatically.',
        icon: 'RefreshCw'
      },
      {
        title: 'Luxury Saddle Design',
        desc: 'Dual-density foam with premium stitching for zero rider fatigue.',
        icon: 'Award'
      }
    ]
  },
  {
    id: 'voltera-shakti-150',
    name: 'VoltEra SHAKTI 150',
    slug: 'voltera-shakti-150',
    tagline: 'Sporty Muscle, Robust Build & Unstoppable Road Presence',
    hindiTagline: 'मजबूत बनावट, स्पोर्टी लुक और जबरदस्त रोड प्रजेंस',
    range: '60–70 KM*',
    badge: 'Heavy Duty Muscle',
    bestFor: 'Riders needing rugged road durability, business deliveries, and strong road presence with muscular styling.',
    description: 'VoltEra SHAKTI 150 combines muscular sporty lines with a reinforced high-strength chassis, high ground clearance, and an uncompromising road stance.',
    fullOverview: 'Engineered for tough Indian road terrains, the VoltEra SHAKTI 150 lives up to its name. Its aggressive front cowl, heavy-duty suspension tuning, and reinforced pillion grab rail ensure maximum stability under diverse load and road conditions.',
    highlights: [
      'Sporty Design',
      'Strong Road Presence',
      'LED Headlight',
      'Comfortable Seat',
      'Anti-Theft Lock',
    ],
    colors: [
      { name: 'Inferno Blaze Orange', hex: '#FF5500', borderHex: '#802B00' },
      { name: 'Matte Combat Army Green', hex: '#2A4B2A', borderHex: '#142614' },
      { name: 'Stealth Raven Black', hex: '#111111', borderHex: '#333333' },
      { name: 'Fiery Crimson Red', hex: '#E00000', borderHex: '#700000' }
    ],
    topSpeedNote: 'High stability tuning with wide wheelbase',
    specs: [
      {
        category: 'Performance & Strength',
        items: [
          { label: 'Certified Range', value: '60–70 KM*' },
          { label: 'Chassis Type', value: 'Reinforced Twin-Tube Heavy-Duty Frame' },
          { label: 'Load Capacity', value: 'Heavy Payload Tested for Indian Conditions' },
          { label: 'Ground Clearance', value: 'High Ride Height for Rough Potholes' }
        ]
      },
      {
        category: 'Safety & Electronics',
        items: [
          { label: 'Lighting', value: 'Twin Sport LED Eagle Headlights' },
          { label: 'Anti-Theft Alarm', value: 'Vibration & Motion Sensing Remote Lock' },
          { label: 'Braking', value: 'Heavy Duty Disc/Drum Combined Safety System' },
          { label: 'Display', value: 'Sport Themed Digital Gauge Cluster' }
        ]
      },
      {
        category: 'Battery & Charging',
        items: [
          { label: 'Battery Chemistry', value: 'Robust EV Grade Heavy Cycle Pack' },
          { label: 'Charging Input', value: '15A Standard Indian Socket' },
          { label: 'BMS Protection', value: 'Short Circuit, Under Voltage & Thermal Safety' },
          { label: 'Charging Time', value: 'Contact VoltEra for model-specific specifications' }
        ]
      },
      {
        category: 'Comfort & Hardware',
        items: [
          { label: 'Saddle', value: 'Extra Wide Heavy-Duty Reinforced Cushion' },
          { label: 'Pillion Rail', value: 'Forged Heavy Grip Steel Carrier' },
          { label: 'Tyres', value: 'Extra-Width Deep-Tread Grip Tubeless Tyres' },
          { label: 'Suspension', value: 'Reinforced Long-Travel Hydraulic Shocks' }
        ]
      }
    ],
    keyFeatures: [
      {
        title: 'Reinforced Heavy-Duty Chassis',
        desc: 'Built tough to effortlessly handle rough roads, potholes, and cargo loads.',
        icon: 'Layers'
      },
      {
        title: 'Sporty Muscular Styling',
        desc: 'Sharp athletic cowl and aggressive stance that turns heads everywhere.',
        icon: 'Eye'
      },
      {
        title: 'Deep-Tread High Grip Tyres',
        desc: 'Superior traction on gravel, monsoon mud, and wet asphalt.',
        icon: 'Disc'
      },
      {
        title: 'All-Day Riding Comfort',
        desc: 'Wide ergonomic saddle engineered to eliminate back strain on long trips.',
        icon: 'Heart'
      }
    ]
  }
];

export const MODEL_DISCLAIMER = '*Actual range may vary depending on riding conditions, rider/load, road conditions, weather and other factors.';
export const TECH_SPEC_DISCLAIMER = 'Contact VoltEra for model-specific specifications.';
