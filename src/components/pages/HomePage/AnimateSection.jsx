/* eslint-disable react/jsx-indent-props */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-closing-bracket-location */
import { useInView } from 'framer-motion';
import { useRef } from 'react';

function AnimateSection({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <section ref={ref}>
            <span
                style={{
                    transform: isInView ? 'none' : 'translateX(-800px)',
                    opacity: isInView ? 1 : 0,
                    transition: 'all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 1s'
                }}>
                {children}
            </span>
        </section>
    );
}
export default AnimateSection;
