import {
  Brain,
  Tags,
  AudioLines,
  Code2,
  Glasses,
  Bot,
  Cpu,
  MonitorSmartphone,
  Server,
  Compass,
  Car,
  HeartPulse,
  Building2,
  GraduationCap,
  Smartphone,
} from 'lucide-react'

// The four stages of the pipeline, in order. Used to group the Solutions mega
// menu and the /solutions page. Every service below is tagged with one of
// these via `stage`.
export const pipelineStages = [
  {
    key: 'collect',
    label: 'Collect',
    description: 'Real-world data capture — egocentric, robotic, wearable.',
  },
  {
    key: 'label',
    label: 'Label',
    description: 'Annotation and transcription with layered QA.',
  },
  {
    key: 'build',
    label: 'Build',
    description: 'Model training, fine-tuning and custom development.',
  },
  {
    key: 'ship',
    label: 'Ship',
    description: 'Applications, deployment infrastructure and advisory.',
  },
]

export const services = [
  // -- Collect --------------------------------------------------------
  {
    slug: 'egocentric-data-collection',
    name: 'Egocentric Data Collection',
    short: 'First-person / wearable-camera capture for embodied AI.',
    description:
      'First-person, wearable-camera data capture across real environments for training embodied-AI and vision models — enriched with pose, depth and segmentation.',
    practice:
      'Head-cam footage from real task environments, synchronized with pose/depth/segmentation and delivered straight into your training pipeline.',
    icon: Glasses,
    stage: 'collect',
  },
  {
    slug: 'dexterous-arm-data-collection',
    name: 'Dexterous Arm & Robotic Manipulation Data',
    short: 'Teleoperation & demonstration data for robot learning.',
    description:
      'Teleoperation and demonstration data collection for robot learning and manipulation models — captured with joint-angle and trajectory data across platforms.',
    practice:
      'Demonstration episodes with synchronized joint-angle and trajectory data across multiple robot platforms, formatted for imitation and RL training.',
    icon: Bot,
    stage: 'collect',
  },
  // -- Label ------------------------------------------------------------
  {
    slug: 'data-annotation',
    name: 'Data Annotation',
    short: 'High-quality labeling across image, video, text and audio.',
    description:
      'Precise labeling for ML across modalities — bounding boxes, segmentation, keypoints, transcription, RLHF preference ranking — with layered QA and measurable accuracy.',
    practice:
      'A labeled dataset with per-batch accuracy metrics, gold-standard audits, and a QA trail that survives procurement review.',
    icon: Tags,
    stage: 'label',
  },
  {
    slug: 'transcription',
    name: 'Transcription',
    short: 'Accurate audio & video transcription in 50+ languages.',
    description:
      'Human-in-the-loop transcription and translation with speaker diarization, timestamps and terminology control for research, media and compliance workloads.',
    practice:
      'Time-aligned, speaker-labeled transcripts in your target languages, formatted to spec and ready for training or archival.',
    icon: AudioLines,
    stage: 'label',
  },
  // -- Build --------------------------------------------------------------
  {
    slug: 'ai-llm-training',
    name: 'AI / LLM Training',
    short: 'Custom model training and fine-tuning.',
    description:
      'End-to-end training and fine-tuning of language and vision models — from data curation and reward modeling to evaluation harnesses tuned to your domain.',
    practice:
      'A domain-specific model fine-tuned on your proprietary data, delivered with reproducible training runs and an evaluation report you can defend to stakeholders.',
    icon: Brain,
    stage: 'build',
  },
  {
    slug: 'ai-model-development',
    name: 'AI Model Development',
    short: 'Custom CV, NLP and multimodal models, built from scratch.',
    description:
      'Full-cycle model development beyond fine-tuning — architecture selection, training infrastructure, benchmarking and evaluation for computer vision, NLP and multimodal systems built around your problem, not a generic API.',
    practice:
      'A trained, benchmarked model matched to your real constraints — latency, cost, accuracy — with an evaluation suite the team can rerun on every future iteration.',
    icon: Cpu,
    stage: 'build',
  },
  {
    slug: 'custom-development',
    name: 'Custom Development',
    short: 'Internal tooling and infrastructure around your models.',
    description:
      'We build the internal tooling and infrastructure around your models — data pipelines, annotation UIs, evaluation dashboards and deployment scaffolding.',
    practice:
      'A production-grade internal tool or pipeline, documented and handed off, that removes a bottleneck between your data and your model.',
    icon: Code2,
    stage: 'build',
  },
  // -- Ship -----------------------------------------------------------
  {
    slug: 'app-web-development',
    name: 'App & Web Development',
    short: 'Production web and mobile apps that put your model in front of users.',
    description:
      'End-to-end product engineering — web apps, mobile apps and internal dashboards that wrap your models in an interface real users and stakeholders can actually touch, built on modern, maintainable stacks.',
    practice:
      'A shipped, production-grade web or mobile application — UI/UX, API integration and deployment — that turns a model into a usable product.',
    icon: MonitorSmartphone,
    stage: 'ship',
  },
  {
    slug: 'mlops-deployment',
    name: 'MLOps & Deployment',
    short: 'CI/CD, monitoring and infrastructure to run models in production.',
    description:
      'Deployment pipelines, model-serving infrastructure, monitoring and retraining loops that keep your models reliable in production — on your cloud or ours.',
    practice:
      'A CI/CD pipeline and serving infrastructure with monitoring, alerting and a documented retraining loop, so performance holds up after launch day.',
    icon: Server,
    stage: 'ship',
  },
  {
    slug: 'ai-strategy-consulting',
    name: 'AI Strategy & Consulting',
    short: 'Roadmapping and technical advisory for teams starting their AI journey.',
    description:
      'Independent technical advisory — feasibility studies, build-vs-buy analysis, model and vendor selection, and roadmaps for teams deciding where AI fits in their product or operations.',
    practice:
      'A concrete AI roadmap and technical recommendation you can take to your board or engineering leadership, grounded in an assessment of your actual data and constraints.',
    icon: Compass,
    stage: 'ship',
  },
]

