import React, {Component, useState, useDispatch, useSelector} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
class Store extends Component{
        constructor(){
            super();
            this.state={
                "store_name":'',
                "store_type":'',
                "store_contact":'',
                "location":'',
                "photos":''
            }
        }
    
    
        store_nameReg=(event)=>{
            this.setState({
                store_name:event.target.value
            })
        }
        store_typeReg=(event)=>{
            this.setState({
                store_type:event.target.value
            })
        }
    
        store_contactReg=(event)=>{
            this.setState({
                store_contact:event.target.value
            })
        }
        locationReg=(event)=>{
            this.setState({
                location:event.target.value
            })
        }
        photosReg=(event)=>{
            this.setState({
                photos:event.target.value
            })
        }
    
        registerBuilding=(event)=>{
            alert(this.state.store_name + " " + this.state.store_type + " " + this.state.store_contact + " " + 
                this.state.location );
            axios.post('registerBuilding',this.state)
            .then(res=>{
                console.log(res.data);
            })
            .catch(error=>{
                console.log(error);
            })
        }

        ImageUplaoder = (props) =>{
            const dispatch = useDispatch();
            const [imageData, setImageData] = useState(null);
            const {image} = useSelector(state => state.uplaod)
       }
        

        

    render(){
        return(
            <div class="wrapper">
            <div class="container main">
                <div class="row">
                    <div class="col-md-6 side-imageStore">

                        <img src="" alt=""/>
                        <div class="text">
                            <p></p>
                        </div>
                    </div>

                    <div class="col-md-6 right">
                            <form onSubmit={this.registerBuilding}>
                            <div class="input-box">
                                <h2 class="formhead">Register Establishment</h2>
                                <div class="input-groupCar">
                                    <input type="text" class="input" id="store_name" value={this.state.store_name} onChange={this.store_nameReg} placeholder="Store name" required="required"/>
                                </div>

                                <div class="input-groupCar">
                                    <input type="text" class="input" id="contact" value={this.state.store_contact} onChange={this.store_contactReg} placeholder="Contact number" required="required"/>
                                </div>

                                <div class="input-groupCar">
                                    <input type="text" class="input" id="location" value={this.state.location} onChange={this.locationReg}  placeholder="Location" required="required"/>
                                </div>

                                <div class="input-groupCar mb-5">
                                    <label className='mb-2 mt-3' for="select">Establishment Type</label>
                                    <select id="select"  class="regSelect form-control regField" value={this.state.store_type} onChange={this.store_typeReg} required>
                                        <option value="Retail Stores ">Retail Stores</option>
                                        <option value="Restaurants and Cafes ">Restaurants and Cafes </option>
                                        <option value="Service Providers">Service Providers</option>
                                        <option value="Entertainment and Recreation">Entertainment and Recreation</option>
                                        <option value="Healthcare Facilities">Healthcare Facilities</option>
                                        <option value="Educational Institutions">Educational Institutions</option>
                                        <option value="Convenience Stores">Convenience Stores</option>
                                        <option value="Community Facilities">Community Facilities</option>
                                    </select>
                                </div>


                                <div class="input-groupCar">
                                    <hidden path="id" value=""/>
                                    <button type="submit" class="submit ">Register</button>
                                    
                                </div>
                                
                                    <div class="signin">
                                        <span>Want to view stores? <Link to="/store">View here</Link></span>
                                    </div>
                            </div>
                        </form>
                        </div>
                    
                </div>
            </div>

            {/* <script>
           $(document).ready(() => {
           	
               $("#photo").change(function () {
                   const file = this.files[0];
                   if (file) {
                       let reader = new FileReader();
                       reader.onload = function (event) {
                           $("#imgPreview")
                             .attr("src", event.target.result);
                       };
                       reader.readAsDataURL(file);
                   }
               });
           });
       </script> */}
        </div>
        
        )
    }
}
export default Store;