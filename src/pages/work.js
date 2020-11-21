import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"

class Work extends React.Component {
  render() {
    const { data } = this.props;
    const works = [
        {
            image: data.wegift,
            product: {
                name: 'WeGift',
                position: 'Manager Development',
                desc: `
                A digital reward product.
                `,
                url: 'https://wegift.io',
                skills: ['PHP', 'Responsive design', 'Grid CSS', 'HTML'],
            }
        },
        {
            image: data.conx,
            product: {
                name: 'Conx',
                position: 'Manager Development',
                desc: `
                A video meetting platform used for collaboration between teams.
                `,
                url: 'https://www.infocusconx.com',
                skills: ['PHP', 'AngularJs', 'Node.js', 'MySQL', 'MongoDB'],
            }
        },
        {
            image: data.rimtim,
            product: {
                name: 'RimTim',
                position: 'Manager Development',
                desc: `
                Business online reputataion and reviews platform for indian market. This
                platform lists reviews from many indian websites and provides a way to engage with
                the customers.
                `,
                url: 'https://www.rimtim.com',
                skills: ['PHP', 'AngularJs', 'Node.js', 'MySQL', 'MongoDB'],
            }
        },
        {
            image: data.rimtimladder,
            product: {
                name: 'RimTim Ladder',
                position: 'Manager Development',
                desc: `
                A job platform for VCs. This platform lists jobs from most of the indian
                website and provides a better way to post jobs for VCs and reach out to them.
                `,
                url: 'https://www.rimtimladder.com',
                skills: ['PHP', 'AngularJs', 'Node.js', 'MySQL', 'MongoDB'],
            }
        },
        {
            image: data.reviewkeg,
            product: {
                name: 'ReviewKeg',
                position: 'Manager Development',
                desc: `
                A review management platform for automobile industry. It helps business
                in collective reviews from customer, improving social presence and building
                a brand in the competitive market.
                `,
                url: 'https://www.reviewkeg.com',
                skills: ['PHP', 'AngularJs', 'Node.js', 'MySQL', 'MongoDB'],
            }
        },
        {
            image: data.hoojook,
            product: {
                name: 'Hoojook',
                position: 'Manager Development',
                desc: `
                An enterprise platform to automate marketing for automobile industory.
                It help enterprise run the marketing campaign and generated leads from
                social media platform like Twitter, Facebook, LinkedIn etc.
                `,
                url: 'http://www.hoojook.com',
                skills: ['PHP', 'AngularJs', 'Node.js', 'MySQL', 'MongoDB'],
            }
        }
    ];

    return (
      <Layout location={this.props.location}>
        <div className="work__container">
        <div className="work__container__title">
            <h1>Products</h1>
            <p>I have worked with various products in my 10+ years of experience. Some of intersting products i have listed below.</p>
        </div>
        {works.map((work, index) => {
        return (
            <div className="workitem__container" key={index}>
                <div className="product__image">
                    <Image
                        fixed={work.image.childImageSharp.fixed}
                        style={{
                            marginRight: 0,
                            marginBottom: 0,
                            minWidth: 50,
                            minHeight: 400,
                            verticalAlign: `middle`,
                            height: `100%`,
                        }}
                    />
                </div>
                <div className="product__detail">
                    <div className="product__detail__name">
                        <h2>{work.product.name}</h2>
                    </div>
                    <div className="product__detail__description">
                        <p>{work.product.desc}</p>
                    </div>
                    <div className="product__detail__skills">
                        {work.product.skills.map((skill) => {
                            return (
                                <span>{skill}</span>
                            )
                        })}
                    </div>
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
