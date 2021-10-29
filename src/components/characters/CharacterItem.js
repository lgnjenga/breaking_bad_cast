import React from 'react'

const CharacterItem = ({ singleitem }) => {
    console.log(singleitem)
    return (  
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <img src={ singleitem.img } alt='' />
                </div>
                <div className="card-back">
                    <h1>{ singleitem.name }</h1>
                    <ul>
                        <li>
                            <strong>Actor Name: </strong> { singleitem.potrayed }
                        </li>
                        <li>
                            <strong>Nickname: </strong> { singleitem.nickname }
                        </li>
                        <li>
                            <strong>Occupation: </strong> { singleitem.occupation }
                        </li>
                        <li>
                            <strong>Birthday: </strong> { singleitem.birthday }
                        </li>
                        <li>
                            <strong>Status </strong> { singleitem.status }
                        </li>
                    </ul>
                </div>
            </div>            
        </div>      
        
    )
}

export default CharacterItem
