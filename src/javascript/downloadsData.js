export const data = [
  {
    id: "iso",
    title: "ISO Image",
    description:
      "Get the full capabilities of your hardware! Achieve unparalleled performance and seamless integration with your hardware, ensuring a smooth and efficient computing experience.",
    image: "/icons/iso.svg",
    hashes: {
      MD5: "c035caf231a8101eabe4946911364008",
      SHA1: "9dbc79e2c1eca0cb9d684ff1976fcca6609e9cef",
      SHA256:
        "61883b6ad4085e28ddd838ddc6a543d912149d0b529bef19ae099980de541f46",
      SHA512:
        "93897f3dbbcb70cdecc7563ef14048d3c8c93e831c046008701d2dc20346357403de8c6f4ac57f2a490b3549168882c2df68383b55e2210c0f1fc936b1dc0976",
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
