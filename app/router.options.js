export default {
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          behavior: 'smooth',
          top: savedPosition?.top || 0,
        });
      }, 200);
    });
  },
};
