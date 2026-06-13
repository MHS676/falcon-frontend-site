export const NAV_LINKS = [
  {
    label: 'Company',
    children: [
      {
        heading: 'About Us',
        items: [
          { label: 'Company Overview', to: '/company/overview' },
          { label: 'Why Choose Us', to: '/company/why-choose-us' },
          { label: 'Our Leadership', to: '/company/leadership' },
          { label: 'Our Footprint', to: '/company/footprint' },
        ],
      },
      {
        heading: 'Join Falcon',
        items: [
          { label: 'Join Us', to: '/join-us' },
          { label: 'Life at Falcon', to: '/company/life' },
          { label: 'Awards', to: '/company/awards' },
        ],
      },
    ],
  },
  {
    label: 'What We Offer',
    children: [
      {
        heading: 'Security',
        items: [
          { 
            label: 'Physical Security', 
            to: '/what-we-offer/physical-security',
          },
          { 
            label: 'Electronic Security', 
            to: '/what-we-offer/electronic-security',
          },
          { 
            label: 'Central Monitoring Station', 
            to: '/what-we-offer/central-monitoring',
          },
          { 
            label: 'Security Consulting', 
            to: '/what-we-offer/security-consulting',
          },
        ],
      },
      // {
      //   heading: 'Operations',
      //   items: [
      //     // { label: 'Cash Custodial Services', to: '/what-we-offer/cash-custodial' },
      //     // { label: 'Facility Management', to: '/what-we-offer/facility-management' },
      //     // { label: 'Technical Services', to: '/what-we-offer/technical-services' },
      //     // { label: 'HR & Outsourcing', to: '/what-we-offer/hr-outsourcing' },
      //   ],
      // },
    ],
  },
  {
    label: 'Range Of Services',
    children: [
      {
        heading: 'Physical Protection',
        items: [
          { label: 'Close Protection', to: '/services/close-protection' },
          { label: 'Site Protection', to: '/services/site-protection' },
          { label: 'Quick Response', to: '/services/quick-response' },
          { label: 'Event Management', to: '/services/event-management' },
        ],
      },
      {
        heading: 'Assessment & Intelligence',
        items: [
          { label: 'Security Survey', to: '/services/security-survey' },
          { label: 'Site Assessment', to: '/services/site-assessment' },
          { label: 'Risk Assessment', to: '/services/risk-assessment' },
          { label: 'Threat Assessment', to: '/services/threat-assessment' },
          { label: 'Vulnerability Assessment', to: '/services/vulnerability-assessment' },
        ],
      },
      // {
      //   // heading: 'Cash & Records',
      //   items: [
      //     // { label: 'Cash in Transit', to: '/services/cash-in-transit' },
      //     // { label: 'ATM Cash Management', to: '/services/atm-cash-management' },
      //     // { label: 'Document Archiving', to: '/services/document-archiving' },
      //     // { label: 'Data Archiving', to: '/services/data-archiving' },
      //   ],
      // },
      {
        heading: 'Technology & Training',
        items: [
          { label: 'Training & Development', to: '/services/training' },
          { label: 'CCTV & Digital Surveillance', to: '/services/cctv' },
          { label: 'Fire Alarm Systems', to: '/services/fire-alarm-systems' },
        ],
      },
    ],
  },
  {
    label: 'News And Events',
    children: [
      {
        heading: 'Media',
        items: [
          { label: 'Falcon News', to: '/news-and-events/news' },
          { label: 'Gallery', to: '/news-and-events/gallery' },
          // { label: 'Government News', to: '/news-and-events/government' },
          // { label: 'Situation Updates', to: '/news-and-events/updates' },
          // { label: 'Awards', to: '/news-and-events/awards' },
          // { label: 'Blog', to: '/news-and-events/blog' },
        ],
      },
    ],
  },
]
