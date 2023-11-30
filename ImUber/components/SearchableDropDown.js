import React, { Fragment, useState } from 'react';
import { View, Text } from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';

const SearchableDropDown = ({placeholder}) => {

    const [selectedItem, setSelectedItem] = useState(null);
    const [data, setData] = useState([
        { id: 1, name: 'Option 1' },
        { id: 2, name: 'Option 2' },
        { id: 3, name: 'Option 3' },
    ]);

    const defaultValue = data.length > 0 ? data[0] : null;

  return (
    <View>
      <SearchableDropdown
        onItemSelect={(item) => {
          setSelectedItem(item);
        }}
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
  