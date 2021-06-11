import React from "react"
import Image from "gatsby-image"

import Layout from "../components/layout"

class Links extends React.Component {
  render() {
    const links = [
        {
            url: 'https://www.metricscurve.com/',
            title: 'Build The Modern Web For Your Business | Metrics Curve',
        },
        {
            url: 'https://www.metricscurve.com/work/',
            title: 'Portfolio | Metrics Curve',
        },
        {
            url: 'https://www.metricscurve.com/hire-dedicated-nodejs-developers/',
            title: 'Hire Dedicated NodeJS Developers | Metrics Curve',
        },
        {
            url: 'https://www.metricscurve.com/hire-dedicated-react-native-developers/',
            title: 'Hire Dedicated React-Native Developers | Metrics Curve',
        },
        {
            url: 'https://www.metricscurve.com/hire-dedicated-reactjs-developers/',
            title: 'Hire Dedicated ReactJS Developers | Metrics Curve',
        },
        {
            url: 'https://www.metricscurve.com/hire-dedicated-angularjs-developers/',
            title: 'Hire Dedicated AngularJS Developers | Metrics Curve',
        },
        {
            url: 'https://www.metricscurve.com/hire-dedicated-vuejs-developers/',
            title: 'Hire Dedicated VueJS Developers | Metrics Curve',
        },
        {
            url: 'https://www.metricscurve.com/hire-dedicated-mean-stack-developers/',
            title: 'Hire Dedicated MEAN Stack Developers | Metrics Curve',
        },
        {
            url: 'https://www.metricscurve.com/hire-dedicated-mern-stack-developers/',
            title: 'Hire Dedicated MERN Developers | Metrics Curve',
        },
        {
            url: 'https://www.metricscurve.com/hire-dedicated-graphql-developers/',
            title: 'Hire Dedicated GraphQL Developers | Metrics Curve',
        },
        {
            url: 'https://www.metricscurve.com/hire-dedicated-mongodb-developers/',
            title: 'Hire Dedicated MongoDB Developers | Metrics Curve',
        },
        {
            url: 'https://www.metricscurve.com/hire-dedicated-product-development-team/',
            title: 'Hire Dedicated Product Developers | Metrics Curve',
        },
        {
            url: 'https://www.metricscurve.com/hire-dedicated-mvp-development-team/',
            title: 'Hire Dedicated MVP Developers | Metrics Curve',
        },
        {
            url: 'https://www.metricscurve.com/hire-dedicated-chatbot-development-team/',
            title: 'Hire Dedicated Chatbot Developers | Metrics Curve',
        },
        {
            url: 'https://www.metricscurve.com/hire-dedicated-messaging-app-development-team/',
            title: 'Hire Dedicated Messaging App Developers | Metrics Curve',
        },
        {
            url: 'https://www.metricscurve.com/blog/how-to-choose-the-right-technology-partner-in-2021/',
            title: 'How to Choose the right technology partner in 2021',
        },
        {
            url: 'https://www.metricscurve.com/blog/github-flow/',
            title: 'GitHub flow for collaboration and automate deployments',
        },
        {
            url: 'https://www.metricscurve.com/blog/benefits-of-working-with-us/',
            title: 'Benefits of working with US | Metrics Curve',
        }
    ];

    return (
      <Layout>
        <div className="work__container">
            <div>
                <h1>Links</h1>
            </div>
            <ul>
            {links.map(({url, title}, index) => {
            return (
                <li>
                    <a href={url} target="_blank">{title}</a>
                </li>
            )
            })}
            </ul>
        </div>
      </Layout>
    )
  }
}

export default Links;