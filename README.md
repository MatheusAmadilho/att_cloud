Passos para Executar a Aplicação

1. Para executar o banco de dados, rode o script abaixo:
   docker run -d -p 3307:3306 --name mysql -e MYSQL_ROOT_PASSWORD=root -e MYSQL_USER=user -e MYSQL_PASSWORD=passwd -e MYSQL_DATABASE=db_aula mysql/mysql-server:latest

2. Execute os scripts abaixo de INSERT:
   CREATE TABLE table_name (
       id INT AUTO_INCREMENT PRIMARY KEY,
       nome VARCHAR(255),
       idade INT
   );

   INSERT INTO table_name (nome, idade) VALUES ('João', 30), ('Maria', 25), ('Pedro', 40);

3. Para executar a aplicação, rode o script abaixo:
   docker run -p 3000:3000 --name att_cloud -d matheusamadilho/att_cloud:1.0.0

4. Abra a URL http://localhost:3000/consulta-dados

5. O link do GitHub é https://github.com/matheusamadilho/att_cloud e do DockerHub é https://hub.docker.com/repository/docker/matheusamadilho/att_cloud/general
