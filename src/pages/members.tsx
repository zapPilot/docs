import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function MemberCard({
  name,
  role,
  description,
  avatar,
  linkedin,
}: {
  name: string;
  role: string;
  description: string;
  avatar?: string;
  linkedin?: string;
}) {
  return (
    <div className='col col--4'>
      <div className='text--center'>
        <div className='avatar avatar--vertical'>
          <img
            className='avatar__photo avatar__photo--xl'
            src={avatar || '/img/default-avatar.svg'}
            alt={`${name} avatar`}
          />
          <div className='avatar__intro'>
            <Heading as='h3' className='avatar__name'>
              {name}
            </Heading>
            <small className='avatar__subtitle'>{role}</small>
          </div>
        </div>
        <p>{description}</p>
        {linkedin && (
          <Link
            className='button button--primary button--sm'
            to={linkedin}
            target='_blank'
          >
            LinkedIn
          </Link>
        )}
      </div>
    </div>
  );
}

function MembersHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className='container'>
        <Heading as='h1' className='hero__title'>
          Our Team
        </Heading>
        <p className='hero__subtitle'>
          Meet the experts building the future of DeFi automation
        </p>
      </div>
    </header>
  );
}

export default function Members(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  const teamMembers = [
    {
      name: 'Alex Chen',
      role: 'Founder & CEO',
      description:
        'Former Goldman Sachs quant with 10+ years in traditional finance and DeFi protocol development.',
      avatar: '/img/team/alex.jpg',
      linkedin: 'https://linkedin.com/in/alexchen',
    },
    {
      name: 'Sarah Johnson',
      role: 'Head of Engineering',
      description:
        'Ex-Ethereum Foundation core developer, specializing in smart contract security and Layer 2 scaling.',
      avatar: '/img/team/sarah.jpg',
      linkedin: 'https://linkedin.com/in/sarahjohnson',
    },
    {
      name: 'Michael Zhang',
      role: 'Lead Researcher',
      description:
        'PhD in Financial Mathematics from MIT, expert in algorithmic trading and risk management systems.',
      avatar: '/img/team/michael.jpg',
      linkedin: 'https://linkedin.com/in/michaelzhang',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Manager',
      description:
        'Former Coinbase PM with expertise in user experience design for DeFi applications.',
      avatar: '/img/team/emily.jpg',
      linkedin: 'https://linkedin.com/in/emilyrodriguez',
    },
    {
      name: 'David Kim',
      role: 'Security Lead',
      description:
        'Blockchain security researcher, conducted audits for 50+ DeFi protocols with zero exploits.',
      avatar: '/img/team/david.jpg',
      linkedin: 'https://linkedin.com/in/davidkim',
    },
    {
      name: 'Lisa Wang',
      role: 'Head of Business Development',
      description:
        'Former venture capitalist with deep connections across the DeFi ecosystem and institutional finance.',
      avatar: '/img/team/lisa.jpg',
      linkedin: 'https://linkedin.com/in/lisawang',
    },
  ];

  return (
    <Layout
      title={`Team - ${siteConfig.title}`}
      description='Meet the Zap Pilot team - experts in DeFi, finance, and blockchain technology'
    >
      <MembersHeader />
      <main>
        <section className='margin-top--lg margin-bottom--lg'>
          <div className='container'>
            <div className='row'>
              {teamMembers.map((member, idx) => (
                <MemberCard key={idx} {...member} />
              ))}
            </div>
          </div>
        </section>

        <section className='margin-top--lg margin-bottom--lg'>
          <div className='container'>
            <div className='text--center'>
              <Heading as='h2'>Join Our Team</Heading>
              <p className='margin-bottom--lg'>
                We're always looking for talented individuals to join our
                mission of democratizing DeFi.
              </p>
              <Link
                className='button button--primary button--lg'
                to='mailto:careers@zappilot.com'
              >
                View Open Positions
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
