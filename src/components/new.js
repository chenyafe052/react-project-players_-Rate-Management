Skip to content
 
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 @chenyafe052 Sign out
0
0 0 mikimakmel/React_API
 Code  Issues 0  Pull requests 0  Projects 0  Wiki  Insights
React_API/src/Components/EventList.js
1aac60e  an hour ago
 dor final- version
     
95 lines (78 sloc)  2.87 KB
import React, { Component } from 'react'
import Event from './Event'
import data from '../data/data'

class EventList extends Component {

    constructor(props) {
        super(props)
        this.state = { events: [] }
        
        this.eachEvent = this.eachEvent.bind(this)
        this.add = this.add.bind(this)
    
    }
    componentWillMount() {
      debugger
        var self=this
        const url = 'https://gentle-wave-98767.herokuapp.com/sports'
        const prox = 'https://cors-anywhere.herokuapp.com/'
        if(self.props.isSearch){
            let json = this.props.children;
            console.log(json);
            json.map(item => {
                self.add({name: item.name, country: item.country, competition: item.competition , participants: item.participants  });
                return 0;
            })
        } else{
            fetch(`${prox}${url}`)
            .then(response => {
                debugger
              if (response.ok) {
                return response.json();
              } else {
                throw new Error('Something went wrong ...');
              }
            })
            .then(data => data.map(item => {
                debugger;
                self.add({name: item.name, country: item.country, competition: item.style.competition , participants: item.style.participants  });
            }))
            
        }
       

       
    }
    

    add({name = null, country = null, competition = null, participants = null}) {
        this.setState(prevSate => ({
            events: [ 
                ...prevSate.events,
                {
                    name: name,
                    country: country,
                    competition: competition,
                    participants: participants
                }
            ]
        }))
    }

    eachEvent(item, i) {
        return(
            <div className = "col-md-4 card"  key = {`container${i}`} style={{width: '18rem', marginBottom: '7px'}}>
            <div className = "card-body">
                <Event key = {`event${i}`} index = {item.id}>
                    <h5 className = "card-title">{item.name}</h5>
                    <p className = "card-text">Country: {item.country}</p>
                    <p className = "card-text">Competition: {item.competition}</p>
                    <p className = "card-text">Participants: {item.participants}</p>
                    
                </Event>
            </div>
        </div>
        )
    }

    render() {
        return(
            <div className="eventList">
                <div className = "container">
                 <div className = "row">
                 {this.state.events.map(this.eachEvent)}
                 </div>
                </div>
               
            </div>
        )
    }

}

export default EventList
© 2019 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
Press h to open a hovercard with more details.