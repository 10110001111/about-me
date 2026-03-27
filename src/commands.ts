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
├── Wireshark       ████████████████████ 95%
├── Nmap            ████████████████████ 95%
├── Metasploit      ██████████████████░░ 85%
└── Burp Suite      ███████████████████░ 90%

[CLOUD PLATFORMS]
├── AWS             ███████████████████░ 90%
├── Azure           ██████████████████░░ 85%
└── GCP             ██████████████████░░ 85%
`,
  domains: () => `
OPERATIONAL DOMAINS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[🔒 NETWORK WARFARE]
  ✓ Software-Defined Networking
  ✓ Network Segmentation & Isolation
  ✓ Zero Trust Architecture
  ✓ Infrastructure Automation

[☁️ CLOUD BATTLEGROUND]
  ✓ AWS Security Architecture
  ✓ Azure Cloud Infrastructure
  ✓ GCP Resource Management
  ✓ Multi-Cloud Security Posture

[🛡️ CYBER DEFENSE]
  ✓ Threat Hunting & Intelligence
  ✓ Intrusion Detection Systems
  ✓ Incident Response Protocols
  ✓ Security Operations Center

[🔐 CRYPTOGRAPHIC OPERATIONS]
  ✓ PKI Implementation
  ✓ Encryption Standards
  ✓ Secure Key Management
  ✓ Protocol Analysis

[🤖 AI & MACHINE LEARNING]
  ✓ ML-Driven Threat Detection
  ✓ Automated Security Analysis
  ✓ Behavioral Analytics
  ✓ Predictive Security Models
`,
  arsenal: () => `
class SecurityEngineer:
    def __init__(self):
        self.network_gear = [
            'Cisco IOS/IOS-XE',
            'Juniper Junos',
            'Palo Alto PAN-OS',
            'Fortinet FortiOS'
        ]

        self.security_tools = [
            'IDS/IPS Systems',
            'SIEM Platforms',
            'Next-Gen Firewalls',
            'VPN Solutions'
        ]

        self.cloud_platforms = [
            'Amazon Web Services',
            'Microsoft Azure',
            'Google Cloud Platform'
        ]

        self.pentesting_kit = [
            'Wireshark - Network Protocol Analyzer',
            'Nmap - Network Scanner',
            'Metasploit - Exploitation Framework',
            'Burp Suite - Web Security Testing'
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
