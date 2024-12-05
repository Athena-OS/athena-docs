import { defineAction } from "astro:actions";
import { z } from "astro:schema";

let bearerToken = import.meta.env.STRAPI_WRITE_TOKEN;
let strapiURL = import.meta.env.STRAPI_URL;

const getDownloadCounts = async () => {
  try {
    const response = await fetch(`${strapiURL}/api/download-counts-list`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${bearerToken}`,
      },
    });
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
      `${strapiURL}/api/download-count/${countId}/increment`,
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

async function getBuilderData(input: any) {
  const response = await fetch(
    `${strapiURL}/api/builders?sort[1]=package_name:asc${input.searchString}${input.paginationString}${input.filterString}`,
    {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        "Content-Type": "application/json",
      },
    }
  );

  return await response.json();
}

async function getPackagesData(input: any) {
  const response = await fetch(
    `${strapiURL}/api/packages?sort[1]=package_name:asc${input.paginationString}${input.categoryString}${input.searchString}`,
    {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        "Content-Type": "application/json",
      },
    }
  );

  return await response.json();
}

export const server = {
  // download counts
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

  // builder
  getBuilderData: defineAction({
    input: z.object({
      searchString: z.string(),
      paginationString: z.string(),
      filterString: z.string(),
    }),
    handler: async (input) => {
      return await getBuilderData(input);
    },
  }),

  // packages
  getPackagesData: defineAction({
    input: z.object({
      paginationString: z.string(),
      searchString: z.string(),
      categoryString: z.string(),
    }),
    handler: async (input) => {
      return await getPackagesData(input);
    },
  }),
};
