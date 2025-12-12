import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className='container'>
        <Heading as='h1' className='hero__title'>
          {siteConfig.title}
        </Heading>
        <p className='hero__subtitle'>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className='button button--secondary button--lg'
            to='/docs/introduction'
          >
            Get Started - 15min ⏱️
          </Link>
          <Link
            className='button button--outline button--lg margin-left--md'
            href='https://www.zap-pilot.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            See Demo →
          </Link>
        </div>
      </div>
    </header>
  );
}

function QuickLinks(): ReactNode {
  const links = [
    {
      title: 'What is Zap Pilot?',
      description: 'Learn how sentiment-driven rebalancing works.',
      to: '/docs/introduction',
    },
    {
      title: 'Strategies',
      description: 'Explore Fear & Greed based allocation strategies.',
      to: '/docs/strategies',
    },
    {
      title: 'Security',
      description: 'Understand our self-custodial approach.',
      to: '/docs/security',
    },
  ];

  return (
    <section className='container margin-vert--xl'>
      <div className='text--center margin-bottom--lg'>
        <Heading as='h2'>Quick Links</Heading>
        <p>Jump to the most important topics</p>
      </div>
      <div className='row'>
        {links.map((link, idx) => (
          <div key={idx} className='col col--4 margin-bottom--lg'>
            <Link to={link.to} className={styles.quickLinkCard}>
              <Heading as='h3'>{link.title}</Heading>
              <p>{link.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description='Zap Pilot documentation - Your DeFi portfolio, guided by market sentiment.'
    >
      <HomepageHeader />
      <main>
        <QuickLinks />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
