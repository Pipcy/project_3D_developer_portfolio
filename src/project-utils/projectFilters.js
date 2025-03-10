import { projects } from "./projectData";

// Get top N featured projects (default: 3)
export const getFeaturedProjects = (category = null, limit = 3) => {
  return projects
    .filter(proj => proj.featuredNum <= limit && (category ? proj.tags.includes(category) : true))
    .sort((a, b) => a.featuredNum - b.featuredNum)
    .slice(0, limit);
};

// Get projects by category (Engineering, Game, Other)
export const getProjectsByCategory = (category) => {
  return projects.filter(proj => proj.tags.includes(category));
};