export const designTokens = {
  heroStyle: "cinematic",
  typography: { heading: "Playfair Display", body: "DM Sans", display: "Playfair Display" },
  effects: { noise: true, glassmorphism: "none", floatingShapes: false, scrollProgress: true, meshGradient: false, gradientBorders: false, cursorGlow: false },
  animationPreset: "dramatic", serviceCardStyle: "overlay", projectGridStyle: "masonry", testimonialStyle: "carousel", statsStyle: "overlay", bgPattern: "none",
  homeSectionOrder: ["hero","marquee","services","portfolio","stats","about","whyChooseUs","testimonials","cta"],
};

const siteData = {
  business: {
    name: "Galaxy Building Supplies", legalName: "Galaxy Building Supplies", tagline: "Building Zimbabwe. One Project at a Time.",
    description: "Building Zimbabwe. One Project at a Time.",
    phone: "+263 71 507 1941", phoneRaw: "+263715071941", whatsappNumber: "263715071941", email: "info@galaxysupplies.co.zw",
    address: "118 Marlbou Rd, Tynwald South, Zimbabwe", country: "Zimbabwe", city: "Harare",
    rating: 4.9, ratingRounded: 5, reviewCount: 10, established: "2018", yearsExperience: "6+", projectsCompleted: "2000+", employees: "12+",
    coordinates: { lat: -17.83, lng: 31.05 },
    hours: [{ day: "Monday - Friday", time: "8:00 AM - 5:00 PM" }, { day: "Saturday", time: "8:00 AM - 1:00 PM" }, { day: "Sunday", time: "Closed" }],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.05!3d-17.83",
    cookieConsentKey: "galaxy-building-supplies-consent",
    socialLinks: { facebook: "#", instagram: "#", linkedin: "#" },
  },
  navbar: { logoImage: null, logoLine1: "Galaxy", logoLine2: "Building Supplies" },
  hero: {
    badge: "Tynwald's One-Stop Building Materials Supplier",
    titleParts: [{ text: "BUILDING " }, { text: "ZIMBABWE", highlight: true }, { text: " ONE PROJECT AT A TIME." }],
    subtitle: "Building Zimbabwe.",
    ctaPrimary: "Get a Quote", ctaSecondary: "Browse Products", trustBadge: "2,000+ Customers",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=85", alt: "Galaxy Building Supplies - professional service" },
      { url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=85", alt: "Galaxy Building Supplies - professional service" },
      { url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=85", alt: "Galaxy Building Supplies - professional service" }
    ],
  },
  stats: [
    { number: "2000+", label: "Customers Served" },
    { number: "6+", label: "Years in Business" },
    { number: "5000+", label: "Products Stocked" },
    { number: "100%", label: "Stock Guarantee" }
  ],
  servicesPreview: [
    { title: "Building Materials", desc: "Complete range of bricks, cement, sand, stone, and aggregate for residential and commercial construction.", icon: "Buildings" },
    { title: "Roofing Solutions", desc: "IBR, corrugated, and tile-profile roofing sheets in Chromadek, Zincalume, and galvanised steel.", icon: "Star" },
    { title: "Plumbing Supplies", desc: "Pipes, fittings, valves, and sanitary ware from trusted brands at competitive wholesale prices.", icon: "Wrench" },
    { title: "Electrical Supplies", desc: "Wiring, switchgear, lighting, and solar components for every scale of project.", icon: "ShieldCheck" },
    { title: "Paint & Finishes", desc: "Premium interior and exterior paints, varnishes, and waterproofing solutions.", icon: "Rocket" },
    { title: "Tools & Equipment", desc: "Hand tools, power tools, and construction equipment for professionals and DIY enthusiasts.", icon: "Target" }
  ],
  services: {
    heroTitle: "Our Services", heroSubtitle: "Comprehensive solutions delivered with expertise and care.",
    items: [
      { title: "Building Materials", slug: "building-materials", desc: "Complete range of bricks, cement, sand, stone, and aggregate for residential and commercial construction. Our experienced team ensures every project meets the highest standards of quality and professionalism.", features: ["Expert Team","Quality Materials","Fast Turnaround","Warranty Included","Free Assessment","Full Support"], image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" },
      { title: "Roofing Solutions", slug: "roofing-solutions", desc: "IBR, corrugated, and tile-profile roofing sheets in Chromadek, Zincalume, and galvanised steel. Our experienced team ensures every project meets the highest standards of quality and professionalism.", features: ["Expert Team","Quality Materials","Fast Turnaround","Warranty Included","Free Assessment","Full Support"], image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80" },
      { title: "Plumbing Supplies", slug: "plumbing-supplies", desc: "Pipes, fittings, valves, and sanitary ware from trusted brands at competitive wholesale prices. Our experienced team ensures every project meets the highest standards of quality and professionalism.", features: ["Expert Team","Quality Materials","Fast Turnaround","Warranty Included","Free Assessment","Full Support"], image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" },
      { title: "Electrical Supplies", slug: "electrical-supplies", desc: "Wiring, switchgear, lighting, and solar components for every scale of project. Our experienced team ensures every project meets the highest standards of quality and professionalism.", features: ["Expert Team","Quality Materials","Fast Turnaround","Warranty Included","Free Assessment","Full Support"], image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80" },
      { title: "Paint & Finishes", slug: "paint-finishes", desc: "Premium interior and exterior paints, varnishes, and waterproofing solutions. Our experienced team ensures every project meets the highest standards of quality and professionalism.", features: ["Expert Team","Quality Materials","Fast Turnaround","Warranty Included","Free Assessment","Full Support"], image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" },
      { title: "Tools & Equipment", slug: "tools-equipment", desc: "Hand tools, power tools, and construction equipment for professionals and DIY enthusiasts. Our experienced team ensures every project meets the highest standards of quality and professionalism.", features: ["Expert Team","Quality Materials","Fast Turnaround","Warranty Included","Free Assessment","Full Support"], image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80" }
    ],
  },
  projects: {
    heroTitle: "Our Portfolio", heroSubtitle: "A selection of our finest work.",
    items: [
      { title: "Residential Build Supply", slug: "residential--build--supply", category: "Residential", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", images: ["https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"] },
      { title: "Commercial Roofing", slug: "commercial--roofing", category: "Commercial", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80", images: ["https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"] },
      { title: "Plumbing Renovation", slug: "plumbing--renovation", category: "Renovation", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", images: ["https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"] },
      { title: "Electrical Upgrade", slug: "electrical--upgrade", category: "New Build", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80", images: ["https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"] },
      { title: "School Construction", slug: "school--construction", category: "Roofing", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", images: ["https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"] },
      { title: "Church Build", slug: "church--build", category: "Plumbing", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80", images: ["https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"] },
      { title: "Workshop Setup", slug: "workshop--setup", category: "Electrical", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", images: ["https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"] },
      { title: "Housing Development", slug: "housing--development", category: "Industrial", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80", images: ["https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"] }
    ],
  },
  homeTestimonials: [
    { text: "Outstanding service from Galaxy Building Supplies. Professional, thorough, and delivered exactly what was promised. I would not hesitate to recommend them to anyone.", name: "Tendai Moyo", role: "Satisfied Client", rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" },
    { text: "We have been using Galaxy Building Supplies for years and the quality has never dropped. Consistent excellence and genuine care for their clients.", name: "Grace Mutasa", role: "Business Owner", rating: 5, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
    { text: "From the initial consultation to final delivery, every step was handled with professionalism. Galaxy Building Supplies sets the standard in their industry.", name: "James Karonga", role: "Property Owner", rating: 5, avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80" },
    { text: "The team at Galaxy Building Supplies went above and beyond our expectations. Their expertise and attention to detail are truly impressive.", name: "Patricia Sibanda", role: "Corporate Client", rating: 5, avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80" },
    { text: "I have referred Galaxy Building Supplies to everyone I know. Their combination of skill, integrity, and fair pricing is unmatched in Harare.", name: "Michael Chigwedere", role: "Repeat Client", rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" }
  ],
  reviews: {
    heroTitle: "Client Reviews", heroSubtitle: "What our clients say about our work.",
    items: [
      { text: "Outstanding service. Professional and delivered exactly what was promised.", name: "Tendai Moyo", role: "Satisfied Client", rating: 5 },
      { text: "Consistent excellence over years of working together. Genuine care for clients.", name: "Grace Mutasa", role: "Business Owner", rating: 5 },
      { text: "Every step handled with professionalism. Galaxy Building Supplies sets the standard.", name: "James Karonga", role: "Property Owner", rating: 5 },
      { text: "Above and beyond expectations. Expertise and attention to detail are impressive.", name: "Patricia Sibanda", role: "Corporate Client", rating: 5 },
      { text: "Skill, integrity, and fair pricing unmatched in Harare. Highly recommended.", name: "Michael Chigwedere", role: "Repeat Client", rating: 5 },
      { text: "Exceptional quality and service. Will definitely use again.", name: "Angela Mhembere", role: "New Client", rating: 5 }
    ],
  },
  about: {
    heroTitle: "Our Story", heroSubtitle: "Built on expertise, driven by quality.",
    story: ["Galaxy Building Supplies has served Tynwald and greater Harare since 2018. From a single hardware store, we have grown into the area's go-to for quality building materials.", "With over 2,000 customers served and a 4.9 Google rating, our commitment to competitive pricing and genuine stock has earned us the trust of builders across the region.", "We are committed to delivering results that exceed expectations, every single time."],
    values: [
      { title: "Quality First", desc: "Every project meets our exacting standards before we consider it complete." },
      { title: "Client Focus", desc: "Your satisfaction is our measure of success. We listen, we deliver, we follow up." },
      { title: "Expert Team", desc: "Certified professionals with years of specialised experience in their craft." },
      { title: "Fair Pricing", desc: "Transparent quotes with no hidden costs. The price we quote is the price you pay." },
    ],
    team: [
      { name: "David Moyo", role: "Managing Director", bio: "Over 15 years of industry experience.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
      { name: "Sarah Mutasa", role: "Operations Manager", bio: "Ensures every project runs smoothly.", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80" },
      { name: "Peter Chimwanda", role: "Lead Specialist", bio: "Master craftsman with decades of expertise.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" },
      { name: "Lisa Karonga", role: "Client Relations", bio: "Dedicated to ensuring every client receives premium service.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
    ],
  },
  whyChooseUs: { title: "Why Galaxy", points: [{ title: "Competitive Pricing", desc: "Trade and retail prices that keep your project on budget." },{ title: "Genuine Stock Only", desc: "No knockoffs. Every product sourced from verified suppliers." },{ title: "Free Delivery", desc: "Free delivery within Tynwald and surrounding areas on qualifying orders." },{ title: "Expert Advice", desc: "Our team helps you specify the right materials for every project." }] },
  featuredProjects: [{ title: "Residential Build Supply", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", category: "Residential" },{ title: "Commercial Roofing", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80", category: "Commercial" },{ title: "Plumbing Renovation", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", category: "Renovation" }],
  careers: { heroTitle: "Join Our Team", heroSubtitle: "We are always looking for talented people.", positions: [
    { title: "Specialist", department: "Operations", location: "Harare", type: "Full-time", desc: "Join our team of skilled professionals." },
    { title: "Client Consultant", department: "Sales", location: "Harare", type: "Full-time", desc: "Help clients with expert advice." },
  ] },
  contact: { heroTitle: "Get In Touch", heroSubtitle: "Visit us or reach out for a free consultation.", branches: [
    { name: "Harare Office", address: "118 Marlbou Rd, Tynwald South, Zimbabwe", phone: "+263 71 507 1941", email: "info@galaxysupplies.co.zw" },
  ] },
  homeCta: {
    title: "YOUR PROJECT STARTS HERE.", subtitle: "Cement, roofing, plumbing, electrical, paint, and tools. Everything you need under one roof.",
    ctaPrimary: "Get a Quote", ctaSecondary: "Chat on WhatsApp",
    whatsappText: "Hello Galaxy! I need a quote for building materials.",
    backgroundImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=85",
  },
  footer: { description: "Tynwald's one-stop building materials supplier since 2018.", copyright: "Galaxy Building Supplies" },
};

export default siteData;
