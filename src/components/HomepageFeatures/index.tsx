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
        id='homepage.features.intentExecution.title'
        description='The title for Intent-Based Execution feature'
      >
        Intent-Based Execution
      </Translate>
    ),
    Svg: require('@site/static/img/intent-execution.svg').default,
    description: (
      <Translate
        id='homepage.features.intentExecution.description'
        description='The description for Intent-Based Execution feature'
      >
        Specify your desired outcomes, not transaction sequences. Zap Pilot
        interprets your intents and executes the optimal path across DeFi
        protocols automatically.
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id='homepage.features.multiVault.title'
        description='The title for Multi-Vault Strategies feature'
      >
        Multi-Vault Strategies
      </Translate>
    ),
    Svg: require('@site/static/img/multi-vault.svg').default,
    description: (
      <Translate
        id='homepage.features.multiVault.description'
        description='The description for Multi-Vault Strategies feature'
      >
        Choose from Stablecoin Vault, Index500 (S&P500-like), BTC Vault, ETH
        Vault, or create custom strategies. Automated rebalancing keeps your
        portfolio optimized.
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id='homepage.features.crossChain.title'
        description='The title for Cross-Chain & Gasless feature'
      >
        Cross-Chain & Gasless
      </Translate>
    ),
    Svg: require('@site/static/img/cross-chain.svg').default,
    description: (
      <Translate
        id='homepage.features.crossChain.description'
        description='The description for Cross-Chain & Gasless feature'
      >
        Support for 20+ blockchain networks with EIP-7702 enabling gasless
        transactions. Seamless DeFi operations across multiple chains.
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