export const caseStudies = [
  {
    slug: 'wearable-vision-corpus',
    name: 'Wearable Vision Corpus',
    client: 'Confidential — embodied-AI lab',
    category: 'Egocentric Data Collection',
    challenge:
      'A vision-model team needed first-person footage of everyday manual tasks across diverse home and work settings — data that simply did not exist at scale.',
    approach:
      'We deployed a network of trained collectors with head-mounted rigs across kitchens, workshops and warehouses, then enriched every clip with pose, depth and segmentation.',
    outcome: 'Enough clean, enriched egocentric data to train a production perception model on schedule.',
    metric: '500K+ egocentric clips',
    image: '/images/egocentric-kitchen.webp',
  },
  {
    slug: 'dexterous-manipulation-set',
    name: 'Dexterous Manipulation Set',
    client: 'Confidential — robotics startup',
    category: 'Dexterous Arm Data Collection',
    challenge:
      'A manipulation-model team needed high-quality teleoperated demonstrations of contact-rich tasks across several different robot arms.',
    approach:
      'We ran structured teleoperation sessions capturing synchronized video, joint angles and trajectories, with QA on every episode for grasp success and label integrity.',
    outcome: 'A demonstration corpus that generalized across hardware and cut the client’s data-gathering timeline dramatically.',
    metric: '12 robot platforms supported',
    image: '/images/dexterous-arm.webp',
  },
  {
    slug: 'multimodal-annotation-program',
    name: 'Multimodal Annotation Program',
    client: 'Confidential — foundation-model team',
    category: 'Data Annotation',
    challenge:
      'A foundation-model team needed millions of labels across image, video and audio with accuracy guarantees strict enough to pass an internal audit.',
    approach:
      'We stood up a layered QA pipeline with gold-standard tasks, consensus scoring and per-batch reporting, staffed by vetted annotators.',
    outcome: 'A sustained labeling program delivering audited batches on a weekly cadence.',
    metric: '99.9% annotation accuracy',
    image: '/images/annotation.webp',
  },
  {
    slug: 'multilingual-transcription-pipeline',
    name: 'Multilingual Transcription Pipeline',
    client: 'Confidential — media & research group',
    category: 'Transcription',
    challenge:
      'A research group needed speaker-diarized transcripts across dozens of languages, formatted consistently for downstream training.',
    approach:
      'We combined ASR with human review and terminology control, delivering time-aligned, speaker-labeled transcripts to a strict schema.',
    outcome: 'A reliable transcription pipeline feeding the client’s multilingual model program.',
    metric: '50+ languages delivered',
    image: '/images/annotation.webp',
  },
]

// PLACEHOLDER clips. To ship real footage, add `src: '/video/clip.mp4'` to an
// entry — VideoClipCard renders a muted looping <video> automatically and falls
// back to the poster image when `src` is absent. No layout change required.
// Keep clips 3-8s, compressed .mp4/.webm, and always set a poster.
export const showcaseClips = [
  { caption: 'Kitchen — egocentric', poster: '/images/egocentric-kitchen.webp', kind: 'egocentric' },
  { caption: 'Warehouse — egocentric', poster: '/images/egocentric-warehouse.webp', kind: 'egocentric' },
  { caption: 'Dual-arm — pick and place', poster: '/images/dexterous-arm.webp', kind: 'dexterous' },
  { caption: 'Single-arm — assembly', poster: '/images/arm-assembly.webp', kind: 'dexterous' },
]

