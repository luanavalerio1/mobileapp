import { Camera, CameraCapturedPicture, CameraType, FaceDetectionResult } from 'expo-camera';
import React from 'react';
import { useRef, useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import { Button, Text, Image, TouchableOpacity, View, Alert } from 'react-native';
import { ComponentButtonInterface, ComponentButtonTakePicture } from '../../components';
import { styles } from './styles';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import * as FaceDetector from 'expo-face-detector';
import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';

export function CameraScreen() {
  const [type, setType] = useState(CameraType.back);
  const [permissionCamera, requestPermissionCamera] = Camera.useCameraPermissions()
  const [photo, setPhoto] = useState<CameraCapturedPicture | ImagePicker.ImagePickerAsset>()
  const [permissionMedia, requestPermissionMedia] = MediaLibrary.usePermissions()
  const ref = useRef<Camera>(null)
  const [takePhoto, setTakePhoto] = useState(false)
  const [permissionQrCode, requestPermissionQrCode] = BarCodeScanner.usePermissions();
  const [scanned, setScanned] = useState(false);
  const [face, setFace] = useState<FaceDetector.FaceFeature>()

  if (!permissionCamera) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permissionCamera.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Nós precisamos da sua permissão para acessar sua câmera</Text>
        <Button onPress={requestPermissionCamera} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  async function takePicture() {
    if(ref.current) {
      const picture = await ref.current.takePictureAsync()
      setPhoto(picture)
      setTakePhoto(false)
    }
  }

  if (!permissionQrCode) {
    // QrCode permissions are still loading
    return <View />;
  }

  if (!permissionQrCode.granted) {
    // QrCode permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Nós precisamos da sua permissão para acessar seu leitor de QrCode</Text>
        <Button onPress={requestPermissionQrCode} title="grant permission" />
      </View>
    );
  }

  const handleBarCodeScanned = ( { type, data }: BarCodeScannerResult) => {
    setScanned(true);
    alert(data);
  }

  const handleFacesDetected = ({ faces }: FaceDetectionResult): void => {
    if (faces.length >0 ) {
      const faceDetect = faces[0] as FaceDetector.FaceFeature
      setFace(faceDetect)
    }else{
      setFace(undefined)
    }
    };


  if (!permissionMedia) {
    return <View />;
  }

  if (!permissionMedia.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Precisa de sua permissão para salvar a imagem</Text>
        <Button onPress={requestPermissionMedia} title="permita o acesso" />
      </View>
    );
  }

  async function savePhoto() {
    const asset = await MediaLibrary.createAssetAsync(photo!.uri)
    MediaLibrary.createAlbumAsync("Images", asset, false)
    Alert.alert("Imagem salva com sucesso!")    
  }

  async function pickImage() {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [3,4],
      quality: 1
    })
    if (!result.canceled) {
      setPhoto(result.assets[0])
    }
  }

  return (
  <>
    <View style={styles.container}>
        {takePhoto ? (
          <>
            <TouchableOpacity onPress={toggleCameraType} style={styles.button}>
              <Entypo name="cycle" size={42} color="black" />
            </TouchableOpacity>
            <View style={styles.sorriso}>
      {face&&face.smilingProbability && face.smilingProbability> 0.5?(
        <Text>Sorrindo</Text>
      ): (
        <Text>Não</Text>
      )}
    </View>
            <Camera style={styles.camera} type={type} ref={ref}
              onFacesDetected={handleFacesDetected}
              faceDetectorSettings={{
                mode: FaceDetector.FaceDetectorMode.accurate,
                detectLandMarks: FaceDetector.FaceDetectorLandmarks.all,
                runClassifications: FaceDetector.FaceDetectorClassifications.all,
                minDetectionInterval:1000,
                tracking:true,
              }}
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} />
              
            <ComponentButtonTakePicture onPress={takePicture} />
            <ComponentButtonInterface title="Scannear Novamente" type="primary" onPressI={() => setScanned(false)} />
          </>
        ) : (
          <>
            <ComponentButtonInterface title="Tirar foto" type="primary" onPressI={() => setTakePhoto(true)} />
            {photo && photo.uri && (
              <>
                <Image source={{ uri: photo.uri }} style={styles.img} />
                <ComponentButtonInterface title="Salvar imagem" type="primary" onPressI={savePhoto} />
              </>
            )}
            <ComponentButtonInterface title="Abrir imagem" type="primary" onPressI={pickImage} />
          </>
        )}

      </View></>
  );
}