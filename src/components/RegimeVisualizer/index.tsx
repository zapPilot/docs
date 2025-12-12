import { motion } from 'framer-motion';
import { type RegimeId } from './Lib/regimeData';
import {
  getRegimeById,
  getActiveStrategy,
  getDirectionLabel,
  calculateRegimePosition,
} from './Lib/regimeUtils';
import { useState, useEffect } from 'react';
import { useMediaQuery } from './Hooks/useMediaQuery';
import { useReducedMotion } from './Hooks/useReducedMotion';
import { useRegimeAutoPlay } from './Hooks/useRegimeAutoPlay';
import { useRegimeLayout } from './Hooks/useRegimeLayout';
import { RegimeArc } from './RegimeArc';
import { AllocationPanel } from './AllocationPanel';
import { GlowFilter } from './Ui/GlowFilter';
import { REGIME_VISUALIZER_CONFIG } from './Lib/config';
import React from 'react';

// Simple Error Boundary since we're in a new environment
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Regime Visualizer Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

interface RegimeVisualizerProps {
  autoPlayInterval?: number;
  startRegime?: RegimeId;
  className?: string;
}

export default function RegimeVisualizer({
  autoPlayInterval,
  startRegime,
  className = '',
}: RegimeVisualizerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const prefersReducedMotion = useReducedMotion();

  // Extract auto-play logic to custom hook
  const {
    activeRegime,
    previousRegime,
    isAutoPlaying,
    animationDirection,
    handleRegimeClick,
  } = useRegimeAutoPlay({
    startRegime,
    autoPlayInterval,
    prefersReducedMotion,
  });

  // Extract layout logic to custom hook
  const layout = useRegimeLayout(isMobile);

  const activeRegimeData = getRegimeById(activeRegime);
  const activeStrategy = getActiveStrategy(
    activeRegime,
    animationDirection,
    previousRegime
  );
  const directionLabel = getDirectionLabel(activeRegime, animationDirection);

  // Simulate loading state for smooth initial render
  useEffect(() => {
    // Only run on client
    setIsLoading(false);
  }, []);

  return (
    <ErrorBoundary
      fallback={
        <div className='py-20 text-center bg-gray-900/20 rounded-2xl border border-gray-800'>
          <p className='text-gray-300 mb-4'>Unable to load regime visualizer</p>
        </div>
      }
    >
      <section
        className={`relative py-10 ${className}`}
        style={{ minHeight: '600px' }}
      >
        <div className='container'>
          {isLoading ? (
            <div className='flex items-center justify-center h-[600px]'>
              <p className='text-gray-300'>Loading visualization...</p>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='relative'
            >
              {/* Interaction hint - auto-dismisses */}
              {isAutoPlaying && (
                <motion.div
                  className='absolute top-4 left-1/2 -translate-x-1/2 z-20 px-4 py-2 bg-purple-600/90 backdrop-blur-sm rounded-full text-white text-sm font-medium shadow-lg'
                  initial={{ opacity: 0, y: -10 }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    y: [-10, 0, 0, -10],
                  }}
                  transition={{
                    duration:
                      REGIME_VISUALIZER_CONFIG.animation.interactionHint
                        .duration,
                    times: [
                      ...REGIME_VISUALIZER_CONFIG.animation.interactionHint
                        .times,
                    ],
                    repeat:
                      REGIME_VISUALIZER_CONFIG.animation.interactionHint.repeat,
                  }}
                >
                  👆 Explore each regime to see how we respond
                </motion.div>
              )}
              <div className='w-full overflow-hidden'>
                <svg viewBox={layout.viewBox} className='w-full h-auto'>
                  <defs>
                    <GlowFilter id='pathwayGlow' stdDeviation={5} />
                  </defs>

                  <RegimeArc
                    activeRegime={activeRegime}
                    calculatePosition={index =>
                      calculateRegimePosition(index, layout.arcGeometry)
                    }
                    isMobile={isMobile}
                    onRegimeClick={handleRegimeClick}
                    isAutoPlaying={isAutoPlaying}
                    animationDirection={animationDirection}
                  />

                  <AllocationPanel
                    activeRegimeData={activeRegimeData}
                    panelPosition={layout.panelPosition}
                    isMobile={isMobile}
                    animationDirection={animationDirection}
                    activeStrategy={activeStrategy}
                    directionLabel={directionLabel}
                    isAutoPlaying={isAutoPlaying}
                  />
                </svg>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </ErrorBoundary>
  );
}
