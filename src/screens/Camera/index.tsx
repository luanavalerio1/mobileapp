import { Camera, CameraCapturedPicture, CameraType } from 'expo-camera';
import React, { useRef } from 'react';
import { useState } from 'react';
import { Button, Text, Image, View, Alert, TouchableOpacity } from 'react-native';
import { ComponentButtonInterface, ComponentButtonTakePicture } from '../../components';
import * as MediaLibrary from 'expo-media-library'
import * as ImagePicker from 'expo-image-picker'
import { styles } from "./styles"
import { Entypo } from '@expo/vector-icons';

interface IPhoto {
  height: string
  uri: string
  widht: string
}

export  function CameraScreen() {
  const [type, setType] = useState(CameraType.back);
  const [permissionCamera, requestPermissionCamera] = Camera.useCameraPermissions();
  const [permissionMedia, requestPermissionMedia] = MediaLibrary.usePermissions()
  const [photo, setPhoto] = useState<CameraCapturedPicture | ImagePicker.ImagePickerAsset>()
  const ref = useRef(null)
  const [takePhoto, setTakePhoto] = useState(false)

  if (!permissionCamera) {
    // Camera permissions are still loading
    return <View />;

  }

  if (!permissionCamera.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Clique para permitir o acesso a câmera</Text>
        <Button onPress={requestPermissionCamera} title="grant permission" />
      </View>

    );
  }
  if (!permissionMedia) {
    return <View />
  }
  if (!permissionMedia.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Clique para permitir o acesso a Mídia</Text>
        <Button onPress={requestPermissionMedia} title="grant permission" />
      </View>

    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  async function takePicture() {
    if (ref.current) {
      const picture = await ref.current.takePictureAsync()
      console.log(picture)
      setPhoto(picture)
    }
  }
  async function SavePhoto() {
    const asset = await MediaLibrary.createAssetAsync(photo!.uri)
    MediaLibrary.createAlbumAsync("Imagens", asset, false)
    Alert.alert("Imagens salva com sucesso!")
  }
  async function PickImage() {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    })
    if (!result.canceled) {
      setPhoto(result.assets[0])
    }

  }

  return (
    <View style={styles.container}>
      <>
      {takePhoto ? (
        
      )}
      </>


    </View>
  );
}