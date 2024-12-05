import { defineAction } from "astro:actions";
import { z } from "astro:schema";

let bearerToken = import.meta.env.STRAPI_WRITE_TOKEN;

const getDownloadCounts = async () => {
  try {
    const response = await fetch(
      `https://cms.athenaos.org/api/download-counts-list`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${bearerToken}`,
        },
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const increaseDownloadCount = async (id: string) => {
  let data = [
    { id: "7", download_type: "docker" },
    { id: "1", download_type: "iso" },
    { id: "5", download_type: "virtualbox" },
    { id: "3", download_type: "vmware" },
    { id: "9", download_type: "wsl" },
  ];

  try {
    let countId = data.find((item) => item.download_type === id)?.id;

    const response = await fetch(
      `https://cms.athenaos.org/api/download-count/${countId}/increment`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${bearerToken}`,
        },
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error increasing download count:", error);
  }
};

export const server = {
  getDownloadCount: defineAction({
    handler: async () => {
      return await getDownloadCounts();
    },
  }),
  increaseCount: defineAction({
    input: z.object({
      id: z.string(),
    }),
    handler: async (input) => {
      return await increaseDownloadCount(input.id);
    },
  }),
};
