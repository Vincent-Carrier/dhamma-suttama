import { strapi as strapiClient } from '@strapi/client';
//
const strapi = strapiClient({ baseURL: `${import.meta.env.STRAPI_URL}/api`, auth: import.meta.env.STRAPI_TOKEN });

export async function getPageData(path: str): any {
  return await strapi.single(path).find({ locale: Astro.currentLocale })
}

export default strapi
