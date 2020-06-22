import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

import PeopleListItem from './PeopleListItem';

const PeopleList = props => {
	const { peoples, onPressItem } = props;
	let i = 0;
	return (
		<FlatList
			style={styles.container}
			data={peoples}
			renderItem={({ item }) => (
				<PeopleListItem
					people={item}
					navigateToPeopleDetail={onPressItem} />
			)}
			keyExtractor={(item) => item.name.first + i++} 
		/>
	);
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#88e1f2'
  },

})

export default PeopleList;