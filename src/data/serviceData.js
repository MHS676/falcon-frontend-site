import {
  HiOutlineShieldCheck,
  HiOutlineLocationMarker,
  HiOutlineLightningBolt,
  HiOutlineCalendar,
  HiOutlineClipboardCheck,
  HiOutlineMap,
  HiOutlineExclamationCircle,
  HiOutlineEye,
  HiOutlineSearch,
  HiOutlineCash,
  HiOutlineChip,
  HiOutlineArchive,
  HiOutlineDatabase,
  HiOutlineAcademicCap,
  HiOutlineLockClosed,
  HiOutlineKey,
  HiOutlineTruck,
} from 'react-icons/hi'

export const SERVICE_PAGES = {
  // ── Physical Protection ──────────────────────────────────────────────────────
  'close-protection': {
    slug: 'close-protection',
    icon: HiOutlineShieldCheck,
    banner: '/documents/navlink_banner/range%20of%20services/close.jpeg',
    eyebrow: 'Range of Services',
    title: 'Close Protection',
    tagline: 'Discreet, highly-trained personal protection for executives, VIPs, and high-profile individuals.',
    intro: `FALCON's Close Protection service provides a comprehensive personal security solution for corporate executives,
    diplomats, high-net-worth individuals, and visiting dignitaries. Our Close Protection Officers (CPOs) are rigorously
    selected, trained to international standards, and operate with the utmost discretion — ensuring your safety without
    disrupting your daily routine or public profile.`,
    highlights: [
      { value: 'Discreet', label: 'Low-Profile Operation' },
      { value: 'CPO', label: 'Certified Officers' },
      { value: '24/7', label: 'Coverage Available' },
      { value: 'Bespoke', label: 'Risk-Based Plans' },
    ],
    features: [
      { title: 'Personal Security Detail', desc: 'Dedicated CPOs providing one-on-one or team-based protection at all times, at home, in transit, or at public engagements.' },
      { title: 'Advance Reconnaissance', desc: 'Pre-visit site surveys, route reconnaissance, and threat assessment before any planned movement or event attendance.' },
      { title: 'Secure Transportation', desc: 'Coordinated protective driving with trained defensive driving officers and vetted, hardened vehicles when required.' },
      { title: 'Threat & Risk Assessment', desc: 'Ongoing personal threat assessment factoring lifestyle, travel patterns, and current threat environment.' },
      { title: 'Residential Security', desc: 'Static and mobile residential protection ensuring the safety of the principal\'s home and immediate family members.' },
      { title: 'Travel Security', desc: 'End-to-end travel security management for domestic and international trips including airport protocols and hotel security.' },
    ],
    whyUs: [
      'Internationally certified Close Protection Officers',
      'Military and law enforcement backgrounds',
      'Discreet, professional appearance',
      'Bespoke threat-based protection plans',
      'Secure communications and coordination',
      'Experience protecting diplomats and MNC executives',
    ],
    sectors: ['Corporate Executives', 'Diplomatic Personnel', 'High-Net-Worth Individuals', 'Visiting Dignitaries', 'Celebrities & Public Figures', 'NGO Senior Staff'],
    cta: 'Request Close Protection',
    ctaLink: '/contact',
    color: 'red',
    group: 'Physical Protection',
  },

  'site-protection': {
    slug: 'site-protection',
    icon: HiOutlineLocationMarker,
    banner: '/documents/navlink_banner/range%20of%20services/Site%20Protection1.jpeg',
    eyebrow: 'Range of Services',
    title: 'Site Protection',
    tagline: 'Comprehensive on-site security guarding for your premises, assets, and personnel.',
    intro: `FALCON's Site Protection service provides dedicated, uniformed security coverage for commercial, industrial,
    and institutional facilities across Bangladesh. Our site-specific security plans are developed based on a thorough
    assessment of each client's unique risk profile — ensuring the right personnel, in the right numbers, with the right
    training are deployed at every location.`,
    highlights: [
      { value: '24/7', label: 'On-Site Guarding' },
      { value: '64', label: 'Districts Covered' },
      { value: '5,000+', label: 'Guards Deployed' },
      { value: 'Site-Specific', label: 'Security Plans' },
    ],
    features: [
      { title: 'Static Guarding', desc: 'Uniformed officers stationed at key control points providing a visible deterrent and access management.' },
      { title: 'Perimeter Security', desc: 'Patrol and monitoring of site perimeters to prevent unauthorized entry, trespass, and theft.' },
      { title: 'Access Control', desc: 'Strict management of all entry and exit points using manual or technology-assisted access control.' },
      { title: 'Asset Protection', desc: 'Protection of equipment, machinery, inventory, and high-value assets from theft, vandalism, and damage.' },
      { title: 'Emergency Response', desc: 'First-response capability for fire, medical, intrusion, or any other on-site emergency situation.' },
      { title: 'Security Reporting', desc: 'Detailed daily occurrence books, incident reports, and management summaries delivered to clients.' },
    ],
    whyUs: [
      'Site-specific security surveys and risk assessments',
      'Flexible post configurations and shift patterns',
      'Regular supervisory visits and audits',
      'Integration with electronic security systems',
      'Fully uniformed and licensed security officers',
      'Rapid replacement of absent posts',
    ],
    sectors: ['Industrial & Manufacturing', 'Construction Sites', 'Warehouses & Logistics', 'Embassies & Consulates', 'Office Buildings', 'Healthcare Facilities'],
    cta: 'Get a Site Security Assessment',
    ctaLink: '/contact',
    color: 'blue',
    group: 'Physical Protection',
  },

  'quick-response': {
    slug: 'quick-response',
    icon: HiOutlineLightningBolt,
    banner: '/documents/navlink_banner/range%20of%20services/Quick%20Response.jpeg',
    eyebrow: 'Range of Services',
    title: 'Quick Response',
    tagline: 'Rapid deployment of trained response teams to any security incident, anywhere, anytime.',
    intro: `FALCON's Quick Response Service (QRS) provides clients with the assurance of an immediate, professional
    security response when needed most. Whether triggered by an alarm activation, a reported intrusion, or an escalating
    situation, our strategically positioned response teams are on scene within minutes — equipped, trained, and ready
    to act decisively.`,
    highlights: [
      { value: '<10min', label: 'Target Response Time' },
      { value: 'Armed', label: 'Response Options' },
      { value: '24/7', label: 'Operational Readiness' },
      { value: 'GPS', label: 'Fleet Tracking' },
    ],
    features: [
      { title: 'Alarm Response', desc: 'Immediate dispatch to alarm activations with on-site assessment, verification, and appropriate action.' },
      { title: 'Armed Response', desc: 'Licensed armed response officers available for high-risk client profiles requiring enhanced deterrence capability.' },
      { title: 'Intruder Apprehension', desc: 'Trained officers capable of safely detaining intruders pending handover to law enforcement authorities.' },
      { title: 'Patrol & Presence', desc: 'Random and scheduled patrol drives by response vehicles acting as a mobile deterrent across client sites.' },
      { title: 'Emergency Standby', desc: 'Response teams on standby specifically allocated to priority clients during elevated threat periods.' },
      { title: 'Incident Management', desc: 'Full incident command and control capability with direct liaison to police and emergency services.' },
    ],
    whyUs: [
      'Strategically located response hubs across Dhaka',
      'GPS-tracked response fleet',
      'Direct integration with Central Monitoring Station',
      'Licensed and trained response officers',
      'Documented response time reporting',
      'Seamless escalation to law enforcement',
    ],
    sectors: ['Residential Communities', 'Retail Outlets', 'Banking Branches', 'Industrial Sites', 'Healthcare Facilities', 'Schools & Campuses'],
    cta: 'Activate Quick Response Coverage',
    ctaLink: '/contact',
    color: 'orange',
    group: 'Physical Protection',
  },

  'event-management': {
    slug: 'event-management',
    icon: HiOutlineCalendar,
    banner: '/documents/navlink_banner/range%20of%20services/Event%20Management%20Security1.jpeg',
    eyebrow: 'Range of Services',
    title: 'Event Management Security',
    tagline: 'Professional security solutions ensuring every event runs safely, smoothly, and successfully.',
    intro: `FALCON provides specialist event security management for corporate functions, public gatherings, concerts,
    sports events, and diplomatic receptions. Our event security teams are trained in crowd management, access control,
    and emergency response — ensuring a seamless security operation that protects attendees and enables your event to
    proceed without disruption.`,
    highlights: [
      { value: '500+', label: 'Events Secured' },
      { value: 'Crowd', label: 'Management Trained' },
      { value: 'Full', label: 'Event Planning' },
      { value: '24/7', label: 'On-Site Support' },
    ],
    features: [
      { title: 'Event Security Planning', desc: 'Detailed security plans covering threat assessment, venue mapping, access control strategy, and emergency procedures.' },
      { title: 'Crowd Management', desc: 'Trained officers managing crowd flow, preventing overcrowding, and maintaining a safe and comfortable atmosphere.' },
      { title: 'VIP & Guest Management', desc: 'Discreet security management for high-profile guests, VIP areas, and sensitive meeting zones within events.' },
      { title: 'Access Verification', desc: 'Ticketing, accreditation, and credential verification to ensure only authorized attendees enter the venue.' },
      { title: 'Emergency Response Planning', desc: 'Evacuation plans, first aid coordination, and dedicated emergency response teams within the event perimeter.' },
      { title: 'Post-Event Security', desc: 'Securing venue assets, managing crowd dispersal, and conducting post-event sweeps after all attendees have departed.' },
    ],
    whyUs: [
      'Experienced event security coordinators',
      'Trained in crowd psychology and management',
      'Scalable teams from 10 to 500+ officers',
      'Full event security planning documentation',
      'Coordination with police and venue management',
      'Track record across corporate and public events',
    ],
    sectors: ['Corporate Events', 'Concerts & Festivals', 'Sports Events', 'Diplomatic Functions', 'Trade Exhibitions', 'Government Ceremonies'],
    cta: 'Plan Your Event Security',
    ctaLink: '/contact',
    color: 'purple',
    group: 'Physical Protection',
  },

  // ── Assessment & Intelligence ────────────────────────────────────────────────
  'security-survey': {
    slug: 'security-survey',
    icon: HiOutlineClipboardCheck,
    banner: '/documents/navlink_banner/range%20of%20services/Security%20Survey%20.jpg',
    eyebrow: 'Range of Services',
    title: 'Security Survey',
    tagline: 'Systematic on-site surveys delivering a clear picture of your current security posture.',
    intro: `A FALCON Security Survey provides a structured, physical evaluation of your premises, operations, and
    existing security measures. Our expert surveyors assess all aspects of your security environment — from physical
    barriers and access control to lighting, CCTV coverage, and guard procedures — producing a detailed report with
    prioritized recommendations for improvement.`,
    highlights: [
      { value: 'On-Site', label: 'Physical Survey' },
      { value: 'Detailed', label: 'Gap Analysis' },
      { value: 'Prioritized', label: 'Recommendations' },
      { value: 'Expert', label: 'Certified Surveyors' },
    ],
    features: [
      { title: 'Physical Security Review', desc: 'Evaluation of all physical security measures including fencing, barriers, gates, lighting, and CCTV coverage.' },
      { title: 'Access Control Assessment', desc: 'Review of all access points, entry procedures, visitor management, and credential control systems.' },
      { title: 'Guard Force Assessment', desc: 'Evaluation of existing guard numbers, deployment, procedures, training level, and supervision quality.' },
      { title: 'Gap Analysis', desc: 'Identification and documentation of security gaps, weaknesses, and areas of non-compliance.' },
      { title: 'Recommendations Report', desc: 'Comprehensive written report with prioritized, practical recommendations and indicative cost guidance.' },
      { title: 'Follow-Up Review', desc: 'Optional follow-up survey to verify implementation of recommended improvements and measure progress.' },
    ],
    whyUs: [
      'Independent and objective assessment',
      'Certified Security Professional (CSP) surveyors',
      'Structured methodology aligned to international standards',
      'Clear, actionable written deliverables',
      'Rapid turnaround for urgent requirements',
      'Experience across all industry sectors',
    ],
    sectors: ['Commercial Buildings', 'Banks & Financial Institutions', 'Embassies & Missions', 'Industrial Facilities', 'Hotels & Hospitality', 'Healthcare Campuses'],
    cta: 'Book a Security Survey',
    ctaLink: '/contact',
    color: 'teal',
    group: 'Assessment & Intelligence',
  },

  'site-assessment': {
    slug: 'site-assessment',
    icon: HiOutlineMap,
    banner: '/documents/navlink_banner/range%20of%20services/Site%20Assessment1.jpeg',
    eyebrow: 'Range of Services',
    title: 'Site Assessment',
    tagline: 'In-depth evaluation of your site\'s security environment, threats, and operational vulnerabilities.',
    intro: `FALCON's Site Assessment service goes beyond a standard survey — delivering a comprehensive, intelligence-
    informed evaluation of all security dimensions of your site. Our assessors combine physical inspection with
    operational analysis, threat intelligence, and stakeholder consultation to produce a holistic security baseline
    and actionable improvement plan.`,
    highlights: [
      { value: 'Holistic', label: '360° Site Review' },
      { value: 'Intel', label: 'Informed Analysis' },
      { value: 'Actionable', label: 'Improvement Plan' },
      { value: 'All Sectors', label: 'Experience' },
    ],
    features: [
      { title: 'Perimeter & Environment Analysis', desc: 'Assessment of site perimeter integrity, surrounding environment, natural surveillance, and standoff distances.' },
      { title: 'Operational Security Review', desc: 'Evaluation of day-to-day security operations, SOPs, incident reporting, and command structures.' },
      { title: 'Technology Assessment', desc: 'Review of all installed electronic security systems for adequacy, condition, coverage, and integration.' },
      { title: 'Threat Environment Analysis', desc: 'Local threat intelligence briefing contextualizing the specific risks facing the site.' },
      { title: 'Workforce & Contractor Review', desc: 'Assessment of personnel security practices including vetting, access rights, and contractor management.' },
      { title: 'Security Improvement Roadmap', desc: 'Phased, prioritized improvement roadmap with short, medium, and long-term recommendations.' },
    ],
    whyUs: [
      'Experienced multi-discipline assessment teams',
      'Structured assessment methodology',
      'Engagement with key site stakeholders',
      'Delivered within agreed timescales',
      'Confidential and professionally managed',
      'Suitable for new facilities or operational reviews',
    ],
    sectors: ['New Construction Projects', 'Industrial Estates', 'Port & Airport Facilities', 'Power & Utilities', 'Healthcare Complexes', 'Government Buildings'],
    cta: 'Request a Site Assessment',
    ctaLink: '/contact',
    color: 'blue',
    group: 'Assessment & Intelligence',
  },

  'risk-assessment': {
    slug: 'risk-assessment',
    icon: HiOutlineExclamationCircle,
    banner: '/documents/navlink_banner/range%20of%20services/Risk%20Assessment%20.jpeg',
    eyebrow: 'Range of Services',
    title: 'Risk Assessment',
    tagline: 'Systematic identification, analysis, and evaluation of security risks to your organization.',
    intro: `FALCON's Risk Assessment service provides organizations with a rigorous, evidence-based analysis of the
    threats and risks they face. Our methodology combines threat identification, likelihood analysis, consequence
    evaluation, and existing control assessment — enabling clients to make informed, risk-proportionate security
    investment decisions.`,
    highlights: [
      { value: 'ISO', label: '31000 Aligned' },
      { value: 'Evidence', label: 'Based Methodology' },
      { value: 'Quantified', label: 'Risk Register' },
      { value: 'Board-Ready', label: 'Reporting' },
    ],
    features: [
      { title: 'Threat Identification', desc: 'Structured identification of all credible threats — criminal, terrorist, environmental, and insider — relevant to the organization.' },
      { title: 'Likelihood Analysis', desc: 'Evidence-based assessment of the probability of each identified threat materializing based on current intelligence.' },
      { title: 'Consequence Evaluation', desc: 'Assessment of potential impact across life safety, operational, financial, and reputational dimensions.' },
      { title: 'Control Effectiveness Review', desc: 'Evaluation of existing security controls and their effectiveness in reducing residual risk levels.' },
      { title: 'Risk Register Development', desc: 'Production of a comprehensive risk register mapping all risks, current controls, and residual risk ratings.' },
      { title: 'Treatment Plan', desc: 'Recommended risk treatment plan with options to accept, mitigate, transfer, or avoid each identified risk.' },
    ],
    whyUs: [
      'ISO 31000 risk management framework',
      'Experienced risk assessment practitioners',
      'Tailored to organizational context',
      'Suitable for board-level risk reporting',
      'Defensible, documented methodology',
      'Regular review and update services available',
    ],
    sectors: ['Multinational Corporations', 'Banks & Insurance', 'NGOs & UN Agencies', 'Pharmaceutical Companies', 'Energy & Utilities', 'Diplomatic Missions'],
    cta: 'Commission a Risk Assessment',
    ctaLink: '/contact',
    color: 'red',
    group: 'Assessment & Intelligence',
  },

  'threat-assessment': {
    slug: 'threat-assessment',
    icon: HiOutlineEye,
    banner: '/documents/navlink_banner/range%20of%20services/Threat%20Assessment%20.jpeg',
    eyebrow: 'Range of Services',
    title: 'Threat Assessment',
    tagline: 'Expert analysis of specific threats targeting your organization, personnel, or operations.',
    intro: `FALCON's Threat Assessment service provides focused, intelligence-led analysis of specific threats
    identified against an organization, individual, or facility. Whether arising from criminal activity, political
    instability, targeted hostility, or natural hazards, our threat assessors deliver clear, calibrated assessments
    that inform protective decision-making at every level.`,
    highlights: [
      { value: 'Intel', label: 'Led Analysis' },
      { value: 'Focused', label: 'Threat Profiling' },
      { value: 'Actionable', label: 'Protective Advice' },
      { value: 'Rapid', label: 'Turnaround Available' },
    ],
    features: [
      { title: 'Threat Actor Profiling', desc: 'Detailed profiling of identified threat actors — capabilities, intentions, history, and likely courses of action.' },
      { title: 'Hostile Reconnaissance Detection', desc: 'Assessment of indicators of hostile pre-attack surveillance or planning activity targeting your organization.' },
      { title: 'Political & Civil Threat Analysis', desc: 'Evaluation of political instability, civil unrest, and protest activity that may pose risks to operations.' },
      { title: 'Cyber-Physical Threat Analysis', desc: 'Assessment of threats at the intersection of cyber and physical security including insider threats.' },
      { title: 'Travel Threat Briefings', desc: 'Pre-travel threat assessments for personnel travelling to high-risk or unfamiliar locations.' },
      { title: 'Escalation Monitoring', desc: 'Ongoing monitoring of a defined threat with regular updates and escalation alerts as required.' },
    ],
    whyUs: [
      'Intelligence community and military backgrounds',
      'Access to open-source and commercial intelligence',
      'Objective, calibrated threat ratings',
      'Rapid assessment capability for urgent situations',
      'Confidential and secure delivery',
      'Integration with broader risk management processes',
    ],
    sectors: ['Diplomatic Missions', 'Financial Institutions', 'Senior Executives', 'Journalists & Activists', 'Aid Organizations', 'Energy Companies'],
    cta: 'Request a Threat Assessment',
    ctaLink: '/contact',
    color: 'indigo',
    group: 'Assessment & Intelligence',
  },

  'vulnerability-assessment': {
    slug: 'vulnerability-assessment',
    icon: HiOutlineSearch,
    banner: '/documents/navlink_banner/range%20of%20services/Vulnerability-Assessment.jpeg',
    eyebrow: 'Range of Services',
    title: 'Vulnerability Assessment',
    tagline: 'Identifying weaknesses in your security posture before adversaries can exploit them.',
    intro: `FALCON's Vulnerability Assessment service systematically identifies and evaluates weaknesses across your
    physical security, operational procedures, and technology systems. By thinking like an adversary, our assessors
    expose exploitable gaps and provide a clear remediation roadmap — strengthening your overall security resilience
    before an incident occurs.`,
    highlights: [
      { value: 'Adversarial', label: 'Perspective Testing' },
      { value: 'Physical', label: 'Penetration Testing' },
      { value: 'Full Report', label: 'with Remediation' },
      { value: 'All Sectors', label: 'Experience' },
    ],
    features: [
      { title: 'Physical Penetration Testing', desc: 'Controlled attempts to breach physical security measures, testing response procedures and detection capability.' },
      { title: 'Access Control Testing', desc: 'Testing of access control systems, guard alertness, and visitor management procedures for exploitable weaknesses.' },
      { title: 'CCTV Blind Spot Analysis', desc: 'Mapping of CCTV blind spots, dead zones, and coverage gaps that could be exploited by adversaries.' },
      { title: 'Guard Procedure Testing', desc: 'Covert testing of guard compliance with SOPs, patrol diligence, and emergency response capability.' },
      { title: 'Social Engineering Testing', desc: 'Controlled social engineering scenarios testing personnel awareness and resistance to manipulation.' },
      { title: 'Remediation Roadmap', desc: 'Prioritized remediation plan addressing all identified vulnerabilities with implementation guidance.' },
    ],
    whyUs: [
      'Controlled, authorized testing methodology',
      'Experienced physical security testers',
      'Detailed, evidence-based findings reports',
      'Constructive, non-confrontational approach',
      'Full debrief session with management team',
      'Retest option to verify remediation',
    ],
    sectors: ['Banks & Financial Institutions', 'Data Centers', 'Government Facilities', 'Healthcare Institutions', 'Critical Infrastructure', 'Embassies & Missions'],
    cta: 'Request a Vulnerability Assessment',
    ctaLink: '/contact',
    color: 'yellow',
    group: 'Assessment & Intelligence',
  },

  // ── Cash & Records ───────────────────────────────────────────────────────────
  'cash-in-transit': {
    slug: 'cash-in-transit',
    icon: HiOutlineCash,
    eyebrow: 'Range of Services',
    title: 'Cash in Transit',
    tagline: 'Secure, insured transportation of cash and valuables between your locations.',
    intro: `FALCON's Cash in Transit (CIT) service provides secure, end-to-end transportation of cash, cheques,
    and high-value items between banks, businesses, and vaults across Bangladesh. Using armored vehicles, trained
    custodians, and GPS-monitored routes, we ensure your assets arrive safely and on time — every time.`,
    highlights: [
      { value: 'Armored', label: 'Vehicles' },
      { value: 'GPS', label: 'Live Tracking' },
      { value: 'Insured', label: 'Shipments' },
      { value: '24/7', label: 'Operations' },
    ],
    features: [
      { title: 'Scheduled CIT Runs', desc: 'Regular, planned cash collection and delivery on agreed schedules matching your operational requirements.' },
      { title: 'Ad-Hoc Transfers', desc: 'On-demand cash transportation for unplanned or urgent cash movement requirements.' },
      { title: 'High-Value Consignments', desc: 'Specialist transportation of high-value items including gold, jewellery, legal documents, and bearer instruments.' },
      { title: 'Bank-to-Bank Transfers', desc: 'Inter-branch and inter-bank cash movements coordinated with full chain-of-custody documentation.' },
      { title: 'Route Security', desc: 'Dynamic route planning and anti-surveillance protocols to reduce predictability and minimize interdiction risk.' },
      { title: 'Chain of Custody', desc: 'Full documentation trail from collection to delivery with digital and physical confirmation at every handover.' },
    ],
    whyUs: [
      'Licensed and insured CIT operations',
      'Armored and hardened vehicle fleet',
      'GPS-tracked with CMS oversight',
      'Trained and vetted custodial officers',
      'Compliance with Bangladesh Bank regulations',
      'Competitive, transparent pricing',
    ],
    sectors: ['Commercial Banks', 'Central Bank Branches', 'Retail Chains', 'Forex Bureaux', 'ATM Networks', 'Jewellery & Gold Traders'],
    cta: 'Secure Your Cash in Transit',
    ctaLink: '/contact',
    color: 'green',
    group: 'Cash & Records',
  },

  'atm-cash-management': {
    slug: 'atm-cash-management',
    icon: HiOutlineChip,
    eyebrow: 'Range of Services',
    title: 'ATM Cash Management',
    tagline: 'End-to-end ATM replenishment, balancing, and first-line maintenance services.',
    intro: `FALCON's ATM Cash Management service covers the full lifecycle of ATM cash operations for banks and
    payment networks across Bangladesh. From cash replenishment and balancing to first-line maintenance and incident
    response, our certified ATM teams keep your machines operational, compliant, and fully stocked at all times.`,
    highlights: [
      { value: '24/7', label: 'ATM Operations' },
      { value: 'FLM', label: 'First-Line Maintenance' },
      { value: 'Real-Time', label: 'Cash Monitoring' },
      { value: 'Nationwide', label: 'Coverage' },
    ],
    features: [
      { title: 'Cash Replenishment', desc: 'Scheduled and on-demand ATM replenishment with precise denomination management and balance reconciliation.' },
      { title: 'Cash Balancing & Reconciliation', desc: 'Accurate end-of-cycle cash balancing, cassette management, and variance investigation.' },
      { title: 'First-Line Maintenance (FLM)', desc: 'On-site first-line maintenance to clear jams, resolve errors, and restore ATM availability without waiting for vendor engineers.' },
      { title: 'Cash Forecasting', desc: 'Data-driven cash level forecasting to optimize replenishment frequency and reduce idle cash.' },
      { title: 'Incident Response', desc: 'Rapid response to ATM incidents including skimming detection, vandalism, and cash entrapment.' },
      { title: 'Compliance & Reporting', desc: 'Full audit-compliant reporting including cash movement records, balance sheets, and incident logs.' },
    ],
    whyUs: [
      'Certified ATM technicians and custodians',
      'Experience across major ATM platforms',
      'Real-time cash level monitoring',
      'Bangladesh Bank compliance expertise',
      'Reduced ATM downtime guarantee',
      'Nationwide deployment capability',
    ],
    sectors: ['Commercial Banks', 'Islamic Banks', 'MFS Providers', 'Payment Networks', 'Microfinance Institutions', 'ATM Deployers'],
    cta: 'Optimize Your ATM Operations',
    ctaLink: '/contact',
    color: 'blue',
    group: 'Cash & Records',
  },

  'document-archiving': {
    slug: 'document-archiving',
    icon: HiOutlineArchive,
    eyebrow: 'Range of Services',
    title: 'Document Archiving',
    tagline: 'Secure, organized, and retrievable physical document storage for your organization.',
    intro: `FALCON's Document Archiving service provides secure, climate-controlled physical storage for your
    organization's records, legal documents, contracts, and confidential files. With a systematic indexing and
    retrieval system, we ensure that your documents are protected from loss, damage, and unauthorized access —
    while remaining readily accessible when you need them.`,
    highlights: [
      { value: 'Climate', label: 'Controlled Storage' },
      { value: 'Indexed', label: 'Retrieval System' },
      { value: 'Secure', label: 'Chain of Custody' },
      { value: 'Compliant', label: 'with Regulations' },
    ],
    features: [
      { title: 'Secure Storage Facility', desc: 'Climate-controlled, fire-suppressed, and access-restricted facility protecting documents from environmental and security threats.' },
      { title: 'Document Indexing & Cataloguing', desc: 'Systematic cataloguing of all archived records enabling rapid, accurate retrieval on demand.' },
      { title: 'Collection & Delivery', desc: 'Scheduled pickup of documents from your premises and delivery of requested files back to your offices.' },
      { title: 'Retrieval Services', desc: 'Same-day or next-day retrieval of requested documents with digital scan option for urgent requirements.' },
      { title: 'Destruction Services', desc: 'Certified, witnessed destruction of documents that have passed their retention period with certificates of destruction.' },
      { title: 'Retention Management', desc: 'Automated retention period management ensuring documents are held for required durations and disposed of appropriately.' },
    ],
    whyUs: [
      'Purpose-built secure archive facility',
      'Full chain-of-custody documentation',
      'Regulatory compliance expertise',
      'Fast retrieval turnaround times',
      'Tamper-evident packaging and sealing',
      'Affordable long-term storage rates',
    ],
    sectors: ['Banks & Financial Institutions', 'Law Firms', 'Government Agencies', 'Healthcare Providers', 'Insurance Companies', 'Accounting Firms'],
    cta: 'Start Archiving Securely',
    ctaLink: '/contact',
    color: 'teal',
    group: 'Cash & Records',
  },

  'data-archiving': {
    slug: 'data-archiving',
    icon: HiOutlineDatabase,
    eyebrow: 'Range of Services',
    title: 'Data Archiving',
    tagline: 'Secure digital data storage and backup solutions protecting your critical information assets.',
    intro: `FALCON's Data Archiving service provides organizations with secure, structured digital storage for
    inactive or infrequently accessed data. By offloading data from primary systems to secure archive storage, we
    help reduce operational costs, improve system performance, and ensure compliance with data retention requirements
    — all while maintaining the ability to retrieve data quickly when needed.`,
    highlights: [
      { value: 'Encrypted', label: 'Digital Storage' },
      { value: 'Compliant', label: 'Data Retention' },
      { value: 'Rapid', label: 'Data Retrieval' },
      { value: 'Disaster', label: 'Recovery Ready' },
    ],
    features: [
      { title: 'Secure Digital Storage', desc: 'Encrypted, access-controlled digital archive storage for structured and unstructured data in any format.' },
      { title: 'Data Migration', desc: 'Secure migration of data from legacy systems to modern archive platforms with full integrity verification.' },
      { title: 'Retention Policy Management', desc: 'Automated enforcement of data retention policies ensuring data is held and disposed of in accordance with regulations.' },
      { title: 'Disaster Recovery Backup', desc: 'Offsite backup copies providing a resilient recovery option in the event of primary system failure or data loss.' },
      { title: 'Data Retrieval', desc: 'Rapid, indexed retrieval of archived data with audit logging of all access requests and downloads.' },
      { title: 'Compliance Reporting', desc: 'Regular compliance reports demonstrating adherence to data protection regulations and internal policies.' },
    ],
    whyUs: [
      'End-to-end encryption in transit and at rest',
      'Experienced data management professionals',
      'Multi-site redundancy for disaster recovery',
      'Compliance with Bangladesh data protection requirements',
      'Scalable storage — grow as you need',
      'Full audit trail of all data access events',
    ],
    sectors: ['Telecom Operators', 'Banks & Fintech', 'Healthcare Systems', 'Government Ministries', 'Insurance Companies', 'E-Commerce Platforms'],
    cta: 'Protect Your Data Assets',
    ctaLink: '/contact',
    color: 'indigo',
    group: 'Cash & Records',
  },

  // ── Technology & Training ────────────────────────────────────────────────────
  'training': {
    slug: 'training',
    icon: HiOutlineAcademicCap,
    banner: '/documents/navlink_banner/range%20of%20services/Training%20&%20Development%20.jpeg',
    eyebrow: 'Range of Services',
    title: 'Training & Development',
    tagline: 'Professional security training programs producing skilled, certified, and capable security personnel.',
    intro: `FALCON's Training & Development division operates Bangladesh's premier private security training programme.
    Our new National Training Centre located in Kaliganj — just 12 km from the airport — delivers comprehensive
    training for security guards, supervisors, and officers. In partnership with ALSOK Japan, we combine international
    best practice with local operational expertise to produce security professionals of the highest calibre.`,
    highlights: [
      { value: 'National', label: 'Training Centre' },
      { value: 'Certified', label: 'Programmes' },
      { value: 'Aviation', label: 'Specialist Unit' },
    ],
    features: [
      { title: 'Basic Security Guard Training', desc: 'Foundation training covering security principles, access control, patrol techniques, emergency response, and professional conduct.' },
      { title: 'Supervisor & Officer Development', desc: 'Advanced training for supervisory and officer-grade personnel covering command, reporting, and team leadership.' },
      { title: 'Specialist Security Training', desc: 'Specialized programmes including aviation security, close protection, crowd management, and crisis response.' },
      { title: 'Aviation Security Programme', desc: 'Dedicated aviation security training and an operational centre in Uttara supporting airport security operations.' },
      { title: 'Refresher & CPD Training', desc: 'Regular refresher courses and continuous professional development for all serving security personnel.' },
    ],
    whyUs: [
      'Bangladesh\'s first dedicated private security academy',
      'Purpose-built training facility',
      'Certified instructors with operational backgrounds',
      'BSB and BNPA curriculum alignment',
      'Aviation security specialization capability',
    ],
    sectors: ['Security Industry', 'Banking & Finance', 'Aviation & Airports', 'Hospitality & Hotels', 'Healthcare Institutions', 'Corporate Organizations'],
    cta: 'Enroll in Our Training Programmes',
    ctaLink: '/contact',
    color: 'green',
    group: 'Technology & Training',
  },

  'vault-safe': {
    slug: 'vault-safe',
    icon: HiOutlineLockClosed,
    eyebrow: 'Range of Services',
    title: 'Vault & Safe',
    tagline: 'Supply, installation, and management of high-security vault and safe solutions.',
    intro: `FALCON's Vault & Safe service provides the complete spectrum of physical security storage solutions —
    from individual high-security safes to full custom vault installations. We supply, design, install, and maintain
    certified vault and safe systems for banks, jewellers, government agencies, and any organization requiring the
    highest levels of physical asset protection.`,
    highlights: [
      { value: 'Grade A', label: 'Certified Safes' },
      { value: 'Custom', label: 'Vault Design' },
      { value: 'Supply &', label: 'Installation' },
      { value: 'Ongoing', label: 'Maintenance' },
    ],
    features: [
      { title: 'High-Security Safe Supply', desc: 'Supply of certified, independently tested high-security safes rated for cash, documents, firearms, and data media.' },
      { title: 'Custom Vault Design & Build', desc: 'Bespoke design and construction of bank vaults, strongrooms, and secure storage facilities to exact specifications.' },
      { title: 'Safe Installation & Anchoring', desc: 'Professional installation including floor anchoring, wall mounting, and integration with alarm systems.' },
      { title: 'Electronic Lock Systems', desc: 'Supply and installation of electronic, biometric, and time-lock mechanisms for enhanced vault access control.' },
      { title: 'Safe Relocation', desc: 'Professional disassembly, transportation, and reinstallation of existing safes and vault equipment.' },
      { title: 'Maintenance & Servicing', desc: 'Scheduled and emergency maintenance contracts covering locks, hinges, seals, and electronic components.' },
    ],
    whyUs: [
      'Partnerships with globally certified manufacturers',
      'Experienced vault design engineers',
      'BSB and fire rating compliance expertise',
      'Rapid installation and commissioning',
      'Comprehensive after-sales support',
      'Discreet, professional service',
    ],
    sectors: ['Commercial Banks', 'Central Banks', 'Jewellery & Gold Dealers', 'Law Firms', 'Government Treasuries', 'Hotel & Hospitality'],
    cta: 'Secure Your Assets with a Vault',
    ctaLink: '/contact',
    color: 'orange',
    group: 'Technology & Training',
  },

  'smart-locking': {
    slug: 'smart-locking',
    icon: HiOutlineKey,
    eyebrow: 'Range of Services',
    title: 'Smart Locking System',
    tagline: 'Intelligent electronic locking solutions providing complete access control and audit trails.',
    intro: `FALCON's Smart Locking System service delivers cutting-edge electronic and smart lock solutions for
    organizations requiring advanced access control beyond traditional mechanical locks. Our systems integrate
    seamlessly with existing security infrastructure — providing granular access management, complete audit trails,
    and remote access capability through a unified platform.`,
    highlights: [
      { value: 'Keyless', label: 'Access Control' },
      { value: 'Remote', label: 'Management' },
      { value: 'Full', label: 'Audit Trail' },
      { value: 'IoT', label: 'Integration Ready' },
    ],
    features: [
      { title: 'Biometric Lock Systems', desc: 'Fingerprint, iris, and facial recognition-based locking systems for high-security access control points.' },
      { title: 'Card & Fob Access', desc: 'RFID and smart card-based door controllers for flexible, multi-user access management across large facilities.' },
      { title: 'PIN & Mobile Access', desc: 'Code-based and smartphone-enabled access credentials for flexible, key-free entry management.' },
      { title: 'Centralized Management Platform', desc: 'Cloud or on-premise management portal enabling remote lock/unlock, user management, and real-time monitoring.' },
      { title: 'Access Scheduling', desc: 'Time-based access rules allowing different users to access different areas at specified times automatically.' },
      { title: 'Audit Logging & Reporting', desc: 'Complete, tamper-evident audit logs of all access events for compliance, investigation, and HR purposes.' },
    ],
    whyUs: [
      'Multi-technology platform expertise',
      'Certified installation engineers',
      'Scalable from single doors to campus-wide deployments',
      'Integration with CCTV and alarm systems',
      'Cloud and on-premise deployment options',
      'Full training and user onboarding support',
    ],
    sectors: ['Corporate Offices', 'Data Centers', 'Pharmaceutical Facilities', 'Healthcare Institutions', 'Residential Developments', 'Co-Working Spaces'],
    cta: 'Upgrade to Smart Access Control',
    ctaLink: '/contact',
    color: 'purple',
    group: 'Technology & Training',
  },

  'vehicle-monitoring': {
    slug: 'vehicle-monitoring',
    icon: HiOutlineTruck,
    eyebrow: 'Range of Services',
    title: 'Vehicle Monitoring',
    tagline: 'Real-time GPS fleet tracking and monitoring solutions to protect your vehicles and assets.',
    intro: `FALCON's Vehicle Monitoring service provides organizations with comprehensive real-time visibility of
    their vehicle fleets through advanced GPS tracking and telematics platforms. Whether you operate a small fleet
    of company cars or a large logistics operation, our vehicle monitoring solutions improve operational efficiency,
    reduce risk, ensure driver accountability, and protect your assets at all times.`,
    highlights: [
      { value: 'Real-Time', label: 'GPS Tracking' },
      { value: 'Live', label: 'Dashboard' },
      { value: 'Geo-Fence', label: 'Alerts' },
      { value: 'Driver', label: 'Behaviour Analytics' },
    ],
    features: [
      { title: 'Real-Time GPS Tracking', desc: 'Live position tracking of all vehicles on an intuitive dashboard accessible from any device, anywhere.' },
      { title: 'Geo-Fencing & Alerts', desc: 'Configurable geo-fence zones that trigger instant alerts when vehicles enter, exit, or deviate from defined areas or routes.' },
      { title: 'Driver Behaviour Monitoring', desc: 'Monitoring of speeding, harsh braking, rapid acceleration, and unauthorized stops to improve safety and reduce costs.' },
      { title: 'Journey History & Replay', desc: 'Full journey history with route replay capability for auditing, investigation, and efficiency analysis.' },
      { title: 'Immobilization', desc: 'Remote vehicle immobilization capability for use in theft or unauthorized use situations.' },
      { title: 'Fleet Management Reports', desc: 'Scheduled operational reports covering mileage, utilization, incidents, and driver performance metrics.' },
    ],
    whyUs: [
      'Reliable, proven GPS hardware platforms',
      'User-friendly web and mobile dashboard',
      'Rapid installation and activation',
      'Scalable from 1 to 1,000+ vehicles',
      'Integration with dispatch and CMS systems',
      'Local technical support across Bangladesh',
    ],
    sectors: ['Logistics & Delivery', 'Cash in Transit', 'Corporate Fleets', 'Construction & Equipment', 'Field Service Operations', 'Government Motor Pools'],
    cta: 'Track Your Fleet in Real-Time',
    ctaLink: '/contact',
    color: 'teal',
    group: 'Technology & Training',
  },

  // ── Escort / Valuables in Transit ───────────────────────────────────────────
  'valuable-transit': {
    slug: 'valuable-transit',
    icon: HiOutlineTruck,
    eyebrow: 'Range of Services',
    title: 'Valuable in Transit',
    tagline: 'Countrywide safeguarding of valuables, consignments and high-value assets in transit.',
    intro: `FALCON's Valuable in Transit (VIT) service provides comprehensive countrywide protection for your
    consignments, valuables, and high-value goods while in transit. A team of trained and vigilant personnel
    ensures that every consignment reaches its destination safely. Our central monitoring cell continuously
    tracks the location of each consignment using our own geo-fencing technology, ensuring that your assets
    maintain their predetermined route and schedule. Currently we are escorting more than 5,500 consignments
    countrywide every month — a trusted service built on years of operational excellence.`,
    highlights: [
      { value: '5,500+', label: 'Monthly Consignments' },
      { value: 'Geo-Fence', label: 'Route Tracking' },
      { value: '24/7', label: 'Central Monitoring' },
      { value: 'Nationwide', label: 'Coverage' },
    ],
    features: [
      { title: 'Trained Escort Personnel', desc: 'Armed and unarmed escort teams trained in protective convoy techniques, route awareness, and emergency response.' },
      { title: 'Central Monitoring Cell', desc: 'Dedicated operations centre tracking every consignment in real-time, with immediate intervention capability on deviation.' },
      { title: 'Geo-Fencing Technology', desc: 'Our own proprietary geo-fencing system confirms vehicles maintain predetermined routes and time schedules at all times.' },
      { title: 'Armored & Hardened Vehicles', desc: 'Fleet of purpose-fitted escort vehicles equipped for secure transportation of high-value goods across Bangladesh.' },
      { title: 'Chain of Custody Documentation', desc: 'Full documentation at every handover point ensuring complete accountability from pickup to final delivery.' },
      { title: 'Customised Routing', desc: 'Expert route planning accounting for traffic, threat intelligence, and client delivery requirements for maximum security.' },
    ],
    whyUs: [
      'Trusted by top banks, NGOs, and corporates',
      '5,500+ consignments escorted monthly',
      'Proprietary GPS geo-fencing system',
      '24/7 central monitoring and response',
      'Trained, vetted escort officers',
      'Nationwide coverage across all 64 districts',
    ],
    sectors: ['Banks & Financial Institutions', 'Retail & FMCG', 'NGOs & Development Agencies', 'Jewellery & Precious Metals', 'Pharmaceuticals', 'Government Agencies'],
    cta: 'Protect Your Valuables in Transit',
    ctaLink: '/contact',
    color: 'amber',
    group: 'Cash & Records',
  },

  // ── CCTV & Digital Surveillance ─────────────────────────────────────────────
  'cctv': {
    slug: 'cctv',
    icon: HiOutlineEye,
    banner: '/documents/navlink_banner/range%20of%20services/CCTV%20&%20Digital%20Surveillance%20.jpg',
    eyebrow: 'Range of Services',
    title: 'CCTV & Digital Surveillance',
    tagline: 'Wide-range digital security and surveillance equipment, installation and maintenance services.',
    intro: `FALCON provides a wide range of digital security and surveillance equipment and maintenance services
    to our clients. We maintain a pool of leading brands from the digital security market and our focus is to
    provide the best solution that befits each client's specific security needs. Our capabilities span video
    surveillance systems, access control systems, fire detection and protection systems, perimeter intrusion
    detection systems, different scanning systems and full design-and-build of integrated security centres.`,
    highlights: [
      { value: 'HD/IP', label: 'Camera Systems' },
      { value: 'AI', label: 'Video Analytics' },
      { value: 'Integrated', label: 'PSIM Platform' },
      { value: 'Design &', label: 'Build' },
    ],
    features: [
      { title: 'Video Surveillance Systems', desc: 'Design, supply, installation and commissioning of analogue, HD, and IP CCTV camera systems for indoor and outdoor environments.' },
      { title: 'Access Control Systems', desc: 'Card, biometric, PIN and mobile-based access control systems for single doors to enterprise-wide multi-site deployments.' },
      { title: 'Fire Detection & Protection', desc: 'Supply and installation of fire alarm panels, smoke detectors, heat sensors, and suppression systems to NFPA and BS standards.' },
      { title: 'Perimeter Intrusion Detection', desc: 'Laser, microwave, infrared and fence-mounted intrusion detection systems protecting building perimeters 24/7.' },
      { title: 'PSIM Integration', desc: 'As platinum distributor of ISM UK\'s Physical Security Information Management platform, we integrate all systems on one command interface.' },
      { title: 'Maintenance & AMC', desc: 'Annual maintenance contracts and emergency call-out services ensuring all surveillance systems remain fully operational.' },
    ],
    whyUs: [
      'Platinum PSIM distributor — ISM UK',
      'Leading brand portfolio from global manufacturers',
      'Experienced certified installation engineers',
      'End-to-end design, install and maintain',
      'Integration with existing security infrastructure',
      'Service contracts with guaranteed response times',
    ],
    sectors: ['Banks & Financial Institutions', 'Industrial Facilities', 'Retail & Shopping Malls', 'Airports & Transport Hubs', 'Hospitals & Healthcare', 'Government Buildings'],
    cta: 'Get a Surveillance System Assessment',
    ctaLink: '/contact',
    color: 'blue',
    group: 'Technology & Training',
  },

  // ── Fire Alarm Systems ───────────────────────────────────────────────────────
  'fire-alarm-systems': {
    slug: 'fire-alarm-systems',
    icon: HiOutlineExclamationCircle,
    banner: '/documents/navlink_banner/range%20of%20services/Fire%20Alarm%20Systems%20.jpg',
    eyebrow: 'Range of Services',
    title: 'Fire Alarm Systems',
    tagline: 'Life-safety fire detection and alarm systems designed, installed and maintained to international standards.',
    intro: `FALCON's Fire Alarm Systems division provides end-to-end fire detection and life safety solutions for
    commercial, industrial and residential premises. Our growing focus on integrated, technology-enabled security
    solutions creates additional safety and efficiency benefits for our clients. We design, supply, install, commission
    and maintain fire alarm systems that meet Bangladesh Fire Service & Civil Defence requirements as well as
    internationally recognised NFPA and British Standards — protecting lives, assets and business continuity.`,
    highlights: [
      { value: 'NFPA', label: 'Compliant Design' },
      { value: 'BS', label: 'Standards' },
      { value: '24/7', label: 'Monitoring Option' },
      { value: 'AMC', label: 'Maintenance' },
    ],
    features: [
      { title: 'Fire Detection System Design', desc: 'Site survey, risk assessment and engineered system design for conventional, addressable, and analogue addressable fire panels.' },
      { title: 'Smoke & Heat Detectors', desc: 'Supply and installation of optical smoke detectors, heat detectors, beam detectors, and multi-sensor devices from leading manufacturers.' },
      { title: 'Manual Call Points & Sounders', desc: 'Installation of manual break glass call points, electronic sounders, strobes and voice evacuation systems throughout the protected area.' },
      { title: 'Suppression System Integration', desc: 'Integration of fire alarm systems with gaseous suppression, sprinkler systems and kitchen suppression units for automatic response.' },
      { title: 'Central Monitoring Connection', desc: 'Optional connection to FALCON\'s 24/7 central monitoring centre for immediate alert and dispatch upon alarm activation.' },
      { title: 'Annual Maintenance Contracts', desc: 'Full AMC services including scheduled preventive maintenance, testing, certification and emergency fault response.' },
    ],
    whyUs: [
      'NFPA and BS-standard engineering expertise',
      'Bangladesh Fire Service compliance knowledge',
      'Experienced, certified installation engineers',
      'Integration with broader security systems',
      'Central monitoring connection available',
      'Rapid emergency response under AMC contracts',
    ],
    sectors: ['Commercial Offices', 'Industrial Factories', 'Banks & Data Centres', 'Hospitals & Healthcare', 'Garment Factories', 'Hotels & Hospitality'],
    cta: 'Get Your Fire Safety Assessment',
    ctaLink: '/contact',
    color: 'red',
    group: 'Technology & Training',
  },
}

// Groups for sidebar display
export const SERVICE_GROUPS = [
  { heading: 'Physical Protection', slugs: ['close-protection', 'site-protection', 'quick-response', 'event-management'] },
  { heading: 'Assessment & Intelligence', slugs: ['security-survey', 'site-assessment', 'risk-assessment', 'threat-assessment', 'vulnerability-assessment'] },
  { heading: 'Cash & Records', slugs: ['valuable-transit', 'document-archiving', 'data-archiving'] },
  { heading: 'Technology & Training', slugs: ['training', 'cctv', 'fire-alarm-systems'] },
]
