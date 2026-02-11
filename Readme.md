<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/vishal-tiwari9/p2p-investment-algorand">
    <img src="./client/public/algorand-logo.jpg" alt="Logo" width="280">
  </a>

  <h3 align="center">Algo Campus </h3>

  <p align="center">
   Onchain Event Tracking , Monitoring and Verifying Protocol ..where students can also split on Payments
    <br />
    <a href="https://github.com/vishal-tiwari9/p2p-investment-algorand/tree/main/docs"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://github.com/vishal-tiwari9/p2p-investment-algorand/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/vishal-tiwari9/p2p-investment-algorand/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

AlgoCampus is a decentralized event orchestration and social finance protocol designed to facilitate high-integrity, verifiable hackathons and seamless P2P expense management on the Algorand blockchain.

The protocol consists of two primary actors: the Event Admin and the Participant. Admins initiate the lifecycle by deploying an event instance that utilizes Box Storage to manage large-scale participant registries with minimal global state overhead. A Participant enters the ecosystem by submitting an on-chain registration transaction; once validated, the protocol generates a cryptographic proof of attendance. For financial interactions, the protocol leverages Atomic Transfers to facilitate P2P payments and multi-party fee splitting for event-related costs (such as hackathon registrations or resource sharing). This ensures that fee distributions are settled on-chain using the AlgoCampus::settleSplit() function, which requires a group transaction to be signed by all contributing parties. The protocol maintains a low Minimum Balance Requirement (MBR) by offloading individual user data to optimized box clusters, ensuring cost-efficiency for the administrator.

The protocol uses cryptographic signatures to derive verifiable QR codes for secure physical check-ins, and ARC-4 compliant method invocation to ensure interoperability with the broader Algorand ecosystem.

The protocol is optimized for the Algorand Virtual Machine (AVM) and is architected to support high-concurrency environments like university campuses and global developer summits.
### Built With

- ![Foundry](https://img.shields.io/badge/-FOUNDRY-%23323330.svg?style=for-the-badge)
- ![Solidity](https://img.shields.io/badge/Solidity-%23363636.svg?style=for-the-badge&logo=solidity&logoColor=white)


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

Make sure you have git and foundry installed and configured on your system.

### Installation

Clone the repo,

```shell
git clone https://github.com/vishal-tiwari9/p2p-investment-algorand.git
```

cd into the repo, and install the necessary dependencies

```shell
cd contract
run test
```

That's it, you are good to go now!


<!-- ROADMAP -->
## Roadmap

- [x] Smart contract development
- [x] Unit tests
- [x] Write Docs
- [x] Write a good README.md

See the [open issues](https://github.com/vishal-tiwari9/p2p-investment-algorand/issues) for a full list of proposed features (and known issues).


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/vishal-tiwari9/p2p-investment-algorand.svg?style=for-the-badge
[contributors-url]: https://github.com/vishal-tiwari9/p2p-investment-algorand/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/vishal-tiwari9/p2p-investment-algorand.svg?style=for-the-badge
[forks-url]: https://github.com/vishal-tiwari9/p2p-investment-algorand/network/members
[stars-shield]: https://img.shields.io/github/stars//vishal-tiwari9/soho-orderbook.svg?style=for-the-badge
[stars-url]: https://github.com/vishal-tiwari9/p2p-investment-algorand/stargazers
[issues-shield]: https://img.shields.io/github/issues/vishal-tiwari9/p2p-investment-algorand.svg?style=for-the-badge
[issues-url]: https://github.com/vishal-tiwari9/p2p-investment-algorand/issues
[license-shield]: https://img.shields.io/github/license/vishal-tiwari9/p2p-investment-algorand.svg?style=for-the-badge
[license-url]: https://github.com/vishal-tiwari9/p2p-investment-algorand/blob/master/LICENSE.txt
