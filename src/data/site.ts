// All the site's content lives here. Edit this file to change what the page says;
// the components in src/components only decide how it looks.

export const profile = {
  name: 'Tarun Srivastava',
  tagline: "Undergrad @ IIEST Shibpur '27",
  status: 'Applying for MS/PhD, Fall 2027 · open to research internships, Jan to Jun 2027',
  affiliation: '',
  // Email is stored in two parts and assembled in the browser, so the full address never appears in the HTML.
  mail: { user: 'srivastavatarun139', domain: 'gmail.com' },
  links: [
    { label: 'Email', href: '#', mail: true },
    { label: 'CV', href: '/cv/Tarun_Srivastava_CV_1page.pdf' },
    { label: 'GitHub', href: 'https://github.com/Lit07' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tarun-srivastava-36b975262/' },
    // OpenReview (https://openreview.net/profile?id=~Tarun_Srivastava1): add back once there is an accepted / showable paper.
    // Removed from the box on request: ORCID https://orcid.org/0009-0008-5921-9839, alphaXiv https://www.alphaxiv.org/@tarun-srivastava
  ],
};

// Opening quote of the Prologue - your own words. Leave text empty to hide it.
export const epigraph = {
  text: "Lost in the pursuit of truth, what is and what isn't.",
  by: '',
};

// Closing line at the very end of the page (above the footer).
export const closingQuote = 'Never forget where you are coming from, so you always remember where you are headed to.';

// Paragraphs of the About section. Simple HTML (<strong>, <a>) is allowed.
export const about = [
  `I come from a humble background in <a href="https://www.google.com/maps/place/Gorakhpur,+Uttar+Pradesh" target="_blank" rel="noopener">Gorakhpur</a>. I am currently on my way to finishing my bachelor's in Information Technology at <a href="https://en.wikipedia.org/wiki/Indian_Institute_of_Engineering_Science_and_Technology,_Shibpur" target="_blank" rel="noopener">IIEST Shibpur</a>.`,
  `My primary inclination is towards computer vision, especially deepfake detection seen through the lens of generalisation, out-of-distribution robustness and invariance.`,
  `Alongside vision, I am drawn to privacy-preserving machine learning, especially differential privacy and graph signal processing, and my final-year project brings these together in federated, differentially private models for traffic incident detection and forecasting.`,
  `On bright days, I branch out into NLP, speech and the foundations of computer science, and on gloomy days, I wander into the uncharted territories of quantum computing.`,
];

export const news = [
  { date: '2026', text: 'Paper on spectral privacy budgeting submitted.' },
  { date: '2026', text: 'Paper on cross-generator deepfake detection submitted.' },
  { date: 'May 2026', text: 'Interned at Accenture as an Advanced Application Engineering Analyst (GenAI), May – July 2026.' },
];

type Link = { label: string; href?: string }; // no href = shown greyed out ("coming soon")

export type Paper = {
  title: string;
  authors: string; // your own name is bolded automatically
  status: string;
  year: string;
  summary: string;
  links: Link[];
};

export const papers: Paper[] = [
  {
    title: 'Periodic Gradient-Variance Suppression on SVD-Adapted Residuals for Cross-Generator Deepfake Detection',
    authors: 'Tarun Srivastava',
    status: 'Preprint, under revision',
    year: '2026',
    summary: `Cross-generator deepfake detection with a frozen CLIP backbone. Periodically recalibrated gradient-variance
      suppression on SVD residual directions keeps the detector from overfitting to the generators it was trained on.`,
    links: [{ label: 'alphaXiv', href: 'https://www.alphaxiv.org/abs/2611.gradient-variance-suppression-deepfake-detection' }],
  },
  {
    title: 'Adaptive Spectral Privacy Budgeting for Emergency Traffic Coordination',
    authors: 'Tarun Srivastava',
    status: 'Preprint',
    year: '2026',
    summary: `Differential privacy for city traffic signals, with the noise budgeted unevenly across graph-spectral components.
      Background traffic stays private while the short transients that mark emergency vehicles survive.`,
    links: [{ label: 'alphaXiv', href: 'https://www.alphaxiv.org/abs/2611.adaptive-spectral-privacy-traffic' }],
  },
];

// "Dissections": one block per cluster (source of truth = reading list/Dissections_Clusters_23Nov.txt).
// Only finished papers (R / D / O) are listed. deep = followed through (read in depth), built = drawn from (my own work builds on it) (both can be set).
// `more` = papers still being read in that cluster (shown as one muted line).
const ax = (id: string) => `https://arxiv.org/abs/${id}`;
export type Cut = { name: string; href?: string; deep?: boolean; built?: boolean };
export type Cluster = { title: string; sub: string; items: Cut[]; more?: number };
export const clusters: Cluster[] = [
  { title: 'Words Against Pixels', sub: 'deepfake detection guided by language', items: [
    { name: 'AuthGuard', href: ax('2506.04501'), deep: true }, { name: 'LASTED', href: ax('2305.13800'), deep: true }, { name: 'LLaVA', href: ax('2304.08485'), deep: true },
    { name: 'C2P-CLIP', deep: true }, { name: 'Trinity Detector', href: ax('2404.17254'), deep: true },
  ]},
  { title: 'Beyond the Frame', sub: 'deepfake detectors that hold up on unseen generators', more: 4, items: [
    { name: 'Effort', href: ax('2411.15633'), deep: true, built: true }, { name: 'IRM', href: ax('1907.02893'), deep: true, built: true },
    { name: 'Fishr', href: ax('2109.02934'), deep: true, built: true }, { name: 'GenD', href: ax('2508.06248') }, { name: 'SeLop', href: ax('2601.11915') },
    { name: 'UCF', href: ax('2304.13949') }, { name: 'UDD', href: ax('2501.04376') }, { name: 'CouCE', href: ax('2606.30365') },
    { name: 'FreqDebias', href: ax('2509.22412') }, { name: 'MoE-FFD', href: ax('2404.08452') }, { name: 'GM-DF', href: ax('2406.20078') },
    { name: 'CRDA', href: ax('2511.07051'), deep: true }, { name: 'FMSD', href: ax('2601.01041'), deep: true }, { name: 'AIDE', deep: true },
    { name: 'DomainBed', href: ax('2007.01434'), deep: true }, { name: 'Fake or JPEG?', href: ax('2403.17608'), deep: true }, { name: 'Xu et al., origin attribution', href: ax('2403.19653'), deep: true },
    { name: 'IRM Is a Total Variation Model', href: ax('2405.01389') },
  ]},
  { title: 'Wide Angle', sub: 'foundations of vision and diffusion', items: [
    { name: 'Attention Is All You Need', href: ax('1706.03762'), deep: true }, { name: 'ViT', href: ax('2010.11929'), deep: true }, { name: 'CLIP', href: ax('2103.00020'), deep: true },
    { name: 'DDPM', href: ax('2006.11239'), deep: true }, { name: 'DDIM', href: ax('2010.02502'), deep: true }, { name: 'Latent Diffusion', href: ax('2112.10752'), deep: true },
    { name: 'DiT', href: ax('2212.09748'), deep: true }, { name: 'Progressive Distillation', href: ax('2202.00512'), deep: true },
    { name: 'Consistency Models', href: ax('2303.01469'), deep: true }, { name: 'LCM', href: ax('2310.04378'), deep: true }, { name: 'LCM-LoRA', href: ax('2311.05556'), deep: true },
    { name: 'Q-Diffusion', href: ax('2302.04304'), deep: true }, { name: 'UnivFD', href: ax('2302.10174'), deep: true }, { name: 'Corvi et al.', href: ax('2211.00680'), deep: true },
    { name: 'Ricker et al.', href: ax('2210.14571'), deep: true }, { name: 'FID', href: ax('1706.08500'), deep: true }, { name: 'Mahalanobis OOD', href: ax('1807.03888'), deep: true },
    { name: 'FlowIt', href: ax('2603.28759'), deep: true },
  ]},
  { title: 'A Pulse on Screen', sub: 'video deepfakes read through the heartbeat (rPPG)', items: [
    { name: 'DeepPhys', href: ax('1805.07888') }, { name: 'PhysFormer', href: ax('2111.12082') },
  ]},
  { title: 'Paper Trails', sub: 'pulling structure out of messy documents', items: [
    { name: 'Schema-Driven IE from Heterogeneous Tables', href: ax('2305.14336'), deep: true, built: true }, { name: 'LayoutLMv3', href: ax('2204.08387'), deep: true },
    { name: 'FUNSD', href: ax('1905.13538'), deep: true }, { name: 'Document Parsing Unveiled', href: ax('2410.21169'), deep: true, built: true },
    { name: 'Multi-Stage Field Extraction of Financial Documents', href: ax('2510.23066'), deep: true, built: true },
    { name: 'Schema-Guided Extraction of Missing-Person Intelligence', href: ax('2604.06571'), deep: true, built: true },
  ]},
  { title: 'Noise in the Spectrum', sub: 'differential privacy meets graph signal processing', more: 7, items: [
    { name: 'Shuman et al., the emerging field of GSP', href: ax('1211.0053'), deep: true }, { name: 'Sandryhaila and Moura', href: ax('1210.4752'), deep: true },
    { name: 'Ortega et al., GSP overview', href: ax('1712.00468') }, { name: 'Chen et al., piecewise-smooth graph signals', href: ax('1803.02944') },
    { name: 'Mironov, Rényi DP', href: ax('1702.07476') }, { name: 'Dwork et al., Analyze Gauss' }, { name: 'Imtiaz and Sarwate' },
    { name: 'Ko, Ziani and Fioretto', href: ax('2505.10871'), deep: true }, { name: 'Chedemail et al.', deep: true }, { name: 'Vlaski and Sayed', deep: true },
    { name: 'Shaham et al.', deep: true }, { name: 'Census TopDown (Abowd et al.)' }, { name: 'Apple, Learning with Privacy at Scale' },
    { name: 'Parkany and Xie' },
  ]},
  { title: 'Incident Reports', sub: 'federated anomaly detection on traffic video', more: 23, items: [
    { name: 'FedAvg', href: ax('1602.05629'), deep: true }, { name: 'FedVAD', deep: true }, { name: 'TAD', href: ax('2209.12386'), deep: true },
    { name: 'Holmes-VAD', href: ax('2406.12235') }, { name: 'Temporally shifted distillation', deep: true },
    { name: 'VIBES, Zoom In Reason Out', href: ax('2604.23724'), deep: true }, { name: 'CLAP', href: ax('2404.00847'), deep: true },
  ]},
  { title: 'Traffic in Confidence', sub: 'federated, private traffic forecasting', more: 27, items: [
    { name: 'Dwork and Roth', deep: true }, { name: 'FedASTA', href: ax('2405.13090'), deep: true }, { name: 'FedASK', href: ax('2507.09990'), deep: true },
    { name: 'Client-level DP clipping', deep: true }, { name: 'Koetsier 2022', deep: true }, { name: 'Kiani et al.', href: ax('2502.18706'), deep: true },
    { name: 'IGSTGNN', href: ax('2602.02528'), deep: true }, { name: 'Campbell et al.', href: ax('2509.20460'), deep: true },
  ]},
];

// Old per-paper list (kept for reference, no longer shown on the page).
export type Dissection = { title: string; who: string; venue: string; href: string; tag: 'implemented' | 'read' | 'built on' };
export const dissections: { group: string; items: Dissection[] }[] = [
  { group: 'Diffusion foundations', items: [
    { title: 'Denoising Diffusion Probabilistic Models (DDPM)', who: 'Ho, Jain, Abbeel', venue: 'NeurIPS 2020', href: 'https://arxiv.org/abs/2006.11239', tag: 'implemented' },
    { title: 'Denoising Diffusion Implicit Models (DDIM)', who: 'Song, Meng, Ermon', venue: 'ICLR 2021', href: 'https://arxiv.org/abs/2010.02502', tag: 'implemented' },
  ]},
  { group: 'Fast sampling & distillation', items: [
    { title: 'Progressive Distillation for Fast Sampling of Diffusion Models', who: 'Salimans, Ho', venue: 'ICLR 2022', href: 'https://arxiv.org/abs/2202.00512', tag: 'read' },
    { title: 'Consistency Models', who: 'Song, Dhariwal, Chen, Sutskever', venue: 'ICML 2023', href: 'https://arxiv.org/abs/2303.01469', tag: 'read' },
    { title: 'Latent Consistency Models (LCM)', who: 'Luo et al.', venue: 'arXiv 2023', href: 'https://arxiv.org/abs/2310.04378', tag: 'implemented' },
    { title: 'LCM-LoRA: A Universal Stable-Diffusion Acceleration Module', who: 'Luo et al.', venue: 'arXiv 2023', href: 'https://arxiv.org/abs/2311.05556', tag: 'implemented' },
  ]},
  { group: 'Architectures', items: [
    { title: 'High-Resolution Image Synthesis with Latent Diffusion Models', who: 'Rombach et al.', venue: 'CVPR 2022', href: 'https://arxiv.org/abs/2112.10752', tag: 'read' },
    { title: 'Scalable Diffusion Models with Transformers (DiT)', who: 'Peebles, Xie', venue: 'ICCV 2023', href: 'https://arxiv.org/abs/2212.09748', tag: 'read' },
  ]},
  { group: 'Detecting generated images', items: [
    { title: 'Towards Universal Fake Image Detectors that Generalize Across Generative Models (UnivFD)', who: 'Ojha, Li, Lee', venue: 'CVPR 2023', href: 'https://arxiv.org/abs/2302.10174', tag: 'implemented' },
    { title: 'On the Detection of Synthetic Images Generated by Diffusion Models', who: 'Corvi et al.', venue: 'ICASSP 2023', href: 'https://arxiv.org/abs/2211.00680', tag: 'read' },
    { title: 'Towards the Detection of Diffusion Model Deepfakes', who: 'Ricker, Damm, Holz, Fischer', venue: 'arXiv 2022', href: 'https://arxiv.org/abs/2210.14571', tag: 'read' },
    { title: 'Fake or JPEG? Revealing Common Biases in Generated Image Detection Datasets', who: 'Grommelt et al.', venue: 'arXiv 2024', href: 'https://arxiv.org/abs/2403.17608', tag: 'read' },
    { title: 'Detecting Origin Attribution for Text-to-Image Diffusion Models', who: 'Xu, Zhang, Shi', venue: 'WACV 2025', href: 'https://arxiv.org/abs/2403.19653', tag: 'read' },
    { title: 'Orthogonal Subspace Decomposition for Generalizable AI-Generated Image Detection (Effort)', who: 'Yan et al.', venue: 'ICML 2025', href: 'https://arxiv.org/abs/2411.15633', tag: 'built on' },
  ]},
  { group: 'Invariance & robustness', items: [
    { title: 'Invariant Risk Minimization', who: 'Arjovsky, Bottou, Gulrajani, Lopez-Paz', venue: 'arXiv 2019', href: 'https://arxiv.org/abs/1907.02893', tag: 'built on' },
    { title: 'Fishr: Invariant Gradient Variances for Out-of-Distribution Generalization', who: 'Ramé, Dancette, Cord', venue: 'ICML 2022', href: 'https://arxiv.org/abs/2109.02934', tag: 'built on' },
  ]},
  { group: 'Metrics & out-of-distribution', items: [
    { title: 'GANs Trained by a Two Time-Scale Update Rule Converge to a Local Nash Equilibrium (FID)', who: 'Heusel et al.', venue: 'NeurIPS 2017', href: 'https://arxiv.org/abs/1706.08500', tag: 'implemented' },
    { title: 'A Simple Unified Framework for Detecting Out-of-Distribution Samples and Adversarial Attacks (Mahalanobis)', who: 'Lee, Lee, Lee, Shin', venue: 'NeurIPS 2018', href: 'https://arxiv.org/abs/1807.03888', tag: 'implemented' },
  ]},
  { group: 'Efficiency', items: [
    { title: 'Q-Diffusion: Quantizing Diffusion Models', who: 'Li et al.', venue: 'ICCV 2023', href: 'https://arxiv.org/abs/2302.04304', tag: 'read' },
  ]},
];

export type Entry = { title: string; href?: string; meta: string; text: string };

export const research: Entry[] = [
  {
    title: 'Transfer diagnostics for deepfake detectors',
    meta: 'Remote collaboration with Prof. Harry Yang (HKUST) · ongoing',
    text: `Diagnosing how deepfake detectors transfer to images from diffusion models. Processing, compression and crop
      confounds are kept in check, and every run is fully recorded.`,
  },
  {
    title: 'Federated learning for traffic, two papers in progress',
    meta: 'Final-year project · in progress',
    text: `One makes federated incident detection hold up on unseen cameras and over time. The other makes federated
      traffic forecasting differentially private and incident-aware, for emergency routing.`,
  },
];

export const experience: Entry[] = [
  {
    title: 'Advanced Application Engineering Analyst Intern, Accenture',
    href: 'https://github.com/Lit07/SOA_Guardian_v2',
    meta: 'SoA Guardian · GenAI and agentic AI · Bangalore · May to July 2026',
    text: `I built SoA Guardian, which turns vendor statements of account, arriving as digital PDFs, scans, Excel or CSV,
      into one fixed schema and a reconciled Excel file for the finance team. An agent classifies each file and picks the
      cheapest engine that will do, columns are mapped to the schema with embeddings and an LLM fallback, and every
      statement is held to its own balance equation. Rows that fail go through a bounded repair loop or to a human
      reviewer, and every change lands in an audit log. My own addition was a constraint solver that fixes OCR slips only
      when exactly one fix makes the statement balance.`,
  },
];

export const projects: Entry[] = [
  {
    title: 'PQC Scanner, a post-quantum risk analyzer',
    href: 'https://github.com/Lit07/pqc-scanner',
    meta: 'Backend & research lead · FastAPI, Celery, Redis, PostgreSQL, Docker',
    text: `The quantum computers that break today's encryption are not here yet, but traffic recorded now can be read
      once they are. PQC Scanner sweeps TLS endpoints at scale, reads their certificates and cipher suites, and scores how
      exposed each one is to Shor, Grover and harvest-now-decrypt-later attacks. It then writes a cryptographic bill of
      materials and a phased migration plan that maps every legacy algorithm to its NIST post-quantum replacement.`,
  },
  {
    title: 'Persona Cloner',
    meta: 'PyTorch, PEFT (LoRA), bitsandbytes, FastAPI',
    text: `Can a small model learn to sound like one particular person? I fine-tuned Phi-2 (2.7B) with LoRA on about
      100K messages of real chat history, with a rolling memory of the last few turns so replies stay in context.
      8-bit quantization cut VRAM use by 40%, enough to run it on a 6 GB consumer GPU.`,
  },
  {
    title: 'Literary AI Studio',
    meta: 'PyTorch, QLoRA (NF4), Qwen2.5, FastAPI, React',
    text: `Style is more than vocabulary. A crawler gathers an author's writing and measures its stylometric fingerprint,
      sentence length, vocabulary diversity and punctuation density, and a QLoRA adapter on Qwen2.5-1.5B learns to write
      in that voice, trained in 4-bit. Temperature, top-k and top-p sampling are written from
      scratch, so every knob in generation is one I understand.`,
  },
];

// "Technical Scripts": your own technical write-ups and ideas. Leave the list empty to show the work-in-progress line.
export const writeups: Entry[] = [];

// "Beyond the Curriculum": poetry and plays. Leave the list empty to show the work-in-progress line.
export const beyond: Entry[] = [
  {
    title: 'Fear of Void',
    meta: 'Poem',
    text: `<u>Reckless</u> fondled me into an endless <u>ocean</u>,
Suffocating abandon, I drowned too deep.
That gentle warmth to cradle to sleep
I longed for, created a <u><strong>void</strong></u> in return.
When the nightmares subside, reality begins,
Loss of human touch, the scars reburn.

Countless hushed wails, no tears now left to shed.
The very hands I rested upon strangled me dead.
"What worse? " I asked , but the world didn't disappoint.
To the unending pain I lost myself, nowhere to find.
I reached out for help, found complete solitude, it's cold embrace.
In this gloomy darkness for me there is no place.

Time might stitch my wounds, maybe they'll heal,
But I'll unstitch them again and again, as life's already fallen apart,
And there's nothing I any longer feel.
Love was the <u>ocean</u>, <u>reckless</u> was the heart,
Wandered in search of completeness, now <u><strong>void</strong></u> is me.`,
  },
  {
    title: 'The Shibpur Incident',
    href: '/writing/The_Shibpur_Incident.pdf',
    meta: 'Play in four acts, Hinglish · Best Script, Expressions 2024 · <a href="/writing/The_Shibpur_Incident_English_first_draft.pdf">read the English first draft</a>',
    text: `A boy who lives for his afternoon naps and evening chai loses his best friend to the pandemic, shuts himself away for two years, and finds his way back over a cup of tea at Shibpur, carrying his friend's dream as his own.`,
  },
];

export const education: Entry[] = [
  {
    title: 'Indian Institute of Engineering Science and Technology, Shibpur',
    meta: 'B.Tech in Information Technology · 2023 – 2027 · CGPA 8.82 / 10',
    text: '',
  },
];
