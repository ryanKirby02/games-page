export const pageAnimation = {
    hidden: {
      opacity: 0,
      y: 300,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: 'beforeChildren',
        staggerChildren: 1,
      },
    },
    exit: {
      opacity: 0,
      y: 300,
      transition: {
        duration: 0.5,
      },
    },
  };
  export const imageAnim = {
    hidden: { scale: 1.5, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        ease: 'easeOut',
        duration: 1,
      },
    },
  };
  export const titleAnim = {
    hidden: { y: -200, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

export const fadeAnim = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: 'easeOut'
    }
  }
}