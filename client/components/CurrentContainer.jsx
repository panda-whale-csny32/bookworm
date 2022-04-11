import { getFormControlUnstyledUtilityClasses } from "@mui/base";
import React from "react";
import CurrentEntry from './CurrentEntry'
import OtherCurrentContainer from './OtherCurrentContainer';
//more imports?

class CurrentContainer extends Component {
  constructor(props) {
    super(props);

    //any additional state would go here
    this.state = {
      added: false,
      view: true,
      submit: false,
      cancel: false
    }
    //bind functions
    this.addBook = this.addBook.bind(this);
    this.viewOtherCurrent = this.viewOtherCurrent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  //could iterate through the prop objects and set state again

  //i have access to prop that passes the objects where user_id is 1 and status is current
    //reading_list._id
    // user_id: 1
    // username
    // book_id
    // title
    // author
    // genre_id
    // genre
    // status_id
    // status: current
    // recommend
    // review
    
  // componentDidMount(){
    
  // }

  //entriesDisplay( this.props.current )

  //for each object in current prop, 

  addBook(){
    if(this.state.added === false){
      // this.state.added = true
      this.setState({added: true})
    }
  }

  viewOtherCurrent(){
    if(this.state.view === false) this.setState({ view: true });
    else this.setState({ view: false });
  }

  // deleteEntry();
  // //this is a function that deletes the entry from the current reads section, also removing it from the DB

  // updateEntry();
    //this is a function that moves a book from the current reading list to the have read list

  //{ this.state.urls && this.state.urls.map((url, idx) => <FeedItem key={idx} url={url} /> )}

  handleSubmit(e){
    e.preventDefault();
    this.setState({submit: true})
  }

  handleCancel(e){
    e.preventDefault();
    this.setState({cancel: true})
  }

  render () {
      
    //const { current, past, future, otherCurrent, otherPast, otherFuture } = this.state;
    const currentEntries = [];

    if(this.state.submit === true){
      currentEntries.push(
        <CurrentEntry handleSubmit={this.handleSubmit}/>
      )
      this.state.addBook = false;
    }

    if(this.state.added === true && this.state.cancel === false) {
      currentEntries.push(
        <blankEntry handleSubmit= { this.handleSubmit } handleCancel= { this.handleCancel }/>
      ) 
    }

  
    for(let i=0; i<this.props.current; i++){
      currentEntries.push(
        <currentEntry 
        title= {this.props.current[i].title}
        author= {this.props.current[i].author}
        genre= {this.props.current[i].genre}
        />
      )
    }

    // togging visibility style property of OtherCurrentContainer based on view boolean from local state
    let otherCurrentView = { visibility: 'visible' };
    this.state.view ? otherCurrentView : otherCurrentView = { visibility: 'hidden' };
    
    return (
        <div className="currentContainer">
          { this.props.current}
          {/* for each object, render an entry component, pass down the  */}
          <button onClick= {this.addBook} id= 'addButton'>Add Book</button>
          { currentEntries }
          <div>
            <button onClick={this.viewOtherCurrent} id='viewOtherCurrent' > + </button>
            <label>What My Friends Are Reading</label>
          </div>
            <otherCurrentContainer 
              style={otherCurrentView}
              otherCurrent={} 
            />
        </div>
    )
          
  } 

}


export default CurrentContainer;