export const faqs = [
  {
    q: 'How do you handle data security and NDAs?',
    a: 'Every engagement can start under NDA — available on request. Data is handled on access-controlled infrastructure, collectors and annotators are vetted and bound by confidentiality, and we align to your compliance posture (SOC 2, GDPR and similar) on request.',
  },
  {
    q: 'What are typical turnaround times?',
    a: 'It depends on modality and scale, but most annotation and transcription batches run on a weekly cadence, and data-collection programs ramp within a few weeks of scoping. We agree SLAs up front and report against them.',
  },
  {
    q: 'What is the minimum engagement size?',
    a: 'We run everything from a focused pilot to a sustained multi-quarter program. We recommend starting with a scoped pilot so you can validate quality before committing to scale.',
  },
  {
    q: 'How does pricing work?',
    a: 'Pricing is per-unit for annotation and transcription (per label, minute or episode) and scoped for collection and custom development. You get a clear quote after a short scoping call — no surprises.',
  },
  {
    q: 'Can you collect data on our own robot platforms or capture rigs?',
    a: 'Yes. We support a wide range of robot arms and wearable capture setups, and we can integrate your specific hardware and data schema into the collection pipeline.',
  },
]

// PLACEHOLDER — swap in real product names, one-line roles and (if you have
// permission) logos once you can name clients publicly. Keeping this section
// even at 3-4 entries is a strong trust signal; do not leave it empty.
export const collaboratedProducts = [
  {
    slug: 'aether-vision',
    name: 'Aether Vision',
    category: 'Computer Vision / Robotics',
    role: 'Egocentric data collection & annotation',
    description:
      'Supplied the wearable-capture dataset and QA pipeline behind a household-robotics perception model.',
  },
  {
    slug: 'handwave-robotics',
    name: 'Handwave Robotics',
    category: 'Robotic Manipulation',
    role: 'Teleoperation data + model fine-tuning',
    description:
      'Delivered dexterous-arm demonstration data and fine-tuned the imitation-learning policy trained on it.',
  },
  {
    slug: 'lingua-health',
    name: 'Lingua Health',
    category: 'Healthcare NLP',
    role: 'Transcription + AI model development',
    description:
      'Built the multilingual clinical-transcription pipeline and the NLP model that structures it into notes.',
  },
  {
    slug: 'fieldops',
    name: 'FieldOps',
    category: 'Web & Mobile Product',
    role: 'App development + MLOps',
    description:
      'Designed and shipped the field-technician mobile app and the deployment pipeline serving its on-device model.',
  },
]

// Groups the Work mega-menu into fields the way `pipelineStages` groups
// Solutions — each item anchors straight to its section on /work.
export const workFields = [
  {
    key: 'collection',
    label: 'Data Collection',
    items: [
      { name: 'Egocentric Data Collection', anchor: 'wearable-vision-corpus', icon: Glasses },
      { name: 'Dexterous Arm & Manipulation', anchor: 'dexterous-manipulation-set', icon: Bot },
    ],
  },
  {
    key: 'labeling',
    label: 'Annotation & Language',
    items: [
      { name: 'Data Annotation', anchor: 'multimodal-annotation-program', icon: Tags },
      { name: 'Transcription', anchor: 'multilingual-transcription-pipeline', icon: AudioLines },
    ],
  },
  {
    key: 'products',
    label: 'Product Collaborations',
    items: [
      { name: 'Aether Vision', anchor: 'aether-vision', icon: MonitorSmartphone },
      { name: 'Handwave Robotics', anchor: 'handwave-robotics', icon: MonitorSmartphone },
      { name: 'Lingua Health', anchor: 'lingua-health', icon: MonitorSmartphone },
      { name: 'FieldOps', anchor: 'fieldops', icon: MonitorSmartphone },
    ],
  },
]

// Groups used to organize the Industries mega-menu and the /industries page
// into columns, the same way `pipelineStages` organizes Solutions.
export const industryGroups = [
  { key: 'physical', label: 'Physical AI' },
  { key: 'regulated', label: 'Regulated & Research' },
  { key: 'enterprise', label: 'Enterprise & Consumer' },
]

