export const data = [
  {
    id: "iso",
    title: "ISO Image",
    description:
      "Get the full capabilities of your hardware! Achieve unparalleled performance and seamless integration with your hardware, ensuring a smooth and efficient computing experience.",
    image: "/icons/iso.svg",
    hashes: {
      MD5: "43cee34b1d19fdf869bce7c67a57c9ec",
      SHA1: "4d8a83f0a93f765c375cd735bb838edfd3381165",
      SHA256:
        "d741453e1ea3121b384ffcf99a11846284f4df320a3b8fcc2734a246218ade7d",
      SHA512:
        "d5a1d67c7be9f11a4dd955caed75098d0c987aae7f7b74f85b972e3f2f0d1763e003fe40dd55851b24b0f726793058efad20700fde26b3dc57e0eb45c797830e",
    },
    downloadURL: "https://github.com/Athena-OS/athena/releases/download/v23.11/athena-rolling-x86_64.iso",
    enableDownloadCounter: true,
    buttonLabel: "Download",
  },
  {
    id: "vmware",
    title: "VMware Image",
    description:
      "Experience effortlessly! Ensure optimal performance and seamless integration. Take advantage of full feature set without modifying your primary system, providing a robust and efficient solution for your virtualization needs.",
    image: "/icons/vmware.svg",
    hashes: {
      MD5: "Work In Progress",
      SHA1: "Work In Progress",
      SHA256:
        "Work In Progress",
      SHA512:
        "Work In Progress",
    },
    downloadURL: "https://cms.athenaos.org/api/downloads/14",
    enableDownloadCounter: true,
    buttonLabel: "Download",
  },
  {
    id: "virtualbox",
    title: "VirtualBox Image",
    description:
      "Run seamlessly! Designed for smooth performance and full compatibility. Enjoy all the features without altering your main system, providing a flexible and efficient virtualization solution.",
    image: "/icons/vbox.svg",
    hashes: {
      MD5: "Work In Progress",
      SHA1: "Work In Progress",
      SHA256:
        "Work In Progress",
      SHA512:
        "Work In Progress",
    },
    downloadURL: "https://cms.athenaos.org/api/downloads/16",
    enableDownloadCounter: true,
    buttonLabel: "Download",
  },
  {
    id: "docker",
    title: "Docker Images",
    description:
      "Ideal for containerized environments! Ensure lightweight and efficient performance. Utilize the full potential across various platforms without the need for complex setups, providing a scalable and consistent solution for your development and deployment needs.",
    image: "/icons/docker.svg",
    hashes: false,
    downloadURL: "https://hub.docker.com/u/athenaos",
    enableDownloadCounter: false,
    buttonLabel: "Get it now",
  },
  {
    id: "wsl",
    title: "WSL Image",
    description:
      "Integrate seamlessly into your Windows environment! Enjoy the full power directly from Windows, offering a smooth and efficient Linux experience. Enhance your productivity with the flexibility and compatibility alongside your native Windows applications.",
    image: "/icons/wsl.svg",
    hashes: false,
    downloadURL:
      "https://www.microsoft.com/store/productId/9N1M7Q4F1KQF?ocid=pdpshare",
    enableDownloadCounter: false,
    buttonLabel: "Get it now",
  },
];
