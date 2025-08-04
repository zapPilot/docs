import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

type FeatureItem = {
  title: ReactNode;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: (
      <Translate
        id='homepage.features.fastRebalancing.title'
        description='The title for 30-Second Rebalancing feature'
      >
        30-Second Rebalancing
      </Translate>
    ),
    Svg: require('@site/static/img/intent-execution.svg').default,
    description: (
      <Translate
        id='homepage.features.fastRebalancing.description'
        description='The description for 30-Second Rebalancing feature'
      >
        Cut portfolio rebalancing from 30 minutes to 30 seconds. Our autopilot
        instantly moves your crypto across chains into higher-yield pools with
        one click.
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id='homepage.features.selfCustody.title'
        description='The title for 100% Self-Custody feature'
      >
        100% Self-Custody
      </Translate>
    ),
    Svg: require('@site/static/img/multi-vault.svg').default,
    description: (
      <Translate
        id='homepage.features.selfCustody.description'
        description='The description for 100% Self-Custody feature'
      >
        Based on EIP-7702, every token stays in your own EOA wallet. No custody
        risks, no protocol control - you maintain complete ownership while the
        autopilot optimizes your yields.
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id='homepage.features.yieldOptimization.title'
        description='The title for Cross-Chain Yield Optimization feature'
      >
        Cross-Chain Yield Optimization
      </Translate>
    ),
    Svg: require('@site/static/img/cross-chain.svg').default,
    description: (
      <Translate
        id='homepage.features.yieldOptimization.description'
        description='The description for Cross-Chain Yield Optimization feature'
      >
        Automatically discovers and moves your assets to the highest-yielding
        opportunities across 20+ blockchain networks. Seamless cross-chain
        operations with optimal yield capture.
      </Translate>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <Svg className={styles.featureSvg} role='img' />
      </div>
      <div className='text--center padding-horiz--md'>
        <Heading as='h3'>{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
