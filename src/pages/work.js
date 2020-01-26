import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"

class Work extends React.Component {
  render() {
    const { data } = this.props;
    console.log(data);
    const works = [
        {
            image: data.rimtim,
            product: {
                name: 'RimTim',
                position: 'Manager Development',
                desc: 'Responsible for continuous feature releases for RimTim on web app, android app and ios app.',
                url: 'https://www.rimtim.com'
            }
        },
        {
            image: data.conx,
            product: {
                name: 'Conx',
                position: 'Manager Development',
                desc: 'Responsible for continuous feature releases for RimTim on web app, android app and ios app.',
                url: 'https://www.infocusconx.com'
            }
        },
        {
            image: data.wegift,
            product: {
                name: 'WeGift',
                position: 'Manager Development',
                desc: 'Responsible for continuous feature releases for RimTim on web app, android app and ios app.',
                url: 'https://wegift.io'
            }
        },
        {
            image: data.reviewkeg,
            product: {
                name: 'ReviewKeg',
                position: 'Manager Development',
                desc: 'Responsible for continuous feature releases for RimTim on web app, android app and ios app.',
                url: 'https://www.reviewkeg.com'
            }
        },
        {
            image: data.hoojook,
            product: {
                name: 'Hoojook',
                position: 'Manager Development',
                desc: 'Responsible for continuous feature releases for RimTim on web app, android app and ios app.',
                url: 'http://www.hoojook.com'
            }
        },
        {
            image: data.rimtimladder,
            product: {
                name: 'RimTim Ladder',
                position: 'Manager Development',
                desc: 'Responsible for continuous feature releases for RimTim on web app, android app and ios app.',
                url: 'https://www.rimtimladder.com'
            }
        }
    ];

    return (
      <Layout location={this.props.location}>
        <div className="work__container">
        <div className="work__container__title"><span>Products</span></div>
            {works.map((work, index) => {
                console.log(work);
            return (
                <div className="workitem__container" key={index}>
                    <div>
                        <Image
                            fixed={work.image.childImageSharp.fixed}
                            style={{
                                marginRight: 0,
                                marginBottom: 0,
                                minWidth: 50,
                                verticalAlign: `middle`,
                            }}
                        />
                    </div>
                    <div>
                        <div>{work.product.name}</div>
                        <div>{work.product.position}</div>
                        <div>{work.product.desc}</div>
                        <div>{work.product.url}</div>
                    </div>
                </div>
            )
            })}
        </div>
      </Layout>
    )
  }
}

export default Work

export const pageQuery = graphql`
    query WorkQuery {
        conx: file(absolutePath: { regex: "/1.png/" }) {
            childImageSharp {
                fixed {
                    ...GatsbyImageSharpFixed
                }
            }
        },

        wegift: file(absolutePath: { regex: "/2.png/" }) {
            childImageSharp {
                fixed {
                    ...GatsbyImageSharpFixed
                }
            }
        },

        rimtim: file(absolutePath: { regex: "/3.jpg/" }) {
            childImageSharp {
                fixed {
                    ...GatsbyImageSharpFixed
                }
            }
        },

        reviewkeg: file(absolutePath: { regex: "/4.png/" }) {
            childImageSharp {
                fixed {
                    ...GatsbyImageSharpFixed
                }
            }
        },

        hoojook: file(absolutePath: { regex: "/5.png/" }) {
            childImageSharp {
                fixed {
                    ...GatsbyImageSharpFixed
                }
            }
        },

        rimtimladder: file(absolutePath: { regex: "/6.png/" }) {
            childImageSharp {
                fixed {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`
