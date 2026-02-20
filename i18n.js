/**
 * Internationalization (i18n) for English and Portuguese
 */
const i18n = {
    currentLang: 'en',

    translations: {
        en: {
            meta: {
                title: 'Felipe Divensi - Software Architect',
                description: 'Felipe Divensi - Software Architect with 10+ years of expertise in cloud-native solutions, AI integration, and scalable system design'
            },
            nav: { home: 'Home', about: 'About', skills: 'Skills', experience: 'Experience', projects: 'Projects', education: 'Education', contact: 'Contact' },
            hero: {
                subtitle: 'Software Architect · Bachelor of Computer Science',
                description: 'Experienced Software Architect with over 10 years designing scalable, cloud-native solutions across AWS, Azure, and GCP. AI-driven fraud detection, voice recognition, and automation that enhance operational efficiency and security.',
                ctaTouch: 'Get in Touch',
                ctaWork: 'View Work'
            },
            about: {
                title: 'About Me',
                lead: 'Experienced Software Architect with over 10 years of expertise in designing and implementing scalable, cloud-native solutions across AWS, Azure, and GCP.',
                p1: 'Demonstrated success in leading cross-functional development teams to deliver AI-driven fraud detection, voice recognition, and automation solutions that enhance operational efficiency and security. Skilled in full-stack development, cloud migrations, and optimizing ETL processes to ensure system stability, scalability, and cost-effectiveness.',
                p2: 'Proficient in a wide range of programming languages and frameworks, with a strong commitment to delivering high-quality software solutions that align with business objectives and user needs. Based in Cascavel, PR, Brazil. Portuguese (native), English (fluent), Spanish and French (basic).',
                statYears: 'Years Experience',
                statTech: 'Technologies Mastered',
                statLangs: 'Languages Spoken'
            },
            skills: {
                title: 'Technical Expertise',
                catLangs: 'Programming Languages',
                catFrameworks: 'Frameworks & Libraries',
                catCloud: 'Cloud Platforms',
                catDatabases: 'Databases',
                catTools: 'Tools & Methodologies',
                catAI: 'AI Integration',
                catSpoken: 'Spoken Languages',
                spokenList: 'Portuguese (native), English (fluent), Spanish / French (basic)'
            },
            experience: {
                title: 'Professional Experience',
                exp1Date: '2 years · São Paulo, Brazil',
                exp1Title: 'Software Architect',
                exp1Company: 'Technology Consulting Firm',
                exp1Desc: 'Designed, developed, and trained an AI-driven machine learning model for fraud detection in document verification, enhancing security and compliance. Implemented and trained an advanced ML-based AI solution for voice recognition, improving user authentication and accessibility. Architected robust software solutions to optimize ETL processes using AWS Step Functions, Lambda, Batch, and Fargate. Automated critical legacy processes and led cross-functional development teams.',
                exp2Date: '2 years 10 months · São Paulo, Brazil',
                exp2Title: 'Senior Software Engineer & Tech Lead',
                exp2Company: 'Healthcare Technology Company',
                exp2Desc: 'Led a team of 7 developers in designing and implementing scalable web applications and APIs for healthcare professionals. Enhanced the stability, scalability, and cost-efficiency of critical healthcare applications, ensuring high availability. Applied Agile methodologies, maintained and modernized legacy software systems, and conducted in-depth software design reviews. Implemented best practices for software quality, security, and performance.',
                exp3Date: '3 years 3 months · São Paulo, Brazil',
                exp3Title: 'Senior Software Engineer / Software Architect',
                exp3Company: 'Software Development Consulting',
                exp3Desc: 'Developed an AI-powered chatbot to improve helpdesk efficiency and customer satisfaction. Authored comprehensive software documentation and architected innovative solutions. Redesigned system architecture and optimized cloud resource allocation, reducing Google Cloud infrastructure costs by more than 50% through workload right-sizing, service consolidation, and elimination of inefficient patterns. Led development teams and established best practices; worked on mobile, web, and serverless solutions.',
                exp4Date: '11 months · São Paulo, Brazil',
                exp4Title: 'Senior Software Engineer',
                exp4Company: 'IT Consulting Firm',
                exp4Desc: 'Utilized Agile methodologies to enhance project delivery efficiency. Developed end-to-end solutions for mobile, web, and backend systems. Led the migration of self-hosted software to cloud platforms, improving scalability. Implemented unit and end-to-end testing strategies to ensure software reliability. Worked on both native and hybrid mobile development projects.',
                exp5Date: '1 year 4 months · Medianeira, Paraná, Brazil',
                exp5Title: 'Software Engineer',
                exp5Company: 'Software Company',
                exp5Desc: 'Applied Agile methodologies and performed in-depth requirements analysis. Migrated critical legacy desktop applications to cloud environments. Developed a feature-rich mobile application using React Native, ensuring parity with the web app. Worked extensively with React, React Native, Express, and MongoDB. Conducted debugging and performance optimization of legacy applications.',
                exp6Date: '1 year 9 months · Medianeira, Paraná, Brazil',
                exp6Title: 'Software Analyst',
                exp6Company: 'Agribusiness Cooperative',
                exp6Desc: 'Developed and maintained web applications and APIs for various business needs. Built full-stack solutions using JavaScript, C#, Java, and PHP. Managed and optimized MySQL and Oracle databases. Designed and automated reporting systems to support business operations.'
            },
            projects: {
                title: 'Featured Projects',
                fraudTitle: 'AI-Driven Fraud Detection System',
                fraudDesc: 'Designed and developed an advanced AI-powered fraud detection system that enhances security and operational efficiency. Implemented machine learning models to identify and prevent fraudulent activities in real-time across multiple channels.',
                voiceTitle: 'Voice Recognition AI System',
                voiceDesc: 'Implemented an advanced AI solution for voice recognition technology that processes natural language and provides intelligent responses. Integrated with modern machine learning frameworks to deliver high-accuracy speech-to-text and text-to-speech capabilities.',
                healthTitle: 'Healthcare Application Optimization',
                healthDesc: 'Led the enhancement of healthcare applications for improved stability, scalability, and cost-efficiency. Optimized ETL processes and automated critical legacy systems while maintaining high availability and compliance standards for medical data processing.',
                homelabTitle: 'Homelab Infrastructure',
                homelabDesc: 'Self-hosted homelab for ML experimentation and local inference of large language models (OpenAI GPT-OSS, DeepSeek). Containerization and orchestration with Docker, Kubernetes, and Terraform; service images, cluster provisioning, and deployments via Helm and Kubernetes manifests. GPU-enabled workloads for local model serving, virtualized environments for networking (VLANs, routing, firewall), home automation with IoT, and workflow orchestration with Apache Airflow.',
                parquetTitle: 'Parquet Viewer',
                parquetDesc: 'Cross-platform desktop application (Linux, macOS, Windows) for visualizing, searching, and editing Apache Parquet files. Efficient columnar data loading for large datasets with minimal memory footprint. User-friendly interface for schema inspection, filtering, and in-place data modification. Published as open-source with modular architecture for extensibility and community contributions.',
                airflowTitle: 'Airflow Client for iOS, iPadOS & macOS',
                airflowDesc: 'Native Swift-based client for Apache Airflow supporting iOS, iPadOS, and macOS. Secure multi-instance management with token-based authentication and environment isolation. Monitor DAGs, task logs, execution states, and manually trigger jobs across multiple Airflow deployments. Performance-focused with offline caching and platform-consistent UI/UX. CI/CD with Xcode Cloud, automated tests, and continuous delivery to TestFlight for internal distribution.',
                typeAiml: 'AI/ML',
                typeEnterprise: 'Enterprise',
                typeInfra: 'Infrastructure',
                typeOpenSource: 'Open Source',
                typeNative: 'Native',
                metricAccuracy: 'Accuracy',
                metricDetection: 'Detection',
                metricTeam: 'Team Members',
                metricAvailability: 'Availability',
                metricPersonal: 'Personal',
                metricInference: 'Inference',
                metricMultiLang: 'Support',
                metricOpenSource: 'Open Source',
                metricPlatforms: 'Platforms',
                metricDistribution: 'Distribution'
            },
            education: {
                title: 'Education & Certifications',
                degreeTitle: "Bachelor's Degree in Computer Science",
                degreeSchool: 'Federal University of Technology – Paraná, Campus Medianeira, Paraná, Brazil',
                degreeAward: 'Academic Work Awarded by the Brazilian Academy of Forensic Sciences.',
                degreeCourses: 'Relevant courses: Pentaho Business Intelligence Open Source; Business Process Model and Notation (BPMN); LGPD – OneTrust Certified Professional.',
                toeflTitle: 'TOEFL ITP Level B2',
                toeflSchool: 'Test of English as a Foreign Language (TOEFL), 2018 · UTFPR, Brazil',
                toeflDesc: 'Certification in English as a foreign language.'
            },
            contact: {
                title: "Let's Connect",
                text: "I'm always interested in discussing new projects, innovative ideas, or opportunities to help build exceptional systems. Feel free to reach out!"
            },
            footer: { rights: 'All rights reserved.', tagline: "Designing the future, one system at a time." }
        },
        pt: {
            meta: {
                title: 'Felipe Divensi - Arquiteto de Software',
                description: 'Felipe Divensi - Arquiteto de Software com mais de 10 anos de experiência em soluções cloud-native, integração de IA e arquitetura escalável'
            },
            nav: { home: 'Início', about: 'Sobre', skills: 'Competências', experience: 'Experiência', projects: 'Projetos', education: 'Formação', contact: 'Contato' },
            hero: {
                subtitle: 'Arquiteto de Software · Bacharel em Ciência da Computação',
                description: 'Arquiteto de Software com mais de 10 anos projetando soluções escaláveis e cloud-native na AWS, Azure e GCP. Detecção de fraude com IA, reconhecimento de voz e automação que aumentam eficiência operacional e segurança.',
                ctaTouch: 'Fale Comigo',
                ctaWork: 'Ver Trabalhos'
            },
            about: {
                title: 'Sobre Mim',
                lead: 'Arquiteto de Software com mais de 10 anos de experiência em projeto e implementação de soluções escaláveis e cloud-native na AWS, Azure e GCP.',
                p1: 'Sucesso comprovado em liderar times de desenvolvimento para entregar detecção de fraude com IA, reconhecimento de voz e automação que aumentam eficiência e segurança. Experiência em desenvolvimento full-stack, migrações para nuvem e otimização de processos ETL para garantir estabilidade, escalabilidade e custo-benefício.',
                p2: 'Proficiente em diversas linguagens e frameworks, com compromisso em entregar software de alta qualidade alinhado aos objetivos de negócio e às necessidades do usuário. Baseado em Cascavel, PR, Brasil. Português (nativo), inglês (fluente), espanhol e francês (básico).',
                statYears: 'Anos de Experiência',
                statTech: 'Tecnologias Dominadas',
                statLangs: 'Idiomas'
            },
            skills: {
                title: 'Competências Técnicas',
                catLangs: 'Linguagens de Programação',
                catFrameworks: 'Frameworks e Bibliotecas',
                catCloud: 'Plataformas em Nuvem',
                catDatabases: 'Bancos de Dados',
                catTools: 'Ferramentas e Metodologias',
                catAI: 'Integração com IA',
                catSpoken: 'Idiomas',
                spokenList: 'Português (nativo), Inglês (fluente), Espanhol / Francês (básico)'
            },
            experience: {
                title: 'Experiência Profissional',
                exp1Date: '2 anos · São Paulo, Brasil',
                exp1Title: 'Arquiteto de Software',
                exp1Company: 'Empresa de Consultoria em Tecnologia',
                exp1Desc: 'Projetou, desenvolveu e treinou um modelo de machine learning para detecção de fraude em verificação de documentos, aumentando segurança e conformidade. Implementou e treinou solução de IA para reconhecimento de voz, melhorando autenticação e acessibilidade. Arquitetou soluções para otimizar processos ETL com AWS Step Functions, Lambda, Batch e Fargate. Automatizou processos legados e liderou times de desenvolvimento.',
                exp2Date: '2 anos e 10 meses · São Paulo, Brasil',
                exp2Title: 'Engenheiro de Software Sênior e Tech Lead',
                exp2Company: 'Empresa de Tecnologia em Saúde',
                exp2Desc: 'Liderou equipe de 7 desenvolvedores no projeto e implementação de aplicações web e APIs escaláveis para profissionais de saúde. Aumentou estabilidade, escalabilidade e eficiência de custos de aplicações críticas, garantindo alta disponibilidade. Aplicou metodologias ágeis, manteve e modernizou sistemas legados e conduziu revisões de design de software. Implementou boas práticas de qualidade, segurança e performance.',
                exp3Date: '3 anos e 3 meses · São Paulo, Brasil',
                exp3Title: 'Engenheiro de Software Sênior / Arquiteto de Software',
                exp3Company: 'Consultoria em Desenvolvimento de Software',
                exp3Desc: 'Desenvolveu chatbot com IA para melhorar eficiência do helpdesk e satisfação do cliente. Elaborou documentação de software e arquitetou soluções inovadoras. Redesenhou arquitetura e otimizou alocação de recursos na nuvem, reduzindo custos de infraestrutura no Google Cloud em mais de 50% através de right-sizing, consolidação de serviços e eliminação de padrões ineficientes. Liderou times de desenvolvimento; atuou em soluções mobile, web e serverless.',
                exp4Date: '11 meses · São Paulo, Brasil',
                exp4Title: 'Engenheiro de Software Sênior',
                exp4Company: 'Empresa de Consultoria em TI',
                exp4Desc: 'Utilizou metodologias ágeis para aumentar a eficiência de entrega. Desenvolveu soluções end-to-end para mobile, web e backend. Liderou a migração de software self-hosted para a nuvem, melhorando escalabilidade. Implementou estratégias de testes unitários e end-to-end para garantir confiabilidade. Atuou em projetos nativos e híbridos para mobile.',
                exp5Date: '1 ano e 4 meses · Medianeira, Paraná, Brasil',
                exp5Title: 'Engenheiro de Software',
                exp5Company: 'Empresa de Software',
                exp5Desc: 'Aplicou metodologias ágeis e realizou análise de requisitos. Migrou aplicações desktop legadas para ambientes de nuvem. Desenvolveu aplicativo mobile com React Native, mantendo paridade com a aplicação web. Atuou com React, React Native, Express e MongoDB. Realizou debugging e otimização de aplicações legadas.',
                exp6Date: '1 ano e 9 meses · Medianeira, Paraná, Brasil',
                exp6Title: 'Analista de Software',
                exp6Company: 'Cooperativa do Agronegócio',
                exp6Desc: 'Desenvolveu e manteve aplicações web e APIs para diversas áreas de negócio. Construiu soluções full-stack com JavaScript, C#, Java e PHP. Gerenciou e otimizou bancos MySQL e Oracle. Projetou e automatizou sistemas de relatórios para suporte às operações.'
            },
            projects: {
                title: 'Projetos em Destaque',
                fraudTitle: 'Sistema de Detecção de Fraude com IA',
                fraudDesc: 'Projetou e desenvolveu um sistema avançado de detecção de fraude com IA que aumenta segurança e eficiência operacional. Implementou modelos de machine learning para identificar e prevenir atividades fraudulentas em tempo real.',
                voiceTitle: 'Sistema de IA para Reconhecimento de Voz',
                voiceDesc: 'Implementou solução de IA para reconhecimento de voz que processa linguagem natural e fornece respostas inteligentes. Integrado a frameworks modernos de ML para speech-to-text e text-to-speech de alta precisão.',
                healthTitle: 'Otimização de Aplicações em Saúde',
                healthDesc: 'Liderou a melhoria de aplicações de saúde para maior estabilidade, escalabilidade e eficiência de custos. Otimizou processos ETL e automatizou sistemas legados mantendo alta disponibilidade e conformidade no processamento de dados médicos.',
                homelabTitle: 'Infraestrutura Homelab',
                homelabDesc: 'Homelab self-hosted para experimentação em ML e inferência local de grandes modelos de linguagem (OpenAI GPT-OSS, DeepSeek). Containerização e orquestração com Docker, Kubernetes e Terraform; imagens, provisionamento de cluster e deploys via Helm e manifests. Workloads com GPU para servir modelos localmente, ambientes virtualizados para rede (VLANs, roteamento, firewall), automação residencial com IoT e orquestração de workflows com Apache Airflow.',
                parquetTitle: 'Parquet Viewer',
                parquetDesc: 'Aplicativo desktop multiplataforma (Linux, macOS, Windows) para visualizar, buscar e editar arquivos Apache Parquet. Carregamento eficiente de dados colunares para grandes conjuntos com baixo uso de memória. Interface para inspeção de schema, filtros e edição in-place. Projeto open-source com arquitetura modular.',
                airflowTitle: 'Cliente Airflow para iOS, iPadOS e macOS',
                airflowDesc: 'Cliente nativo em Swift para Apache Airflow (iOS, iPadOS e macOS). Gestão segura de múltiplas instâncias com autenticação por token e isolamento de ambiente. Monitore DAGs, logs de tarefas, estados de execução e dispare jobs manualmente. Foco em performance com cache offline e UI/UX consistente. CI/CD com Xcode Cloud e distribuição via TestFlight.',
                typeAiml: 'IA/ML',
                typeEnterprise: 'Empresarial',
                typeInfra: 'Infraestrutura',
                typeOpenSource: 'Open Source',
                typeNative: 'Nativo',
                metricAccuracy: 'Precisão',
                metricDetection: 'Detecção',
                metricTeam: 'Membros da Equipe',
                metricAvailability: 'Disponibilidade',
                metricPersonal: 'Pessoal',
                metricInference: 'Inferência',
                metricMultiLang: 'Suporte',
                metricOpenSource: 'Open Source',
                metricPlatforms: 'Plataformas',
                metricDistribution: 'Distribuição'
            },
            education: {
                title: 'Formação e Certificações',
                degreeTitle: 'Bacharelado em Ciência da Computação',
                degreeSchool: 'Universidade Tecnológica Federal do Paraná – Campus Medianeira, Paraná, Brasil',
                degreeAward: 'Trabalho acadêmico premiado pela Academia Brasileira de Ciências Forenses.',
                degreeCourses: 'Cursos relevantes: Pentaho Business Intelligence Open Source; Business Process Model and Notation (BPMN); LGPD – OneTrust Certified Professional.',
                toeflTitle: 'TOEFL ITP Nível B2',
                toeflSchool: 'Test of English as a Foreign Language (TOEFL), 2018 · UTFPR, Brasil',
                toeflDesc: 'Certificação em inglês como língua estrangeira.'
            },
            contact: {
                title: 'Vamos Conectar',
                text: 'Estou sempre aberto a discutir novos projetos, ideias inovadoras ou oportunidades para construir sistemas excepcionais. Entre em contato!'
            },
            footer: { rights: 'Todos os direitos reservados.', tagline: 'Projetando o futuro, um sistema de cada vez.' }
        }
    },

    get(key) {
        const keys = key.split('.');
        let value = this.translations[this.currentLang];
        for (const k of keys) {
            value = value ? value[k] : undefined;
        }
        return value != null ? value : key;
    },

    apply() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const value = this.get(key);
            if (value && el.getAttribute('data-i18n-placeholder') !== 'true') {
                el.textContent = value;
            }
        });
        document.querySelectorAll('[data-i18n-attr]').forEach(el => {
            const spec = el.getAttribute('data-i18n-attr');
            const [attr, key] = spec.split(':');
            const value = this.get(key);
            if (value && attr) el.setAttribute(attr, value);
        });
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', this.get('meta.description'));
        const titleEl = document.querySelector('title');
        if (titleEl) titleEl.textContent = this.get('meta.title');
        document.documentElement.lang = this.currentLang === 'pt' ? 'pt-BR' : 'en';
        document.querySelectorAll('.lang-switcher [data-lang]').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === this.currentLang);
            btn.setAttribute('aria-pressed', btn.getAttribute('data-lang') === this.currentLang);
        });
    },

    setLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLang = lang;
            try { localStorage.setItem('preferredLang', lang); } catch (e) {}
            this.apply();
        }
    },

    init() {
        const stored = localStorage.getItem('preferredLang');
        const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
        if (stored && this.translations[stored]) {
            this.currentLang = stored;
        } else if (browserLang.startsWith('pt')) {
            this.currentLang = 'pt';
        }
        this.apply();
    }
};

document.addEventListener('DOMContentLoaded', () => {
    i18n.init();
    document.getElementById('navbar')?.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-lang]');
        if (btn) i18n.setLanguage(btn.getAttribute('data-lang'));
    });
});
