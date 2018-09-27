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


class Notes extends Component 
{
  constructor(props)
  {
    super(props)
    this.state = {}
  }
  scrollToBottom() 
  {
  	l('scrollToBottom', this.end.scrollIntoView)
  this.end.scrollIntoView({ behavior: "smooth" })
  }

	componentDidMount() 
	{
		l('componentDidMount')
	  this.scrollToBottom()
	}

	componentDidUpdate() 
	{
		l('componentDidUpdate')
	  this.scrollToBottom()
	}
  render() 
  {
  	var {loading, error, notes} = this.props.data
  	l(this.props.data)
    return (
    	<div>
    		{loading && <ListItem> <CircularProgress /> </ListItem>}
    		{error && <ListItem primaryText='Error' secondaryText={error.notes} />}
    		{notes && notes.map( ({text, id}) => <ListItem key = {id} primaryText={text} />)}
    		<div style={{ float:"left", clear: "both" }} ref = {ref => this.end = ref} /> 					
    	</div>
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

 const ApolloNotes = graphql(notesListQuery, {options: { pollInterval: 1000 }})(Notes)

 export default ApolloNotes