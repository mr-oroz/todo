import React, {Component} from "react";
import Item from "./item";

class List extends Component {

    state = {
        data: [
            {id: 1, checked: true, number: 150, label: 'Манты'},
            {id: 2, checked: true, number: 80, label: 'Шорпо'},
            {id: 3, checked: true, number: 200, label: 'Беш бармак'},
            {id: 4, checked: true, number: 220, label: 'Куурдак'},
        ]
    }

    deleteItem = (id) => () => {
        this.setState(({data}) => {
            const index = data.findIndex((item) => item.id === id)
            return {data:[...data.slice(0,index),...data.slice(index+1)]}
        })
    }

    render() {

        return (
            <div>
                {
                    this.state.data.map(
                        (item) => {
                            return <Item deleteItem={this.deleteItem}  key={item.id} {...item}/>
                        }
                    )
                }
            </div>
        )
    }
}

export default List;