import React from "react";
import { FlatList, View, Image } from "react-native";
import { IPage } from "../../../App";
import {
  ComponentButtonSlider,
  ComponentListMarker,
  ComponentTitleSlider,
} from "../../components";
import { styles } from "./styles";

export function Slider4({ setPageI }: IPage) {
  const image1 = require("../../assets/image8.png");
  const image2 = require("../../assets/image10.png");
  const image3 = require("../../assets/image9.png");
  const slide4Texts = [{ id: "1", text: "Sucos Naturais", img: image1 },
  { id: "2", text: "Água",  img: image2 },
  { id: "3", text: "Refrigerantes", img: image3 }];

  return (
    <>
    <View style={styles.container}>
      <View style={styles.panel}>
        <ComponentTitleSlider titleI="DRINKS"   />
        <FlatList
          data={slide4Texts}
          renderItem={({ item }) => (
            <ComponentListMarker key={item.id} textMarker={item.text} image={item.img} />
            
          )}
        />
      </View>
      <View style={styles.button}>
            <ComponentButtonSlider onPressI={() => setPageI(1)} />
            <ComponentButtonSlider onPressI={() => setPageI(2)} />
            <ComponentButtonSlider onPressI={() => setPageI(3)} />
            <ComponentButtonSlider onPressI={() => setPageI(4)} />
            <ComponentButtonSlider onPressI={() => setPageI(5)} />
      </View>
    </View>
    </>
  );
}