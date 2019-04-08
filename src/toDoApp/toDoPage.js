import React from 'react'
import './toDo.css'
import { Link } from 'react-router-dom'


export default class toDoPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            term: '',
            items: [],
            boolItem: false,
            backItem: []
        }
    }
    onChange = evt => {
       const key = evt.target.name; 
       const val = evt.target.value;
       this.setState({
          [key]: val,
       })
      
    }

    //Buttons
    toDoBtn = (event) => {
        let newArr = { 
            active: true, 
            term: this.state.term,
        }

        switch(this.state.boolItem) {
            case false: 
                this.setState({
                    term: '',
                    items: [...this.state.items, newArr],
                    boolItem: true,
                    backItem: [...this.state.items, newArr]
                })
                break;
            case true:
                this.setState({
                    term: '',
                    items: [...this.state.items, newArr],
                    backItem: [...this.state.items, newArr]
                })
                break;
            default :
                break;
        }
        document.getElementById('formSubmit').reset()
        event.preventDefault()
    }

    listBtn = (props) => {
        const val = props.target.value
        let id = val
        const newState = this.state

        let items = newState.items.map((items, index) => {
            let index1 = JSON.stringify(index)
            if (index1 === id) {
                if(items.active === true) {
                    return items =  {active : false, term:  items.term, id: index} 
                }
                else {
                    return items =  {active : true, term:  items.term, id: index}
                }   
            } else {
                return items
            }
        });

        this.setState({
            items : items,
            backItem: items
        })
    }
        
    delBtn = () => {
        console.log('deletebutotn')
        let items = this.state.items
        const filteredItems = items.filter((items, index) => {
            return index
        })
        this.setState({
           items : filteredItems,
           backItem: filteredItems
        })
    }
    
    allBtn = () => {
        let stateItems = this.state.backItem
        this.setState({
            items: stateItems
        })
    }
    activeBtn = () => {
        let stateItems = this.state.backItem
        let items = stateItems.filter((items, index) => {
            return items.active
        })
        this.setState({
            items: items
        })
    }
    compBtn = () => {
        let stateItems = this.state.backItem
        let items = stateItems.filter((items, index) => {
            return !items.active
        })
        this.setState({
            items: items
        })
    }
    delAllBtn = () => {
        this.setState({
            items: [],
            backItem: [],
            boolItem: false
        })
    }

    render() {
        const items = this.state.items.map((items, index) => {
            return(
                    <li className="liItems" key={index}>
                        <form>
                            <div className="finishBtn" value={index}>
                                <input type="checkbox" id={`finishBtn${index}`} value={index} onClick={this.listBtn}/>
                                <label htmlFor={`finishBtn${index}`}></label>
                            </div>
                            <p className={items.active ? "toDoText" : 'completed'}>{items.term}</p> 
                        </form>
                            <div className="delBtn-Ctr">
                                <button className={ items.active ? "delBtn-false" : 'delBtn'} type='button' value={index} onClick={this.delBtn}>Del</button>
                            </div>
                    </li>
            )
        })
        return(
            <div>
                <ul className="navBar-toDo">
                    <li><Link to ='/' className="navBar-Proj-toDo">Home</Link></li>
                    <li><a href="contact" className="navBar-Contact-toDo">Contact Me</a></li>
                </ul>
                <div className="toDoCtr">
                    <div className="toDoTitle">
                        <h2>Todos</h2>
                    </div>
                    <div className="toDoBody">
                        <form className="toDoInputCtr" id="formSubmit"onSubmit={this.toDoBtn}>
                            <input className="toDoInput" name="term" onChange={this.onChange}/>
                        </form>
                        <div className="toDoItemCtr">
                            <ul className="ulList">
                                {items}
                                <li>
                                    <p className={this.state.boolItem ? "liFilter" : "liFilter-false"}><button type="button" onClick={this.allBtn} className="allBtn">All</button> <button type="button" onClick={this.activeBtn} className="activeBtn">Active</button> <button type="button" onClick={this.compBtn} className="compBtn">Completed</button> <button type="button" onClick={this.delAllBtn } className="delAllBtn">Delete All</button></p>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
