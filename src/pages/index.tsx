import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <img 
            src="/img/manny-silva.jpg" 
            alt="Manny Silva" 
            className={styles.heroImage}
          />
          <div className={styles.heroText}>
            <Heading as="h1" className="hero__title">
              {siteConfig.title}
            </Heading>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <p className={styles.heroBio}>
              Head of Documentation at Skyflow. Creator of Docs as Tests and Doc Detective. 
              Building tools and strategies to make documentation resilient, testable, and reliable.
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/book">
                Docs as Tests Book
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/doc-detective">
                Doc Detective
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function PortfolioSection() {
  return (
    <section className={styles.portfolio}>
      <div className="container">
        <Heading as="h2" className={styles.portfolioTitle}>Work & Projects</Heading>
        <div className="row">
          <div className="col col--6">
            <div className={styles.portfolioCard}>
              <Heading as="h3">Docs as Tests Book</Heading>
              <p>
                A comprehensive guide to building resilient technical documentation 
                through automated testing. Learn strategies to keep your docs in sync 
                with your product, reduce maintenance burden, and improve documentation 
                quality.
              </p>
              <Link to="/book" className="button button--primary">
                Learn More
              </Link>
            </div>
          </div>
          <div className="col col--6">
            <div className={styles.portfolioCard}>
              <Heading as="h3">Doc Detective</Heading>
              <p>
                An open-source documentation testing framework that validates your docs 
                against your product. Catch broken instructions, outdated screenshots, 
                and integration issues before your users do.
              </p>
              <Link to="/doc-detective" className="button button--primary">
                Explore
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col--6">
            <div className={styles.portfolioCard}>
              <Heading as="h3">Docs as Tests Blog</Heading>
              <p>
                Practical insights and strategies for implementing documentation testing 
                in your workflow. Real-world examples, tips, and lessons learned from 
                working with teams at scale.
              </p>
              <a href="https://www.docsastests.com" className="button button--primary" target="_blank" rel="noopener noreferrer">
                Visit Blog
              </a>
            </div>
          </div>
          <div className="col col--6">
            <div className={styles.portfolioCard}>
              <Heading as="h3">Talks & Presentations</Heading>
              <p>
                Speaking at conferences and events about documentation testing, 
                AI-driven documentation, and building better developer experiences. 
                Recent talks include Self-Healing Docs and RAG strategies for LLMs.
              </p>
              <Link to="/talks" className="button button--primary">
                View Talks
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Portfolio"
      description="Technical Writer & Engineer | Creator of Docs as Tests and Doc Detective">
      <HomepageHeader />
      <main>
        <PortfolioSection />
      </main>
    </Layout>
  );
}
