import React, {Component} from "react";

class Item extends Component {
    render() {

        const {deleteItem, label, number, id} = this.props
        return (
            <div className='element'>
                <div>
                    <span className='tamak'>{label}</span>
                    <span className='price'>{number}</span>
                    <span onClick={deleteItem(id)} className='close'>x</span>
                </div>
            </div>
        )
    }
}
export default Item;