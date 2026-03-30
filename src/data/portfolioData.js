export const profile = {
  name: 'Saksham Bhardwaj',
  title: 'Data Science Graduate | Aspiring Data Analyst',
  intro:
    'I like working with messy datasets, finding the useful pattern inside them, and turning that into reports, dashboards, or models that help people make better decisions.',
  location: 'London, United Kingdom',
  email: 'sakshambhardwaj17082002@gmail.com',
  phone: '+44 7587 745189',
  availability: 'Open to data analyst, BI analyst, and junior analytics roles',
  cta: {
    primaryLabel: 'View Projects',
    primaryHref: '#projects',
    secondaryLabel: 'Download CV',
    secondaryHref: '/Saksham_Bhardwaj_CV.pdf',
  },
  stats: [
    { label: 'MSc Result', value: 'Distinction' },
    { label: 'Core Stack', value: 'Python, SQL, Power BI' },
    { label: 'Current Focus', value: 'Reporting + Predictive Analysis' },
  ],
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const about = {
  paragraphs: [
    'I recently completed my MSc in Data Science at the University of Westminster, where I focused on analytics, machine learning, statistical modelling, and data visualisation. Before that, I completed a bachelor\'s degree in computer applications, which gave me a practical base in software and problem-solving.',
    'What I enjoy most is the middle ground between technical work and business use. That could mean cleaning a dataset before analysis, writing SQL to answer a specific question, building a dashboard in Power BI, or comparing model performance to find the most reliable option.',
    'I am now looking for a role where I can keep building strong analytical habits, work closely with real business problems, and grow into a dependable data analyst who communicates clearly as well as technically.',
  ],
  highlights: [
    { label: 'MSc', value: 'Data Science, University of Westminster' },
    { label: 'Bachelor\'s', value: 'Computer Applications, HNBGU' },
    { label: 'Looking For', value: 'Data Analyst / BI Analyst opportunities' },
  ],
};

export const skills = [
  {
    title: 'Programming',
    items: ['Python', 'SQL', 'Pandas', 'NumPy', 'Scikit-learn'],
  },
  {
    title: 'Tools',
    items: ['Power BI', 'Excel', 'JIRA', 'MS Teams', 'Jupyter Notebook'],
  },
  {
    title: 'Concepts',
    items: ['Data Cleaning', 'Data Visualisation', 'Predictive Modelling', 'Statistical Modelling', 'Reporting'],
  },
];

export const projects = [
  {
    title: 'Aircraft Maintenance Prediction',
    tag: 'Machine Learning Project',
    description:
      'Built around NASA turbofan engine degradation data to estimate remaining useful life and show how predictive models can support maintenance planning.',
    stack: ['Python', 'Pandas', 'Scikit-learn', 'GridSearchCV'],
    details: [
      'Used run-to-failure data from 100 engines to frame the problem as remaining useful life prediction.',
      'Compared multiple regression models using MAE, MSE, and R-squared rather than relying on one algorithm.',
      'Applied preprocessing and hyperparameter tuning to improve model performance and make comparisons more reliable.',
    ],
    github: 'https://github.com/sambhardwaj12',
  },
  {
    title: 'Machine Learning Diabetes Detection App',
    tag: 'End-to-End Analytics App',
    description:
      'A small end-to-end application that predicts diabetes risk from health inputs and presents the result in a simple, readable way for non-technical users.',
    stack: ['Python', 'Machine Learning', 'Data Preprocessing', 'UI Design'],
    details: [
      'Worked with WHO-sourced health data and cleaned the dataset before training the model.',
      'Built a front-end flow for entering blood test values and getting an immediate prediction.',
      'Kept the output simple so the result could be understood without a technical background.',
    ],
    github: 'https://github.com/sambhardwaj12',
  },
];

export const experience = [
  {
    role: 'Graduate Engineer (Data & Operations Analysis)',
    company: 'Pole To Win, Hyderabad',
    period: 'Apr 2023 - Nov 2023',
    summary:
      'Worked with user feedback and operational data to spot recurring issues, support reporting, and help teams make clearer product and workflow decisions.',
    points: [
      'Analysed large volumes of feedback data to identify recurring issues and improvement themes.',
      'Supported reporting that contributed to operational efficiency improvements of around 10%.',
      'Worked with developers, QA teams, and stakeholders to clarify issues and track progress in JIRA and MS Teams.',
    ],
  },
  {
    role: 'Intern',
    company: 'Aesthetik Engineers, Kolkata',
    period: 'Oct 2022 - Apr 2023',
    summary:
      'Supported day-to-day analysis work by preparing data, building dashboards, and writing SQL queries for reporting needs.',
    points: [
      'Cleaned and prepared datasets before analysis to improve consistency and usability.',
      'Created Power BI dashboards and visual summaries for business reporting.',
      'Used Python and SQL to analyse, join, and filter data for practical reporting tasks.',
    ],
  },
];

export const contactLinks = [
  {
    label: 'GitHub',
    value: 'github.com/sambhardwaj12',
    href: 'https://github.com/sambhardwaj12',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/saksham-bhardwaj-922329220',
    href: 'https://www.linkedin.com/in/saksham-bhardwaj-922329220',
  },
  {
    label: 'Email',
    value: 'sakshambhardwaj17082002@gmail.com',
    href: 'mailto:sakshambhardwaj17082002@gmail.com',
  },
];
