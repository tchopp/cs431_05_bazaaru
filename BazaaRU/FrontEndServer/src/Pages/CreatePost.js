//Create page here 
//Using JSX 
//1. Have input text boxes
//2. Have Submit button
//3. Generate Product ID and send to SQL server 

const Post = () =>{
    const handleSubmit = (e) => {
       return(<p1>You have sucessfully created a post!</p1>); 
    }
    return(
        <div postInformation= "Post Info">
            <h2>Fill out the information below to create a post. </h2>
            <form onSubmit={handleSubmit}>
                <label>Post Title</label>
                <input
                    type = "text"
                    required
                />


                <label>Post Description</label>
                <textarea
                    required
                ></textarea>


                <label>Price</label>
                <input
                    type = "number"
                    required
                />


                <label>Product Type</label>
                <select>
                    <option value="accessories">Accessories</option> 
                    <option value="clothing">Clothing</option>
                    <option value="service">Service</option>
                    <option value="household">Household Items</option>
                    <option value="shoes">Shoes</option>
                </select>

                <button>Submit</button>
            </form>
        </div>
    );
}
export default Post;