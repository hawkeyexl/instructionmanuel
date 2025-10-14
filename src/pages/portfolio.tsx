import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './portfolio.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroBackground}></div>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroImageWrapper}>
            <img 
              src="/img/manny-silva.jpg" 
              alt="Manny Silva" 
              className={styles.heroImage}
            />
          </div>
          <div className={styles.heroText}>
            <div className={styles.heroLabel}>Technical Writer & Engineer</div>
            <Heading as="h1" className={styles.heroTitle}>
              {siteConfig.title}
            </Heading>
            <p className={styles.heroBio}>
              Head of Documentation at Skyflow. Creator of Docs as Tests and Doc Detective. 
              Building tools and strategies to make documentation resilient, testable, and reliable.
            </p>
            <div className={styles.heroButtons}>
              <Link
                className={clsx('button button--primary button--lg', styles.heroCta)}
                to="/book">
                Read my book
              </Link>
              <Link
                className={clsx('button button--outline button--lg', styles.heroCtaSecondary)}
                to="/talks">
                See my talks
              </Link>
            </div>
            <div className={styles.heroSocial}>
              <a href="https://github.com/hawkeyexl" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/manuelrbsilva" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function PortfolioSection() {
  const portfolioItems = [
    {
      title: "Docs as Tests Book",
      description: "A comprehensive guide to building resilient technical documentation through automated testing. Learn strategies to keep your docs in sync with your product, reduce maintenance burden, and improve documentation quality.",
      link: "/book",
      linkText: "Learn More",
      icon: "📖",
      featured: true
    },
    {
      title: "Doc Detective",
      description: "An open-source documentation testing framework that validates your docs against your product. Catch broken instructions, outdated screenshots, and integration issues before your users do.",
      link: "/doc-detective",
      linkText: "Explore",
      icon: "🔍",
      featured: true
    },
    {
      title: "Docs as Tests Blog",
      description: "Practical insights and strategies for implementing documentation testing in your workflow. Real-world examples, tips, and lessons learned from working with teams at scale.",
      link: "https://www.docsastests.com",
      linkText: "Visit Blog",
      icon: "✍️",
      external: true
    },
    // {
    //   title: "Talks & Presentations",
    //   description: "Speaking at conferences and events about documentation testing, AI-driven documentation, and building better developer experiences. Recent talks include Self-Healing Docs and RAG strategies for LLMs.",
    //   link: "/talks",
    //   linkText: "View Talks",
    //   icon: "🎤"
    // }
  ];

  return (
    <section className={styles.portfolio}>
      <div className="container">
        <div className={styles.portfolioHeader}>
          <Heading as="h2" className={styles.portfolioTitle}>Work & Projects</Heading>
          <p className={styles.portfolioSubtitle}>
            Building tools, writing guides, and sharing insights on documentation testing and developer experience
          </p>
        </div>
        <div className={styles.portfolioGrid}>
          {portfolioItems.map((item, idx) => (
            <div key={idx} className={clsx(styles.portfolioCard, item.featured && styles.portfolioCardFeatured)}>
              <div className={styles.cardIcon}>{item.icon}</div>
              <Heading as="h3" className={styles.cardTitle}>{item.title}</Heading>
              <p className={styles.cardDescription}>{item.description}</p>
              {item.external ? (
                <a 
                  href={item.link} 
                  className={clsx('button button--primary', styles.cardButton)}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {item.linkText} →
                </a>
              ) : (
                <Link 
                  to={item.link} 
                  className={clsx('button button--primary', styles.cardButton)}
                >
                  {item.linkText} →
                </Link>
              )}
            </div>
          ))}
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
