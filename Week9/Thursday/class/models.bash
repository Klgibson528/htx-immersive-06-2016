sequelize model:generate --name user3 \
  --attributes firstName:string,lastName:string,email:string;

sequelize db:migrate
