import React from 'react';
import './Search.css';
import { type } from '@testing-library/user-event/dist/type';

class Search extends React.Component
{
    state =
    {
        search:""
    }
    handlKey =(event)=>
    {
        if (event.key === 'Enter')this.props.searchMovie(this.state.search,this.state.type, this.state.type);
    }
    handllerFilter =(event)=>
    {
        this.setState
        (
            ()=> ( {type:event.target.dataset.type} ),
            () => {this.props.searchMovie(this.state.search, this.state.type);}

        );
    }
    render()
    {
        return(
            <>
            <div className='search'>
                <input type = "Search" 
                 placeholder='Введите название фильма'
                 value = {this.state.search}
                 onChange={(e)=>this.setState({search: e.target.value})}
                 onKeyDown={this.handlKey}
                 />
                 <button className='btn' onClick={()=>this.props.searchMovie(this.state.search, this.state.type)}>
                    Поиск
                 </button>
            </div>
            <div className='radio'>
                <div><input type="radio" name="type" data-type="all" checked={this.state.type==='all'} onChange={this.handllerFilter}/><span>All</span></div>
                <div><input type="radio" name="type" data-type="movie" checked={this.state.type==='movie'} onChange={this.handllerFilter}/><span>Movies</span></div>
                <div><input type="radio" name="type" data-type="series" checked={this.state.type==='series'} onChange={this.handllerFilter}/><span>Series</span></div> 
                <div><input type="radio" name="type"data-type="game" checked={this.state.type==='game'}onChange={this.handllerFilter}/><span >Games</span></div> 

            </div>
            </>
        )
    }
}
export default Search;