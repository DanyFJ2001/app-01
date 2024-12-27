import { Button, Modal, StyleSheet, Text, Touchable, TouchableOpacity, View,Image } from 'react-native'
import React, { useState } from 'react'

export default function Tarjeta4(props: any) {
    const [visible, setvisible] = useState(false)

    return (
        <TouchableOpacity onPress={() => setvisible(true)}>
            <Text>{props.datos.name.first}</Text>

            <Modal visible={visible}>
                <View style={styles.modal}>
                    <Image style={styles.img}source={{uri: props.datos.images.main}} />
                    <Text style={styles.text}>{props.datos.name.first} {props.datos.name.last}</Text>
                    <Button title='Regresar' onPress={()=> setvisible(false)}/>

                </View>
            </Modal>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    modal: {
        backgroundColor: 'red',
        flex: 1
    },
    img:{
        width:250,
        height:400,
        resizeMode:'contain'
    },
    text:{
        fontSize:28
    }


})