import React from 'react';

import  {Post} from '../Post/Post.js';

export const TestResults = (props) => {
return (<ul>
    <li><Post postData={{username: 'yousof7984', 
                        prod_name: 'Brown Suede Sofa',
                        prod_image: 'http://www.eventsourcesolutions.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/r/brown_leather_and_microsuede_sectional.jpg', 
                        prod_price: 35, 
                        prod_category: 'furniture, delivery', 
                        prod_desc: 'Used for one year. Has normal wear and tear'}} /></li>
</ul>);

}