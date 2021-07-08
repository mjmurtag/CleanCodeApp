const base = '/api/v1';
const domain = 'somecompany.com';
const Defaults = {
  appName: 'Clean Code App',
  domain,
  defaultLocale: {
    lang: 'en'
  },
  app: {
    platforms: ['ios', 'android']
  },
  apis: {
    baseUrl: `https://api.${domain}`,
    public: {
      base: `${base}`,
      backend: `${base}`
    },
    user: {
      base: `${base}`,
      login: `${base}/login`,
      logout: `${base}/logout`
    }
  }
};

export default Defaults;
