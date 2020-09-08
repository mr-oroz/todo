import React, {Component} from 'react';
import Item from './item';

class Link extends Component {
    state = {
        data: [
            "Link 1",
            'Link 2',
            'Link 3',
            'Link 4',
        ]
    }
    render() {
        return (
            <div  className='link'>

                {
                    this.state.data.map(
                        (item) => {
                            return <Item label={item}/>
                        }
                    )
                }
            </div>

        )
    }
}
export default Link;