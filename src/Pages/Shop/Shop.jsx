import React, { Component } from 'react';

import SHOP_DATA from './ShopData';
import CollectionPreview from '../../Components/CollectionPreview/CollectionPreview';

export default class Shop extends Component {
  state = {
    collections: SHOP_DATA
  };

  render() {
    const { collections } = this.state;
    return (
      <div>
        <h1>Shop Page</h1>
        {collections.map(({ id, ...otherCollection }) => (
          <CollectionPreview key={id} {...otherCollection} />
        ))}
      </div>
    );
  }
}
