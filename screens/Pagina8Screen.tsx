import { useEffect, useState } from "react";
import { FlatList, TextInput, View, StyleSheet } from "react-native";
import Tarejta5 from "../components/Tarejta5";

export default function Pagina8Screen() {
    const [datos, setDatos] = useState([]);
    const [textoBusqueda, setTextoBusqueda] = useState(""); 

    useEffect(() => {
        async function leerArchivo() {
            const resp = await fetch("https://randomuser.me/api/?results=20");
            const json = await resp.json();
            setDatos(json.results); 
        }

        leerArchivo();
    }, []);

    const datosFiltrados = datos.filter(
        (item) =>
            textoBusqueda === "" || 
            item.gender.toLowerCase().includes(textoBusqueda.toLowerCase()) 
    );

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.txt}
                placeholder=""
                value={textoBusqueda}
                onChangeText={(text) => setTextoBusqueda(text)}
            />
            <FlatList
                data={datosFiltrados}
                renderItem={({ item }) => <Tarejta5 datos={item} />}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    txt: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 5,
        paddingHorizontal: 8,
    },
});
