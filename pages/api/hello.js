// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200;
  res.json({
    name: "Dani Ziadul Marwan",
    age: 29,
    occupation: "a Web Developer",
    skills: "MongoDb Express React Nodejs",
  });
};
