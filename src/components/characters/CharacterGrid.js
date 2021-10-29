import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../ui/Spinner'

const CharacterGrid = ({ items, isLoading }) => {
    return isLoading ? <Spinner /> : <section className="cards">
        { items.map((singleitem) => (
            <CharacterItem key={ singleitem.char_id } singleitem={ singleitem } />
        )) }
    </section>
}

export default CharacterGrid