export const industries = [
  {
    slug: 'robotics-embodied-ai',
    name: 'Robotics & Embodied AI',
    icon: Bot,
    group: 'physical',
    description:
      'Egocentric and manipulation data, annotation and model training for teams building perception and control systems.',
  },
  {
    slug: 'autonomous-vehicles',
    name: 'Autonomous Vehicles',
    icon: Car,
    group: 'physical',
    description:
      'Sensor-fusion annotation, edge-case curation and evaluation pipelines for perception and planning stacks.',
  },
  {
    slug: 'healthcare-life-sciences',
    name: 'Healthcare & Life Sciences',
    icon: HeartPulse,
    group: 'regulated',
    description:
      'Clinical transcription, medical-imaging annotation and domain-tuned models handled under strict compliance.',
  },
  {
    slug: 'research-labs-academia',
    name: 'Research Labs & Academia',
    icon: GraduationCap,
    group: 'regulated',
    description:
      'Reproducible datasets, annotation programs and evaluation harnesses built to hold up under peer review.',
  },
  {
    slug: 'enterprise-saas',
    name: 'Enterprise & SaaS',
    icon: Building2,
    group: 'enterprise',
    description:
      'Internal tooling, custom models and the app layer that puts AI in front of employees and customers.',
  },
  {
    slug: 'consumer-ai-products',
    name: 'Consumer AI Products',
    icon: Smartphone,
    group: 'enterprise',
    description:
      'App and web development for AI-native consumer products, from prototype to production deployment.',
  },
]

const industryGroupOf = (key) => industries.filter((i) => i.group === key)

// Pre-grouped shape the Industries mega-menu and page consume directly.
export const industriesByGroup = industryGroups.map((g) => ({
  ...g,
  items: industryGroupOf(g.key),
}))

export const openRoles = [
  {
    title: 'Senior ML Engineer',
    department: 'Model Development',
    location: 'Remote / San Francisco',
    type: 'Full-time',
  },
  {
    title: 'Data Annotation Lead',
    department: 'Data Operations',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    title: 'Full-Stack Engineer — App & Web',
    department: 'Product Engineering',
    location: 'Remote / San Francisco',
    type: 'Full-time',
  },
  {
    title: 'Robotics Data Collection Specialist',
    department: 'Data Collection',
    location: 'On-site — rotating',
    type: 'Contract',
  },
  {
    title: 'MLOps Engineer',
    department: 'Infrastructure',
    location: 'Remote',
    type: 'Full-time',
  },
]

export const cultureValues = [
  {
    title: 'Own the unglamorous middle',
    text: 'The gap between raw data and a shipped model is where most AI projects die. We hire people who want to close it.',
  },
  {
    title: 'Ship on a schedule',
    text: 'Clients plan their model roadmap around our delivery dates. We treat cadence as a feature, not an aspiration.',
  },
  {
    title: 'Quality is measured, not claimed',
    text: 'Every batch, every model, every deploy is checked against a number — not a vibe.',
  },
]

export const hiringProcess = [
  { step: 'Apply', text: 'Send your resume and a note on what you want to work on.' },
  { step: 'Intro call', text: '30 minutes with the hiring lead — mutual fit, no trick questions.' },
  { step: 'Work sample', text: 'A short, paid exercise close to real work, not a whiteboard puzzle.' },
  { step: 'Team interview', text: 'Meet the people you would actually work with.' },
  { step: 'Offer', text: 'A decision within days, not weeks.' },
]

export const stats = [
  { value: '500K+', label: 'Egocentric clips collected' },
  { value: '99.9%', label: 'Annotation accuracy' },
  { value: '50+', label: 'Languages transcribed' },
  { value: '12+', label: 'Robot platforms supported' },
]

export const insights = [
  {
    slug: 'egocentric-data-embodied-ai',
    title: 'Why egocentric data is the bottleneck for embodied AI',
    date: 'Feb 2026',
    category: 'Data Collection',
    excerpt:
      'First-person footage is the scarcest, highest-signal input for models that have to act in the world. Here is how we think about capturing it at scale.',
  },
  {
    slug: 'annotation-quality-that-survives-audit',
    title: 'Annotation quality that survives a procurement audit',
    date: 'Jan 2026',
    category: 'Annotation',
    excerpt:
      'Accuracy claims are cheap. We break down the QA architecture — gold tasks, consensus scoring, per-batch reporting — that makes a number defensible.',
  },
  {
    slug: 'teleoperation-data-for-manipulation',
    title: 'Collecting teleoperation data that generalizes across arms',
    date: 'Dec 2025',
    category: 'Robotics',
    excerpt:
      'Demonstration data is only useful if it transfers. Notes on capturing joint-angle and trajectory data that works across hardware.',
  },
  {
    slug: 'building-internal-ml-tooling',
    title: 'The internal tooling gap between your data and your model',
    date: 'Nov 2025',
    category: 'Engineering',
    excerpt:
      'Most teams lose weeks to glue code and brittle pipelines. A look at the tooling that actually moves data into training reliably.',
  },
]