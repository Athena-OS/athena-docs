export const data = [
  {
    id: "iso",
    title: "ISO Image",
    description:
      "Get the full capabilities of your hardware! Achieve unparalleled performance and seamless integration with your hardware, ensuring a smooth and efficient computing experience.",
    image: "/icons/iso.svg",
    hashes: {
      MD5: "8883b03f4cc37cd4c5068e5fd5fee16d",
      SHA1: "32f764eb9073a15d4b875113d113151f352ec54c",
      SHA256:
        "11f15871ba3f9e461860f52d1f4b0884feffca09d4fedb136016fbc8755415b2",
      SHA512:
        "cd0228ed8d62a6db866eb488bff7c973ad93e33d5f7a08a10addbf339a953f78e9f3a2a9ff6ef28587fd12b7be849a28d12a2a15eaaa8263fe4e517ac95b73b4",
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
