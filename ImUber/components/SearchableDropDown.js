import React, { Fragment, useState } from 'react';
import { View, Text } from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';

const SearchableDropDown = ({placeholder}) => {
    const [data, setData] = useState([
        { id: 1, name: '新竹火車站' },
        { id: 2, name: '台灣積體電路製造十二廠P7' },
        { id: 3, name: '新竹高鐵站' },
        { id: 4, name: '國立清華大學' },
        { id: 5, name: '國立交通大學' },
        { id: 6, name: '新竹市政府' },
        { id: 7, name: '新竹巨城購物中心' },
    ]);
    const [selectedItem, setSelectedItem] = useState("");

    const defaultValue = data.length > 0 ? data[0] : null;

    const onItemSelect = (item) => {
      // Perform actions or update state when the value changes
      setSelectedItem(item);
      console.log('Selected Item:', item);
  };
    
  return (
    <View>
      <SearchableDropdown
        onItemSelect={onItemSelect}
        containerStyle={{ padding: 5 }}
        textInputStyle={{
          padding: 12,
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 5,
        }}
        itemStyle={{
          padding: 10,
          marginTop: 2,
          backgroundColor: '#ddd',
          borderColor: '#bbb',
          borderWidth: 1,
          borderRadius: 5,
        }}
        itemTextStyle={{ color: '#222' }}
        itemsContainerStyle={{ maxHeight: 140 }}
        items={data}
        defaultIndex={0}
        placeholder={selectedItem ? selectedItem.name : placeholder}
        resetValue={false}
        underlineColorAndroid="transparent"
      />
    </View>
  );
};
  
  export default SearchableDropDown;
  