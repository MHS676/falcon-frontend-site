import {
  HiOutlineShieldCheck,
  HiOutlineChip,
  HiOutlineDesktopComputer,
  HiOutlineLightBulb,
  HiOutlineCash,
  HiOutlineOfficeBuilding,
  HiOutlineCog, // Swapped HiOutlineWrench for HiOutlineCog
  HiOutlineUserGroup,
} from 'react-icons/hi'

export const OFFER_PAGES = {
  'physical-security': {
    slug: 'physical-security',
    icon: HiOutlineShieldCheck,
    banner: '/documents/navlink_banner/Security/Physical.jpeg',
    eyebrow: 'What We Offer',
    title: 'Physical Security',
    tagline: 'Professional manned guarding solutions protecting people, premises, and assets.',
    intro: `FALCON's Physical Security division is the cornerstone of our operations. With over 36 years of experience
    and a nationwide network of more than 5,000 trained personnel, we provide comprehensive manned guarding services
    tailored to the unique security demands of each client. Our guards are rigorously vetted, professionally trained,
    and deployed to deliver consistent, high-standard protection across Bangladesh.`,
    highlights: [
      { value: '4,000+', label: 'Trained Guards' },
      { value: '64', label: 'Districts Covered' },
      { value: '32+', label: 'Years of Experience' },
      { value: '400+', label: 'Clients Protected' },
    ],
    features: [
      {
        title: 'Manned Guarding',
        desc: 'Uniformed security officers stationed at your premises, providing a visible deterrent and immediate response capability 24/7.',
      },
      {
        title: 'Access Control Management',
        desc: 'Strict control of entry and exit points to prevent unauthorized access to restricted areas and sensitive facilities.',
      },
      {
        title: 'Patrol Services',
        desc: 'Scheduled and random patrols across your site to detect threats, deter intruders, and ensure the safety of all areas.',
      },
      {
        title: 'Receptionist & Concierge Security',
        desc: 'Professionally presented security personnel who manage front-of-house operations while maintaining vigilance.',
      },
      {
        title: 'Close Protection',
        desc: 'Discreet personal protection services for executives, VIPs, and high-profile individuals requiring elevated security.',
      },
      {
        title: 'Emergency Response',
        desc: 'Rapid intervention teams on standby to respond to incidents, evacuations, or any escalating security situations.',
      },
    ],
    whyUs: [
      'Nationally certified and licensed security personnel',
      'Rigorous background screening and vetting process',
      'Ongoing training aligned with international standards',
      'Dedicated client account management',
      'Seamless integration with electronic security systems',
      'Fully uniformed, professional presentation',
    ],
    sectors: ['Banking & Finance', 'Commercial Buildings', 'Diplomatic Missions', 'Industrial Facilities', 'Retail & Hospitality', 'Residential Compounds'],
    cta: 'Request a Security Assessment',
    ctaLink: '/contact',
    color: 'red',
  },

  'electronic-security': {
    slug: 'electronic-security',
    icon: HiOutlineChip,
    banner: '/documents/navlink_banner/Security/Electronic.jpg',
    eyebrow: 'What We Offer',
    title: 'Electronic Security',
    tagline: 'Cutting-edge technology solutions that keep your assets protected around the clock.',
    intro: `In today's evolving threat landscape, physical security alone is not sufficient. FALCON's Electronic Security
    division delivers state-of-the-art technology-driven solutions — from CCTV surveillance to advanced intrusion
    detection systems — ensuring comprehensive protection of your premises, people, and critical assets at all times.`,
    highlights: [
      { value: 'AI', label: 'Powered Analytics' },
      { value: '24/7', label: 'Monitoring' },
      { value: '99.9%', label: 'Uptime SLA' },
      { value: 'IP', label: 'Grade Encryption' },
    ],
    features: [
      {
        title: 'CCTV Surveillance Systems',
        desc: 'HD and 4K IP camera solutions with intelligent analytics, remote monitoring, and secure cloud or on-premise storage.',
      },
      {
        title: 'Intrusion Detection',
        desc: 'Advanced sensors, motion detectors, and alarm systems that immediately alert your security team to unauthorized entry.',
      },
      {
        title: 'Access Control Systems',
        desc: 'Biometric, card-based, and PIN-entry systems integrated with door controllers for precise access management.',
      },
      {
        title: 'Fire Detection & Alarm',
        desc: 'Certified fire alarm panels, smoke detectors, heat sensors, and emergency notification systems.',
      },
      {
        title: 'Video Analytics',
        desc: 'AI-powered video analysis including perimeter crossing, loitering detection, crowd monitoring, and facial recognition.',
      },
      {
        title: 'Integrated Security Management',
        desc: 'Unified platform to manage all electronic security systems from a single dashboard with real-time reporting.',
      },
    ],
    whyUs: [
      'Partnerships with globally recognized technology brands',
      'In-house design, installation, and commissioning teams',
      'Full system integration and interoperability',
      'Preventive and reactive maintenance contracts',
      'Remote diagnostics and support',
      'Scalable solutions for any size of operation',
    ],
    sectors: ['Corporate Offices', 'Data Centers', 'Government Buildings', 'Healthcare Facilities', 'Education Institutions', 'Industrial Plants'],
    cta: 'Get a Free Tech Consultation',
    ctaLink: '/contact',
    color: 'blue',
  },

  'central-monitoring': {
    slug: 'central-monitoring',
    icon: HiOutlineDesktopComputer,
    banner: '/documents/navlink_banner/Security/Central.jpg',
    eyebrow: 'What We Offer',
    title: 'Central Monitoring Station',
    tagline: 'Round-the-clock surveillance from our state-of-the-art monitoring command center.',
    intro: `FALCON's Central Monitoring Station (CMS) is the nerve center of our electronic security operations. Operating
    24 hours a day, 365 days a year, our highly trained monitoring operators receive, assess, and respond to security
    alerts from hundreds of client sites across Bangladesh — ensuring immediate action and uninterrupted protection.`,
    highlights: [
      { value: '24/7', label: 'Live Monitoring' },
      { value: '365', label: 'Days Per Year' },
      { value: '<60s', label: 'Response Time' },
      { value: '100%', label: 'Redundant Systems' },
    ],
    features: [
      {
        title: 'Alarm Receiving & Response',
        desc: 'Instant reception and verification of intrusion, fire, and panic alarms with immediate escalation protocols.',
      },
      {
        title: 'Live CCTV Monitoring',
        desc: 'Real-time surveillance of client sites by trained operators who can detect suspicious activity and intervene proactively.',
      },
      {
        title: 'Remote Video Verification',
        desc: 'Before dispatching response units, our operators verify incidents via live video feeds to reduce false alarm call-outs.',
      },
      {
        title: 'Guard Tour Monitoring',
        desc: 'Real-time tracking of guard patrol routes via GPS and checkpoint scanning to ensure compliance and accountability.',
      },
      {
        title: 'Escalation & Dispatch',
        desc: 'Structured escalation procedures ensuring rapid dispatch of response teams, law enforcement, or emergency services.',
      },
      {
        title: 'Reporting & Analytics',
        desc: 'Detailed incident logs, trend analysis, and management reports delivered to clients on a scheduled basis.',
      },
    ],
    whyUs: [
      'Redundant power and communication infrastructure',
      'ISO-certified monitoring procedures',
      'Multi-layered data backup and disaster recovery',
      'Dedicated operators per client segment',
      'Real-time client portal access',
      'Seamless integration with on-site systems',
    ],
    sectors: ['Financial Institutions', 'Industrial Estates', 'Retail Chains', 'Logistics & Warehouses', 'Residential Communities', 'Government Facilities'],
    cta: 'Connect to Our Monitoring Center',
    ctaLink: '/contact',
    color: 'purple',
  },

  'security-consulting': {
    slug: 'security-consulting',
    icon: HiOutlineLightBulb,
    banner: '/documents/navlink_banner/Security/Consult.jpeg',
    eyebrow: 'What We Offer',
    title: 'Security Consulting',
    tagline: 'Expert advisory services to identify vulnerabilities and build robust security strategies.',
    intro: `FALCON's Security Consulting team comprises seasoned professionals with decades of experience in corporate,
    industrial, and governmental security. We work closely with clients to understand their unique risk environment and
    design bespoke security strategies — from risk and vulnerability assessments through to full security master planning.`,
    highlights: [
      { value: '32+', label: 'Years Expertise' },
      { value: '400+', label: 'Assessments Done' },
      { value: 'ISO', label: 'Certified Methods' },
      { value: 'End-to-End', label: 'Advisory' },
    ],
    features: [
      {
        title: 'Security Risk Assessment',
        desc: 'Comprehensive evaluation of threats, vulnerabilities, and existing countermeasures to establish an accurate risk baseline.',
      },
      {
        title: 'Security Master Planning',
        desc: 'Strategic long-term security plans aligned with business objectives, regulatory requirements, and growth projections.',
      },
      {
        title: 'Policy & Procedure Development',
        desc: 'Drafting and reviewing security policies, standard operating procedures, and emergency response plans.',
      },
      {
        title: 'Security Audits',
        desc: 'Independent audits of existing security arrangements against recognized benchmarks and industry best practice.',
      },
      {
        title: 'Incident Investigation',
        desc: 'Professional post-incident forensic reviews to establish root causes and prevent recurrence.',
      },
      {
        title: 'Pre-Construction Security Design',
        desc: 'Crime prevention through environmental design (CPTED) consultancy integrated into new construction projects.',
      },
    ],
    whyUs: [
      'Certified Security Professional (CSP) advisors',
      'Independent, unbiased recommendations',
      'Tailored deliverables — not templated reports',
      'Regulatory compliance expertise (BNPA, BSB)',
      'Trusted by diplomatic missions and MNCs',
      'Actionable, prioritized recommendations',
    ],
    sectors: ['Diplomatic Missions', 'Multinational Corporations', 'NGOs & Development Agencies', 'Real Estate Developers', 'Banks & Financial Institutions', 'Government Bodies'],
    cta: 'Book a Consulting Session',
    ctaLink: '/contact',
    color: 'yellow',
  },

  'cash-custodial': {
    slug: 'cash-custodial',
    icon: HiOutlineCash,
    eyebrow: 'What We Offer',
    title: 'Cash Custodial Services',
    tagline: 'Secure, reliable cash management and transit solutions for financial institutions and businesses.',
    intro: `FALCON's Cash Custodial Services division delivers end-to-end cash management solutions designed for banks,
    financial institutions, retail operators, and businesses that handle significant volumes of currency. Our armored
    vehicles, trained cash custodians, and stringent operational protocols ensure the secure movement and management
    of your cash assets at every stage.`,
    highlights: [
      { value: '100%', label: 'Secure Transit' },
      { value: 'Armored', label: 'Fleet Vehicles' },
      { value: '24/7', label: 'Operations' },
      { value: 'GPS', label: 'Tracked Routes' },
    ],
    features: [
      {
        title: 'Cash in Transit (CIT)',
        desc: 'Secure transportation of cash and valuables between client premises, banks, and vaults using armored vehicles and trained escorts.',
      },
      {
        title: 'ATM Cash Loading & Management',
        desc: 'Scheduled ATM replenishment, balancing, and first-line maintenance services across banking networks.',
      },
      {
        title: 'Vault Management',
        desc: 'Secure overnight vaulting of cash, valuables, and important documents in our certified vault facilities.',
      },
      {
        title: 'Cash Processing',
        desc: 'Automated sorting, counting, and authentication of banknotes using advanced currency processing equipment.',
      },
      {
        title: 'Cash Logistics Planning',
        desc: 'Route planning, scheduling, and optimization of all cash movement activities to minimize risk and cost.',
      },
      {
        title: 'Smart Safe Solutions',
        desc: 'Deployment and management of smart safes at retail and branch locations with real-time cash reporting.',
      },
    ],
    whyUs: [
      'Licensed and insured cash custodial operations',
      'Specially trained and vetted custodians',
      'GPS-tracked, armored vehicle fleet',
      'Real-time shipment visibility for clients',
      'Stringent chain-of-custody documentation',
      'Compliance with Bangladesh Bank directives',
    ],
    sectors: ['Commercial Banks', 'Microfinance Institutions', 'Retail Chains', 'Fuel Stations', 'ATM Networks', 'Insurance Companies'],
    cta: 'Secure Your Cash Operations',
    ctaLink: '/contact',
    color: 'green',
  },

  'facility-management': {
    slug: 'facility-management',
    icon: HiOutlineOfficeBuilding,
    eyebrow: 'What We Offer',
    title: 'Facility Management',
    tagline: 'Integrated facility services that keep your buildings running safely and efficiently.',
    intro: `Our Facility Management Services ensure that every aspect of your property — buildings, grounds, and
    infrastructure — operates seamlessly, comfortably, and safely. Initially introduced to complement our Manned
    Guarding Services, this expanded offering emerged from clients seeking a comprehensive, "one-stop" solution.
    We deliver a complete range of facility support including cleaners, logistics staff, plumbers, electricians,
    gardeners, receptionists, concierge staff, and CCTV operators.`,
    highlights: [
      { value: 'One-Stop', label: 'Solution' },
      { value: '100+', label: 'Sites Managed' },
      { value: 'ISO', label: 'Quality Standards' },
      { value: '24/7', label: 'Support Available' },
    ],
    features: [
      {
        title: 'Cleaning & Housekeeping',
        desc: 'Professional cleaning teams maintaining hygienic, presentable environments across all types of commercial and residential properties.',
      },
      {
        title: 'MEP Maintenance',
        desc: 'Mechanical, electrical, and plumbing maintenance by certified technicians ensuring uninterrupted building operations.',
      },
      {
        title: 'Grounds & Landscaping',
        desc: 'Professional gardening, landscaping, and grounds maintenance keeping your exterior spaces safe and attractive.',
      },
      {
        title: 'Reception & Concierge',
        desc: 'Front-of-house management combining guest services with security awareness for a professional first impression.',
      },
      {
        title: 'Logistics & Support Staff',
        desc: 'Trained logistics personnel to handle internal mail, deliveries, meeting room setup, and office support functions.',
      },
      {
        title: 'CCTV & Systems Operations',
        desc: 'On-site operators managing CCTV control rooms, access control systems, and building management platforms.',
      },
    ],
    whyUs: [
      'Reliable, scalable, and cost-effective packages',
      'Customized service bundles for every client',
      'Highly trained and professional staff',
      'Compliance with industry safety standards',
      'Transparent reporting and KPI tracking',
      'Single point of contact for all facility needs',
    ],
    sectors: ['Commercial Offices', 'Shopping Malls', 'Hotels & Hospitality', 'Hospitals & Clinics', 'Educational Campuses', 'Residential Complexes'],
    cta: 'Get a Facility Management Quote',
    ctaLink: '/contact',
    color: 'teal',
  },

  'technical-services': {
    slug: 'technical-services',
    icon: HiOutlineCog, // Updated to reference the imported gear icon
    eyebrow: 'What We Offer',
    title: 'Technical Services',
    tagline: 'Expert installation, maintenance, and support for all your security and building technology.',
    intro: `FALCON's Technical Services division provides comprehensive installation, commissioning, and maintenance
    support for the full range of electronic security and building technology systems. Our certified engineers ensure
    that all systems perform at optimal levels, with rapid response maintenance contracts keeping downtime to an
    absolute minimum.`,
    highlights: [
      { value: 'Certified', label: 'Engineers' },
      { value: '<4hr', label: 'Response SLA' },
      { value: 'AMC', label: 'Contracts Available' },
      { value: 'End-to-End', label: 'Support' },
    ],
    features: [
      {
        title: 'System Design & Engineering',
        desc: 'Technical design and engineering of security and building systems aligned to site requirements and client specifications.',
      },
      {
        title: 'Installation & Commissioning',
        desc: 'Professional installation of CCTV, access control, fire alarm, intruder detection, PA systems, and more.',
      },
      {
        title: 'Annual Maintenance Contracts (AMC)',
        desc: 'Structured preventive and corrective maintenance programs ensuring maximum system availability and reliability.',
      },
      {
        title: 'System Upgrades & Retrofits',
        desc: 'Upgrading legacy systems to modern platforms, extending useful life and improving performance without full replacement.',
      },
      {
        title: 'Network & Infrastructure',
        desc: 'Structured cabling, network switches, UPS, and power distribution infrastructure for security systems.',
      },
      {
        title: 'After-Sales Support',
        desc: '24/7 technical helpdesk and on-call field engineers for rapid fault diagnosis and resolution.',
      },
    ],
    whyUs: [
      'Manufacturer-certified installation engineers',
      'Multi-brand technical competency',
      'Spare parts inventory for rapid repairs',
      'Online and on-site support options',
      'Fully documented system handover',
      'Warranty management and tracking',
    ],
    sectors: ['Corporate Campuses', 'Industrial Facilities', 'Retail Outlets', 'Healthcare Complexes', 'Government Buildings', 'Financial Institutions'],
    cta: 'Request a Technical Survey',
    ctaLink: '/contact',
    color: 'orange',
  },

  'hr-outsourcing': {
    slug: 'hr-outsourcing',
    icon: HiOutlineUserGroup,
    eyebrow: 'What We Offer',
    title: 'HR & Outsourcing',
    tagline: 'Flexible workforce solutions that deliver skilled, compliant personnel exactly when you need them.',
    intro: `FALCON's HR & Outsourcing division helps organizations reduce operational complexity by providing fully
    managed, skilled workforce solutions. From security personnel to administrative and support staff, we handle all
    aspects of recruitment, vetting, onboarding, payroll, HR compliance, and performance management — leaving you
    free to focus on your core business.`,
    highlights: [
      { value: '5,000+', label: 'Personnel Managed' },
      { value: 'Full', label: 'HR Compliance' },
      { value: 'Flexible', label: 'Engagement Models' },
      { value: 'Payroll', label: 'Management Included' },
    ],
    features: [
      {
        title: 'Manpower Outsourcing',
        desc: 'Supply of security, facility, administrative, and support personnel on short-term, long-term, or project basis.',
      },
      {
        title: 'Recruitment & Vetting',
        desc: 'End-to-end talent acquisition with rigorous background checks, reference verification, and credential validation.',
      },
      {
        title: 'Payroll Management',
        desc: 'Accurate, on-time payroll processing including tax computation, provident fund, and statutory deductions.',
      },
      {
        title: 'Training & Onboarding',
        desc: 'Role-specific induction training ensuring all deployed personnel meet client requirements from day one.',
      },
      {
        title: 'Performance Management',
        desc: 'Regular performance reviews, KPI tracking, and disciplinary management on behalf of the client organization.',
      },
      {
        title: 'HR Compliance & Reporting',
        desc: 'Full compliance with Bangladesh Labour Act requirements, with regular reporting and audit-ready documentation.',
      },
    ],
    whyUs: [
      'Experienced HR and Labour Law specialists',
      'Flexible deployment — scale up or down as needed',
      'Single invoice, zero employment liability for clients',
      'Dedicated HR account manager per client',
      'Comprehensive employee welfare programs',
      'Rapid mobilization — 48-hour deployment capability',
    ],
    sectors: ['Banks & Financial Institutions', 'Garment & Manufacturing', 'Logistics & Supply Chain', 'Hospitality & Tourism', 'NGOs & INGOs', 'Diplomatic Missions'],
    cta: 'Discuss Your Workforce Needs',
    ctaLink: '/contact',
    color: 'indigo',
  },
}