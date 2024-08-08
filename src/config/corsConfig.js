/* const corsOptions = {
    origin: function (origin, callback) {
      const allowedOrigins = ['http://localhost:5173', 'http://localhost:3000', 'https://tudominio.com'];
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  };
  
  export default corsOptions; */

  const corsOptions = {
    origin: ["http://localhost:5173", "http://localhost:3000"],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  };
  
  export default corsOptions;