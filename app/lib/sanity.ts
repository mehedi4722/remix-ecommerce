import { createClient } from "@sanity/client";

const projectId = "xsh7alyz";
const dataset = "production";
const apiVersion = "2023-07-19";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
