export interface ExperienceItem {
	id: string
	dates: string
	organization: string
	title: string
	description: string
	highlights: string[]
}

export interface Project {
	id: string
	title: string
	context: string
	summary: string
	stack: string[]
	problem: string
	role: string
	features: string[]
	architecture?: string[]
	decisions?: string[]
	repository?: string
}

export const experiences: ExperienceItem[] = [
	{
		id: 'azula', dates: '2022 — Present', organization: 'Azula Investment Group LLC',
		title: 'Founder / Full-Stack Software Engineer',
		description: 'Architect and ship custom commercial applications while managing the software development lifecycle from data modeling and backend architecture through frontend implementation and Azure deployment.',
		highlights: [
			'Architect full-stack business applications with C#, ASP.NET Core, Angular, PostgreSQL, SQL Server, and Azure.',
			'Engineer secure REST APIs and authentication workflows, relational data structures, and operational interfaces.',
			'Translate business requirements into maintainable software and own debugging, deployment, and ongoing improvement.',
		],
	},
	{
		id: 'simmons', dates: '2024, 2026', organization: 'Simmons Foods',
		title: 'Enterprise Software Engineering — Contract through Azula',
		description: 'Built software addressing logistics, operations, and production-planning workflows.',
		highlights: [
			'Designed a centralized application for trailer-fueling workflows, operational records, users, and reporting using ASP.NET Core, Angular, and PostgreSQL.',
			'Built software and automation around Oracle JD Edwards enterprise data for reporting and production-planning workflows.',
			'Aggregated operational data into usable software views and automated repetitive processing.',
		],
	},
	{
		id: 'fhsu', dates: '2023', organization: 'Fort Hays State University',
		title: 'Research Assistant — Software & Data',
		description: 'Developed software automation supporting genome sequencing research.',
		highlights: [
			'Processed, cleaned, and organized research data while debugging existing tools and workflows.',
			'Collaborated with academic researchers to identify software bottlenecks and improve computational processes.',
		],
	},
]

export const projects: Project[] = [
	{
		id: 'fuel-operations', title: 'Fuel Operations Management System', context: 'Simmons Foods / Enterprise Operations',
		summary: 'Designed and developed a full-stack operational platform to digitize trailer-fueling workflows and centralize operational tracking.',
		stack: ['ASP.NET Core', 'Angular', 'PostgreSQL'],
		problem: 'Paper-heavy fueling processes required a central way to manage operational records, users, workflows, and reporting.',
		role: 'Owned the application workflow, API, relational data model, Angular interface, and reporting experience as contract work delivered through Azula.',
		features: ['Business workflow digitization', 'User and operational record management', 'Reporting', 'Enterprise logistics workflows'],
		architecture: ['Angular client', 'ASP.NET Core REST API', 'PostgreSQL'],
	},
	{
		id: 'trading-scanner', title: 'Real-Time Trading Scanner & Market Analyzer', context: 'Real-time software engineering',
		summary: 'Engineered an event-driven market scanner that consumes real-time market data through the Alpaca WebSocket API.',
		stack: ['C#', '.NET', 'Alpaca API', 'WebSockets', 'LINQ'],
		problem: 'Streaming market data needs to be received, filtered, and evaluated continuously rather than processed as static batches.',
		role: 'Designed the real-time processing flow and implemented the scanner in C#/.NET.',
		features: ['WebSocket data streams', 'Asynchronous event processing', 'LINQ-based filtering', 'Concurrent market-data handling'],
		decisions: ['Used an event-driven WebSocket flow for incoming data and LINQ to express filtering rules.'],
		repository: 'https://github.com/pmongkho/trading-scanner',
	},
	{
		id: 'tattoo-platform', title: 'AI Tattoo Assistant & Marketplace', context: 'Customer and business workflow platform',
		summary: 'Designed software connecting customer consultation workflows, AI-assisted planning, lead capture, artist management, and booking-related processes.',
		stack: ['ASP.NET Core', 'Angular', 'PostgreSQL', 'Azure'],
		problem: 'Consultation details, leads, media, and artist workflows need a structured path from customer inquiry to business follow-up.',
		role: 'Translated the business workflow into a full-stack application spanning data design, APIs, interfaces, authentication, and cloud services.',
		features: ['Consultation and lead workflows', 'Authentication and dashboards', 'Image and file workflows', 'Business and artist management'],
		architecture: ['Angular client', 'ASP.NET Core API', 'PostgreSQL', 'Azure services'],
		repository: 'https://github.com/pmongkho/ai-tattoo-assistant',
	},
	{
		id: 'erp-automation', title: 'ERP & Production Planning Automation', context: 'Simmons Foods / Oracle JD Edwards',
		summary: 'Developed software and data workflows around enterprise Oracle JD Edwards information to support production planning, reporting, and operations.',
		stack: ['Oracle JD Edwards', 'Angular', 'PostgreSQL', 'Workflow Automation'],
		problem: 'Production-planning data required aggregation and clearer software views to support operational workflows.',
		role: 'Built contract software and automation through Azula without exposing confidential business data or proprietary structures.',
		features: ['Enterprise application integration', 'Data aggregation', 'Operational reporting', 'Production-planning workflows'],
	},
]

export const stackGroups = [
	{ name: 'Backend', items: ['C#', '.NET 8', 'ASP.NET Core', 'Web APIs', 'Entity Framework Core', 'LINQ'] },
	{ name: 'Frontend', items: ['Angular', 'TypeScript', 'JavaScript', 'RxJS', 'HTML5', 'CSS3'] },
	{ name: 'Data', items: ['PostgreSQL', 'SQL Server', 'Relational Database Design', 'Query Optimization'] },
	{ name: 'Cloud / Engineering', items: ['Microsoft Azure', 'Azure Blob Storage', 'Azure App Services', 'Git', 'GitHub', 'RESTful APIs', 'JWT / Authentication', 'Clean Architecture', 'Business Process Automation'] },
] as const
