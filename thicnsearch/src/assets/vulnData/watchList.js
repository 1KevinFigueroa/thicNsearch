import React from "react"


const watchList = [
{
            "cveID": "CVE-2024-23222",
            "vendorProject": "Apple",
            "product": "Multiple Products",
            "vulnerabilityName": "Apple Multiple Products Type Confusion Vulnerability",
            "dateAdded": "2024-01-23",
            "shortDescription": "Apple iOS, iPadOS, macOS, tvOS, and Safari WebKit contain a type confusion vulnerability that leads to code execution when processing maliciously crafted web content.",
            "requiredAction": "Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.",
            "dueDate": "2024-02-13",
            "knownRansomwareCampaignUse": "Unknown",
            "notes": "https:\/\/support.apple.com\/en-us\/HT214055,\r\nhttps:\/\/support.apple.com\/en-us\/HT214056, https:\/\/support.apple.com\/en-us\/HT214057, https:\/\/support.apple.com\/en-us\/HT214058, https:\/\/support.apple.com\/en-us\/HT214059, https:\/\/support.apple.com\/en-us\/HT214061, https:\/\/support.apple.com\/en-us\/HT214063"
        },
        {
            "cveID": "CVE-2024-21893",
            "vendorProject": "Ivanti",
            "product": "Connect Secure, Policy Secure, and Neurons",
            "vulnerabilityName": "Ivanti Connect Secure, Policy Secure, and Neurons Server-Side Request Forgery (SSRF) Vulnerability",
            "dateAdded": "2024-01-31",
            "shortDescription": "Ivanti Connect Secure (ICS, formerly known as Pulse Connect Secure), Ivanti Policy Secure, and Ivanti Neurons contain a server-side request forgery (SSRF) vulnerability in the SAML component that allows an attacker to access certain restricted resources without authentication.",
            "requiredAction": "Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.",
            "dueDate": "2024-02-02",
            "knownRansomwareCampaignUse": "Unknown",
            "notes": "https:\/\/forums.ivanti.com\/s\/article\/KB-CVE-2023-46805-Authentication-Bypass-CVE-2024-21887-Command-Injection-for-Ivanti-Connect-Secure-and-Ivanti-Policy-Secure-Gateways?language=en_US"
        },
        {
            "cveID": "CVE-2024-21762",
            "vendorProject": "Fortinet",
            "product": "FortiOS",
            "vulnerabilityName": "Fortinet FortiOS Out-of-Bound Write Vulnerability",
            "dateAdded": "2024-02-09",
            "shortDescription": "Fortinet FortiOS contains an out-of-bound write vulnerability that allows a remote unauthenticated attacker to execute code or commands via specially crafted HTTP requests.",
            "requiredAction": "Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.",
            "dueDate": "2024-02-16",
            "knownRansomwareCampaignUse": "Unknown",
            "notes": "https:\/\/fortiguard.fortinet.com\/psirt\/FG-IR-24-015"
        },
        {
            "cveID": "CVE-2024-21412",
            "vendorProject": "Microsoft",
            "product": "Windows",
            "vulnerabilityName": "Microsoft Windows Internet Shortcut Files Security Feature Bypass Vulnerability",
            "dateAdded": "2024-02-13",
            "shortDescription": "Microsoft Windows Internet Shortcut Files contains an unspecified vulnerability that allows for a security feature bypass.",
            "requiredAction": "Apply mitigations per vendor instructions or discontinue use of the product if mitigations are unavailable.",
            "dueDate": "2024-03-05",
            "knownRansomwareCampaignUse": "Unknown",
            "notes": "https:\/\/msrc.microsoft.com\/update-guide\/en-US\/vulnerability\/CVE-2024-21412"
        },
];

export default watchList();