import gql from 'graphql-tag'

export const listTodosQuery = gql`{
  query getNotes {
  notes {
    id
    text
    priority
    status
    date
    }
  }  
}`;

export const createTodoQuery = (args: any)=> {
  return gql`
    mutation createNote($text: String!, $priority: priorities!, $status: status!, $date: Int!) {
  sendNote(text: $text, priority: $priority, status: $status, date: $date) {
    id
    text
    priority
    status
    date
    }
  }
  `;
};

export const updateTodoQuery = (args: any)=>gql`
 mutation updateNote($id:Int!,$text: String!, $priority: priorities!, $status: status!, $date: Int!) {
   updateNote(id:$id,text: $text, priority: $priority, status: $status, date: $date) {
  id
  text
  priority
  status
  date
  }
 }
  }
`;

export const deleteTodoQuery = (todoId: any)=>gql`
 mutation deleteNote($id: Int!) {
   deleteNote(id: $id) {
    id
    text
    priority
    status
    date
    }
  }
`;
