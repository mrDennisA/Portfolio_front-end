export const BASE_URL = process.env.API_URL;

export const PROJECTS_URL = BASE_URL + "/projects" + "?sort=[id]&populate=cover&populate=media&populate=links";
export const ABOUT_PAGE_URL = BASE_URL + "/about" + "?populate=cover";
export const SKILL_TYPE_URL = BASE_URL + "/skill-types" + "?populate=skills";
export const EXPERIENCES_URL = BASE_URL + "/experiences";
export const EDUCATIONS_URL = BASE_URL + "/educations";
