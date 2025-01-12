export const data = [
  {
    id: "iso",
    title: "ISO Image",
    description:
      "Get the full capabilities of your hardware! Achieve unparalleled performance and seamless integration with your hardware, ensuring a smooth and efficient computing experience.",
    image: "/icons/iso.svg",
    hashes: {
      MD5: "b67d303f2373a8442ffb41be1b26961a",
      SHA1: "40b051e48ff9d27353b814027f66bae6e7fbb2e0",
      SHA256:
        "963414f34ddf43dcefa53ad1aadce83554b36e777493d8267691724f13655552",
      SHA512:
        "eb0e0ce0133ba908621c2d36ea631b055fb1056c64c222d7b0b105bea33898987040dc2abefb5ee89c1819ed6ce7480dd37b0d20ac1de7339eb3b210319e7c5c",
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
