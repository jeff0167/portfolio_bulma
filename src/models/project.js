export default class project{
  projectTitle;
  projectLink;
  githubRepoLink;
  projectImagePath;

  constructor(title, link, githubRepoLink, image){
    this.projectTitle = title;
    this.projectLink = link;
    this.githubRepoLink = githubRepoLink;
    this.projectImagePath = image;
  }
}