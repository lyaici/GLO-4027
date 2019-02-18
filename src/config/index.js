export default {
  db: {
    host: process.env.DB_HOST || 'ds141815.mlab.com',
    port: process.env.DB_PORT || '41815',
    name: process.env.DB_NAME || 'glo-4027-airbnb',
    user: process.env.DB_USER || 'team4',
    pwd: process.env.DB_PWD || 'glo4027team4',
  },
  application: {
    env: process.env.NODE_ENV || 'development',
  }
}