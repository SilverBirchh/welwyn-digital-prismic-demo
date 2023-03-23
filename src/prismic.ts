import * as prismic from "@prismicio/client";

const API_ENDPOINT = import.meta.env.ASTRO_PUBLIC_PRISMIC_URL;
if (!API_ENDPOINT) throw new Error('API_ENDPOINT is required');

const client = prismic.createClient(API_ENDPOINT);

export async function getAllPosts() {
  return client.getAllByType("post");
}

export async function getPage(uuid: string) {
  return await client.getSingle(uuid);
}