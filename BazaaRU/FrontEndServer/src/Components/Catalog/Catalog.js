import React from 'react';

import  {Post} from '../Post/Post.js';

export const Catalog = (props) => {

return (<ul>
            <li><Post postData={{username: 'yousof7984', 
                                prod_name: 'Brown Suede Sofa',
                                prod_image: 'http://www.eventsourcesolutions.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/r/brown_leather_and_microsuede_sectional.jpg', 
                                prod_price: 35, 
                                prod_category: 'furniture, delivery', 
                                prod_desc: 'Used for one year. Has normal wear and tear'}} /></li>
            <li><Post postData={{username: 'shajia1985', 
                                prod_name: 'Groceries for Fiesta!',
                                prod_image: 'https://static.vecteezy.com/system/resources/previews/000/273/542/original/online-food-order-concept-vector.jpg', 
                                prod_price: 50, 
                                prod_category: 'delivery', 
                                prod_desc: 'Need 50 corn tortillas, 20 cans of black beans, and bag of rice before May 5th, 2022 for a party I\'m throwing'}} /></li>
            <li><Post postData={{username: 'tobi457', 
                                prod_name: 'HP Dev One',
                                prod_image: 'https://betanews.com/wp-content/uploads/2022/06/HP_Dev_One-2-1200x900.jpg', 
                                prod_price: 350, 
                                prod_category: 'electronics,delivery', 
                                prod_desc: 'Selling because not a fan of the OS. Good condition.'}} /></li>
            <li><Post postData={{username: 'Andy', 
                                prod_name: 'Ergonomic mouse',
                                prod_image: 'https://i.pcmag.com/imagery/reviews/072aQ6BPesrs5Fjnoupt7Er-1.fit_scale.size_1028x578.v1608145735.jpg', 
                                prod_price: 140, 
                                prod_category: 'electronics,delivery', 
                                prod_desc: 'Don\'t Need it anymore. Great for students.'}} /></li>
            <li><Post postData={{username: 'Justyn C.', 
                                prod_name: 'Gutter Cleaning Needed on Hamilton St.!',
                                prod_image: 'https://t4.ftcdn.net/jpg/03/32/31/79/240_F_332317976_u6Adr5ppAiqOVTKrO3olr9rQ7AJDKzs4.jpg', 
                                prod_price: 100, 
                                prod_category: 'service',
                                prod_desc: 'Gutters are really dirty. Need someone with experience to clean them for me.'}} /></li>
    </ul>);

};