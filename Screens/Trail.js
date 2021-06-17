import React, { useEffect, useState } from "react";
import { Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View,ActivityIndicator,} from "react-native";
import Constants from "expo-constants";
import * as SQLite from "expo-sqlite";
import * as Contacts from 'expo-contacts';



function openDatabase() {
	const db = SQLite.openDatabase("h.db");
	return db;
	}
	const db = openDatabase();
	export default function Trail() {
	const [text, setText] = React.useState(null);
	const [forceUpdate, forceUpdateId] = useForceUpdate();
	const [items, setItems] = React.useState(null);
	React.useEffect(() => {
		db.transaction((tx) => {
		tx.executeSql(
			"create table if not exists items (id integer primary key not null, phoneNumber int, name text);"
		);
		tx.executeSql("select * from items", [], (_, { rows: { _array } }) => setItems(_array)
			);
		});
	}, []);
	const add = (text) => {
		// is text empty?
		if (text === null || text === "") {
		return false;
		}
		db.transaction(
		(tx) => {
			tx.executeSql("insert into items (phoneNumber, name) values (?, ?)", [7981960932,text]);
			tx.executeSql("select * from items", [], (_, { rows: { _array } }) => setItems(_array)
			);
		},
		null,
		forceUpdate
		);
	};

	return (
		<View style={styles.container}>
		<Text style={styles.heading}>SQLite Example</Text>
			<View style={styles.flexRow}>
				<TextInput
				onChangeText={(text) => setText(text)}
				onSubmitEditing={() => {
					add(text);
					setText(null);
				}}
				placeholder="what do you need to do?"
				style={styles.input}
				value={text}
				/>
			</View>
			<ScrollView style={styles.listArea}>
				<Text>{JSON.stringify(items)}</Text>
			</ScrollView>
		</View>
	);
}

function useForceUpdate() {
	const [value, setValue] = useState(0);
	return [() => setValue(value + 1), value];
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		flex: 1,
		paddingTop: Constants.statusBarHeight,
	},
	heading: {
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "center",
	},
	flexRow: {
		flexDirection: "row",
	},
	input: {
		borderColor: "#4630eb",
		borderRadius: 4,
		borderWidth: 1,
		flex: 1,
		height: 48,
		margin: 16,
		padding: 8,
	},
	listArea: {
		backgroundColor: "#f0f0f0",
		flex: 1,
		paddingTop: 16,
	},
	sectionContainer: {
		marginBottom: 16,
		marginHorizontal: 16,
	},
	sectionHeading: {
		fontSize: 18,
		marginBottom: 8,
	},
});