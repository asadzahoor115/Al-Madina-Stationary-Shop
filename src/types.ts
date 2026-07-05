export interface CatalogItem {
  id: string;
  name: string;
  category: 'printing-cash' | 'sims-tech' | 'stationery-office' | 'school-art';
  subcategory: string;
  description: string;
  features?: string[];
  tags?: string[];
  photoRef?: string; // Links to the photo proof
  imageIcon?: string; // Optional illustration suggestion or custom styling class
}

export const CATALOG_ITEMS: CatalogItem[] = [
  // --- Category: Photocopy, Printing & Cash Services ---
  {
    id: 'heavy-duty-copying',
    name: 'Heavy-Duty Digital Laser Printing & Copying',
    category: 'printing-cash',
    subcategory: 'Printing & Copying',
    description: 'High-speed, professional-grade laser printing and photocopy services. Available in both crisp high-contrast Black & White and vivid Full Color.',
    features: [
      'Heavy-duty industrial-grade printing machines (Featured in shop photo)',
      'Sharp text rendering and consistent deep black tones',
      'Sizes: A4, F4 (Legal), Letter, and customized dimensions',
      'Bulk printing discounts for students and office orders'
    ],
    tags: ['B&W', 'Vivid Color', 'High Speed', 'Bulk Discounts'],
    photoRef: 'Featured in central shop operations view'
  },
  {
    id: 'doc-binding-lamination',
    name: 'Professional Document Binding & Lamination',
    category: 'printing-cash',
    subcategory: 'Document Finishing',
    description: 'Secure and polish your assignments, reports, and official documents. Choose from spiral, tape, or premium hard binding with protective transparent lamination.',
    features: [
      'Elastic spiral binding & colored binding tapes (visible on shelves)',
      'Ultra-clear lamination sheets to protect files from water & wear',
      'Full scan-to-PDF high-resolution digital scanning'
    ],
    tags: ['Spiral Binding', 'Tape Binding', 'Hard Binding', 'Lamination'],
    photoRef: 'Tapes & laminations visible in display cabinet'
  },
  {
    id: 'cash-point-easyload',
    name: 'Secure Cash Point & Easyload Services',
    category: 'printing-cash',
    subcategory: 'Financial Utility',
    description: 'Instantly transfer funds, withdraw cash, or load mobile credit securely. We support all major mobile wallets and direct agent transfers.',
    features: [
      'Cash In / Cash Out services',
      'Instant Mobile Easyload (Jazz, Zong, Telenor, Ufone)',
      'Highly secure, receipt-backed transactions'
    ],
    tags: ['Easyload', 'Cash In/Out', 'Instant', 'Receipt Generated'],
    photoRef: 'Outside board highlights Cash Point services'
  },

  // --- Category: Mobile SIMs & Next-Gen Tech Accessories ---
  {
    id: 'major-sim-cards',
    name: 'All Network SIM Cards & Quick Activation',
    category: 'sims-tech',
    subcategory: 'Mobile Connections',
    description: 'Get connected instantly with official network SIM cards. We facilitate quick biometric verification and activation in minutes.',
    features: [
      'Jazz SIMs with super 4G data bundles',
      'Zong 4G SIMs with high-speed internet',
      'Telenor & Ufone SIM cards with budget calls/SMS packages'
    ],
    tags: ['Jazz', 'Zong', 'Telenor', 'Ufone', 'Biometric Active'],
    photoRef: 'Outside banner features All 4G Network Recharges'
  },
  {
    id: 'premium-earphones',
    name: 'Premium Earphones & Extra Bass Handsfree',
    category: 'sims-tech',
    subcategory: 'Audio Accessories',
    description: 'Immerse yourself in deep bass and pristine audio. Carefully selected brands that balance durable cables with high-fidelity acoustics.',
    features: [
      'KHM Rock Premium Bass Series (Featured on shelf display)',
      'Links 313 Hi-Res Stereo Audio Handsfree',
      'Universal Extra Bass In-Ear Headphones',
      'Built-in HD noise-cancelling microphones for calls'
    ],
    tags: ['KHM Rock', 'Links 313', 'Extra Bass', 'HD Mic'],
    photoRef: 'Earphone shelves with KHM Rock & Links 313'
  },
  {
    id: 'data-cables-chargers',
    name: 'Advanced Fast Charging Data Cables & Adapters',
    category: 'sims-tech',
    subcategory: 'Power Accessories',
    description: 'Never run out of power with high-amperage fast cables and safety-certified power adapters.',
    features: [
      'Type-C, Micro-USB, and Lightning options',
      '20W PD Fast Charging Power Adapters (with over-voltage safety)',
      'Mcdodo Fast Charging premium braided cables',
      'MT Power charging cables (Featured in glass drawer display)'
    ],
    tags: ['Type-C', 'Lightning', '20W PD', 'Braided Cables', 'Mcdodo'],
    photoRef: 'Fast charging drawers & cables display'
  },
  {
    id: 'wireless-audio-power',
    name: 'Wireless Bluetooth Speakers & AirPods',
    category: 'sims-tech',
    subcategory: 'Next-Gen Wireless',
    description: 'Modern wire-free technology for home entertainment, travel, and emergencies.',
    features: [
      'Bluetooth Speakers with integrated solar panels & mic support',
      'TWS Earbuds & AirPods (Perfect companion for high-speed audio)',
      'Heavy-duty extension boards with multi-socket surge protection',
      'High-power emergency LED flashlights'
    ],
    tags: ['Solar BT Speakers', 'AirPods', 'Extension Boards', 'Emergency LED'],
    photoRef: 'Showcase cabinet containing speakers and power accessories'
  },

  // --- Category: Writing, Desk Stationery & Office Supplies ---
  {
    id: 'premium-pens-markers',
    name: 'Premium Fountain Pens & Permanent Markers',
    category: 'stationery-office',
    subcategory: 'Writing Instruments',
    description: 'Elegant fountain pens for smooth signature scripts and permanent markers for bold labeling.',
    features: [
      'Premium Fountain Pens with high-quality metal nibs',
      'Dollar Clipper Fountain Pens (An classic Pakistani stationery standard)',
      'Piano Ink Markers (Permanent & Whiteboard markers in multiple colors)'
    ],
    tags: ['Fountain Pens', 'Dollar Clipper', 'Piano Markers'],
    photoRef: 'Writing display showing various fountain pens & markers'
  },
  {
    id: 'ballpoint-gel-pens',
    name: 'High-Quality Ballpoints & Smooth Gel Pens',
    category: 'stationery-office',
    subcategory: 'Writing Instruments',
    description: 'Everyday workhorse writing pens, from ultra-fine tips to smooth gel inks for continuous writing comfort.',
    features: [
      'Velocity & Neptune premium smooth ballpoints',
      'TurboGrip and JX-7 comfort gel pens',
      'Smash & Goldfish fine-liners',
      'Organized beautifully in multi-colored counter jars'
    ],
    tags: ['Velocity', 'Neptune', 'TurboGrip', 'JX-7', 'Smash'],
    photoRef: 'Counter top pen jars with dozens of colorful options'
  },
  {
    id: 'scientific-calculators',
    name: 'Casio Scientific & Basic Calculators',
    category: 'stationery-office',
    subcategory: 'Office Electronics',
    description: 'Essential calculation tools for students, engineers, and daily shop operations.',
    features: [
      'Casio fx-991ES Plus (Natural Display, 417 functions)',
      'Casio fx-82ES Plus (Scientific student calculation standard)',
      'Heavy-duty solar & battery desk calculators for businesses'
    ],
    tags: ['Casio fx-991ES', 'fx-82ES Plus', 'Desk Calculators'],
    photoRef: 'Calculator showcase highlighting real Casio stock'
  },
  {
    id: 'tapes-packing',
    name: 'Heavy-Duty Packing & Colored Binding Tapes',
    category: 'stationery-office',
    subcategory: 'Binding & Packing',
    description: 'Secure boxes, parcels, or custom book bindings with industrial adhesive strength.',
    features: [
      'Packing Tapes: Wide Brown, Bright Yellow, & Crystal Transparent',
      'Vibrant colored binding tapes (Red, Blue, Green, Yellow) for spiral finishes',
      'Double-sided mounting tapes & high-tack paper masking tapes'
    ],
    tags: ['Packing Tapes', 'Binding Tapes', 'High Tack Adhesive'],
    photoRef: 'Display column filled with dense tape rolls'
  },
  {
    id: 'registers-receipts',
    name: 'Attendance Registers, Ledgers & Thermal Receipt Rolls',
    category: 'stationery-office',
    subcategory: 'Office Stationery',
    description: 'Organize your company records, student attendances, or store points-of-sale with premium paper stock.',
    features: [
      'Haroon Registers and official lined ledgers',
      'Beautiful daily journals and personal diaries',
      'High-grade thermal receipt rolls for cash registers & billing printers'
    ],
    tags: ['Attendance Registers', 'Ledgers', 'Diaries', 'Thermal Rolls'],
    photoRef: 'Stacked registers and ledger books'
  },
  {
    id: 'staplers-glue',
    name: 'Heavy-Duty Staplers, Staples & High-Bond Adhesives',
    category: 'stationery-office',
    subcategory: 'Desk Essentials',
    description: 'Classic office desktop utilities to bind or stick documents cleanly.',
    features: [
      'Heavy-duty stainless steel staplers and strong staple pin boxes',
      'Glutil liquid adhesive with spreaders',
      'Uhu Glue Sticks (Acid-free, multi-purpose)'
    ],
    tags: ['Staplers', 'Glutil Glue', 'Uhu Glue Stick'],
    photoRef: 'Adhesives and desktop supplies display'
  },

  // --- Category: School Supplies, Art & Sports ---
  {
    id: 'school-backpacks',
    name: "Premium Kids' School Backpacks",
    category: 'school-art',
    subcategory: 'Bags & Carriage',
    description: 'Ergonomic, lightweight, and durable school bags with charming designs that children love.',
    features: [
      'Cartoon Mascot & Husky design backpacks (Soft padded straps)',
      'Star Sports maroon student backpacks for secondary classes',
      'Tear-resistant nylon fabric with heavy-duty reliable zippers'
    ],
    tags: ['Husky Backpack', 'Star Sports', 'Ergonomic', 'Waterproof Base'],
    photoRef: 'Hanging backpacks showcase in shop'
  },
  {
    id: 'exam-clipboards',
    name: 'Student Exam Clipboards & writing pads',
    category: 'school-art',
    subcategory: 'School Essentials',
    description: 'Rigid, secure, and inspiring writing boards to support papers perfectly during examinations.',
    features: [
      'Superhero / Deadpool & Wolverine action clipboards',
      'Cute cartoons and motivational animal patterns',
      'Classic wooden textured clipboards for a professional feel'
    ],
    tags: ['Deadpool Edition', 'Cartoon Art', 'Wooden Texture'],
    photoRef: 'Clipboards shelf displaying various themed boards'
  },
  {
    id: 'gift-shopping-bags',
    name: 'Fancy Gift Bags & Printed Paper Bags',
    category: 'school-art',
    subcategory: 'Gift Packing',
    description: 'Make gifts and purchases feel special with elegantly printed paper bags in beautiful marble, geometric, and artistic patterns.',
    features: [
      'Sturdy rope handles for safe carrying',
      'Premium laminated paper boards',
      'Sizes ranging from small jewelry size to large gift packs'
    ],
    tags: ['Marble Pattern', 'Printed Gift Bags', 'Eco-friendly Paper'],
    photoRef: 'Display of hanging colorful shopping and gift bags'
  },
  {
    id: 'art-colors-brushes',
    name: 'Goldfish Poster Colours & Art Supplies',
    category: 'school-art',
    subcategory: 'Art & Creativity',
    description: 'Unlock children’s and students’ creative potentials with official high-pigment art accessories.',
    features: [
      'Goldfish Poster Colours & watercolor sets',
      'Finest synthetic hair paint brushes (Sizes 1-12)',
      'Student Geometry Kits with precision tools (compass, divider, ruler)'
    ],
    tags: ['Goldfish Colours', 'Paint Brushes', 'Geometry Kits'],
    photoRef: 'Blue display board with paint kits & geometry gears'
  }
];

export const SHOP_INFO = {
  name: 'Al-Madina Photostat, Stationery & Cash Point Services',
  tagline: 'Your Premium Hub for High-Speed Copying, Tech Accessories, Mobile SIMs & Stationery.',
  owner1: { name: 'Ahmed Sarfraz', phone: '0314-5947779' },
  owner2: { name: 'Amir Hamza', phone: '0344-1464451' },
  address: 'Toba Rd, opp. City School, near Officer colony, Jhang, 35200, Pakistan.',
  whatsappGroup: 'https://chat.whatsapp.com/KKRNp1v5upX9fk7ehRJCv9',
  whatsappNumber: '+923441464451',
  phoneFormatted: '+92 344 1464451'
};
