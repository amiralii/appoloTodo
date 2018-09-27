# appoloTodo
Todo-list sample with Nodejs, Apollo, Reactjs


Run with Docker

      docker-composer up
      
Or with NPM:
      
      backend folder  : 
                  npm install
                  npm install nodemon -g
                  npm run server
                  
      frontend folder :   
                  npm install
                  npm run client
    

Access to server:
        
      http://127.0.0.1:3000/graphql
      
Access to front :
  
       http://127.0.0.1:8082
       
       
   
backend graphql queries :

    mutation createNote($text: String!, $priority: priorities!, $status: status!, $date: Int!) {
     sendNote(text: $text, priority: $priority, status: $status, date: $date) {
      id
      text
      priority
      status
      date
      }
    }


     mutation updateNote($id:Int!,$text: String!, $priority: priorities!, $status: status!, $date: Int!) {
       updateNote(id:$id,text: $text, priority: $priority, status: $status, date: $date) {
      id
      text
      priority
      status
      date
      }
     }


     mutation deleteNote($id: Int!) {
       deleteNote(id: $id) {
        id
        text
        priority
        status
        date
        }
      }


     query getNotes {
      notes {
        id
        text
        priority
        status
        date
        }
      }
