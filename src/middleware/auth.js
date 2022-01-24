export default function auth({ next, router }) {
    console.log("davao")
    if (!localStorage.getItem(userID)) {
      return router.push('/login');
    }
  
    // return next();
  }