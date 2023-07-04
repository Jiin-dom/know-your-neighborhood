import axios from 'axios';
import React,{Component } from 'react';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

class Search  extends Component{
    constructor(props){
       super(props);
       this.state={
        keyword:'',
        searchResults:[]

       }
    }

keywordInput=(event)=>{
    this.setState({
        keyword:event.target.value
    })
}

searchCar=(event)=>{
   alert(
    "Keyword: " + this.state.keyword);
    event.preventDefault();

    axios.get('search?keyword='+this.state.keyword)
    .then((res)=>{
        console.log(res.data)
        this.setState({
        searchResults:res.data
        })
    })
    .catch((error)=>{
        console.log(error)
    })
   
}


    render(){

    const buildingResult =this.state.searchResults.map((building,key)=>

 

                <div className='skewed2'>
                    <div className='imageleft'>
                        <div>
                        
                            <img className='searchImg' src="assets\images\store1.jpg" alt=""></img>
                        </div>
                        
                    </div>
                    <div className='textInSkewed2'>
                        <h3>{building.store_name}</h3>
                        <p className='p1'>{building.store_type}</p>
                        <p className='p2'>{building.location}</p>
                        <p className='p3'>{building.store_contact}</p>
                    </div>
                </div>
            );
        return (
          <div>
            <div className="bannerSearch " id="home">
                
                <div class="container">
                    <h2 class="searchHead">Find Your Perfect Ride: Explore a World of Cars for Sale</h2>
                    <div class="searchforms">
                        <form onSubmit={this.searchCar}>
                                <div className="searchField">
                                    <input  value={this.state.keyword} onChange={this.keywordInput} type="text" className="form-control rounded searchInput "  id="searchInput" placeholder="Store name, type, or location" aria-label="Search" name="keyword" aria-describedby="search-addon" />
                                    <button type="submit" className="btn btn-warning " id="searchInput">Search</button>
                                </div>
                        </form>
                        
                        {/* <form onSubmit={this.searchPriceRange}>
                            <div>
                                <input  value={this.state.min} onChange={this.priceMinInput} type="search" className="form-control rounded searchInput " id="searchInput" placeholder="Minimum price" aria-label="Search" name="min" aria-describedby="search-addon" />
                                <input  value={this.state.max} onChange={this.priceMaxInput} type="search" className="form-control rounded searchInput" id="searchInput" placeholder="Maximum price" aria-label="Search" name="max" aria-describedby="search-addon" />
                                <button type="submit" className="btn btn-outline-warning " id="searchInput">Search</button>
                            </div>
                        </form> */}
                    </div>
                </div>
            </div>

            {/* <div className='container searchResults'>
                <div className='skewed2'>
                    <div className='imageleft'>
                        <div>
                        
                            <img className='searchImg' src="assets\images\store1.jpg" alt=""></img>
                        </div>
                        
                    </div>
                    <div className='textInSkewed2'>
                        <h3>Store Name</h3>
                        <p className='p1'>Store Type is whatevber</p>
                        <p className='p2'>Location</p>
                        <p className='p3'>Contact Number here</p>
                    </div>
                </div>
            </div> */}
            

            <div class="container searchResults">
                {buildingResult}
            </div>


            
          </div>

        )
}
}

export default Search;