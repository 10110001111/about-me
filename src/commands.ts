export type Command = () => string;
export type Commands = Record<string, Command>;

export const ASCII_ART = `
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║     ██╗    ██╗ █████╗ ███████╗██╗                                         ║
║     ██║    ██║██╔══██╗██╔════╝██║                                         ║
║     ██║ █╗ ██║███████║███████╗██║                                         ║
║     ██║███╗██║██╔══██║╚════██║██║                                         ║
║     ╚███╔███╔╝██║  ██║███████║██║                                         ║
║      ╚══╝╚══╝ ╚═╝  ╚═╝╚══════╝╚═╝                                         ║
║                                                                           ║
║    > NETWORK SECURITY ENGINEER                                            ║
║    > SYSTEM STATUS: OPERATIONAL                                           ║
║    > ACCESS LEVEL: PUBLIC                                                 ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝`;

export const commands: Commands = {
  help: () => `
Available commands:
  help        - Show this help message
  about       - Display information about Wasi
  whoami      - Current user information
  skills      - List technical skills and expertise
  domains     - Show operational domains
  arsenal     - Display security tools and technologies
  collaborate - View collaboration interests
  contact     - Get contact information
  stats       - Show GitHub statistics
  clear       - Clear terminal screen
  exit        - Close terminal session
`,
  about: () => `
NETWORK SECURITY ENGINEER

Current Role:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Specializing in infrastructure hardening and threat mitigation.
Architecting resilient networks, defending digital perimeters,
and building secure systems that stand against modern threats.

Mission: Design and implement enterprise-level security solutions
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`,
  whoami: () => `
root@wasi:~$ id
uid=0(wasi) gid=0(security) groups=0(security),1(network),2(cloud)

Current User: Wasi
Role: Network Security Engineer
Clearance: PUBLIC
Status: ACTIVE
Location: Cyber Defense Operations
`,
  skills: () => `
╔═══════════════════════════════════════════════════════════════╗
║                    TECHNICAL PROFICIENCIES                    ║
╚═══════════════════════════════════════════════════════════════╝

[PROGRAMMING & SCRIPTING]
├── Python          ████████████████████ 95%
├── Bash            ███████████████████░ 90%
└── PowerShell      ██████████████████░░ 85%

[NETWORK INFRASTRUCTURE]
├── Cisco           ████████████████████ 95%
├── Juniper         ██████████████████░░ 85%
├── Palo Alto       ███████████████████░ 90%
└── Fortinet        ██████████████████░░ 85%

[SECURITY TOOLS]
├── IDS/IPS         ████████████████████ 95%
├── SIEM            ███████████████████░ 90%
├── EDR/XDR         ███████████████████░ 90%
├── Wireshark       ████████████████████ 95%
├── Nmap            ████████████████████ 95%
├── Metasploit      ██████████████████░░ 85%
└── Burp Suite      ███████████████████░ 90%

[CLOUD SECURITY]
├── AWS             ███████████████████░ 90%
├── Azure           ██████████████████░░ 85%
├── GCP             ██████████████████░░ 85%
└── CSPM            ██████████████████░░ 85%

[ZERO TRUST & SASE]
├── Zscaler         ███████████████████░ 90%
├── Cloudflare ZT   ██████████████████░░ 85%
└── ZTNA            ███████████████████░ 90%

[DEVSECOPS & AUTOMATION]
├── Terraform       ███████████████████░ 90%
├── Ansible         ██████████████████░░ 85%
└── Kubernetes Sec  ██████████████████░░ 85%

[THREAT INTELLIGENCE]
├── MITRE ATT&CK    ████████████████████ 95%
├── MISP            ██████████████████░░ 85%
└── Threat Hunting  ███████████████████░ 90%

[VULNERABILITY MANAGEMENT]
├── Tenable/Nessus  ███████████████████░ 90%
├── Qualys          ██████████████████░░ 85%
└── Rapid7          ██████████████████░░ 85%
`,
  domains: () => `
OPERATIONAL DOMAINS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[🔒 NETWORK SECURITY]
  ✓ Software-Defined Networking (SDN)
  ✓ Network Segmentation & Microsegmentation
  ✓ Zero Trust Network Access (ZTNA)
  ✓ SASE Architecture (Zscaler, Cloudflare)
  ✓ SD-WAN Security
  ✓ Infrastructure Automation

[☁️ CLOUD SECURITY]
  ✓ AWS Security Hub, GuardDuty, Inspector
  ✓ Azure Defender & Sentinel
  ✓ GCP Security Command Center
  ✓ Cloud Security Posture Management (CSPM)
  ✓ Container & Kubernetes Security
  ✓ Multi-Cloud Security Posture

[🛡️ THREAT OPERATIONS]
  ✓ Threat Hunting & Intelligence (MITRE ATT&CK)
  ✓ SIEM: Splunk, Microsoft Sentinel, QRadar
  ✓ EDR/XDR: CrowdStrike Falcon, SentinelOne
  ✓ Incident Response & Digital Forensics
  ✓ Security Operations Center (SOC)
  ✓ Vulnerability Management (Tenable, Qualys)

[🔐 IDENTITY & ACCESS]
  ✓ Zero Trust Identity (Okta, Entra ID)
  ✓ Privileged Access Management (PAM)
  ✓ PKI Implementation
  ✓ MFA & Passwordless Auth
  ✓ Secure Key Management

[⚙️ DEVSECOPS]
  ✓ Infrastructure as Code (Terraform, Ansible)
  ✓ CI/CD Pipeline Security
  ✓ Container Security (Falco, OPA)
  ✓ Secrets Management (HashiCorp Vault)
  ✓ Security Automation & Orchestration (SOAR)

[🤖 AI & MACHINE LEARNING]
  ✓ ML-Driven Threat Detection
  ✓ Automated Security Analysis
  ✓ Behavioral Analytics & UEBA
  ✓ Predictive Security Models
`,
  arsenal: () => `
class SecurityEngineer:
    def __init__(self):
        self.network_gear = [
            'Cisco IOS/IOS-XE/NX-OS',
            'Juniper Junos',
            'Palo Alto PAN-OS',
            'Fortinet FortiOS',
            'Check Point NGFW',
            'Cisco Firepower (FTD)'
        ]

        self.sase_zero_trust = [
            'Zscaler Internet Access (ZIA)',
            'Zscaler Private Access (ZPA)',
            'Cloudflare Zero Trust',
            'Okta Identity Platform',
            'Microsoft Entra ID'
        ]

        self.siem_soc = [
            'Splunk Enterprise Security',
            'Microsoft Sentinel',
            'IBM QRadar',
            'Elastic SIEM',
            'Sumo Logic'
        ]

        self.edr_xdr = [
            'CrowdStrike Falcon',
            'SentinelOne Singularity',
            'Microsoft Defender XDR',
            'Palo Alto Cortex XDR'
        ]

        self.cloud_security = [
            'AWS Security Hub & GuardDuty',
            'Azure Defender for Cloud',
            'GCP Security Command Center',
            'Wiz Cloud Security Platform',
            'Palo Alto Prisma Cloud'
        ]

        self.vuln_management = [
            'Tenable Nessus / Tenable.io',
            'Qualys VMDR',
            'Rapid7 InsightVM'
        ]

        self.devsecops = [
            'Terraform - Infrastructure as Code',
            'Ansible - Configuration Automation',
            'HashiCorp Vault - Secrets Management',
            'Falco - Container Runtime Security',
            'OPA/Gatekeeper - Policy Enforcement'
        ]

        self.pentesting_kit = [
            'Wireshark - Network Protocol Analyzer',
            'Nmap - Network Scanner',
            'Metasploit - Exploitation Framework',
            'Burp Suite - Web Security Testing',
            'BloodHound - AD Attack Path Analysis',
            'Nuclei - Vulnerability Scanner',
            'Zeek - Network Analysis Framework'
        ]

        self.languages = [
            'Python - Automation & Scripting',
            'Bash - System Administration',
            'PowerShell - Windows Management'
        ]

    def deploy_security(self):
        return "🟢 Maximum protection enabled"

>>> SecurityEngineer().deploy_security()
'🟢 Maximum protection enabled'
`,
  collaborate: () => `
COLLABORATION PROTOCOLS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

seeking_partners_for:

  advanced_networking:
    - Software-Defined Networking (SDN)
    - Network automation and orchestration
    - Infrastructure as Code (IaC)

  cloud_security:
    - Multi-cloud architecture & security
    - Cloud-native security solutions
    - Container and Kubernetes security

  ai_security:
    - ML-driven threat detection
    - Automated incident response
    - Behavioral analytics

  cryptography:
    - Next-gen encryption protocols
    - Post-quantum cryptography
    - Secure communication systems

  red_team:
    - Offensive security operations
    - Penetration testing frameworks
    - Security tool development

Status: OPEN FOR COLLABORATION
Priority: HIGH
`,
  contact: () => `
╔═══════════════════════════════════════════════════════════════╗
║                    SECURE COMMUNICATION CHANNEL               ║
╚═══════════════════════════════════════════════════════════════╝

┌─[root@wasi]─[~]
└──╼ $ curl -X GET https://github.com/10110001111

[ESTABLISHING SECURE CONNECTION...]
[HANDSHAKE COMPLETE]
[ENCRYPTION: TLS 1.3]

GitHub Profile:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔗 https://github.com/10110001111

[CONNECTION STATUS: ACTIVE]
[LATENCY: <10ms]
[SECURITY LEVEL: MAXIMUM]
`,
  stats: () => `
SYSTEM STATISTICS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Visit your GitHub profile to view real-time statistics:
   https://github.com/10110001111

Available metrics:
  ✓ Contribution activity
  ✓ Repository statistics
  ✓ Language distribution
  ✓ Commit frequency
  ✓ Issue and PR metrics

[REAL-TIME MONITORING: ENABLED]
[DATA REFRESH RATE: LIVE]
`,
  clear: () => 'CLEAR',
  exit: () => `
[CLOSING SECURE SESSION...]
[CLEARING SENSITIVE DATA...]
[DISCONNECTING...]

Session terminated. Refresh page to reconnect.
`,
};
