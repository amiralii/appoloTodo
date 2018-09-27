import React, {Component} from 'react'
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'
import AppBar from 'material-ui/AppBar';

let l = console.log


class NoteSender extends Component {
  constructor(props)
  {
    super(props)
    this.state = {textValue: ''}
  }
  render() 
  {
  	var {mutate} = this.props
  	var {textValue} = this.state
    return(
    	<ListItem >
			<TextField style = {{width: '90%'}} hintText={"Note"} value = {textValue} onChange = {(e, value) => this.setState({textValue: value})}/>
			<FloatingActionButton mini = {true} onClick = { _ => {
				if(textValue)
				{
					mutate({
						variables: {text: textValue},
						refetchQueries: [{query: notesListQuery}]
					})
					this.setState({textValue: ''})
				}
			}}>
		    	<i className="material-icons">send</i>
		    </FloatingActionButton>
		</ListItem>
      )
  }
}

const notesListQuery = gql`
   query NotesQuery {
     notes {
      id
      text
      priority
      status
      date
     }
   }
 `
const createNote = gql`
mutation createNote($text: String!, $priority: priorities!, $status: status!, $date: Int!) {
  sendNote(text: $text, priority: $priority, status: $status, date: $date) {
    id
    text
    priority
    status
    date
  }
}
`
const ApolloNoteSender = graphql(createNote)(NoteSender)

export default ApolloNoteSender