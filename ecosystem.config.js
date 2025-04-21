module.exports = {
  apps : [
    {
      name: "next-dev",
      script: "npm",
      args: "run dev"
    },
    {
      name: "next-prod",
      script: "npm",
      args: "run start"
    }
  ]
};
