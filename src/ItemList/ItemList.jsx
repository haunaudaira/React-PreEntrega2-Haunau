import React from 'react'
import Item from '../Item/Item'

export const ItemList = ({logos}) => {
    return (
        <>
            <div className="logos">
                {logos.map((log) => <Item  logos={log} key={log.id} /> )}
            </div>
        </>
    )
}

