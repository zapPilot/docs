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
        id='homepage.features.sentiment.title'
        description='The title for Sentiment-Driven Intelligence feature'
      >
        Sentiment-Driven Intelligence
      </Translate>
    ),
    Svg: require('@site/static/img/intent-execution.svg').default,
    description: (
      <Translate
        id='homepage.features.sentiment.description'
        description='The description for Sentiment-Driven Intelligence feature'
      >
        Monitors the Fear & Greed Index 24/7 and only suggests rebalancing when
        market emotions reach extremes — helping you buy fear and sell greed.
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id='homepage.features.selfCustody.title'
        description='The title for Self-Custodial feature'
      >
        Self-Custodial. Always.
      </Translate>
    ),
    Svg: require('@site/static/img/multi-vault.svg').default,
    description: (
      <Translate
        id='homepage.features.selfCustody.description'
        description='The description for Self-Custodial feature'
      >
        Every token stays in your wallet. Zap Pilot generates optimized
        rebalancing routes — you sign every transaction. No custody, no
        compromise.
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id='homepage.features.execution.title'
        description='The title for Gradual Execution feature'
      >
        Gradual, Disciplined Execution
      </Translate>
    ),
    Svg: require('@site/static/img/cross-chain.svg').default,
    description: (
      <Translate
        id='homepage.features.execution.description'
        description='The description for Gradual Execution feature'
      >
        Rebalancing adapts to market intensity. Calendar-guided execution
        prevents panic selling and ensures disciplined DCA over 5-10 days.
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
