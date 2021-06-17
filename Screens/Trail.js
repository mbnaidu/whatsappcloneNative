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
	function Items() {
		const [items, setItems] = React.useState(null);

		React.useEffect(() => {
			db.transaction((tx) => {
			tx.executeSql(
				`select * from items`,
				[],
				(_, { rows: { _array } }) => setItems(_array)
			);
			});
		}, []);
	if (items === null || items.length === 0) {
		return null;
	}
	return (
		<View style={styles.sectionContainer}>
		<Text style={styles.sectionHeading}>Contacts</Text>
		{items.map((m) => (
			<TouchableOpacity
			key={m.id}
			style={{
				backgroundColor:"#fff",
				borderColor: "#000",
				borderWidth: 1,
				padding: 8,
			}}
			>
			<Text style={{ color:"#000" }}>{JSON.stringify(m)}</Text>
			</TouchableOpacity>
		))}
		</View>
	);
	}

	export default function Trail() {
	const [text, setText] = React.useState(null);
	const [forceUpdate, forceUpdateId] = useForceUpdate();
	const [allContacts,setAllContacts] = useState([]);
	useEffect(() => {
    (async () => {
			const { data } = await Contacts.getContactsAsync({
			fields: [Contacts.Fields.PhoneNumbers],
			});
			if (data.length > 0) {
				setAllContacts(data[2])
			}
		})();
	}, []);
	React.useEffect(() => {
		db.transaction((tx) => {
		tx.executeSql(
			"create table if not exists items (id integer primary key not null, phoneNumber int, name text);"
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
			// tx.executeSql("select * from items", [], (_, { rows }) =>
			// console.log(JSON.stringify(rows))
			// );
		},
		null,
		forceUpdate
		);
	};

	return (
		<View style={styles.container}>
		<Text style={styles.heading}>SQLite Example</Text>

		{Platform.OS === "web" ? (
			<View
			style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
			>
			<Text style={styles.heading}>
				Expo SQlite is not supported on web!
			</Text>
			</View>
		) : (
			<>
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
				<Items
				key={`forceupdate-todo-${forceUpdateId}`}
				/>
				{/* <Text>{JSON.stringify(allContacts.phoneNumbers[0].number)}</Text>
				<Text>{JSON.stringify(allContacts.phoneNumbers[0].id)}</Text> */}
			</ScrollView>
			</>
		)}
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