import React, { useEffect, useRef, useState } from 'react';

const CursorShadow = () => {
    const cursorRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        let animationFrameId;

        const handleMouseMove = (e) => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }

            animationFrameId = requestAnimationFrame(() => {
                if (cursor) {
                    cursor.style.left = `${e.clientX}px`;
                    cursor.style.top = `${e.clientY}px`;
                }
            });
        };

        const handleMouseEnter = (e) => {
            setIsHovering(true);
            if (cursor) {
                cursor.classList.add('hover');
            }
        };

        const handleMouseLeave = (e) => {
            setIsHovering(false);
            if (cursor) {
                cursor.classList.remove('hover');
            }
        };

        // Add hover effect to interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .btn, input, textarea, select, [role="button"]');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
            window.removeEventListener('mousemove', handleMouseMove);
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return <div id="cursor-shadow" ref={cursorRef} />;
};

export default CursorShadow;

