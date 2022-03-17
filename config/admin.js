module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '97263f35c8f9c59a85d0bca83b92e533'),
  },
});
