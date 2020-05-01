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
      contentfulV1Showcase {
        projectDisplayOrder {
          caseStudy {
            slug
            jumbotron {
              heroImage {
                file {
                  url
                }
              }
              clientName
            }
          }
        }
      }
    }
  `).then(result => {
    const caseStudyProjects = result.data.contentfulV1Showcase.projectDisplayOrder
    
    caseStudyProjects.map((item, index) => {
      createPage({
        path: `/work${item.caseStudy.slug}`,
        component: path.resolve(`./src/templates/case-study-pages.js`),
        context: {
          slug: item.caseStudy.slug,
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
