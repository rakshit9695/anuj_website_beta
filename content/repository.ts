/** Acts / Rules / Forms repository + quick links. EDITABLE; links are placeholders/official. */
export interface RepoItem {
  category: string;
  name: string;
  link: string; // placeholder or official source
}

export const acts: RepoItem[] = [
  { category: "Direct Tax", name: "Income-tax Act, 1961", link: "https://incometaxindia.gov.in/" },
  { category: "Corporate", name: "Companies Act, 2013", link: "https://www.mca.gov.in/" },
  { category: "Indirect Tax", name: "Central Goods and Services Tax Act, 2017", link: "https://cbic-gst.gov.in/" },
  { category: "Cross-Border", name: "Foreign Exchange Management Act, 1999", link: "https://rbi.org.in/" },
  { category: "Insolvency", name: "Insolvency and Bankruptcy Code, 2016", link: "https://ibbi.gov.in/" },
  { category: "Securities", name: "SEBI Act, 1992", link: "https://www.sebi.gov.in/" },
  { category: "Corporate", name: "Limited Liability Partnership Act, 2008", link: "https://www.mca.gov.in/" },
  { category: "Direct Tax", name: "Black Money Act, 2015", link: "https://incometaxindia.gov.in/" },
];

export const rules: RepoItem[] = [
  { category: "Indirect Tax", name: "CGST Rules, 2017", link: "https://cbic-gst.gov.in/" },
  { category: "Direct Tax", name: "Income-tax Rules, 1962", link: "https://incometaxindia.gov.in/" },
  { category: "Corporate", name: "Companies (Incorporation) Rules, 2014", link: "https://www.mca.gov.in/" },
  { category: "Corporate", name: "LLP Rules, 2009", link: "https://www.mca.gov.in/" },
  { category: "Cross-Border", name: "FEM (Non-Debt Instruments) Rules, 2019", link: "https://rbi.org.in/" },
  { category: "Securities", name: "SEBI (AIF) Regulations, 2012", link: "https://www.sebi.gov.in/" },
];

export const forms: RepoItem[] = [
  { category: "Income Tax", name: "Form 3CA/3CB-3CD (Tax Audit)", link: "https://incometaxindia.gov.in/" },
  { category: "Income Tax", name: "Form 15CA / 15CB", link: "https://incometaxindia.gov.in/" },
  { category: "Income Tax", name: "Form 3CEB (Transfer Pricing)", link: "https://incometaxindia.gov.in/" },
  { category: "GST", name: "GSTR-1 / 3B / 9 / 9C", link: "https://www.gst.gov.in/" },
  { category: "GST", name: "RFD-01 (Refund Application)", link: "https://www.gst.gov.in/" },
  { category: "ROC", name: "AOC-4 / MGT-7", link: "https://www.mca.gov.in/" },
  { category: "ROC", name: "DIR-3 KYC", link: "https://www.mca.gov.in/" },
  { category: "ROC", name: "SPICe+ (Incorporation)", link: "https://www.mca.gov.in/" },
  { category: "LLP", name: "Form 8 / Form 11", link: "https://www.mca.gov.in/" },
  { category: "FEMA", name: "FC-GPR / FC-TRS / FLA", link: "https://firms.rbi.org.in/" },
  { category: "SEBI", name: "AIF registration forms", link: "https://www.sebi.gov.in/" },
];

export const quickLinks = [
  {
    group: "Direct Tax",
    links: [
      { label: "Income-tax e-filing", href: "https://www.incometax.gov.in/" },
      { label: "CBDT", href: "https://incometaxindia.gov.in/" },
      { label: "TRACES", href: "https://www.tdscpc.gov.in/" },
    ],
  },
  {
    group: "Indirect Tax",
    links: [
      { label: "GST portal (GSTN)", href: "https://www.gst.gov.in/" },
      { label: "CBIC", href: "https://www.cbic.gov.in/" },
      { label: "ICEGATE (Customs)", href: "https://www.icegate.gov.in/" },
    ],
  },
  {
    group: "Corporate & Regulatory",
    links: [
      { label: "MCA21", href: "https://www.mca.gov.in/" },
      { label: "RBI", href: "https://www.rbi.org.in/" },
      { label: "SEBI", href: "https://www.sebi.gov.in/" },
      { label: "IBBI", href: "https://www.ibbi.gov.in/" },
      { label: "IRDAI", href: "https://www.irdai.gov.in/" },
    ],
  },
  {
    group: "Other",
    links: [
      { label: "DPIIT / Startup India", href: "https://www.startupindia.gov.in/" },
      { label: "EPFO", href: "https://www.epfindia.gov.in/" },
      { label: "DGFT", href: "https://www.dgft.gov.in/" },
    ],
  },
];
