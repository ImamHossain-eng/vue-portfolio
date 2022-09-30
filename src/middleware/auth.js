export default function auth({ next, router }) {
    if (!auth) {
      return router.push({ name: 'login' });
    }
  
    return next();
  }