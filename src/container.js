import React from "react";
import List from "./list";

const Container = () => {
    return (
        <div className="menu">
            <h2>Меню</h2>
            <div className='container'>
                <div>
                    <List/>
                </div>
            </div>
        </div>
    )
}

export default Container;
