/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      
      contentfulV1WorkPage {
        projects {
          slideDescription {
            link
          }
        }
      }
    }
  `).then(result => {
    
    const caseStudyProjects = result.data.contentfulV1WorkPage.projects

    caseStudyProjects.map((caseStudy, index) => {
      createPage({
        path: `/work${caseStudy.slideDescription.link}`,
        component: path.resolve(`./src/templates/case-study-pages.js`),
        context: {
          slug: caseStudy.slideDescription.link,
          previous:
            index === 0
              ? caseStudyProjects[caseStudyProjects.length - 1]
              : caseStudyProjects[index - 1],
          next:
            index === caseStudyProjects.length - 1
              ? caseStudyProjects[0]
              : caseStudyProjects[index + 1],
        },
      })
    })

  })
}


